"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    category: "Portrait",
    alt: "Portrait Photography"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    category: "Wedding",
    alt: "Wedding Photography"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    category: "Fashion",
    alt: "Fashion Photography"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1986&auto=format&fit=crop",
    category: "Birthday",
    alt: "Birthday Photography"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop",
    category: "Graduation",
    alt: "Graduation Photography"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    category: "Portrait",
    alt: "Portrait Photography"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    category: "Wedding",
    alt: "Wedding Photography"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1980&auto=format&fit=crop",
    category: "Fashion",
    alt: "Fashion Photography"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    category: "Portrait",
    alt: "Portrait Photography"
  },
];

const categories = ["All", "Portrait", "Wedding", "Birthday", "Graduation", "Fashion"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-center text-text-body mb-12 max-w-2xl mx-auto">
          Explore our diverse collection of photography work across various categories
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-secondary text-black"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-80 group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-primary font-semibold">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
