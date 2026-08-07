import Gallery from "@/components/organisms/Gallery";
import { Suspense } from "react";
import { ImageSkeletonContainer } from "@/components/molecules/Skeletons/Skeletons";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Page() {
    return (
        <section>
            <Suspense fallback={<ImageSkeletonContainer />}>
                <Gallery />
            </Suspense>
        </section>
    );
}
