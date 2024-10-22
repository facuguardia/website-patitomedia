"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DataClients } from "./Clients.data";
import { Badge } from "@/components/ui/badge";

export function Clients() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const logos = DataClients;

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);
  }, [api, current]);

  return (
    <div className="w-full py-12">
      <div className="container mx-auto">
        <div className="mb-[16px]">
          <Badge>¿A quien ayudamos?</Badge>
        </div>
        <div className="flex flex-col  gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
            Marcas que impulsamos
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {logos.map((item, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                    <span className="text-sm">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="rounded-md grayscale"
                      />
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
