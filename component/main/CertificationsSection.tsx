"use client";

import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const certifications = [
    { name: "Cisco", logo: "/images/certifications-images/cisco.svg" },
    { name: "SOLIDWORKS", logo: "/images/certifications-images/solidworks.svg" },
    { name: "Dante", logo: "/images/certifications-images/dante.svg" },
    { name: "AVID", logo: "/images/certifications-images/avid.svg" },
    { name: "Microsoft", logo: "/images/certifications-images/microsoft.svg" },
    { name: "IBM", logo: "/images/certifications-images/ibm.svg" },
    { name: "EC-Council", logo: "/images/certifications-images/ec-council.svg" },
    { name: "SketchUp", logo: "/images/certifications-images/sketchup.svg" },
    { name: "V-Ray", logo: "/images/certifications-images/v-ray.svg" },
    { name: "AUTODESK Maya", logo: "/images/certifications-images/autodesk-maya.svg" },
    { name: "Meta", logo: "/images/certifications-images/meta.svg" },
    { name: "Project Management Institute", logo: "/images/certifications-images/project-management-institute.svg" },
];

export default function Certifications() {
    const topRowItems = certifications.slice(0, 6);
    const bottomRowItems = certifications.slice(6, 12);

    // Double items array to allow infinite seamless marquee
    const topRowMarquee = [...topRowItems, ...topRowItems];
    const bottomRowMarquee = [...bottomRowItems, ...bottomRowItems];

    return (
        <section className="py-24 bg-[#f8f9fa] overflow-hidden">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 25s linear infinite;
                }
                .pause-on-hover:hover .animate-marquee,
                .pause-on-hover:hover .animate-marquee-reverse {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16 sm:mb-20">
                {/* Header */}
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                        Certifications
                    </h2>
                    {/* <div className="max-w-4xl mx-auto">
                        <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                            Seamedu empowers students with future-focused education in Media, Technology, and Management, Law, Hospitality, Pharmacy to built around real-world industry needs.Seamedu empowers students
                        </p>
                    </div> */}
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex flex-col gap-8 sm:gap-12 overflow-hidden pause-on-hover px-2 sm:px-0">

                {/* Top Row - Scroll Left to Right */}
                <div className="flex w-max animate-marquee-reverse">
                    {topRowMarquee.map((item, index) => (
                        <div key={`top-${index}`} className="px-4 sm:px-5 md:px-6 w-[220px] sm:w-[260px] md:w-[320px] shrink-0">
                            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-slate-100 p-8 flex items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all duration-500 transform hover:-translate-y-1 group">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-h-12 md:max-h-16 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://ui-avatars.com/api/?name=${item.name}&background=f8f9fa&color=334155&bold=true&size=200`;
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row - Scroll Right to Left */}
                <div className="flex w-max animate-marquee">
                    {bottomRowMarquee.map((item, index) => (
                        <div key={`bottom-${index}`} className="px-4 sm:px-5 md:px-6 w-[220px] sm:w-[260px] md:w-[320px] shrink-0">
                            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-slate-100 p-8 flex items-center justify-center min-h-[140px] md:min-h-[160px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-slate-200 transition-all duration-500 transform hover:-translate-y-1 group">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-h-12 md:max-h-16 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://ui-avatars.com/api/?name=${item.name}&background=f8f9fa&color=334155&bold=true&size=200`;
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left/Right Gradients for smooth fade in edge */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none z-10" />

            </div>
        </section>
    );
}
