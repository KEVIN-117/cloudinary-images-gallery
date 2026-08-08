import { ImageType } from "@/types/Definitions";
import { Card } from "../molecules/Card/Card";
import { cacheLife, cacheTag } from "next/cache";
import { createPublicClient } from "@/utils/supabase/public";

async function getGalleryImages(): Promise<ImageType[]> {
    "use cache";

    cacheLife("hours");
    cacheTag("gallery-images");

    const supabase = createPublicClient();

    const { data, error } = await supabase
        .from("images")
        .select("*")
        .order("created_at", { ascending: false })
        .range(0, 20);

    if (error) {
        throw new Error("Error fetching images from Supabase");
    }

    return data ?? [];
}

export default async function Gallery() {
    const images = await getGalleryImages();

    if (images.length === 0) {
        return <div>No images found</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-7 my-10">
            <div className="w-[95%] mx-auto columns-1 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5 gap-4">
                {images.map((image) => (
                    <Card
                        key={image.original_filename + image.public_id}
                        image={image}
                    />
                ))}
            </div>
        </div>
    );
}