"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const departments = [
    {
        id: "leadership",
        title: "MEET THE MINDS BEHIND THE SUCCESS",
        members: [
            {
                name: "Dr. Sushant Patil",
                role: "Chairman",
                img: "/images/about-us/Sushant-patil.png",
                desc: "Visionary leader guiding innovation and academic excellence. Dedicated to shaping future-ready professionals.",
            },
            {
                name: "Ad. Anuja Patil",
                role: "Director",
                img: "/images/about-us/Anuja-patil.png",
                desc: "Driving institutional growth through leadership, mentorship, and global partnerships in education.",
            },
        ],
    },
    {
        id: "heads",
        title: "MEET OUR TEAM HEADS",
        members: [
            {
                name: "Dr. Asheesh Dixit",
                role: "Head Of Design",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
                desc: "Over 34 years of global IT and design experience mentoring students in creative problem solving.",
            },
            {
                name: "Vikram Mehta",
                role: "Head Of Technology",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                desc: "Specialist in cloud architecture and scalable systems with a focus on emerging AI technologies.",
            },
            {
                name: "Ananya Iyer",
                role: "Head Of Marketing",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                desc: "Growth hacker and brand strategist specializing in digital transformation and consumer behavior.",
            },
            {
                name: "Marcus Thorne",
                role: "Head Of Operations",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                desc: "Streamlining academic workflows and industry collaborations to ensure student success.",
            },
            {
                name: "Priya Sharma",
                role: "Head Of Placement",
                img: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c943",
                desc: "Connecting talent with opportunity through a global network of corporate partnerships.",
            },
        ],
    },
    {
        id: "design",
        title: "MEET OUR TEAM DESIGN",
        members: [
            {
                name: "Creative Faculty",
                role: "UI/UX Mentor",
                img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
                desc: "Helping students master UI/UX, product design, and visual storytelling for digital platforms.",
            },
            {
                name: "Leo Zhang",
                role: "Motion Design Expert",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                desc: "Expert in 2D/3D animation and cinematic effects with a focus on immersive user experiences.",
            },
            {
                name: "Sana Khan",
                role: "Graphic Lead",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                desc: "Focuses on typography, branding, and the fundamentals of visual communication.",
            },
            {
                name: "David Miller",
                role: "Product Researcher",
                img: "https://images.unsplash.com/photo-1506794778242-91f2162730f1",
                desc: "Bridging the gap between user psychology and design execution through data-driven insights.",
            },
            {
                name: "Elena Rodriguez",
                role: "Illustrator",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                desc: "Specializing in digital painting and character design for gaming and editorial media.",
            },
        ],
    },
    {
        id: "technology",
        title: "MEET OUR TEAM TECHNOLOGY",
        members: [
            {
                name: "Tech Mentor",
                role: "Full Stack Lead",
                img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
                desc: "Experts in AI, software development and emerging technologies guiding students build skills.",
            },
            {
                name: "Arjun Reddy",
                role: "AI/ML Engineer",
                img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
                desc: "Specialist in neural networks and machine learning model deployment.",
            },
            {
                name: "Sophie Bennett",
                role: "Cybersecurity Expert",
                img: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
                desc: "Teaching the fundamentals of ethical hacking and secure coding practices.",
            },
            {
                name: "James Wilson",
                role: "Mobile Dev Lead",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                desc: "Expert in React Native and Flutter for building high-performance cross-platform apps.",
            },
            {
                name: "Linda Wu",
                role: "DevOps Engineer",
                img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
                desc: "Focusing on automation, CI/CD pipelines, and cloud infrastructure management.",
            },
        ],
    },
    {
        id: "marketing",
        title: "MEET OUR TEAM MARKETING",
        members: [
            {
                name: "Marketing Mentor",
                role: "Digital Specialist",
                img: "https://images.unsplash.com/photo-1557862921-37829c790f19",
                desc: "Specialists in digital marketing, branding and performance marketing strategy.",
            },
            {
                name: "Chloe Sims",
                role: "Content Strategist",
                img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                desc: "Crafting compelling narratives that resonate with target audiences across social platforms.",
            },
            {
                name: "Rohan Das",
                role: "SEO Analyst",
                img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
                desc: "Expert in search engine algorithms and data-driven organic growth strategies.",
            },
            {
                name: "Maria Garcia",
                role: "PR Manager",
                img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
                desc: "Building relationships and managing corporate communication for global outreach.",
            },
            {
                name: "Tom Hales",
                role: "Ad Specialist",
                img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
                desc: "Managing paid campaigns and performance marketing budgets for maximum ROI.",
            },
        ],
    },
];

export default function TeamSection() {
    // State to track which departments are expanded
    const [expandedDepts, setExpandedDepts] = useState<{ [key: string]: boolean }>({});

    const toggleDept = (deptId: string) => {
        setExpandedDepts((prev) => ({
            ...prev,
            [deptId]: !prev[deptId],
        }));
    };

    return (
        <section className="bg-gray-50 py-24 px-6 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-32">
                    {departments.map((dept) => {
                        const isExpanded = expandedDepts[dept.id] || false;
                        // Show only first 4 (one row) unless expanded
                        const visibleMembers = isExpanded ? dept.members : dept.members.slice(0, 4);
                        const hasMore = dept.members.length > 4;

                        return (
                            <div key={dept.id} className="animate-fadeIn">
                                {/* Section Heading */}
                                <div className="text-center mb-16">
                                    <h2 className="text-slate-900 text-3xl md:text-5xl font-black uppercase tracking-tight inline-block relative">
                                        {dept.title}
                                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-blue-600 rounded-full"></span>
                                    </h2>
                                </div>

                                {/* Member Layout: Flex for leadership (center), Grid for others */}
                                <div className={`${dept.id === 'leadership'
                                    ? "flex flex-wrap justify-center gap-12"
                                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                                    }`}>
                                    {visibleMembers.map((member, i) => (
                                        <div
                                            key={i}
                                            className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border border-slate-100 ${dept.id === 'leadership' ? "max-w-[340px] w-full" : ""}`}
                                        >
                                            <div className="relative h-[300px] w-full overflow-hidden">
                                                <Image
                                                    src={member.img}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                />
                                                <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                                                    <p className="text-white text-sm leading-relaxed font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        {member.desc}
                                                    </p>
                                                    <div className="mt-6 w-10 h-1 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-6 text-center relative z-20 group-hover:bg-slate-50 transition-colors duration-300">
                                                <h3 className="font-black text-xl text-slate-900 tracking-tight mb-1">
                                                    {member.name}
                                                </h3>
                                                <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Per-Department Load More Button */}
                                {hasMore && (
                                    <div className="flex justify-center mt-12">
                                        <button
                                            onClick={() => toggleDept(dept.id)}
                                            className="group flex items-center gap-3 bg-white px-8 py-3 rounded-full border border-slate-200 shadow-sm hover:border-blue-600 transition-all active:scale-95"
                                        >
                                            <span className="text-slate-900 font-black uppercase tracking-widest text-[10px]">
                                                {isExpanded ? "Show Less" : `View All ${dept.title.split(' ').pop()}`}
                                            </span>
                                            <div className={`text-blue-600 transition-transform duration-300 ${isExpanded ? "rotate-180" : "animate-bounce"}`}>
                                                <FaChevronDown size={14} />
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
}