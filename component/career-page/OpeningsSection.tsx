"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaFilm, 
  FaVolumeUp, 
  FaGamepad, 
  FaUserTie, 
  FaChartLine, 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaChevronDown
} from "react-icons/fa";

interface CategoryCardProps {
  icon: React.ReactNode;
  label: string;
  positions: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, label, positions }) => (
  <motion.div 
    whileHover={{ translateY: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    className="bg-[#D9E6F2] p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg shadow-slate-200/50 border border-transparent min-w-[140px] cursor-pointer"
  >
    <div className="text-4xl mb-4 text-[#0F172A]">{icon}</div>
    <div className="text-[13px] font-black text-[#0F172A] leading-tight mb-2 uppercase tracking-tight">{label}</div>
    <div className="text-[11px] font-bold text-slate-500">{positions} Positions</div>
  </motion.div>
);

interface JobCardProps {
  category: string;
  categoryIcon: React.ReactNode;
  title: string;
  location: string;
  date: string;
  positions: number;
}

const JobCard: React.FC<JobCardProps> = ({ category, categoryIcon, title, location, date, positions }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white p-8 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden h-full group transition-all duration-500"
  >
    {/* Watermark/Background Icon */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] scale-[5] pointer-events-none text-slate-400 group-hover:scale-[5.5] group-hover:opacity-[0.08] transition-all duration-700">
      {categoryIcon}
    </div>

    <div className="flex items-center gap-2 mb-6 text-[12px] font-bold text-slate-400 uppercase tracking-widest z-10 transition-colors group-hover:text-slate-600">
      {categoryIcon}
      <span>{category}</span>
    </div>
    
    <h3 className="text-[22px] font-black text-[#0F172A] mb-3 z-10 leading-tight transition-colors group-hover:text-blue-600">
      {title}
    </h3>
    
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-10 z-10">
      <FaMapMarkerAlt className="text-blue-500" />
      <span className="font-medium">{location}</span>
    </div>

    <div className="mt-auto flex flex-col gap-2 z-10">
      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
        <span>{date}</span>
      </div>
      <div className="text-sm font-black text-[#0F172A] mb-2">{positions} Positions</div>
      <button className="flex items-center gap-3 text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] group/btn hover:text-blue-700 transition-all">
        APPLY NOW <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1.5 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const OpeningsSection: React.FC = () => {
    const categories = [
        { icon: <FaGraduationCap />, label: "Academics", positions: 2 },
        { icon: <FaFilm />, label: "Film Making", positions: 2 },
        { icon: <FaVolumeUp />, label: "Sound Engineering", positions: 2 },
        { icon: <FaGamepad />, label: "Game Development", positions: 2 },
        { icon: <FaUserTie />, label: "Business Development", positions: 2 },
        { icon: <FaUserTie />, label: "Business Development", positions: 2 },
        { icon: <FaUserTie />, label: "Business Development", positions: 2 },
        { icon: <FaUserTie />, label: "Business Development", positions: 2 },
        { icon: <FaUserTie />, label: "Business Development", positions: 2 },
    ];

    const cities = ["Pune", "Gurugram", "Kolkata", "Banglore"];

    const jobs = [
        { 
            category: "Finance", 
            categoryIcon: <FaChartLine />, 
            title: "Finance Analyst", 
            location: "Pune, Maharashtra", 
            date: "25 Dec, 2025", 
            positions: 2 
        },
        { 
            category: "Film Making", 
            categoryIcon: <FaFilm />, 
            title: "Video Editor", 
            location: "Gurugram, Delhi", 
            date: "01 Jan 2026", 
            positions: 5 
        },
        { 
            category: "Sound Engineer", 
            categoryIcon: <FaVolumeUp />, 
            title: "Studio Recording Engineer", 
            location: "Kolkata, West Bengal", 
            date: "25 Dec, 2025", 
            positions: 3 
        },
        { 
            category: "Game Development", 
            categoryIcon: <FaGamepad />, 
            title: "C++ Programmer", 
            location: "Banglore, Karnataka", 
            date: "25 Dec, 2025", 
            positions: 2 
        },
        { 
            category: "Business Development", 
            categoryIcon: <FaUserTie />, 
            title: "Sales Executive", 
            location: "Banglore, Karnataka", 
            date: "29 Dec, 2025", 
            positions: 1 
        },
        { 
            category: "Film Making", 
            categoryIcon: <FaFilm />, 
            title: "Production Designer", 
            location: "Pune, Maharashtra", 
            date: "01 Jan 2026", 
            positions: 1 
        },
        { 
            category: "Business Development", 
            categoryIcon: <FaUserTie />, 
            title: "Partnership Management", 
            location: "Banglore, Karnataka", 
            date: "15 Jan, 2025", 
            positions: 1 
        },
        { 
            category: "Finance", 
            categoryIcon: <FaChartLine />, 
            title: "Finance Analyst", 
            location: "Pune, Maharashtra", 
            date: "25 Dec, 2025", 
            positions: 2 
        },
        { 
            category: "Business Development", 
            categoryIcon: <FaUserTie />, 
            title: "Growth Manager", 
            location: "Pune, Maharashtra", 
            date: "29 Dec, 2025", 
            positions: 1 
        },
        { 
            category: "Finance", 
            categoryIcon: <FaChartLine />, 
            title: "Relationship Manager", 
            location: "Gurugram, Delhi", 
            date: "1 Jan 2026", 
            positions: 2 
        },
        { 
            category: "Sound Engineer", 
            categoryIcon: <FaVolumeUp />, 
            title: "Mixing Engineer", 
            location: "Banglore, Karnataka", 
            date: "5 Jan 2026", 
            positions: 3 
        },
        { 
            category: "Game Development", 
            categoryIcon: <FaGamepad />, 
            title: "Game Tester", 
            location: "Pune, Maharashtra", 
            date: "27 Dec 2025", 
            positions: 2 
        },
    ];

    return (
        <section className="bg-white pt-24 pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h1 className="text-5xl lg:text-7xl font-black text-center text-[#0F172A] mb-24 uppercase tracking-tighter">
                    CAREERS
                </h1>

                {/* Category Section */}
                <div className="mb-24">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                        <h2 className="text-4xl font-black text-[#0F172A] tracking-tighter">Search By Category</h2>
                        <div className="flex items-center gap-4 bg-[#D9E6F2]/40 border border-slate-100 px-6 py-3 rounded-2xl text-blue-600 font-black text-sm cursor-pointer shadow-sm hover:shadow-md transition-all group">
                            All Categories <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-300" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-5 overflow-x-auto pb-4 scrollbar-hide">
                        {categories.map((cat, i) => (
                            <CategoryCard key={i} {...cat} />
                        ))}
                    </div>
                </div>

                {/* City Section */}
                <div className="mb-32">
                     <h2 className="text-4xl font-black text-[#0F172A] tracking-tighter mb-12">Search By City</h2>
                     <div className="flex flex-wrap gap-5">
                        {cities.map((city, i) => (
                            <button key={i} className="px-10 py-4 bg-[#D9E6F2]/50 hover:bg-blue-600 hover:text-white text-[#0F172A] font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-slate-100 border border-slate-100">
                                {city === "Banglore" ? "Bangalore" : city}
                            </button>
                        ))}
                     </div>
                </div>
            </div>

    {/* Featured Job Offer - Slightly gray background area */}
    <div className="bg-[#F8FAFC] pt-24 pb-32 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-20">
                <h2 className="text-5xl font-black text-[#0F172A] tracking-tighter mb-4">Featured Job Offer</h2>
                <div className="w-24 h-1.5 bg-blue-600 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                {jobs.map((job, i) => (
                    <JobCard key={i} {...job} />
                ))}
            </div>

            <div className="flex justify-center">
                <button className="flex items-center gap-6 bg-[#0A66C2] hover:bg-blue-700 text-white font-black text-sm uppercase tracking-[0.2em] pl-10 pr-4 py-4 rounded-full shadow-2xl shadow-blue-600/30 transition-all group active:scale-95">
                    Load More 
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1.5 transition-all duration-300">
                        <FaArrowRight className="text-sm" />
                    </div>
                </button>
            </div>
        </div>
    </div>
</section>
);
};

export default OpeningsSection;
