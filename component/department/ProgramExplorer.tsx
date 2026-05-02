"use client";

import React, { useState, useEffect } from "react";
import { FaChartLine, FaUniversity, FaBullhorn, FaGlobe, FaSearchDollar, FaTv, FaDesktop, FaShieldAlt, FaCode, FaUsers, FaDatabase, FaChevronDown } from "react-icons/fa";

const undergraduateCourses = [
    {
        title: "BBA Finance",
        locations: ["Pune"],
        image: "images/department/BBA-Finance.png",
        icon: <FaChartLine className="text-white text-2xl" />,
    },
    {
        title: "BBA Banking & Financial Services",
        locations: ["Pune", "Gurugram"],
        image: "images/department/BBA Banking&Financial-service.png",
        icon: <FaUniversity className="text-white text-2xl" />,
    },
    {
        title: "BBA In Digital Marketing",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        icon: <FaBullhorn className="text-white text-2xl" />,
    },
    {
        title: "BBA International Business",
        locations: ["Pune", "Gurugram", "Kolkata"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
        icon: <FaGlobe className="text-white text-2xl" />,
    },
    {
        title: "BBA In Marketing",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800",
        icon: <FaSearchDollar className="text-white text-2xl" />,
    },
    {
        title: "BBA In Media Management",
        locations: ["Pune"],
        image: "images/department/BBA Media Management.png",
        icon: <FaTv className="text-white text-2xl" />,
    },
];

const postgraduateCourses = [
    {
        title: "MBA Human Resources",
        locations: ["Pune", "Bangalore"],
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
        icon: <FaUsers className="text-white text-2xl" />,
    },
    {
        title: "MBA Business Analytics",
        locations: ["Pune"],
        image: "images/department/MBA Business-Analytics.png",
        icon: <FaDatabase className="text-white text-2xl" />,
    },
    {
        title: "MBA Finance & Strategy",
        locations: ["Pune"],
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
        icon: <FaChartLine className="text-white text-2xl" />,
    },
    {
        title: "MBA Digital Marketing",
        locations: ["Pune", "Gurugram"],
        image: "images/department/MBA-Digital-Marketing.png",
        icon: <FaBullhorn className="text-white text-2xl" />,
    },
];

export default function ProgramExplorer() {
    const [activeTab, setActiveTab] = useState<"UG" | "PG">("UG");
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleTabChange = (tab: "UG" | "PG") => {
        setActiveTab(tab);
        setShowAll(false);
    };

    const courses = activeTab === "UG" ? undergraduateCourses : postgraduateCourses;
    const displayedCourses = (isMobile && !showAll) ? courses.slice(0, 2) : courses;

    return (
        <section className="bg-white py-20 font-sans text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header - Synced with Home Style */}
                <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2 animate-fade-in">Academic Excellence</h2>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
                        Course <span className="text-blue-600 not-italic">Offering</span>
                    </h3>
                </div>

                {/* Modern Pill Toggle UI */}
                <div className="flex justify-center mb-12 sm:mb-16">
                    <div className="p-1.5 bg-slate-100/80 backdrop-blur-sm rounded-2xl flex items-center relative gap-1 border border-slate-200/60 shadow-inner">
                        {/* Dynamic sliding highlight */}
                        <div 
                            className={`absolute h-[calc(100%-12px)] top-[6px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white rounded-xl shadow-sm z-0 
                                ${activeTab === "UG" 
                                    ? "left-[6px] w-[135px] sm:w-[180px]" 
                                    : "left-[145px] sm:left-[190px] w-[135px] sm:w-[180px]"}`} 
                        />
                        
                        <button
                            onClick={() => handleTabChange("UG")}
                            className={`relative z-10 w-[135px] sm:w-[180px] py-3.5 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === "UG" ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-800"}`}
                        >
                            Under Graduate
                        </button>
                        <button
                            onClick={() => handleTabChange("PG")}
                            className={`relative z-10 w-[135px] sm:w-[180px] py-3.5 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === "PG" ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-800"}`}
                        >
                            Post Graduate
                        </button>
                    </div>
                </div>

                {/* Grid Layout with smaller, less "bulky" cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {displayedCourses.map((course, idx) => (
                        <div
                            key={activeTab + idx}
                            className="relative h-[300px] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 bg-[#121212] border border-white/5 animate-in fade-in slide-in-from-bottom-4"
                        >
                            {/* Background Image with Deep Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-all duration-700" />
                            </div>

                            {/* Minimal Location Tags */}
                            <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                                {course.locations.map((loc, lIdx) => (
                                    <span
                                        key={lIdx}
                                        className="bg-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest text-black shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1"
                                    >
                                        {loc}
                                    </span>
                                ))}
                            </div>

                            {/* Refined Content */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                                    {/* Minimalist Icon Container */}
                                    <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white transform transition-all duration-700 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                        {course.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-[1.2] tracking-tight transition-colors">
                                        {course.title}
                                    </h3>
                                    
                                    {/* Action Link - Always visible on mobile, interactive on desktop */}
                                    <div className="mt-5 flex items-center gap-2 transition-all duration-500 opacity-100 translate-x-0 sm:opacity-0 sm:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Discover More</span>
                                        <div className="w-6 h-[1px] bg-blue-500" />
                                        <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Suble Inner Border Glow */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/20 rounded-xl transition-all duration-700 pointer-events-none z-30" />
                        </div>
                    ))}
                </div>

                {/* Show More Button - Mobile Only */}
                {isMobile && !showAll && courses.length > 2 && (
                    <div className="mt-10 flex justify-center animate-in fade-in slide-in-from-top-4 duration-500">
                        <button
                            onClick={() => setShowAll(true)}
                            className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                        >
                            Show More Courses
                            <FaChevronDown className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                )}
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-20 -z-10" />
        </section>
    );
}
