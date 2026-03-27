"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Trophy, Calendar, Clock, ChevronRight, Share2, X, Ticket, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

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

const allMatches: Match[] = [
  {
    id: 1,
    homeTeam: "Real Madrid",
    homeLogo: "/Images/real.webp",
    awayTeam: "Barcelona",
    awayLogo: "/Images/Barxa.webp",
    score: "3 : 2",
    stadium: "Santiago Bernabéu",
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
    awayTeam: "Cádiz",
    awayLogo: "/Images/cadiz.webp",
    score: "VS",
    stadium: "Santiago Bernabéu",
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
    stadium: "Santiago Bernabéu",
    date: "08 MAY 2024",
    time: "21:00",
    competition: "UEFA Champions League",
  },
  {
    id: 6,
    homeTeam: "Granada",
    homeLogo: "/Images/real.webp", // Mockup logo
    awayTeam: "Real Madrid",
    awayLogo: "/Images/real.webp",
    score: "VS",
    stadium: "Nuevo Los Cármenes",
    date: "11 MAY 2024",
    time: "18:30",
    competition: "La Liga EA Sports",
  },
];

export default function MatchesPage() {
  const [filter, setFilter] = useState<"All" | "Upcoming" | "Results">("All");
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const filteredMatches = allMatches.filter(m => {
    if (filter === "All") return true;
    if (filter === "Upcoming") return m.score === "VS" || m.isLive;
    if (filter === "Results") return m.score !== "VS" && !m.isLive;
    return true;
  });

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="Match Center" 
        subtitle="Follow the journey of the Kings of Europe across all competitions."
        backgroundImage="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop"
        category="Fixtures & Results"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        {/* Filters */}
        <div className="flex justify-center gap-6 mb-20">
          {["All", "Upcoming", "Results"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all italic border ${
                filter === f 
                  ? "bg-rm-gold text-rm-blue-dark border-rm-gold shadow-gold" 
                  : "bg-card text-foreground/40 border-border-subtle hover:border-rm-gold/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Matches Grid */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMatches.map((match, idx) => (
              <motion.div
                key={match.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedMatch(match)}
                className="group relative bg-card border border-border-subtle rounded-[40px] p-8 md:p-12 cursor-pointer hover:border-rm-gold/40 transition-all hover:shadow-premium"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  {/* Info Column */}
                  <div className="flex flex-col items-center md:items-start gap-4 flex-1">
                    <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-[9px] font-black tracking-widest text-foreground/40 uppercase italic group-hover:bg-rm-gold group-hover:text-black transition-all">
                      {match.competition}
                    </span>
                    <div className="flex items-center gap-3 text-foreground/60 italic">
                      <Calendar className="w-4 h-4 text-rm-gold" />
                      <span className="text-sm font-black uppercase tracking-widest">{match.date}</span>
                    </div>
                  </div>

                  {/* Teams Column */}
                  <div className="flex items-center justify-center gap-8 md:gap-16 flex-[2]">
                    <div className="flex flex-col items-center gap-4 w-24">
                      <div className="relative w-20 h-20 md:w-28 md:h-28 group-hover:scale-110 transition-transform duration-500">
                        <Image src={match.homeLogo} alt={match.homeTeam} fill className="object-contain" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-center">{match.homeTeam}</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                      <div className={`text-5xl md:text-7xl font-black italic tracking-tighter transition-all ${match.score === 'VS' ? 'text-foreground/10 group-hover:text-rm-gold' : 'text-foreground'}`}>
                        {match.score}
                      </div>
                      {match.isLive && (
                         <div className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/20">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span className="text-[8px] font-black text-white uppercase italic">Live Now</span>
                         </div>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-4 w-24">
                      <div className="relative w-20 h-20 md:w-28 md:h-28 group-hover:scale-110 transition-transform duration-500">
                        <Image src={match.awayLogo} alt={match.awayTeam} fill className="object-contain" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-center">{match.awayTeam}</span>
                    </div>
                  </div>

                  {/* CTA Column */}
                  <div className="flex flex-col items-center md:items-end gap-6 flex-1">
                     <div className="flex items-center gap-3 text-foreground/60 italic">
                       <Clock className="w-4 h-4 text-rm-gold" />
                       <span className="text-sm font-black uppercase tracking-widest">{match.time}</span>
                     </div>
                     <button className="flex items-center gap-3 group/btn">
                        <span className="text-[10px] font-black uppercase tracking-widest text-rm-gold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">View Details</span>
                        <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover:bg-rm-gold transition-all">
                           <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-rm-blue-dark" />
                        </div>
                     </button>
                  </div>
                </div>

                {/* Decorative border detail */}
                <div className="absolute top-1/2 -left-3 w-6 h-12 bg-background border border-border-subtle rounded-full -translate-y-1/2" />
                <div className="absolute top-1/2 -right-3 w-6 h-12 bg-background border border-border-subtle rounded-full -translate-y-1/2" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Modern Modal (inspired by MatchList.tsx) */}
      <AnimatePresence>
        {selectedMatch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMatch(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative z-[101] w-full max-w-4xl bg-card border border-border-subtle rounded-[60px] overflow-hidden shadow-2xl"
            >
              <div className="p-12 md:p-16 flex flex-col items-center">
                 <button onClick={() => setSelectedMatch(null)} className="absolute top-8 right-8 p-4 rounded-full bg-foreground/5 hover:bg-rm-gold transition-all group">
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                 </button>

                 <div className="flex flex-col items-center gap-4 mb-12">
                    <Trophy className="w-8 h-8 text-rm-gold mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rm-gold italic underline underline-offset-8">{selectedMatch.competition}</span>
                 </div>

                 <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-20">
                    <div className="flex flex-col items-center gap-6 flex-1">
                       <div className="relative w-32 h-32 md:w-48 md:h-48 p-8 bg-background rounded-[40px] border border-border-subtle shadow-lg">
                          <Image src={selectedMatch.homeLogo} alt="" fill className="object-contain p-6" />
                       </div>
                       <h3 className="text-2xl font-black uppercase italic tracking-tighter text-center">{selectedMatch.homeTeam}</h3>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                       <div className="text-6xl md:text-8xl font-black italic tracking-tighter text-foreground drop-shadow-lg">
                          {selectedMatch.score}
                       </div>
                       {selectedMatch.isLive ? (
                          <span className="px-6 py-2 bg-red-600 rounded-full text-[10px] font-black uppercase text-white animate-pulse">Live Action</span>
                       ) : (
                          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{selectedMatch.score === 'VS' ? 'Kickoff scheduled' : 'Full Time Record'}</span>
                       )}
                    </div>

                    <div className="flex flex-col items-center gap-6 flex-1">
                       <div className="relative w-32 h-32 md:w-48 md:h-48 p-8 bg-background rounded-[40px] border border-border-subtle shadow-lg">
                          <Image src={selectedMatch.awayLogo} alt="" fill className="object-contain p-6" />
                       </div>
                       <h3 className="text-2xl font-black uppercase italic tracking-tighter text-center">{selectedMatch.awayTeam}</h3>
                    </div>
                 </div>

                 <div className="w-full mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-border-subtle">
                    <div className="flex flex-col items-center gap-1">
                       <MapPin className="w-5 h-5 text-rm-gold/60" />
                       <span className="text-[9px] uppercase font-black text-foreground/40 mt-1">Venue</span>
                       <span className="text-sm font-black italic">{selectedMatch.stadium}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <Calendar className="w-5 h-5 text-rm-gold/60" />
                       <span className="text-[9px] uppercase font-black text-foreground/40 mt-1">Date</span>
                       <span className="text-sm font-black italic">{selectedMatch.date}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 col-span-2 md:col-span-1">
                       <Clock className="w-5 h-5 text-rm-gold/60" />
                       <span className="text-[9px] uppercase font-black text-foreground/40 mt-1">Local Time</span>
                       <span className="text-sm font-black italic">{selectedMatch.time}</span>
                    </div>
                 </div>

                 <div className="flex gap-6 mt-16 w-full max-w-md">
                    <button className="flex-1 py-5 bg-rm-gold text-rm-blue-dark font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white transition-all shadow-xl shadow-rm-gold/20 flex items-center justify-center gap-2 group">
                       Tickets Area <Ticket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </button>
                    <button className="flex-1 py-5 bg-foreground/10 text-foreground font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-foreground/20 transition-all flex items-center justify-center gap-2">
                       Share <Share2 className="w-4 h-4" />
                    </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
