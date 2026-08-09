"use client";

import { useState } from "react";
import { ImageType } from "@/types/Definitions";
import { Card } from "../molecules/Card/Card";
import { fetchImages } from "@/actions/gallery";
import { Loader2Icon, SparklesIcon } from "lucide-react";

export function GalleryGrid({ initialImages }: { initialImages: ImageType[] }) {
    const [images, setImages] = useState<ImageType[]>(initialImages);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(initialImages.length === 10);

    const loadMore = async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const newImages = await fetchImages(page, 10);
            if (newImages.length < 10) {
                setHasMore(false);
            }
            const existingIds = new Set(images.map(img => img.id));
            const filteredNewImages = newImages.filter(img => !existingIds.has(img.id));

            setImages(prev => [...prev, ...filteredNewImages]);
            setPage(p => p + 1);
        } catch (error) {
            console.error("Error loading more images:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-10 my-4 w-full">
            <div className="w-full columns-1 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5 gap-6 space-y-6">
                {images.map((image) => (
                    <div key={image.id} className="break-inside-avoid animate-in fade-in zoom-in-95 duration-500">
                        <Card image={image} />
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center mt-12 mb-8">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="group relative px-8 py-3 rounded-full bg-black/40 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/60 hover:border-cyan-400 transition-all font-mono text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center gap-3 overflow-hidden backdrop-blur-md"
                    >
                        {loading ? (
                            <Loader2Icon className="size-4 animate-spin text-cyan-300" />
                        ) : (
                            <SparklesIcon className="size-4 text-cyan-500 group-hover:text-cyan-300 transition-colors" />
                        )}
                        <span className="relative z-10">{loading ? "Extrayendo Datos..." : "Cargar Archivo"}</span>

                        {/* Brillo dinámico en hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    </button>
                </div>
            )}

            {!hasMore && images.length > 0 && (
                <div className="flex flex-col items-center mt-12 mb-8 text-white/30 font-mono text-[10px] tracking-widest uppercase gap-2">
                    --- Fin del Archivo ---
                    <span>Total Imagenes: {images.length}</span>
                </div>
            )}
        </div>
    );
}
