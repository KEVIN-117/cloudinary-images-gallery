import BentoFeatures from "@/components/organisms/BentoFeatures";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import NFTCarousel from "@/components/organisms/NFTCarousel";

export default function LandingTemplate() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
            {/* Ambient Glassmorphism Orbs - Vibrant Colors & Animation */}
            <div className="pointer-events-none fixed top-[-10%] left-[-10%] z-0 h-[40vw] w-[40vw] animate-pulse rounded-full bg-fuchsia-600/30 mix-blend-screen blur-[120px] filter" />
            <div
                className="pointer-events-none fixed right-[-10%] bottom-[-10%] z-0 h-[35vw] w-[35vw] animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-cyan-600/30 mix-blend-screen blur-[100px] filter"
                style={{ animationDelay: "2s" }}
            />
            <div
                className="pointer-events-none fixed top-[40%] left-[50%] z-0 h-[25vw] w-[25vw] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-violet-600/30 mix-blend-screen blur-[90px] filter"
                style={{ animationDelay: "1s" }}
            />

            <div className="relative z-10">
                <Navbar />

                <main className="flex flex-col gap-12 pt-24 pb-16">
                    <HeroSection />

                    <div className="w-full max-w-[100vw] overflow-hidden">
                        <NFTCarousel />
                    </div>

                    <BentoFeatures />
                </main>

                <footer className="border-white/10 border-t py-8 text-center text-muted-foreground text-sm backdrop-blur-xl">
                    <p>Built with Cloudinary & Supabase. Designed for the Edge.</p>
                </footer>
            </div>
        </div>
    );
}
