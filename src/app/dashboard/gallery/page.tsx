import Gallery from "@/components/organisms/Gallery";
import { Suspense } from "react";
import { ImageSkeletonContainer } from "@/components/molecules/Skeletons/Skeletons";

export default function Page() {
    return (
        <section className="overflow-hidden">
            <Suspense fallback={<ImageSkeletonContainer />}>
                <Gallery />
            </Suspense>
        </section>
    );
}
