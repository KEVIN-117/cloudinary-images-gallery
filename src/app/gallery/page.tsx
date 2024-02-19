import Gallery from "@/components/Home/Gallery";
import {Suspense} from "react";
export default function Page(){
    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
            </Suspense>
        </section>
    );
}