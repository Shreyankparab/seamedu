"use client";

import React from "react";

const partners = [
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Adobe_Corporate_Logo.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
];

interface PlacementPartnerProps {
  titlePart1?: string;
  titlePart2?: string;
  count?: string;
}

export default function PlacementPartner({
  titlePart1 = "Placement",
  titlePart2 = "Partners",
  count = "500"
}: PlacementPartnerProps) {
  // Use 2 iterations and -50% for the most robust seamless loop
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header - Compact on mobile */}
        <div className="flex flex-col items-center mb-6 md:mb-12 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Our Network</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
            {titlePart1} &nbsp;<span className="text-blue-600 not-italic">{titlePart2}</span>
          </h3>
        </div>

        {/* Tightened Container */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-slate-50/80 rounded-3xl md:rounded-[2.5rem] p-5 md:p-12 border border-slate-200/50 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] relative group overflow-hidden">

          {/* Left Block: The Stat (Refined on mobile) */}
          <div className="flex items-center gap-4 md:gap-5 shrink-0 px-2 lg:px-6 relative z-20 bg-slate-50/10 backdrop-blur-md md:-ml-4 pl-4 py-2 md:py-4 pr-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter italic leading-none">{count}</span>
                <span className="text-3xl md:text-4xl font-black text-blue-600 leading-none">+</span>
              </div>
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest leading-none mt-1">Global Recruiters</p>
            </div>
          </div>

          {/* Stronger Divider */}
          <div className="hidden md:block w-px h-16 bg-slate-300 shrink-0 relative z-20" />

          {/* Right logos marquee */}
          <div className="relative flex-grow w-full mask-tight-left z-10 overflow-hidden">
            <div className="flex w-max items-center gap-10 md:gap-24 animate-flash-scroll hover:pause py-2 md:py-6">
              {scrollingPartners.map((partner, i) => (
                <div key={i} className="shrink-0 group cursor-pointer transition-all duration-300 transform hover:scale-110">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-14 w-auto object-contain transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=fff&color=111&bold=true&length=2&size=200`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <p className="mt-6 md:mt-8 text-center text-[10px] md:text-xs font-medium text-slate-400 italic">
          Powering student success for over <span className="text-blue-600 font-bold not-italic">17+ years</span> across the globe.
        </p>

      </div>

      <style>{`
        @keyframes flash-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); } 
        }
        .animate-flash-scroll {
          animation: flash-scroll 10s linear infinite;
        }
        .pause:hover {
          animation-play-state: paused;
        }
        .mask-tight-left {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
