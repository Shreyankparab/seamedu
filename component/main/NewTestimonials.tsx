"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

// Helper function to extract YouTube ID from various URL formats
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const testimonials = [
  {
    id: 1,
    name: "Vedant Jhingan",
    department: "Sound Engineering",
    videoUrl: "https://www.youtube.com/watch?v=sSPHdV4FYd8",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
  },
  {
    id: 2,
    name: "Sneha Bhagat",
    department: "Media Production",
    videoUrl: "https://www.youtube.com/watch?v=1juScckFKNQ",
    img: "https://img.youtube.com/vi/1juScckFKNQ/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "Arijit Sengupta",
    department: "Music Production",
    videoUrl: "https://www.youtube.com/watch?v=U00v9-uOTWk",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  },
  {
    id: 4,
    name: "Atharv Rajopadhye",
    department: "Game Development",
    videoUrl: "https://www.youtube.com/watch?v=29ZC0D2JqMc",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    id: 5,
    name: "Ishan Jadhav",
    department: "Digital Marketing",
    videoUrl: "https://www.youtube.com/watch?v=LtIIJ1TnK80",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    department: "Photography",
    videoUrl: "https://www.youtube.com/watch?v=vmoVv6g_Mv0",
    img: "https://img.youtube.com/vi/vmoVv6g_Mv0/maxresdefault.jpg",
  }
];

export default function NewTestimonials() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Derive the active story from the selected URL
  const activeStory = testimonials.find(t => t.videoUrl === selectedVideoUrl);
  // Get active YouTube ID for the player
  const activeVideoId = selectedVideoUrl ? getYoutubeId(selectedVideoUrl) : null;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let requestID: number;
    const animateScroll = () => {
      if (!isPaused && scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 1) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 0.8;
        }
      }
      requestID = requestAnimationFrame(animateScroll);
    };

    requestID = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(requestID);
  }, [isPaused]);

  return (
    <section className="bg-slate-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Cinematic Header Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Student Testimonials</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none">
            Success &nbsp;<span className="text-blue-600 not-italic">Stories</span>
          </h3>
        </div>
      </div>

      {/* Horizontal Slider Area - Full Width */}
      <div className="relative w-full z-10">
        <div className="absolute left-0 top-[16px] bottom-[80px] w-16 md:w-48 z-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-[16px] bottom-[80px] w-16 md:w-48 z-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none hidden md:block" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto gap-6 md:gap-10 scrollbar-hide pb-20 pt-4 px-6 md:px-12"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...testimonials, ...testimonials].map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedVideoUrl(item.videoUrl)}
              style={{ flex: '0 0 auto' }}
              // HORIZONTAL ASPECT RATIO: Changed from 3/4.2 to 16/10
              className="group cursor-grab active:cursor-grabbing relative aspect-video w-[280px] md:w-[380px] lg:w-[420px] rounded-[2rem] transition-all duration-500"
            >
              {/* Main Card UI */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-slate-900 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgba(37,99,235,0.25)] group-hover:ring-2 group-hover:ring-blue-600/40">
                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 grayscale-[0.2] group-hover:grayscale-0 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all shadow-2xl relative z-10 border-2 overflow-hidden">
                    <FaPlay className="text-sm md:text-lg ml-1 text-white" />
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </div>
                </div>

                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 z-20">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-white font-black italic text-lg md:text-2xl tracking-tighter leading-none group-hover:text-blue-400 transition-colors uppercase">{item.name}</span>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="h-1 w-8 bg-blue-600 rounded-full" />
                      <span className="text-white/60 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">{item.department}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
          <div className="flex-shrink-0 w-24" />
        </div>
      </div>


      {/* Immersive Video Player Experience */}
      <AnimatePresence>
        {
          selectedVideoUrl && activeVideoId && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-10"
            >
              <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-xl" onClick={() => setSelectedVideoUrl(null)} />

              <motion.div
                initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }}
                className="relative w-full max-w-7xl h-full md:h-[85vh] bg-black rounded-none md:rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-white/10 flex flex-col lg:grid lg:grid-cols-4"
              >
                {/* Universal Close Button */}
                <button
                  onClick={() => setSelectedVideoUrl(null)}
                  className="absolute top-3 right-3 md:top-6 md:right-6 z-[60] w-8 h-8 md:w-12 md:h-12 bg-white/10 hover:bg-white hover:text-red-500 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:scale-110 shadow-2xl group"
                >
                  <FaTimes className="text-sm md:text-xl group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Video Display Area */}
                <div className="lg:col-span-3 flex flex-col bg-black relative">
                  <div className="flex-1 aspect-video lg:aspect-auto h-full overflow-hidden bg-slate-900 flex items-center justify-center">
                    <iframe
                      key={activeVideoId} // Critical Re-render optimization
                      src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&enablejsapi=1&rel=0&playsinline=1`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>

                  {/* Integrated Student Info */}
                  <div className="bg-gradient-to-r from-black to-slate-950 p-5 sm:p-8 lg:p-10 border-t border-white/5 flex flex-row items-center gap-8 pr-14 sm:pr-10">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 ring-4 ring-blue-600/10 shadow-2xl">
                      <img src={activeStory?.img} alt={activeStory?.name} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-blue-600 font-black uppercase tracking-[0.25em] text-[10px]">Alumni Spotlight</span>
                      </div>
                      <h4 className="text-white font-[1000] italic text-xl md:text-4xl tracking-tighter leading-none uppercase">
                        {activeStory?.name}
                      </h4>
                      <p className="text-white/50 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mt-3">
                        {activeStory?.department}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Discovery Sidebar */}
                <div className="lg:col-span-1 bg-slate-950/40 backdrop-blur-3xl border-l border-white/5 flex flex-col h-full overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-white/5">
                    <h5 className="text-white font-black italic text-xl tracking-tighter uppercase leading-none">More <span className="text-blue-600">Stories</span></h5>
                    <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] mt-3 uppercase">Watch journey</p>
                  </div>

                  <div className="flex-1 overflow-y-auto scrollbar-hide p-4 md:p-6 space-y-5 md:space-y-6 pt-4 lg:pt-2">
                    {testimonials.map((item) => (
                      <motion.div
                        key={item.id}
                        onClick={() => setSelectedVideoUrl(item.videoUrl)}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group cursor-pointer flex gap-4 p-3 rounded-[2rem] transition-all duration-500 border ${selectedVideoUrl === item.videoUrl ? 'bg-blue-600/20 border-blue-600/40' : 'border-transparent hover:bg-white/5'}`}
                      >
                        <div className="relative w-28 h-20 md:w-28 md:h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-900 border border-white/5 shadow-md">
                          <img src={item.img} alt={item.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${selectedVideoUrl === item.videoUrl ? 'opacity-40' : 'opacity-80 group-hover:opacity-100'}`} />
                          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${selectedVideoUrl === item.videoUrl ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-md ${selectedVideoUrl === item.videoUrl ? 'bg-blue-600 text-white' : 'bg-black/40 text-white/60 group-hover:bg-blue-600 group-hover:text-white'}`}>
                              <FaPlay className="text-[8px] md:text-[10px] ml-0.5" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <h6 className={`font-[1000] italic text-[11px] md:text-sm uppercase tracking-tighter leading-tight transition-colors duration-500 ${selectedVideoUrl === item.videoUrl ? 'text-blue-400' : 'text-white'}`}>
                            {item.name}
                          </h6>
                          <p className="text-white/40 text-[8px] md:text-[9px] uppercase font-black tracking-widest mt-2 group-hover:text-white/60">
                            {item.department}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </section >
  );
}
