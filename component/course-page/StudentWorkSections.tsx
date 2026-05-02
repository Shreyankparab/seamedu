"use client";

import React, { useState } from "react";
// Swapping Lucide for React Icons for consistency
import { FaPlay, FaXmark } from "react-icons/fa6";

const studentWorks = [
    {
        id: 1,
        title: "Best Compositor | Nandu Panecha",
        award: "Seamedu Awards 2024",
        course: "B.Sc. | Visual Effects & Animation",
        year: "2024",
        image: "/vfx_dragon_work.png",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 2,
        title: "Best Song | V Manish Bhat",
        award: "Seamedu Awards 2024",
        course: "B.Sc. | Sound Engineering",
        year: "2024",
        image: "/sound_engineering_work.png",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 3,
        title: "Best Asset Modeller | Vedant Naoghare",
        award: "Seamedu Awards 2024",
        course: "B.Sc. | Game Art & Design",
        year: "2024",
        image: "/game_art_asset_work.png",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 4,
        title: "Best Director | Aniruddha S",
        award: "Seamedu Awards 2024",
        course: "B.Sc. | Film Making",
        year: "2024",
        image: "/film_making_work.png",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
];

export default function StudentWorkSection() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="bg-white py-16 px-6 md:px-20 font-sans">
            <style jsx global>{`
        @keyframes cardEntrance {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card {
          animation: cardEntrance 0.6s ease-out forwards;
        }
        .modal-backdrop-blur {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>

            {/* Section Header */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-black inline-block relative">
                    Student <span className="text-blue-600">Work</span>
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {studentWorks.map((work, index) => (
                    <div
                        key={work.id}
                        style={{ animationDelay: `${index * 0.15}s` }}
                        className="animate-card opacity-0 group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-xl bg-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50"
                        onClick={() => setSelectedVideo(work.videoUrl)}
                    >
                        {/* Background Image */}
                        <img
                            src={work.image}
                            alt={work.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Bottom Content Section */}
                        <div className="absolute bottom-0 left-0 w-full p-6 pb-8">
                            <h3 className="text-white font-bold text-[18px] leading-[1.2] mb-1 drop-shadow-md max-w-[90%]">
                                {work.title} - {work.award}
                            </h3>
                            <p className="text-white/70 text-[12px] font-medium mb-5">
                                {work.course}
                            </p>

                            <div className="flex justify-between items-end">
                                <span className="bg-white text-black text-[12px] font-bold px-3 py-1 rounded-[4px] uppercase tracking-wide">
                                    {work.year}
                                </span>

                                {/* Premium Play Button */}
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                                    <FaPlay className="text-white text-lg ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal Popup (Native implementation) */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 modal-backdrop-blur p-4 transition-opacity duration-300"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-all z-20 bg-black/20 p-2 rounded-full hover:bg-black/40"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <FaXmark size={24} />
                        </button>

                        <iframe
                            src={`${selectedVideo}?autoplay=1`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}