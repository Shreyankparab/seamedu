import React from "react";
import HeroSection from "@/component/career-page/HeroSection";
import CultureSection from "@/component/career-page/CultureSection";
import OpeningsSection from "@/component/career-page/OpeningsSection";

export const metadata = {
  title: "Join Our Team | Careers at Seamedu",
  description: "Explore career opportunities at Seamedu and help us shape the future of creative education. Join a team of industry experts and innovators.",
};

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Culture & Values */}
      <CultureSection />
      
      {/* Job Openings */}
      <OpeningsSection />
      
      {/* CTA Footer or Final Link - Optional depending on Openings Section */}
      <section className="py-20 bg-slate-50 flex items-center justify-center">
         <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic mb-6">Experience the SEAMEDU Culture</h2>
            <p className="text-slate-500 font-medium mb-10 max-w-2xl mx-auto">We are looking for passionate individuals who are dedicated to transforming the landscape of creative education in India and globally.</p>
            <div className="flex justify-center gap-6">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">#CreativeExcellence</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">#IndustryIntegration</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">#Innovation</span>
            </div>
         </div>
      </section>
    </main>
  );
}
