"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Info
} from "lucide-react";

export default function CampusGalleryModal({
  isOpen,
  onClose,
  items,
  initialIndex,
}: any) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(initialIndex);
      setShowInfo(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, initialIndex]);

  const handlePrev = (e?: any) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev! - 1));
  };

  const handleNext = (e?: any) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev! + 1));
  };

  if (!isOpen || selectedIndex === null || !items[selectedIndex]) return null;
  const currentItem = items[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col lg:flex-row bg-slate-950/98 backdrop-blur-2xl transition-all duration-500"
      onClick={onClose}
    >
      {/* Top Bar Actions */}
      <div className="absolute top-0 inset-x-0 h-24 flex items-center justify-between px-8 z-[200] pointer-events-none">
        <div
          className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] pointer-events-auto bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-xl"
        >
          {selectedIndex + 1} / {items.length}
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(!showInfo);
            }}
            className={`p-3.5 rounded-full border border-white/10 transition-all ${showInfo ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
            title="Toggle Info"
          >
            <Info size={18} />
          </button>
          <button
            onClick={onClose}
            className="p-3.5 rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-red-500 hover:text-white hover:border-red-400 transition-all duration-300"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative flex-grow flex items-center justify-center p-6 lg:p-12 overflow-hidden h-full">
        <button
          onClick={handlePrev}
          className="absolute left-6 lg:left-12 z-50 p-4 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10 transition-all backdrop-blur-md"
        >
          <ArrowLeft size={24} />
        </button>

        <div
          className="relative w-full h-full flex items-center justify-center transition-all duration-700"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentItem.image}
            alt="Gallery"
            fill
            className="object-contain p-4 lg:p-12 drop-shadow-[0_0_50px_rgba(37,99,235,0.15)]"
            priority
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-6 lg:right-12 z-50 p-4 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10 transition-all backdrop-blur-md"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Sidebar/Overlay Info */}
      <div
        className={`fixed lg:relative bottom-0 left-0 right-0 lg:top-0 w-full lg:w-[450px] h-[65vh] lg:h-full bg-slate-900/40 lg:bg-slate-900/60 backdrop-blur-[40px] border-t lg:border-t-0 lg:border-l border-white/10 p-8 lg:p-12 pt-28 lg:pt-36 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-[150] overflow-y-auto ${showInfo
          ? "translate-y-0 lg:translate-x-0 opacity-100"
          : "translate-y-full lg:translate-x-full opacity-0 pointer-events-none lg:absolute lg:right-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Image Context</span>
          <button
            onClick={() => setShowInfo(false)}
            className="p-2 text-white/50 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-3 block">Perspective</span>
            <h2 className="text-3xl lg:text-4xl font-[1000] text-white tracking-tighter italic leading-[1.1]">
                {currentItem.title}
            </h2>
        </div>

        <div className="flex flex-col gap-5 mb-12">
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Calendar size={16} />
            </div>
            <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-0.5">Timeline</span>
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{currentItem.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                <MapPin size={16} />
            </div>
            <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-0.5">Location Hub</span>
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{currentItem.location}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-12 opacity-50" />

        {/* Thumbnails list */}
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-6">Explore Mosaic</h3>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {items.map((item: any, idx: number) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border-2 ${idx === selectedIndex ? "border-blue-600 scale-95 shadow-lg shadow-blue-600/30" : "border-white/5 grayscale hover:grayscale-0 hover:scale-105"}`}
            >
              <Image
                src={item.image}
                alt="thumb"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
