"use client";

import { Menu, Phone, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dont know if this gonna stay here, but for now it is
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Avaliações", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  // TODO: Refactor this component to use semantic tags and improve accessibility
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-[hsl(210,100%,20%)]">
              Medina<span className="text-[hsl(210,100%,30%)]">Planejados</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[hsl(210,100%,30%)] font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 gap-2">
            <a
              about="Enviar mensagem via WhatsApp"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519984448330&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
              className="flex items-center text-gray-700 hover:text-[hsl(210,100%,30%)] font-medium transition-colors gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="mb-0.5">(19) 98444-8330</span>
            </a>
            <Button size="md" className="">
              Solicite um Orçamento
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Solicite um Orçamento
                </Button>
              </div>
              <a
                about="Enviar mensagem via WhatsApp"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5519984448330&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
                className="flex items-center justify-center text-gray-700 hover:text-primary py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                (19) 98444-8330
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
