"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";



interface WorkshopEvent {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    fullTheory: string;
    date: string;
    time: string;
    venue: string;
}

const events: WorkshopEvent[] = [
    {
        id: 6,
        title: "Digital Marketing Strategy",
        category: "Management",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description: "Mastering the algorithm: SEO, Social Media, and Performance Marketing.",
        fullTheory: "In a world of short-form content, how do you stand out? This seminar focuses on data-driven marketing. Learn how to analyze user behavior, run A/B tests on ad creatives, and build a cohesive brand voice across platforms like Instagram, LinkedIn, and YouTube.",
        date: "22 May, 2027",
        time: "3:00 PM",
        venue: "Seminar Hall B"
    },
    {
        id: 3,
        title: "Game Art Unveiled",
        category: "Design",
        image: "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?auto=format&fit=crop&q=80&w=800",
        description: "Explore the creative process behind world-building and character design.",
        fullTheory: "This session dives deep into the pipeline of professional game art. From initial silhouette sketching to 3D sculpting and PBR texturing. Chinmay Bhosekar will demonstrate how visual storytelling is integrated into environment design to guide players subconsciously through a level.",
        date: "09 Jan, 2025",
        time: "Room No. 004",
        venue: "Design Studio, Seamedu"
    },
    {
        id: 5,
        title: "Modern UI/UX Trends 2026",
        category: "Design",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
        description: "Designing for the future: Glassmorphism, Bento grids, and AI-driven interfaces.",
        fullTheory: "Explore how design systems are evolving with AI integration. This workshop focuses on Figma best practices, creating scalable design tokens, and user psychology. We'll build a high-fidelity mobile dashboard prototype using advanced auto-layout and prototyping features.",
        date: "18 Jan, 2025",
        time: "1:00 PM",
        venue: "Innovation Hub"
    },
    {
        id: 7,
        title: "Culinary Management Masterclass",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
        description: "Learn the secrets of running a successful five-star kitchen and restaurant operation.",
        fullTheory: "This masterclass covers the essentials of high-end hospitality management. From kitchen workflows and menu engineering to staff leadership and customer experience design. Perfect for aspiring restaurateurs and hospitality professionals.",
        date: "05 Feb, 2025",
        time: "10:00 AM",
        venue: "Kitchen Lab 01"
    },
    {
        id: 1,
        title: "Game Day 2025 - Pune",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        description: "The ultimate showdown of talent. Join us for a day of competitive gaming, networking, and fun.",
        fullTheory: "Game Day 2025 is designed to bridge the gap between amateur gaming and professional esports. Students will engage in live tournaments, experience VR showcases, and attend a keynote on the future of Unreal Engine 5. It is an opportunity to showcase not just playing skills, but technical understanding of game mechanics and optimization.",
        date: "10 Jan, 2025",
        time: "2:00 PM Onwards",
        venue: "Main Auditorium, Pune Campus"
    },
    {
        id: 2,
        title: "2D Game Mechanics Workshop",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        description: "Master player and enemy movement logic using industry-standard scripts.",
        fullTheory: "Led by industry veteran Bhushan Rathod, this intensive workshop covers the 'Physics of Fun.' Participants will learn to script responsive character controllers, implement AI pathfinding for enemies, and create seamless animations using state machines. Perfect for those looking to build their first solid gameplay loop.",
        date: "09 Jan, 2025",
        time: "11:00 AM",
        venue: "Lab 04, Tech Wing"
    },
    {
        id: 4,
        title: "VFX & Compositing Masterclass",
        category: "Media",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
        description: "Learn the secrets of Hollywood-grade visual effects and green screen magic.",
        fullTheory: "Understand the integration of live-action footage with computer-generated elements. This masterclass covers rotoscoping, camera tracking, and color grading in Nuke and After Effects. We will deconstruct a recent blockbuster scene to see how layers of light and texture are composited for realism.",
        date: "15 Jan, 2025",
        time: "10:30 AM",
        venue: "VFX Suite 02"
    }
];

const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))];

export default function WorkshopsSection() {
    const [selectedEvent, setSelectedEvent] = useState<WorkshopEvent | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [isAnimate, setIsAnimate] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle animation trigger when modal opens
    const openModal = (event: WorkshopEvent) => {
        setSelectedEvent(event);
        setTimeout(() => setIsAnimate(true), 10);
    };

    const closeModal = () => {
        setIsAnimate(false);
        setTimeout(() => setSelectedEvent(null), 300); // Wait for transition to finish
    };

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedEvent]);

    // Reset visible count when category changes
    useEffect(() => {
        setVisibleCount(6);
    }, [selectedCategory]);

    const filteredEvents = selectedCategory === "All"
        ? events
        : events.filter(event => event.category === selectedCategory);

    const displayedEvents = filteredEvents.slice(0, visibleCount);

    return (
        <section className=" bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16 item-center">
                    <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Workshops & Events</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Industry experts conducting workshops to impart their knowledge and expertise at regular intervals.
                    </p>
                    <div className="flex justify-center mt-12 px-4">
                        <div className="relative mb-12 sm:mb-16">

                            {/* MOBILE DROPDOWN */}
                            <div className="sm:hidden w-full relative">

                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full flex items-center justify-between p-4 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-md transition-all active:scale-[0.98]"
                                >
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                        {selectedCategory === "All" ? "All Programs" : selectedCategory}
                                    </span>

                                    <FaChevronDown
                                        className={`text-slate-400 transition-transform duration-500 ml-40 ${isDropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-[60] p-2 bg-white rounded-xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-top-2 duration-300">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => {
                                                    setSelectedCategory(category);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-3.5 rounded-lg text-xs font-[1000] uppercase tracking-widest transition-all ${selectedCategory === category
                                                    ? "bg-blue-50 text-blue-600 shadow-sm"
                                                    : "text-slate-600 hover:bg-slate-50"
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* BACKDROP */}
                                {isDropdownOpen && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/5"
                                        onClick={() => setIsDropdownOpen(false)}
                                    />
                                )}
                            </div>




                        </div>

                        {/* Desktop Version: The Pill Group (Hidden on mobile) */}
                        <div className="hidden sm:inline-flex flex-wrap items-center bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-inner">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${selectedCategory === category
                                        ? "bg-white text-blue-600 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Add this CSS to your global.css to hide scrollbar but keep functionality */}
                        <style jsx global>{`
                        .no-scrollbar::-webkit-scrollbar {
                        display: none;
                        }
                        .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                        }
                    `}</style>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedEvents.map((event) => (
                        <div key={event.id} className="flex flex-col bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-4">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-lg w-fit uppercase tracking-widest mb-2.5">
                                {event.category}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">{event.title}</h3>
                            <p className="text-gray-500 text-[13px] mb-5 line-clamp-2 leading-relaxed">{event.description}</p>

                            <button
                                onClick={() => openModal(event)}
                                className="w-full py-3 rounded-xl border border-gray-200 text-gray-900 text-sm font-bold hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2"
                            >
                                Read More <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredEvents.length && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl active:scale-95"
                        >
                            Load More Events
                        </button>
                    </div>
                )}
            </div>

            {/* Modal Popup */}
            {selectedEvent && (
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimate ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={closeModal}></div>

                    {/* Modal Card */}
                    <div
                        className={`bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden relative flex flex-col md:flex-row transition-all duration-500 transform ${isAnimate ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 z-20 bg-white rounded-full p-2 hover:rotate-90 transition-all duration-300 shadow-lg border border-gray-100"
                        >
                            <X className="w-6 h-6 text-gray-900" />
                        </button>

                        {/* Left Image Area */}
                        <div className="w-full md:w-5/12 relative h-72 md:h-auto">
                            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                        </div>

                        {/* Right Content Area */}
                        <div className="w-full md:w-7/12 p-8 md:p-14 overflow-y-auto bg-white">
                            <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                                {selectedEvent.category}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                {selectedEvent.title}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 border-y border-gray-100 py-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-400">Date</p>
                                        <p className="text-sm font-bold text-gray-800">{selectedEvent.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-400">Timing</p>
                                        <p className="text-sm font-bold text-gray-800">{selectedEvent.time}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 col-span-full">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-400">Location</p>
                                        <p className="text-sm font-bold text-gray-800">{selectedEvent.venue}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-bold text-gray-900">About the Workshop</h4>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {selectedEvent.fullTheory}
                                </p>
                            </div>

                            <button
                                onClick={closeModal}
                                className="mt-12 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}