"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Star, Award, TrendingUp, Target } from "lucide-react";

interface Player {
  id: number;
  name: string;
  number: number;
  image: string;
  country: string;
  Position: string;
  Age: number | string;
  Goals?: number;
  Assists?: number;
}

export const PlayerList = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
         setPlayers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const visiblePlayers = showAll ? players : players.slice(0, 8);

  return (
    <section className="relative w-full py-60 px-4 md:px-20 bg-background transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Text - Ultra Big Editorial Style */}
      <h3 className="absolute -top-20 left-0 text-[35vw] font-black text-foreground/[0.02] uppercase select-none leading-none pointer-events-none italic tracking-tighter">
        SQUAD
      </h3>
      
      <div className="max-w-[1800px] mx-auto flex flex-col gap-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex flex-col gap-6 max-w-4xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-4"
            >
              <div className="w-16 h-[1px] bg-rm-gold" />
              <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[11px] italic">Elite Selection</span>
            </motion.div>
            <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-foreground italic leading-[0.85]">
              THE WHITE <br /> <span className="text-gold">LEGENDS</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/40 font-medium text-lg leading-relaxed italic border-l border-foreground/10 pl-10 hidden lg:block">
            The athletes defining an era. Carrying the legacy of 124 years of excellence into every match at the Santiago Bernabéu.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full"
        >
          <AnimatePresence>
            {visiblePlayers.map((player, idx) => (
              <motion.div
                key={player.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group h-[550px] cursor-pointer"
              >
                {/* Main Card */}
                <div className="absolute inset-0 bg-card rounded-[50px] overflow-hidden border border-border-subtle shadow-premium transition-all duration-700 group-hover:shadow-2xl group-hover:border-rm-gold/40">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className={`object-cover object-top transition-all duration-1000 ${hoveredIdx === idx ? 'scale-110 brightness-50' : 'scale-100'}`}
                  />
                  
                  {/* Glass Card Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Number Background */}
                  <div className="absolute top-8 right-8 text-7xl font-black text-white/10 group-hover:text-gold/20 transition-colors uppercase italic select-none">
                    {player.number}
                  </div>
                  
                  {/* Default Info Box */}
                  <div className={`absolute bottom-0 left-0 w-full p-10 transition-all duration-700 ${hoveredIdx === idx ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
                    <div className="flex flex-col gap-2">
                      <div className="text-4xl font-black text-white italic leading-none tracking-tighter uppercase">{player.name}</div>
                      <div className="flex items-center gap-4">
                         <span className="text-rm-gold font-black text-xl italic">{player.number}</span>
                         <span className="h-[2px] w-6 bg-rm-gold/40" />
                         <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em] italic">{player.Position}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay: Stats & Actions */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-10 transition-all duration-700 ${hoveredIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                     <div className="flex flex-col gap-8 w-full">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex flex-col items-center group/stat">
                              <Target className="w-5 h-5 text-rm-gold mb-2 group-hover/stat:scale-110 transition-transform" />
                              <span className="text-3xl font-black text-white italic">{player.Goals}</span>
                              <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Goals</span>
                           </div>
                           <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex flex-col items-center group/stat">
                              <TrendingUp className="w-5 h-5 text-rm-gold mb-2 group-hover/stat:scale-110 transition-transform" />
                              <span className="text-3xl font-black text-white italic">{player.Assists}</span>
                              <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Assists</span>
                           </div>
                        </div>

                        <div className="flex items-center justify-between px-2">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-6 relative overflow-hidden rounded-sm shadow-sm border border-white/10">
                                 <Image src={player.country} alt="Flag" fill className="object-cover" />
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Age: {player.Age}</span>
                           </div>
                           <Award className="w-5 h-5 text-rm-gold/40" />
                        </div>
                        
                        <button className="w-full py-5 bg-rm-gold text-rm-blue-dark font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white transition-all transform hover:translate-y-[-4px] active:scale-95 shadow-lg shadow-rm-gold/20">
                           Full Statistics
                        </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className="flex flex-col items-center gap-4 group mt-10"
        >
          <div className="flex items-center justify-center w-20 h-20 bg-foreground text-background rounded-full group-hover:bg-rm-gold group-hover:text-rm-blue-dark transition-all duration-500 shadow-2xl shadow-foreground/10 group-hover:shadow-rm-gold/30">
            {showAll ? <ChevronUp className="w-10 h-10" /> : <ChevronDown className="w-10 h-10" />}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 group-hover:text-rm-gold transition-colors italic">
            {showAll ? "Minimize Squad" : "Discover Full Squad"}
          </span>
        </motion.button>
      </div>
    </section>
  );
};
