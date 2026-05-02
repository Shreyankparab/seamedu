"use client";

import React from "react";
import Image from "next/image";

const software = [
    {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
        name: "Jupyter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
    {
        name: "Eclipse",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
    },
    {
        name: "IntelliJ",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
        name: "Tableau",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Tableau_Logo.png",
    },
    {
        name: "Power BI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Power_BI_logo.svg",
    },
    {
        name: "Android Studio",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    },
    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
];

export default function SoftwareCovered() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* CSS Animation for Entrance */}
            <style jsx global>{`
        @keyframes fadeInUpScale {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-software-card {
          animation: fadeInUpScale 0.5s ease-out forwards;
        }
      `}</style>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Tools & Platforms</h2>
                    <h3 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-none mb-6">
                        Software <span className="text-blue-600 not-italic">Covered</span>
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {software.map((item, index) => (
                        <div
                            key={index}
                            style={{ animationDelay: `${index * 0.05}s` }}
                            className="animate-software-card opacity-0 group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center justify-center py-8 hover:-translate-y-2"
                        >
                            {/* Subtle Hover Glow Background */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300" />

                            {/* Icon */}
                            <div className="relative w-14 h-14 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Name */}
                            <p className="relative z-10 mt-4 text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}