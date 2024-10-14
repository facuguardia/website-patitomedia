"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["digital", "creativo", "exitoso", "eficaz", "profesional"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  return (
    <div className="w-full pt-10 pb-20">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Link href="/blog">
              <Button variant="secondary" size="sm" className="gap-4">
                Visita nuestro blog <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">
                Con Patito tu futuro es
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold dark:text-[#F7E419]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              En Patito Media transformamos tu visión digital en realidad. Desde
              estrategias efectivas hasta contenido audiovisual y sitios web, te
              acompañamos en cada paso para llevar tu negocio al siguiente
              nivel.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="https://bit.ly/facutech-wsp" target="_blank">
              <Button size="lg" className="gap-4" variant="outline">
                Solicita una consultoría <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>

            <Button size="lg" className="gap-4 dark:bg-[#F7E419] dark:hover:bg-[#F7E419]/70">
              Conoce nuestros servicios <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
