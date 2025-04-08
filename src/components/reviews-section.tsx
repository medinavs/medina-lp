"use client";

import { useCallback, useEffect, useState } from "react";
import { ReviewCard } from "./ui/review-card";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ana Oliveira",
    role: "Cliente Residencial",
    content:
      "A MedinaPlanejados transformou completamente nossa cozinha. O trabalho artesanal e a atenção aos detalhes são impressionantes. Recomendo fortemente!",
    rating: 5,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    name: "Carlos Mendes",
    role: "Proprietário de Restaurante",
    content:
      "Contratamos a MedinaPlanejados para renovar todo o mobiliário do nosso restaurante. O resultado superou todas as expectativas. Profissionais excepcionais!",
    rating: 5,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    name: "Mariana Costa",
    role: "Designer de Interiores",
    content:
      "Como designer, sou muito exigente com acabamentos. A MedinaPlanejados entregou exatamente o que meus clientes precisavam, com qualidade impecável.",
    rating: 5,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
  {
    name: "Roberto Almeida",
    role: "Cliente Corporativo",
    content:
      "Nossa empresa precisava de móveis sob medida para nosso novo escritório. A MedinaPlanejados entendeu perfeitamente nossas necessidades e entregou no prazo.",
    rating: 4,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  },
  {
    name: "Fernanda Lima",
    role: "Cliente Residencial",
    content:
      "Os armários planejados para meu quarto ficaram perfeitos! Aproveitaram cada centímetro do espaço e o acabamento é de primeira qualidade.",
    rating: 5,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
  },
];

// just a MVP for the reviews section
export const ReviewsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 px-4 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja as experiências de quem já transformou seus espaços com a
            MedinaPlanejados
          </p>
        </div>

        <div className="relative px-12">
          <div className="w-full overflow-hidden" ref={emblaRef}>
            {/* Embla Carousel */}
            <div className="flex">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-full min-w-0 md:w-1/2 lg:w-1/3 px-4"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
            <button
              className="-left-6 bg-white hover:bg-gray-100"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="-right-6 bg-white hover:bg-gray-100"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
