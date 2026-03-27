"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, MapPin, Trophy as TrophyIcon, Calendar, Clock, Timer, User, ArrowRight, Share2, Info, ChevronRight, Ticket } from "lucide-react";

interface Match {
  id: number;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  score: string;
  stadium: string;
  date: string;
  time: string;
  competition: string;
  isLive?: boolean;
}

const matches: Match[] = [
  {
    id: 1,
    homeTeam: "Real Madrid",
    homeLogo: "/Images/real.webp",
    awayTeam: "Barcelona",
    awayLogo: "/Images/Barxa.webp",
    score: "3 : 2",
    stadium: "Santiago Bernabéu",
    date: "21 APR 2024",
    time: "21:00",
    competition: "La Liga EA Sports",
  },
  {
    id: 2,
    homeTeam: "Real Sociedad",
    homeLogo: "/Images/Sociacadaa.webp",
    awayTeam: "Real Madrid",
    awayLogo: "/Images/real.webp",
    score: "0 : 1",
    stadium: "Reale Arena",
    date: "26 APR 2024",
    time: "21:00",
    competition: "La Liga EA Sports",
  },
  {
    id: 3,
    homeTeam: "Bayern Munich",
    homeLogo: "/Images/bayern.webp",
    awayTeam: "Real Madrid",
    awayLogo: "/Images/real.webp",
    score: "2 : 2",
    stadium: "Allianz Arena",
    date: "30 APR 2024",
    time: "21:00",
    competition: "UEFA Champions League",
    isLive: true,
  },
  {
    id: 4,
    homeTeam: "Real Madrid",
    homeLogo: "/Images/real.webp",
    awayTeam: "Cadiz",
    awayLogo: "/Images/cadiz.webp",
    score: "VS",
    stadium: "Santiago Bernabéu",
    date: "04 MAY 2024",
    time: "16:15",
    competition: "La Liga EA Sports",
  },
  {
    id: 5,
    homeTeam: "Real Madrid",
    homeLogo: "/Images/real.webp",
    awayTeam: "Bayern Munich",
    awayLogo: "/Images/bayern.webp",
    score: "VS",
    stadium: "Santiago Bernabéu",
    date: "08 MAY 2024",
    time: "21:00",
    competition: "UEFA Champions League",
  },
];

export const MatchList = () => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section className="relative w-full bg-background py-48 px-4 md:px-20 overflow-hidden transition-colors duration-700">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      {/* Decorative Text */}
      <h3 className="absolute -top-10 -right-20 text-[22vw] font-black text-foreground/[0.03] uppercase select-none leading-none pointer-events-none italic tracking-tighter">
        GLORY
      </h3>

      <div className="max-w-[1800px] mx-auto flex flex-col gap-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-[2px] bg-rm-gold" />
              <span className="text-rm-gold font-black uppercase tracking-[0.6em] text-[11px] italic">Match Day Experience</span>
            </motion.div>
            <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter text-foreground italic leading-[0.85] drop-shadow-sm">
              Next <br /> <span className="text-gold">Battles</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-10 py-5 bg-card border border-border-subtle rounded-2xl shadow-premium hover:border-rm-gold/50 transition-all"
          >
            <span className="text-xs font-black uppercase tracking-widest text-text-primary italic">Full Season Access</span>
            <div className="w-8 h-8 rounded-full bg-rm-gold/10 flex items-center justify-center group-hover:bg-rm-gold transition-colors">
              <ChevronRight className="w-4 h-4 text-rm-gold group-hover:text-rm-blue-dark" />
            </div>
          </motion.button>
        </div>

        {/* Feature/Live Indicator if any */}
        {matches.some(m => m.isLive) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-600/10 border border-red-600/20 backdrop-blur-3xl p-6 rounded-[30px] flex items-center gap-6 self-start mb-4"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-xs font-black text-red-500 uppercase tracking-[0.4em] italic">Action is live at Allianz Arena — Tune in now</span>
          </motion.div>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {matches.map((match) => (
            <motion.div
              key={match.id}
              variants={item}
              onClick={() => setSelectedMatch(match)}
              className="group relative flex flex-col bg-card border border-border-subtle rounded-[60px] cursor-pointer hover:translate-y-[-10px] transition-all duration-500 overflow-hidden shadow-premium hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
            >
              {/* Card Header Background */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-rm-gold/5 dark:from-rm-gold/[0.03] to-transparent pointer-events-none" />

              <div className="p-12 flex flex-col gap-10 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="px-5 py-2 bg-foreground/5 rounded-full text-[10px] font-black tracking-widest text-text-secondary uppercase italic group-hover:bg-rm-gold group-hover:text-black transition-all">
                    {match.competition}
                  </span>
                  {match.isLive && (
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-black text-red-500 uppercase italic">Live Now</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col items-center gap-4 flex-1">
                    <div className="relative w-24 h-24 p-5 bg-background rounded-[35px] shadow-sm group-hover:scale-110 transition-transform duration-700 border border-border-subtle group-hover:border-rm-gold/20">
                      <Image src={match.homeLogo} alt={match.homeTeam} fill className="object-contain p-5" />
                    </div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-text-primary text-center leading-none">{match.homeTeam}</h4>
                  </div>

                  <div className="flex flex-col items-center flex-none">
                    <div className={`text-6xl font-black italic tracking-tighter transition-all duration-500 ${match.score === 'VS' ? 'text-foreground/10 group-hover:text-rm-gold opacity-50' : 'text-foreground group-hover:text-gold scale-110'}`}>
                      {match.score}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 flex-1">
                    <div className="relative w-24 h-24 p-5 bg-background rounded-[35px] shadow-sm group-hover:scale-110 transition-transform duration-700 border border-border-subtle group-hover:border-rm-gold/20">
                      <Image src={match.awayLogo} alt={match.awayTeam} fill className="object-contain p-5" />
                    </div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-text-primary text-center leading-none">{match.awayTeam}</h4>
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-6 border-t border-border-subtle group-hover:border-rm-gold/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-text-secondary italic">
                      <MapPin className="w-4 h-4 text-rm-gold" />
                      <span className="text-xs uppercase font-black tracking-widest truncate max-w-[150px]">{match.stadium}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-rm-gold/10 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-rm-gold" />
                      <span className="text-[10px] font-black text-rm-gold uppercase italic">{match.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-text-primary uppercase italic tracking-tighter">{match.date}</span>
                    <div className="flex items-center gap-2 group/btn">
                      <span className="text-[9px] font-bold text-rm-gold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Match Center</span>
                      <div className="p-2 border border-border-subtle rounded-full group-hover:bg-rm-gold group-hover:border-rm-gold transition-all">
                        <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-rm-blue-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unique Ticket Design Detail */}
              <div className="absolute top-1/2 -left-3 w-6 h-12 bg-background border border-border-subtle rounded-full -translate-y-1/2 pointer-events-none" />
              <div className="absolute top-1/2 -right-3 w-6 h-12 bg-background border border-border-subtle rounded-full -translate-y-1/2 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ultra-Modern Cinematic Modal */}
      <AnimatePresence>
        {selectedMatch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

            {/* 🔥 Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMatch(null)}
              className="absolute inset-0 bg-[color:var(--hero-overlay-strong)] backdrop-blur-xl"
            />

            {/* 🔥 Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.4 }}
              className="
                relative z-[101] w-full max-w-5xl
                max-h-[90vh] overflow-y-auto
                rounded-[40px] md:rounded-[60px]
                bg-card border border-border-subtle
                shadow-[0_30px_100px_rgba(0,0,0,0.6)]
              "
            >
              {/* Background decor */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/Images/Santiago.webp')] bg-cover bg-center mix-blend-overlay" />

              <div className="relative p-6 md:p-12 lg:p-16 flex flex-col items-center">

                {/* ❌ Close */}
                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => setSelectedMatch(null)}
                    className="p-3 rounded-full text-text-secondary hover:text-text-primary hover:bg-white/10 transition-all group"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                {/* 🏆 Competition */}
                <div className="flex items-center gap-3 px-5 py-2 mb-10 rounded-full 
                bg-rm-gold/10 border border-rm-gold/30 text-rm-gold shadow-gold">
                  <TrophyIcon className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">
                    {selectedMatch.competition}
                  </span>
                </div>

                {/* 🔥 Teams */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-16">

                  {/* Home */}
                  <div className="flex flex-col items-center gap-6 flex-1">
                    <div className="relative w-32 h-32 md:w-48 md:h-48 p-6 
                    bg-white/5 rounded-[30px] backdrop-blur-xl 
                    border border-border-subtle">
                      <Image src={selectedMatch.homeLogo} alt="" fill className="object-contain p-4" />
                    </div>
                    <span className="text-xl md:text-2xl font-black uppercase italic text-text-primary text-center">
                      {selectedMatch.homeTeam}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-5xl md:text-7xl font-black italic text-text-primary">
                      {selectedMatch.score}
                    </div>

                    {selectedMatch.isLive ? (
                      <div className="px-4 py-2 bg-red-600 rounded-full flex items-center gap-2 animate-pulse">
                        <Timer className="w-4 h-4 text-white" />
                        <span className="text-[10px] font-black text-white uppercase">
                          Live
                        </span>
                      </div>
                    ) : (
                      <span className="text-[10px] uppercase tracking-widest text-rm-gold/60">
                        Full Time
                      </span>
                    )}
                  </div>

                  {/* Away */}
                  <div className="flex flex-col items-center gap-6 flex-1">
                    <div className="relative w-32 h-32 md:w-48 md:h-48 p-6 
                    bg-white/5 rounded-[30px] backdrop-blur-xl 
                    border border-border-subtle">
                      <Image src={selectedMatch.awayLogo} alt="" fill className="object-contain p-4" />
                    </div>
                    <span className="text-xl md:text-2xl font-black uppercase italic text-text-primary text-center">
                      {selectedMatch.awayTeam}
                    </span>
                  </div>
                </div>

                {/* 📊 Details */}
                <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border-subtle pt-8">
                  {[
                    { icon: MapPin, label: "Arena", value: selectedMatch.stadium },
                    { icon: Calendar, label: "Kickoff", value: selectedMatch.date },
                    { icon: User, label: "Official", value: "A. Taylor" },
                    { icon: Ticket, label: "Attendance", value: "81,044" }
                  ].map((detail, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-1">
                      <detail.icon className="w-5 h-5 text-rm-gold opacity-60" />
                      <span className="text-[9px] uppercase tracking-widest text-text-secondary">
                        {detail.label}
                      </span>
                      <span className="text-sm font-bold text-text-primary">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 🎯 Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full justify-center">
                  <button className="flex-1 max-w-[260px] py-4 bg-rm-gold text-rm-blue-dark 
                  font-bold uppercase text-xs tracking-widest rounded-xl 
                  hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-2">
                    Watch Highlights <ChevronRight className="w-4 h-4" />
                  </button>

                  <button className="flex-1 max-w-[260px] py-4 bg-white/5 border border-border-subtle 
                  text-text-primary font-bold uppercase text-xs tracking-widest rounded-xl 
                  hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    Share <Share2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
