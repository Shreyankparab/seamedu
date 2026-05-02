"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-16 pb-20 md:pt-32 md:pb-28 lg:pt-28 lg:pb-56 flex items-center min-h-[90vh]">

            {/* --- Home Page Synced SVG Design Patterns --- */}

            {/* Dot Grid Pattern - Matches Home About Us Section */}
            <div className="absolute inset-0 opacity-[0.035] pointer-events-none -z-20"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0044cc 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Skewed Tech Shape - Matches Home About Us Section */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/5 -skew-x-12 translate-x-32 hidden lg:block -z-10" />

            {/* Subtle Atmospheric Glows */}
            <div className="absolute top-[10%] left-[5%] -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[10%] -z-10 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-[1440px] px-8 md:px-12 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* --- Left Column: Refined Typography --- */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-blue-600">
                            Established Since 2008
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[42px] md:text-[56px] lg:text-[76px] font-[1000] text-[#111827] leading-[1.05] tracking-[-0.04em] mb-8"
                    >
                        Pioneering the <br />
                        <span className="text-blue-600 block mt-2 whitespace-nowrap">
                            Future of Learning
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[17px] md:text-[20px] lg:text-[22px] font-semibold text-slate-500 leading-snug max-w-[620px] mb-10"
                    >
                        Bridging the gap between creativity and technology with Seamedu's industry-integrated excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                    >
                        <button className="flex items-center gap-4 px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[12px] rounded-2xl hover:bg-blue-700 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 group shadow-lg active:scale-95">
                            <Users className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                            <span>Our Philosophy</span>
                        </button>
                    </motion.div>
                </div>

                {/* --- Right Column: Unified Award Visual Area --- */}
                <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end py-10 lg:py-0">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative w-full max-w-[580px]"
                    >
                        {/* Decorative Dash Ring - Slow Rotation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-slate-100 rounded-full animate-[spin_60s_linear_infinite] -z-10" />

                        {/* High-End Brain Illustration */}
                        <div className="relative">
                            <img
                                src="/images/about-us/brain_no_bg.webp"
                                alt="Seamedu Innovation Symbol"
                                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* --- Home Page Styled Award Badge (Premium Design) --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center group cursor-default"
                        >
                            <div className="relative flex items-center justify-center min-w-[200px] h-[100px]">
                                {/* Laurel Wreath SVGs - Elegant and Minimalist */}
                                <div className="absolute inset-0 flex justify-center items-center gap-20 sm:gap-24 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                                    <svg width="45" height="90" viewBox="0 0 45 90" className="opacity-80">
                                        <path d="M40 85C20 85 5 65 5 45C5 25 20 5 40 5" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                                        {[...Array(6)].map((_, i) => (
                                            <circle key={i} cx={40 - (i * 4)} cy={15 + (i * 12)} r="3" fill="#3B82F6" className="opacity-40" />
                                        ))}
                                    </svg>
                                    <svg width="45" height="90" viewBox="0 0 45 90" className="opacity-80 scale-x-[-1]">
                                        <path d="M40 85C20 85 5 65 5 45C5 25 20 5 40 5" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                                        {[...Array(6)].map((_, i) => (
                                            <circle key={i} cx={40 - (i * 4)} cy={15 + (i * 12)} r="3" fill="#3B82F6" className="opacity-40" />
                                        ))}
                                    </svg>
                                </div>

                                {/* Award Text - Syncs with Home Awards */}
                                <div className="flex flex-col items-center justify-center relative z-10 pt-1 text-center">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 leading-none">RANK</span>
                                    <span className="text-3xl font-[1000] text-slate-900 leading-none tracking-tighter">26<span className="text-blue-600">TH</span></span>
                                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-2 leading-none whitespace-nowrap">ARIIA • 2020</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </section>
    );
}
