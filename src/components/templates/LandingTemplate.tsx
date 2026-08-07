import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import NFTCarousel from "@/components/organisms/NFTCarousel";
import BentoFeatures from "@/components/organisms/BentoFeatures";

export default function LandingTemplate() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground relative overflow-hidden">
      
      {/* Ambient Glassmorphism Orbs - Vibrant Colors & Animation */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-[pulse_4s_ease-in-out_infinite] pointer-events-none z-0" style={{ animationDelay: '2s' }} />
      <div className="fixed top-[40%] left-[50%] w-[25vw] h-[25vw] bg-violet-600/30 rounded-full mix-blend-screen filter blur-[90px] animate-[pulse_6s_ease-in-out_infinite] pointer-events-none z-0" style={{ animationDelay: '1s' }} />

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16 flex flex-col gap-12">
        <HeroSection />
        
        <div className="w-full max-w-[100vw] overflow-hidden">
          <NFTCarousel />
        </div>

        <BentoFeatures />
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/10 backdrop-blur-xl">
        <p>Built with Cloudinary & Supabase. Designed for the Edge.</p>
      </footer>
      </div>
    </div>
  );
}
