"use client";

import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { fetchImages } from "@/actions/gallery";
import { Card } from "@/components/molecules/Card/Card";
import type { ImageType } from "@/types/Definitions";

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
            const existingIds = new Set(images.map((img) => img.id));
            const filteredNewImages = newImages.filter((img) => !existingIds.has(img.id));

            setImages((prev) => [...prev, ...filteredNewImages]);
            setPage((p) => p + 1);
        } catch (error) {
            console.error("Error loading more images:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-4 flex w-full flex-col gap-10">
            <div className="w-full columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="fade-in zoom-in-95 animate-in break-inside-avoid duration-500"
                    >
                        <Card image={image} />
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-12 mb-8 flex justify-center">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-cyan-500/30 bg-black/40 px-8 py-3 font-mono text-cyan-400 text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.1)] backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-950/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                    >
                        {loading ? (
                            <Loader2Icon className="size-4 animate-spin text-cyan-300" />
                        ) : (
                            <SparklesIcon className="size-4 text-cyan-500 transition-colors group-hover:text-cyan-300" />
                        )}
                        <span className="relative z-10">
                            {loading ? "Extrayendo Datos..." : "Cargar Archivo"}
                        </span>

                        {/* Brillo dinámico en hover */}
                        <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]" />
                    </button>
                </div>
            )}

            {!hasMore && images.length > 0 && (
                <div className="mt-12 mb-8 flex flex-col items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-widest">
                    --- Fin del Archivo ---
                    <span>Total Imagenes: {images.length}</span>
                </div>
            )}
        </div>
    );
}
