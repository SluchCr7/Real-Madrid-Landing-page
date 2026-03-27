"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { History, Shield, Star, Award, Zap, Heart, Landmark, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  const milestones = [
    { year: "1902", title: "The Foundation", desc: "Real Madrid is officially founded as Madrid Foot-ball Club." },
    { year: "1920", title: "Royal Title", desc: "King Alfonso XIII grants the club the 'Real' (Royal) title." },
    { year: "1947", title: "Bernabéu Era", desc: "Inauguration of the stadium named after the legendary president." },
    { year: "1956", title: "European Kings", desc: "The start of the historic run of 5 consecutive European Cups." },
    { year: "2000", title: "Club of the Century", desc: "FIFA awards Real Madrid as the Greatest Club of the 20th Century." },
    { year: "2024", title: "La Decimoquinta", desc: "Achieving the 15th European Cup title, solidifying global dominance." },
  ];

  const legends = [
    { name: "Alfredo Di Stéfano", role: "The Saeta Rubia", image: "/Images/the best club.jpg" },
    { name: "Cristiano Ronaldo", role: "Greatest Goalscorer", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" },
    { name: "Zinedine Zidane", role: "The Genius", image: "/Images/Santiago.webp" },
    { name: "Raúl González", role: "The Eternal Captain", image: "/Images/pirri.webp" },
  ];

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="Eternal Legacy" 
        subtitle="Hala Madrid y nada más. Since 1902, Real Madrid has redefined football history through excellence and ambition."
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
        category="Club Values & History"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
           {[
             { title: "Honor", icon: Shield, color: "text-rm-gold" },
             { title: "Ambition", icon: Zap, color: "text-rm-gold" },
             { title: "Excellence", icon: Star, color: "text-rm-gold" }
           ].map((v, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-card border border-border-subtle rounded-[40px] p-16 flex flex-col items-center text-center group hover:border-rm-gold/40 transition-all hover:shadow-premium"
             >
                <div className={`w-20 h-20 bg-background rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${v.color}`}>
                   <v.icon className="w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black uppercase italic tracking-tighter text-foreground mb-4">{v.title}</h3>
                <p className="text-foreground/40 text-sm font-medium italic leading-relaxed">The core DNA that has defined every generation of Real Madrid players.</p>
             </motion.div>
           ))}
        </div>

        {/* Philosophy Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-40">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 flex flex-col gap-8"
           >
              <div className="flex flex-col gap-2">
                 <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[10px] italic border-b border-rm-gold/30 pb-2 w-fit">The Creed</span>
                 <h2 className="text-5xl md:text-7xl font-black uppercase text-foreground italic tracking-tighter leading-none">NO LIMITS TO <br /> <span className="text-gold">EXCELLENCE</span></h2>
              </div>
              <p className="text-foreground/60 text-lg md:text-xl font-medium italic leading-relaxed">
                Real Madrid is not just a club, it's a global religion of sporting ambition. We don't just participate; we exist to lead and conquer the world of football with grace, style, and an unbreakable winning mentality.
              </p>
              <div className="flex gap-10 mt-4">
                 <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-rm-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Passion</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Landmark className="w-5 h-5 text-rm-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">History</span>
                 </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="flex-1 relative h-[500px] w-full rounded-[60px] overflow-hidden shadow-2xl skew-y-3 group"
           >
              <Image src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" alt="Victory" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-[0.4]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                 <h3 className="text-2xl font-black text-white italic uppercase tracking-[0.3em] text-center drop-shadow-lg scale-110">Winning is the Only <br /> <span className="text-gold">Language</span> We Speak</h3>
              </div>
           </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="flex flex-col gap-20 mb-40 relative">
           <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-border-subtle hidden lg:block" />
           <h2 className="text-4xl md:text-6xl font-black uppercase text-foreground italic tracking-tighter text-center">HISTORIC <span className="text-gold">MILESTONES</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-20">
              {milestones.map((m, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col gap-4 relative ${idx % 2 === 1 ? 'md:mt-24' : ''}`}
                >
                   <div className="text-7xl font-black italic text-gold/10 group-hover:text-gold transition-colors">{m.year}</div>
                   <div className="p-10 bg-card border border-border-subtle rounded-[40px] shadow-premium hover:border-rm-gold/40 transition-all">
                      <h4 className="text-2xl font-black uppercase italic tracking-tighter text-foreground mb-4">{m.title}</h4>
                      <p className="text-foreground/40 text-sm italic font-medium leading-relaxed">{m.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Legends Section */}
        <div className="flex flex-col gap-16 mb-20">
           <h2 className="text-4xl md:text-6xl font-black uppercase text-foreground italic tracking-tighter text-center">ETERNAL <span className="text-gold">LEGENDS</span></h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {legends.map((l, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-[450px] rounded-[50px] overflow-hidden shadow-premium border border-border-subtle group hover:border-rm-gold/40 transition-all"
                >
                   <Image src={l.image} alt={l.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-8 left-8 flex flex-col gap-1">
                      <span className="text-rm-gold text-[9px] font-black uppercase tracking-widest italic">{l.role}</span>
                      <h4 className="text-2xl font-black uppercase text-white italic tracking-tighter leading-none mt-1 group-hover:text-gold transition-colors">{l.name}</h4>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Museum CTA */}
        <motion.div 
           whileHover={{ scale: 1.01 }}
           className="w-full relative h-[400px] rounded-[70px] overflow-hidden group cursor-pointer shadow-premium flex flex-col items-center justify-center text-center p-12 border border-border-subtle mt-40"
        >
           <Image src="/Images/the best club.jpg" alt="Museum" fill className="object-cover brightness-[0.3] group-hover:scale-105 transition-transform duration-2000" />
           <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-5xl md:text-[6rem] font-black uppercase text-white tracking-tighter italic leading-none max-w-4xl drop-shadow-2xl">EXPERIENCE THE <span className="text-gold">HISTORY</span></h2>
              <button className="px-12 py-6 bg-rm-gold text-rm-blue-dark font-black uppercase text-sm tracking-widest rounded-full hover:bg-white transition-all transform hover:translate-y-[-4px] active:scale-95 shadow-2xl flex items-center gap-4">
                 Book Museum Tour <ArrowUpRight className="w-6 h-6" />
              </button>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
