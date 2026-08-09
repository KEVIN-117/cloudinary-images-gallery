import { fetchImages } from "@/actions/gallery";
import { GalleryGrid } from "./GalleryGrid";

export default async function Gallery() {
    const images = await fetchImages(0, 10);

    if (images.length === 0) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center font-mono text-sm text-white/50">
                <div className="mb-6 flex size-20 items-center justify-center rounded-full border border-white/5 bg-black/40 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                    <span className="text-2xl text-white/20">0</span>
                </div>
                <p className="uppercase tracking-widest">La bóveda está vacía</p>
                <p className="mt-2 text-[10px] text-white/30">
                    Inicia una transferencia para poblar la galería.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="mb-8 flex items-center gap-4 border-white/5 border-b pb-4">
                <h1 className="bg-gradient-to-r from-white to-white/50 bg-clip-text font-bold text-2xl text-transparent tracking-tight md:text-3xl">
                    Archivo General
                </h1>
                <div className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-white/60 text-xs">
                    {images.length} Registros Inciales
                </div>
            </div>
            <GalleryGrid initialImages={images} />
        </div>
    );
}
