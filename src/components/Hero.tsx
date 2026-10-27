import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sprout } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteConfig.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[580px] sm:h-[640px] lg:h-[680px] bg-slate-900 overflow-hidden">
      {/* Slide Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Hero Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-green-950/50" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          
          {/* Crop Type Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-md text-green-300 text-xs font-semibold uppercase tracking-wider animate-fade-in">
            <Sprout className="w-4 h-4 text-green-400" />
            <span>{slides[currentSlide].cropType}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
            {slides[currentSlide].subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3.5 sm:items-center">
            <Link
              to={siteConfig.hero.primaryCtaLink}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold text-sm shadow-lg shadow-green-900/40 hover:shadow-green-900/60 transition-all hover:scale-[1.02]"
            >
              <span>{siteConfig.hero.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={siteConfig.hero.secondaryCtaLink}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold text-sm transition-all"
            >
              <span>{siteConfig.hero.secondaryCtaLink === "/ImageGallery" ? "View Gallery" : siteConfig.hero.secondaryCtaText}</span>
            </Link>
          </div>

          {/* Trust Banner */}
          <div className="pt-4 flex items-center gap-6 text-slate-300 text-xs font-medium border-t border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>100% Quality Tested Formulas</span>
            </div>
            <div className="flex items-center gap-2">
              <Sprout className="w-4 h-4 text-green-400" />
              <span>Tested Across Andhra Pradesh & Telangana</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md transition-all focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md transition-all focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-green-500' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
