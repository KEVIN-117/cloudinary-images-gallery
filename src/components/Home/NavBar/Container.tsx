import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import {NavBar} from "@/components/Home/NavBar/NavBar";
import {redirect} from "next/navigation";

export async function Container(){
    const supabase = await createServerComponentClient({cookies});
    const {data: {session}} = await supabase.auth.getSession();
    return <NavBar session={session} />
}