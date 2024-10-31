import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Patito Media - Soluciones Digitales Creativas",
  description:
    "En Patito Media ofrecemos soluciones digitales a medida, desde diseño web y marketing digital hasta producción audiovisual y desarrollo de apps. Llevamos tu negocio al siguiente nivel con estrategias innovadoras y creativas. ¡Hablemos de tu próximo gran proyecto!",
  keywords:
    "soluciones digitales, diseño web, marketing digital, producción audiovisual, estrategias digitales, desarrollo de apps, SEO, branding, consultorías digitales, Patito Media, Motril, agencia digital, estrategias de contenido, desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
