"use client";

import React from 'react';
import { Calendar, GraduationCap, BookOpen, Users, MapPin, ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

// Improved Type Definition
interface StatItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

const StatItem = ({ icon: Icon, title, value }: StatItemProps) => (
  <div className="flex flex-col items-center text-center p-6 border-r border-slate-100 last:border-0 md:last:border-0 odd:border-r-0 md:odd:border-r group">
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
    </div>
    <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
    <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{title}</div>
  </div>
);

export default function AboutUs() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden font-sans" aria-label="About Us">
      {/* Background Decorators - hidden from screen readers */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl -mr-64 -mt-64" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50/20 rounded-full blur-3xl -ml-32 -mb-32" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="flex flex-col items-center text-center mb-16 md:mb-10">

          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
            About <span className="text-blue-600">Us</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Empowering Creative Minds Since 2008
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
                Seamedu is a bridge between ambition and professional reality. We provide industry-aligned education in Media, Technology, and Management, designed to transform potential into professional mastery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="space-y-3">
                  <div className="h-1 w-12 bg-blue-600 rounded-full" />
                  <h4 className="text-lg font-semibold text-slate-900">Our Vision</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    To be the global benchmark in experiential education, where creativity meets technology.
                  </p>
                </article>
                <article className="space-y-3">
                  <div className="h-1 w-12 bg-blue-600 rounded-full" />
                  <h4 className="text-lg font-semibold text-slate-900">Our Approach</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Blending workshops, live projects, and industry mentorship to make students future-ready.
                  </p>
                </article>
              </div>
            </div>

            <Link href="#" className="inline-flex">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all flex items-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 active:translate-y-0">
                Our Full Story
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </Link>
          </div>

          {/* Stats Column */}
          <aside className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.06)] p-2">
              <div className="grid grid-cols-2 bg-white rounded-[2rem] overflow-hidden">
                <StatItem icon={Calendar} title="Years" value="18+" />
                <StatItem icon={GraduationCap} title="Universities" value="4" />
                <StatItem icon={BookOpen} title="Courses" value="50+" />
                <StatItem icon={Users} title="Alumni" value="2200+" />
              </div>
              
              <address className="p-6 bg-slate-50 rounded-[2rem] mt-2 flex items-center gap-4 cursor-pointer border border-transparent hover:border-blue-100 transition-colors not-italic">
                <div className="w-10 h-10 bg-white shadow-sm text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5">Head Office</div>
                  <div className="text-xs font-semibold text-slate-600">Balewadi, Pune, Maharashtra 411045</div>
                </div>
              </address>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}