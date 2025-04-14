import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import medinaLogo from "@/public/medina-rounded.jpg";

export const metadata: Metadata = {
  title: "Marcenaria Medina Planejados",
  icons: {
    // TODO: add favicon tomorrow
    icon: medinaLogo.src,
  },
  keywords: [
    "marcenaria",
    "marcenaria planejada",
    "marcenaria sob medida",
    "marcenaria em Piracicaba",
    "móveis planejados",
    "móveis sob medida",
    "móveis em Piracicaba",
    "móveis planejados em Piracicaba",
    "móveis sob medida em Piracicaba",
    "marcenaria de alta qualidade",
    "móveis de alta qualidade",
    "marcenaria personalizada",
    "móveis personalizados",
    "marcenaria moderna",
    "móveis modernos",
  ],
  authors: [
    {
      name: "Marcenaria Medina Planejados",
      url: "https://www.instagram.com/medinaplanejados/",
    },
  ],
  creator: "Marcenaria Medina Planejados",
  publisher: "Marcenaria Medina Planejados",
  openGraph: {
    title: "Marcenaria Medina Planejados",
  },
  description:
    "Serviços de marcenaria de alta qualidade, com foco em planejados e sob medida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: refactor this Layout and make a footer component
  return (
    <html lang="pt-BR">
      <body className="bg-secondary">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
