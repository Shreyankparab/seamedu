"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    FaBrain,
    FaChartBar,
    FaShieldAlt,
    FaCloud,
    FaCode,
    FaInfinity,
    FaLink,
    FaPalette,
    FaArrowRight,
    FaCheckCircle
} from "react-icons/fa";

const programs = [
    {
        title: "Artificial Intelligence",
        duration: "3-Year Program",
        focus: [
            "Python & AI Programming",
            "Machine Learning",
            "Deep Learning & NLP",
            "Computer Vision",
        ],
        icon: FaBrain,
    },
    {
        title: "Data Science",
        duration: "3-Year Program",
        focus: [
            "Python & R",
            "Data Analysis & Visualization",
            "Statistics & Probability",
            "Big Data (Hadoop, Spark)",
        ],
        icon: FaChartBar,
    },
    {
        title: "Cyber Security",
        duration: "3-Year Program",
        focus: [
            "Ethical Hacking",
            "Network Security",
            "Penetration Testing",
            "Digital Forensics",
        ],
        icon: FaShieldAlt,
    },
    {
        title: "Cloud Computing",
        duration: "3-Year Program",
        focus: [
            "AWS & Azure",
            "Cloud Architecture",
            "Serverless Computing",
            "Cloud Security",
        ],
        icon: FaCloud,
    },
    {
        title: "Full Stack Development",
        duration: "3-Year Program",
        focus: [
            "HTML, CSS, JavaScript",
            "React & Next.js",
            "Node.js & APIs",
            "Database Design",
        ],
        icon: FaCode,
    },
    {
        title: "DevOps Engineering",
        duration: "3-Year Program",
        focus: [
            "Linux & Networking",
            "Docker & Kubernetes",
            "CI/CD Pipelines",
            "Cloud DevOps",
        ],
        icon: FaInfinity,
    },
    {
        title: "Blockchain Technology",
        duration: "3-Year Program",
        focus: [
            "Blockchain Fundamentals",
            "Smart Contracts (Solidity)",
            "Web3 Development",
            "Crypto Security",
        ],
        icon: FaLink,
    },
    {
        title: "UI/UX & Product Design",
        duration: "3-Year Program",
        focus: [
            "Design Thinking",
            "UI Design Systems",
            "UX Research",
            "Figma & Prototyping",
        ],
        icon: FaPalette,
    },
];

export default function ExploreProgramsSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05 }
        );

        const currentRef = sectionRef.current;

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-20 bg-slate-50 font-sans"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Academic Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Explore More Programs</h2>
                    <h3 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none mb-4">
                        Explore <span className="text-blue-600 not-italic">Technology</span> Specializations
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Industry-aligned curriculums designed to build strong technical foundations and career readiness.
                    </p>
                </div>

                {/* Compact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <AcademicProgramCard
                            key={index}
                            program={program}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AcademicProgramCard({ program, index, isInView }: { program: any; index: number; isInView: boolean }) {
    const Icon = program.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
        >
            <div className="h-full bg-white border border-slate-200 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/30 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-600 transition-colors duration-300">
                        {Icon && <Icon size={20} />}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase border border-slate-100 px-2 py-0.5 rounded">
                        {program.duration}
                    </span>
                </div>

                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        BCA in {program.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {program.focus.map((tag: string, i: number) => (
                            <span key={i} className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Curriculum <FaArrowRight size={10} />
                    </button>
                    <div className="text-[10px] font-bold text-slate-300">BCA.T3</div>
                </div>
            </div>
        </motion.div>
    );
}
