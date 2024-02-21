"use client"
import {CldUploadButton} from "next-cloudinary";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import {ImageType} from "@/types/Definitions";
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2'

import {Upload} from "@/components/assets/icons/Upload";


export function Uploader(){

    const supabase = createClientComponentClient({})
    const router = useRouter()

    const handleInsert = async (image: ImageType ) => {
        await supabase.from('images').insert({
            path: image.path,
            public_id: image.public_id,
            original_filename: image.original_filename,
            secure_url: image.secure_url,
            width: image.width,
            height: image.height
        })
        router.refresh()
    };

    return (
        <div className="flex justify-center items-center my-5" >
            <CldUploadButton
                className="bg-blue-500 flex justify-center items-center gap-2 text-white font-bold py-2 px-4 rounded"
                onUpload={async (response) => {
                    // @ts-ignore
                    await handleInsert(response.info)
                }}
                onAbort={(response) => {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Image upload aborted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }}

                onError={(response) => {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Image upload failed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }}
                uploadPreset="opj7qpzs"


            >
                <Upload /> Upload Image
            </CldUploadButton>

        </div>
    )
}