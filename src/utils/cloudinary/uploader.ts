import { v2 as cloudinary, type UploadApiErrorResponse, type UploadApiResponse } from "cloudinary";
import { envValidator } from "@/utils/env";

cloudinary.config({
    cloud_name: envValidator.server.CLOUDINARY_CLOUD_NAME,
    api_key: envValidator.server.CLOUDINARY_API_KEY,
    api_secret: envValidator.server.CLOUDINARY_API_SECRET,
    secure: true,
});

/**
 * Genera un blurDataURL (placeholder base64) a partir del public_id de Cloudinary.
 * Esto descarga una versión muy reducida y borrosa de la imagen y la convierte a base64,
 * ideal para propósitos de "Lazy Loading" (Skeletons).
 */
export async function getBlurDataUrl(publicId: string): Promise<string> {
    const url = cloudinary.url(publicId, {
        width: 10, // Muy pequeño para minimizar tamaño del payload
        quality: "auto",
        format: "webp", // Formato más eficiente
        effect: "blur:1000", // Desenfoque directo desde la API de Cloudinary
        sign_url: true, // Firma la URL en caso de que Strict Transformations esté habilitado en Cloudinary
    });

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch blur image: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        return `data:image/webp;base64,${base64}`;
    } catch (error) {
        console.error("Error generating blur data URL:", error);
        return ""; // Fallback silencioso para no quebrar la app si falla
    }
}

export interface UploadResult {
    cloudinaryResponse: UploadApiResponse;
    blurDataUrl: string;
}

/**
 * Sube un archivo (File) a Cloudinary utilizando un stream y genera un BlurPlaceholder
 *
 * @param file - Objeto File proveniente de un FormData en Server Actions.
 * @returns Promesa que se resuelve con la respuesta de Cloudinary y el blurDataUrl.
 */
export async function uploadImage(file: File): Promise<UploadResult> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: envValidator.server.CLOUDINARY_FOLDER,
                ...(envValidator.server.CLOUDINARY_UPLOAD_PRESET && {
                    upload_preset: envValidator.server.CLOUDINARY_UPLOAD_PRESET,
                }),
                // quality_analysis: true, // (Requiere add-on, puede causar 403)
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {

                if (error || !result) {
                    return reject(error || new Error("Failed to upload image to Cloudinary"));
                }
                resolve(result);
            },
        );
        uploadStream.end(buffer);
    });

    // Generar el blurDataURL a partir de la imagen que acabamos de subir
    const blurDataUrl = await getBlurDataUrl(uploadResult.public_id);


    return {
        cloudinaryResponse: uploadResult,
        blurDataUrl,
    };
}
