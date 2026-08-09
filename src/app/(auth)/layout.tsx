import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col overflow-hidden border-border bg-muted p-10 text-white lg:flex dark:border-r">
                {/* Dynamic Background */}
                <div className="absolute inset-0 overflow-hidden bg-background">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                    <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[40vw] w-[40vw] animate-pulse rounded-full bg-fuchsia-600/20 mix-blend-screen blur-[120px] filter" />
                    <div
                        className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[35vw] w-[35vw] animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-cyan-600/20 mix-blend-screen blur-[100px] filter"
                        style={{ animationDelay: "2s" }}
                    />
                </div>

                {/* Header */}
                <div className="relative z-20 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        <div className="relative h-8 w-8">
                            <Image
                                src="/icon.svg"
                                alt="Logo"
                                fill
                                className="object-contain drop-shadow-[0_0_8px_var(--color-primary)]"
                            />
                        </div>
                        <span className="font-bold font-heading text-xl tracking-tight">
                            CloudGallery
                        </span>
                    </Link>
                    <div className="animate-pulse rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-cyan-400/80 text-xs">
                        STATUS: SECURE
                    </div>
                </div>

                {/* Central Signature Visual */}
                <div className="relative z-20 flex flex-1 items-center justify-center">
                    <div className="glass-card group relative flex h-[600px] w-[600px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 shadow-[0_0_50px_rgba(217,70,239,0.15)] backdrop-blur-2xl">
                        <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-fuchsia-500/20 opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
                        <div className="absolute -inset-1/2 animate-[spin_10s_linear_infinite] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

                        <div className="relative mb-6 h-full w-full">
                            <Image
                                src="/icon.svg"
                                alt="Vault Core"
                                fill
                                className="object-contain opacity-90 drop-shadow-[0_0_20px_rgba(217,70,239,0.8)] transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div className="relative z-10 space-y-1 text-center">
                            <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
                                Core Access
                            </p>
                            <p className="font-heading font-semibold text-2xl text-white drop-shadow-md">
                                Vault_01
                            </p>
                        </div>

                        {/* Scanline effect */}
                        <div className="pointer-events-none absolute inset-0 h-[200%] w-full animate-[marquee_3s_linear_infinite] bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent mix-blend-overlay" />
                    </div>
                </div>

                {/* Footer Quote */}
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-3">
                        <p className="glass rounded-xl border border-white/10 bg-white/5 p-5 font-light text-lg text-white/90 leading-relaxed shadow-lg backdrop-blur-xl">
                            &ldquo;This vault is designed to outlive us. A cryptographically secure
                            archive for your most profound visual memories.&rdquo;
                        </p>
                        <footer className="flex items-center gap-2 pl-4 font-mono text-cyan-400/80 text-sm">
                            <span className="h-[1px] w-4 bg-cyan-400/50" />
                            The Architect
                        </footer>
                    </blockquote>
                </div>
            </div>

            <div className="flex min-h-screen items-center justify-center bg-background/50 lg:min-h-0 lg:p-8">
                <div className="glass-card mx-auto flex w-full flex-col justify-center space-y-6 rounded-2xl border-white/10 p-8 sm:w-[400px]">
                    {children}
                </div>
            </div>
        </div>
    );
}
