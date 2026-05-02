"use client";

import Image from "next/image";
import React from "react";
// Using FontAwesome and HeroIcons from react-icons
import {
  FaBookOpen,
  FaClock,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaCircleCheck,
  FaArrowRight,
  FaFileArrowDown
} from "react-icons/fa6";

export default function HeroSections() {
  const features = [
    { icon: FaBookOpen, text: "Industry-Aligned Curriculum" },
    { icon: FaClock, text: "Duration : 3 Years" },
    { icon: FaBriefcase, text: "Internships & Industry Exposure" },
    { icon: FaCode, text: "Work on Real Projects" },
    { icon: FaGraduationCap, text: "Career & Placement Support" },
    { icon: FaCircleCheck, text: "Job-Ready Skills" },
  ];

  return (
    <>
      {/* Required CSS for the Fade-In effect if not in your tailwind.config.js */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      <section className="relative min-h-[100vh] overflow-hidden">
        {/* RIGHT BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover"
          style={{
            backgroundImage: "url('/images/courses-images/BcaAIDS.png')",
          }}
        />

        {/* OVERLAY (for fade + readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 mt-">
          <div className="max-w-2xl mt-20 animate-fade-in-up">
            {/* HEADING */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
              Future-Ready BCA in AI <br /> & Data Science
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 text-lg text-gray-700">
              Industry-focused, hands-on learning designed to build strong
              foundations in <br /> Artificial Intelligence and Data Science for
              the digital future.
            </p>

            {/* FEATURES */}
            <div className="mt-10 flex flex-wrap gap-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 rounded-lg border border-blue-300 bg-white/20 backdrop-blur px-3 py-2 shadow-sm hover:shadow-md transition"
                >
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up delay-200 opacity-0">
              <button className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition">
                Apply Now
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="flex items-center gap-2 rounded-full border-2 border-blue-600 px-8 py-4 text-blue-600 font-semibold hover:bg-blue-50 transition">
                <FaFileArrowDown className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}