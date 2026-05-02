"use client";

import { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaPaintBrush, FaHotel, FaLaptopCode, FaFilm, FaNewspaper, FaMicrochip, FaDatabase, FaUtensils, FaChevronDown } from "react-icons/fa";

const tabs = [
  "All",
  "Management",
  "Design",
  "Hospitality",
  "Technology",
  "Media",
];

const courses = [
  {
    title: "BBA Finance",
    category: "Management",
    locations: ["Pune"],
    icon: <FaBriefcase />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    title: "MBA Marketing",
    category: "Management",
    locations: ["Pune"],
    icon: <FaGraduationCap />,
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  },
  {
    title: "B.Des Fashion Design",
    category: "Design",
    locations: ["Pune"],
    icon: <FaPaintBrush />,
    image: "https://images.unsplash.com/photo-1520975922324-7b2b5b5b9c1a",
  },
  {
    title: "Interior Design",
    category: "Design",
    locations: ["Pune"],
    icon: <FaPaintBrush />,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Hotel Management",
    category: "Hospitality",
    locations: ["Pune"],
    icon: <FaHotel />,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  },
  {
    title: "Culinary Arts",
    category: "Hospitality",
    locations: ["Pune"],
    icon: <FaUtensils />,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "BCA Software Development",
    category: "Technology",
    locations: ["Pune"],
    icon: <FaLaptopCode />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "AI & Data Science",
    category: "Technology",
    locations: ["Pune"],
    icon: <FaMicrochip />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "Film Production",
    category: "Media",
    locations: ["Pune"],
    icon: <FaFilm />,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Digital Journalism",
    category: "Media",
    locations: ["Pune"],
    icon: <FaNewspaper />,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

export default function CoursesGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCourses =
    activeTab === "All"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <section className="py-16 bg-gray-100 relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* Categories Section - Responsive UI */}
        <div className="relative mb-12 sm:mb-16">
          {/* Mobile Category Dropdown */}
          <div className="sm:hidden w-full relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between p-4 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-md transition-all active:scale-[0.98]"
            >
              <span className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                {activeTab === "All" ? "All Programs" : activeTab}
              </span>
              <FaChevronDown className={`text-slate-400 transition-transform duration-500 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-[60] p-2 bg-white rounded-xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-top-2 duration-300">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3.5 rounded-lg text-xs font-[1000] uppercase tracking-widest transition-all ${activeTab === tab ? "bg-blue-50 text-blue-600 shadow-sm" : "text-slate-600 hover:bg-slate-50"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}

            {/* Backdrop for dropdown */}
            {isDropdownOpen && (
              <div
                className="fixed inset-0 z-50 bg-black/5"
                onClick={() => setIsDropdownOpen(false)}
              />
            )}
          </div>

          {/* Desktop Pills Switcher - Hidden on Mobile */}
          <div className="hidden sm:flex justify-center">
            <div className="inline-flex flex-wrap justify-center p-1.5 bg-slate-200/50 backdrop-blur-md rounded-2xl border border-slate-300/50 gap-1.5 shadow-inner">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl font-[1000] text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                    ? "bg-white text-blue-600 shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="relative h-[340px] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 bg-black border border-white/5"
            >
              {/* Image with Dark Zoom Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={`${course.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 transition-colors duration-700 group-hover:via-black/50" />
              </div>

              {/* Location Badges - Top Left */}
              <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                {(course as any).locations.map((loc: string, lIdx: number) => (
                  <span
                    key={lIdx}
                    className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest text-black shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    {loc}
                  </span>
                ))}
              </div>

              {/* Icon Container - Top Right */}
              <div className="absolute top-5 right-5 z-20">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-lg transform transition-all duration-700 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110 group-hover:-translate-y-1 shadow-xl">
                  {(course as any).icon}
                </div>
              </div>

              {/* Content - Bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-[2px] h-3 bg-blue-600/60 rounded-full" />
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">
                      {course.category}
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg group-hover:text-blue-200 transition-colors">
                    {course.title}
                  </h3>

                  {/* Action row - Always visible on mobile, interactive on desktop */}
                  <div className="mt-4 flex items-center gap-2 transition-all duration-500 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">View Details</span>
                    <svg className="w-4 h-4 text-blue-500 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Inner Border Glow */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/20 rounded-xl transition-all duration-700 pointer-events-none z-30" />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}