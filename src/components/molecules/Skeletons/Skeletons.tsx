import { Skeleton } from "@/components/atoms/skeleton";

export function ImageSkeletonContainer() {
    // Array de alturas variadas predefinidas para simular perfectamente el layout Masonry
    // antes de que carguen las imágenes reales.
    const heights = [
        "h-[350px]",
        "h-[220px]",
        "h-[450px]",
        "h-[280px]",
        "h-[300px]",
        "h-[200px]",
        "h-[380px]",
        "h-[250px]",
        "h-[400px]",
        "h-[320px]",
        "h-[290px]",
        "h-[420px]",
        "h-[260px]",
        "h-[340px]",
        "h-[210px]",
    ];

    return (
        <div className="w-full">
            {/* Header Skeleton (Matches Gallery.tsx) */}
            <div className="mb-8 flex items-center gap-4 border-white/5 border-b pb-4">
                <Skeleton className="h-9 w-64 rounded-lg bg-white/10" />
                <Skeleton className="h-6 w-32 rounded-md bg-white/5" />
            </div>

            {/* Masonry Grid Skeleton */}
            <div className="my-4 flex w-full flex-col gap-10">
                <div className="w-full columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5">
                    {heights.map((h, i) => (
                        <div
                            key={i}
                            className="fade-in zoom-in-95 animate-in break-inside-avoid duration-700"
                            style={{ animationDelay: `${i * 50}ms` }}
                        >
                            <Skeleton className={`w-full ${h}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
