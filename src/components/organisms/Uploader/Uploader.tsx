"use client"

import React, { useState, useRef, useCallback } from "react"
import { UploadCloudIcon, XIcon, ImageIcon, CheckCircleIcon, Loader2Icon } from "lucide-react"
import { uploadImagesAction } from "@/actions/upload"

export function Uploader() {
    const [files, setFiles] = useState<File[]>([])
    const [isDragging, setIsDragging] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const newFiles = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'))
            setFiles(prev => [...prev, ...newFiles])
        }
    }, [])

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files).filter(file => file.type.startsWith('image/'))
            setFiles(prev => [...prev, ...newFiles])
        }
    }

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index))
    }

    const handleUpload = async () => {
        if (files.length === 0) return

        setIsUploading(true)
        setError(null)
        setUploadSuccess(false)

        const formData = new FormData()
        files.forEach(file => {
            formData.append('files', file)
        })

        try {
            const result = await uploadImagesAction(formData)
            if (result.success) {
                setUploadSuccess(true)
                setFiles([])
                setTimeout(() => setUploadSuccess(false), 5000)
            } else {
                setError(result.error || "Ocurrió un error desconocido")
            }
        } catch (err: any) {
            setError(err.message || "Error de red al intentar comunicarse con el servidor.")
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 py-10">
            {/* Encabezado Principal */}
            <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Módulo de Ingesta
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
                    Sincronización de Archivos
                </h1>
                <p className="text-white/50 max-w-lg text-sm md:text-base leading-relaxed">
                    Transfiere tus imágenes al Vault. Selecciona o arrastra los archivos aquí para iniciar la carga segura y su asimilación en la galería.
                </p>
            </div>

            {/* Mensajes de Estado */}
            {error && (
                <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-300 text-center text-sm font-medium shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                    Fallo de Sistema: {error}
                </div>
            )}
            
            {uploadSuccess && (
                <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 flex items-center justify-center gap-3 text-sm font-medium shadow-[0_0_20px_rgba(16,185,129,0.1)]">
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
                className={`relative group cursor-pointer flex flex-col items-center justify-center p-16 rounded-[2rem] border-2 border-dashed transition-all duration-300 ${
                    isDragging
                        ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_60px_rgba(34,211,238,0.2)] scale-[1.02]"
                        : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/5"
                }`}
            >
                {/* Glow ring interno */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    multiple
                    accept="image/*"
                    className="hidden"
                />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="p-5 rounded-full bg-white/5 border border-white/5 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
                        <UploadCloudIcon className={`size-10 ${isDragging ? "text-cyan-400" : "text-white/60 group-hover:text-cyan-300"}`} />
                    </div>
                    <p className="text-xl font-medium text-white/90 mb-2">
                        Inicia la transferencia
                    </p>
                    <p className="text-sm text-white/40">
                        Arrastra y suelta imágenes o haz click para explorar tu sistema local
                    </p>
                </div>
            </div>

            {/* Vista Previa de Archivos Seleccionados */}
            {files.length > 0 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/60">
                            Archivos Listos <span className="text-cyan-400 ml-2">[{files.length}]</span>
                        </h2>
                        <button
                            onClick={handleUpload}
                            disabled={isUploading}
                            className="relative px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 overflow-hidden group/btn"
                        >
                            {isUploading && <Loader2Icon className="size-4 animate-spin" />}
                            {isUploading ? "Transfiriendo..." : "Iniciar Subida"}
                            
                            {/* Brillo dinámico en el botón */}
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {files.map((file, idx) => (
                            <div key={`${file.name}-${idx}`} className="group relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 aspect-square flex flex-col items-center justify-center p-2 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all">
                                {/* Botón de eliminar */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        removeFile(idx)
                                    }}
                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 hover:bg-rose-500/80 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-20"
                                >
                                    <XIcon className="size-3.5" />
                                </button>
                                
                                <PreviewImage file={file} />
                                
                                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent z-10 translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all">
                                    <p className="text-xs text-white/90 truncate font-sans font-medium">{file.name}</p>
                                    <p className="text-[10px] text-cyan-400/80 font-mono mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// Componente helper para mostrar un thumbnail del archivo local con limpieza de memoria
function PreviewImage({ file }: { file: File }) {
    const [preview, setPreview] = useState<string | null>(null)

    React.useEffect(() => {
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    if (!preview) {
        return <ImageIcon className="size-8 text-white/20" />
    }

    return (
        <img 
            src={preview} 
            alt="Preview" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
        />
    )
}
