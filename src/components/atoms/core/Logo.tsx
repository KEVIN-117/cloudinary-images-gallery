import Image from "next/image";

export function Logo() {
    return (
        <div className="relative w-32 h-32 md:w-40 md:h-40 animate-loader-icon-float">
            <Image
                src="/icon.svg"
                alt="Cloudinary Image Gallery Logo"
                fill
                unoptimized
                className="object-contain drop-shadow-[0_0_20px_var(--color-primary)]"
            />
        </div>
    )
}