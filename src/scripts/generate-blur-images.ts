import { createClient } from "@supabase/supabase-js";
import { v2 as cloudinary } from "cloudinary";

// Cargar variables de entorno locales desde .env.local o .env
import * as dotenv from "dotenv";
import { resolve } from "path";
dotenv.config({ path: resolve(process.cwd(), ".env") });
dotenv.config({ path: resolve(process.cwd(), ".env.local"), override: true });

// Configurar Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
// IMPORTANTE: Necesitamos el SERVICE_ROLE_KEY para ignorar RLS y actualizar todas las imágenes
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("❌ Faltan credenciales de Supabase en las variables de entorno.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

// Configurar Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

/**
 * Genera el blurDataUrl usando la API de Cloudinary
 */
async function getBlurDataUrl(publicId: string): Promise<string> {
    const url = cloudinary.url(publicId, {
        width: 10,
        quality: "auto",
        format: "webp",
        effect: "blur:1000",
        sign_url: true,
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
        console.error(`Error generando blur para ${publicId}:`, error);
        return "";
    }
}

async function run() {
    console.log("🔍 Buscando imágenes sin blurImage...");

    // Obtener imágenes donde blurImage sea nulo o esté vacío
    const { data: images, error } = await supabase
        .from("images")
        .select("id, public_id, blurImage")
        .or("blurImage.is.null,blurImage.eq.");

    if (error) {
        console.error("❌ Error al obtener imágenes:", error.message);
        process.exit(1);
    }

    if (!images || images.length === 0) {
        console.log("✅ Todas las imágenes ya tienen su blurImage.");
        process.exit(0);
    }

    console.log(`⏳ Se encontraron ${images.length} imágenes para procesar.`);

    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        console.log(`[${i + 1}/${images.length}] Procesando ${img.public_id}...`);

        const blurUrl = await getBlurDataUrl(img.public_id);

        if (blurUrl) {
            const { error: updateError } = await supabase
                .from("images")
                .update({ blurImage: blurUrl })
                .eq("id", img.id);

            if (updateError) {
                console.error(`❌ Error actualizando imagen ID ${img.id}:`, updateError.message);
            } else {
                console.log(`✅ blurImage actualizado para ${img.public_id}`);
            }
        } else {
            console.warn(`⚠️ No se pudo obtener el blur para ${img.public_id}. Saltando...`);
        }

        // Pequeño retardo para no saturar la API de Cloudinary/Supabase
        await new Promise((res) => setTimeout(res, 200));
    }

    console.log("🎉 Proceso completado exitosamente.");
}

run();
