import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <Button className="gap-4 dark:hover:border-primary" variant="outline">
              <Link
                href="https://bit.ly/patitomedia"
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                Hablemos de tu proyecto <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
            <Button className="gap-4 bg-primary hover:bg-[#F7E419]/40 font-semibold">
              <Link
                href="https://bit.ly/patitomedia"
                target="_blank"
                className="flex justify-center items-center gap-2"
              >
                Impulsa tu negocio <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
