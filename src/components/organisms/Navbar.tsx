import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-6 animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        
        {/* Brand & System Status */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7">
              <Image src="/icon.svg" alt="Logo" fill className="object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] transition-all duration-500" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">CloudGallery</span>
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/30 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">Sys.Online</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-cyan-400 transition-colors relative group">
            Architecture
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="#gallery" className="hover:text-fuchsia-400 transition-colors relative group">
            Archives
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-fuchsia-400 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* Action Center */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-xs font-mono text-muted-foreground hover:text-white transition-colors">
            Authenticate
          </Link>
          <Link 
            href="/dashboard/gallery" 
            className="relative overflow-hidden group rounded-full px-5 py-2 text-xs font-semibold text-white shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] transition-all duration-500 border border-fuchsia-500/50 bg-black/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-violet-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-2">
              Access Vault
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
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
