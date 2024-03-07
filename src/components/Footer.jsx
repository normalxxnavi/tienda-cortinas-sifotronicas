import { Link } from "react-router-dom"
import { Drawer } from 'flowbite';
import {  useEffect, useRef, useState } from "react";

function Footer() {

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
        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://img.icons8.com/?size=100&id=19296&format=png" className="h-8" alt="Cortinas Sifotronicas" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cortinas Sifotronicas</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to={"/acerca"} className="hover:underline me-4 md:me-6">Acercar de..</Link>
                        </li>
                        <li>
                            <Link to={"/quienes"} className="hover:underline me-4 md:me-6">¿Quienes Somos?</Link>
                        </li>
                        <li>
                            <button onClick={handleContactClick} className="hover:underline" >Contacto</button>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/normalxxnavi/tienda-cortinas-sifotronicas" className="hover:underline">Cortinas Sifotronicas™</a>. All Rights Reserved.</span>
            </div>
            <div id="drawer-js-example" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-js-example">
                <h5 id="drawer-js-example" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>Contacto</h5>
                <span className="sr-only">Close menu</span>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">En Cortinas Sifotronicas, estamos comprometidos a proporcionar soluciones de cortinas innovadoras que combinen funcionalidad y estilo. Desde cortinas motorizadas hasta opciones personalizadas, tenemos lo que necesita para transformar su espacio.</p>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Para conocer más sobre nuestra amplia gama de productos y recibir asesoramiento personalizado, ¡póngase en contacto con nuestro equipo hoy mismo! Estamos aquí para ayudarlo a encontrar la solución perfecta que se adapte a sus necesidades y presupuesto.</p>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Llámenos al <a href="tel:+34667054449" className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">667054449</a> No espere más para mejorar la apariencia y funcionalidad de sus ventanas con Cortinas Sifotronicas.</p>
            </div>
        </footer>
    )
}

export default Footer