import {ImageSkeletonContainer} from "@/components/Skeletons/Skeletons";
import Hero from "@/components/Home/Hero/Hero";


// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;


export default async function Home(){
      return (
        <main className='relative'>
            <Hero />
        </main>
      );
}
