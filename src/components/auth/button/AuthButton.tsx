"use client"
import {GitHub} from "@/components/assets/icons/GitHub";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {LogoutLogo} from "@/components/assets/icons/Logout";
import {Session} from "@supabase/supabase-js";
import Image from "next/image";
import cloudinaryLoader from "@/utils/Loader";
import { useRouter } from 'next/navigation'
export function AuthButton({session}: {session: Session | null}) {
    const supabase = createClientComponentClient()
    const router = useRouter()
    const handleAuth = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }
        })

    }
    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <div className='flex gap-2 justify-center items-center'>

                <button
                    type="button"
                    className="text-white uppercase bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                    onClick={handleAuth}
                >
                    <GitHub/>
                    Sign in with Github
                </button>

        </div>
    )
}