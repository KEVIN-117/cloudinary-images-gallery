
import {Logo} from "@/components/assets/icons/Logo";
import {ReactNode} from "react";


export function AuthenticationLayout({children}:{children : ReactNode}) {
    return (
        <>
            <div
                className="border-2 w-[90%] mx-auto border-b-blue-700 md:h-[80vh] h-auto items-center justify-center my-5 overflow-hidden flex
                md:flex-row flex-col bg-background rounded-lg shadow-lg"
            >
                <div className="flex-1 flex justify-center items-center h-full flex-col p-10 text-white "
                     style={{
                         background: "url(/arch.jpg)",
                         objectFit: "cover",
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                     }}
                >
                    <div className='w-full h-full flex flex-col justify-center items-center'
                         style={{
                             background: "rgba(0, 0, 0, 0.5)",
                             backdropFilter: "blur(10px)",
                             borderRadius: "10px",
                         }}
                    >
                        <Logo width={300} heigth={300}/>
                        <div className="text-4xl font-extrabold text-center">
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                Future World
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-8">
                    {children}
                </div>
            </div>
        </>
    )
}
