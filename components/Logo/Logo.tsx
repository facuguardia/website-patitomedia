import Image from "next/image";
import LogoPatito from "@/public/images/logo.png";

export function Logo() {
  return (
    <div>
      <Image src={LogoPatito} alt="Logo Patito Media" width={120} height={100} />
    </div>
  );
}
