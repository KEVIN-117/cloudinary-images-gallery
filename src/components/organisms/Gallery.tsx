import { fetchImages } from "@/actions/gallery";
import { GalleryGrid } from "./GalleryGrid";

export default async function Gallery() {

    const images = await fetchImages(0, 10);

    if (images.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-white/50 font-mono text-sm">
                <div className="size-20 border border-white/5 bg-black/40 shadow-[0_0_30px_rgba(255,255,255,0.02)] rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl text-white/20">0</span>
                </div>
                <p className="tracking-widest uppercase">La bóveda está vacía</p>
                <p className="text-[10px] text-white/30 mt-2">Inicia una transferencia para poblar la galería.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="mb-8 flex items-center gap-4 border-b border-white/5 pb-4">
                <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 tracking-tight">
                    Archivo General
                </h1>
                <div className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60 font-mono text-xs">
                    {images.length} Registros Inciales
                </div>
            </div>
            <GalleryGrid initialImages={images} />
        </div>
    );
}