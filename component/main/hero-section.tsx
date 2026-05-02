"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
const slides = [
  {
    id: 1,
    title: "School Of Media",
    colorClass: "bg-blue-600",
    glowClass: "shadow-[0_0_15px_rgba(37,99,235,0.8)]",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070",
    subheading: "School Of Media",
    heading: "Build Skills for the Modern Digital Media Industry",
    certifications: [
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        url: "#",
      },
      {
        name: "Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        url: "#",
      },
      {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        url: "#",
      },
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        url: "#",
      },
    ],
    placementStats: {
      highestPackageOffer: "8 LPA",
      totalRecruiters: "200+",
      placementAssistance: "100%",
      highestPackagePlaced: "10 LPA",
    },
  },
  {
    id: 2,
    title: "School Of Design",
    colorClass: "bg-blue-600",
    glowClass: "shadow-[0_0_15px_rgba(37,99,235,0.8)]",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070",
    subheading: "School Of Design",
    heading: "Design the Future with Creativity & Innovation",
    certifications: [
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        url: "#",
      },
      {
        name: "Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        url: "#",
      },
      {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        url: "#",
      },
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        url: "#",
      },
    ],
    placementStats: {
      highestPackageOffer: "6 LPA",
      totalRecruiters: "150+",
      placementAssistance: "100%",
      highestPackagePlaced: "8 LPA",
    },
  },
  {
    id: 3,
    title: "School Of Technology",
    colorClass: "bg-blue-600",
    glowClass: "shadow-[0_0_15px_rgba(37,99,235,0.8)]",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071",
    subheading: "School Of Technology",
    heading: "Build Powerful Digital Solutions for Tomorrow's World",
    certifications: [
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        url: "#",
      },
      {
        name: "Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        url: "#",
      },
      {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        url: "#",
      },
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        url: "#",
      },
    ],
    placementStats: {
      highestPackageOffer: "15 LPA",
      totalRecruiters: "500+",
      placementAssistance: "100%",
      highestPackagePlaced: "18 LPA",
    },
  },
  {
    id: 4,
    title: "School Of Management",
    colorClass: "bg-blue-600",
    glowClass: "shadow-[0_0_15px_rgba(37,99,235,0.8)]",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
    subheading: "School Of Management",
    heading: "Industry-Focused Management Programs for Future Leaders",
    certifications: [
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        url: "#",
      },
      {
        name: "Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        url: "#",
      },
      {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        url: "#",
      },
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        url: "#",
      },
    ],
    placementStats: {
      highestPackageOffer: "12 LPA",
      totalRecruiters: "300+",
      placementAssistance: "100%",
      highestPackagePlaced: "14 LPA",
    },
    link: "/department",
  },
  {
    id: 5,
    title: "School Of Hospitality",
    colorClass: "bg-blue-600",
    glowClass: "shadow-[0_0_15px_rgba(37,99,235,0.8)]",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    subheading: "School Of Hospitality",
    heading: "Develop Skills for International Hospitality Careers",
    certifications: [
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        url: "#",
      },
      {
        name: "Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        url: "#",
      },
      {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        url: "#",
      },
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        url: "#",
      },
    ],
    placementStats: {
      highestPackageOffer: "7 LPA",
      totalRecruiters: "180+",
      placementAssistance: "100%",
      highestPackagePlaced: "9 LPA",
    },
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const certAnimationDuration = 6; // seconds (lower = faster scroll) - 2x speed

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => {
      resetTimeout();
    };
  }, [activeSlide]);

  return (
    <div className="relative w-full h-[100vh] flex overflow-hidden bg-white font-sans">
      {/* FLOATING LEFT TIMELINE LIST - "DIFFERENT UI" */}
      <div className="absolute left-6 sm:left-12 top-0 h-[calc(100vh-6rem)] sm:h-[calc(100vh-7rem)] w-60 sm:w-72 flex flex-col justify-center z-40 hidden sm:flex">
        {/* Timeline background track */}
        <div className="absolute left-[11px] top-1/4 bottom-1/4 w-[2px] bg-slate-200 rounded-full" />

        <div className="flex flex-col gap-8 sm:gap-10 relative w-full">
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={slide.id}
                onMouseEnter={() => setActiveSlide(index)}
                className="group flex items-center cursor-pointer relative w-full"
              >
                {/* Timeline Dot container */}
                <div
                  className={`
                    w-6 h-6 rounded-full flex items-center justify-center relative z-10 
                    transition-all duration-500 ease-out border
                    ${isActive ? "bg-blue-50 border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]" : "border-transparent bg-transparent group-hover:border-slate-300"}
                  `}
                >
                  <div
                    className={`
                      w-3 h-3 rounded-full transition-all duration-500 shadow-sm
                      ${isActive ? "bg-blue-600" : "bg-slate-300 group-hover:bg-slate-400"}
                      ${isActive ? "scale-[1.2] shadow-[0_0_10px_rgba(37,99,235,0.5)]" : "scale-100"}
                    `}
                  />
                </div>

                {/* Timeline Text horizontally displayed */}
                <div
                  className={`
                    ml-6 whitespace-nowrap transition-all duration-500 font-medium uppercase
                    ${isActive ? "text-blue-600 text-[12px] sm:text-[13px] tracking-[0.2em] font-bold translate-x-3" : "text-slate-500 text-[10px] sm:text-[11px] tracking-[0.1em] group-hover:text-slate-800 group-hover:translate-x-1"}
                  `}
                >
                  {slide.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAIN BANNER SLIDES CONTENT */}
      <div className="relative flex-1 h-full w-full">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-[1.03] z-0"
                }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient layers for text readability and cinematic look */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent" />
              </div>

              {/* Text content container */}
              <div className="absolute inset-0 bottom-44 md:bottom-0 flex flex-col justify-center px-8 sm:pr-16 sm:pl-[360px] md:pl-[400px] pb-32">
                <div
                  className={`transition-all duration-[1200ms] ease-out delay-200 transform ${isActive
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                    }`}
                >
                  <p className="text-blue-600 uppercase tracking-[0.3em] font-bold mb-4 sm:mb-6 flex items-center gap-4 text-xs sm:text-sm">
                    <span className="w-8 sm:w-16 h-[2px] bg-blue-600 inline-block"></span>
                    {slide.subheading}
                  </p>
                  <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight max-w-[900px]">
                    {slide.heading}
                  </h1>
                  <Link
                    href={slide.link || "#"}
                    className="inline-block mt-8 rounded-md sm:mt-12 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-1000 px-6 sm:px-10 py-3 sm:py-4 font-bold text-sm sm:text-base tracking-[0.1em] uppercase shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] border border-transparent"
                  >
                    Explore Program
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* PLACEMENT STATS DISPLAY - ABOVE BOTTOM NAV */}
      <div className="absolute bottom-20 md:bottom-0 left-0 right-0 z-40 py-2">
        <div className="px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {slides[activeSlide].placementStats.highestPackageOffer}
                </div>
                <div className="text-xs md:text-sm text-slate-600 font-medium uppercase tracking-wide">
                  Highest Package Offer
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {slides[activeSlide].placementStats.totalRecruiters}
                </div>
                <div className="text-xs md:text-sm text-slate-600 font-medium uppercase tracking-wide">
                  Total Recruiters
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {slides[activeSlide].placementStats.placementAssistance}
                </div>
                <div className="text-xs md:text-sm text-slate-600 font-medium uppercase tracking-wide">
                  Placement Assistance
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {slides[activeSlide].placementStats.highestPackagePlaced}
                </div>
                <div className="text-xs md:text-sm text-slate-600 font-medium uppercase tracking-wide">
                  Highest Package Placed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* STATIC RIGHT FIXED ENQUIRY BUTTON */}
      {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] group">
        <button
          className="flex items-center justify-center bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs py-4 sm:py-4 px-2 sm:px-3 rounded-r-md shadow-[-5px_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-blue-700 hover:pr-4 border border-blue-500"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Inquiry Now
        </button>
      </div> */}

      {/* Required Keyframes for custom animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes progress { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
     @keyframes scroll-hero {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
      .animate-scroll-hero { animation: scroll-hero ${certAnimationDuration}s linear infinite; }
      @media (max-width: 768px) { .animate-scroll-hero { animation-duration: ${Math.max(1, certAnimationDuration / 1.5)}s; } }`,
        }}
      />
    </div>
  );
}