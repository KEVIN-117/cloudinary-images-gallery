import {ImageType} from "@/types/Definitions";
import {Card} from "@/components/Card";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {Uploader} from "@/components/Uploader";
export const dynamic = 'force-dynamic'
export default async function Gallery() {
    const [supabase] = await Promise.all([createServerComponentClient({cookies})])
    const { data:{session} } = await supabase.auth.getSession()
    const {data} = await supabase.from('images').select('*')

    // @ts-ignore
    const images: ImageType[] = data

    return (
        <div className="grid grid-cols-1 gap-7 my-10">
            {session && <Uploader/>}
            <div className="w-[90%] mx-auto columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">

                {images && images.map((image) => (
                    <Card key={image.original_filename + image.public_id} image={image}/>
                ))}
            </div>
        </div>

    )
}