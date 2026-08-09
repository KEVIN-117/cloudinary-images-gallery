"use server";
import { createClient } from "@/utils/supabase/server";
import { getBlurDataUrl } from "@/utils/cloudinary/uploader";
import { ImageType } from "@/types/Definitions";
import { cookies } from "next/headers";

export async function fetchImages(page: number, pageSize: number = 20): Promise<ImageType[]> {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        throw new Error("No autorizado");
    }

    const from = page * pageSize;
    const to = from + pageSize - 1;

    const { data, error } = await supabase
        .from("images")
        .select("*")
        .order("created_at", { ascending: false })
        .range(from, to);

    if (error) {
        throw new Error("Error fetching images");
    }

    // Generar blurDataUrl en paralelo si la base de datos no lo tiene guardado
    const imagesWithBlur = await Promise.all((data ?? []).map(async (img: ImageType) => {
        if (!img.blurImage) {
            try {
                img.blurImage = await getBlurDataUrl(img.public_id);
            } catch (err) {
                console.error("No se pudo generar blur para", img.public_id);
            }
        }
        return img;
    }));

    return imagesWithBlur;
}
