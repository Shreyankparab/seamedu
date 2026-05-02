"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const campusData = [
    {
        university: "The NorthCap University",
        location: "Delhi NCR",
        image: "/images/campuses-main/NorthCap.png",
        description: "Choose The NorthCap University to not only explore and discover your path but also for far-reaching guidance towards your goals. We recognize that each student's journey is unique.",
    },
    {
        university: "Ajeenkya DY Patil University",
        location: "Pune",
        image: "/images/campuses-main/ajinkya.png",
        description: "Choose Ajeenkya DY Patil University, to not only explore and discover your path but also for far-reaching guidance towards your goals. We recognize that each student's ambitions deserve excellence.",
    },
    {
        university: "Techno India University",
        location: "Bengaluru",
        image: "/images/campuses-main/Techno.png",
        description: "Choose Techno India University to not only explore and discover your path but also for far-reaching guidance towards your goals. We recognize that each student is a future innovator.",
    },
];

export default function ProgramAvailability() {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Our Campuses</h2>
                    <h3 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none mb-4">
                        Program <span className="text-blue-600 not-italic">Available At</span>
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Join our world-class learning centers in collaboration with leading universities across India.
                    </p>
                </div>

                {/* Campus Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {campusData.map((campus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-100/80 shadow-sm hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Campus Image - Priority Layout */}
                            <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                                <Image
                                    src={campus.image}
                                    alt={campus.university}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Compact Content Section */}
                            <div className="p-5 flex-1 flex flex-col">
                                <h4 className="text-lg font-black text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors">
                                    {campus.university}
                                </h4>
                                <div className="flex items-center gap-1 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">
                                    <FaMapMarkerAlt size={10} className="text-blue-600" />
                                    <span>{campus.location}</span>
                                </div>

                                <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {campus.description}
                                </p>

                                <div className="mt-auto">
                                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 cursor-pointer">
                                        Explore <FaArrowRight size={10} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
