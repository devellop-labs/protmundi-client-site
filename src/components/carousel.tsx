import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";

type ResponsiveConfig = {
  default: number;
  sm?: number;
  md?: number;
  lg?: number;
};

type Props = {
  children: React.ReactNode[];
  className?: string;
  indicators?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dotsClass?: string;
  slidesPerPage?: number;
  responsive?: ResponsiveConfig;
};

export function Carousel({
  children,
  className,
  dotsClass = "-bottom-14",
  indicators = false,
  autoplay = false,
  autoplaySpeed = 5000,
  slidesPerPage = 1,
  responsive = { default: 1, sm: 1, md: 1, lg: 1 },
}: Props) {
  const slides = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(slidesPerPage);
  const totalSlides = slides.length;

  const updateSlidesPerPage = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024 && responsive.lg) {
      setSlidesToShow(responsive.lg);
    } else if (width >= 768 && responsive.md) {
      setSlidesToShow(responsive.md);
    } else if (width >= 640 && responsive.sm) {
      setSlidesToShow(responsive.sm);
    } else {
      setSlidesToShow(responsive.default);
    }
  }, [responsive]);

  useEffect(() => {
    updateSlidesPerPage();
    window.addEventListener("resize", updateSlidesPerPage);
    return () => window.removeEventListener("resize", updateSlidesPerPage);
  }, [updateSlidesPerPage]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + slidesToShow >= totalSlides ? 0 : prevIndex + slidesToShow
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - slidesToShow : prevIndex - slidesToShow
    );
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, nextSlide]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Ajuste de largura e transform */}
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${(activeIndex / totalSlides) * 100}%)`,
          width: `${(100 * totalSlides) / slidesToShow}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${100 / totalSlides}%`, // Ajuste para exibir corretamente os slides
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Indicadores de Páginas */}
      <div
        className={`absolute ${dotsClass} left-1/2 transform -translate-x-1/2 flex space-x-2`}
      >
        {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index * slidesToShow)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index * slidesToShow
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-primary hover:scale-110"
              } transition-all`}
            />
          )
        )}
      </div>

      {/* Botão Anterior */}
      {indicators && (
        <button
          disabled={activeIndex == 0}
          onClick={prevSlide}
          className={`absolute top-1/2 -left-4 sm:left-0 transform -translate-y-1/2 py-2 rounded-full focus:outline-none
            ${activeIndex == 0 ? "text-neutral-400" : "text-primary"}`}
        >
          <ChevronLeft className="size-20 stroke-[0.5]" />
        </button>
      )}

      {/* Botão Próximo */}
      {indicators && (
        <button
          onClick={nextSlide}
          className={`absolute top-1/2 -right-4 sm:right-0 transform -translate-y-1/2 py-2 rounded-full focus:outline-none  ${
            activeIndex + slidesToShow >= totalSlides
              ? "text-neutral-400"
              : "text-primary"
          } `}
        >
          <ChevronRight className="size-20 stroke-[0.5]" />
        </button>
      )}
    </div>
  );
}
