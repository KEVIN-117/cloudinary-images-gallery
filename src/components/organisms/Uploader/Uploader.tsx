"use client";

import { CheckCircleIcon, ImageIcon, Loader2Icon, UploadCloudIcon, XIcon } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import { uploadImagesAction } from "@/actions/upload";

export function Uploader() {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const newFiles = Array.from(e.dataTransfer.files).filter((file) =>
                file.type.startsWith("image/"),
            );
            setFiles((prev) => [...prev, ...newFiles]);
        }
    }, []);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files).filter((file) =>
                file.type.startsWith("image/"),
            );
            setFiles((prev) => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleUpload = async () => {
        if (files.length === 0) return;

        setIsUploading(true);
        setError(null);
        setUploadSuccess(false);

        const formData = new FormData();
        files.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const result = await uploadImagesAction(formData);
            if (result.success) {
                setUploadSuccess(true);
                setFiles([]);
                setTimeout(() => setUploadSuccess(false), 5000);
            } else {
                setError(result.error || "Ocurrió un error desconocido");
            }
        } catch (err: any) {
            setError(err.message || "Error de red al intentar comunicarse con el servidor.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 py-10">
            {/* Encabezado Principal */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 font-mono text-[10px] text-cyan-400 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    Módulo de Ingesta
                </div>
                <h1 className="bg-gradient-to-b from-white to-white/40 bg-clip-text font-bold text-4xl text-transparent tracking-tight md:text-5xl">
                    Sincronización de Archivos
                </h1>
                <p className="max-w-lg text-sm text-white/50 leading-relaxed md:text-base">
                    Transfiere tus imágenes al Vault. Selecciona o arrastra los archivos aquí para
                    iniciar la carga segura y su asimilación en la galería.
                </p>
            </div>

            {/* Mensajes de Estado */}
            {error && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-950/50 p-4 text-center font-medium text-rose-300 text-sm shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                    Fallo de Sistema: {error}
                </div>
            )}

            {uploadSuccess && (
                <div className="flex items-center justify-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-950/50 p-4 font-medium text-emerald-400 text-sm shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <CheckCircleIcon className="size-5" />
                    Transmisión completada exitosamente. Las imágenes han sido asimiladas.
                </div>
            )}

            {/* Área de Drop (Dropzone) */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-[2rem] border-2 border-dashed p-16 transition-all duration-300 ${
                    isDragging
                        ? "scale-[1.02] border-cyan-400 bg-cyan-950/20 shadow-[0_0_60px_rgba(34,211,238,0.2)]"
                        : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/5"
                }`}
            >
                {/* Glow ring interno */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-b from-transparent to-cyan-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    multiple
                    accept="image/*"
                    className="hidden"
                />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 rounded-full border border-white/5 bg-white/5 p-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                        <UploadCloudIcon
                            className={`size-10 ${isDragging ? "text-cyan-400" : "text-white/60 group-hover:text-cyan-300"}`}
                        />
                    </div>
                    <p className="mb-2 font-medium text-white/90 text-xl">
                        Inicia la transferencia
                    </p>
                    <p className="text-sm text-white/40">
                        Arrastra y suelta imágenes o haz click para explorar tu sistema local
                    </p>
                </div>
            </div>

            {/* Vista Previa de Archivos Seleccionados */}
            {files.length > 0 && (
                <div className="fade-in slide-in-from-bottom-4 animate-in space-y-6 duration-500">
                    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/40 p-4 backdrop-blur-md">
                        <h2 className="font-mono text-sm text-white/60 uppercase tracking-widest">
                            Archivos Listos{" "}
                            <span className="ml-2 text-cyan-400">[{files.length}]</span>
                        </h2>
                        <button
                            onClick={handleUpload}
                            disabled={isUploading}
                            className="group/btn relative flex items-center gap-2 overflow-hidden rounded-xl bg-cyan-500 px-6 py-2.5 font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isUploading && <Loader2Icon className="size-4 animate-spin" />}
                            {isUploading ? "Transfiriendo..." : "Iniciar Subida"}

                            {/* Brillo dinámico en el botón */}
                            <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-1000 ease-in-out group-hover/btn:translate-x-[100%]" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                        {files.map((file, idx) => (
                            <div
                                key={`${file.name}-${idx}`}
                                className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-2 transition-all hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]"
                            >
                                {/* Botón de eliminar */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFile(idx);
                                    }}
                                    className="absolute top-2 right-2 z-20 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur-md transition-all hover:bg-rose-500/80 group-hover:opacity-100"
                                >
                                    <XIcon className="size-3.5" />
                                </button>

                                <PreviewImage file={file} />

                                <div className="absolute inset-x-0 bottom-0 z-10 translate-y-2 bg-gradient-to-t from-black via-black/80 to-transparent p-3 opacity-80 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="truncate font-medium font-sans text-white/90 text-xs">
                                        {file.name}
                                    </p>
                                    <p className="mt-0.5 font-mono text-[10px] text-cyan-400/80">
                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// Componente helper para mostrar un thumbnail del archivo local con limpieza de memoria
function PreviewImage({ file }: { file: File }) {
    const [preview, setPreview] = useState<string | null>(null);

    React.useEffect(() => {
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    if (!preview) {
        return <ImageIcon className="size-8 text-white/20" />;
    }

    return (
        <img
            src={preview}
            alt="Preview"
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-40"
        />
    );
}
