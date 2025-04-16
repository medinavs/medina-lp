"use client";

import { Phone } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export const Navbar: React.FC = () => {
  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Avaliações", href: "#reviews" },
    { name: "Contato", href: "#contact" },
  ];

  const projectTypeOptions: Array<{ value: string; label: string }> = [
    { value: "kitchen", label: "Cozinha Planejada" },
    { value: "bedroom", label: "Quarto Planejado" },
    { value: "living-room", label: "Sala Planejada" },
    { value: "office", label: "Escritório Planejado" },
    { value: "other", label: "Outro" },
  ];

  const budgetOptions: Array<{ value: string; label: string }> = [
    { value: "under-5000", label: "Até R$ 5.000" },
    { value: "5000-10000", label: "R$ 5.000 a R$ 10.000" },
    { value: "10000-20000", label: "R$ 10.000 a R$ 20.000" },
    { value: "20000-30000", label: "R$ 20.000 a R$ 30.000" },
    { value: "30000-50000", label: "R$ 30.000 a R$ 50.000" },
    { value: "above-50000", label: "Acima de R$ 50.000" },
  ];

  return (
    <Dialog>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-2`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="#"
                className="text-2xl font-bold text-[hsl(210,100%,20%)]"
              >
                Medina
                <span className="text-[hsl(210,100%,30%)]">Planejados</span>
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
              <DialogTrigger>
                <Button size="md">Solicite um Orçamento</Button>
              </DialogTrigger>
            </div>
          </div>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar um Orçamento</DialogTitle>
            <DialogDescription>
              Preencha com suas informações!
            </DialogDescription>
          </DialogHeader>
          <div className="grid w-full gap-1.5">
            <Label>Nome Completo</Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              className="w-full"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label>E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid w-full gap-1.5">
              <Label>Telefone</Label>
              <Input
                id="phone"
                placeholder="(00) 00000-0000"
                className="w-full"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label>Tipo de Projeto</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de Projeto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipos</SelectLabel>
                    {projectTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>{" "}
            </div>
          </div>

          <div className="grid w-full gap-1.5">
            <Label>Faixa de Orçamento</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o Orçamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Orçamentos</SelectLabel>
                  {budgetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full gap-1.5">
            <Label>Mensagem</Label>
            <Textarea
              placeholder="Digite sua mensagem aqui."
              id="message-area"
              className="resize-none h-50"
            />
            <p className="text-sm text-muted-foreground">
              Sua mensagem será enviada para nosso time!
            </p>
          </div>

          <DialogFooter>
            <Button className="w-26 h-8">Enviar</Button>
          </DialogFooter>
        </DialogContent>
      </nav>
    </Dialog>
  );
};
