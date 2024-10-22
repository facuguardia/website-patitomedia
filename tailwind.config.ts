import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        luckiest: ["Luckiest Guy", "cursive"],
      },
      backgroundImage: {
        "img-developer":
          "url(https://img.freepik.com/foto-gratis/fotografia-ideas-ocupacion-creativa-concepto-estudio-diseno_53876-146878.jpg?t=st=1728893083~exp=1728896683~hmac=c02ecfce3032f166ec61cf4d0e33a67aedff09488c66b8d9804e99abe8250bb6&w=900)",
        "img-productions":
          "url(https://img.freepik.com/foto-gratis/pelicula-primer-plano-cerca-camaras-vintage_23-2147852529.jpg?t=st=1728897369~exp=1728900969~hmac=18620ec5c0c79682f71903ca905a3493d0a3a24ba49bbc8b4edf9e4a03328c7b&w=740)",
        "img-marketing":
          "url(https://img.freepik.com/foto-gratis/libro-blanco-blanco-sobre-icono-web-establecido-dibujado-pizarra_23-2147841252.jpg?t=st=1728897616~exp=1728901216~hmac=ef8e95c08e0f4e4865ef3ddcaa2724c3f3d04f4be7c18c26a38941aacbed96b1&w=740)",
        "img-consulting":
          "url(https://img.freepik.com/foto-gratis/vista-superior-trabajador-dando-alta-cinco-colega_1163-4669.jpg?t=st=1728897949~exp=1728901549~hmac=0e14f7e2655d23baa290cb6327c81a1566b1d43957edb8fb8f345bb448ebe6c1&w=740)",
          "img-about":
          "url(https://img.freepik.com/fotos-premium/animal-pajaro-pollito-gafas-sol-pequeno-fondo-agricultura-aves-corral-pollo-joven-pequeno-amarillo_163305-211936.jpg?w=826)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
