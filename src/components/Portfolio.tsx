"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

type Category = "todos" | "cozinha" | "banheiro" | "escritorio" | "empresa" | "closet" | "quarto" | "canto-alemao" | "despensa" | "sala";

interface PortfolioItem {
  src: string;
  alt: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
  // Intercalado para variedade visual no filtro "Todos"
  {
    src: "/images/sala/Gemini_Generated_Image_madje8madje8madj.webp",
    alt: "Sala elegante",
    category: "sala",
  },
  {
    src: "/images/cozinha/ad59b9bc-9ca1-4902-ac6c-568480f8e7c7.webp",
    alt: "Cozinha planejada moderna",
    category: "cozinha",
  },
  {
    src: "/images/closet/3a5dbedd-67e8-4925-b87d-341269765258.webp",
    alt: "Closet planejado",
    category: "closet",
  },
  {
    src: "/images/quarto/0511123e-76fb-45aa-a00d-8af93b74cd02.webp",
    alt: "Sapateira",
    category: "quarto",
  },
  {
    src: "/images/escritorio/Gemini_Generated_Image_ms29g0ms29g0ms29.webp",
    alt: "Escritório moderno",
    category: "escritorio",
  },
  {
    src: "/images/quarto/bd1677bf-3c19-4654-8161-fbc5dcdd9c21.webp",
    alt: "Sapateira",
    category: "quarto",
  },
    {
    src: "/images/banheiro/20220618_144239.webp",
    alt: "Gabinete de banheiro",
    category: "banheiro",
  },
  {
    src: "/images/quarto/WhatsApp Image 2026-04-18 at 13.12.55.webp",
    alt: "Quarto planejado",
    category: "quarto",
  },
  {
    src: "/images/sala/Gemini_Generated_Image_8v70uw8v70uw8v70.webp",
    alt: "Sala planejada",
    category: "sala",
  },
  {
    src: "/images/quarto/2c0f7e96-d9a1-4624-8d07-2f7d70706807.webp",
    alt: "Quarto planejado",
    category: "quarto",
  },
  {
    src: "/images/sala/Gemini_Generated_Image_sqai9osqai9osqai.webp",
    alt: "Sala planejada",
    category: "sala",
  },
  {
    src: "/images/sala/Gemini_Generated_Image_dvgsuydvgsuydvgs.webp",
    alt: "Sala moderna",
    category: "sala",
  },
  {
    src: "/images/empresa/170f1430-53a3-407f-936b-357191755900.webp",
    alt: "Móveis comerciais",
    category: "empresa",
  },
  {
    src: "/images/canto-alemao/IMG-20260120-WA0011.webp",
    alt: "Canto alemão planejado",
    category: "canto-alemao",
  },
  {
    src: "/images/despensa/Gemini_Generated_Image_jnw5afjnw5afjnw5.webp",
    alt: "Despensa planejada",
    category: "despensa",
  },
  {
    src: "/images/cozinha/735e065f-26c3-4efd-819a-e70528bf93e1.webp",
    alt: "Cozinha planejada com armários",
    category: "cozinha",
  },
  {
    src: "/images/quarto/7ccb097c-87db-42d3-9397-d29d0f013411.webp",
    alt: "Móveis de quarto",
    category: "quarto",
  },
  {
    src: "/images/closet/c8faeda7-aac6-4490-b507-d1e1d0a996f5.webp",
    alt: "Closet sob medida",
    category: "closet",
  },
  {
    src: "/images/escritorio/cd8f3c5a-18e3-44f4-9b72-b0a5b111d627.webp",
    alt: "Escritório contemporâneo",
    category: "escritorio",
  },
  {
    src: "/images/empresa/4413e3d2-20d1-42ef-9035-2075846195db.webp",
    alt: "Mobiliário empresarial",
    category: "empresa",
  },
  {
    src: "/images/canto-alemao/Gemini_Generated_Image_y6w1jqy6w1jqy6w1.webp",
    alt: "Canto alemão sob medida",
    category: "canto-alemao",
  },
  {
    src: "/images/cozinha/IMG-20260120-WA0041.webp",
    alt: "Cozinha planejada completa",
    category: "cozinha",
  },
  {
    src: "/images/banheiro/Gemini_Generated_Image_hg21y0hg21y0hg21.webp",
    alt: "Móveis para banheiro",
    category: "banheiro",
  },
  {
    src: "/images/quarto/7d6f8728-5fd1-49db-b49b-42cbbe20cee5.webp",
    alt: "Quarto sob medida",
    category: "quarto",
  },
  {
    src: "/images/escritorio/IMG_20240528_155257_515.webp",
    alt: "Home office sob medida",
    category: "escritorio",
  },
  {
    src: "/images/empresa/e484afa1-1fbf-466d-a896-14fe594c46b9.webp",
    alt: "Móveis para empresa",
    category: "empresa",
  },
  {
    src: "/images/cozinha/IMG-20260120-WA0042.webp",
    alt: "Cozinha planejada elegante",
    category: "cozinha",
  },
  {
    src: "/images/banheiro/Gemini_Generated_Image_tdqmnptdqmnptdqm.webp",
    alt: "Banheiro sob medida",
    category: "banheiro",
  },
  {
    src: "/images/quarto/7f951c62-cc72-40b5-ac22-a9f6a7346e2c.webp",
    alt: "Dormitório planejado",
    category: "quarto",
  },
  {
    src: "/images/escritorio/1535c4cb-04cb-4b4e-823f-90c615e79bfa.webp",
    alt: "Mesa de escritório",
    category: "escritorio",
  },
  {
    src: "/images/empresa/Gemini_Generated_Image_67qgw467qgw467qg.webp",
    alt: "Escritório corporativo",
    category: "empresa",
  },
  {
    src: "/images/cozinha/7c18d9c1-7e6d-448d-b5cb-689c43e12904.webp",
    alt: "Armários de cozinha",
    category: "cozinha",
  },
  {
    src: "/images/banheiro/Gemini_Generated_Image_kvzcpakvzcpakvzc.webp",
    alt: "Armário de banheiro",
    category: "banheiro",
  },
  {
    src: "/images/quarto/Gemini_Generated_Image_44n10d44n10d44n1.webp",
    alt: "Quarto moderno",
    category: "quarto",
  },
  {
    src: "/images/escritorio/04069379-5eb7-4777-9b57-2519cb88f262.webp",
    alt: "Estante de escritório",
    category: "escritorio",
  },
  {
    src: "/images/empresa/Gemini_Generated_Image_pc00dapc00dapc00.webp",
    alt: "Ambiente empresarial",
    category: "empresa",
  },
  {
    src: "/images/cozinha/772bb100-c4d4-4332-8d56-287fc326985f.webp",
    alt: "Cozinha sob medida",
    category: "cozinha",
  },
  {
    src: "/images/banheiro/Gemini_Generated_Image_vbbpdvbbpdvbbpdv.webp",
    alt: "Banheiro moderno",
    category: "banheiro",
  },
  {
    src: "/images/cozinha/33cea484-a2bd-4555-a90a-63b16a3cfcc8.webp",
    alt: "Projeto de cozinha",
    category: "cozinha",
  },
  {
    src: "/images/banheiro/Gemini_Generated_Image_cc5q2scc5q2scc5q.webp",
    alt: "Banheiro personalizado",
    category: "banheiro",
  },
  {
    src: "/images/escritorio/Gemini_Generated_Image_7kr5787kr5787kr5.webp",
    alt: "Escritório funcional",
    category: "escritorio",
  },
  {
    src: "/images/cozinha/e2f526eb-65f3-41f3-94e2-933391877e01.webp",
    alt: "Cozinha personalizada",
    category: "cozinha",
  },
  {
    src: "/images/escritorio/Gemini_Generated_Image_kevklckevklckevk.webp",
    alt: "Escritório elegante",
    category: "escritorio",
  },
  {
    src: "/images/cozinha/8529b0b9-660b-4e5c-a958-f540bfbdcaba.webp",
    alt: "Móveis de cozinha",
    category: "cozinha",
  },
  {
    src: "/images/cozinha/Gemini_Generated_Image_thmrf6thmrf6thmr.webp",
    alt: "Cozinha planejada premium",
    category: "cozinha",
  },
  {
    src: "/images/cozinha/Gemini_Generated_Image_t5k04pt5k04pt5k0.webp",
    alt: "Cozinha contemporânea",
    category: "cozinha",
  },
  {
    src: "/images/cozinha/Gemini_Generated_Image_anhdmtanhdmtanhd.webp",
    alt: "Cozinha moderna",
    category: "cozinha",
  },
  {
    src: "/images/cozinha/Gemini_Generated_Image_rmrlqlrmrlqlrmrl.webp",
    alt: "Cozinha funcional",
    category: "cozinha",
  },
  {
    src: "/images/cozinha/Gemini_Generated_Image_i9tne9i9tne9i9tn.webp",
    alt: "Cozinha integrada",
    category: "cozinha",
  },
  {
    src: "/images/banheiro/c1c977c7-51eb-4151-916c-9ca68b4a105e.webp",
    alt: "Banheiro planejado elegante",
    category: "banheiro",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "cozinha", label: "Cozinha" },
  { id: "banheiro", label: "Banheiro" },
  { id: "quarto", label: "Quarto" },
  { id: "closet", label: "Closet" },
  { id: "sala", label: "Sala" },
  { id: "escritorio", label: "Escritório" },
  { id: "empresa", label: "Empresa" },
  { id: "canto-alemao", label: "Canto Alemão" },
  { id: "despensa", label: "Despensa" },
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
