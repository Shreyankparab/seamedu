"use client";

import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaFileSignature,
    FaFileUpload,
    FaTasks,
    FaUserGraduate,
    FaCheckCircle,
    FaGraduationCap,
    FaCalculator,
    FaPercentage,
    FaBrain
} from "react-icons/fa";

const processSteps = [
    {
        title: "Online Application Submission",
        desc: "Apply online for the program through our high-speed official admission portal with ease.",
        icon: FaFileSignature
    },
    {
        title: "Academic Document Verification",
        desc: "Our team meticulously verifies 10+2 mark sheets to ensure all academic standards are met.",
        icon: FaFileUpload
    },
    {
        title: "Eligibility / Merit Evaluation",
        desc: "Candidates are shortlisted through a transparent process based on academic merit and norms.",
        icon: FaTasks
    },
    {
        title: "Counseling & Program Orientation",
        desc: "Gain deep insights into the curriculum, industry exposure, and your future career roadmap.",
        icon: FaUserGraduate
    },
    {
        title: "Final Admission Confirmation",
        desc: "Secure your seat by completing formalities and becoming a part of our elite student community.",
        icon: FaCheckCircle
    },
];

const criteriaSteps = [
    {
        title: "10+2 Qualification",
        desc: "Successful completion of 10+2 or equivalent from any recognized educational board.",
        icon: FaGraduationCap
    },
    {
        title: "Mathematics Background",
        desc: "A strong foundation in Mathematics is required to excel in AI & Data Science fundamentals.",
        icon: FaCalculator
    },
    {
        title: "Minimum Aggregate Score",
        desc: "Meeting the minimum percentage threshold set by the university for the current intake.",
        icon: FaPercentage
    },
    {
        title: "Analytical & Logical Skills",
        desc: "A passion for problem-solving and logical reasoning is the key to mastering AI.",
        icon: FaBrain
    },
];

export default function AdmissionSectionAndCriteria() {
    const [activeTab, setActiveTab] = useState("process");

    return (
        <section className="relative pt-24 pb-8 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Joining Us</h2>
                    <h3 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none mb-4">
                        Admissions <span className="text-blue-600 not-italic">2026-27</span>
                    </h3>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-12 md:mb-20">
                    <div className="inline-flex p-1 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-200">
                        <button
                            onClick={() => setActiveTab("process")}
                            className={`px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === "process"
                                ? "bg-white text-blue-600 shadow-md md:scale-[1.02]"
                                : "text-slate-400 hover:text-slate-600"
                                }`}
                        >
                            Admission Process
                        </button>
                        <button
                            onClick={() => setActiveTab("criteria")}
                            className={`px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === "criteria"
                                ? "bg-white text-blue-600 shadow-md md:scale-[1.02]"
                                : "text-slate-400 hover:text-slate-600"
                                }`}
                        >
                            Eligibility Criteria
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "process" ? (
                            <motion.div
                                key="process"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="relative max-w-7xl mx-auto"
                            >
                                {/* Connected Card Chain (Desktop) / Compact List (Mobile) */}
                                <div className="mt-8 md:mt-12">
                                    <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-3">
                                        {processSteps.map((step, index) => {
                                            const Icon = step.icon;
                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 15 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                                    className="relative flex-1 group"
                                                >
                                                    <div className="relative p-4 md:p-8 h-full flex flex-row md:flex-col items-center md:items-start text-left transition-all duration-300 rounded-2xl bg-white border border-slate-100/80 hover:border-blue-100 shadow-sm md:shadow-none hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.06)]">
                                                        {/* Icon Node - More compact on mobile */}
                                                        <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-0 md:mb-6 mr-4 md:mr-0 shadow-md shadow-blue-100 group-hover:scale-105 transition-all flex-shrink-0">
                                                            <Icon size={16} />
                                                        </div>

                                                        <div className="flex-1">
                                                            {/* Step Meta - Sleeker */}
                                                            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1 md:mb-2 opacity-60 block">Step 0{index + 1}</span>

                                                            {/* Content - Smaller Typography */}
                                                            <h4 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                                                                {step.title}
                                                            </h4>
                                                            <p className="text-slate-500 text-[11px] md:text-[12px] leading-relaxed opacity-90">
                                                                {step.desc}
                                                            </p>
                                                        </div>

                                                        {/* Background Number - Hidden or tiny on mobile to save space */}
                                                        <span className="absolute top-2 right-4 text-4xl md:text-7xl font-[1000] text-slate-900/[0.04] select-none italic group-hover:text-blue-600/[0.06] transition-colors leading-none pointer-events-none">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="criteria"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="relative max-w-7xl mx-auto"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-8 md:mt-12">
                                    {criteriaSteps.map((criteria, index) => {
                                        const Icon = criteria.icon;
                                        const letters = ['A', 'B', 'C', 'D'];
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                                className="relative group"
                                            >
                                                <div className="relative p-4 md:p-8 h-full flex flex-row md:flex-col items-center md:items-start text-left transition-all duration-300 rounded-2xl bg-white border border-slate-100/80 hover:border-blue-100 shadow-sm md:shadow-none hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.06)] overflow-hidden">
                                                    {/* Icon Node - Minimalist */}
                                                    <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-50 text-slate-800 flex items-center justify-center mb-0 md:mb-6 mr-4 md:mr-0 border border-slate-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 flex-shrink-0">
                                                        <Icon size={18} />
                                                    </div>

                                                    {/* Criteria Content */}
                                                    <div className="relative z-10 flex-1">
                                                        <h4 className="text-[14px] md:text-[16px] font-bold text-slate-900 mb-1 md:mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                                            {criteria.title}
                                                        </h4>
                                                        <p className="text-slate-500 text-[11px] md:text-[12px] leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                                                            {criteria.desc}
                                                        </p>
                                                    </div>

                                                    {/* Bigger Floating Indicator - Adjusted size on mobile */}
                                                    <span className="absolute top-2 right-4 text-4xl md:text-7xl font-[1000] text-slate-900/[0.04] select-none group-hover:text-blue-600/[0.06] transition-colors duration-300 leading-none pointer-events-none">
                                                        {letters[index]}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60 -z-0"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] opacity-40 -z-0"></div>
        </section>
    );
}