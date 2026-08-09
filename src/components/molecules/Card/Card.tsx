"use client";

import Image from "next/image";
import { ImageType } from "@/types/Definitions";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import downloadPhoto from "@/utils/Downloader";
import cloudinaryLoader from "@/utils/Loader";
import { DownloadIcon, ExternalLinkIcon, XIcon, Maximize2Icon } from "lucide-react";

export function Card({ image }: { image: ImageType }) {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <button
                key={image.public_id + image.original_filename}
                className="group relative block w-full cursor-zoom-in rounded-2xl overflow-hidden bg-black/40 border border-white/5 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1"
                onClick={openModal}
            >
                {/* Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <Image
                    alt={image.original_filename || image.public_id}
                    className="w-full h-auto transform rounded-2xl brightness-90 transition-all duration-700 will-change-transform group-hover:brightness-110 group-hover:scale-105"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    // Usamos el placeholder blur que viene de la BD o generado al vuelo
                    placeholder={image.blurImage ? "blur" : "empty"}
                    blurDataURL={image.blurImage}
                    src={image.secure_url}
                    width={image.width}
                    height={image.height}
                    loader={cloudinaryLoader}
                />

                {/* Hover UI Elements */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-end">
                    <div className="flex flex-col text-left">
                        <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">{image.width}x{image.height}</span>
                        <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">{image.id}</span>
                    </div>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white">
                        <Maximize2Icon className="size-4" />
                    </div>
                </div>
            </button>

            {/* Modal de visualización */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {/* Background Overlay */}
                        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 md:p-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-400 cubic-bezier(0.16, 1, 0.3, 1)"
                                enterFrom="opacity-0 scale-95 translate-y-4"
                                enterTo="opacity-100 scale-100 translate-y-0"
                                leave="ease-in duration-300"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-6xl transform transition-all flex flex-col items-center justify-center group/modal">

                                    {/* Action Buttons Top Right */}
                                    <div className="absolute -top-12 right-0 md:top-4 md:-right-16 flex md:flex-col gap-3 z-50">
                                        <button
                                            className="p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-rose-500 hover:border-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] backdrop-blur-md transition-all"
                                            onClick={closeModal}
                                            title="Cerrar"
                                        >
                                            <XIcon className="size-5" />
                                        </button>
                                        <button
                                            className="p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-md transition-all"
                                            onClick={() => window.open(image.secure_url, "_blank")}
                                            title="Abrir Original"
                                        >
                                            <ExternalLinkIcon className="size-5" />
                                        </button>
                                        <button
                                            className="p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] backdrop-blur-md transition-all"
                                            onClick={() => downloadPhoto(image.secure_url, image.original_filename)}
                                            title="Descargar"
                                        >
                                            <DownloadIcon className="size-5" />
                                        </button>
                                    </div>

                                    {/* Modal Image */}
                                    <div className="relative rounded-lg overflow-hidden ring-1 ring-white/10 shadow-[0_0_80px_rgba(34,211,238,0.1)]">
                                        <Image
                                            alt={image.original_filename || image.public_id}
                                            className="max-h-[85vh] w-auto object-contain rounded-lg"
                                            src={image.secure_url}
                                            width={image.width}
                                            height={image.height}
                                            placeholder={image.blurImage ? "blur" : "empty"}
                                            blurDataURL={image.blurImage}
                                            loader={cloudinaryLoader}
                                        />
                                    </div>

                                    {/* Meta Info Bottom */}
                                    <div className="absolute -bottom-12 left-0 right-0 text-center opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300">
                                        <p className="text-white/70 font-mono text-sm">{image.original_filename}</p>
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
