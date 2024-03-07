import { Link } from "react-router-dom"

function CompQuienes() {

    const links = [
        { name: 'Inicio', to: '/' },
        { name: 'Catalogo', to: '/catalogo' },
        { name: 'Acerca De..', to: '/acerca' },
    ]

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">¿Quienes Somos?</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    En Cortinas Sifotronicas, nos enorgullece ofrecer soluciones innovadoras en el mundo de las 
                    cortinas y persianas. Con una experiencia consolidada en el mercado y un compromiso 
                    inquebrantable con la calidad y el servicio al cliente, nos hemos convertido en líderes reconocidos 
                    en la industria.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    Fundada hace más de dos décadas, nuestra empresa ha estado a la vanguardia de la tecnología y 
                    el diseño en cortinas y persianas. Nos dedicamos a proporcionar productos que no solo 
                    satisfagan las necesidades prácticas de nuestros clientes, sino que también agreguen un toque 
                    de estilo y elegancia a cualquier espacio.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    Nuestro equipo está formado por profesionales altamente capacitados y apasionados por lo que 
                    hacemos. Desde diseñadores talentosos hasta técnicos expertos, cada miembro de nuestro 
                    equipo contribuye de manera única a nuestro éxito colectivo. Nos esforzamos por mantenernos 
                    actualizados con las últimas tendencias y avances en la industria para poder ofrecer a nuestros 
                    clientes productos de vanguardia que cumplan con sus expectativas más exigentes.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    En Cortinas Sifotronicas, la calidad es nuestra máxima prioridad. Nos asociamos con los mejores 
                    proveedores de materiales para garantizar que cada producto que sale de nuestras instalaciones 
                    cumpla con los más altos estándares de calidad y durabilidad. Además, llevamos a cabo rigurosos 
                    controles de calidad en cada etapa del proceso de fabricación para asegurarnos de que nuestros 
                    productos sean impecables en cada detalle.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                        <Link key={link.name} to={link.to}>
                            {link.name} <span aria-hidden="true">&rarr;</span>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompQuienes