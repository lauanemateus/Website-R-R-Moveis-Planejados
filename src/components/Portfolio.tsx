"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

type Category = "todos" | "cozinha" | "banheiro" | "escritorio" | "empresa" | "sala";

interface PortfolioItem {
  src: string;
  alt: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
  // Cozinha
  {
    src: "/images/cozinha/IMG-20231207-WA0044.jpg",
    alt: "Cozinha planejada moderna",
    category: "cozinha",
  },
  {
    src: "/images/cozinha/IMG-20260120-WA0016.jpg",
    alt: "Cozinha planejada com armários",
    category: "cozinha",
  },
  {
    src: "/images/cozinha/IMG-20260120-WA0042.jpg",
    alt: "Cozinha planejada completa",
    category: "cozinha",
  },
  // Banheiro
  {
    src: "/images/banheiro/20220618_144219.jpg",
    alt: "Banheiro planejado elegante",
    category: "banheiro",
  },
  {
    src: "/images/banheiro/20220618_144258.jpg",
    alt: "Gabinete de banheiro",
    category: "banheiro",
  },
  {
    src: "/images/banheiro/IMG_20240528_151450_226.jpg",
    alt: "Móveis para banheiro",
    category: "banheiro",
  },
  // Escritório
  {
    src: "/images/escritorio/IMG_20240528_154622_338.jpg",
    alt: "Escritório planejado",
    category: "escritorio",
  },
  // Empresa
  {
    src: "/images/empresa/IMG_20240528_151450_379.jpg",
    alt: "Móveis comerciais",
    category: "empresa",
  },
  {
    src: "/images/empresa/IMG_20240528_152019_356.jpg",
    alt: "Mobiliário empresarial",
    category: "empresa",
  },
  // Sala/Home Theater - usando a imagem hero como referência
  {
    src: "/images/hero.png",
    alt: "Painel de TV e Home Theater",
    category: "sala",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "cozinha", label: "Cozinha" },
  { id: "sala", label: "Sala/Home Theater" },
  { id: "banheiro", label: "Banheiro" },
  { id: "escritorio", label: "Escritório" },
  { id: "empresa", label: "Empresa" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nosso Portfólio</h2>
        <p className="section-subtitle">
          Confira alguns dos nossos trabalhos e inspire-se para o seu projeto
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-wood text-white"
                  : "bg-beige-light text-wood-dark hover:bg-wood/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setLightboxImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{item.alt}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-wood-dark px-3 py-1 rounded-full text-sm font-medium">
                  Ver mais
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-wood-dark/80 mb-6">
            Gostou do que viu? Entre em contato e faça seu orçamento!
          </p>
          <WhatsAppButton text="Quero um Orçamento" />
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightboxImage(null)}
          >
            <div className="lightbox-content">
              <button
                className="lightbox-close"
                onClick={() => setLightboxImage(null)}
                aria-label="Fechar"
              >
                &times;
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={lightboxImage}
                  alt="Imagem ampliada"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
