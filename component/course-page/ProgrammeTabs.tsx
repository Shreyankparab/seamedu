"use client";

import { useState } from "react";
import React from "react";
// Importing React Icons (FontAwesome 6 and HeroIcons 2)
import {
    FaPlus,
    FaMinus,
    FaBriefcase,
    FaBoxesStacked,
    FaGamepad,
    FaLayerGroup,
    FaTrophy,
    FaGlobe,
    FaUserCheck,
    FaMicrochip,
    FaDatabase,
    FaBrain,
    FaGraduationCap,
    FaCircleCheck,
    FaPalette,
    FaCalendarCheck,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const phases = [
    {
        icon: FaMicrochip,
        title: "Foundations of Computing",
        desc: "Build the structural knowledge required for high-level technical innovation.",
        points: ["Mathematics for AI", "Programming in C", "Computer Architecture"],
    },
    {
        icon: FaDatabase,
        title: "Core Data Science",
        desc: "Learn to extract insights from data using modern analytics tools.",
        points: ["Statistics & Probability", "Python for Data Science", "Data Visualization"],
    },
    {
        icon: FaBrain,
        title: "Machine Learning Mastery",
        desc: "Transition from manual analysis to automated learning systems.",
        points: ["Supervised Learning", "Neural Networks", "Model Evaluation"],
    },
    {
        icon: HiSparkles,
        title: "Advanced AI & Big Data",
        desc: "Scale your expertise to state-of-the-art AI systems.",
        points: ["Deep Learning", "Natural Language Processing", "Big Data Analytics"],
    },
    {
        icon: FaGraduationCap,
        title: "Capstone & Internship",
        desc: "Bridge academia and industry with real-world experience.",
        points: ["Real-world Project", "Industry Mentorship", "Career Placement Support"],
    },
    {
        icon: FaMicrochip,
        title: "Foundations of Computing",
        desc: "Build the structural knowledge required for high-level technical innovation.",
        points: ["Mathematics for AI", "Programming in C", "Computer Architecture"],
    },
];

const TABS = ["Quick Look", "Curriculum", "Key Highlights"];

const highlights = [
    { icon: FaBriefcase, title: "100% Placement Support" },
    { icon: FaMicrochip, title: "Hands-on AI Projects" },
    { icon: FaDatabase, title: "Data Science Mastery" },
    { icon: FaBrain, title: "Advanced Machine Learning" },
    { icon: FaGraduationCap, title: "Global Certifications" },
    { icon: HiSparkles, title: "Modern Computing Labs" },
    { icon: FaUserCheck, title: "Expert Industry Mentors" },
    { icon: FaGlobe, title: "Real-world Case Studies" },
    { icon: FaCalendarCheck, title: "Industry Workshops" },
    { icon: FaBriefcase, title: "Career Readiness Program" },
];

const semesters = [
    {
        title: "Semester 1",
        courses: "Courses: 10",
        points: [
            "Introduction to Programming & Logic Building",
            "Foundations of Artificial Intelligence",
            "Mathematics for AI & Data Science",
            "Computational Thinking",
            "Communication & Professional Skills",
        ],
    },
    {
        title: "Semester 2",
        courses: "Courses: 5",
        points: [
            "Data Structures & Algorithms",
            "Python for Data Science",
            "Database Management Systems",
            "Statistics & Probability",
            "Mini Project",
        ],
    },
    {
        title: "Semester 3",
        courses: "Courses: 5",
        points: [
            "Machine Learning Fundamentals",
            "Data Visualization Techniques",
            "Cloud Computing Basics",
            "Industry Hackathon",
            "Domain Elective",
        ],
    },
    {
        title: "Semester 4",
        courses: "Courses: 5",
        points: [
            "Deep Learning & Neural Networks",
            "AI Ethics & Responsible AI",
            "Capstone Project",
            "Internship / Industry Training",
            "Career Readiness & Portfolio",
        ],
    },
];

export default function ProgrammeTab() {
    const [activeTab, setActiveTab] = useState("Quick Look");
    const [openSemester, setOpenSemester] = useState<number | null>(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section className="py-12 bg-white">
            <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-6">
                {/* CATEGORIES SECTION - MOBILE DROPDOWN + DESKTOP PILLS */}
                <div className="relative mb-12 sm:mb-20">
                    {/* Mobile Category Dropdown */}
                    <div className="sm:hidden w-full relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-all active:scale-[0.98]"
                        >
                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                {activeTab}
                            </span>
                            <div className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}>
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 p-1.5 bg-white rounded-xl border border-slate-200 shadow-xl animate-slide-down">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                                            ${activeTab === tab ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}
                                        `}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        )}
                        {/* Backdrop for dropdown */}
                        {isDropdownOpen && (
                            <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                        )}
                    </div>

                    {/* Desktop Pill Switcher */}
                    <div className="hidden sm:flex justify-center">
                        <div className="inline-flex flex-nowrap p-1.5 bg-slate-100/50 backdrop-blur-md rounded-[1.5rem] border border-slate-200/50 gap-1 shadow-inner overflow-hidden">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-3 rounded-[1.2rem] text-xs md:text-[13px] font-[1000] uppercase tracking-widest transition-all duration-300 active:scale-95 whitespace-nowrap
                                        ${activeTab === tab 
                                            ? "bg-white text-blue-600 shadow-lg shadow-blue-900/5 scale-[1.02]" 
                                            : "text-slate-500 hover:text-slate-800 hover:bg-white/40"}
                                    `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* QUICK LOOK CONTENT */}
                {activeTab === "Quick Look" && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-slide-down">
                        {phases.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 p-6 flex flex-col h-full"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Small Icon Container */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <item.icon className="text-blue-600 text-xl group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                    <p className="text-slate-500 mb-6 text-xs leading-relaxed font-medium">{item.desc}</p>
                                    
                                    <ul className="mt-auto space-y-3">
                                        {item.points.map((point, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <FaCircleCheck className="text-blue-600 text-xs shrink-0" />
                                                <span className="text-slate-600 text-xs font-semibold">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* CURRICULUM CONTENT */}
                {activeTab === "Curriculum" && (
                    <div className="space-y-4 animate-slide-down max-w-5xl mx-auto">
                        {semesters.map((sem, index) => {
                            const isOpen = openSemester === index;
                            return (
                                <div 
                                    key={index} 
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden
                                        ${isOpen ? "bg-blue-50/30 border-blue-100 shadow-md translate-x-1" : "bg-white border-slate-100 hover:border-slate-200 shadow-sm"}
                                    `}
                                >
                                    <button
                                        onClick={() => setOpenSemester(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left group"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`text-xl md:text-2xl font-black italic tracking-tighter transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-400 opacity-50 group-hover:opacity-100"}`}>
                                                0{index + 1}
                                            </div>
                                            <div className="h-8 w-[1px] bg-slate-200 hidden md:block" />
                                            <div>
                                                <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-blue-700" : "text-slate-800"}`}>
                                                    {sem.title}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                                                    <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">{sem.courses} Modules</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                                            ${isOpen ? "bg-blue-600 text-white rotate-180 shadow-lg shadow-blue-200" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}
                                        `}>
                                            {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 md:px-24 pb-8 animate-slide-down">
                                            <div className="h-[1px] w-full bg-blue-100/50 mb-8" />
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                                                {sem.points.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                                        <span className="text-slate-600 text-sm font-semibold selection:bg-blue-100">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* KEY HIGHLIGHTS CONTENT - Structured Grid */}
                {activeTab === "Key Highlights" && (
                    <div className="max-w-7xl mx-auto animate-slide-down">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div 
                                        key={index} 
                                        className="group relative h-full bg-slate-50/50 hover:bg-white p-7 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 flex flex-col items-center text-center overflow-hidden"
                                    >
                                        {/* Subtle Wave Accent */}
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Icon Pod */}
                                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1">
                                            <Icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
                                        </div>

                                        <p className="text-[13px] md:text-[14px] font-bold text-slate-800 tracking-tight leading-snug group-hover:text-blue-700 transition-colors">
                                            {item.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}