import { ImageSkeleton } from "@/components/atoms/core/ImageSkeleton";


export function ImageSkeletonContainer() {
    return (
        <div className="w-[90%] mx-auto my-10">
            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
                <ImageSkeleton />
                <ImageSkeleton />
                <div className="md:block hidden">
                    <ImageSkeleton />
                    <ImageSkeleton />
                    <ImageSkeleton />
                    <ImageSkeleton />
                    <ImageSkeleton />
                    <ImageSkeleton />
                </div>
            </div>
        </div>
    )
}
