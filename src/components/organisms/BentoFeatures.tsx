import { Button } from "@/components/atoms/button";

export default function BentoFeatures() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-4 w-full">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Architected for <span className="text-gradient">Eternity</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          We don't just store pixels. We encode visual history using edge-optimized networks and uncompromising security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {/* Large Feature */}
        <div className="md:col-span-2 glass-card p-8 flex flex-col justify-between relative overflow-hidden group backdrop-blur-3xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-[80px] group-hover:bg-fuchsia-500/30 group-hover:scale-110 transition-all duration-700" />
          <div className="z-10">
            <p className="text-xs font-mono text-primary mb-2 tracking-wider uppercase">01 / Storage Layer</p>
            <h3 className="text-2xl font-semibold mb-2">Cloudinary Edge CDN</h3>
            <p className="text-muted-foreground max-w-md">
              Instantaneous delivery of digital assets globally. Lossless compression, on-the-fly transformations, and unmetered visual fidelity.
            </p>
          </div>
          <div className="z-10">
             <Button variant="outline" className="rounded-full px-6 glass text-xs tracking-wider">Read Specs</Button>
          </div>
        </div>

        {/* Medium Feature */}
        <div className="glass-card p-8 flex flex-col justify-between relative overflow-hidden group backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
           <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] group-hover:bg-cyan-500/40 group-hover:scale-125 transition-all duration-700" />
           <div className="z-10">
            <p className="text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">02 / Auth</p>
            <h3 className="text-xl font-semibold mb-2">Supabase SSR</h3>
            <p className="text-sm text-muted-foreground">
              Cryptographically secure, zero-trust authentication via cookies.
            </p>
          </div>
        </div>

        {/* Medium Feature */}
        <div className="glass-card p-8 flex flex-col justify-between relative overflow-hidden group backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
           <div className="absolute top-0 left-0 w-32 h-32 bg-violet-500/20 rounded-full blur-[50px] group-hover:bg-violet-500/40 group-hover:scale-125 transition-all duration-700" />
           <div className="z-10">
            <p className="text-xs font-mono text-violet-400 mb-2 tracking-wider uppercase">03 / State</p>
            <h3 className="text-xl font-semibold mb-2">App Router</h3>
            <p className="text-sm text-muted-foreground">
              Server-first rendering for absolute performance metrics.
            </p>
          </div>
        </div>

        {/* Large Feature */}
        <div className="md:col-span-2 glass-card p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
           <div className="z-10">
            <h3 className="text-3xl font-heading font-bold mb-4">Ready to Mint?</h3>
            <Button size="lg" className="rounded-xl px-12 shadow-[0_0_20px_var(--color-primary)] hover:shadow-[0_0_30px_var(--color-primary)]">
              Initialize Vault
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
