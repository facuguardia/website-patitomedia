import { HeroPagesProps } from "./HeroPages.types";

export function HeroPages(props: HeroPagesProps) {
  const { title, description, image } = props;
  return (
    <div className={`h-[470px] w-full bg-${image} bg-cover flex flex-col justify-center items-center gap-2 shadow-2xl`}>
      <div className="absolute inset-0 h-[550px] bg-black opacity-75 rounded-md"></div>

      <h1 className="relative z-10 text-7xl font-bold text-center uppercase">
        {title}
      </h1>
      <p className="relative z-10 text-center text-2xl">{description}</p>
    </div>
  );
}
