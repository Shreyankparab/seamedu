"use client";

import React from "react";
import {
    BookOpen,
    Code2,
    Users,
    Terminal,
    BarChart3,
    Award,
    MessageSquare,
    Briefcase,
    Rocket
} from "lucide-react";

const features = [
    { title: "Industry Curriculum", desc: "Designed for AI & Data Science careers.", icon: BookOpen },
    { title: "Live Projects", desc: "Real-world cases & exposure.", icon: Code2 },
    { title: "Expert Training", desc: "Industry led mentors & professionals.", icon: Users },
    { title: "Tech Tools", desc: "Python, ML & Big Data exposure.", icon: Terminal },
    { title: "Analytics Focus", desc: "Foundation in AI & problem-solving.", icon: BarChart3 },
    { title: "Global Certificates", desc: "Credentials in emerging tech.", icon: Award },
    { title: "Career Mentoring", desc: "Professional skill development.", icon: MessageSquare },
    { title: "Internship Access", desc: "Partnerships with industry leaders.", icon: Briefcase },
    { title: "Placement Support", desc: "Complete interview prep assistance.", icon: Rocket },
];

export default function WhyChooseSection() {
    return (
        <section className="py-16 md:py-20 bg-white overflow-hidden relative">
            <div className="max-w-[1250px] mx-auto px-6 lg:px-8 relative z-10">
                {/* Header - Compact Center */}
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 scale-90">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">The Seamedu Edge</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-[1000] text-slate-950 tracking-tighter italic leading-none mb-4">
                        Why Choose <span className="text-blue-600 not-italic">BCA in AI & Data Science</span>
                    </h2>

                    <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
                        Industry-ready curriculum designed for next-gen expertise in intelligence.
                    </p>
                </div>

                {/* Compact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group p-5 md:p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] transition-all duration-300 flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
                                    <Icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 text-[11px] font-semibold leading-tight mt-0.5 line-clamp-1">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}