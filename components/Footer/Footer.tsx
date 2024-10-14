"use client";

import { Logo } from "../Logo";

export function Footer() {
  return (
    <footer className="body-font border-t border-gray-300 dark:border-gray-500 ">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              SERVICIOS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Diseño web
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Producciones audiovisuales
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Marketing digital
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Consultorías
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              EMPRESA
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Nuestra fundación
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Inversores
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Contacto
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              NUESTRAS REDES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  LinkdIn
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Tik Tok
                </a>
              </li>
              <li>
                <a className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Facebook
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              SUSCRIBETE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-gray-400 focus:border-gray-500 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-black dark:bg-[#F7E419] text-white dark:text-black font-semibold border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 dark:hover:bg-[#F7E419]/70 rounded">
                Enviar
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Enterate de todas nuestras ofertas
              <br className="lg:block hidden" />
              suscribiendote a nuestro boletín
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black dark:bg-slate-200 ">
        <div className="container mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white dark:text-black">
            <span className="ml-3"><Logo /></span>
          </a>
          <p className="text-sm text-gray-400 dark:text-gray-600 sm:ml-6 sm:mt-0 mt-4">
            © 2024 —
            <a
              href="https://www.facutech.com"
              className="text-gray-400 dark:text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.facutech.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400 dark:text-gray-600 cursor-pointer">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 dark:text-gray-600 cursor-pointer">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 dark:text-gray-600 cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 dark:text-gray-600 cursor-pointer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
