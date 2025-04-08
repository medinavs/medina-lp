"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

// TODO: remove mock images and replace with real ones
const images = [
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
];

// TODO: Refactor this component to use semantic tags and improve accessibility
export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-gray-900">
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
            className="absolute inset-0 bg-cover bg-center"
            src={image}
            alt={`Slide ${index + 1}`}
            width={windowWidth}
            height={800}
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
          <Button
            size="md"
            className="bg-[hsl(210,100%,30%)] px-6 py-4 text-lg font-semibold hover:bg-[hsl(210,100%,40%)] transition-all duration-400"
          >
            Solicite um Orçamento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
