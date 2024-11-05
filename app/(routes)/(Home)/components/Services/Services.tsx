import Link from "next/link";
import { MessagesSquare, NotebookPen, Terminal, Video } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function Services() {
  return (
    <div id="services" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>¿Que hacemos?</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Tu marca digital hoy
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                En Patito Media transformamos tu visión digital en realidad.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative bg-img-developer bg-cover grayscale rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col hover:scale-95 transition-all duration-500">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-75 rounded-md"></div>

              {/* Icono y contenido */}
              <div className="relative z-10 flex justify-between flex-col h-full">
                <Terminal className="w-8 h-8 stroke-1 text-slate-300 " />
                <Link href="/website">
                  <div className="flex flex-col cursor-pointer">
                    <h3 className="text-xl tracking-tight font-bold text-slate-300">
                      Desarrollo Web
                    </h3>
                    <p className="text-slate-400 max-w-xs text-base font-bold">
                      Desarrollamos sitios web modernos, optimizados y
                      adaptables a cualquier dispositivo para ofrecer la mejor
                      experiencia de usuario y aumentar la visibilidad de tu
                      negocio.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-img-productions bg-cover grayscale rounded-md aspect-square p-6 flex justify-between flex-col hover:scale-95 transition-all duration-500">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>

              {/* Icono y contenido */}
              <div className="relative z-10 flex justify-between flex-col h-full">
                <Video className="w-8 h-8 stroke-1 text-slate-300 " />
                <Link href="/productions">
                  <div className="flex flex-col cursor-pointer">
                    <h3 className="text-xl tracking-tight font-bold text-slate-300">
                      Producciones audiovisuales
                    </h3>
                    <p className="text-slate-400 max-w-xs text-base font-bold">
                      Creamos contenido audiovisual de alto impacto que cuenta
                      la historia de tu marca y atrae a tu público objetivo,
                      desde videos corporativos hasta anuncios publicitarios.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-img-marketing bg-cover grayscale rounded-md aspect-square p-6 flex justify-between flex-col cursor-pointer hover:scale-95 transition-all duration-500">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>

              {/* Icono y contenido */}
              <div className="relative z-10 flex justify-between flex-col h-full">
                <NotebookPen className="w-8 h-8 stroke-1 text-slate-300 " />
                <Link href="/marketing">
                  <div className="flex flex-col cursor-pointer">
                    <h3 className="text-xl tracking-tight font-bold text-slate-300">
                      Marketing digital
                    </h3>
                    <p className="text-slate-400 max-w-xs text-base font-bold">
                      Diseñamos estrategias de marketing digital enfocadas en
                      generar tráfico, mejorar conversiones y maximizar tu
                      presencia online a través de campañas personalizadas.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative bg-img-consulting grayscale rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col cursor-pointer hover:scale-95 transition-all duration-500">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>

              {/* Icono y contenido */}
              <div className="relative z-10 flex justify-between flex-col h-full">
                <MessagesSquare className="w-8 h-8 stroke-1 text-slate-300 " />
                <Link href="/consulting">
                  <div className="flex flex-col cursor-pointer">
                    <h3 className="text-xl tracking-tight font-bold text-slate-300">
                      Consultorías
                    </h3>
                    <p className="text-slate-400 max-w-xs text-base font-bold">
                      Te ofrecemos asesoramiento experto en soluciones
                      digitales, ayudándote a optimizar tu presencia en línea y
                      a tomar decisiones estratégicas que impulsen tu
                      crecimiento.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
