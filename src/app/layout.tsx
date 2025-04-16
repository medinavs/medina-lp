import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import medinaLogo from "@/public/medina-rounded.jpg";

export const metadata: Metadata = {
  title: "Marcenaria Medina Planejados",
  icons: {
    icon: medinaLogo.src,
  },
  keywords: ["marcenaria em Piracicaba", "móveis planejados"],
  openGraph: {
    title: "Marcenaria Medina Planejados",
    // images: [],
  },
  description:
    "Serviços de marcenaria de alta qualidade, com foco em planejados e sob medida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
