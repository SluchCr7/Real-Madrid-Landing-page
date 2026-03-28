"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Trophy, Calendar, Clock, ArrowRight, Share2, X, Ticket } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import useMatches, { Match as ApiMatch } from "@/hooks/useMatches";

export default function MatchesPage() {
  const { matches: allMatches, loading, error } = useMatches();
  const [filter, setFilter] = useState<"All" | "Upcoming" | "Results">("All");
  const [selectedMatch, setSelectedMatch] = useState<ApiMatch | null>(null);

  // فلترة المباريات
  const filteredMatches = allMatches.filter(m => {
    if (filter === "All") return true;
    if (filter === "Upcoming") return !m.score.fullTime.home && !m.score.fullTime.away || m.status === "LIVE";
    if (filter === "Results") return m.score.fullTime.home !== null && m.score.fullTime.away !== null && m.status !== "LIVE";
    return true;
  });

  return (
    <div className="flex flex-col w-full bg-background min-h-screen transition-colors duration-500">
      <PageHero
        title="Match Center"
        subtitle="Follow the journey of the Kings of Europe across all competitions."
        backgroundImage="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop"
        category="Fixtures & Results"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        {/* Filters */}
        <div className="flex justify-center gap-6 mb-20">
          {["All", "Upcoming", "Results"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all italic border ${filter === f
                ? "bg-rm-gold text-rm-blue-dark border-rm-gold shadow-gold"
                : "bg-card text-foreground/40 border-border-subtle hover:border-rm-gold/40 hover:text-foreground"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {loading && <p className="text-center font-black text-foreground">Loading matches...</p>}
        {error && <p className="text-center font-black text-red-500">{error}</p>}

        {/* Matches Grid */}
        {!loading && !error && (
          <div className="flex flex-col gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMatches.map((match, idx) => (
                <motion.div
                  key={match.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => setSelectedMatch(match)}
                  className="group relative bg-card border border-border-subtle rounded-[40px] p-8 md:p-12 cursor-pointer hover:border-rm-gold/40 transition-all hover:shadow-premium"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Info Column */}
                    <div className="flex flex-col items-center md:items-start gap-4 flex-1">
                      <span className="px-4 py-1.5 bg-foreground/5 rounded-full text-[9px] font-black tracking-widest text-foreground/40 uppercase italic group-hover:bg-rm-gold group-hover:text-black transition-all">
                        {match.competition.name}
                      </span>
                      <div className="flex items-center gap-3 text-foreground/60 italic">
                        <Calendar className="w-4 h-4 text-rm-gold" />
                        <span className="text-sm font-black uppercase tracking-widest">
                          {new Date(match.utcDate).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" })}
                        </span>
                      </div>
                    </div>

                    {/* Teams Column */}
                    <div className="flex items-center justify-center gap-8 md:gap-16 flex-[2]">
                      <div className="flex flex-col items-center gap-4 w-24">
                        <div className="relative w-20 h-20 md:w-28 md:h-28 group-hover:scale-110 transition-transform duration-500">
                          <Image src={match.homeTeam.crest} alt={match.homeTeam.name} fill className="object-contain" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-center">{match.homeTeam.name}</span>
                      </div>

                      <div className="flex flex-col items-center gap-2 min-w-[120px]">
                        <div className={`text-5xl md:text-7xl font-black italic tracking-tighter transition-all ${!match.score.fullTime.home && !match.score.fullTime.away ? 'text-foreground/10 group-hover:text-rm-gold' : 'text-foreground'}`}>
                          {!match.score.fullTime.home && !match.score.fullTime.away ? 'VS' : `${match.score.fullTime.home} : ${match.score.fullTime.away}`}
                        </div>
                        {match.status === "LIVE" && (
                          <div className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/20">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span className="text-[8px] font-black text-white uppercase italic">Live Now</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-center gap-4 w-24">
                        <div className="relative w-20 h-20 md:w-28 md:h-28 group-hover:scale-110 transition-transform duration-500">
                          <Image src={match.awayTeam.crest} alt={match.awayTeam.name} fill className="object-contain" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-center">{match.awayTeam.name}</span>
                      </div>
                    </div>

                    {/* CTA Column */}
                    <div className="flex flex-col items-center md:items-end gap-6 flex-1">
                      <div className="flex items-center gap-3 text-foreground/60 italic">
                        <Clock className="w-4 h-4 text-rm-gold" />
                        <span className="text-sm font-black uppercase tracking-widest">{new Date(match.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <button className="flex items-center gap-3 group/btn">
                        <span className="text-[10px] font-black uppercase tracking-widest text-rm-gold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">View Details</span>
                        <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover:bg-rm-gold transition-all">
                          <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-rm-blue-dark" />
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Modal */}
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
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rm-gold italic underline underline-offset-8">{selectedMatch.competition.name}</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-20">
                  <div className="flex flex-col items-center gap-6 flex-1">
                    <div className="relative w-32 h-32 md:w-48 md:h-48 p-8 bg-background rounded-[40px] border border-border-subtle shadow-lg">
                      <Image src={selectedMatch.homeTeam.crest} alt="" fill className="object-contain p-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-center">{selectedMatch.homeTeam.name}</h3>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="text-6xl md:text-8xl font-black italic tracking-tighter text-foreground drop-shadow-lg">
                      {!selectedMatch.score.fullTime.home && !selectedMatch.score.fullTime.away ? 'VS' : `${selectedMatch.score.fullTime.home} : ${selectedMatch.score.fullTime.away}`}
                    </div>
                    {selectedMatch.status === "LIVE" && (
                      <span className="px-6 py-2 bg-red-600 rounded-full text-[10px] font-black uppercase text-white animate-pulse">Live Action</span>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-6 flex-1">
                    <div className="relative w-32 h-32 md:w-48 md:h-48 p-8 bg-background rounded-[40px] border border-border-subtle shadow-lg">
                      <Image src={selectedMatch.awayTeam.crest} alt="" fill className="object-contain p-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-center">{selectedMatch.awayTeam.name}</h3>
                  </div>
                </div>

                <div className="w-full mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-border-subtle">
                  <div className="flex flex-col items-center gap-1">
                    <MapPin className="w-5 h-5 text-rm-gold/60" />
                    <span className="text-[9px] uppercase font-black text-foreground/40 mt-1">Venue</span>
                    <span className="text-sm font-black italic">{selectedMatch.area?.name || "N/A"}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Calendar className="w-5 h-5 text-rm-gold/60" />
                    <span className="text-[9px] uppercase font-black text-foreground/40 mt-1">Date</span>
                    <span className="text-sm font-black italic">{new Date(selectedMatch.utcDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 col-span-2 md:col-span-1">
                    <Clock className="w-5 h-5 text-rm-gold/60" />
                    <span className="text-[9px] uppercase font-black text-foreground/40 mt-1">Local Time</span>
                    <span className="text-sm font-black italic">{new Date(selectedMatch.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
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