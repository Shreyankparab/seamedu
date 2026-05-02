"use client";

import React from "react";
import { GraduationCap, Sparkles, Rocket } from "lucide-react";

// Individual Core Value Card Component - Re-engineered for pixel-perfect match to reference
const ValueCard = ({
    iconSrc,
    title,
    desc,
    highlightedTitle,
    highlights,
    hasLeftAccent = false
}: {
    iconSrc: string;
    title: React.ReactNode;
    desc: string;
    highlightedTitle: string;
    highlights: string[];
    hasLeftAccent?: boolean;
}) => {
    // Advanced highlighting logic for the description text
    const renderDescription = (text: string, highlightWords: string[]) => {
        if (!highlightWords || highlightWords.length === 0) return text;

        const pattern = highlightWords
            .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('|');
        const regex = new RegExp(`(${pattern})`, 'gi');

        return (
            <>
                {text.split(regex).map((part, i) => {
                    const isHighlight = highlightWords.some(
                        hw => hw.toLowerCase() === part.toLowerCase()
                    );
                    if (isHighlight) {
                        return (
                            <span key={i} className="text-[#2563EB] font-[1000]">
                                {part}
                            </span>
                        );
                    }
                    return part;
                })}
            </>
        );
    };

    return (
        <div className="relative group h-full flex justify-center">
            {/* Visual Blue Sideline Accent - Only for the first card in the row */}
            {hasLeftAccent && (
                <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-blue-600 rounded-full z-20 hidden md:block" />
            )}

            <div className="bg-white rounded-[45px] px-6 py-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-50 flex flex-col items-center xl:items-start text-center xl:text-left relative overflow-hidden w-full max-w-[310px] mx-auto h-[360px] transition-all duration-500 hover:shadow-[0_45px_80px_-20px_rgba(0,0,0,0.18)]">

                {/* Smooth Gradient Background - Fades from Blue to White with 0 differentiation */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#9CB4F1] via-[#E7EFFF] to-white" />

                <div className="relative z-10 w-full flex flex-col items-center xl:items-start">
                    <div className="relative mb-6 transform transition-transform duration-500 group-hover:scale-105 self-center">
                        <img
                            src={iconSrc}
                            alt="Value Icon"
                            className="w-[105px] h-[105px] object-contain drop-shadow-[0_8px_15px_rgba(255,255,255,0.4)] drop-shadow-[0_12px_12px_rgba(0,0,0,0.1)]"
                        />
                    </div>

                    {/* Title with Precise Blue Highlighting */}
                    <h3 className="text-[17px] font-black text-[#1a1a1a] leading-[1.2] mb-4 xl:text-left text-center">
                        {title} <span className="text-[#2563EB]">{highlightedTitle}</span>
                    </h3>

                    {/* Description with Highlighted Keywords - Aligned Left with Defined Right Gap */}
                    <div className="text-[13.5px] font-medium text-slate-800 leading-[1.4] text-left w-full xl:pr-[15px] tracking-[-0.01em]">
                        {renderDescription(desc, highlights)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Foundations() {
    return (
        <section className="py-28 bg-white overflow-hidden">
            <div className="container mx-auto max-w-[1440px] px-8 md:px-12 lg:px-24">

                {/* Section headers aligned to their respective columns */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mb-12">
                    <div className="xl:col-span-4">
                        <h2 className="text-[38px] md:text-[46px] font-black tracking-tight flex flex-col md:flex-row gap-x-3 leading-none">
                            <span className="text-black">Our</span>
                            <span className="text-[#2563eb]">Foundation</span>
                        </h2>
                    </div>
                    <div className="xl:col-span-8">
                        <h2 className="text-[38px] md:text-[46px] font-black tracking-tight flex flex-col md:flex-row gap-x-3 leading-none">
                            <span className="text-black">Core</span>
                            <span className="text-[#2563eb]">Values</span>
                        </h2>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-stretch">

                    {/* Left Feature Column: Foundation Photo with Fixed Dimensions */}
                    <div className="xl:col-span-4 relative flex items-center justify-start xl:justify-start">
                        {/* Accent Bar - Aligned to fixed height */}
                        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1.5 h-[200px] bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)] z-20 hidden xl:block" />

                        <div className="rounded-[40px] overflow-hidden shadow-2xl border border-slate-50 w-full max-w-[488px] h-[360px] relative transition-transform duration-500 hover:scale-[1.01]">
                            <img
                                src="/images/about-us/about-us-foundation.png"
                                alt="Seamedu Foundation"
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle Glass Bottom Tint */}
                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Strategy Column: The Key Value Cards */}
                    <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Education since 2008 - Exact Match */}
                        <ValueCard
                            iconSrc="/images/about-us/Eduction-Icon.png"
                            title={<>Industry-Aligned<br />Education Since</>}
                            highlightedTitle="2008"
                            desc="Seamedu empowers students with future-focused education in Media, Technology, and Management, built around real-world industry needs."
                            highlights={["Seamedu", "Media,", "Technology,", "and", "Management,"]}
                            hasLeftAccent={true}
                        />

                        {/* Card 2: Careers */}
                        <ValueCard
                            iconSrc="/images/about-us/Stars-Icon.png"
                            title="Programs Designed for Tomorrow's"
                            highlightedTitle="Careers"
                            desc="From AI, Data Science, and Game Development to Filmmaking, Animation, and Management - our curriculum blends creativity, technology."
                            highlights={["AI,", "Data", "Science,", "and", "Game", "Development", "to", "Filmmaking,", "Animation,", "and", "Management"]}
                        />

                        {/* Card 3: Outcomes */}
                        <ValueCard
                            iconSrc="/images/about-us/Real-outcome.png"
                            title="Experiential Learning,"
                            highlightedTitle="Real Outcomes"
                            desc="Through workshops, industry projects, and internships, we bridge academia and industry to make students not just job-ready, but future-ready."
                            highlights={["workshops,", "industry", "projects,", "and", "internships,", "future-ready."]}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
