"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Trophy, Play, Star, Globe } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[1000px] flex items-center overflow-hidden bg-black">
      {/* 🎬 Cinematic Background with Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2600&auto=format&fit=crop"
          alt="Santiago Bernabéu Atmosphere"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Multilayered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-rm-blue-dark/20 mix-blend-overlay" />
      </motion.div>

      {/* 🏗️ Main Layout Container */}
      <div className="max-w-[1800px] mx-auto w-full px-6 md:px-20 lg:px-40 flex flex-col justify-center h-full gap-12 relative z-20">

        {/* Floating Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 text-rm-gold"
        >
          <div className="w-12 h-[2px] bg-rm-gold" />
          <span className="text-[11px] font-black uppercase tracking-[0.6em] italic">The Greatest Club in History</span>
        </motion.div>

        {/* Hero Title - Big Page Style */}
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-[12rem] xl:text-[15rem] font-black uppercase tracking-tighter italic leading-[0.8] text-white select-none"
          >
            REAL <br />
            <span className="text-gold drop-shadow-[0_0_50px_rgba(193,160,88,0.4)]" style={{ WebkitTextStroke: '1px rgba(193,160,88,0.4)' }}>MADRID</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute -top-20 -left-20 text-[30rem] font-black text-white/[0.03] uppercase italic select-none pointer-events-none -z-10"
          >
            1902
          </motion.div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl text-lg md:text-2xl font-medium text-white/60 italic leading-relaxed"
          >
            Where history is written every night. Join the legacy of excellence and feel the heartbeat of the Bernabéu.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-8"
          >
            <button className="group relative w-24 h-24 rounded-full bg-rm-gold flex items-center justify-center shadow-gold hover:scale-110 transition-all duration-500 active:scale-95">
              <Play className="w-8 h-8 text-rm-blue-dark fill-current ml-1" />
              <div className="absolute inset-0 rounded-full border border-rm-gold/30 scale-125 animate-ping opacity-20" />
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-rm-gold tracking-widest italic">Watch Cinematic</span>
              <span className="text-xs font-bold text-white uppercase tracking-tighter">Season Preview 24/25</span>
            </div>
          </motion.div>
        </div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-6 mt-6"
        >
          <button className="px-14 py-6 bg-white text-rm-blue-dark font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-rm-gold transition-all flex items-center gap-4 shadow-2xl shadow-white/5 active:scale-95 group">
            Explore Experience <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-14 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-white/10 transition-all active:scale-95">
            Full Squad 24/25
          </button>
        </motion.div>
      </div>

      {/* 📊 Bottom Stats Bar - Big Page Presence */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute -bottom-10 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-black to-transparent z-30 flex items-center px-6 md:px-20 lg:px-40"
      >
        <div className="max-w-[1800px] mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-5">
          {[
            { label: "European Cups", value: "15", icon: Trophy },
            { label: "Domestic Titles", value: "36", icon: Star },
            { label: "Global Fans", value: "450M+", icon: Globe },
            { label: "Active Years", value: "124", icon: Star },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-6 group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rm-gold group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black italic text-white leading-none">{stat.value}</span>
                <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest mt-1 italic">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social Vertical Sidebar */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-10 z-40">
        {['FB', 'TW', 'IG', 'YT'].map((s) => (
          <button key={s} className="text-[10px] font-black text-white/20 hover:text-rm-gold transition-colors rotate-90 uppercase tracking-widest">{s}</button>
        ))}
        <div className="w-[1px] h-20 bg-white/10 mx-auto" />
      </div>


    </section>
  );
};