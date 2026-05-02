"use client";
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
    {
        id: 1,
        name: "Purvesh More",
        course: "B.Sc. | Filmmaking",
        overlayName: "Ravindra Sharma",
        type: "Filmmaking Testimonials",
        bgColor: "bg-[#2D1654]",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 2,
        name: "Purvesh More",
        course: "B.Sc. | Filmmaking",
        overlayName: "Arjit Sengupta",
        type: "Journalism & Media",
        bgColor: "bg-[#D32F2F]",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        name: "Purvesh More",
        course: "B.Sc. | Filmmaking",
        overlayName: "Harsh Kanaskar",
        type: "Game Development Testimonials",
        bgColor: "bg-[#1E0B3E]",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        name: "Purvesh More",
        course: "B.Sc. | Filmmaking",
        overlayName: "Ravindra Sharma",
        type: "Filmmaking Testimonials",
        bgColor: "bg-[#2D1654]",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 5,
        name: "Purvesh More",
        course: "B.Sc. | Filmmaking",
        overlayName: "Arjit Sengupta",
        type: "Journalism & Media",
        bgColor: "bg-[#D32F2F]",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 6,
        name: "Purvesh More",
        course: "B.Sc. | Filmmaking",
        overlayName: "Harsh Kanaskar",
        type: "Game Development Testimonials",
        bgColor: "bg-[#1E0B3E]",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

export default function TestimonialSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const posRef = useRef(0);

    const nextSlide = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    const prevSlide = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    // CONTINUOUS AUTO-SCROLL
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || isHover) return;

        let animationId: number;
        const scroll = () => {
            posRef.current += 1.2; // Adjust speed for smoothness
            if (posRef.current >= container.scrollWidth / 2) {
                posRef.current = 0;
            }
            container.scrollLeft = posRef.current;
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [isHover]);

    // SYNC REF ON MANUAL SCROLL
    const handleScroll = () => {
        if (scrollContainerRef.current && isHover) {
            posRef.current = scrollContainerRef.current.scrollLeft;
        }
    };

    return (
        <section className="py-16 px-4 bg-white font-sans">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-black text-center mb-12 text-black tracking-tight">
                    Students Testimonials
                </h2>

                <div
                    className="relative flex items-center group"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 md:-left-16 z-20 w-12 h-12 flex items-center justify-center bg-white shadow-xl rounded-xl text-black hover:bg-gray-50 transition-all border border-gray-100 group-hover:scale-105"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    {/* Cards Container */}
                    <div 
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="overflow-hidden w-full px-2 cursor-grab active:cursor-grabbing"
                    >
                        <div className="flex w-max">
                            {[...testimonials, ...testimonials].map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[380px] px-3 transition-all duration-300"
                                >

                                    <div className="rounded-3xl overflow-hidden shadow-xl bg-[#F0F0F0]">

                                        <div className={`relative h-56 flex items-center ${item.bgColor} text-white p-6 overflow-hidden`}>

                                            <div className="z-10 w-1/2">
                                                <p className="text-sm font-medium italic opacity-90 leading-tight">
                                                    {item.type}
                                                </p>

                                                <div className="w-12 h-[2px] bg-yellow-400 my-2"></div>

                                                <h3 className="text-2xl font-bold text-yellow-400 leading-tight">
                                                    {item.overlayName}
                                                </h3>
                                            </div>

                                            {/* Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center z-50">
                                                <button
                                                    onClick={() => setVideoUrl(item.video)}
                                                    className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:scale-110 transition-all border border-white/30 text-white flex items-center justify-center"
                                                >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z" /></svg>
                                                </button>
                                            </div>

                                            <div className="absolute right-0 bottom-0 w-1/2 h-full">
                                                <img
                                                    src={item.image}
                                                    alt={item.overlayName}
                                                    className="w-full h-full object-cover grayscale-[0.2]"
                                                />
                                            </div>

                                        </div>

                                        <div className="p-4 text-center">
                                            <h4 className="text-xl font-bold text-black">{item.name}</h4>
                                            <p className="text-gray-500 text-sm">{item.course}</p>
                                        </div>

                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 md:-right-16 z-20 w-12 h-12 flex items-center justify-center bg-white shadow-xl rounded-xl text-black hover:bg-gray-50 transition-all border border-gray-100 group-hover:scale-105"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>

                </div>

            </div>

            {/* VIDEO POPUP */}
            {videoUrl && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                    <div className="relative w-[90%] md:w-[800px]">

                        <button
                            onClick={() => setVideoUrl(null)}
                            className="absolute -top-10 right-0 text-white text-3xl"
                        >
                            ✕
                        </button>

                        <iframe
                            className="w-full h-[450px] rounded-xl"
                            src={videoUrl || ""}
                            allowFullScreen
                        ></iframe>

                    </div>

                </div>
            )}

        </section>
    );
}