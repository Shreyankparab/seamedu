"use client";

import React, { useState } from 'react'
import CampusGalleryModal from './CampusGalleryModal'

const campusLifeImages = [
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', category: 'Pune Hub', label: 'Main Infrastructure', date: 'Semester 2024' },
  { src: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80', category: 'Studio', label: 'Innovation Workspace', date: 'Studio Session 2024' },
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80', category: 'Labs', label: 'Advanced Sound Lab', date: 'Tech Week 2024' },
  { src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80', category: 'Ambi Hub', label: 'Urban Campus', date: 'Orientation 2024' },
  { src: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=600&q=80', category: 'Events', label: 'Main Auditorium', date: 'Convocation 2024' },
  { src: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80', category: 'Studio', label: 'Innovation Workspace', date: 'Studio Session 2024' },
]

export default function OurCampuses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryItems = campusLifeImages.map(img => ({
    image: img.src,
    title: img.label,
    location: img.category,
    date: img.date
  }));

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section id="campus" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - Premium Synced */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">Institutional Hub</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-[1000] text-slate-900 tracking-tighter italic leading-[1.1]">
            Our <span className="text-blue-600 not-italic">Campus</span>
          </h3>
          <p className="text-slate-500 text-lg mt-8 max-w-2xl font-medium">
            Experience world-class learning across our specialized hub in Pune.
          </p>
        </div>

        {/* Life at ADYPU - Mosaic Grid */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-1 text-center sm:text-left">Campus Culture</span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Life at ADYPU</h3>
          </div>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-600/20 to-transparent rounded-full hidden sm:block" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          {/* Featured Large Card */}
          <div
            onClick={() => openModal(0)}
            className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden group shadow-xl relative cursor-pointer"
          >
            <img src={campusLifeImages[0].src} alt={campusLifeImages[0].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
              <span className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-2">{campusLifeImages[0].category}</span>
              <p className="text-white font-black text-xl tracking-tight">{campusLifeImages[0].label}</p>
            </div>
          </div>

          <div
            onClick={() => openModal(1)}
            className="col-span-1 row-span-1 rounded-3xl overflow-hidden group shadow-md relative cursor-pointer"
          >
            <img src={campusLifeImages[1].src} alt={campusLifeImages[1].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div
            onClick={() => openModal(2)}
            className="col-span-1 row-span-2 rounded-3xl overflow-hidden group shadow-md relative cursor-pointer"
          >
            <img src={campusLifeImages[2].src} alt={campusLifeImages[2].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
              <p className="text-white text-[10px] font-black uppercase tracking-widest">{campusLifeImages[2].category}</p>
            </div>
          </div>

          <div
            onClick={() => openModal(3)}
            className="col-span-2 row-span-1 rounded-3xl overflow-hidden group shadow-md relative cursor-pointer"
          >
            <img src={campusLifeImages[3].src} alt={campusLifeImages[3].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div
            onClick={() => openModal(4)}
            className="col-span-1 row-span-1 rounded-3xl overflow-hidden group shadow-md relative cursor-pointer"
          >
            <img src={campusLifeImages[4].src} alt={campusLifeImages[4].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>

          <div
            onClick={() => openModal(5)}
            className="col-span-2 row-span-1 rounded-3xl overflow-hidden group shadow-md relative cursor-pointer"
          >
            <img src={campusLifeImages[5].src} alt={campusLifeImages[5].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
              <p className="text-white text-[10px] font-black uppercase tracking-widest">{campusLifeImages[5].category}</p>
            </div>
          </div>
        </div>
      </div>

      <CampusGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={galleryItems}
        initialIndex={selectedIndex}
      />
    </section>
  )
}
