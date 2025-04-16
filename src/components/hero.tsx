"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// TODO: remove mock images and replace with real ones
const images = [
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <section
        className="relative h-[800px] w-full overflow-hidden bg-gray-900"
        id="home"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.05 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="absolute inset-0 object-cover"
              src={image}
              alt={`Slide ${index + 1}`}
              fill
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        ))}

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 rounded-full transition-all cursor-pointer ${
                currentImageIndex === index ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="container mx-auto px-4 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transforme Seu Espaço Com Móveis Planejados
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Soluções personalizadas de alta qualidade para cozinhas, quartos,
              salas e escritórios
            </motion.p>
            <div className="hidden md:inline-block">
              <DialogTrigger>
                <Button
                  size="md"
                  className="bg-[hsl(210,100%,30%)] px-6 py-4 text-lg font-semibold hover:bg-[hsl(210,100%,40%)] transition-all duration-400"
                  type="button"
                >
                  Solicite um Orçamento
                </Button>
              </DialogTrigger>
            </div>
            
            <div className="md:hidden inline-block">
              <a href="#contact">
                <Button
                  size="md"
                  className="bg-[hsl(210,100%,30%)] px-6 py-4 text-lg font-semibold hover:bg-[hsl(210,100%,40%)] transition-all duration-400"
                  type="button"
                >
                  Solicite um Orçamento
                </Button>
              </a>
            </div>
          </motion.div>
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
      </section>
    </Dialog>
  );
};
