"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "Cozinha teste",
    category: "Kitchen",
    beforeImage:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    description:
      "Completa e moderna cozinha planejada com armários sob medida, ilha central e eletrodomésticos integrados.",
  },
  {
    id: "2",
    title: "Quarto teste",
    category: "Bedroom",
    beforeImage:
      "https://images.unsplash.com/photo-1536349788264-1b816db3cc13?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    description:
      "Quarto planejado com armários embutidos, cabeceira personalizada e iluminação ambiente, criando um espaço aconchegante e funcional.",
  },
  {
    id: "3",
    title: "Sala de Estar teste",
    category: "Living Room",
    beforeImage:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    description:
      "Sala de estar moderna com estante planejada, sofá sob medida e mesa de centro, ideal para receber amigos e familiares.",
  },
  {
    id: "4",
    title: "Escritório teste",
    category: "Office",
    beforeImage:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1593476550610-87baa860004a?w=800&q=80",
    description:
      "Escritório planejado com mesa de trabalho, prateleiras e armários, proporcionando um ambiente produtivo e organizado.",
  },
  {
    id: "5",
    title: "Buffet teste",
    category: "Dining Room",
    beforeImage:
      "https://images.unsplash.com/photo-1564383424695-05a0668266ec?q=80&w=2741&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage:
      "https://images.unsplash.com/photo-1564383424695-05a0668266ec?q=80&w=2741&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Buffet planejado para sala de jantar, com espaço para louças e utensílios, ideal para jantares e reuniões familiares.",
  },
  {
    id: "6",
    title: "Banheiro teste",
    category: "Bathroom",
    beforeImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    description:
      "Banheiro planejado com armários sob medida, espelho e iluminação, criando um espaço funcional e elegante.",
  },
];

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Kitchen",
    "Bedroom",
    "Living Room",
    "Office",
    "Dining Room",
    "Bathroom",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const translateCategory = (category: string) => {
    const categoriesMap = {
      All: "Todos",
      Kitchen: "Cozinha",
      Bedroom: "Quarto",
      "Living Room": "Sala de Estar",
      Office: "Escritório",
      "Dining Room": "Sala de Jantar",
      Bathroom: "Banheiro",
    };

    return categoriesMap[category as keyof typeof categoriesMap] || category;
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformamos ideias em ambientes únicos. Confira nossos projetos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-[hsl(210,100%,30%)] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {translateCategory(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects &&
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width={800}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium px-4 py-2 rounded-full bg-black/50">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
