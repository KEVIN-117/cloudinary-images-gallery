import Image from "next/image";

// Array of images for the marquee (duplicated to create seamless loop)
const IMAGES = [
    "/LandingPage/LandingPageImg-1.avif",
    "/LandingPage/LandingPageImg-2.avif",
    "/LandingPage/LandingPageImg-3.avif",
    "/LandingPage/LandingPageImg-4.avif",
    "/LandingPage/LandingPageImg-5.avif",
    "/LandingPage/LandingPageImg-6.avif",
    "/LandingPage/LandingPageImg-7.avif",
];

export default function NFTCarousel() {
    return (
        <section
            id="gallery"
            className="relative w-full rotate-[-2deg] scale-105 overflow-hidden py-10"
        >
            {/* Edge Gradients for fading effect */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

            {/* Marquee Container */}
            <div className="flex w-[200%] transform-gpu animate-[marquee_40s_linear_infinite] gap-6 px-4 will-change-transform hover:[animation-play-state:paused]">
                {[...IMAGES, ...IMAGES, ...IMAGES].map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        className="glass-card group backface-hidden relative h-[400px] w-[300px] shrink-0 transform-gpu cursor-pointer overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] md:h-[450px] md:w-[350px]"
                    >
                        {/* Holographic Inner Border Glow */}
                        <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl border-2 border-cyan-400/30 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />

                        <Image
                            src={src}
                            alt={`NFT Drop Asset ${index}`}
                            fill
                            loading={index === 0 ? "eager" : "lazy"}
                            unoptimized
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                        />

                        {/* Asset Overlay Data */}
                        <div className="absolute right-0 bottom-0 left-0 z-20 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                            <p className="mb-1 font-mono text-primary text-xs tracking-widest">
                                ASSET_ID: {(index * 1337).toString(16).toUpperCase()}
                            </p>
                            <h3 className="truncate font-heading font-semibold text-white">
                                Void Memory #{index + 1}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
