"use client";

import React from "react";
import { ServiceCard } from "./ui/service-card";
import { Bed, Briefcase, ChefHat, Home, Sofa } from "lucide-react";
import { motion } from "framer-motion";

// TODO: Remove this data from here and move to a separate file
const services = [
  {
    icon: <ChefHat className="h-10 w-10" />,
    title: "Cozinhas Planejadas",
    description:
      "Cozinhas sob medida com design moderno e funcional, adaptadas ao seu espaço e estilo.",
    color: "bg-slate-50",
  },
  {
    icon: <Bed className="h-10 w-10" />,
    title: "Quartos Planejados",
    description:
      "Soluções personalizadas para quartos, incluindo armários, camas e cabeceiras sob medida.",
    color: "bg-slate-50",
  },
  {
    icon: <Sofa className="h-10 w-10" />,
    title: "Sala de Estar",
    description:
      "Estantes e mesas de centro sob medida para criar um ambiente acolhedor e elegante.",
    color: "bg-slate-50",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Escritórios Planejados",
    description:
      "Móveis sob medida para escritórios, incluindo mesas, estantes e armários organizadores.",
    color: "bg-slate-50",
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Reformas Residenciais",
    description:
      "Reformas completas com foco em marcenaria, oferecendo soluções personalizadas para cada ambiente.",
    color: "bg-slate-50",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-medina-dark mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Somos especializados em moveis sob medida!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
