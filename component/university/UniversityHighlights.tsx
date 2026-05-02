"use client";

import {
    FaAward,
    FaLightbulb,
    FaHandshake,
    FaGlobeAsia,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

export default function UniversityHighlight() {
    return (
        <section className="py-20 bg-slate-50/50 relative overflow-hidden font-sans">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/4" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Title - Synced with Premium Style */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2 animate-fade-in">State-of-the-Art Learning</h2>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
                        Ajeenkya DY Patil <span className="text-blue-600 not-italic">University</span>
                    </h3>
                </div>

                {/* Top 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 mt-10">
                    <Card
                        icon={<FaAward size={24} />}
                        title="NAAC A+ Accredited"
                        text="Top NAAC Grade A+ Accredited University Ensures the highest Standard Of Education"
                    />

                    <Card
                        icon={<MdLocationCity size={24} />}
                        title="Urban Gurugram Campus"
                        text="State-of-the-art Campus in the heart of Gurugram, Haryana, a thriving corporate hub"
                    />

                    <Card
                        icon={<FaLightbulb size={24} />}
                        title="Industry-Driven Curriculum"
                        text="Programs designed in Collaboration with industry leaders to align with current market needs"
                    />

                    <Card
                        icon={<FaHandshake size={24} />}
                        title="Strong Industry Partnership"
                        text="Collaborations with leading companies for research, internship, and placements"
                    />
                </div>

                {/* Bottom Row - Height Balanced */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
                    <Card
                        icon={<FaGlobeAsia size={24} />}
                        title="Global Exposure & Internship"
                        text="Opportunities for international exposure and internship with top companies worldwide"
                    />

                    {/* Center Campus Card - Adjusted for full image visibility */}
                    <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col items-center justify-center min-h-[260px] p-6">
                        <img
                            src="/images/university-page/adypu-3d2.svg"
                            alt="Campus"
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Interactive overlay */}
                        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
                    </div>

                    <Card
                        icon={<FaAward size={24} />}
                        title="Premier Institution"
                        text="A legacy of excellence in shaping global leaders through world-class academic resources"
                    />
                </div>
            </div>
        </section>
    );
}

/* Slimmer Card Component */
function Card({ icon, title, text }: any) {
    return (
        <div className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden h-full flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/0 group-hover:from-blue-50/30 transition-all duration-500 -z-0" />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    {icon}
                </div>

                <h3 className="font-black text-xs md:text-sm text-slate-800 mb-3 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-medium">
                    {text}
                </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </div>
    );
}