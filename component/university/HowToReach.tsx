"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa";

export default function HowToReachUs() {
  return (
    <section id="reach-us" className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/5 -skew-x-12 translate-x-24 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Content: Typography & Quick Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-8 lg:mb-10">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-3 block">Get Directions</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter italic leading-[1.1] mb-6">
                How to <span className="text-blue-600 not-italic">Reach Us</span>
              </h2>
              <p className="text-slate-500 text-base font-medium max-w-sm leading-relaxed">
                Connect with our Pune hub for admissions, corporate partnerships, or a campus walkthrough.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transform transition-transform group-hover:scale-110">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Address</h4>
                </div>
                <p className="text-slate-500 text-[13px] font-bold leading-relaxed pr-4">
                  Charoli Bk.via Lohegaon, Pune – 412 105, Maharashtra, India.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transform transition-transform group-hover:scale-110">
                    <FaPhoneAlt size={14} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Phone No.</h4>
                </div>
                <p className="text-slate-500 text-[13px] font-bold leading-relaxed">
                  +91 9168067022
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transform transition-transform group-hover:scale-110">
                    <FaEnvelope size={14} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Email Id</h4>
                </div>
                <p className="text-slate-500 text-[13px] font-bold leading-relaxed break-all">
                  info@seamedu.com
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transform transition-transform group-hover:scale-110">
                    <FaClock size={14} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Timing</h4>
                </div>
                <p className="text-slate-500 text-[13px] font-bold leading-relaxed">
                  9 AM - 6 PM (Mon-Fri)
                </p>
              </div>
            </div>

            <button className="mt-10 flex items-center gap-3 text-blue-600 group w-fit">
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Plan your visit</span>
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-md shadow-blue-600/20">
                <FaArrowRight size={10} />
              </div>
            </button>
          </div>

          {/* Right Content: Stylized Map Card */}
          <div className="lg:col-span-7 h-[400px] lg:h-[450px] w-full relative">
            <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] overflow-hidden border-4 border-white p-1">
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative">
                <iframe
                  src="https://maps.google.com/maps?q=Ajeenkya%20DY%20Patil%20University,%20Charoli%20Bk,%20Pune%2018.6214203,73.9123937&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contrast-110 opacity-100 transition-all duration-700 hover:scale-105"
                ></iframe>

                {/* Floating Map Interaction Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl border border-white/10 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-white text-xs font-black uppercase tracking-widest">Main University Hub</h5>
                      <p className="text-white/40 text-[9px] font-bold">Ajeenkya DY Patil University, Pune</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/maps?q=18.6214203,73.9123937"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-md shadow-blue-600/10"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}