import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="w-full py-12 bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-col text-center py-14 gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              ¡Tu éxito empieza aquí!
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              El mundo digital te espera, y nosotros estamos listos para
              llevarte allí. Desde estrategias brillantes hasta experiencias que
              marcan la diferencia, en Patito Media hacemos que tu marca se
              sienta, se vea y se recuerde.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline">
              Hablemos de tu proyecto <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4 dark:bg-[#F7E419]">
              Impulsa tu negocio <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
