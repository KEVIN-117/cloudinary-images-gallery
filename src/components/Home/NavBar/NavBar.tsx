"use client";
import Link from "next/link";
import Image from "next/image";
import cloudinaryLoader from "@/utils/Loader";
import {LogoutLogo} from "@/components/assets/icons/Logout";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import {Session} from "@supabase/supabase-js";
import {Logo} from "@/components/assets/icons/Logo";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {Navigation} from "@/components/Home/NavBar/Navigation";
export function NavBar({session}:{session: Session | null}){
    const supabase = createClientComponentClient()
    const router = useRouter()
    const handleLogout = async ()=>{
        await supabase.auth.signOut()
        router.refresh()
    }

    return(
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Logo width={50} heigth={50}/>
                        <div className="text-2xl font-extrabold ">
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                Future World
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        {session === null ? (
                            <Link
                                href="/auth/login"
                                className="text-sm dark:text-blue-500 font-semibold leading-6 text-gray-900 border-2 rounded-md border-blue-700 py-2 px-3"
                            >
                                Login <span aria-hidden="true">&rarr;</span>
                            </Link>
                        ) : (
                            <>

                                <Menu as="div" className="relative">
                                    <div>
                                        <Menu.Button
                                            className="relative border-2 border-blue-800 flex rounded-full text-sm">
                                        <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <Image
                                                loader={cloudinaryLoader}
                                                unoptimized className="w-10 h-10 rounded-full"
                                                src={session?.user.user_metadata.avatar_url}
                                                alt=""
                                                height={40}
                                                width={40}
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute flex gap-y-2 flex-col justify-center right-0 z-10 mt-2 w-48 origin-top-right
                                        rounded-md  py-1 px-2 text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                                        p-4 mb-4 border-t-4 border-blue-300 bg-blue-50 dark:text-green-400 dark:bg-gray-800 dark:border-blue-800">
                                            <Menu.Item>
                                                <div
                                                    className="flex-1 font-medium dark:text-white text-center w-full mx-auto">
                                                    <div className="text-base font-extrabold ">
                                                              <span
                                                                  className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                                                {session?.user.user_metadata.name}
                                                              </span>
                                                    </div>
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <div className="flex-1 text-sm text-gray-500 dark:text-gray-400">{session?.user.user_metadata.user_name}</div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    href="/dashboard"
                                                    className="flex w-full text-white uppercase bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
                                                >
                                                    <span className='flex-1'>dashboard</span>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <button
                                                    type="button"
                                                    className="flex w-full text-white uppercase bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
                                                    onClick={handleLogout}
                                                >
                                                    <LogoutLogo/>
                                                    <span className='flex-1'>logout</span>
                                                </button>
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </>
                        )}
                    </div>
                </div>
                <Navigation/>
            </nav>

        </>

    )
}