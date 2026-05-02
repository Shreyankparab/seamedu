"use client";

import React from "react";
import { FaChartLine, FaUniversity, FaBullhorn, FaGlobe, FaSearchDollar, FaTv, FaDesktop, FaShieldAlt, FaCode, FaUsers, FaDatabase } from "react-icons/fa";

const undergraduateCourses = [
    {
        title: "BBA Finance",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1591696208162-a9715df17446?auto=format&fit=crop&q=80&w=800",
        icon: <FaChartLine className="text-white text-3xl" />,
    },
    {
        title: "BBA In Banking & Financial Services",
        locations: ["Pune", "Gurugram"],
        image: "https://images.unsplash.com/photo-1550565118-3a14e8a0386f?auto=format&fit=crop&q=80&w=800",
        icon: <FaUniversity className="text-white text-3xl" />,
    },
    {
        title: "BBA In Digital Marketing",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        icon: <FaBullhorn className="text-white text-3xl" />,
    },
    {
        title: "BBA In International Business",
        locations: ["Pune", "Gurugram", "Kolkata"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
        icon: <FaGlobe className="text-white text-3xl" />,
    },
    {
        title: "BBA In Marketing",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800",
        icon: <FaSearchDollar className="text-white text-3xl" />,
    },
    {
        title: "BBA In Media Management",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1492619334760-22c0217a33ff?auto=format&fit=crop&q=80&w=800",
        icon: <FaTv className="text-white text-3xl" />,
    },
    {
        title: "BCA",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        icon: <FaDesktop className="text-white text-3xl" />,
    },
    {
        title: "BCA In Cyber Security & Forensics",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        icon: <FaShieldAlt className="text-white text-3xl" />,
    },
    {
        title: "B.Tech. CST",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        icon: <FaCode className="text-white text-3xl" />,
    },
    {
        title: "BBA-HR",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
        icon: <FaUsers className="text-white text-3xl" />,
    },
    {
        title: "BBA In Business Analytics",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        icon: <FaDatabase className="text-white text-3xl" />,
    },
];

export default function UndergraduateGrid() {
    return (
        <section className="bg-[#0c0c0c] py-24 font-sans text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                
                {/* Header Title */}
                <div className="mb-20 text-center">
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-xs relative inline-block mb-2">
                        Degree Programs
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-50 origin-center translate-y-1"></span>
                    </span>
                    <h2 className="text-xl md:text-2xl font-black text-blue-500 uppercase tracking-tight">
                        Under Graduate
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {undergraduateCourses.map((course, idx) => (
                        <div 
                            key={idx}
                            className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-blue-900/10 border border-white/5"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                            </div>

                            {/* Location Badges */}
                            <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                                {course.locations.map((loc, lIdx) => (
                                    <span 
                                        key={lIdx} 
                                        className="bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider"
                                    >
                                        {loc}
                                    </span>
                                ))}
                            </div>

                            {/* Card Content */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    {course.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-black text-white leading-tight transition-all duration-500 group-hover:text-blue-400">
                                    {course.title}
                                </h3>
                            </div>

                            {/* Subtle Glass Border Effect on Hover */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-3xl transition-all duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
