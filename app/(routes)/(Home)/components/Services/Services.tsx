// import { Check } from "lucide-react";
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { DataServices } from "./Services.data";

import ImageOne from "@/public/images/desarrollo.jpg";
import Image from "next/image";
export function Services() {
  return (
    <div className="w-full py-20 lg:py-40">
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
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Desarrollo Web</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Desarrollamos sitios web modernos, optimizados y adaptables a
                  cualquier dispositivo para ofrecer la mejor experiencia de
                  usuario y aumentar la visibilidad de tu negocio.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Producciones audiovisuales
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Creamos contenido audiovisual de alto impacto que cuenta la
                  historia de tu marca y atrae a tu público objetivo, desde
                  videos corporativos hasta anuncios publicitarios.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Marketing digital</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Diseñamos estrategias de marketing digital enfocadas en
                  generar tráfico, mejorar conversiones y maximizar tu presencia
                  online a través de campañas personalizadas.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Consultorías</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Te ofrecemos asesoramiento experto en soluciones digitales,
                  ayudándote a optimizar tu presencia en línea y a tomar
                  decisiones estratégicas que impulsen tu crecimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full">
    //   <div className="container mx-auto">
    //     <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
    //       <div>
    //         <Badge>Que hacemos ?</Badge>
    //       </div>
    //       <div className="flex gap-2 flex-col">
    //         <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
    //           Tu marca digital hoy
    //         </h2>
    //         <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
    //           En Patito Media transformamos tu visión digital en realidad. Desde
    //           estrategias efectivas hasta contenido audiovisual y sitios web, te
    //           acompañamos en cada paso para llevar tu negocio al siguiente
    //           nivel.
    //         </p>
    //       </div>
    //       <div className="flex gap-10 pt-12 flex-col w-full">
    //         <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
    //           {data.map((item, index) => (
    //             <div
    //               key={index}
    //               className="flex flex-row gap-6 w-full items-start"
    //             >
    //               <Check className="w-4 h-4 mt-2 text-primary" />
    //               <div className="flex flex-col gap-1">
    //                 <p>{item.title}</p>
    //                 <p className="text-muted-foreground text-sm">
    //                   {item.description}
    //                 </p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
