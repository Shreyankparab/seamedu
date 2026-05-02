"use client";

import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        department: '',
        city: '',
        course: '',
        country: '',
        campus: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Inquiry submitted successfully!");
        setFormData({
            name: '',
            email: '',
            mobile: '',
            department: '',
            city: '',
            course: '',
            country: '',
            campus: ''
        });
    };

    return (
        <section className="py-20 lg:py-24 bg-white font-sans overflow-hidden relative">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <h2 className="text-3xl md:text-4xl lg:text-[2.2rem] font-black text-center text-black mb-12 lg:mb-16 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Inquiry Regarding Further Details
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-x-12 md:gap-y-12 w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12">

                        {/* Name */}
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name*"
                                required
                                className="w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 text-gray-900 placeholder-gray-500 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address*"
                                required
                                className="w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 text-gray-900 placeholder-gray-500 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors"
                            />
                        </div>

                        {/* Mobile */}
                        <div className="relative group">
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile No.*"
                                required
                                className="w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 text-gray-900 placeholder-gray-500 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors"
                            />
                        </div>

                        {/* Department */}
                        <div className="relative group">
                            <select
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                                className={`w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer ${formData.department ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                <option value="" disabled hidden>Select Department*</option>
                                <option value="media" className="text-black font-semibold">Media & Entertainment</option>
                                <option value="engineering" className="text-black font-semibold">Engineering Technology</option>
                                <option value="design" className="text-black font-semibold">Creative Design</option>
                            </select>
                            {/* Custom caret */}
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-blue-600 text-gray-600 transition-colors">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* City */}
                        <div className="relative group">
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className={`w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer ${formData.city ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                <option value="" disabled hidden>City*</option>
                                <option value="pune" className="text-black font-semibold">Pune</option>
                                <option value="mumbai" className="text-black font-semibold">Mumbai</option>
                                <option value="bangalore" className="text-black font-semibold">Bangalore</option>
                                <option value="other" className="text-black font-semibold">Other</option>
                            </select>
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-blue-600 text-gray-600 transition-colors">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Course */}
                        <div className="relative group">
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                                className={`w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer ${formData.course ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                <option value="" disabled hidden>Select Course*</option>
                                <option value="vfx" className="text-black font-semibold">B.Sc. in VFX</option>
                                <option value="sound" className="text-black font-semibold">B.Sc. in Sound Engineering</option>
                                <option value="film" className="text-black font-semibold">BA in Filmmaking</option>
                            </select>
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-blue-600 text-gray-600 transition-colors">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Country */}
                        <div className="relative group">
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className={`w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer ${formData.country ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                <option value="" disabled hidden>Country*</option>
                                <option value="india" className="text-black font-semibold">India</option>
                                <option value="usa" className="text-black font-semibold">USA</option>
                                <option value="uk" className="text-black font-semibold">UK</option>
                                <option value="other" className="text-black font-semibold">Other</option>
                            </select>
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-blue-600 text-gray-600 transition-colors">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Campus */}
                        <div className="relative group">
                            <select
                                name="campus"
                                value={formData.campus}
                                onChange={handleChange}
                                required
                                className={`w-full bg-transparent border-b-[1.5px] border-gray-500 py-2.5 font-[800] text-[15px] focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer ${formData.campus ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                <option value="" disabled hidden>Select Campus*</option>
                                <option value="pune_campus" className="text-black font-semibold">Pune Campus</option>
                                <option value="mumbai_campus" className="text-black font-semibold">Mumbai Campus</option>
                                <option value="bengaluru_campus" className="text-black font-semibold">Bengaluru Campus</option>
                            </select>
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-blue-600 text-gray-600 transition-colors">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 lg:mt-12 flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white font-[800] py-4 px-14 sm:px-16 rounded-[1rem] shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide text-sm"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>

            {/* Subtle background glow effect identical to premium aesthetics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none z-0"></div>
        </section>
    );
}
