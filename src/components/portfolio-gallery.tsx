"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const projects = [
  {
    id: "1",
    title: "Cozinha Contemporânea Residencial Ipanema",
    category: "Kitchen",
    beforeImage:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    description:
      "Revitalização completa de cozinha em apartamento no coração de Ipanema. O projeto priorizou a integração com a sala de jantar, utilizando granito Preto São Gabriel e marcenaria em laca fosca. A ilha central multifuncional serve tanto para preparo quanto para refeições rápidas, incorporando eletrodomésticos de última geração da Brastemp. A iluminação em LED embutida valoriza a arquitetura e cria diferentes atmosferas para o dia a dia carioca.",
  },
  {
    id: "2",
    title: "Suíte Master Condomínio Jardins São Paulo",
    category: "Bedroom",
    beforeImage:
      "https://images.unsplash.com/photo-1536349788264-1b816db3cc13?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    description:
      "Projeto de dormitório que captura a essência do design brasileiro, com madeira de demolição certificada da Mata Atlântica e tecidos naturais da região Sul. A cabeceira estofada foi desenvolvida sob medida com capitonê artesanal, enquanto o closet planejado maximiza o aproveitamento do espaço sem comprometer a estética. A paleta em tons terrosos e texturas naturais dialoga com a vista para o verde da cidade, criando um refúgio de tranquilidade.",
  },
  {
    id: "3",
    title: "Living Integrado Edifício Copan",
    category: "Living Room",
    beforeImage:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    description:
      "Reinterpretação contemporânea para este apartamento icônico no Edifício Copan, respeitando a arquitetura modernista de Niemeyer. O mobiliário exclusivo mescla peças de design brasileiro - como a poltrona Mole de Sergio Rodrigues - com soluções planejadas que otimizam cada centímetro. O piso em taco de ipê restaurado dialoga com a marcenaria contemporânea, enquanto a iluminação técnica valoriza a curvatura característica das janelas originais.",
  },
  {
    id: "4",
    title: "Home Office Apartamento Higienópolis",
    category: "Office",
    beforeImage:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1593476550610-87baa860004a?w=800&q=80",
    description:
      "Escritório residencial desenvolvido para atender à nova realidade do trabalho remoto no Brasil. A estação de trabalho ergonômica foi projetada conforme normas da ABNT, com sistema inteligente de gerenciamento de cabos e conectividade. A marcenaria executada em freijó combina com o painel acústico que garante privacidade durante videoconferências. Todo o mobiliário foi fabricado por marceneiros do Vale do Itajaí, valorizando o talento nacional.",
  },
  {
    id: "5",
    title: "Sala de Jantar Colonial Fazenda Santa Bárbara",
    category: "Dining Room",
    beforeImage:
      "https://images.unsplash.com/photo-1564383424695-05a0668266ec?q=80&w=2741&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage:
      "https://images.unsplash.com/photo-1564383424695-05a0668266ec?q=80&w=2741&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Restauração e modernização da sala de jantar desta fazenda histórica do interior paulista, datada de 1895. O buffet foi desenhado exclusivamente para preservar louças de família transmitidas por gerações, utilizando madeira de jequitibá-rosa com acabamentos artesanais. As cadeiras em palhinha natural foram restauradas por artesãos mineiros, enquanto o lustre contemporâneo da Lumini cria um contraste respeitoso com a arquitetura original.",
  },
  {
    id: "6",
    title: "Banheiro Spa Residencial Barra da Tijuca",
    category: "Bathroom",
    beforeImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    description:
      "Transformação de um banheiro convencional em um verdadeiro spa urbano com vista para o mar carioca. Revestimentos em porcelanato que reproduzem o travertino nacional são complementados por bancada em mármore Paraná. A cuba esculpida em pedra-sabão de Ouro Preto e metais da Deca linha Oceano completam este ambiente sofisticado. O projeto inclui sistema de aquecimento de piso e ducha com cromoterapia, trazendo conforto e bem-estar para o dia a dia.",
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
    <section className="py-16 px-4 md:px-8 bg-gray-50" id="portfolio">
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                      >
                        <span className="text-white font-medium px-4 py-2 rounded-full bg-black/50">
                          Ver projeto
                        </span>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {translateCategory(project.category)}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-center">
                            Antes
                          </p>
                          <div className="relative h-80 overflow-hidden rounded-md">
                            <Image
                              src={project.beforeImage}
                              alt={`${project.title} - antes`}
                              className="w-full h-full object-cover"
                              width={800}
                              height={600}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-center">
                            Depois
                          </p>
                          <div className="relative h-80 overflow-hidden rounded-md">
                            <Image
                              src={project.afterImage}
                              alt={`${project.title} - depois`}
                              className="w-full h-full object-cover"
                              width={800}
                              height={600}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-700">
                        {project.description}
                      </p>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {translateCategory(project.category)}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
