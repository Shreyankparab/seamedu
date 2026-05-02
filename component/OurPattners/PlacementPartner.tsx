"use client";

import React from "react";

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/23/Eventide_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ableton_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Avid_Logo.svg",
    "https://www.rationalacoustics.com/cdn/shop/files/Rational_Acoustics_Logo_Black_Large_200x.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Sennheiser_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Sennheiser-Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
];

// Duplicate the list to ensure the loop is seamless
const logoList = [...logos, ...logos, ...logos];

const LogoCard = ({ src }: { src: string }) => (
    <div className="flex-shrink-0 w-44 h-24 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-6 mx-3">
        <img src={src} alt="Partner Logo" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
    </div>
);

export default function PlacementPartners() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto mb-12 text-center">
                <h2 className="text-3xl font-black text-gray-900 uppercase inline-block relative">
                    Placement Partners
                    {/* <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-blue-600"></span> */}
                </h2>
            </div>

            <div className="flex flex-col gap-8">

                {/* ROW 1: Right to Left */}
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee flex">
                        {logoList.map((logo, i) => (
                            <LogoCard key={`row1-${i}`} src={logo} />
                        ))}
                    </div>
                    <div className="absolute top-0 animate-marquee2 flex">
                        {logoList.map((logo, i) => (
                            <LogoCard key={`row1-dup-${i}`} src={logo} />
                        ))}
                    </div>
                </div>

                {/* ROW 2: Left to Right */}
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee-reverse flex">
                        {logoList.map((logo, i) => (
                            <LogoCard key={`row2-${i}`} src={logo} />
                        ))}
                    </div>
                    <div className="absolute top-0 animate-marquee-reverse2 flex">
                        {logoList.map((logo, i) => (
                            <LogoCard key={`row2-dup-${i}`} src={logo} />
                        ))}
                    </div>
                </div>

                {/* ROW 3: Right to Left (Faster) */}
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee flex" style={{ animationDuration: '40s' }}>
                        {logoList.map((logo, i) => (
                            <LogoCard key={`row3-${i}`} src={logo} />
                        ))}
                    </div>
                    <div className="absolute top-0 animate-marquee2 flex" style={{ animationDuration: '40s' }}>
                        {logoList.map((logo, i) => (
                            <LogoCard key={`row3-dup-${i}`} src={logo} />
                        ))}
                    </div>
                </div>

            </div>

            {/* Custom Styles for Infinite Marquee */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-reverse2 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }

        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
        .animate-marquee-reverse2 {
          animation: marquee-reverse2 60s linear infinite;
        }

        /* Pause on hover */
        .overflow-x-hidden:hover .flex {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}