import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ArrowRight, 
  Lock, 
  Layers
} from 'lucide-react';

import heroLogistics from '../assets/hero_logistics.jpg';
import heroPortTerminal from '../assets/hero_port_terminal.jpg';
import heroOceanVessel from '../assets/hero_ocean_vessel.jpg';
import heroAirCargo from '../assets/hero_air_cargo.jpg';

const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: heroLogistics,
    alt: 'Master Export Intermodal Freight & Port Logistics'
  },
  {
    id: 'slide-2',
    image: heroPortTerminal,
    alt: 'Master Export International Container Seaport Terminal'
  },
  {
    id: 'slide-3',
    image: heroOceanVessel,
    alt: 'Master Export Ocean Carrier Maritime Shipping'
  },
  {
    id: 'slide-4',
    image: heroAirCargo,
    alt: 'Master Export International Air Cargo Freight Hub'
  }
];

const AUTO_PLAY_INTERVAL = 2500; // Continuous rotation every 2.5 seconds

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Continuous automatic image transition (loops 1 -> 2 -> 3 -> 4 -> 1)
  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="relative min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden bg-[#000F2E] select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Master Export ERP Visual Showcase"
    >
      {/* Background Multi-Image Layer with Smooth Fast Crossfade & High Clarity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transform transition-transform duration-4000 ease-out brightness-[0.92] contrast-[1.06] ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {/* Subtle Transparent Overlay: High Image Visibility + High Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000F2E]/55 via-[#001848]/40 to-[#000F2E]/65 pointer-events-none z-1" />

      {/* Subtle Dark Vignette at Edges to ensure perfect contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#000F2E]/25 to-[#000F2E]/70 pointer-events-none z-1" />

      {/* Ambient Brand Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#004EAB]/20 blur-3xl pointer-events-none z-1" />

      {/* Centered Content Container with Screen-Fit Layout & High Contrast */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col items-center justify-center text-center">
        
        {/* Main Headline with drop shadow for crisp readability */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] max-w-3xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Global Trade Operations,{' '}
          <span className="bg-gradient-to-r from-[#BCD8F8] via-[#8FBDF3] to-white bg-clip-text text-transparent">
            Simplified.
          </span>
        </h1>

        {/* Short Supporting Description */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-base md:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          The centralized ERP platform built for export and import businesses. Manage orders, suppliers, customs compliance, and multi-currency financials from one unified platform.
        </p>

        {/* Direct Access Hero CTAs */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#modules"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] rounded-xl transition-all shadow-xl shadow-[#004EAB]/40 hover:shadow-[#004EAB]/60 transform hover:-translate-y-0.5"
          >
            <Layers className="w-4 h-4 text-[#BCD8F8]" />
            <span>Explore ERP Modules</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href="#workflow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#001848]/80 hover:bg-[#001848] backdrop-blur-md border border-white/30 rounded-xl transition-all shadow-lg hover:border-[#BCD8F8]/60"
          >
            <span>View Business Workflow</span>
          </a>
        </div>

        {/* Minimal Progress Bar & Slide Pill Indicators */}
        <div className="mt-8 sm:mt-10 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`group relative py-2 px-1 focus:outline-none`}
                aria-label={`Jump to slide ${idx + 1}`}
              >
                <div 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'w-8 sm:w-10 bg-[#004EAB] shadow-md shadow-[#004EAB]/80 ring-1 ring-[#BCD8F8]' 
                      : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/75'
                  }`}
                />
              </button>
            );
          })}
        </div>

      </div>

    </section>
  );
}
