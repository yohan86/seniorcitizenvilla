"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: "1",
    title: "Luxury Single-Story Villa",
    description: "Designed for effortless mobility with zero-step entryways and wide corridors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
  {
    id: "2",
    title: "Community Clubhouse & Gardens",
    description: "Beautifully landscaped walking trails with plenty of shaded seating.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
  },
  {
    id: "3",
    title: "24/7 Wellness & Care Center",
    description: "On-site medical assistance and continuous monitoring for peace of mind.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
  },
];

export default function VillaSlider() {
  // Configured with Autoplay delay of 4000ms
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

 useEffect(() => {
  if (!emblaApi) return;

  // Sync state safely on initial mount without blocking current render
  queueMicrotask(() => {
    onSelect();
  });

  // Listen for Embla slide transitions
  emblaApi.on("select", onSelect);

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi, onSelect]);

  return (
    <section className="relative w-full max-w-[1600px] mx-auto">
      <div className="overflow-hidden shadow-lg" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-[450px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === "1"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                <p className="text-base md:text-lg text-slate-200 max-w-2xl">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={scrollPrev}
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-md transition-all focus:ring-2 focus:ring-teal-600"
      >
        &#10094;
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-md transition-all focus:ring-2 focus:ring-teal-600"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all ${
              index === selectedIndex ? "w-8 bg-teal-700" : "w-3 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}