"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { uploadImage } from "@/utils/cloudinary/uploader";
import { createClient } from "@/utils/supabase/server";

export async function uploadImagesAction(formData: FormData) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // 1. Verificar autenticación
    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return { success: false, error: "No autorizado." };
    }

    // 2. Verificar rol (RBAC)
    const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    if (profile?.role !== "admin") {
        return {
            success: false,
            error: "Permisos insuficientes. Solo administradores pueden subir imágenes.",
        };
    }
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
        return { success: false, error: "No se seleccionaron archivos." };
    }

    try {
        const insertPromises = files.map(async (file) => {
            const result = await uploadImage(file);

            const { error: dbError } = await supabase.from("images").insert({
                path: result.cloudinaryResponse.secure_url,
                public_id: result.cloudinaryResponse.public_id,
                secure_url: result.cloudinaryResponse.secure_url,
                height: result.cloudinaryResponse.height,
                width: result.cloudinaryResponse.width,
                original_filename: result.cloudinaryResponse.original_filename,
                blurImage: result.blurDataUrl,
            });

            if (dbError) {
                console.error("DB Insert Error for", file.name, dbError);
                throw new Error(`Error al guardar ${file.name} en la base de datos`);
            }
        });

        await Promise.all(insertPromises);

        // Refrescar caché de la vista de galería para mostrar los nuevos assets
        revalidatePath("/dashboard/gallery");

        return { success: true, message: `Se subieron ${files.length} imágenes correctamente.` };
    } catch (error: any) {
        console.error("Upload error:", error);
        return { success: false, error: error.message || "Error al subir las imágenes." };
    }
}
