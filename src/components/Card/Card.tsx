"use client";
import Image from "next/image";
import {ImageType} from "@/types/Definitions";

export function Card({image}:{image: ImageType} ){


    return(
        <div
            key={image.public_id + image.original_filename}
            className="transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-105 after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
            <Image
                alt={image.public_id}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                //placeholder="blur"
                //blurDataURL={blurDataUrl}
                src={image.secure_url}
                width={image.width}
                height={image.height}
                unoptimized
            />
        </div>
    )
}
