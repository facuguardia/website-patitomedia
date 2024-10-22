"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { MoveLeft } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { ToggleTheme } from "../ToggleTheme";
import { Logo } from "../Logo";

export function NavbarLogin() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
    className={`w-full z-40 fixed top-0 left-0 bg-background transition-shadow duration-300 ${
      isScrolled ? "shadow-md" : ""
    }`}
  >
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              <Link
                href="/"
                className="flex justify-between items-center gap-3"
              >
                <MoveLeft className="w-5 h-5 stroke-1" />
                <span className="text-muted-foreground">Volver</span>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <div className="font-semibold">
            <Logo />
          </div>
        </div>
        <div className="flex justify-end w-full gap-4">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
