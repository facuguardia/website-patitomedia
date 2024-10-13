"use client";

import { useState } from "react";

import { CalendarIcon, Check, MoveRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function Contact() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>¿Hablamos?</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Hablemos de tu próximo gran paso
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Cada proyecto comienza con una conversación. Cuéntanos tus
                  ideas, retos o sueños, y juntos haremos que cobren vida en el
                  mundo digital.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Rápido y efectivo</p>
                <p className="text-muted-foreground text-sm">
                  Nos enfocamos en soluciones ágiles que entregan resultados sin
                  perder tiempo ni calidad. Tu proyecto, en marcha de inmediato.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Innovación constante</p>
                <p className="text-muted-foreground text-sm">
                  Nos mantenemos a la vanguardia de las tendencias digitales
                  para ofrecerte ideas frescas que mantendrán tu marca un paso
                  adelante.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>A tu medida</p>
                <p className="text-muted-foreground text-sm">
                  Cada negocio es único. Adaptamos nuestras soluciones a tus
                  necesidades específicas, para que siempre obtengas lo mejor.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4 w-full">
              <p>Reserva una reunión</p>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="picture">Fecha</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">Nombre</Label>
                <Input id="firstname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">Apellido</Label>
                <Input id="lastname" type="text" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  placeholder="Cuéntanos tu idea"
                  id="message"
                  rows={4}
                />
              </div>

              <Button className="gap-4 w-full">
                ¡Manos a la obra! <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
