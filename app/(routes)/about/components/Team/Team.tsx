import { Badge } from "@/components/ui/badge";
import { CardTeam } from "../CardTeam";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TeamData } from "../../Team.data";

export function Team() {
  const data = TeamData;
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-center gap-20">
       
          <div className="w-full max-w-full px-9">
            <Carousel>
              <CarouselContent>
                {data?.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex rounded-md aspect-video items-center justify-center p-3">
                      <CardTeam
                        name={item.name}
                        role={item.role}
                        comment={item.comment}
                        image={item.image}
                        instagram={item.instagram}
                        github={item.github}
                        linkedin={item.linkedin}
                        facebook={item.facebook}
                        twitch={item.twitch}
                        twitter={item.twitter}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>¿Quienes somos?</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Los creativos detrás de la magia
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
