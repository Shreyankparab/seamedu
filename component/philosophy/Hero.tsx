"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Plus, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function PhilosophyHero() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 md:pb-28 flex items-center min-h-[80vh]">
            {/* Subtle Gradient background instead of complex patterns */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-50/30 -skew-x-6 translate-x-20 pointer-events-none" />

            <div className="container mx-auto max-w-[1440px] px-8 md:px-12 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* --- Left Column: Simple & Punchy --- */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 mb-8"
                    >
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600">
                            Educational Partner Since 2008
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`font-sans text-[48px] md:text-[64px] lg:text-[76px] font-[800] text-slate-900 leading-[1.05] tracking-tight mb-8`}
                    >
                        Our <span className="text-blue-600">Mission</span> <br />
                        is Your Success.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className={`font-sans text-[18px] md:text-[20px] text-slate-500 font-medium max-w-[580px] leading-relaxed mb-10 text-justify`}
                    >
                        At Seamedu, we bridge the gap between creative passion and professional excellence. Our mission is to nurture the next generation of creative leaders through industry-integrated learning.
                    </motion.p>

                    {/* Simplified Mission Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 w-full max-w-2xl">
                        {[
                            "Industry-Driven Curriculum",
                            "Career-Ready Skills",
                            "Future-Focused Mindset",
                            "Hands-On Studio Training"
                        ].map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                                    <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className={`font-sans text-[16px] md:text-[17px] font-black text-slate-800 tracking-tight`}>
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- Right Column: Clean Visual --- */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end py-10 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full max-w-[480px]"
                    >
                        {/* Clean Image Mask / Frame */}
                        <div className="relative aspect-[1/1.1] rounded-[60px] overflow-hidden bg-slate-50 border-[8px] border-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)]">
                            <Image
                                src="/images/philosophy/Hero-Image.webp"
                                alt="Philosophy Hero"
                                fill
                                className="object-cover object-center grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                            {/* Decorative Corner Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
                        </div>

                        {/* Minimal Success Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[240px] bg-white p-5 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-50 flex items-center gap-4 z-20"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                                <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={3} />
                            </div>
                            <div className="flex flex-col">
                                <span className={`font-sans text-[22px] font-black text-slate-900 leading-none`}>2000+</span>
                                <span className={`font-sans text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1`}>Alumni Placed</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
