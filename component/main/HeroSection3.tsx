// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//     FaArrowRight,
//     FaPlay,
//     FaLaptopCode,
//     FaBullhorn,
//     FaPaintBrush,
//     FaBriefcase,
//     FaHotel,
// } from "react-icons/fa";
// import { HiOutlineAcademicCap } from "react-icons/hi2";
// import { MdGroups, MdWorkOutline } from "react-icons/md";

// const slides = [
//     {
//         id: 1,
//         label: "01",
//         tag: "School Of Media",
//         heading: "Turn Creativity Into a Career in Media & Communication",
//         subheading:
//             "Learn digital storytelling, branding, content creation, and communication skills that match today’s creative industry demands.",
//         careers: ["Digital Marketing", "Content Creation", "Media Production"],
//         image: "/images/hero-section/Media.jpeg",
//         icon: <FaBullhorn />,
//         color: "from-pink-500 to-rose-500",
//     },
//     {
//         id: 2,
//         label: "02",
//         tag: "School Of Design",
//         heading: "Design Ideas That Shape the Future",
//         subheading:
//             "Build practical creative skills in visual design, UI/UX, and digital tools to prepare for fast-growing design careers.",
//         careers: ["UI/UX Design", "Graphic Design", "Creative Direction"],
//         image: "/images/hero-section/Design.jpeg",
//         icon: <FaPaintBrush />,
//         color: "from-violet-500 to-fuchsia-500",
//     },
//     {
//         id: 3,
//         label: "03",
//         tag: "School Of Technology",
//         heading: "Build Real-World Tech Skills for Tomorrow’s Careers",
//         subheading:
//             "Gain hands-on knowledge in software, web technologies, and digital innovation to become industry-ready.",
//         careers: ["Software Development", "Web Development", "Tech Careers"],
//         image: "/images/hero-section/Technology.jpeg",
//         icon: <FaLaptopCode />,
//         color: "from-blue-500 to-cyan-500",
//     },
//     {
//         id: 4,
//         label: "04",
//         tag: "School Of Management",
//         heading: "Prepare for Leadership in Modern Business",
//         subheading:
//             "Explore practical business learning in marketing, leadership, operations, and management for high-growth careers.",
//         careers: ["Business Management", "Marketing", "HR & Operations"],
//         image: "/images/hero-section/Management.jpeg",
//         icon: <FaBriefcase />,
//         color: "from-amber-500 to-orange-500",
//     },
//     {
//         id: 5,
//         label: "05",
//         tag: "School Of Hospitality",
//         heading: "Build Global Careers in Hospitality & Tourism",
//         subheading:
//             "Develop confidence, communication, and service excellence for careers in hotels, travel, and guest experience.",
//         careers: ["Hotel Management", "Travel & Tourism", "Guest Experience"],
//         image: "/images/hero-section/Hospitality.jpeg",
//         icon: <FaHotel />,
//         color: "from-emerald-500 to-teal-500",
//     },
// ];

// export default function HeroSection2() {
//     const [activeSlide, setActiveSlide] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//     useEffect(() => {
//         slides.forEach((slide) => {
//             const img = new window.Image();
//             img.src = slide.image;
//         });
//     }, []);

//     useEffect(() => {
//         if (!isAutoPlaying) return;

//         const interval = setInterval(() => {
//             setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [activeSlide, isAutoPlaying]);

//     const toggleInquiry = () => {
//         window.dispatchEvent(new CustomEvent("toggleInquiry"));
//     };

//     return (
//         <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen pt-28 lg:pt-20">
//             {/* BACKGROUND DECOR */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-20 left-[-120px] w-[280px] h-[280px] rounded-full bg-blue-100 blur-3xl opacity-50" />
//                 <div className="absolute bottom-10 right-[-120px] w-[320px] h-[320px] rounded-full bg-purple-100 blur-3xl opacity-50" />
//                 <div className="absolute top-1/3 right-1/4 w-[180px] h-[180px] rounded-full bg-cyan-100 blur-3xl opacity-40" />
//             </div>

//             <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-16">
//                 <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[85vh]">
//                     {/* LEFT CONTENT */}
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeSlide}
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.6 }}
//                             className="max-w-2xl"
//                         >
//                             {/* TAG */}
//                             <div className="inline-flex items-center gap-3 rounded-full bg-white shadow-md border border-slate-200 px-4 py-2 mb-6">
//                                 <span
//                                     className={`w-9 h-9 rounded-full bg-gradient-to-r ${slides[activeSlide].color} text-white flex items-center justify-center text-sm shadow-md`}
//                                 >
//                                     {slides[activeSlide].icon}
//                                 </span>
//                                 <span className="text-sm font-semibold text-slate-700 tracking-wide">
//                                     {slides[activeSlide].tag}
//                                 </span>
//                             </div>

//                             {/* MAIN TITLE */}
//                             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 tracking-tight">
//                                 {slides[activeSlide].heading}
//                             </h1>

//                             {/* SUBTITLE */}
//                             <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
//                                 {slides[activeSlide].subheading}
//                             </p>

//                             {/* CAREER PILLS */}
//                             <div className="flex flex-wrap gap-3 mt-8">
//                                 {slides[activeSlide].careers.map((career, idx) => (
//                                     <span
//                                         key={idx}
//                                         className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-700"
//                                     >
//                                         {career}
//                                     </span>
//                                 ))}
//                             </div>

//                             {/* CTA BUTTONS */}
//                             <div className="flex flex-col sm:flex-row gap-4 mt-10">
//                                 <button
//                                     onClick={toggleInquiry}
//                                     className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-7 py-4 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
//                                 >
//                                     Apply Now
//                                     <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
//                                 </button>

//                                 <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-slate-800 font-semibold shadow-sm hover:shadow-md transition-all duration-300">
//                                     <FaPlay className="text-sm" />
//                                     Explore Schools
//                                 </button>
//                             </div>

//                             {/* TRUST STATS */}
//                             <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">
//                                 <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-4 shadow-sm">
//                                     <HiOutlineAcademicCap className="text-2xl text-blue-600 mb-2" />
//                                     <h4 className="font-black text-slate-900 text-xl">5+</h4>
//                                     <p className="text-sm text-slate-600">Career Schools</p>
//                                 </div>

//                                 <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-4 shadow-sm">
//                                     <MdWorkOutline className="text-2xl text-emerald-600 mb-2" />
//                                     <h4 className="font-black text-slate-900 text-xl">100%</h4>
//                                     <p className="text-sm text-slate-600">Industry Focused</p>
//                                 </div>

//                                 <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-4 shadow-sm">
//                                     <MdGroups className="text-2xl text-purple-600 mb-2" />
//                                     <h4 className="font-black text-slate-900 text-xl">Future</h4>
//                                     <p className="text-sm text-slate-600">Career Ready</p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>

//                     {/* RIGHT VISUAL */}
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeSlide}
//                             initial={{ opacity: 0, scale: 0.96, x: 40 }}
//                             animate={{ opacity: 1, scale: 1, x: 0 }}
//                             exit={{ opacity: 0, scale: 0.96, x: -20 }}
//                             transition={{ duration: 0.7 }}
//                             className="relative flex items-center justify-center"
//                         >
//                             {/* MAIN CARD */}
//                             <div className="relative w-full max-w-[580px]">
//                                 <div className="absolute -top-8 -left-8 w-28 h-28 rounded-3xl bg-white/70 backdrop-blur-md border border-white shadow-xl z-20 flex items-center justify-center">
//                                     <div
//                                         className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${slides[activeSlide].color} text-white flex items-center justify-center text-2xl`}
//                                     >
//                                         {slides[activeSlide].icon}
//                                     </div>
//                                 </div>

//                                 <div className="relative rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.12)] bg-white">
//                                     <div className="relative h-[520px] w-full">
//                                         <Image
//                                             src={slides[activeSlide].image}
//                                             alt={slides[activeSlide].tag}
//                                             fill
//                                             className="object-cover"
//                                             priority
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />

//                                         {/* BOTTOM INFO CARD */}
//                                         <div className="absolute bottom-0 left-0 right-0 p-6">
//                                             <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-white/50 p-5 shadow-xl">
//                                                 <div className="flex items-center justify-between gap-4">
//                                                     <div>
//                                                         <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
//                                                             Featured School
//                                                         </p>
//                                                         <h3 className="text-2xl font-black text-slate-900 mt-2">
//                                                             {slides[activeSlide].tag}
//                                                         </h3>
//                                                     </div>
//                                                     <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
//                                                         {slides[activeSlide].label}/05
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* FLOATING CARD 1 */}
//                                 <motion.div
//                                     initial={{ y: 20 }}
//                                     animate={{ y: [0, -8, 0] }}
//                                     transition={{ duration: 4, repeat: Infinity }}
//                                     className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 w-56 z-20"
//                                 >
//                                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
//                                         Popular Career
//                                     </p>
//                                     <h4 className="mt-2 font-black text-slate-900 text-lg">
//                                         {slides[activeSlide].careers[0]}
//                                     </h4>
//                                     <p className="text-sm text-slate-600 mt-2">
//                                         Learn job-ready practical skills with real-world exposure.
//                                     </p>
//                                 </motion.div>

//                                 {/* FLOATING CARD 2 */}
//                                 <motion.div
//                                     initial={{ y: -20 }}
//                                     animate={{ y: [0, 10, 0] }}
//                                     transition={{ duration: 5, repeat: Infinity }}
//                                     className="absolute top-10 -right-6 bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 w-52 z-20"
//                                 >
//                                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
//                                         Why Choose Us
//                                     </p>
//                                     <h4 className="mt-2 font-black text-slate-900 text-base">
//                                         Industry-Oriented Learning
//                                     </h4>
//                                     <p className="text-sm text-slate-600 mt-2">
//                                         Designed for modern careers after 12th & graduation.
//                                     </p>
//                                 </motion.div>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* BOTTOM SCHOOL SELECTOR */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 lg:mt-0">
//                     {slides.map((slide, idx) => (
//                         <button
//                             key={slide.id}
//                             onClick={() => {
//                                 setActiveSlide(idx);
//                                 setIsAutoPlaying(false);
//                             }}
//                             onMouseLeave={() => setIsAutoPlaying(true)}
//                             className={`group rounded-3xl border p-4 text-left transition-all duration-300 shadow-sm ${activeSlide === idx
//                                 ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]"
//                                 : "bg-white text-slate-800 border-slate-200 hover:shadow-md hover:-translate-y-1"
//                                 }`}
//                         >
//                             <div className="flex items-center justify-between">
//                                 <span
//                                     className={`text-xs font-black tracking-[0.2em] ${activeSlide === idx ? "text-white/70" : "text-slate-400"
//                                         }`}
//                                 >
//                                     {slide.label}
//                                 </span>
//                                 <span
//                                     className={`text-lg ${activeSlide === idx ? "text-white" : "text-slate-700"
//                                         }`}
//                                 >
//                                     {slide.icon}
//                                 </span>
//                             </div>

//                             <h3 className="mt-4 font-black text-sm leading-snug">
//                                 {slide.tag}
//                             </h3>
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }



"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const slides = [
    {
        id: 1,
        title: "Media",
        tag: "School Of Media",
        heading: "Craft Your Future in Digital Storytelling",
        description:
            "Master content creation, social media branding, and visual storytelling for the dynamic world of modern media.",
        accent: "from-sky-400 to-blue-600",
        image: "/images/hero-section/Media.jpeg",
    },
    {
        id: 2,
        title: "Design",
        tag: "School Of Design",
        heading: "Shape the Future Through Creative Design",
        description:
            "Build a foundation in visual thinking, advanced design tools, and user experience to launch your creative career.",
        accent: "from-violet-400 to-fuchsia-600",
        image: "/images/hero-section/Design.jpeg",
    },
    {
        id: 3,
        title: "Technology",
        tag: "School Of Technology",
        heading: "Build the Core of Tomorrow's Innovations",
        description:
            "Gain industry-ready technical expertise in coding, development, and emerging tech for the global digital economy.",
        accent: "from-emerald-400 to-teal-600",
        image: "/images/hero-section/Technology.jpeg",
    },
    {
        id: 4,
        title: "Management",
        tag: "School Of Management",
        heading: "Prepare to Lead and Succeed in Business",
        description:
            "Develop strategic leadership, operational excellence, and real-world business acumen for corporate careers.",
        accent: "from-amber-400 to-orange-600",
        image: "/images/hero-section/Management.jpeg",
    },
    {
        id: 5,
        title: "Hospitality",
        tag: "School Of Hospitality",
        heading: "Host the World with Global Career Skills",
        description:
            "Learn the art of service excellence, hotel operations, and guest experience management for international opportunities.",
        accent: "from-rose-400 to-red-600",
        image: "/images/hero-section/Hospitality.jpeg",
    },
];

export default function HeroSectionAttractive() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // PRELOAD IMAGES
    useEffect(() => {
        slides.forEach((slide) => {
            const img = new window.Image();
            img.src = slide.image;
        });
    }, []);

    // AUTOPLAY LOGIC
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const current = slides[activeSlide];

    return (
        <section className="relative w-full h-[90vh] min-h-[600px] lg:h-screen bg-slate-50 overflow-hidden font-sans">
            {/* BACKGROUND IMAGE (ALWAYS VISIBLE, SOFT FADE BETWEEN) */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={current.image}
                            alt={current.title}
                            fill
                            priority
                            className="object-cover object-center"
                            quality={100}
                        />
                    </motion.div>
                </AnimatePresence>
                {/* OVERLAYS FOR TEXT READABILITY AND DEPTH */}
                <div className="absolute inset-0 bg-white/70 lg:bg-white/10 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 z-10" />
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 h-full relative z-30 flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl pt-20 pb-32 lg:py-0"
                    >
                        {/* TAGLINE WITH ACCENT LINE */}
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "40px" }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className={`h-[1.5px] rounded-full bg-gradient-to-r ${current.accent}`}
                            />
                            <p className="text-slate-900 font-bold text-xs sm:text-sm tracking-widest uppercase">
                                {current.tag}
                            </p>
                        </div>

                        {/* HEADING - RESPONSIVE & BOLD */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-slate-950 leading-[1.1] tracking-tighter">
                            {current.heading}
                        </h1>

                        {/* DESCRIPTION - CLEAN & READABLE */}
                        <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed max-w-2xl font-normal">
                            {current.description}
                        </p>

                        {/* CTA BUTTON */}
                        <div className="mt-12 md:mt-16">
                            <button className={`group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-slate-950 text-white rounded-full font-semibold text-sm sm:text-base tracking-wider uppercase overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap`}>
                                {/* Background Hover Effect */}
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <span className="relative z-10">Explore {current.title} Programs</span>
                                <FaArrowRightLong className="relative z-10 text-lg group-hover:translate-x-1.5 transition-transform duration-300" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* BOTTOM NAVIGATION - TABLET & DESKTOP */}
            <div className="absolute bottom-2 left-10 right-10 z-40 hidden md:block">
                <div className="bg-transparent p-2 flex items-center justify-between">
                    {slides.map((slide, idx) => (
                        <button
                            key={slide.id}
                            onClick={() => {
                                setActiveSlide(idx);
                                setIsAutoPlaying(false);
                                setTimeout(() => setIsAutoPlaying(true), 10000); // Resume autoplay after delay
                            }}
                            className={`relative flex flex-col items-center flex-1 px-4 py-3 rounded-full transition-all duration-300 ${activeSlide === idx ? "bg-slate-950 shadow-inner" : "hover:bg-slate-100"
                                }`}
                        >
                            <span
                                className={`text-[10px] font-black tracking-widest uppercase transition-colors duration-300 mb-1 ${activeSlide === idx ? "text-slate-400" : "text-slate-500"
                                    }`}
                            >
                                School of
                            </span>
                            <span
                                className={`text-sm xl:text-base font-semibold transition-colors duration-300 ${activeSlide === idx ? "text-white" : "text-slate-900"
                                    }`}
                            >
                                {slide.title}
                            </span>

                            {/* Progress Bar on Active Tab */}
                            {activeSlide === idx && (
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-950 rounded-full">
                                    <motion.div
                                        key={activeSlide}
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 6, ease: "linear" }}
                                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${current.accent}`}
                                    />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* MOBILE BOTTOM CONTROLS */}
            <div className="absolute bottom-6 left-6 right-6 z-40 md:hidden">
                <div className="bg-slate-950 p-4 rounded-2xl flex items-center justify-between shadow-xl">
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">School of</p>
                        <p className="text-white font-bold text-lg">{current.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveSlide(idx);
                                    setIsAutoPlaying(false);
                                    setTimeout(() => setIsAutoPlaying(true), 10000);
                                }}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? `w-8 bg-gradient-to-r ${current.accent}` : "w-2.5 bg-slate-600"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}