"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";

const teamMembers = [
    {
        name: "Mangesh Patil",
        designation: "Assistant Professor - AIML",
        image: "/images/team-images/technology/mangesh-patil.jpg",
        bio: "Mangesh Patil is an esteemed Assistant Professor specializing in AI and Machine Learning. With over a decade of experience in both academia and industry research, he has pioneered several initiatives in deep learning and neural networks. His guidance helps students bridge the gap between theoretical algorithms and real-world implementation.",
    },
    {
        name: "Ranjana Singh",
        designation: "Senior faculty - Data Science",
        image: "/images/team-images/technology/ranjana-singh.jpg",
        bio: "Ranjana Singh brings extensive expertise in Big Data Analytics and Statistical Modeling. As a Senior Faculty member, she focuses on empowering students with the analytical tools necessary for modern data-driven decision-making. Her research interests include predictive modeling and data mining in large-scale systems.",
    },
    {
        name: "Hridya Sandeep",
        designation: "Assistant Faculty - Communications",
        image: "/images/team-images/technology/hridya-sandeep.jpg",
        bio: "Hridya Sandeep specializes in digital communication and media studies. Her approach blends sociological perspectives with modern technological communication tools, preparing students to lead in the evolving landscape of global media. She is passionate about the intersection of technology and human interaction.",
    },
    {
        name: "Indu Kumari",
        designation: "Assistant Faculty - AIML",
        image: "/images/team-images/technology/indu-kumari.jpg",
        bio: "Indu Kumari is a dedicated researcher in the field of Artificial Intelligence. Her work focuses on computer vision and natural language processing. As a faculty member, she is known for her hands-on mentoring style, helping students develop robust ML models for complex problem-solving.",
    },
    {
        name: "Parmeshwari Aland",
        designation: "Assistant Professor - Data Science",
        image: "/images/team-images/technology/parmeshwari.jpg",
        bio: "Parmeshwari Aland is an expert in data infrastructure and engineering. Her academic background is complemented by years of consulting for tech startups, where she designed scalable data pipelines. She teaches students how to manage the lifecycle of data from ingestion to actionable insights.",
    },
    {
        name: "Dr. Sandeep Kulkarni",
        designation: "Senior Faculty - Info Security",
        image: "/images/team-images/technology/dr-sandeep-kulkarni.jpg",
        bio: "Dr. Sandeep Kulkarni is a leading voice in cybersecurity and network forensic studies. With a PhD in Information Security, his teaching covers everything from ethical hacking to enterprise risk management. He ensures that students are prepared for the high-stakes world of digital defense.",
    },
    {
        name: "Nilima Chapke",
        designation: "Assistant Faculty - AIML",
        image: "/images/team-images/technology/nilima-chapke.jpg",
        bio: "Nilima Chapke focuses on the ethical dimensions of AI and machine learning. Her teaching emphasizes responsible innovation and the societal impacts of automated systems. She guides students in developing AI that is not only powerful but also fair and transparent.",
    },
    {
        name: "Vishal Gosavi",
        designation: "Senior Faculty - Communications",
        image: "/images/team-images/technology/vishal-gosavi.jpg",
        bio: "Vishal Gosavi is a veteran in professional communications and corporate training. His expertise lies in bridging technical expertise with leadership and soft skills. He prepares engineering and tech graduates to thrive in corporate environments through effective storytelling and networking.",
    },
    {
        name: "Ravindra Patil",
        designation: "Assistant Faculty - Data Science",
        image: "/images/team-images/technology/ravindra-patil.jpg",
        bio: "Ravindra Patil is a specialist in time-series analysis and financial data modeling. His academic research explores the applications of machine learning in market forecasting. He is committed to teaching students how to find valuable patterns in noisy, high-dimensional datasets.",
    },
];

export default function MeetOurTeam() {
    const [selectedMember, setSelectedMember] = useState<null | typeof teamMembers[0]>(null);
    const x = useRef(0);
    const isDragging = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrame: number;

        const scroll = () => {
            if (!isDragging.current && containerRef.current) {
                x.current -= 1.2; // Speed (Adjusted for "Premium & Fast" feel)

                // Reset when one-third is scrolled (since we use [...teamMembers, ...teamMembers, ...teamMembers])
                const width = containerRef.current.scrollWidth / 3;

                if (Math.abs(x.current) >= width) {
                    x.current = 0;
                }

                containerRef.current.style.transform = `translateX(${x.current}px)`;
            }
            animationFrame = requestAnimationFrame(scroll);
        };

        scroll();
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <div className="text-center">
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Expert Mentors</h2>
                    <h3 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none mb-4">
                        Meet Our <span className="text-blue-600 not-italic">Team</span>
                    </h3>
                </div>
            </div>

            {/* Ultra-Smooth Draggable & Auto-scrolling Slider */}
            <div className="relative py-4 overflow-hidden px-4 select-none">
                <motion.div 
                    ref={containerRef}
                    drag="x"
                    dragConstraints={{ left: -5000, right: 0 }}
                    dragElastic={0.05}
                    onDragStart={() => {
                        isDragging.current = true;
                    }}
                    onDragEnd={(e, info) => {
                        isDragging.current = false;
                        // Continue from exactly where the user left off
                        x.current += info.offset.x;
                    }}
                    onMouseEnter={() => (isDragging.current = true)}
                    onMouseLeave={() => (isDragging.current = false)}
                    whileTap={{ cursor: "grabbing" }}
                    className="flex gap-6 cursor-grab w-max"
                >
                    {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                        <motion.div
                            key={index}
                            onTap={() => setSelectedMember(member)}
                            className="w-[200px] md:w-[240px] flex-shrink-0 group/card relative"
                        >
                            <div className="relative h-[280px] md:h-[340px] bg-slate-100 rounded-[1.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-700 pointer-events-none">
                                {/* Faculty Image */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover/card:scale-105 transition-transform duration-1000"
                                    sizes="300px"
                                    draggable={false}
                                />

                                {/* Overlay for Bottom Info - Improved Glow */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent" />

                                {/* Floating Nameplate */}
                                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-lg transform group-hover/card:-translate-y-1 transition-transform duration-500">
                                    <h4 className="text-[13px] font-[1000] text-slate-900 tracking-tight leading-none mb-1 ">
                                        {member.name}
                                    </h4>
                                    <div className="mt-1 flex flex-col items-start">
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 opacity-90 leading-tight">
                                            {member.designation}
                                        </span>
                                    </div>
                                </div>

                                {/* Desktop Hover Overlay - Minimalist Centered Info */}
                                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 hidden md:flex">
                                    <div className="text-white text-[10px] font-black uppercase tracking-[0.2em] transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 flex items-center gap-3 hover:text-blue-400 pointer-events-auto">
                                        View Full Profile
                                        <div className="w-5 h-[1.5px] bg-blue-500 group-hover/card:w-7 transition-all duration-300 relative">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[1.5px] border-r-[1.5px] border-blue-500 w-1 h-1 rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tap Indicator for touch */}
                            <div className="absolute top-3 right-3 md:hidden pointer-events-none bg-black/40 backdrop-blur px-2 py-1 rounded-full border border-white/20 flex items-center gap-1.5 leading-none">
                                <MdTouchApp className="text-white w-2.5 h-2.5 animate-pulse" />
                                <span className="text-white text-[7px] font-black uppercase tracking-wider">Bio</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal Detail View */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                title="Close Profile"
                                className="absolute top-6 right-6 z-20 w-10 h-10 bg-slate-100 hover:bg-red-500 text-slate-800 hover:text-white shadow-xl rounded-full flex items-center justify-center transition-all active:scale-90"
                            >
                                <FaTimes size={18} />
                            </button>

                            {/* Left: Image Side */}
                            <div className="w-full md:w-5/12 h-64 md:h-auto relative border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50">
                                <Image
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    fill
                                    className="object-cover"
                                    sizes="500px"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                            </div>

                            {/* Right: Info Side */}
                            <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto">
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full mb-4 border border-blue-100">
                                    Faculty Profile
                                </span>
                                <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter leading-none mb-2">
                                    {selectedMember.name}
                                </h2>
                                <h3 className="text-blue-600 text-sm md:text-base font-bold uppercase tracking-widest mb-8">
                                    {selectedMember.designation}
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-slate-900 text-xs md:text-sm font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <div className="w-6 h-px bg-blue-600" /> Professional Bio
                                        </h4>
                                        <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium italic">
                                            "{selectedMember.bio}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

