"use client";

import React from "react";

export default function HeroQuickLinks() {
  return (
    <div className="relative w-full overflow-hidden sm:mt-[-50px] z-50 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        
        {/* ACADEMIC PROGRAMS */}
        <div className="group relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[#00A89E]/90 z-20 transition-transform duration-700 group-hover:scale-105" />
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover z-10" alt="" />
          <div className="relative z-30 h-full flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.89 9L12 4.57 20.11 9 12 13.43 3.89 9zM12 15l-7-3.82V14l7 3.82 7-3.82v-2.82L12 15z"/></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Academic Programs</h3>
            <p className="text-sm opacity-80 mb-8 line-clamp-3">Seamedu offers industry-relevant degree & diploma programs across Media, Tech, and Design.</p>
            <button className="px-8 py-3 bg-white text-[#00A89E] font-bold text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">Our Programs</button>
          </div>
          {/* TILT EFFECT */}
          <div className="absolute top-0 left-0 w-full h-16 bg-white origin-top-left -rotate-[2deg] z-40 sm:block hidden" />
        </div>

        {/* ADMISSIONS */}
        <div className="group relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[#006699]/90 z-20 transition-transform duration-700 group-hover:scale-105" />
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover z-10" alt="" />
          <div className="relative z-30 h-full flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5s-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Admissions</h3>
            <p className="text-sm opacity-80 mb-8 line-clamp-3">Ready to start your journey? Learn about our simplified admission process and key timelines.</p>
            <button className="px-8 py-3 bg-white text-[#006699] font-bold text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">Learn More</button>
          </div>
          {/* TILT EFFECT */}
          <div className="absolute top-0 left-0 w-full h-16 bg-white origin-top-left -rotate-[1deg] z-40 sm:block hidden" />
        </div>

        {/* FACULTY */}
        <div className="group relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[#E5A04D]/90 z-20 transition-transform duration-700 group-hover:scale-105" />
          <img src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover z-10" alt="" />
          <div className="relative z-30 h-full flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Expert Faculty</h3>
            <p className="text-sm opacity-80 mb-8 line-clamp-3">Learn from renowned industry professionals who bring real-world experience into the classroom.</p>
            <button className="px-8 py-3 bg-white text-[#E5A04D] font-bold text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">Our Faculty</button>
          </div>
          {/* TILT EFFECT */}
          <div className="absolute top-0 left-0 w-full h-16 bg-white origin-top-left rotate-[1deg] z-40 sm:block hidden" />
        </div>

        {/* PARTNERSHIPS */}
        <div className="group relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[#008C99]/90 z-20 transition-transform duration-700 group-hover:scale-105" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover z-10" alt="" />
          <div className="relative z-30 h-full flex flex-col items-center justify-center p-8 text-center text-white">
            <div className="mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.96-1.61 5.53-4.99 6.92l1 1.73C19.99 19.92 22 16.7 22 13c0-5.52-4.48-10-10-10z"/></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Placement Cell</h3>
            <p className="text-sm opacity-80 mb-8 line-clamp-3">Our dedicated placement cell ensures top-tier career outcomes with global corporate partners.</p>
            <button className="px-8 py-3 bg-white text-[#008C99] font-bold text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">Explore Here</button>
          </div>
          {/* TILT EFFECT */}
          <div className="absolute top-0 left-0 w-full h-16 bg-white origin-top-left rotate-[2deg] z-40 sm:block hidden" />
        </div>

      </div>
    </div>
  );
}
