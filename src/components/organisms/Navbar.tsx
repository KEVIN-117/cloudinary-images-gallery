import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image src="/icon.svg" alt="Logo" fill className="object-contain drop-shadow-[0_0_8px_var(--color-primary)]" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">CloudGallery</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#gallery" className="hover:text-foreground transition-colors">Gallery</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="rounded-full text-xs">Sign In</Button>
          <Button className="rounded-full text-xs shadow-[0_0_10px_var(--color-primary)]">Launch App</Button>
        </div>
      </div>
    </nav>
  );
}
