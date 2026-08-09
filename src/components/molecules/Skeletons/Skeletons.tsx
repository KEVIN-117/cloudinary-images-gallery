import { Skeleton } from "@/components/atoms/skeleton";

export function ImageSkeletonContainer() {
    // Array de alturas variadas predefinidas para simular perfectamente el layout Masonry
    // antes de que carguen las imágenes reales.
    const heights = [
        "h-[350px]", "h-[220px]", "h-[450px]", "h-[280px]", "h-[300px]", 
        "h-[200px]", "h-[380px]", "h-[250px]", "h-[400px]", "h-[320px]",
        "h-[290px]", "h-[420px]", "h-[260px]", "h-[340px]", "h-[210px]"
    ];

    return (
        <div className="w-full">
            {/* Header Skeleton (Matches Gallery.tsx) */}
            <div className="mb-8 flex items-center gap-4 border-b border-white/5 pb-4">
                <Skeleton className="h-9 w-64 rounded-lg bg-white/10" />
                <Skeleton className="h-6 w-32 rounded-md bg-white/5" />
            </div>

            {/* Masonry Grid Skeleton */}
            <div className="flex flex-col gap-10 my-4 w-full">
                <div className="w-full columns-1 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5 gap-6 space-y-6">
                    {heights.map((h, i) => (
                        <div key={i} className="break-inside-avoid animate-in fade-in zoom-in-95 duration-700" style={{ animationDelay: `${i * 50}ms` }}>
                            <Skeleton className={`w-full ${h}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
