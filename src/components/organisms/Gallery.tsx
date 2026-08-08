import { ImageType } from "@/types/Definitions";
import { cookies } from "next/headers";
import { Card } from "../molecules/Card/Card";
import { createClient } from "@/utils/supabase/server";
export const dynamic = 'force-dynamic'
export default async function Gallery() {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)
    const { data } = await supabase.from('images').select('*').order('created_at', { ascending: false })

    if (!data) {
        return <div>No images found</div>
    }

    const images: ImageType[] = data
    return (
        <div className="grid grid-cols-1 gap-7 my-10">
            <div className="w-[95%] mx-auto columns-1 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5 gap-4">
                {images && images.map((image) => (
                    <Card key={image.original_filename + image.public_id} image={image} />
                ))}
            </div>
        </div>

    )
}
