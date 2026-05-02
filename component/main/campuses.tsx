"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";

const campuses = [
  {
    id: 1,
    name: "Ajeenkya D.Y. Patil University",
    img: "/images/campuses-main/ajinkya.png",
    location: "Pune",
    url: "#",
  },
  {
    id: 2,
    name: "The NorthCap University",
    img: "/images/campuses-main/NorthCap.png",
    location: "Gurugram",
    url: "#",
  },
  {
    id: 3,
    name: "Techno India University",
    img: "/images/campuses-main/Techno.png",
    location: "Kolkata",
    url: "#",
  },
  {
    id: 4,
    name: "D Y Patil University, Ambi",
    img: "/images/campuses-main/Ambi.png",
    location: "Pune",
    url: "#",
  },
  {
    id: 5,
    name: "Techno India University",
    img: "/images/campuses-main/Techno.png",
    location: "Kolkata",
    url: "#",
  },
];

export default function OurCampuses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("md");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 }); // Only rotate when 10% of section is visible

  // Track screen size
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) setScreenSize("sm");
      else if (window.innerWidth < 1024) setScreenSize("md");
      else setScreenSize("lg");
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Auto-slide logic with manual override reset - Only runs when in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % campuses.length);
    }, 4000); // Increased time for better readability
    return () => clearInterval(interval);
  }, [activeIndex, isInView]); // Reset timer whenever index changes or view state changes

  // Helper to calculate the shortest path in a circular array
  const getRelativeIndex = (index: number) => {
    const len = campuses.length;
    let rel = index - activeIndex;
    if (rel > len / 2) rel -= len;
    if (rel < -len / 2) rel += len;
    return rel;
  };

  // Responsive values based on screen size
  const getResponsiveValues = () => {
    switch (screenSize) {
      case "sm":
        return {
          containerHeight: "h-[380px]",
          cardWidth: "w-[280px]",
          cardHeight: "h-[340px]",
          translateX: 110,
          translateY: 15,
          textSize: "text-lg",
          titleSize: "text-lg",
          padding: "p-4",
          buttonText: "text-xs",
        };
      case "md":
        return {
          containerHeight: "h-[500px]",
          cardWidth: "w-[300px]",
          cardHeight: "h-[380px]",
          translateX: 140,
          translateY: 20,
          textSize: "text-xl",
          titleSize: "text-xl",
          padding: "p-7",
          buttonText: "text-sm",
        };
      case "lg":
      default:
        return {
          containerHeight: "h-[580px]",
          cardWidth: "w-[380px]",
          cardHeight: "h-[460px]",
          translateX: 240,
          translateY: 25,
          textSize: "text-2xl",
          titleSize: "text-3xl",
          padding: "p-10",
          buttonText: "text-sm",
        };
    }
  };

  const responsive = getResponsiveValues();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50 relative flex flex-col items-center justify-center py-20 md:py-28 px-4 overflow-hidden"
    >
      <div className="w-full max-w-6xl mb-12 sm:mb-16 flex flex-col items-center gap-2 relative z-20 text-center">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Locations</h2>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
          Our &nbsp;<span className="text-blue-700 not-italic">Campuses</span>
        </h2>
      </div>

      <motion.div
        className={`relative w-full max-w-full ${responsive.containerHeight} flex items-center justify-center overflow-visible z-10 ${screenSize === "lg" ? "" : "touch-none cursor-grab active:cursor-grabbing"}`}
        drag={screenSize === "lg" ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          const threshold = 50;
          if (info.offset.x < -threshold) {
            setActiveIndex((prev) => (prev + 1) % campuses.length);
          } else if (info.offset.x > threshold) {
            setActiveIndex((prev) => (prev - 1 + campuses.length) % campuses.length);
          }
        }}
      >
        <AnimatePresence mode="popLayout">
          {campuses.map((campus, index) => {
            const relIndex = getRelativeIndex(index);
            const distance = Math.abs(relIndex);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={campus.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  x: relIndex * responsive.translateX,
                  y: distance * (responsive as any).translateY,
                  scale: isActive ? 1.08 : 1 - distance * 0.15,
                  zIndex: 10 - distance,
                  opacity: distance > 2 ? 0 : 1,
                  filter: isActive
                    ? "brightness(100%) grayscale(0%)"
                    : "brightness(50%) grayscale(30%)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                  mass: 0.8,
                }}
                className={`absolute cursor-pointer ${responsive.cardWidth} ${responsive.cardHeight} rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white flex-shrink-0`}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={campus.img}
                    alt={campus.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Text overlay - only visible when active */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent flex flex-col justify-end ${responsive.padding} transition-all duration-500 ease-out ${isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                      }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-white text-xs md:text-sm" />
                      <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">{campus.location}</span>
                    </div>
                    <h3
                      className={`text-white font-[1000] leading-tight tracking-tighter mb-4 ${responsive.titleSize}`}
                    >
                      {campus.name}
                    </h3>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = campus.url;
                      }}
                      className={`w-fit bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-700 transition-all duration-300 group/btn flex items-center gap-3`}
                    >
                      <span>Explore Campus</span>
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover/btn:bg-blue-600 transition-colors">
                        <FaArrowRight className="text-[10px]" />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Navigation Indicators */}
      <div className="flex md:hidden gap-2 mt-6">
        {campuses.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 transition-all ${index === activeIndex
              ? "w-8 bg-blue-600"
              : "w-2 bg-slate-300 hover:bg-slate-400"
              } rounded-full`}
          />
        ))}
      </div>
    </section>
  );
}
