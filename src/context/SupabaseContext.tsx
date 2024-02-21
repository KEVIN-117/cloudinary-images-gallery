"use client";
import { createContext, ReactNode } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {SupabaseContextType} from "@/types/Definitions";



export const SupabaseContext = createContext<SupabaseContextType | null>(null);
export async function SupabaseProvider({children}:{children: ReactNode}){
    const supabase = createClientComponentClient()
    const {data: {session}} = await supabase.auth.getSession()
    const value = {
        supabase,
        authSession: session
    }

    return(
        <SupabaseContext.Provider value={value}>
            {children}
        </SupabaseContext.Provider>
    )
}