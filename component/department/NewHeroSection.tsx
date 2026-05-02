"use client";

import React from "react";
import { FaArrowRight, FaChartLine, FaStar, FaGlobe, FaAward, FaBuilding, FaUserTie, FaCheckCircle } from "react-icons/fa";

export default function NewHeroSection() {
    return (
        <section className="relative bg-white pt-16 pb-10 lg:pt-20 lg:pb-14 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-slate-50/80 rounded-full blur-2xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-6 flex flex-col items-start z-10">
                        {/* Industry Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mt-6 md:mt-8 mb-6 border border-blue-100 shadow-sm">
                            <FaCheckCircle className="text-blue-600 text-xs" />
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-blue-800">
                                Industry-Aligned Business Education
                            </span>
                        </div>

                        {/* High Impact Headline: Two Lines */}
                        <h1 className="text-[42px] sm:text-[56px] lg:text-[62px] font-black text-[#0f172a] leading-[1.05] tracking-tight mb-6">
                            Shape <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">Tomorrow&apos;s</span><br />
                            Business Leaders
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-[540px]">
                            Our School of Management bridges the gap between academic theory and global industry practice.
                            Master the intricacies of finance, strategy, and entrepreneurship through our curated
                            executive curriculum designed for the modern economy.
                        </p>

                        {/* CTA Buttons Row */}
                        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap items-center sm:gap-4 mb-8 w-full sm:w-auto">
                            <button className="h-[52px] sm:h-[56px] px-2 sm:px-8 bg-[#0f172a] hover:bg-blue-700 text-white text-[13px] sm:text-base font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/20 active:scale-95 flex items-center justify-center group tracking-tight">
                                Explore Programs
                            </button>
                            <button className="h-[52px] sm:h-[56px] px-2 sm:px-8 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[13px] sm:text-base font-bold rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center tracking-tight">
                                Download Brochure
                            </button>
                        </div>


                    </div>

                    {/* Right Column: Visual Area */}
                    <div className="lg:col-span-6 relative lg:translate-x-8 xl:translate-x-20">
                        <div className="relative w-full aspect-square max-w-[480px] mx-auto lg:ml-auto">

                            {/* Structured Background Shapes */}
                            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] transform -rotate-3 scale-105" />
                            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] transform rotate-3 scale-100" />

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/images/management_hero_v3.png"
                                    alt="Future Leaders"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom Inner Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Card: Top Left */}
                            {/* 
                            <div className="absolute -top-6 -left-8 md:-left-12 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-float-slow">
                                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                                    <FaChartLine className="text-indigo-600" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Business Analytics</div>
                                    <div className="text-[12px] font-bold text-slate-700">Data-driven curriculum</div>
                                </div>
                            </div>
                            */}

                            {/* Floating Card: Middle Right */}
                            {/* 
                            <div className="absolute top-1/4 -right-6 md:-right-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex flex-col gap-2 min-w-[160px] animate-float">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Placement Ready</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-blue-600 rounded-full" />
                                </div>
                            </div> 
                            */}

                            {/* Floating Card: Bottom Left */}
                            {/* 
                            <div className="absolute bottom-1/4 -left-6 md:-left-10 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3 animate-float-delayed">
                                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shadow-inner">
                                    <FaStar className="text-amber-500" />
                                </div>
                                <span className="text-[13px] font-bold text-slate-800">Leadership Development</span>
                            </div> 
                            */}

                            {/* Floating Card: Bottom Right */}
                            {/* 
                            <div className="absolute -bottom-4 right-4 md:-right-4 z-20 bg-white p-3 rounded-2xl shadow-2xl border border-blue-50 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-7 h-7 rounded-full border-2 border-white bg-blue-100 overflow-hidden">
                                        <img src="https://i.pravatar.cc/100?u=1" alt="Student" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full border-2 border-white bg-indigo-100 overflow-hidden">
                                        <img src="https://i.pravatar.cc/100?u=2" alt="Student" />
                                    </div>
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-blue-600">Global Exposure</span>
                            </div> 
                            */}
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { label: "Placement Support", value: "95%", sub: "Career Success", icon: <FaAward className="text-blue-600" /> },
                        { label: "Hiring Partners", value: "500+", sub: "World Class", icon: <FaBuilding className="text-blue-600" /> },
                        { label: "NAAC Accredited", value: "A++", sub: "Top Grade", icon: <FaStar className="text-blue-600" /> },
                        { label: "Mentorship", value: "Industry", sub: "Direct Access", icon: <FaUserTie className="text-blue-600" /> },
                    ].map((stat, i) => (
                        <div key={i} className="group px-4 py-3 md:px-6 md:py-4 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
                            <div className="flex items-center justify-between mb-2 md:mb-2.5">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <span className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">{stat.sub}</span>
                            </div>
                            <div className="text-2xl md:text-3xl font-black text-[#0f172a] mb-0.5 md:mb-1">{stat.value}</div>
                            <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-12px) translateX(5px); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(10px) translateX(-5px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
                .animate-float-delayed { animation: float 7s ease-in-out infinite 1s; }
            `}</style>
        </section>
    );
}
