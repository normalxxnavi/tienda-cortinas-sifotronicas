import { useEffect } from 'react';
import { Collapse } from 'flowbite';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        const $targetEl = document.getElementById('targetEl');
        const $triggerEl = document.getElementById('triggerEl');

        if ($targetEl && $triggerEl) {
            const options = {
                onCollapse: () => {
                    console.log('element has been collapsed');
                },
                onExpand: () => {
                    console.log('element has been expanded');
                },
                onToggle: () => {
                    console.log('element has been toggled');
                },
            };

            const instanceOptions = {
                id: 'targetEl',
                override: true
            };

            const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);
            return () => collapse.destroy();
        }
    }, []);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/cortinas.png" className="h-10" alt="Cortinas Sifotronicas" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cortinas Sifotronicas</span>
                </Link>
                <button id="triggerEl" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="no-hidden w-full md:block md:w-auto" id="targetEl">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to={"/"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inicio</Link>
                        </li>
                        <li>
                            <Link to={"/catalogo"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Catálogo</Link>
                        </li>
                        <li>
                            <Link to={"/quienes"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">¿Quiénes Somos?</Link>
                        </li>
                        <li>
                            <Link to={"/acerca"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Acerca De..</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;