import Link from "next/link";
import { Check, MoveRight, PhoneCall } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>¿Cuánto cuesta?</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Elige el plan perfecto para tu negocio
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Nuestros planes están diseñados para adaptarse a tus necesidades,
              ya sea que estés empezando o buscando expandir tu presencia
              digital.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {/* Card 1 */}
            <Card className="w-full rounded-md blur">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Plan Emprendedor
                  </span>
                </CardTitle>
                <CardDescription>
                  Perfecto para quienes están dando sus primeros pasos en el
                  mundo digital. Te ofrecemos lo esencial para crear una
                  presencia online sólida.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">499</span>
                    <span className="text-md text-muted-foreground"> €</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Sitio web de una página</p>
                        <p className="text-muted-foreground text-sm">
                          Una web simple para mostrar lo esencial.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Diseño de marca básico</p>
                        <p className="text-muted-foreground text-sm">
                          Logo e identidad visual inicial.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Integración con redes sociales</p>
                        <p className="text-muted-foreground text-sm">
                          Conexión directa a tus perfiles.
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-4">
                      <Link
                        href="https://bit.ly/patitomedia"
                        target="_blank"
                        className="flex justify-center items-center gap-2"
                      >
                        Empieza ahora <MoveRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Plan Business
                  </span>
                </CardTitle>
                <CardDescription>
                  Nuestro paquete más completo, diseñado para empresas que
                  buscan una transformación digital total y un plan estratégico
                  integral.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">899</span>
                    <span className="text-sm text-muted-foreground"> €</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Website personalizado</p>
                        <p className="text-muted-foreground text-sm">
                          Un sitio web hecho a medida para tu negocio.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>LinksCard para networking digital</p>
                        <p className="text-muted-foreground text-sm">
                          Tarjeta digital para compartir tus datos.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Estrategia de marketing digital</p>
                        <p className="text-muted-foreground text-sm">
                          Plan avanzado para crecer en digital.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="gap-4 bg-primary hover:bg-[#F7E419]/40 font-semibold">
                    <Link
                      href="https://bit.ly/patitomedia"
                      target="_blank"
                      className="flex justify-center items-center gap-2"
                    >
                      Transforma tu marca <PhoneCall className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="w-full rounded-md blur">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Plan Avanzado
                  </span>
                </CardTitle>
                <CardDescription>
                  Para negocios en crecimiento que buscan optimizar su presencia
                  online y generar un mayor impacto.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">799</span>
                    <span className="text-md text-muted-foreground"> €</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Sitio web de múltiples páginas</p>
                        <p className="text-muted-foreground text-sm">
                          Una web más extensa para mayor información.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Estrategia de marketing digital</p>
                        <p className="text-muted-foreground text-sm">
                          Plan para atraer más clientes online.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 dark:text-primary" />
                      <div className="flex flex-col">
                        <p>Optimización SEO básica</p>
                        <p className="text-muted-foreground text-sm">
                          Mejora tu visibilidad en buscadores.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    <Link
                      href="https://bit.ly/patitomedia"
                      target="_blank"
                      className="flex justify-center items-center gap-2"
                    >
                      Empieza ahora <MoveRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
