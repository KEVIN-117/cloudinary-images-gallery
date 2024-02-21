
import { CalendarDaysIcon, HandRaisedIcon,  } from '@heroicons/react/24/outline'
import {Facebook, YouTube, Twitter} from "@/components/assets/icons/Brands";
import {Logo} from "@/components/assets/icons/Logo";


export default function Footer() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-9"
            style={{
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
            }}
        >
            <div className="mx-auto max-w-full px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-2xl px-4 py-4 flex flex-col justify-center items-center"
                         style={{
                             background: "rgba(0, 0, 0, 0.5)",
                             backdropFilter: "blur(10px)",
                             borderRadius: "10px",
                         }}
                    >
                        <div className="flex justify-center items-center"
                        ><Logo width={100} heigth={100}/></div>

                        <p className="mt-4 text-lg text-center leading-8 text-gray-300">
                            ¡Gracias por navegar a través de nuestro mundo visual! En nombre de
                            <span
                                className="mx-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                Future World
                            </span>
                            , nos apasiona compartir momentos que inspiran, cautivan y hacen que la imaginación vuele.
                            Desde paisajes majestuosos hasta retratos íntimos.
                        </p>
                        <div className="flex-1 w-full mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className=" flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <dl className="flex md:flex-row flex-col gap-5">
                        <div className="flex-1 flex flex-col items-start px-4 py-4 "
                             style={{
                                 background: "rgba(0, 0, 0, 0.5)",
                                 backdropFilter: "blur(10px)",
                                 borderRadius: "10px",
                             }}
                        >
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                cada imagen cuenta una historia única. No
                                te pierdas ni un solo clic: únete a nuestra comunidad y sumérgete en un océano de
                                creatividad.
                            </dd>
                        </div>
                        <div className="flex-1 flex flex-col items-start px-4 py-4 "
                             style={{
                                 background: "rgba(0, 0, 0, 0.5)",
                                 backdropFilter: "blur(10px)",
                                 borderRadius: "10px",
                             }}
                        >
                            <dt className="mt-4 font-semibold text-white">Conecta con nosotros</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                ¡Nos encantaría escuchar tu opinión, sugerencias o simplemente charlar sobre el
                                arte de la fotografía! Conecta con nosotros en las redes sociales o envíanos un mensaje.
                                ¡Que la luz siempre esté de tu lado en tus aventuras fotográficas!
                            </dd>
                            <div className="flex justify-center items-center w-full my-5 gap-5">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <Facebook/>
                                </div>
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <YouTube/>
                                </div>
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <Twitter/>
                                </div>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}
