import { Link } from "react-router-dom"

function Inicio() {
    return (
        <>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Invertimos en el potencial de tus espacios con Cortinas Sifotronicas</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Aquí en Cortinas Sifotronicas nos enfocamos en mercados donde la tecnología, la innovación y el capital pueden desbloquear un valor a largo plazo y impulsar el crecimiento económico.</p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link to={"/quienes"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-500 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                            ¿Quienes Somos?
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link> 
                    </div> 
                </div>
            </section>
            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Cortinas Sifotronicas: Innovación en cada ventana.
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                        Este año, nuestras nuevas cortinas sifotronicas te brindarán refugio contra los elementos 
                        implacables de un mundo que no se preocupa si prosperas o desapareces.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                            <div className="flex items-center space-x-6 lg:space-x-8">
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                    <img
                                    src="https://images.unsplash.com/photo-1601056639638-c53c50e13ead?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src="https://images.unsplash.com/photo-1628428988931-14bc33099075?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src="https://images.unsplash.com/photo-1577926606472-fc6d3a33f7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ydGluYXN8ZW58MHx8MHx8fDA%3D"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src="https://images.unsplash.com/photo-1628428988849-8d93ef47c662?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src="https://images.unsplash.com/photo-1617238749996-ab4c0f9fba57?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src="https://images.unsplash.com/photo-1535542767117-80f7ebd0f082?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src="https://images.unsplash.com/photo-1577926896200-19ec4f29be5d?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <Link
                            to={"/catalogo"}
                            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                        >
                            Catalogo
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Transforma tus pagos con Cortinas Sifotronicas</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Desde el pedido hasta el cumplimiento de impuestos de ventas a nivel mundial, las empresas de todo el mundo confían en Cortinas Sifotronicas para simplificar su sistema de pagos.</p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://images.unsplash.com/photo-1557207058-b39dff7b121f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mockup" />
                    </div>                
                </div>
            </section>
        </>
    )
}

export default Inicio