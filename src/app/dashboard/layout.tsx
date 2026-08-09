import { cookies } from "next/headers";
import { Separator } from "@/components/atoms/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/atoms/sidebar";
import { DashboardSidebar } from "@/components/organisms/Sidebar/DashboardSidebar";
import { createClient } from "@/utils/supabase/server";

export const instant = false;

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Extraer usuario y perfil
    const {
        data: { user },
    } = await supabase.auth.getUser();

    let userRole = "viewer";
    if (user) {
        const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", user.id)
            .single();

        if (profile) {
            userRole = profile.role;
        }
    }

    return (
        <SidebarProvider>
            <DashboardSidebar userRole={userRole} userEmail={user?.email || "usuario@vault.io"} />
            <SidebarInset className="relative overflow-hidden bg-black/50">
                {/* Background glow effects to maintain the Vault identity */}
                <div className="pointer-events-none absolute top-[-10%] left-[-10%] z-0 h-[30vw] w-[30vw] rounded-full bg-fuchsia-600/10 mix-blend-screen blur-[120px] filter" />
                <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] z-0 h-[25vw] w-[25vw] rounded-full bg-cyan-600/10 mix-blend-screen blur-[100px] filter" />

                <header className="relative z-10 flex h-16 shrink-0 items-center gap-2 border-white/5 border-b bg-black/20 backdrop-blur-xl">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1 text-white/70 transition-colors hover:bg-white/5 hover:text-cyan-400" />
                        <Separator orientation="vertical" className="mr-2 h-4 bg-white/10" />
                        <div className="font-mono text-sm text-white/50 uppercase tracking-widest">
                            <span className="mr-2 text-cyan-400">SYS {/*  */}</span> Terminal
                        </div>
                    </div>
                </header>
                <div className="relative z-10 flex h-[calc(100vh-4rem)] flex-1 flex-col gap-4 overflow-y-auto p-6">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
