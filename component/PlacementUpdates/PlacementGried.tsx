"use client"
import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

// --- DATA SOURCE WITH NESTED STUDENTS ---
const PLACEMENT_DATA = [
    { 
        id: 1, 
        category: "Technology", 
        university: "D Y Patil University Ambi", 
        year: "2024", 
        description: "40 Engineering students successfully placed in the 2025–2026 batch.", 
        banner: "/banner1.jpg",
        students: [
            { name: "Raju Patel", company: "Mahindra Tech", package: "23 Lac.", img: "/s1.jpg" },
            { name: "Amit Gupta", company: "TCS Research", package: "21 Lac.", img: "/s2.jpg" },
            { name: "Suresh Raina", company: "Infosys", package: "15 Lac.", img: "/s3.jpg" },
        ]
    },
    { 
        id: 2, 
        category: "Design", 
        university: "Seamedu School of Media", 
        year: "2024", 
        description: "VFX and Animation students secured roles in top global studios.", 
        banner: "/banner2.jpg",
        students: [
            { name: "Priya Sharma", company: "Dream Game Studios", package: "19 Lac.", img: "/s4.jpg" },
            { name: "Neha Verma", company: "Adobe", package: "28 Lac.", img: "/s5.jpg" },
        ]
    },
    { 
        id: 3, 
        category: "Management", 
        university: "D Y Patil University Ambi", 
        year: "2024", 
        description: "Business Analytics batch achieves 100% placement record.", 
        banner: "/banner3.jpg",
        students: [
            { name: "Vikas Khanna", company: "KPMG", package: "18 Lac.", img: "/s6.jpg" },
            { name: "Anjali Singh", company: "Deloitte", package: "20 Lac.", img: "/s7.jpg" },
            { name: "Rohit Mehra", company: "PWC", package: "17 Lac.", img: "/s8.jpg" },
        ]
    },
    { 
        id: 4, 
        category: "Technology", 
        university: "D Y Patil University Ambi", 
        year: "2024", 
        description: "40 Engineering students successfully placed in the 2025–2026 batch.", 
        banner: "/banner1.jpg",
        students: [
            { name: "Raju Patel", company: "Mahindra Tech", package: "23 Lac.", img: "/s1.jpg" },
            { name: "Amit Gupta", company: "TCS Research", package: "21 Lac.", img: "/s2.jpg" },
            { name: "Suresh Raina", company: "Infosys", package: "15 Lac.", img: "/s3.jpg" },
        ]
    },
    { 
        id: 5, 
        category: "Design", 
        university: "Seamedu School of Media", 
        year: "2024", 
        description: "VFX and Animation students secured roles in top global studios.", 
        banner: "/banner2.jpg",
        students: [
            { name: "Priya Sharma", company: "Dream Game Studios", package: "19 Lac.", img: "/s4.jpg" },
            { name: "Neha Verma", company: "Adobe", package: "28 Lac.", img: "/s5.jpg" },
        ]
    },
    { 
        id: 6, 
        category: "Management", 
        university: "D Y Patil University Ambi", 
        year: "2024", 
        description: "Business Analytics batch achieves 100% placement record.", 
        banner: "/banner3.jpg",
        students: [
            { name: "Vikas Khanna", company: "KPMG", package: "18 Lac.", img: "/s6.jpg" },
            { name: "Anjali Singh", company: "Deloitte", package: "20 Lac.", img: "/s7.jpg" },
            { name: "Rohit Mehra", company: "PWC", package: "17 Lac.", img: "/s8.jpg" },
        ]
    },
    { 
        id: 7, 
        category: "Technology", 
        university: "D Y Patil University Ambi", 
        year: "2024", 
        description: "40 Engineering students successfully placed in the 2025–2026 batch.", 
        banner: "/banner1.jpg",
        students: [
            { name: "Raju Patel", company: "Mahindra Tech", package: "23 Lac.", img: "/s1.jpg" },
            { name: "Amit Gupta", company: "TCS Research", package: "21 Lac.", img: "/s2.jpg" },
            { name: "Suresh Raina", company: "Infosys", package: "15 Lac.", img: "/s3.jpg" },
        ]
    },
    { 
        id: 8, 
        category: "Design", 
        university: "Seamedu School of Media", 
        year: "2024", 
        description: "VFX and Animation students secured roles in top global studios.", 
        banner: "/banner2.jpg",
        students: [
            { name: "Priya Sharma", company: "Dream Game Studios", package: "19 Lac.", img: "/s4.jpg" },
            { name: "Neha Verma", company: "Adobe", package: "28 Lac.", img: "/s5.jpg" },
        ]
    },
    { 
        id: 9, 
        category: "Management", 
        university: "D Y Patil University Ambi", 
        year: "2024", 
        description: "Business Analytics batch achieves 100% placement record.", 
        banner: "/banner3.jpg",
        students: [
            { name: "Vikas Khanna", company: "KPMG", package: "18 Lac.", img: "/s6.jpg" },
            { name: "Anjali Singh", company: "Deloitte", package: "20 Lac.", img: "/s7.jpg" },
            { name: "Rohit Mehra", company: "PWC", package: "17 Lac.", img: "/s8.jpg" },
        ]
    },
    
    
    
];

const categories = ["All", "Management", "Design", "Hospitality", "Technology", "Media"];

const PlacementGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
    const [isOpen, setIsOpen] = useState(false);
    const [activeModalData, setActiveModalData] = useState<any>(null);

    // Filter Logic
    const filteredCards = PLACEMENT_DATA.filter(item => 
        selectedCategory === "All" || item.category === selectedCategory
    );

    const currentCards = filteredCards.slice(0, visibleCount);

    const openPopup = (data: any) => {
        setActiveModalData(data); // This now carries the unique student list
        setIsOpen(true);
    };

    return (
        <section className="p-8 bg-gray-50 min-h-screen">
            
            {/* --- CATEGORY FILTER --- */}
            <div className="text-center mb-16">
                <div className="flex justify-center mt-12 px-4">
                    <div className="relative mb-12 sm:mb-16">
                        {/* Mobile View */}
                        <div className="sm:hidden w-64 relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-md"
                            >
                                <span className="text-xs font-black uppercase tracking-widest text-slate-900">
                                    {selectedCategory === "All" ? "All Programs" : selectedCategory}
                                </span>
                                <ChevronDown className={`text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 z-[60] mt-2 p-2 bg-white rounded-xl border shadow-xl">
                                    {categories.map((cat) => (
                                        <button key={cat} onClick={() => { setSelectedCategory(cat); setIsDropdownOpen(false); setVisibleCount(6); }}
                                            className="w-full text-left px-4 py-3 rounded-lg text-xs font-bold uppercase hover:bg-blue-50">
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Desktop View */}
                        <div className="hidden sm:inline-flex bg-gray-100/50 p-1.5 rounded-full border border-gray-200">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => { setSelectedCategory(cat); setVisibleCount(6); }}
                                    className={`px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? "bg-white text-blue-600 shadow-md" : "text-gray-500 hover:text-gray-900"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {currentCards.map((item) => (
                    <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 group">
                        <div className="relative h-64 overflow-hidden">
                            <img src={item.banner} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-gray-800">{item.university}</h3>
                                <span className="text-blue-600 font-black">{item.year}</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{item.description}</p>
                            <button onClick={() => openPopup(item)} className="text-blue-600 font-extrabold uppercase text-xs tracking-widest">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- LOAD MORE / LESS --- */}
            <div className="flex justify-center mt-16 gap-4">
                {visibleCount < filteredCards.length && (
                    <button onClick={() => setVisibleCount(prev => prev + 6)} className="px-10 py-4 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                        Load More
                    </button>
                )}
                {visibleCount > 6 && (
                    <button onClick={() => setVisibleCount(6)} className="px-10 py-4 bg-white text-gray-900 border border-gray-200 rounded-full text-xs font-black uppercase tracking-widest">
                        Show Less
                    </button>
                )}
            </div>

            {/* --- POPUP MODAL --- */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setIsOpen(false)} />
                    <div className="relative bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
                        
                        {/* STATIC CLOSE ICON (STAYS IN PLACE) */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-10 z-[110] p-3 bg-gray-100 hover:bg-gray-200 rounded-full"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* SCROLLABLE AREA */}
                        <div className="overflow-y-auto p-10 md:p-16 no-scrollbar">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 uppercase leading-tight">
                                {activeModalData?.university} <br/>
                                <span className="text-blue-600">{activeModalData?.category} Placements {activeModalData?.year}</span>
                            </h2>
                            
                            <p className="text-gray-600 leading-relaxed mb-12 text-lg">
                                {activeModalData?.description} This specialized drive for the {activeModalData?.category} department resulted in top-tier placements with industry leaders.
                            </p>

                            {/* DYNAMIC STUDENT GRID (Changes based on card clicked) */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {activeModalData?.students.map((student: any, idx: number) => (
                                    <div key={idx} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-inner">
                                            <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h4 className="text-blue-600 font-black text-sm uppercase">{student.name}</h4>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase mb-2">{student.company}</p>
                                        <p className="bg-slate-50 px-4 py-1.5 rounded-full text-gray-900 font-black text-[11px]">{student.package}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default PlacementGrid;