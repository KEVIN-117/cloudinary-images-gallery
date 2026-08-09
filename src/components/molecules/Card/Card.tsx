"use client";

import { Dialog, Transition } from "@headlessui/react";
import { DownloadIcon, ExternalLinkIcon, Maximize2Icon, XIcon } from "lucide-react";
import Image from "next/image";
import { Fragment, useState } from "react";
import type { ImageType } from "@/types/Definitions";
import downloadPhoto from "@/utils/Downloader";
import cloudinaryLoader from "@/utils/Loader";

export function Card({ image }: { image: ImageType }) {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <button
                key={image.public_id + image.original_filename}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/5 bg-black/40 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                onClick={openModal}
            >
                {/* Glow Overlay on Hover */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <Image
                    alt={image.original_filename || image.public_id}
                    className="h-auto w-full transform rounded-2xl brightness-90 transition-all duration-700 will-change-transform group-hover:scale-105 group-hover:brightness-110"
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
                <div className="absolute right-0 bottom-0 left-0 z-20 flex translate-y-4 items-end justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex flex-col text-left">
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
                            {image.width}x{image.height}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
                            {image.id}
                        </span>
                    </div>
                    <div className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md">
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
                                <Dialog.Panel className="group/modal relative flex w-full max-w-6xl transform flex-col items-center justify-center transition-all">
                                    {/* Action Buttons Top Right */}
                                    <div className="absolute -top-12 right-0 z-50 flex gap-3 md:top-4 md:-right-16 md:flex-col">
                                        <button
                                            className="rounded-full border border-white/10 bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:border-rose-500 hover:bg-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                                            onClick={closeModal}
                                            title="Cerrar"
                                        >
                                            <XIcon className="size-5" />
                                        </button>
                                        <button
                                            className="rounded-full border border-white/10 bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:border-cyan-500 hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                            onClick={() => window.open(image.secure_url, "_blank")}
                                            title="Abrir Original"
                                        >
                                            <ExternalLinkIcon className="size-5" />
                                        </button>
                                        <button
                                            className="rounded-full border border-white/10 bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:border-fuchsia-500 hover:bg-fuchsia-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]"
                                            onClick={() =>
                                                downloadPhoto(
                                                    image.secure_url,
                                                    image.original_filename,
                                                )
                                            }
                                            title="Descargar"
                                        >
                                            <DownloadIcon className="size-5" />
                                        </button>
                                    </div>

                                    {/* Modal Image */}
                                    <div className="relative overflow-hidden rounded-lg shadow-[0_0_80px_rgba(34,211,238,0.1)] ring-1 ring-white/10">
                                        <Image
                                            alt={image.original_filename || image.public_id}
                                            className="max-h-[85vh] w-auto rounded-lg object-contain"
                                            src={image.secure_url}
                                            width={image.width}
                                            height={image.height}
                                            placeholder={image.blurImage ? "blur" : "empty"}
                                            blurDataURL={image.blurImage}
                                            loader={cloudinaryLoader}
                                        />
                                    </div>

                                    {/* Meta Info Bottom */}
                                    <div className="absolute right-0 -bottom-12 left-0 text-center opacity-0 transition-opacity duration-300 group-hover/modal:opacity-100">
                                        <p className="font-mono text-sm text-white/70">
                                            {image.original_filename}
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
