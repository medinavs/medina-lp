"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// TODO: Refactor this component to use semantic tags and improve accessibility
export const ServiceCard: React.FC<ServiceCardProps> = ({
  color,
  icon,
  title,
  description,
}) => {
  function handleRedirectToWhatsapp() {
    window.open(
      "https://api.whatsapp.com/send?phone=5519984448330&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20" +
        title,
      "_blank"
    );
  }

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className={`rounded-xl overflow-hidden h-full ${color}`}
    >
      <div className="rounded-xl border text-[hsl(210,100%,20%)] shadow border-none h-full bg-transparent">
        <div className="pt-3 p-6 flex flex-col h-full">
          <div className="mb-4 text-[hsl(210,100%,20%)]">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-[hsl(210,100%,20%)]">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <div
            className="flex items-center text-[hsl(210,100%,30%)] font-medium group cursor-pointer"
            onClick={handleRedirectToWhatsapp}
          >
            <span>Saber mais</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
