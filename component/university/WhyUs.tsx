import React from 'react'
import { FaLaptopCode, FaChalkboardTeacher, FaHandshake, FaGlobeAmericas } from 'react-icons/fa'

const features = [
    {
        icon: <FaLaptopCode />,
        title: 'Innovation-Led Learning',
        desc: 'Our unique academic framework focuses on design thinking and problem-solving through real-world projects.'
    },
    {
        icon: <FaChalkboardTeacher />,
        title: 'Industry-Elite Faculty',
        desc: 'Learn from a distinguished blend of academic scholars and seasoned professionals from top global industries.'
    },
    {
        icon: <FaHandshake />,
        title: 'Global Career Gateway',
        desc: 'Benefit from our robust corporate network, offering premier internships and placements across diversified sectors.'
    },
    {
        icon: <FaGlobeAmericas />,
        title: 'Future-Ready Ecosystem',
        desc: 'Experience a curriculum that evolves in real-time, integrating emerging technologies and global standards.'
    },
]

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-[#0F172A] relative overflow-hidden font-sans">
            {/* Ambient Dark Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-0 -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Detail - Dark Mode Synced */}
                    <div className="lg:w-1/2">
                        <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-4 block">The ADYPU Advantage</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-[1000] text-white tracking-tighter italic leading-[1.1] mb-8">
                            Why Students <span className="text-blue-500 not-italic">Choose ADYPU</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                            We've reimagined the higher education landscape to create an ecosystem that empowers the next generation of global leaders. At ADYPU, we bridge the gap between academic theory and industry-scale excellence.
                        </p>

                        <div className="grid grid-cols-2 gap-12 sm:gap-16">
                            <div className="border-l-4 border-blue-600/60 pl-8 transition-transform hover:translate-x-1 duration-300">
                                <span className="block text-4xl lg:text-5xl font-[1000] text-white tracking-tighter mb-2">100%</span>
                                <span className="text-slate-500 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Placement Assistance</span>
                            </div>
                            <div className="border-l-4 border-blue-600/60 pl-8 transition-transform hover:translate-x-1 duration-300">
                                <span className="block text-4xl lg:text-5xl font-[1000] text-white tracking-tighter mb-2">350+</span>
                                <span className="text-slate-500 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Industry Partners</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Staggered Grid - Dark Glassmorphism */}
                    <div className="lg:w-1/2 relative py-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                            {/* Card 1 */}
                            <div className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10">
                                <div className="w-11 h-11 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-lg mb-5 transition-all group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    {features[0].icon}
                                </div>
                                <h4 className="text-base font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{features[0].title}</h4>
                                <p className="text-slate-400 text-[11px] leading-relaxed font-medium">{features[0].desc}</p>
                            </div>

                            {/* Card 2 - Staggered Container */}
                            <div className="sm:translate-y-10">
                                <div className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10">
                                    <div className="w-11 h-11 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-lg mb-5 transition-all group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                        {features[1].icon}
                                    </div>
                                    <h4 className="text-base font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{features[1].title}</h4>
                                    <p className="text-slate-400 text-[11px] leading-relaxed font-medium">{features[1].desc}</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10">
                                <div className="w-11 h-11 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-lg mb-5 transition-all group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    {features[2].icon}
                                </div>
                                <h4 className="text-base font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{features[2].title}</h4>
                                <p className="text-slate-400 text-[11px] leading-relaxed font-medium">{features[2].desc}</p>
                            </div>

                            {/* Card 4 - Staggered Container */}
                            <div className="sm:translate-y-10">
                                <div className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10">
                                    <div className="w-11 h-11 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-lg mb-5 transition-all group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                        {features[3].icon}
                                    </div>
                                    <h4 className="text-base font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{features[3].title}</h4>
                                    <p className="text-slate-400 text-[11px] leading-relaxed font-medium">{features[3].desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
