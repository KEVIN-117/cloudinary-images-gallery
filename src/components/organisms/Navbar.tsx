import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fade-in slide-in-from-top-4 fixed top-0 right-0 left-0 z-50 animate-in px-4 py-4 duration-1000 md:px-8 md:py-6">
            <div className="glass-card mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:rounded-full">
                {/* Brand & System Status */}
                <div className="flex items-center gap-3">
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="relative h-7 w-7">
                            <Image
                                src="/icon.svg"
                                alt="Logo"
                                fill
                                className="object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]"
                            />
                        </div>
                        <span className="font-bold font-heading text-lg text-white tracking-tight transition-colors group-hover:text-cyan-400">
                            CloudGallery
                        </span>
                    </Link>
                    <div className="hidden items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-2 py-0.5 sm:flex">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="font-mono text-[10px] text-cyan-400/80 uppercase tracking-widest">
                            Sys.Online
                        </span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 font-medium text-muted-foreground text-sm md:flex">
                    <Link
                        href="#features"
                        className="group relative transition-colors hover:text-cyan-400"
                    >
                        Architecture
                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                    <Link
                        href="#gallery"
                        className="group relative transition-colors hover:text-fuchsia-400"
                    >
                        Archives
                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </div>

                {/* Action Center */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden font-mono text-muted-foreground text-xs transition-colors hover:text-white sm:block"
                    >
                        Authenticate
                    </Link>
                    <Link
                        href="/dashboard/gallery"
                        className="group relative overflow-hidden rounded-full border border-fuchsia-500/50 bg-black/20 px-5 py-2 font-semibold text-white text-xs shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(217,70,239,0.6)]"
                    >
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-violet-500/0 transition-transform duration-1000 group-hover:translate-x-full" />
                        <span className="relative z-10 flex items-center gap-2">
                            Access Vault
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
