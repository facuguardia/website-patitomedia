import Image from "next/image";
import { Check } from "lucide-react";

import PhotoAgency from "@/public/images/icon.png";

import { HeroPages } from "@/components/HeroPages";

import { Badge } from "@/components/ui/badge";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";

import { Team } from "./components/Team";

export default function PageAbout() {
  return (
    <div className="w-full py-20">
      <HeroPages
        title="Innovación y creatividad"
        description="Descubre cómo podemos ayudarte a destacar en el mundo digital"
        image="img-consulting"
      />
      <div>
        <div className="container mx-auto py-20">
          <div className="grid container py-8 grid-cols-1 gap-32 items-center lg:grid-cols-2">
            <div className="flex gap-10 flex-col">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">¿Por qué nosotros?</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                    El poder detrás de cada proyecto
                  </h2>
                  <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                    En Patito Media, no solo ofrecemos soluciones digitales y
                    audiovisuales, sino que también construimos relaciones
                    basadas en tres pilares fundamentales: Confianza, Eficiencia
                    y Creatividad. Estos valores nos permiten conectar con
                    nuestros clientes, entender sus necesidades y ofrecer
                    resultados que superan las expectativas.
                  </p>
                </div>
              </div>
              <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Confianza</p>
                    <p className="text-muted-foreground text-sm">
                      Trabajamos contigo como un socio de confianza,
                      asegurándonos de que cada paso esté alineado con tus
                      objetivos.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Eficiencia</p>
                    <p className="text-muted-foreground text-sm">
                      Entregamos resultados rápidos y efectivos, aprovechando
                      cada recurso de forma inteligente.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Creatividad</p>
                    <p className="text-muted-foreground text-sm">
                      Innovamos en cada proyecto, creando soluciones únicas que
                      destacan y conectan con tu audiencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md aspect-square flex justify-center items-center">
              <Image
                src={PhotoAgency}
                alt="autentica agencia marketing"
                width={0}
                height={0}
                className="rounded-md items-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/* section team */}
      <Team />
      {/* CTA  */}
      <CallToAction />
      <Contact />
    </div>
  );
}
