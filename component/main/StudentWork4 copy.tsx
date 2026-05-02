"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const studentWorks = [
  {
    id: 1,
    title: "VFX & Compositing Sequence",
    student: "Aryan Sharma",
    category: "VFX & Animation",
    image: "/vfx_dragon_work.png",
  },
  {
    id: 2,
    title: "Game Environment Asset",
    student: "Rohan Das",
    category: "Game Design",
    image: "/game_art_asset_work.png",
  },
  {
    id: 3,
    title: "Sound Engineering Mastery",
    student: "Isha Malhotra",
    category: "Sound Tech",
    image: "/sound_engineering_work.png",
  },
  {
    id: 4,
    title: "Cinematic Short Film",
    student: "Ananya Rai",
    category: "Film Making",
    image: "/film_making_work.png",
  },
];

const displayDataMobile = [...studentWorks, ...studentWorks, ...studentWorks, ...studentWorks, ...studentWorks];

export default function StudentWork4() {
  const [isMounted, setIsMounted] = useState(false);
  const x = useMotionValue(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const calculateInitialX = () => {
      const gap = 16;
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        const cardWidth = window.innerWidth * 0.75;
        const totalWidthOneSet = studentWorks.length * (cardWidth + gap);
        x.set(-totalWidthOneSet * 2);
      }
    };
    calculateInitialX();
    window.addEventListener("resize", calculateInitialX);
    return () => window.removeEventListener("resize", calculateInitialX);
  }, [x]);

  const handleScrollMobile = (direction: "left" | "right") => {
    const gap = 16;
    const cardWidth = window.innerWidth * 0.75;
    const snapPoints: number[] = [0];
    let currentX = 0;
    displayDataMobile.forEach((_, idx) => {
      currentX -= (cardWidth + gap);
      snapPoints.push(currentX);
    });

    const currentPos = x.get();
    if (direction === "right") {
      const target = snapPoints.find(p => p < currentPos - 10);
      if (target !== undefined) animate(x, target, { type: "tween", ease: "circOut", duration: 0.8 });
    } else {
      const reversedPoints = [...snapPoints].reverse();
      const target = reversedPoints.find(p => p > currentPos + 10);
      if (target !== undefined) animate(x, target, { type: "tween", ease: "circOut", duration: 0.8 });
    }
  };

  if (!isMounted) return null;

  return (
    <section className="w-full bg-white py-18 md:py-20 px-6 sm:px-12 lg:px-30 xl:px-36 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Simple & Clean Header */}
        <div className="mb-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tighter">
              Creative work by <span className="text-blue-600">our students</span>
            </h2>
            {/* <div className="h-px flex-1 bg-slate-100 hidden md:block ml-8"></div> */}
            <button className="hidden sm:flex items-center  text-blue-700 text-[14px] font-semibold  tracking-widest hover:text-slate-900 transition-all active:scale-95">
              View More<ChevronRight size={16} className="" />
            </button>
          </div>
        </div>

        {/* Desktop Grid View (As it was previously) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          {studentWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-white shadow-md py-2 px-3 rounded-2xl"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-5 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-900/10 transition-all duration-500">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl transition-all duration-500">
                    <Play className="ml-1 fill-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="space-y-1 px-1">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest  ">
                  {work.category}
                </span>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-tight mt-4 group-hover:text-blue-700 transition-colors">
                  {work.title}
                </h4>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                  By {work.student}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider View (Infinite Scroll) */}
        <div className="block sm:hidden relative">
          <div ref={constraintsRef} className="overflow-visible -mx-4 px-4">
            <motion.div
              drag="x"
              style={{ x, width: "max-content" }}
              onUpdate={(latest) => {
                const curX = latest.x as number;
                const gap = 16;
                const cardWidth = window.innerWidth * 0.75;
                const totalWidthOneSet = studentWorks.length * (cardWidth + gap);

                if (curX <= -totalWidthOneSet * 3.5) {
                  x.set(curX + totalWidthOneSet);
                } else if (curX >= -totalWidthOneSet * 0.5) {
                  x.set(curX - totalWidthOneSet);
                }
              }}
              dragTransition={{
                power: 0.2,
                timeConstant: 200,
                modifyTarget: (target) => {
                  const gap = 16;
                  const cardWidth = window.innerWidth * 0.75;
                  const snapPoints: number[] = [0];
                  let currentX = 0;
                  displayDataMobile.forEach((_, idx) => {
                    currentX -= (cardWidth + gap);
                    snapPoints.push(currentX);
                  });
                  return snapPoints.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
                }
              }}
              className="flex gap-4 pb-4"
            >
              {displayDataMobile.map((work, idx) => (
                <div key={`${work.id}-${idx}`} className="w-[75vw] flex-shrink-0 group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-md">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                        <Play className="ml-1 fill-white" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 px-1">
                    <span className="text-blue-600 text-[9px] font-semibold uppercase tracking-widest">
                      {work.category}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-900 tracking-tight leading-tight">
                      {work.title}
                    </h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      By {work.student}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Slider Controls */}
          <div className="flex justify-between items-center mt-2 relative z-10 px-0 translate-y-2">
            <div className="flex items-center gap-2">
              <button onClick={() => handleScrollMobile("left")} className="w-10 h-10 rounded-lg bg-white flex items-center shadow-sm justify-center border border-slate-200 active:scale-95 transition-transform">
                <ChevronLeft size={20} className="text-slate-900" />
              </button>
              <button onClick={() => handleScrollMobile("right")} className="w-10 h-10 rounded-lg bg-white flex items-center shadow-sm justify-center border border-slate-200 active:scale-95 transition-transform">
                <ChevronRight size={20} className="text-slate-900" />
              </button>
            </div>
            <button className="flex items-center  gap-2 text-blue-700 text-xs font-semibold tracking-widest active:scale-95 transition-all">
              View More <ChevronRight size={14} className="mt-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}