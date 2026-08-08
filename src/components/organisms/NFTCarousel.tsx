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
    <section id="gallery" className="relative w-full overflow-hidden py-10 rotate-[-2deg] scale-105">
      {/* Edge Gradients for fading effect */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex w-[200%] animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] gap-6 px-4 will-change-transform transform-gpu">
        {[...IMAGES, ...IMAGES, ...IMAGES].map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] shrink-0 glass-card bg-white/5 overflow-hidden group cursor-pointer border border-white/10 hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all duration-500 transform-gpu backface-hidden"
          >
            {/* Holographic Inner Border Glow */}
            <div className="absolute inset-0 border-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none rounded-2xl mix-blend-overlay" />

            <Image
              src={src}
              alt={`NFT Drop Asset ${index}`}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />

            {/* Asset Overlay Data */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="text-xs text-primary font-mono tracking-widest mb-1">ASSET_ID: {(index * 1337).toString(16).toUpperCase()}</p>
              <h3 className="font-heading font-semibold text-white truncate">Void Memory #{index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
