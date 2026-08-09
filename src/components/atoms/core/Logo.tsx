import Image from "next/image";

export function Logo() {
    return (
        <div className="relative h-32 w-32 animate-loader-icon-float md:h-40 md:w-40">
            <Image
                src="/icon.svg"
                alt="Cloudinary Image Gallery Logo"
                fill
                unoptimized
                className="object-contain drop-shadow-[0_0_20px_var(--color-primary)]"
            />
        </div>
    );
}
