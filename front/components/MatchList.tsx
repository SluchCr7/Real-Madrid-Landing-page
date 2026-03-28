"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, MapPin, Trophy as TrophyIcon, Calendar, Clock, Timer, User, ArrowRight, ArrowLeft, Share2, ChevronRight, Ticket, ArrowUpRight } from "lucide-react";
import useMatches from "@/hooks/useMatches";

export interface DisplayMatch {
  id: string | number;
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

const fallbackMatches: DisplayMatch[] = [
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
  const [selectedMatch, setSelectedMatch] = useState<DisplayMatch | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { matches, loading } = useMatches();

  // Combine past and future matches seamlessly
  const apiFormattedMatches: DisplayMatch[] = (() => {
    if (!matches || matches.length === 0) return [];

    // Sort logic (API generally returns them chronologically, but just in case)
    const finished = matches.filter(m => m.status === 'FINISHED' || m.status === 'AWARDED').slice(-4);
    const upcoming = matches.filter(m => m.status !== 'FINISHED' && m.status !== 'AWARDED').slice(0, 6);

    const combined = [...finished, ...upcoming];

    return combined.map(m => ({
      id: m.id,
      homeTeam: m.homeTeam.name,
      homeLogo: m.homeTeam.crest,
      awayTeam: m.awayTeam.name,
      awayLogo: m.awayTeam.crest,
      score: m.status === 'FINISHED' || m.status === 'LIVE' ? `${m.score.fullTime.home ?? 0} : ${m.score.fullTime.away ?? 0}` : "VS",
      stadium: m.area?.name || "Santiago Bernabéu",
      date: new Date(m.utcDate).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' }),
      time: new Date(m.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      competition: m.competition.name,
      isLive: m.status === 'LIVE' || m.status === 'IN_PLAY' || m.status === 'PAUSED'
    }));
  })();

  const displayMatches = apiFormattedMatches.length > 0 ? apiFormattedMatches : fallbackMatches;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
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

          <div className="flex items-center gap-8">
            {/* Slider Controls */}
            <div className="hidden md:flex gap-4">
              <button onClick={scrollLeft} className="w-16 h-16 rounded-full border border-border-subtle bg-card flex items-center justify-center hover:bg-rm-gold transition-all hover:text-rm-blue-dark shadow-premium hover:shadow-gold hover:scale-105 active:scale-95">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button onClick={scrollRight} className="w-16 h-16 rounded-full border border-border-subtle bg-card flex items-center justify-center hover:bg-rm-gold transition-all hover:text-rm-blue-dark shadow-premium hover:shadow-gold hover:scale-105 active:scale-95">
                <ArrowRight className="w-6 h-6" />
              </button>
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
        </div>

        {/* Feature/Live Indicator if any */}
        <AnimatePresence>
          {displayMatches.some(m => m.isLive) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-red-600/10 border border-red-600/20 backdrop-blur-3xl p-6 rounded-[30px] flex items-center gap-6 self-start mb-4 shadow-xl shadow-red-600/5"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs font-black text-red-500 uppercase tracking-[0.4em] italic">Action is live — Tune in now</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CSS Scrollbar Hiding styles embedded directly */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />

        {/* The Professional Carousel Slider */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto gap-10 snap-x snap-mandatory pb-16 pt-4 px-4 -mx-4 no-scrollbar items-stretch"
          ref={sliderRef}
        >
          {displayMatches.map((match) => (
            <motion.div
              key={match.id}
              variants={item}
              onClick={() => setSelectedMatch(match)}
              className="group relative flex flex-col bg-card border border-border-subtle rounded-[60px] cursor-pointer hover:-translate-y-4 transition-all duration-500 overflow-hidden min-w-[90vw] md:min-w-[420px] snap-center shrink-0"
            >
              {/* Card Header Background */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-rm-gold/5 dark:from-rm-gold/[0.03] to-transparent pointer-events-none transition-colors group-hover:from-rm-gold/10" />

              <div className="p-10 md:p-12 flex flex-col h-full gap-10 relative z-10 justify-between">
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="px-5 py-2 bg-foreground/5 rounded-full text-[9px] font-black tracking-[0.2em] text-text-secondary uppercase italic group-hover:bg-rm-gold group-hover:text-black transition-all max-w-[200px] truncate text-center">
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
                      <div className="relative w-20 h-20 md:w-24 md:h-24 p-4 bg-background rounded-[35px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-700 border border-border-subtle group-hover:border-rm-gold/20 flex items-center justify-center">
                        <img src={match.homeLogo} alt={match.homeTeam} className="w-full h-full object-contain p-2 drop-shadow-md" />
                      </div>
                      <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-text-primary text-center leading-snug line-clamp-2">{match.homeTeam}</h4>
                    </div>

                    <div className="flex flex-col items-center flex-none">
                      <div className={`text-2xl md:text-3xl font-black italic tracking-tighter transition-all duration-500 ${match.score === 'VS' ? 'text-foreground/10 group-hover:text-rm-gold opacity-50' : 'text-foreground group-hover:text-gold scale-110'}`}>
                        {match.score}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 flex-1">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 p-4 bg-background rounded-[35px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-700 border border-border-subtle group-hover:border-rm-gold/20 flex items-center justify-center">
                        <img src={match.awayLogo} alt={match.awayTeam} className="w-full h-full object-contain p-2 drop-shadow-md" />
                      </div>
                      <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-text-primary text-center leading-snug line-clamp-2">{match.awayTeam}</h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-6 border-t border-border-subtle group-hover:border-rm-gold/20 transition-colors mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-text-secondary italic">
                      <MapPin className="w-4 h-4 text-rm-gold" />
                      <span className="text-[10px] uppercase font-black tracking-[0.2em] truncate max-w-[150px]">{match.stadium}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-rm-gold/10 rounded-lg group-hover:bg-rm-gold group-hover:text-rm-blue-dark transition-colors duration-500">
                      <Clock className="w-3.5 h-3.5 text-inherit group-hover:text-rm-blue-dark" />
                      <span className="text-[10px] font-black text-rm-gold uppercase italic group-hover:text-rm-blue-dark">{match.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-text-primary uppercase italic tracking-[0.1em]">{match.date}</span>
                    <div className="flex items-center gap-2 group/btn">
                      <span className="text-[9px] font-bold text-rm-gold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Details</span>
                      <div className="p-2 border border-border-subtle rounded-full bg-card group-hover:bg-rm-gold group-hover:border-rm-gold shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all">
                        <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-rm-blue-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unique Ticket Design Detail */}
              <div className="absolute top-1/2 -left-3 w-6 h-12 bg-background border border-border-subtle rounded-full -translate-y-1/2 pointer-events-none shadow-[inset_-4px_0_10px_rgba(0,0,0,0.03)]" />
              <div className="absolute top-1/2 -right-3 w-6 h-12 bg-background border border-border-subtle rounded-full -translate-y-1/2 pointer-events-none shadow-[inset_4px_0_10px_rgba(0,0,0,0.03)]" />
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
              className="absolute inset-0 bg-[color:var(--hero-overlay-strong)] backdrop-blur-2xl"
            />

            {/* 🔥 Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                relative z-[101] w-full max-w-5xl
                max-h-[90vh] overflow-y-auto no-scrollbar
                rounded-[40px] md:rounded-[60px]
                bg-card border border-border-subtle
                shadow-[0_40px_100px_rgba(0,0,0,0.8)]
              "
            >
              {/* Background decor */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/Images/Santiago.webp')] bg-cover bg-center mix-blend-overlay" />
              <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-rm-gold/[0.05] to-transparent pointer-events-none" />

              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-center">

                {/* ❌ Close */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10">
                  <button
                    onClick={() => setSelectedMatch(null)}
                    className="p-4 rounded-full text-text-secondary bg-background/50 backdrop-blur-xl border border-border-subtle hover:text-text-primary hover:bg-white/10 transition-all group shadow-xl"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                {/* 🏆 Competition */}
                <div className="flex items-center gap-3 px-6 py-3 mb-12 rounded-full 
                bg-rm-gold/10 border border-rm-gold/30 text-rm-gold shadow-[0_0_30px_rgba(238,197,93,0.15)] backdrop-blur-xl mt-4">
                  <TrophyIcon className="w-5 h-5" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] italic">
                    {selectedMatch.competition}
                  </span>
                </div>

                {/* 🔥 Teams */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-16">

                  {/* Home */}
                  <div className="flex flex-col items-center gap-6 flex-1">
                    <div className="relative w-40 h-40 md:w-56 md:h-56 p-6 
                    bg-white/5 rounded-[40px] backdrop-blur-2xl 
                    border border-border-subtle shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                      <img src={selectedMatch.homeLogo} alt="" className="w-full h-full object-contain p-2 drop-shadow-2xl" />
                    </div>
                    <span className="text-2xl md:text-3xl font-black uppercase italic text-text-primary text-center max-w-[200px]">
                      {selectedMatch.homeTeam}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-6xl md:text-8xl font-black italic text-text-primary drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                      {selectedMatch.score}
                    </div>

                    {selectedMatch.isLive ? (
                      <div className="px-6 py-2.5 bg-red-600 rounded-full flex items-center gap-3 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        <Timer className="w-5 h-5 text-white" />
                        <span className="text-[12px] font-black text-white uppercase tracking-widest">
                          Live Action
                        </span>
                      </div>
                    ) : (
                      <span className="text-[11px] font-black uppercase tracking-[0.4em] text-rm-gold/60">
                        {selectedMatch.score !== 'VS' ? 'Full Time' : 'Upcoming'}
                      </span>
                    )}
                  </div>

                  {/* Away */}
                  <div className="flex flex-col items-center gap-6 flex-1">
                    <div className="relative w-40 h-40 md:w-56 md:h-56 p-6 
                    bg-white/5 rounded-[40px] backdrop-blur-2xl 
                    border border-border-subtle shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                      <img src={selectedMatch.awayLogo} alt="" className="w-full h-full object-contain p-2 drop-shadow-2xl" />
                    </div>
                    <span className="text-2xl md:text-3xl font-black uppercase italic text-text-primary text-center max-w-[200px]">
                      {selectedMatch.awayTeam}
                    </span>
                  </div>
                </div>

                {/* 📊 Details */}
                <div className="w-full mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-border-subtle pt-12">
                  {[
                    { icon: MapPin, label: "Arena", value: selectedMatch.stadium },
                    { icon: Calendar, label: "Kickoff", value: selectedMatch.date },
                    { icon: User, label: "Official", value: "TBA" },
                    { icon: Ticket, label: "Est. Matchday", value: "Available" }
                  ].map((detail, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2 p-4 rounded-[20px] hover:bg-foreground/[0.02] transition-colors">
                      <detail.icon className="w-6 h-6 text-rm-gold opacity-80 mb-2" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary">
                        {detail.label}
                      </span>
                      <span className="text-base font-black text-text-primary italic">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 🎯 Actions */}
                <div className="flex flex-col md:flex-row gap-6 mt-16 w-full justify-center">
                  <button className="flex-1 max-w-[320px] py-6 bg-rm-gold text-rm-blue-dark 
                  font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl shadow-[0_10px_30px_rgba(238,197,93,0.3)]
                  hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-4 group">
                    Match Center <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <button className="flex-1 max-w-[320px] py-6 bg-card border border-border-subtle shadow-xl
                  text-text-primary font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl 
                  hover:bg-foreground/5 hover:border-rm-gold/40 transition-all active:scale-95 flex items-center justify-center gap-4 group">
                    Share Fixture <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
