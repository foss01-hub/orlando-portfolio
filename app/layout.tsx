import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const description =
  "Portafolio de Orlando Jordán Núñez, estudiante de Ingeniería en Mecatrónica enfocado en automatización, electrónica, IA aplicada y proyectos técnicos.";

export const metadata: Metadata = {
  title: "Orlando Jordán Núñez | Portafolio técnico",
  description,
  openGraph: {
    type: "profile",
    locale: "es_PA",
    siteName: "Portafolio técnico de Orlando Jordán Núñez",
    title: "Orlando Jordán Núñez | Portafolio técnico",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
