import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { Drawer } from 'flowbite';
import {  useEffect, useRef, useState } from "react";

const features = [
    { name: 'Origen', description: 'Diseñado por HomeLux Inc.' },
    { name: 'Material', description: 'Terciopelo de alta calidad con detalles de oro y plata' },
    { name: 'Dimensiones', description: '7.2" x 4.5" x 1.3"' },
    { name: 'Acabado', description: 'Tejido con hilos brillantes para un aspecto lujoso' },
    { name: 'Incluye', description: 'Barra de cortina y accesorios de montaje' },
    { name: 'Consideraciones', description: 'Crea un ambiente elegante y sofisticado en cualquier hogar.' },
]

function CortinaHogar() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerRef = useRef(null);

    useEffect(() => {
        const $targetEl = document.getElementById('drawer-js-example');
        const options = {
            placement: 'right',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
            onHide: () => {
                console.log('El drawer está oculto');
                setDrawerOpen(false); // Actualizar el estado cuando se oculta el drawer
            },
            onShow: () => {
                console.log('El drawer está mostrado');
                setDrawerOpen(true); // Actualizar el estado cuando se muestra el drawer
            },
            onToggle: () => {
                console.log('El drawer ha sido alternado');
                setDrawerOpen(prevState => !prevState); // Alternar el estado cuando se alterna el drawer
            },
        };
        const instanceOptions = {
            id: 'drawer-js-example',
            override: true
        };
        drawerRef.current = new Drawer($targetEl, options, instanceOptions);
    }, []);

    const handleContactClick = () => {
        if (drawerRef.current) {
            drawerRef.current.show();
        }
    };

    // Cerrar el drawer cuando cambia de página
    useEffect(() => {
        return () => {
            if (drawerRef.current && drawerOpen) {
                drawerRef.current.hide();
            }
        };
    }, [drawerOpen]);

    return (
        <>
            <Navbar />
            
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Especificaciones Tecnicas</h2>
                    <p className="mt-4 text-gray-500">
                    Las Cortinas de Lujo Hogar ofrecen una experiencia de decoración excepcional para aquellos que 
                    buscan un toque de elegancia en su hogar. Confeccionadas con terciopelo de primera calidad y 
                    detallados con acabados en oro y plata, estas cortinas transmiten un aura de lujo y sofisticación. 
                    Su diseño meticuloso y su tejido brillante añaden un toque de opulencia a cualquier espacio, 
                    creando un ambiente cálido y acogedor. Perfectas para aquellos que desean añadir un toque de 
                    distinción a su hogar, las Cortinas de Lujo Hogar son la elección ideal para quienes aprecian la 
                    belleza y el refinamiento en cada detalle de su decoración.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{feature.name}</dt>
                            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="https://images.unsplash.com/photo-1593909840116-dc263f047718?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Cortina de Lujo Hogar"
                            className="rounded-lg bg-gray-100 max-w-md max-h-md"
                        />
                    </div>
                </div>
                <button className="bg-indigo-600 text-white font-bold py-2 px-64 rounded ml-80 mb-10 h-12 hover:bg-indigo-700" onClick={handleContactClick}>Contacto</button>
            </div>
            <div id="drawer-js-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-js-example">
                <h5 id="drawer-js-example" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>Contacto</h5>
                <span class="sr-only">Close menu</span>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">En Cortinas Sifotronicas, estamos comprometidos a proporcionar soluciones de cortinas innovadoras que combinen funcionalidad y estilo. Desde cortinas motorizadas hasta opciones personalizadas, tenemos lo que necesita para transformar su espacio.</p>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Para conocer más sobre nuestra amplia gama de productos y recibir asesoramiento personalizado, ¡póngase en contacto con nuestro equipo hoy mismo! Estamos aquí para ayudarlo a encontrar la solución perfecta que se adapte a sus necesidades y presupuesto.</p>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Llámenos al <a href="tel:+34667054449" className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">667054449</a> No espere más para mejorar la apariencia y funcionalidad de sus ventanas con Cortinas Sifotronicas.</p>
            </div>
            <Footer />
        </>
    )
}

export default CortinaHogar