import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import {AuthButton} from "@/components/auth/button/AuthButton";

export const dynamic = 'force-dynamic';
export default async function ServerAction(){
    const [supabase] = await Promise.all([createServerComponentClient({cookies})])
    const {data: {session}} = await supabase.auth.getSession()

    return <AuthButton session={session} />
}