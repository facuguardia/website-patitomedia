import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import LogoPatito from "@/public/images/logo.png";

export function Logo() {
  const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }

  return (
    <div>
      <Link href="/">
      <Image
        src={LogoPatito}
        alt="Logo Patito Media"
        width={120}
        height={100}
      />
      </Link>
    </div>
  );
}
