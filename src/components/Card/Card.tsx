"use client";
import Image from "next/image";
import {ImageType, SupabaseContextType} from "@/types/Definitions";
import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useContext, useState} from 'react'
import downloadPhoto from "@/utils/Downloader";
import { useRouter } from "next/navigation"
import Swal from "sweetalert2";
import {SupabaseContext} from "@/context/SupabaseContext";
export function Card({image}:{image: ImageType} ){
    const { supabase, authSession } = useContext<SupabaseContextType | any>(SupabaseContext)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    async function deleteImage(Image: ImageType){
        const { error} = await supabase.from('images').delete().eq('public_id', Image.public_id)
        if (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Image delete failed",
                showConfirmButton: false,
                timer: 1500
            });
        }else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Image deleted",
                showConfirmButton: false,
                timer: 1500
            });
        }
        router.refresh()
    }
    return(
        <>
            <button
                key={image.public_id + image.original_filename}
                className="transition ease-in-out hover:shadow-red-700 shadow-xl delay-200 hover:-translate-y-1 hover:scale-105
            after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0
            after:rounded-lg after:shadow-highlight"
                onClick={openModal}
            >
                <Image
                    alt={image.public_id}
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    style={{transform: "translate3d(0, 0, 0)"}}
                    //placeholder="blur"
                    //blurDataURL={blurDataUrl}
                    src={image.secure_url}
                    width={image.width}
                    height={image.height}
                    unoptimized
                />
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div
                            className="relative flex min-h-full items-center justify-center p-4 text-center blur-smooth bg-black/25 backdrop-filter backdrop-blur-lg"
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-xl transform overflow-hidden rounded-2xl
                                    p-2 shadow-xl transition-all
                                    text-left align-middle">
                                    <img
                                        alt={image.public_id}
                                        className={`transform rounded-lg md:h-[90vh] h-auto brightness-90 transition will-change-auto group-hover:brightness-110 delay-200 hover:-translate-y-1 hover:scale-105`}
                                        style={{
                                            transform: "translate3d(0, 0, 0)",
                                            boxShadow: "0 0 40px #7895B3",
                                        }}
                                        src={image.secure_url}
                                        width={image.width }
                                        height={image.height}
                                    />
                                    <div
                                        className="absolute top-0 w-[98%] pt-2 flex justify-between p-2">

                                        <div className='flex flex-col gap-1'>
                                            <button className='bg-indigo-950 rounded-full p-2' onClick={closeModal}>
                                                <svg className="w-10 h-10 text-white"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                            </button>
                                            {authSession && (<button
                                                className='bg-indigo-950 rounded-full p-2'
                                                onClick={async () => {
                                                    await deleteImage(image)
                                                }}
                                            >
                                                <svg className="w-10 h-10 text-gray-800 dark:text-white"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                     fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                          d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                                          clipRule="evenodd"/>
                                                </svg>

                                            </button>)}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <button
                                                className='bg-indigo-950 rounded-full p-2'
                                                onClick={() => window.open(image.secure_url, "_blank")}
                                            >
                                                <svg className="w-10 h-10 text-white" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round"
                                                          strokeLinejoin="round" strokeWidth="2"
                                                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"/>
                                                </svg>
                                            </button>
                                            <button
                                                className='bg-indigo-950 rounded-full p-2'
                                                onClick={() => downloadPhoto(image.secure_url, image.original_filename)}
                                            >
                                                <svg className="w-10 h-10 text-white"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"/>
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>

                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
