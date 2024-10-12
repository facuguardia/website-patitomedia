import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DataServices } from "./Services.data";

export function Services() {

  // TODO: All of the information that this component renders is in Services.data.ts

  const data = DataServices;
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Que hacemos ?</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Tu marca digital hoy
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              En Patito Media transformamos tu visión digital en realidad. Desde
              estrategias efectivas hasta contenido audiovisual y sitios web, te
              acompañamos en cada paso para llevar tu negocio al siguiente
              nivel.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-6 w-full items-start"
                >
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{item.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
