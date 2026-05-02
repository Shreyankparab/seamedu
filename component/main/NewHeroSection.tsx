"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const slides = [
  {
    id: 1,
    label: "1/5",
    bottomText: "School Of Media",
    tag: "School Of Media",
    heading: "Build Skills for the Modern Digital Media Industry",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=75&w=1600",
  },
  {
    id: 2,
    label: "2/5",
    bottomText: "School Of Design",
    tag: "School Of Design",
    heading: "Design the Future with Creativity & Innovation",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=75&w=1600",
  },
  {
    id: 3,
    label: "3/5",
    bottomText: "School Of Technology",
    tag: "School Of Technology",
    heading: "Build Powerful Digital Solutions for Tomorrow's World",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=75&w=1600",
  },
  {
    id: 4,
    label: "4/5",
    bottomText: "School Of Management",
    tag: "School Of Management",
    heading: "Industry-Focused Management Programs for Future Leaders",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=75&w=1600",
  },
  {
    id: 5,
    label: "5/5",
    bottomText: "School Of Hospitality",
    tag: "School Of Hospitality",
    heading: "Develop Skills for International Hospitality Careers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=75&w=1600",
  }
];

export default function NewHeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide, isAutoPlaying]);

  const toggleInquiry = () => {
    window.dispatchEvent(new CustomEvent('toggleInquiry'));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="relative w-full h-[93vh] sm:h-[100vh] min-h-[500px] bg-white overflow-hidden font-sans">

        {/* CINEMATIC BACKGROUND SLIDER */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "easeOut" }}
                className="relative w-full h-full will-change-transform"
              >
                <Image
                  src={slides[activeSlide].image}
                  alt=""
                  fill
                  priority={activeSlide === 0}
                  className="object-cover"
                  sizes="100vw"
                  quality={75}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 sm:hidden" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXT CONTENT - FULL LEFT ALIGNMENT & NAVBAR SAFE AREA */}
        <div className="absolute inset-0 bottom-24 sm:bottom-0 z-30 flex flex-col justify-start px-8 sm:pr-16 sm:pl-16 md:pl-24 pt-28 sm:pt-32 pb-32 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-[900px] pointer-events-auto"
            >
              <p className="text-blue-600 uppercase tracking-[0.4em] font-semibold mb-6 flex items-center gap-4 text-[10px] sm:text-xs">
                <span className="w-12 h-[1px] bg-blue-600/60 inline-block"></span>
                {slides[activeSlide].tag}
              </p>

              <h1 className="text-5xl sm:text-7xl lg:text-7xl font-semibold text-slate-900 leading-[1.15] tracking-tight text-balance">
                {slides[activeSlide].heading}
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-16 mt-10 sm:mt-16">
                <button
                  onClick={toggleInquiry}
                  className="group w-fit sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 px-8 sm:px-12 py-4 sm:py-5 font-semibold text-xs sm:text-base tracking-[0.1em] uppercase flex items-center justify-center gap-3 flex-shrink-0 whitespace-nowrap"
                >
                  Explore Program
                  <FaChevronRight className="text-[10px] sm:text-xs transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* VERTICAL DIVIDER - DESKTOP ONLY */}
                <div className="hidden sm:block w-[1px] h-16 bg-slate-200/60 self-center" />

                {/* SIGNATURE TRUST ROW - INTEGRATED NEXT TO BUTTON */}
                {/* <div className="flex flex-col gap-3">
                <p className="text-slate-500 uppercase tracking-[0.3em] font-bold text-[10px] sm:text-[11px] flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-slate-300"></span>
                  Certified By
                </p>
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 pointer-events-auto">
                  {slides[activeSlide].certifications.map((cert, index) => (
                    <motion.div
                      key={`${activeSlide}-${cert.name}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                      className="flex items-center justify-center transition-all duration-500 hover:scale-110 drop-shadow-sm group"
                    >
                      <div className="relative px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-sm group-hover:bg-white/40 group-hover:border-white/50 transition-all duration-500">
                        <img
                          src={cert.logo}
                          alt={cert.name}
                          className="h-5 sm:h-6 w-auto object-contain transition-all duration-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MOBILE SPECIFIC FOOTER NAV (REFERENCED IMAGE) */}
        <div className="absolute bottom-10 left-0 right-0 z-50 px-6 sm:hidden pointer-events-none">
          <div className="flex flex-col gap-4 pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="text-white text-[12px] font-black tracking-widest">{slides[activeSlide].label}</span>
              <div className="flex-1 h-[1px] bg-white/30 relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  key={activeSlide}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute h-full bg-white origin-left"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="text-white font-black uppercase text-[14px] tracking-widest">
                  {slides[activeSlide].bottomText}
                </h3>
              </div>
              <button onClick={nextSlide} className="flex items-center gap-2 text-white font-black uppercase text-[12px] tracking-widest">
                Next
                <FaChevronRight className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP INTEGRATED BOTTOM DOCK */}
        <div className="absolute bottom-0 left-0 right-0 z-40 bg-transparent hidden sm:block h-28">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-2 sm:gap-6">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                onMouseEnter={() => { setActiveSlide(idx); setIsAutoPlaying(false); }}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`relative flex flex-col items-center justify-center cursor-pointer transition-all duration-500 group h-full px-2 sm:px-6 flex-1 text-center ${activeSlide === idx ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}
              >
                <span className={`text-[10px] font-bold tracking-widest transition-all duration-500 mb-2 ${activeSlide === idx ? 'text-slate-900' : 'text-slate-400'}`}>
                  {slide.label}
                </span>
                <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-500 leading-tight max-w-[150px] ${activeSlide === idx ? 'text-blue-600' : 'text-slate-400/80 group-hover:text-slate-600'}`}>
                  {slide.bottomText}
                </span>
                {activeSlide === idx && (
                  <motion.div layoutId="activeIndicator" className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
