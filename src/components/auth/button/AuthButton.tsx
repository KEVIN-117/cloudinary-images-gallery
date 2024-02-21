"use client"
import {GitHub} from "@/components/assets/icons/GitHub";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation'
import {GitLab} from "@/components/assets/icons/GitLab";
export function AuthButton() {
    const supabase = createClientComponentClient()
    const router = useRouter()
    const handleAuthGitHub = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL_PROVIDER}`
            }
        })

    }
    const handleAuthGitLab = async ()=>{
        await supabase.auth.signInWithOAuth({
            provider:"gitlab",
            options:{
                redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL_PROVIDER}`
            }
        })
    }

    return (
        <div className='flex flex-col gap-2 justify-center items-center w-full'>

            <button
                type="button"
                className="flex justify-evenly items-center w-full text-white border
                font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-[#050708]/30 me-2 mb-2"
                onClick={handleAuthGitHub}
            >
                <GitHub  height={30} width={30}/>
                Iniciar sesión con Github
            </button>

            <button
                type="button"
                className="flex justify-evenly items-center w-full text-white border
                font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-[#050708]/30 me-2 mb-2"
                onClick={handleAuthGitLab}
            >
                <GitLab height={30} width={30}/>
                Iniciar sesión con Gitlab
            </button>

        </div>
    )
}