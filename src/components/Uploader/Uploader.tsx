"use client"
import {CldUploadButton} from "next-cloudinary";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import {ImageType} from "@/types/Definitions";
import { useRouter } from "next/navigation"
import {useEffect, useState} from "react";
import { AbortAlert, SuccessAlert } from '@/components/Alert/Alert'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export function Uploader(){

    const supabase = createClientComponentClient({})
    const router = useRouter()
    const [alert, setAlert] = useState({
        component: <SuccessAlert message="Image uploaded successfully"/>,
        isOpen: false
    })
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
    useEffect(() => {
        setInterval(() => {
            setAlert({...alert, isOpen: false})
        }, 10000)

    }, [alert])
    return (
        <div className="flex justify-center items-center my-5" >
            <CldUploadButton
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onUpload={async (response) =>{
                    // @ts-ignore
                    await handleInsert(response.info)
                }}
                onSuccess={(response)=>{
                    setAlert({
                        component: <SuccessAlert message="Image uploaded successfully"/>,
                        isOpen: true
                    })
                }}
                onAbort={(response)=>{
                    setAlert({
                        component: <AbortAlert message="Image upload aborted"/>,
                        isOpen: true
                    })
                }}
                uploadPreset="opj7qpzs"

            />
            <Dialog open={alert.isOpen} modal={alert.isOpen} >
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.4-5.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4c0-.6-.4-1-1-1h-2Z"
                                      clipRule="evenodd"/>
                            </svg>

                            Alert
                        </DialogTitle>
                        <DialogDescription>
                            {alert.isOpen && alert.component}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


        </div>
    )
}