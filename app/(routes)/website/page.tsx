import { PhoneCall } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { HeroPages } from "@/components/HeroPages";
import { CallToAction } from "../../../components/CallToAction";
import { Contact } from "../../../components/Contact";
import { Button } from "@/components/ui/button";
import { AccordionWebsite } from "./components/AccordionWebsite";
import { PortfolioImage } from "./components/PortfolioImage";

export default function PageWebsite() {
  return (
    <div className="w-full py-20">
      <HeroPages
        title="Desarrollo web"
        description="Soluciones Web para Impulsar tu Negocio"
        image="img-developer"
      />
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Tu web aquí</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Lleva tu negocio al siguiente nivel
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  El éxito de tu negocio comienza con una presencia digital
                  sólida. Creamos sitios web personalizados que no solo son
                  visualmente atractivos, sino que también están optimizados
                  para convertir visitantes en clientes
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  Empieza tu web ahora <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <AccordionWebsite />
        </div>
        <PortfolioImage />
      </div>
      <CallToAction />
      <Contact />

    </div>
  );
}
