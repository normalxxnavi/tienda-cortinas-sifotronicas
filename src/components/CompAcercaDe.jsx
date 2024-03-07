    function CompAcercaDe() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 mb-28 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className=" co mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="https://img.icons8.com/?size=256&id=t5K2CR8feVdX&format=png" alt="" />
                <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>
                    Hola me llamo Javier López Velasco, soy estudiante de 2ºDAW y he hecho una Pagina Web SPA
                    con React, Tailwind y FlowBite (Biblioteca de Tailwind). Esta aplicacion web se ha estado ejecutando
                    desde un launcher llamado Vite para el desarrollo de esta pagina y tambien esta implementada la libreria
                    de React Routes para podernos mover libremente por la pagina
                    </p>
                </blockquote>
                <figcaption className="mt-10">
                    <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://media.licdn.com/dms/image/C4D03AQFKCc8hsoaozQ/profile-displayphoto-shrink_200_200/0/1603275010309?e=1715212800&v=beta&t=l0whnIloIzieoyXBvAG6qk3YCP8oFDjUZTdkbFh04bw"
                    alt=""
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Javier López Velasco</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">Administrador de Sistemas Informaticos en Red y Administrador DBA</div>
                    </div>
                </figcaption>
                </figure>
            </div>
        </section>
    )
    }

export default CompAcercaDe
