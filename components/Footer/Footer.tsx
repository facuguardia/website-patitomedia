"use client";
import Link from "next/link";
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
                <Link href="/website" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Diseño web
                </Link>
              </li>
              <li>
                <Link href="/productions" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Producciones audiovisuales
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Marketing digital
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Consultorías
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              EMPRESA
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/about" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="contact" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Contacto
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              NUESTRAS REDES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="https://www.linkedin.com/company/patito-media/" target="_blank" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  LinkdIn
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/patitomedia/" target="_blank" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/patito-media/" target="_blank" className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400">
                  Facebook
                </Link>
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
                  className="w-full bg-slate-200 dark:bg-secondary rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-gray-400 focus:border-gray-500 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black font-semibold border-2 border-black py-2 px-6 focus:outline-none bg-primary hover:bg-[#F7E419]/40 rounded shadow-md">
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
      <div className="bg-primary">
        <div className="container mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" className="flex items-center md:justify-start justify-center">
            <span className="ml-3"><Logo /></span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-800 sm:ml-6 sm:mt-0 mt-4">
            © 2024 —
            <Link
              href="https://www.facuguardia.tech"
              className="text-gray-600 dark:text-gray-800 ml-1 hover:underline transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.facuguardia.tech
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/facuguar12" target="_blank" className="text-gray-600 dark:text-gray-800 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
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
            </Link>
            <Link href="https://x.com/FacuGuardia86" target="_blank" className="ml-3 text-gray-600 dark:text-gray-800 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
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
            </Link>
            <Link href="https://www.instagram.com/facuguar12/" target="_blank" className="ml-3 text-gray-600 dark:text-gray-800 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
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
            </Link>
            <Link href="https://www.linkedin.com/in/facu-guardia/" target="_blank" className="ml-3 text-gray-600 dark:text-gray-800 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
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
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
