"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "Modern Kitchen Renovation",
    category: "Kitchen",
    beforeImage:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    description:
      "Complete transformation of an outdated kitchen into a modern, functional space with custom cabinetry, island, and premium finishes.",
  },
  {
    id: "2",
    title: "Elegant Bedroom Wardrobe",
    category: "Bedroom",
    beforeImage:
      "https://images.unsplash.com/photo-1536349788264-1b816db3cc13?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    description:
      "Custom-built wardrobe with sliding doors, integrated lighting, and specialized compartments for optimal organization.",
  },
  {
    id: "3",
    title: "Living Room Entertainment Center",
    category: "Living Room",
    beforeImage:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    description:
      "Bespoke entertainment center with floating shelves, hidden cable management, and adjustable components to accommodate various media devices.",
  },
  {
    id: "4",
    title: "Home Office Workspace",
    category: "Office",
    beforeImage:
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1593476550610-87baa860004a?w=800&q=80",
    description:
      "Custom-designed home office with built-in desk, shelving, and storage solutions tailored to client's specific workflow needs.",
  },
  {
    id: "5",
    title: "Dining Room Buffet",
    category: "Dining Room",
    beforeImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1595514535415-dae8970c381d?w=800&q=80",
    description:
      "Handcrafted dining room buffet with wine rack, silverware drawers, and ample storage for dinnerware and linens.",
  },
  {
    id: "6",
    title: "Bathroom Vanity",
    category: "Bathroom",
    beforeImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    description:
      "Custom bathroom vanity with dual sinks, soft-close drawers, and water-resistant finishes for durability and style.",
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

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            veja veja veja
          </p>
        </div>

        {/* Categories */}
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
              {category}
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
