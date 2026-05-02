"use client";

import React, { useState } from "react";

// Types for our experts
interface Expert {
    id: number;
    name: string;
    role: string;
    category: string;
    image: string;
    bio: string;
}

const expertsData: Expert[] = [
    // DESIGN SECTOR
    {
        id: 1,
        name: "Dr. Asheesh Dixit",
        role: "Head Of Design",
        category: "Design",
        image: "https://i.pravatar.cc/300?u=1",
        bio: "Dr. Dixit has over 20 years of experience in industrial design and academic leadership. He has pioneered several design-thinking frameworks used in national animation bodies.Dr. Dixit has over 20 years of experience in industrial design and academic leadership. He has pioneered several design-thinking frameworks used in national animation bodies.",
    },
    // ... (Repeat/Add more experts for Design, VFX, Sound, etc.)
    { id: 2, name: "Dr. Asheesh Dixit", role: "Head Of Design", category: "Design", image: "https://i.pravatar.cc/300?u=2", bio: "Expert in UI/UX and visual storytelling." },
    { id: 3, name: "Dr. Asheesh Dixit", role: "Head Of Design", category: "Design", image: "https://i.pravatar.cc/300?u=3", bio: "Specializes in design research and sustainability." },
    { id: 4, name: "Dr. Asheesh Dixit", role: "Head Of Design", category: "Design", image: "https://i.pravatar.cc/300?u=4", bio: "Leading researcher in digital media arts." },
    { id: 5, name: "Dr. Asheesh Dixit", role: "Head Of Design", category: "Design", image: "https://i.pravatar.cc/300?u=5", bio: "Passionate about mentoring the next generation of designers." },
    { id: 6, name: "Dr. Asheesh Dixit", role: "Head Of Design", category: "Design", image: "https://i.pravatar.cc/300?u=6", bio: "Award-winning animator and design consultant." },
    // --- VFX & ANIMATION ---
    { id: 7, name: "Karan Johar", role: "VFX Supervisor", category: "VFX & Animation", image: "https://i.pravatar.cc/300?u=v1", bio: "Lead compositor for several major international film projects." },
    { id: 8, name: "Priya Sharma", role: "3D Modeler", category: "VFX & Animation", image: "https://i.pravatar.cc/300?u=v2", bio: "Expert in photorealistic character modeling and texturing." },
    { id: 9, name: "Amitabh Raj", role: "Technical Director", category: "VFX & Animation", image: "https://i.pravatar.cc/300?u=v3", bio: "Specializes in fluid simulations and complex particle systems." },
    { id: 10, name: "Sneha Reddy", role: "Rigging Expert", category: "VFX & Animation", image: "https://i.pravatar.cc/300?u=v4", bio: "Ensures seamless character movement for high-end animation." },
    { id: 11, name: "Rajesh Khanna", role: "Lighting Lead", category: "VFX & Animation", image: "https://i.pravatar.cc/300?u=v5", bio: "Master of cinematic lighting and digital cinematography." },
    // SOUND ENGINEERING SECTOR
    {
        id: 7,
        name: "Dr. Asheesh Dixit",
        role: "Sound Specialist",
        category: "Sound Engineering",
        image: "https://i.pravatar.cc/300?u=7",
        bio: "An expert in sound engineering and design industry, closely associated with Seamedu for technical workshops.",
    },
    { id: 8, name: "Dr. Asheesh Dixit", role: "Head Of Design", category: "Sound Engineering", image: "https://i.pravatar.cc/300?u=8", bio: "Specialist in acoustics and studio production." },
    // --- FILM MAKING ---
    { id: 16, name: "Siddharth Malhotra", role: "Cinematographer", category: "Film Making", image: "https://i.pravatar.cc/300?u=f1", bio: "Focuses on visual storytelling through advanced camera techniques." },
    { id: 17, name: "Anjali Menon", role: "Film Editor", category: "Film Making", image: "https://i.pravatar.cc/300?u=f2", bio: "Expert in non-linear editing and narrative pacing for features." },
    { id: 18, name: "Rahul Bose", role: "Documentary Director", category: "Film Making", image: "https://i.pravatar.cc/300?u=f3", bio: "Specializes in social-impact filmmaking and realism." },

    // --- GAME DEVELOPMENT ---
    { id: 19, name: "Tanya Duggal", role: "Game Producer", category: "Game Development", image: "https://i.pravatar.cc/300?u=g1", bio: "Manages large-scale game cycles from concept to release." },
    { id: 20, name: "Kabir Singh", role: "Unreal Engine Lead", category: "Game Development", image: "https://i.pravatar.cc/300?u=g2", bio: "Advanced blue-printing and optimization for AAA titles." },
];

const categories = ["Design", "VFX & Animation", "Sound Engineering", "Film Making", "Game Development"];

export default function MeetOurExperts() {
    // State to track which categories are "expanded"
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    const toggleCategory = (cat: string) => {
        setExpandedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
    };

    return (
        <section className="bg-slate-50 py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-6">
                        MEET OUR <span className="text-blue-600">INDUSTRY EXPERTS</span>
                    </h2>
                    <p className="max-w-4xl mx-auto text-gray-600 font-medium leading-relaxed">
                        Seamedu has strong industry connections with national bodies like <span className="text-blue-600 font-bold">ASIFA, NASSCOM, FICCI, and MCCIA</span>.
                        We regularly invite experienced professionals to share their insights with our students through sessions and workshops.
                    </p>
                </div>

                {/* Category Sections */}
                {categories.map((category) => {
                    const categoryExperts = expertsData.filter((e) => e.category === category);
                    if (categoryExperts.length === 0) return null;

                    const isExpanded = expandedCategories[category];
                    // Show only 2 rows (assuming 5 per row = 10 total) or all if expanded
                    const visibleExperts = isExpanded ? categoryExperts : categoryExperts.slice(0, 5);

                    return (
                        <div key={category} className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight whitespace-nowrap">
                                    {category} <span className="text-blue-600">Faculty</span>
                                </h3>
                                <div className="h-[2px] w-full bg-blue-100"></div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {visibleExperts.map((expert) => (
                                    <div
                                        key={expert.id}
                                        className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        {/* Expert Image */}
                                        <div className="aspect-[4/5] relative overflow-hidden bg-gray-200">
                                            <img
                                                src={expert.image}
                                                alt={expert.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Hover Bio Overlay */}
                                            <div className="absolute inset-0 bg-blue-900/90 p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h4 className="text-white font-bold mb-2 border-b border-white/20 pb-2">Biography</h4>
                                                <div className="overflow-y-auto pr-2 custom-scrollbar text-white/90 text-sm leading-relaxed">
                                                    {expert.bio}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Name & Role */}
                                        <div className="p-4 text-center">
                                            <h4 className="font-black text-gray-900 text-base leading-tight uppercase">
                                                {expert.name}
                                            </h4>
                                            <p className="text-blue-600 text-xs font-bold mt-1 uppercase tracking-wider">
                                                {expert.role}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button for Category */}
                            {categoryExperts.length > 5 && (
                                <div className="flex justify-center mt-10">
                                    <button
                                        onClick={() => toggleCategory(category)}
                                        className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-black rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase text-xs tracking-widest shadow-md hover:shadow-xl"
                                    >
                                        {isExpanded ? "Show Less" : `View All ${category} Experts`}
                                        <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>
        </section>
    );
}