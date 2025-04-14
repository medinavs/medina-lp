import {
  Contact,
  FacebookIcon,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import medinaLogo from "@/public/medina-logo.jpg";
import Image, { StaticImageData } from "next/image";
import { Input } from "./ui/input";

interface FooterProps {
  logo?: string | StaticImageData;
  companyName?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
}

export const Footer: React.FC = ({
  logo = medinaLogo,
  companyName = "MedinaPlanejados",
  socialLinks = {
    facebook: "https://www.facebook.com/planejadosmedina/",
    instagram: "https://www.instagram.com/medinaplanejados/",
    whatsapp: "https://twitter.com",
  },
  contactInfo = {
    phone: "(19) 98444-8330",
    email: "andre@medinamplanejados.com.br",
    address:
      "Av. Monsenhor Gerônimo Galo, 432 - Sala 3 - Vila Rezende, Piracicaba - SP",
  },
  quickLinks = [
    { label: "Início", href: "#" },
    { label: "Serviços", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Avaliações", href: "#reviews" },
    { label: "Contato", href: "#contact" },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full bg-[hsl(210,100%,20%)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Image
                src={logo}
                alt={companyName}
                className="rounded-full mr-2"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">{companyName}</span>
            </div>
            <p className="text-slate-300 mb-4">
              Soluções de móveis personalizados, criados com precisão e paixão.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Contact size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Seções Rápidas</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Entre em contato!</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{contactInfo.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nossas Atualizaçoes</h3>
            <p className="text-slate-300 mb-4">
              Inscreva-se para receber atualizações sobre nossos últimos
              projetos e promoções.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 text-white h-9">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
