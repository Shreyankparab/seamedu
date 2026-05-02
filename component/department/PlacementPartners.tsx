"use client";

import React from "react";

const partners = [
    { name: "Sennheiser", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sennheiser_wordmark.svg" },
    { name: "Oeksound", logo: "https://oeksound.com/wp-content/themes/oeksound/dist/images/oeksound-logo.svg" },
    { name: "Eventide", logo: "https://www.eventideaudio.com/wp-content/themes/eventide/assets/dist/img/logo-eventide.svg" },
    { name: "Koolg", logo: "https://koolginteractives.com/wp-content/uploads/2021/04/cropped-Koolg-Interactives-Color-Logo.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
];

export default function PlacementPartners() {
    // Pool for seamless infinite scroll
    const marqueeItems = [...partners, ...partners, ...partners];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <style>{`
                @keyframes marquee-partners {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-partners {
                    animation: marquee-partners 30s linear infinite;
                }
                .animate-marquee-partners:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-20">
                {/* Section Title with Underline */}
                <div className="mb-14">
                    <h2 className="text-xl md:text-2xl font-black text-black tracking-tighter uppercase">
                        SUCCESSFULLY PLACED AT
                    </h2>
                    <div className="w-28 h-1 bg-blue-600 mt-2 rounded-full"></div>
                </div>
            </div>

            {/* Horizontal Scroll / Marquee Container */}
            <div className="relative w-full overflow-hidden py-6">
                {/* Fade Overlays */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <div className="flex items-center gap-20 md:gap-32 animate-marquee-partners w-max select-none px-4">
                    {marqueeItems.map((item, index) => (
                        <div 
                            key={`${item.name}-${index}`} 
                            className="flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer w-32 md:w-48"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-10 md:h-12 w-auto object-contain"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://ui-avatars.com/api/?name=${item.name.charAt(0)}&background=f8f9fa&color=334155&bold=true&size=100`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
