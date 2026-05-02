"use client";

import React, { useState } from "react";
import { MdTouchApp } from "react-icons/md";
import Link from "next/link";
import { courses } from "@/data/courses";

export default function CourseSection() {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    return (
        <section className="mt-16 bg-[#FCFCFD] font-sans relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Department Overview</h2>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
                        Our &nbsp;<span className="text-blue-600 not-italic">Courses</span>
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-10 w-full mb-10">
                    {courses.map((course, index) => {
                        const isFlipped = flippedIndex === index;
                        return (
                            <div
                                key={index}
                                className="card-wrapper w-[280px] sm:w-[320px] h-[400px] sm:h-[450px] [perspective:2000px] mb-6"
                                onMouseEnter={() => setFlippedIndex(index)}
                                onMouseLeave={() => setFlippedIndex(null)}
                                onClick={() => setFlippedIndex(isFlipped ? null : index)}
                            >
                                <div className="card w-full h-full cursor-pointer relative [transform-style:preserve-3d] group">
                                    <div className={`card-inner relative w-full h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [transform-style:preserve-3d] rounded-[12px] group-hover:[transform:rotateY(180deg)] ${isFlipped ? "![transform:rotateY(180deg)]" : ""}`}>

                                        {/* Front Face */}
                                        <div className="card-front absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[12px] bg-black text-white flex flex-col overflow-visible shadow-[0_15px_35px_rgba(0,0,0,0.1)] [transform-style:preserve-3d]">

                                            {/* Mobile Tap Hint */}
                                            <div className="absolute top-[15px] right-[15px] sm:hidden z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 animate-pulse [transform:translateZ(30px)] shadow-lg">
                                                <MdTouchApp className="w-4 h-4 text-white" />
                                                <span className="text-[9px] text-white font-bold uppercase tracking-wider">Tap to Flip</span>
                                            </div>

                                            <div className="card-image-container absolute top-0 left-0 w-full h-full bg-[#222] overflow-hidden rounded-[12px] [transform:translateZ(20px)] shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
                                                <img
                                                    src={course.image}
                                                    alt={course.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="card-info absolute bottom-[20px] left-1/2 [transform:translateX(-50%)_translateZ(70px)] w-[85%] text-center [transform-style:preserve-3d] bg-black/60 py-3 px-2.5 rounded-[8px] backdrop-blur-[4px] border border-white/10">
                                                <span className="card-name text-xl font-bold text-white block whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                                    {course.name}
                                                </span>
                                                <span className="card-role text-white font-normal tracking-[0.5px] text-xs block mt-[2px]">
                                                    {course.role}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Back Face */}
                                        <div className="card-back absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[12px] bg-[#547cd6] text-white [transform:rotateY(180deg)] pt-10 pb-6 px-[20px] flex flex-col justify-start items-center text-center [transform-style:preserve-3d] shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-visible">
                                            <h3 className="text-lg mb-3"><b>Specialisations</b></h3>
                                            <ul className="spec-list list-none p-1 flex flex-col gap-2.5 w-[calc(100%+8px)] -ml-1 [transform:translateZ(50px)] max-h-[260px] sm:max-h-[300px] overflow-y-auto overflow-x-hidden pr-2 scroll-smooth">
                                                {course.specializations.map((spec, i) => (
                                                    <li
                                                        key={i}
                                                        className="bg-white/15 backdrop-blur-[5px] p-2.5 rounded-[8px] text-[0.85rem] font-medium border border-white/20 transition-all duration-300 text-white text-left hover:bg-white hover:text-black hover:scale-105"
                                                    >
                                                        {spec}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link href={(course as any).link || "#"} className="mt-auto" onClick={(e) => e.stopPropagation()}>
                                                <button className="bg-white text-[#547cd6] font-extrabold py-2.5 px-6 rounded-full text-[0.75rem] uppercase tracking-wider [transform:translateZ(60px)] hover:bg-slate-100 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.15)] active:scale-95 cursor-pointer">
                                                    Explore Department
                                                </button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Ambient background elements */}
            <div className="absolute top-[15%] -left-32 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-0 opacity-40"></div>
            <div className="absolute bottom-[10%] -right-32 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -z-0 opacity-30"></div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
                .spec-list {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
                }
                .spec-list::-webkit-scrollbar {
                    width: 4px;
                }
                .spec-list::-webkit-scrollbar-track {
                    background: transparent;
                }
                .spec-list::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.4);
                    border-radius: 4px;
                }
                .spec-list::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 255, 255, 0.6);
                }
            `}</style>
        </section>
    );
}

