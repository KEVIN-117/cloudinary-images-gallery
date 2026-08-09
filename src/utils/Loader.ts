import { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
    if (src.includes('/image/upload/')) {
        const parts = src.split('/image/upload/');
        // Inyectamos las transformaciones de optimización
        const transformations = `c_limit,w_${width},q_${quality || 'auto'},f_auto`;

        return `${parts[0]}/image/upload/${transformations}/${parts[1]}`;
    }
    return src;
}
