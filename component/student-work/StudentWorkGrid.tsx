"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const studentWorks = [
  {
    id: 1,
    title: "Best Compositor | Nandu Panecha - Seamedu Awards 2024",
    course: "B.Sc. | Visual Effects & Animation",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
    category: "Visual Effects"
  },
  {
    id: 2,
    title: "Best Asset Modeller | Vedant Naoghare - Seamedu Awards 2024",
    course: "B.Sc. | Game Art & Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550745679-33d01608216a?auto=format&fit=crop&q=80",
    category: "Game Design"
  },
  {
    id: 3,
    title: "Best Song | V Manish Bhat - Seamedu Awards 2024",
    course: "B.Sc. | Sound Engineering",
    year: "2024",
    image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&q=80",
    category: "Sound Engineering"
  },
  {
    id: 4,
    title: "Best Director | Aniruddha S - Seamedu Awards 2024",
    course: "B.Sc. | Film Making",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    category: "Film Making"
  },
  {
    id: 5,
    title: "Best Song | V Manish Bhat - Seamedu Awards 2024",
    course: "B.Sc. | Sound Engineering",
    year: "2024",
    image: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80",
    category: "Sound Engineering"
  },
  {
    id: 6,
    title: "Best Asset Modeller | Vedant Naoghare - Seamedu Awards 2024",
    course: "B.Sc. | Game Art & Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&q=80",
    category: "Game Design"
  },
  {
    id: 7,
    title: "Best Compositor | Nandu Panecha - Seamedu Awards 2024",
    course: "B.Sc. | Visual Effects & Animation",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80",
    category: "Visual Effects"
  },
  {
    id: 8,
    title: "Best Director | Aniruddha S - Seamedu Awards 2024",
    course: "B.Sc. | Film Making",
    year: "2024",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
    category: "Film Making"
  },
  {
    id: 9,
    title: "Best Director | Aniruddha S - Seamedu Awards 2024",
    course: "B.Sc. | Film Making",
    year: "2024",
    image: "https://images.unsplash.com/photo-1505682634904-d7c8d95ccd50?auto=format&fit=crop&q=80",
    category: "Film Making"
  },
  {
    id: 10,
    title: "Best Compositor | Nandu Panecha - Seamedu Awards 2024",
    course: "B.Sc. | Visual Effects & Animation",
    year: "2024",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80",
    category: "Visual Effects"
  },
  {
    id: 11,
    title: "Best Asset Modeller | Vedant Naoghare - Seamedu Awards 2024",
    course: "B.Sc. | Game Art & Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80",
    category: "Game Design"
  },
  {
    id: 12,
    title: "Best Director | Aniruddha S - Seamedu Awards 2024",
    course: "B.Sc. | Film Making",
    year: "2024",
    image: "https://images.unsplash.com/photo-1505682634904-d7c8d95ccd50?auto=format&fit=crop&q=80",
    category: "Film Making"
  },
  {
    id: 13,
    title: "Best Compositor | Nandu Panecha - Seamedu Awards 2024",
    course: "B.Sc. | Visual Effects & Animation",
    year: "2024",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80",
    category: "Visual Effects"
  },
  {
    id: 14,
    title: "Best Song | V Manish Bhat - Seamedu Awards 2024",
    course: "B.Sc. | Sound Engineering",
    year: "2024",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
    category: "Sound Engineering"
  }
];

const StudentWorkGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = ["All", "Visual Effects", "Sound Engineering", "Game Design", "Film Making"];

  const filteredWorks = activeCategory === "All"
    ? studentWorks
    : studentWorks.filter(work => work.category === activeCategory);

  const displayedWorks = filteredWorks.slice(0, visibleCount);

  return (
    <section className="bg-slate-50 py-20 relative overflow-hidden min-h-screen">
      {/* Background Large Text - Watermark */}
      {/* <div className="absolute top-0 right-0 select-none pointer-events-none z-0 opacity-[0.02]">
        <h2 className="text-[150px] md:text-[320px] font-black tracking-tighter text-slate-900 uppercase leading-none italic text-center">
          EXCELLENCE
        </h2>
      </div> */}

      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        {/* Section Heading */}
        <div className="mb-20 flex flex-col items-center text-center gap-10">
          <div className="max-w-2xl flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-blue-600"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[5px]">Portfolio Showcase</span>
              <span className="w-12 h-[1px] bg-blue-600"></span>
            </div>
            <h2 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter leading-none italic">
              Student <span className="text-blue-600 not-italic">Work.</span>
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6 w-full px-4">
            <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Explore Categories</div>
            
            {/* Desktop Categories */}
            <div className="hidden md:inline-flex flex-wrap justify-center p-1.5 bg-slate-200/50 backdrop-blur-md rounded-2xl border border-slate-300/50 gap-1.5 shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(12);
                  }}
                  className={`px-6 py-2.5 rounded-xl font-[1000] text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                    ? "bg-white text-blue-600 shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                >
                  {cat === "Visual Effects" ? "VFX" : cat}
                </button>
              ))}
            </div>

            {/* Mobile Categories - Dropdown */}
            <div className="md:hidden w-full max-w-sm mx-auto">
              <select
                value={activeCategory}
                onChange={(e) => {
                  setActiveCategory(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundPosition: `right 1rem center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `1.5em 1.5em`,
                  paddingRight: `2.5rem`
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "Visual Effects" ? "VFX" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative h-[340px] rounded-xl overflow-hidden border border-slate-200 bg-zinc-900 shadow-xl hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge & Brand */}
                <div className="absolute top-4 left-0 right-0 px-4 flex items-center justify-between z-20">
                  <img src="/images/logo.svg" alt="Seamedu" className="h-3 brightness-0 invert opacity-40" />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <h4 className="text-white text-base font-bold leading-snug mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {work.title}
                  </h4>

                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-4">
                    {work.course}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                      <span className="text-white text-[10px] font-black">{work.year}</span>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30 cursor-pointer"
                    >
                      <FaPlay className="text-[12px] ml-0.5" />
                    </motion.div>
                  </div>
                </div>

                {/* Student Work Overlay Text (Center Top of Card Content) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-white/20 text-3xl font-black italic uppercase tracking-tighter">Student Work</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination / Load More Area */}
        {filteredWorks.length > visibleCount && (
          <div className="mt-20 flex justify-center items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl shadow-blue-600/20 transition-all font-[1000] uppercase tracking-widest"
            >
              <span>LOAD MORE</span>
              <MdKeyboardArrowRight className="text-xl" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentWorkGrid;
