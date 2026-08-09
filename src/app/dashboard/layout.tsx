import { DashboardSidebar } from "@/components/organisms/Sidebar/DashboardSidebar"
import { Separator } from "@/components/atoms/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/atoms/sidebar"

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export const instant = false;

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)

    // Extraer usuario y perfil
    const { data: { user } } = await supabase.auth.getUser()


    let userRole = 'viewer'
    if (user) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()
        console.log("profile", profile);

        if (profile) {
            userRole = profile.role
        }
    }

    return (
        <SidebarProvider>
            <DashboardSidebar userRole={userRole} userEmail={user?.email || "usuario@vault.io"} />
            <SidebarInset className="bg-black/50 overflow-hidden relative">
                {/* Background glow effects to maintain the Vault identity */}
                <div className="absolute top-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[25vw] h-[25vw] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none z-0" />

                <header className="flex h-16 shrink-0 items-center gap-2 border-b border-white/5 bg-black/20 backdrop-blur-xl relative z-10">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1 text-white/70 hover:text-cyan-400 hover:bg-white/5 transition-colors" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4 bg-white/10"
                        />
                        <div className="text-sm font-mono tracking-widest text-white/50 uppercase">
                            <span className="text-cyan-400 mr-2">SYS //</span> Terminal
                        </div>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-6 relative z-10 h-[calc(100vh-4rem)] overflow-y-auto">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
