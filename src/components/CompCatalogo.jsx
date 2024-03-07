import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        name: 'Cortina Melbourne Victima',
        href: '/articulos/cortinaMelbourne',
        imageSrc: 'https://images.unsplash.com/photo-1577926606472-fc6d3a33f7e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortina Melbourne Victima",
        color: 'Naranja',
    },
    {
        id: 2,
        name: 'Cortina de Limo',
        href: '/articulos/cortinaLimo',
        imageSrc: 'https://images.unsplash.com/photo-1628428988931-14bc33099075?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortina de Limo",
        color: 'Verde Limo',
    },
    {
        id: 3,
        name: 'Cortinas Academias Australianas',
        href: '/articulos/cortinaAcademias',
        imageSrc: 'https://images.unsplash.com/photo-1577926866949-c1ed2147d862?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortinas Academias Australianas",
        color: 'Blanco Humo',
    },
    {
        id: 4,
        name: 'Cortinas de Pantalla Blanca',
        href: '/articulos/cortinaPantallaBlanca',
        imageSrc: 'https://images.unsplash.com/photo-1573507811472-909cd17e834d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortinas de Pantalla Blanca",
        color: 'Blanco Claro',
    },
    {
        id: 5,
        name: 'Cortinas Demencial de Lujo Naranjas',
        href: '/articulos/cortinaDemencial',
        imageSrc: 'https://images.unsplash.com/photo-1540905255418-61f7468593cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortinas Demencial de Lujo Naranjas",
        color: 'Naranjo Claro',
    },
    {
        id: 6,
        name: 'Cortina de Raya Blancas',
        href: '/articulos/cortinaRayas',
        imageSrc: 'https://images.unsplash.com/photo-1617617495640-153230cf3408?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortina de Raya Blancas",
        color: 'Blanco',
    },
    {
        id: 7,
        name: 'Cortina Amsterdam de los Paises Bajos',
        href: '/articulos/cortinaAmsterdam',
        imageSrc: 'https://images.unsplash.com/photo-1614270695397-bdc1e7027961?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortina Amsterdam de los Paises Bajos",
        color: 'Marron Claro',
    },
    {
        id: 8,
        name: 'Cortina de Lujo Hogar',
        href: '/articulos/cortinaHogar',
        imageSrc: 'https://images.unsplash.com/photo-1593909840116-dc263f047718?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Cortina de Lujo Hogar",
        color: 'Marron Claro',
    },
]

function CompCatalogo() {
    return (
        <>
            <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Catalogo Sifotronicas</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to={product.href} className="hover:underline">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default CompCatalogo
