"use client";

import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const stats = [
  { value: 800, suffix: "+", label: "Industry Partners" },
  { value: 97, suffix: "%+", label: "Students placed" },
  { value: 10000, suffix: "+", label: "Placement Offers" },
  { value: 1300, suffix: "+", label: "Company Visits" },
  { value: 50, suffix: "+", label: "Job Profiles offered" },
];

const packageStats = [
  { lpa: "50", type: "Highest", trend: "+25%", companies: "30+", subtext: "Packages Offered by 30+ premium companies" },
  { lpa: "40", type: "Dream", trend: "+20%", companies: "50+", subtext: "Packages Offered by 50+ premium companies" },
  { lpa: "30", type: "Super Dream", trend: "+15%", companies: "100+", subtext: "Packages Offered by 100+ premium companies" },
  { lpa: "20", type: "Premium", trend: "+12%", companies: "200+", subtext: "Packages Offered by 200+ premium companies" },
  { lpa: "10", type: "Core", trend: "+10%", companies: "500+", subtext: "Packages Offered by 500+ premium companies" },
];


function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
}

export default function PlacementSection() {
  return (
    <div className="w-full bg-white font-sans text-slate-800 antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Title */}
      

        {/* HERO COMPONENT */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_10px_60px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden relative flex flex-col md:flex-row min-h-[520px]">
          
          {/* Background Watermark */}
          

          {/* Left Text Detail */}
          <div className="flex-1  p-10  lg:p-10 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-5xl md:mt-20 md:w-96 leading-[1.2] font-black tracking-tight  text-slate-900">
              LATEST  <span className="text-blue-600"> PLACEMENT UPDATES</span> AND INDUSTRY  <span className="text-blue-600"> NEWS</span> <br />
              
             
              <br />
              
            </h1>
            <div className="max-w-md w-full -mt-16 ">
              <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed">
                Explore expert <span className="text-blue-600 font-bold">ideas</span>, <span className="text-blue-600 font-bold">industry insights</span>, and <span className="text-blue-600 font-bold">career guidance</span> designed to support student placements and job readiness.
              </p>
            </div>
            <div>
              <button className="bg-blue-600 mt-10 hover:bg-blue-700 text-white font-black uppercase text-[12px] tracking-widest px-10 py-5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95">
                EXPLORE PLACEMENTS
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="flex-1 p-8 lg:p-12 relative z-10 flex items-center justify-center">
            <div className="w-full h-full max-w-[640px] aspect-[4/3] relative">
              <img 
                src="/images/placement-updates/placement-hero.svg" 
                alt="Placement Success Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* OVERVIEW SECTION */}
        <div className="mt-32 relative">
          
          {/* Decorative Section Shape (Large Blue Blob on Right) */}
          <div className="absolute top-0 right-0 w-[400px] h-[600px] pointer-events-none opacity-30 -z-10 translate-x-12 translate-y-20">
            <div className="w-full h-full bg-blue-100 rounded-full blur-[90px]" />
          </div>

          {/* Centered Heading */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 group italic">
            Placements  <span className="text-blue-600 not-italic pl-2 ">Overview</span> 
            </h2>
          </div>

          {/* ROW 1: 5-Column Stats Grid */}
          <div className="grid grid-cols-5 md:grid-cols-5 gap-y-16 gap-x-8 mb-24 w-full mt-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="text-[44px] md:text-[54px] font-black text-blue-600 leading-none mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  <Counter target={stat.value} />{stat.suffix}
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2: 5-Column Packages Grid */}
          <div className="grid grid-cols-5 mt-20 md:grid-cols-5 gap-y-16 gap-x-8 mb-24 max-w-6xl mx-auto w-full">
            {packageStats.map((pkg, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-[34px] md:text-5xl font-black text-blue-600 leading-none mb-4 tracking-tighter">
                  {pkg.lpa} <span className="text-slate-900 text-[24px]">LPA</span>
                </div>
                <div className="text-center px-4">
                  <p className="text-[11px] font-bold text-slate-500 leading-snug">
                    {pkg.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 3: Final Centered Package (3-6 LPA) */}
          <div className="flex flex-col items-center mt-8">
            <div
              className="bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group shadow-2xl transition-all duration-700 ease-out animate-fadeInScale"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-600/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />

              {/* STATS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
                {/* {packageStats.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="relative group/pkg p-4 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                  >
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] group-hover/pkg:text-white transition-colors">
                          {pkg.type}
                        </span>

                        <span className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                          {pkg.trend}
                        </span>
                      </div>

                      <div className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tighter">
                        {pkg.lpa}
                        <span className="text-blue-500 text-lg uppercase tracking-wider font-bold ml-1">
                          LPA
                        </span>
                      </div>

                      <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-[140px]">
                        Offered by {pkg.companies} premium companies
                      </p>
                    </div>

                    {/* divider */}
                    {/* {idx < 4 && (
                      <div className="hidden lg:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-12 bg-slate-800" />
                    )}
                  </div>
                ))} */} 
              </div>

              {/* CTA FOOTER */}
              <div className="border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl border border-slate-700 bg-slate-800/50 flex flex-col items-center justify-center text-blue-400 group-hover:border-blue-500/30 transition-all">
                    <span className="text-lg font-black leading-none">3-6</span>
                    <span className="text-[8px] font-bold opacity-60">LPA</span>
                  </div>

                  <div>
                    <p className="text-white font-bold text-lg leading-none mb-1">
                      Standard Entry Packages
                    </p>

                    <p className="text-slate-500 text-xs font-medium uppercase tracking-widest flex items-center gap-2">
                      {/* <FaMapMarkerAlt className="w-3 h-3" /> */}
                      1000+ Premium Companies Nationwide
                    </p>
                  </div>
                </div>

                <button className="w-full md:w-auto px-10 py-5 bg-white hover:bg-blue-600 text-slate-900 hover:text-white font-black rounded-2xl transition-all shadow-xl hover:shadow-blue-600/20 uppercase text-[12px] tracking-[2px]">
                  Career Roadmap 2024
                </button>
              </div>

              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeInScale {
                  0% { opacity: 0; transform: scale(0.95); }
                  100% { opacity: 1; transform: scale(1); }
                }
                .animate-fadeInScale {
                  animation: fadeInScale 0.8s ease forwards;
                }
              ` }} />
            </div>

          </div>



        </div>

      </div>
    </div>
  );
}























