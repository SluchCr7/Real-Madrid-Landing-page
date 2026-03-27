"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Target, TrendingUp, Award, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";

interface Player {
  id: number;
  name: string;
  number: number;
  image: string;
  country: string;
  Position: string;
  Age: number | string;
  nationality: string;
  Goals?: number;
  Assists?: number;
}

const CATEGORIES = ["Goalkeeper", "Defender", "Midfield", "Forward"];

export default function SquadPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
         setPlayers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredPlayers = activeCategory === "All" 
    ? players 
    : players.filter(p => p.Position === activeCategory || (activeCategory === "Midfield" && p.Position === "Midfield"));

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="The First Team" 
        subtitle="The elite squad representing the crest and the history of the world's most successful club."
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
        category="Season 2025/26"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all italic border ${
                activeCategory === cat 
                  ? "bg-rm-gold text-rm-blue-dark border-rm-gold shadow-gold" 
                  : "bg-card text-foreground/40 border-border-subtle hover:border-rm-gold/40 hover:text-foreground"
              }`}
            >
              {cat === "Midfield" ? "Midfielders" : cat === "All" ? "All Players" : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Squad Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPlayers.map((player, idx) => (
              <motion.div
                key={player.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative h-[450px] cursor-pointer"
              >
                <div className="absolute inset-0 bg-card rounded-[40px] overflow-hidden border border-border-subtle shadow-premium transition-all duration-500 group-hover:shadow-2xl group-hover:border-rm-gold/40">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                  />
                  
                  {/* Number Overlay */}
                  <div className="absolute top-6 right-6 text-6xl font-black text-white/10 group-hover:text-gold/20 transition-colors uppercase italic select-none">
                    {player.number}
                  </div>

                  {/* Info Box */}
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-rm-blue-dark/90 via-rm-blue-dark/40 to-transparent">
                    <div className="flex flex-col gap-1 transition-transform duration-500 group-hover:-translate-y-4">
                      <span className="text-rm-gold font-black text-xs uppercase tracking-widest italic">{player.Position}</span>
                      <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">{player.name}</h3>
                      
                      <div className="flex items-center gap-4 mt-2 h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-2">
                           <Target className="w-3 h-3 text-rm-gold" />
                           <span className="text-white/60 text-[10px] uppercase font-black">{player.Goals} Goals</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <TrendingUp className="w-3 h-3 text-rm-gold" />
                           <span className="text-white/60 text-[10px] uppercase font-black">{player.Assists} Assists</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nationality Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-4 h-3 relative rounded-sm overflow-hidden">
                      <Image src={player.country} alt={player.nationality} fill className="object-cover" />
                    </div>
                    <span className="text-[8px] font-black uppercase text-white/80 tracking-widest">{player.nationality}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPlayers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-40">
            <span className="text-foreground/20 text-8xl font-black italic">NOMADS</span>
            <p className="text-foreground/40 font-bold uppercase tracking-widest mt-4">No players found in this category</p>
          </div>
        )}
      </section>
    </div>
  );
}
