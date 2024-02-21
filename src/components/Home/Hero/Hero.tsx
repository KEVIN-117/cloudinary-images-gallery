import {Logo} from "@/components/assets/icons/Logo";

export default function Hero() {

    return (
        <div className="bg-white dark:bg-slate-900 overflow-hidden"
        >
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto flex flex-col justify-center items-center max-w-3xl py-40"                >
                    <div
                        className="relative text-center flex flex-col justify-center items-center rounded-full px-3 py-1 text-sm leading-6 text-gray-600
                        dark:text-gray-200
                        ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <Logo width={100} heigth={100}/>
                        bienvenido a nuestra galería de imágenes
                        <code className="text-xs font-bold text-gray-500 dark:text-gray-400">this change is in the test branch </code>
                    </div>
                    <div className="text-center ">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                Explora el Mundo a Través de Nuestras Imágenes
                            </span>

                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                            Sumérgete en un viaje visual único donde cada imagen cuenta una historia. Desde
                            impresionantes paisajes hasta momentos capturados con precisión, nuestra galería te invita a
                            descubrir la belleza del mundo a través de una colección cuidadosamente seleccionada de
                            fotografías. ¡Bienvenido a un universo de imágenes inspiradoras y emocionantes aventuras!
                        </p>

                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#06b6d4] to-[#0c4a6e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"
            >
                <div
                    className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
                    style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "10px",
                    }}
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                fillOpacity="0.7"/>
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6"/>
                                <stop offset={1} stopColor="#E935C1"/>
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Boost your productivity.
                            <br/>
                            Start using our app today.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                            sagittis vel nulla.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
