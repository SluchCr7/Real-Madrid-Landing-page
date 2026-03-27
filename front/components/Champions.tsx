"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Shield, Trophy as TrophyIcon, Globe, MapPin, Award, ArrowUpRight } from "lucide-react";

interface Trophy {
  id: number;
  title: string;
  image: string;
  count: number;
  width: number;
  icon: any;
}

const trophies: Trophy[] = [
  { id: 1, title: "The Best Club of the 20th Century FIFA Trophy", image: "/Images/Best.svg", count: 1, width: 200, icon: Star },
  { id: 2, title: "UEFA Champions League", image: "/Images/champion.svg", count: 15, width: 900, icon: TrophyIcon },
  { id: 3, title: "FIFA Club World Cup", image: "/Images/World Cup.svg", count: 8, width: 450, icon: Globe },
  { id: 4, title: "La Liga EA Sports", image: "/Images/Laliga.svg", count: 36, width: 850, icon: Award },
  { id: 5, title: "Copa del Rey", image: "/Images/Copa de rey.svg", count: 20, width: 550, icon: Shield },
  { id: 6, title: "Spanish Super Cup", image: "/Images/Super.svg", count: 13, width: 350, icon: TrophyIcon },
];

export const Champions = () => {
  return (
    <section className="relative w-full py-60 px-4 md:px-20 bg-background transition-colors duration-500 overflow-hidden">
      {/* Background Ghost Text */}
      <h3 className="absolute top-0 left-0 text-[28vw] font-black text-foreground/[0.025] uppercase select-none leading-none pointer-events-none italic tracking-tighter">GLORY</h3>

      <div className="max-w-[1800px] mx-auto flex flex-col gap-32 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-[1px] bg-rm-gold" />
              <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[11px] italic">A Legacy Unmatched</span>
            </motion.div>
            <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-foreground italic leading-[0.85]">
              THE TROPHY <br /><span className="text-gold">ROOM</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/40 font-medium text-lg leading-relaxed italic border-l border-foreground/10 pl-10 hidden lg:block">
            Real Madrid is more than a football club. Explore the legendary history and symbols of our eternal glory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full items-center">
          {/* Main Visual Cinematic Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] w-full rounded-[60px] overflow-hidden shadow-premium group border border-border-subtle group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark via-rm-blue-dark/20 to-transparent z-10 opacity-60 group-hover:opacity-100 transition-opacity" />
            <Image 
              src="/Images/Championsleague.webp" 
              alt="Champions Trophy Room" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-75 group-hover:brightness-100" 
            />
            <div className="absolute bottom-12 left-12 z-20 flex flex-col gap-4">
               <span className="text-[10px] font-black uppercase text-rm-gold tracking-[0.4em] italic drop-shadow-md">Official Museum Experience</span>
               <h4 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none drop-shadow-2xl">Tour the <br /> <span className="text-gold">Bernabéu</span></h4>
               <button className="flex items-center gap-3 text-white/80 hover:text-rm-gold transition-colors text-xs font-black uppercase tracking-widest italic group/btn mt-2">
                 Book Exclusive Tour <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
               </button>
            </div>
          </motion.div>

          {/* Trophy Stats Grid */}
          <div className="flex flex-col gap-12 w-full">
            {trophies.map((t, idx) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 w-full group"
              >
                <div className="flex items-center justify-between w-full">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-rm-gold/10 rounded-xl flex items-center justify-center border border-rm-gold/20 group-hover:bg-rm-gold transition-colors group-hover:text-rm-blue-dark text-rm-gold">
                         <t.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground transition-colors italic">{t.title}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-2xl font-black italic text-rm-gold">{t.count}</span>
                      <span className="text-[10px] font-bold text-foreground/20 uppercase">Units</span>
                   </div>
                </div>
                
                <div className="relative h-2 w-full bg-foreground/5 rounded-full overflow-hidden border border-border-subtle">
                   <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(t.width / 1000) * 100}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1), ease: "circOut" }}
                      className="absolute inset-0 gold-gradient rounded-full shadow-gold group-hover:shadow-[0_0_40px_rgba(193,160,88,0.8)] transition-all"
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Historic Stats Overlay - Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full pt-20 border-t border-border-subtle">
            {[
              { label: "Best Club", value: "20th Century", sub: "FIFA Diamond Award", icon: Star },
              { label: "Total Honors", value: "100+", sub: "Official Titles", icon: Award },
              { label: "World Records", value: "15", sub: "Most European Cups", icon: TrophyIcon },
              { label: "Global Presence", value: "450M+", sub: "Loyal Supporters", icon: Globe }
            ].map((stat, i) => (
              <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col p-8 bg-card border border-border-subtle rounded-[40px] hover:border-rm-gold/40 transition-all group cursor-pointer shadow-premium hover:shadow-2xl hover:translate-y-[-5px]"
              >
                 <div className="w-12 h-12 bg-rm-gold/10 rounded-2xl flex items-center justify-center mb-6 text-rm-gold group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rm-gold italic mb-2 opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</span>
                 <span className="text-3xl font-black italic uppercase text-foreground tracking-tighter leading-tight group-hover:text-gold transition-colors">{stat.value}</span>
                 <span className="text-[10px] uppercase font-bold text-foreground/40 mt-1">{stat.sub}</span>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
