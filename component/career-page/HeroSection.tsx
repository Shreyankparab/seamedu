"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBriefcase, FaArrowRight, FaAward, FaCheckCircle } from "react-icons/fa";

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full bg-white min-h-screen flex items-center pt-20 pb-6 lg:pt-24 lg:pb-8 overflow-hidden">
            {/* Subtle background blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-slate-50/80 rounded-full blur-2xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* ── LEFT: Text Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-start"
                    >
                        {/* Overline Tag */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                                Seamedu · Educational Partner
                            </span>
                        </div>

                        {/* Bold Editorial Heading */}
                        <h1 className="text-[38px] sm:text-[50px] lg:text-[58px] font-black text-[#0f172a] leading-[1.05] tracking-tighter mb-2">
                            Your Expertise.
                        </h1>
                        <h1 className="text-[38px] sm:text-[50px] lg:text-[58px] font-black leading-[1.05] tracking-tighter mb-2">
                            <span className="italic text-blue-600">Their</span>{" "}
                            <span className="text-[#0f172a]">Future.</span>
                        </h1>
                        <h1 className="text-[38px] sm:text-[50px] lg:text-[58px] font-black text-[#0f172a] leading-[1.05] tracking-tighter mb-8">
                            Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mission.</span>
                        </h1>

                        {/* Pull-quote style description */}
                        <div className="border-l-4 border-blue-600 pl-5 mb-8 max-w-[480px]">
                            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                                Join <span className="text-slate-900 font-bold">SEAMEDU</span> — and channel your industry experience into shaping the next wave of creative professionals in Media, Technology & Design.
                            </p>
                        </div>

                        {/* CTA Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <motion.button
                                whileHover={{ scale: 1.03, translateY: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="h-[52px] px-9 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-widest rounded-full shadow-xl shadow-blue-600/25 transition-all flex items-center gap-3 cursor-pointer"
                            >
                                View Openings <FaArrowRight className="text-xs" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-[52px] px-9 border border-slate-200 hover:border-slate-400 text-slate-500 hover:text-slate-800 font-bold text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer"
                            >
                                Submit CV
                            </motion.button>
                        </div>

                        {/* Trust row — avatars + stats inline */}
                        {/* <div className="flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
                                ))}
                            </div>
                            <div className="h-8 w-px bg-slate-200" />
                            <div className="flex flex-col">
                                <span className="text-sm font-black text-slate-800">500+ Faculty & Mentors</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Already part of our network</span>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* ── RIGHT: Clean Professional Visual ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Main card container */}
                        <div className="relative w-full max-w-[480px]">

                            {/* Primary image card */}
                            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 shadow-2xl shadow-slate-200/60">
                                <Image
                                    src="/images/career/hero-illustration.png"
                                    alt="Career at Seamedu"
                                    fill
                                    priority
                                    className="object-contain p-8"
                                />
                                {/* Subtle gradient overlay at bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-50/80 to-transparent" />
                            </div>

                            {/* Floating card — bottom left */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-5 -left-8 z-20 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
                            >
                                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                    <FaAward size={18} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Recognized By</div>
                                    <div className="text-sm font-black text-slate-800">UGC & NAAC Approved</div>
                                </div>
                            </motion.div>

                            {/* Floating tag — top right */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-4 -right-4 z-20 bg-white px-5 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2"
                            >
                                <FaCheckCircle className="text-green-500 text-xs" />
                                <span className="text-[11px] font-black text-slate-700 uppercase tracking-wide">Hiring Open</span>
                            </motion.div>

                            {/* Decorative dot grid - top right area */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 opacity-30" style={{
                                backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                                backgroundSize: "10px 10px"
                            }} />

                            {/* Decorative dot grid - bottom left area */}
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 opacity-20" style={{
                                backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                                backgroundSize: "10px 10px"
                            }} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
