import { Metadata } from "next";
import { LoginForm } from "./components/LoginForm";

export const metadata: Metadata = {
  title: "Patito Media - Iniciar Sesión",
  description: "Accede a tu cuenta de Patito Media para gestionar tus proyectos digitales.",
};

export default function PageLogin() {
  return (
    <div className=" w-full h-screen container mx-auto flex flex-col items-center justify-center pt-32">
      {/* <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-img-consulting bg-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <h2 className="text-3xl md:text-5xl tracking-tighter font-regular text-white mt-10 shadow-sm">
            Gracias por confiar en nosotros
          </h2>
        </div>
        <div className="relative z-20 mt-auto">
          <p className="text-lg text-white/90">
            Accede a tu panel de control para gestionar tus proyectos digitales y dar seguimiento a tus estrategias de marketing.
          </p>
        </div>
      </div> */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Área de Clientes
            </h1>
            <p className="text-sm text-muted-foreground">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}