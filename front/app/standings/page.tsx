"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import useStandings from "@/hooks/useStandings";

type CompetitionType = "CL" | "PD";

export default function StandingsPage() {
  const [activeCompetition, setActiveCompetition] = useState<CompetitionType>("PD");
  const { allStandings, loading, error } = useStandings(activeCompetition);

  const isLaLiga = activeCompetition === "PD";

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero
        title="League Standings"
        subtitle="Track Real Madrid's journey to glory across domestic and European competitions."
        backgroundImage="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop"
        category="Statistics"
      />

      <section className="py-20 px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
        
        {/* Toggle Switch */}
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center mb-16">
            <button 
              onClick={() => setActiveCompetition("PD")}
              className={`px-8 py-4 rounded-full font-black text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 border-2 ${isLaLiga ? 'bg-rm-gold text-rm-blue-dark border-rm-gold shadow-[0_0_20px_rgba(238,195,115,0.4)]' : 'bg-transparent text-foreground border-border hover:border-rm-gold/50'}`}
            >
              La Liga
            </button>
            <button 
              onClick={() => setActiveCompetition("CL")}
              className={`px-8 py-4 rounded-full font-black text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 border-2 ${!isLaLiga ? 'bg-rm-gold text-rm-blue-dark border-rm-gold shadow-[0_0_20px_rgba(238,195,115,0.4)]' : 'bg-transparent text-foreground border-border hover:border-rm-gold/50'}`}
            >
              Champions League
            </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-12">
          
          {loading ? (
            <div className="flex items-center justify-center p-32 bg-card border border-border-subtle rounded-[40px]">
              <div className="flex flex-col items-center gap-6">
                 <div className="w-16 h-16 border-4 border-rm-gold border-t-transparent rounded-full animate-spin"></div>
                 <p className="font-black uppercase tracking-[0.3em] text-foreground/50 text-sm italic">Loading Data...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center p-32 text-center flex-col gap-4 bg-card border border-border-subtle rounded-[40px]">
              <p className="text-xl font-bold text-red-500">{error}</p>
              <p className="text-foreground/50 text-sm">Please try again later or check your API limit.</p>
            </div>
          ) : allStandings.length === 0 ? (
            <div className="flex items-center justify-center p-32 text-center text-foreground/50 bg-card border border-border-subtle rounded-[40px]">
              <p className="text-lg font-bold">No standings data available at the moment.</p>
            </div>
          ) : (
            allStandings.map((standingGroup, groupIdx) => (
              <div key={`${activeCompetition}-group-${groupIdx}`} className="bg-card border border-border-subtle rounded-[40px] overflow-hidden shadow-premium">
                
                {standingGroup.group && (
                  <div className="px-8 py-6 bg-foreground/5 border-b border-border-subtle">
                     <h3 className="font-black uppercase text-xl tracking-[0.2em] text-foreground">{standingGroup.group.replace('_', ' ')}</h3>
                  </div>
                )}
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-foreground/5 border-b border-border-subtle">
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">Pos</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60">Club</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">MP</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">W</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">D</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">L</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">GF</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">GA</th>
                        <th className="p-6 font-black uppercase text-xs tracking-widest text-foreground/60 w-[80px] text-center">GD</th>
                        <th className="p-6 font-black uppercase text-sm tracking-widest text-foreground w-[100px] text-center">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence mode="wait">
                        {standingGroup.table.map((row: any, index: number) => {
                          const isRealMadrid = row.team.tla === "RMA" || row.team.shortName.includes("Real Madrid") || row.team.id === 86;
                          
                          return (
                            <motion.tr 
                              key={`${activeCompetition}-${standingGroup.group || 'total'}-${row.team.id}`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className={`
                                border-b border-border-subtle transition-colors duration-200
                                ${isRealMadrid ? 'bg-rm-gold/10 hover:bg-rm-gold/20' : 'hover:bg-foreground/5'}
                              `}
                            >
                              <td className="p-6 text-center font-bold text-lg text-foreground/80">
                                {row.position}
                              </td>
                              <td className="p-6 flex items-center gap-4">
                                <div className="w-8 h-8 relative flex-shrink-0 bg-white rounded-full p-1 border border-border-subtle overflow-hidden">
                                  {row.team.crest && (
                                    <img src={row.team.crest} alt={row.team.name} className="w-full h-full object-contain" />
                                  )}
                                </div>
                                <span className={`font-bold md:text-lg ${isRealMadrid ? 'text-rm-gold' : 'text-foreground'}`}>
                                  {row.team.shortName || row.team.name}
                                </span>
                              </td>
                              <td className="p-6 text-center font-medium text-foreground/70">{row.playedGames}</td>
                              <td className="p-6 text-center font-medium text-foreground/70">{row.won}</td>
                              <td className="p-6 text-center font-medium text-foreground/70">{row.draw}</td>
                              <td className="p-6 text-center font-medium text-foreground/70">{row.lost}</td>
                              <td className="p-6 text-center font-medium text-foreground/70">{row.goalsFor}</td>
                              <td className="p-6 text-center font-medium text-foreground/70">{row.goalsAgainst}</td>
                              <td className="p-6 text-center font-medium text-foreground/70">{row.goalDifference}</td>
                              <td className="p-6 text-center font-black text-xl text-foreground">{row.points}</td>
                            </motion.tr>
                          );
                        })}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}

        </div>
      </section>
    </div>
  );
}
