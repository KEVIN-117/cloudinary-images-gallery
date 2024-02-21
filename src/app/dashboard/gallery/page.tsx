import Gallery from "@/components/Home/Gallery";
import {Suspense} from "react";
import {ImageSkeletonContainer} from "@/components/Skeletons/Skeletons";
export default function Page(){
    return (
        <section>
            <Suspense fallback={<ImageSkeletonContainer />}>
                <Gallery />
            </Suspense>
        </section>
    );
}