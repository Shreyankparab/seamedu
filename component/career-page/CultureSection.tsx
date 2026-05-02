"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaUsers, FaProjectDiagram } from "react-icons/fa";

const cultureItems = [
    {
        icon: <FaGraduationCap />,
        title: "Academic Excellence",
        description: "We are committed to delivering world-class creative education that sets new industry benchmarks."
    },
    {
        icon: <FaTools />,
        title: "Industry Focused",
        description: "Our curriculum is shaped by experts, ensuring our students and faculty are always ahead of the curve."
    },
    {
        icon: <FaUsers />,
        title: "Collaborative Spirit",
        description: "We believe in the power of collective creativity and foster an environment of shared growth."
    },
    {
        icon: <FaProjectDiagram />,
        title: "Innovation First",
        description: "Embracing the latest technologies in Media and IT to solve modern educational challenges."
    }
];

const CultureSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#f8fafc] border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center text-center mb-20">
                    <span className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4">Our DNA</span>
                    <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter italic uppercase leading-none mb-6">
                        Why Build a Career <span className="text-blue-600 not-italic">at Seamedu?</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-base md:text-lg font-medium leading-relaxed">
                        Join a legacy of excellence where we bridge the gap between passion and professional success through state-of-the-art creative education.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cultureItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(31,38,135,0.05)] hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase italic transition-colors tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-[13px] font-medium text-slate-400 leading-relaxed group-hover:text-slate-500 transition-colors">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CultureSection;
