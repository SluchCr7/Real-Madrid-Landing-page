"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

      {/* 🔥 Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        {/* Image */}
        <img
          src="/real_madrid_hero_bg_1774615392053.png"
          alt="Santiago Bernabéu"
          className="w-full h-full object-cover"
        />

        {/* Overlay (Theme-aware ✅) */}
        <div className="absolute inset-0 bg-[color:var(--hero-overlay)]" />
        <div className="absolute inset-0 bg-[color:var(--hero-overlay-strong)] mix-blend-multiply" />

        {/* Gradient Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rm-blue-dark/20 to-rm-blue-dark" />
      </motion.div>

      {/* 🔥 Content */}
      <div className="max-w-7xl mx-auto px-4 z-20 flex flex-col items-center text-center gap-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-3 px-6 py-2 rounded-full 
          bg-rm-gold/10 border border-rm-gold/30 text-rm-gold 
          backdrop-blur-xl shadow-gold"
        >
          <Trophy className="w-5 h-5" />
          <span className="text-xs font-black uppercase tracking-[0.4em] italic">
            15x European Champions
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter italic leading-[0.85]
          text-text-primary
          drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]
          dark:drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
        >
          AUPA <br />
          <span className="text-gold">MADRID</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-3xl text-lg md:text-2xl font-light tracking-[0.05em] mt-4
          text-text-secondary"
        >
          Experience the legacy of the most successful club in football history.
          <br className="hidden md:block" />
          Join the millions, feel the passion, Hala Madrid y nada más!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mt-10"
        >
          {/* Primary */}
          <button
            className="px-10 py-5 bg-rm-gold hover:bg-white 
            text-rm-blue-dark dark:text-black 
            font-black uppercase tracking-widest rounded-full 
            transition-all flex items-center gap-3 
            shadow-gold group active:scale-95 text-sm 
            hover:-translate-y-1"
          >
            Explore Squad
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary */}
          <button
            className="px-10 py-5 border border-border-subtle 
            text-text-primary 
            hover:border-rm-gold hover:bg-white/5 
            font-black uppercase tracking-widest rounded-full 
            transition-all backdrop-blur-md 
            active:scale-95 text-sm 
            hover:-translate-y-1"
          >
            Latest News
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-text-secondary">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black italic">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[2px] h-12 bg-gradient-to-b from-rm-gold to-transparent rounded-full"
        />
      </div>
    </section>
  );
};