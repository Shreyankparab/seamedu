"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Vedant Jhingan",
    department: "Sound Engineering",
    videoId: "dQw4w9WgXcQ",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800",
  },
  {
    id: 2,
    name: "Sneha Bhagat",
    department: "Media Production",
    videoId: "dQw4w9WgXcQ",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
  },
  {
    id: 3,
    name: "Arijit Sengupta",
    department: "Management",
    videoId: "dQw4w9WgXcQ",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  },
  {
    id: 4,
    name: "Atharv Rajopadhye",
    department: "Sound Engineering",
    videoId: "dQw4w9WgXcQ",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },
  {
    id: 5,
    name: "Sneha Bhagat",
    department: "VFX & Animation",
    videoId: "dQw4w9WgXcQ",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800"
  },
  {
    id: 6,
    name: "Ishan Jadhav",
    department: "Sound Design",
    videoId: "dQw4w9WgXcQ",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800"
  }
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-slate-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Integrated Header/Label */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-slate-900 font-[1000] italic text-3xl tracking-tighter leading-none">Success <span className="text-blue-600">Stories</span></h2>
          <div className="h-[2px] flex-1 bg-slate-200" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">View All</span>
        </div>

        {/* Success Grid (3-column landscape) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(item.videoId)}
              className="group cursor-pointer relative aspect-video rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-black"
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s] opacity-80"
              />

              {/* Play UI (Permanent but subtle) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <FaPlay className="text-[10px] ml-1 group-hover:text-blue-600 transition-colors text-white" />
                </div>
              </div>

              {/* Floating Name Branding (As in reference image) */}
              <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl flex flex-col items-start gap-0.5 border border-white/10 group-hover:bg-blue-600 transition-all duration-500">
                  <span className="text-white font-black italic text-sm lg:text-base leading-none tracking-tight">{item.name}</span>
                  <span className="text-white/60 group-hover:text-white/80 font-bold text-[8px] uppercase tracking-widest">{item.department}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Container */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-20 pointer-events-auto"
          >
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={() => setSelectedVideo(null)} />
            <motion.div
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
            >
              <button onClick={() => setSelectedVideo(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"><FaTimes className="text-xl" /></button>
              <iframe src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} className="w-full h-full" allowFullScreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}







