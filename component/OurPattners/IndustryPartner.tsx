"use client";

import React, { useState } from "react";

interface Partner {
    id: number;
    name: string;
    logo: string;
    description: string;
}

const partnersData: Partner[] = [
    {
        id: 1,
        name: "NASSCOM",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Nasscom_logo.svg/1200px-Nasscom_logo.svg.png",
        description: "This is the national standard-setting body for IT skills set up under the aegis of National Skill Development Corporation and Ministry of Skills Development & Entrepreneurship. It focuses on digital transformation and industry-ready talent pools.",
    },
    {
        id: 2,
        name: "APPLE",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        description: "The Apple Authorized Training Center for Education program provides unique benefits to institutions that incorporate Apple's Develop in Swift offering into their curriculum. It ensures high standards in software engineering training.",
    },
    {
        id: 3,
        name: "SONY",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
        description: "Sony is a company that aims to fill the world with emotion, through the power of creativity and technology. A company that bases its values on Dreams, Curiosity, Diversity, and Integrity. They collaborate with educational institutions for media and arts technology.",
    },
    // Duplicating for demo purposes to show load more functionality
    { id: 4, name: "SONY", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg", description: "Sony description repeat..." },
    { id: 5, name: "NASSCOM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Nasscom_logo.svg/1200px-Nasscom_logo.svg.png", description: "Nasscom description repeat..." },
    { id: 6, name: "APPLE", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", description: "Apple description repeat..." },
    { id: 7, name: "APPLE", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", description: "New Batch - Apple description..." },
    { id: 8, name: "NASSCOM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Nasscom_logo.svg/1200px-Nasscom_logo.svg.png", description: "New Batch - Nasscom..." },
    { id: 9, name: "SONY", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg", description: "New Batch - Sony..." },
];

export default function IndustryPartners() {
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <section className="bg-gray-200 py-12 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-black text-center text-gray-900 mb-12 uppercase tracking-tight">
                    Industry Partner
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partnersData.slice(0, visibleCount).map((partner) => (
                        <div
                            key={partner.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[380px] flex flex-col"
                        >
                            {/* Logo Container (Static) */}
                            <div className="h-2/3 flex flex-col items-center justify-center p-8 transition-opacity duration-300 group-hover:opacity-10">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-24 w-auto object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
                                />
                                <div className="text-center">
                                    <p className="text-gray-800 font-bold text-lg uppercase leading-tight">
                                        {partner.name === "APPLE" ? "Authorized Training Center" : partner.name}
                                    </p>
                                    {partner.name === "APPLE" && (
                                        <p className="text-gray-500 text-sm font-semibold">Education</p>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Label (Static) */}
                            <div className="h-1/3 bg-[#eff6ff] flex flex-col items-center justify-center border-t border-gray-100">
                                <span className="font-black text-gray-800 tracking-widest">{partner.name}</span>
                                <span className="text-blue-600 text-sm font-bold mt-1 cursor-pointer">Read More</span>
                            </div>

                            {/* Hover Content Overlay (Scrollable) */}
                            <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col pointer-events-none group-hover:pointer-events-auto">
                                <h3 className="font-black text-gray-900 mb-4 border-b pb-2">{partner.name}</h3>
                                <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 text-sm text-gray-600 leading-relaxed text-justify">
                                    {partner.description}
                                    {/* Long text to ensure scrollability */}
                                    <p className="mt-4">
                                        Providing direct exposure to studios, platforms, and ecosystems
                                        shaping today's creative economy. Our curriculum is aligned with national
                                        skill councils and global certification authorities.
                                    </p>
                                </div>
                                <button className="mt-4 text-left text-blue-600 font-bold text-sm">
                                    Close Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < partnersData.length && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={loadMore}
                            className="px-10 py-4 bg-blue-600 text-white font-black rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
        </section>
    );
}