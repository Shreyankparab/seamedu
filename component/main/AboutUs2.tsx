"use client";

import React from 'react';
import { FaCalendarAlt, FaShareAlt, FaUsers, FaMapMarkerAlt, FaArrowRight, FaAward, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';

const StatBlock = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
    <div className="flex flex-col items-center lg:items-start gap-1 group">
        <div className="flex items-center gap-2 mb-0.5">
            <Icon className="text-blue-600 text-base md:text-lg group-hover:scale-125 transition-transform" />
            <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none">{value}</div>
        </div>
        <div className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</div>
    </div>
);

const FeatureCard = ({ title, subtitle, desc, icon: Icon }: { title: string, subtitle: string, desc: string, icon: any }) => (
    <div className="bg-white border border-slate-100 p-4 sm:p-8 rounded-[24px] sm:rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group relative overflow-hidden h-full flex flex-row sm:flex-col items-start text-left gap-4 sm:gap-0">
        {/* Decorative background circle - hidden on mobile */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-50/50 rounded-full group-hover:scale-150 transition-transform duration-700 hidden sm:block"></div>

        <div className="shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center sm:mb-6 shadow-lg shadow-blue-100 group-hover:rotate-6 transition-transform">
                <Icon className="text-base sm:text-xl" />
            </div>
        </div>

        <div className="relative z-10 w-full">
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <div className="w-3 h-[1px] sm:w-4 sm:h-[1.5px] bg-blue-200 group-hover:w-8 transition-all"></div>
                <h4 className="text-[8px] sm:text-[9px] font-black text-blue-600 uppercase tracking-widest">{title}</h4>
            </div>
            <h3 className="text-[14px] sm:text-xl font-[1000] text-slate-800 mb-1.5 sm:mb-2 tracking-tight leading-tight">{subtitle}</h3>
            <p className="text-[11px] sm:text-[13px] text-slate-500 font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default function AboutUs2() {
    return (
        <section className="min-h-screen md:min-h-0 flex items-center justify-center bg-[#f0f4f8] py-20 md:py-28 relative overflow-hidden">

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0044cc 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/5 -skew-x-12 translate-x-24 hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                <div className="space-y-8 md:space-y-12">

                    {/* Top Row: Title and Stats */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-200 pb-8">
                        <div className="space-y-4 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <span className="w-8 md:w-12 h-[1px] bg-blue-600"></span>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Excellence Reimagined</h2>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter leading-none italic">
                                About <span className="text-blue-600 not-italic">Us.</span>
                            </h2>
                        </div>

                        {/* Stats - Grid on mobile */}
                        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center lg:justify-end gap-6 md:gap-10">
                            <StatBlock icon={FaUniversity} value="5+" label="Universities" />
                            <StatBlock icon={FaShareAlt} value="50+" label="Courses" />
                            <StatBlock icon={FaUsers} value="1000+" label="Team Size" />
                            <StatBlock icon={FaCalendarAlt} value="2008" label="Since" />
                        </div>
                    </div>

                    {/* Middle Row: Content Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <FeatureCard
                            icon={FaGraduationCap}
                            title="Who We Are"
                            subtitle="Industry-Aligned Since 2008"
                            desc="Empowering students with future-focused education in Media, Tech, and Management built around real-world needs."
                        />
                        <FeatureCard
                            icon={FaAward}
                            title="What We Teach"
                            subtitle="Designed for Tomorrow's Careers"
                            desc="From AI and Game Development to Filmmaking and Animation - blending creativity with technology."
                        />
                        <FeatureCard
                            icon={FaMapMarkerAlt}
                            title="Our Outcome"
                            subtitle="Experiential Learning Outcomes"
                            desc="Through workshops and industry projects, we bridge academia and industry to make you future-ready."
                        />
                    </div>

                    {/* Bottom Row: Recognition & CTA */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-4">
                        {/* Recognition bar - Optimized for mobile visibility */}
                        <div className="grid grid-cols-3 items-center bg-white px-2 sm:px-10 py-5 sm:py-7 rounded-[28px] sm:rounded-[2.2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 w-full lg:w-auto overflow-hidden relative">

                            <div className="flex flex-col items-center justify-center px-1 sm:px-10 relative z-10 grow group/item min-h-[50px] sm:min-h-[60px]">
                                {/* Ghost number background - Now more refined and 'edge-clung' on desktop */}
                                <span className="absolute top-[-8px] left-[-4px] sm:top-[-15px] sm:left-[-10px] text-[24px] sm:text-[40px] font-[1000] text-blue-100/50 italic select-none -z-10 group-hover/item:text-blue-100 transition-colors">01</span>
                                <div className="text-sm sm:text-2xl font-[1000] text-blue-600 tracking-tight italic relative z-10">RANK 26</div>
                                <div className="text-[7px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 text-center whitespace-nowrap relative z-10">ARIIA 2020</div>
                            </div>

                            <div className="flex flex-col items-center justify-center px-1 sm:px-10 relative z-10 grow group/item min-h-[50px] sm:min-h-[60px]">
                                {/* Ghost number background - Now more refined and 'edge-clung' on desktop */}
                                <span className="absolute top-[-8px] left-[-4px] sm:top-[-15px] sm:left-[-10px] text-[24px] sm:text-[40px] font-[1000] text-blue-100/50 italic select-none -z-10 group-hover/item:text-blue-100 transition-colors">02</span>
                                <div className="text-sm sm:text-2xl font-[1000] text-slate-900 tracking-tight italic relative z-10">5-STAR</div>
                                <div className="text-[7px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 text-center whitespace-nowrap relative z-10">Rating</div>
                            </div>

                            <div className="flex flex-col items-center justify-center px-1 sm:px-10 relative z-10 grow group/item min-h-[50px] sm:min-h-[60px]">
                                {/* Ghost number background - Now more refined and 'edge-clung' on desktop */}
                                <span className="absolute top-[-8px] left-[-4px] sm:top-[-15px] sm:left-[-10px] text-[24px] sm:text-[40px] font-[1000] text-blue-100/50 italic select-none -z-10 group-hover/item:text-blue-100 transition-colors">03</span>
                                <div className="text-sm sm:text-2xl font-[1000] text-blue-600 tracking-tight italic relative z-10">TOP</div>
                                <div className="text-[7px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 text-center whitespace-nowrap relative z-10">University Partner</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                            <div className="text-center sm:text-right">
                                <div className="text-sm font-black text-slate-800">Balewadi, Pune</div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1 uppercase">Head Office Location</div>
                            </div>
                            <Link
                                href="#"
                                className="flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-[2px] transition-all hover:bg-blue-600 hover:-translate-y-1 active:scale-95 group w-full sm:w-auto"
                            >
                                <span>Explore More</span>
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
