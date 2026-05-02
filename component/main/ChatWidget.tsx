"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed sm:absolute bottom-24 sm:bottom-20 left-1/2 sm:left-auto sm:right-0 -translate-x-1/2 sm:translate-x-0 w-[90vw] sm:w-[400px] h-[70vh] sm:h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
              <span className="font-bold">Chat with us</span>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-blue-700 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <iframe
              src="https://page.botpenguin.com/69d624926331c200db09c7fd/69d622368639fcb260a38cb8"
              className="w-full h-full border-none"
              title="Seamedu Chatbot"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all active:scale-90"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}