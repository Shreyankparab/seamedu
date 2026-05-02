"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket } from "react-icons/fa";

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full bg-white pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-slate-50/80 rounded-full blur-2xl -z-10" />

            {/* Background Decorative Element: Outlined Text (Subtle) */}
            <div className="absolute bottom-20 left-10 select-none pointer-events-none -z-10 opacity-[0.03]">
                <h2
                    className="text-[140px] font-black leading-none uppercase"
                    style={{ WebkitTextStroke: "2px #0f172a", color: "transparent" }}
                >
                    STUDENTS<br />WORK
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-6 flex flex-col items-start"
                    >
                        {/* Industry Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100 shadow-sm">
                            <FaCheckCircle className="text-blue-600 text-[10px]" />
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-blue-800">
                                Industry-Ready Portfolios & Success Stories
                            </span>
                        </div>

                        <h1 className="text-[40px] sm:text-[54px] lg:text-[60px] font-black text-[#0f172a] leading-[1.05] tracking-tight mb-6">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 uppercase">Student Work</span> <br />
                            & <span className="uppercase">Industry News</span>
                        </h1>

                        <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-[540px]">
                            Explore the innovative <span className="text-blue-600">projects</span>, professional <span className="text-blue-600">insights</span>, and comprehensive <span className="text-blue-600">career guidance</span> curated to bridge the gap between education and global industry standards.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-[56px] px-10 bg-[#0f172a] hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/20 flex items-center justify-center tracking-tight"
                            >
                                Explore Portfolios
                            </motion.button>

                            {/* <div className="hidden sm:flex items-center gap-3 ml-4 text-slate-400">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                            <img
                                                src={`https://i.pravatar.cc/100?u=student${i}`}
                                                alt="Student"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest">Joined by 2k+ Students</span>
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Area - Hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="hidden lg:block lg:col-span-6 relative"
                    >
                        <div className="relative w-full aspect-square max-w-[520px] mx-auto lg:ml-auto">
                            {/* Structured Background Shapes */}
                            <div className="absolute inset-0 bg-slate-50 rounded-[3rem] transform -rotate-3 scale-105" />
                            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] transform rotate-3 scale-100" />

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                                <Image
                                    src="/images/student-work/Hero-Image1.png"
                                    alt="Student Excellence"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Success Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-8 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 min-w-[200px]"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <FaRocket size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Career Velocity</div>
                                    <div className="text-[14px] font-bold text-slate-800">Placement Ready</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
