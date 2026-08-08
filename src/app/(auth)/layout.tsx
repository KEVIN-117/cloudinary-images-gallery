import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r border-border overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-background overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                    <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" style={{ animationDelay: '2s' }} />
                </div>

                {/* Header */}
                <div className="relative z-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="relative w-8 h-8">
                            <Image src="/icon.svg" alt="Logo" fill className="object-contain drop-shadow-[0_0_8px_var(--color-primary)]" />
                        </div>
                        <span className="font-heading font-bold tracking-tight text-xl">CloudGallery</span>
                    </Link>
                    <div className="font-mono text-xs text-cyan-400/80 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 animate-pulse">
                        STATUS: SECURE
                    </div>
                </div>

                {/* Central Signature Visual */}
                <div className="relative z-20 flex flex-1 items-center justify-center">
                    <div className="relative w-[600px] h-[600px] glass-card bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(217,70,239,0.15)] flex flex-col items-center justify-center overflow-hidden group p-10">
                        <div className="absolute inset-0 border-2 border-fuchsia-500/20 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="absolute -inset-1/2 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 animate-[spin_10s_linear_infinite]" />

                        <div className="relative w-full h-full mb-6">
                            <Image src="/icon.svg" alt="Vault Core" fill className="object-contain drop-shadow-[0_0_20px_rgba(217,70,239,0.8)] opacity-90 group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        <div className="text-center space-y-1 relative z-10">
                            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Core Access</p>
                            <p className="font-heading text-2xl font-semibold text-white drop-shadow-md">Vault_01</p>
                        </div>

                        {/* Scanline effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-[200%] w-full animate-[marquee_3s_linear_infinite] pointer-events-none mix-blend-overlay" />
                    </div>
                </div>

                {/* Footer Quote */}
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-3">
                        <p className="text-lg glass p-5 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg text-white/90 font-light leading-relaxed">
                            &ldquo;This vault is designed to outlive us. A cryptographically secure archive for your most profound visual memories.&rdquo;
                        </p>
                        <footer className="text-sm pl-4 text-cyan-400/80 font-mono flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-cyan-400/50" />
                            The Architect
                        </footer>
                    </blockquote>
                </div>
            </div>

            <div className="lg:p-8 flex items-center justify-center min-h-screen lg:min-h-0 bg-background/50">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] glass-card p-8 rounded-2xl border-white/10">
                    {children}
                </div>
            </div>
        </div>
    );
}
