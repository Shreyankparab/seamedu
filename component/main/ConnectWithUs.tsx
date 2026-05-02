"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ConnectWithUs() {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-[#05070a]">
            {/* Cinematic Background with Particle-like texture */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071" // Cinematic starry/particle dark sky
                    alt=""
                    className="w-full h-full object-cover opacity-30 grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-[#05070a]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-[#05070a]" />

                {/* Glowing Wave Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-600/10 rounded-full blur-[160px] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Standardized Eyebrow Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-300">Institutional Excellence</h2>
                    </motion.div>

                    {/* Main Call to Action Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight max-w-none">
                            Top Ranking Media, Design, Technology Management & Hospitality School in India
                        </h3>
                    </motion.div>

                    {/* Buttons Section matching the reference image's layout but using brand colors */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-6 mt-14"
                    >
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("toggleInquiry"))}
                            className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-black uppercase text-xs tracking-[2px] transition-all hover:scale-105 shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)] overflow-hidden"
                        >
                            <span className="relative z-10">Contact Us</span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>

                        <Link
                            href="#"
                            className="px-12 py-[1.125rem] border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/5 rounded-full font-black uppercase text-xs tracking-[2px] transition-all hover:-translate-y-1 active:scale-95"
                        >
                            Explore Program
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Ambient Lighting elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
