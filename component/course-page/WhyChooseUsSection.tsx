"use client";

import React from "react";

const features = [
    "Industry-aligned AI & Data Science curriculum designed for future careers",
    "Extensive live projects, labs & real-world case studies",
    "Expert-led training by industry professionals & tech mentors",
    "Hands-on exposure to Python, Machine Learning & Big Data tools",
    "Strong foundation in Data Analytics & AI problem-solving",
    "Globally recognized certifications in emerging technologies",
    "Career-focused mentoring & professional skill development",
    "Internship opportunities with industry partners",
    "Placement assistance & interview preparation support",
];

export default function WhyChooseSection() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-row ">
                {/* Header */}
                <div className="max-w-3xl mb-16 mt-24  transition-all duration-700 ease-out">
                    {/* Eyebrow */}
                    <h3 className="text-xl font-semibold text-blue-600 mb-1">
                        WHY CHOOSE
                    </h3>

                    {/* Main Heading */}
                    <h2 className="text-3xl lg:text-4xl font-black leading-snug text-gray-900">
                        BCA in AI & Data Science{" "}
                        <span className="block mt-2 text-blue-600 font-semibold">
                            At SEAMEDU
                        </span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group p-6 border border-gray-200 rounded-xl bg-white transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1.5"
                        >
                            <div className="flex items-start gap-4">
                                {/* Accent Dot */}
                                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>

                                <p className="text-sm text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                                    {item}
                                </p>
                            </div>

                            {/* Hover Line */}
                            <div className="mt-4 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}