"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { History, Shield, Star, Award, Zap, Heart, Landmark, ArrowUpRight, Users, Trophy, MapPin, Globe, Clock, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  const trophyStats = [
    { name: "Champions League", count: "15", label: "Continental Dominance", icon: Trophy, color: "text-rm-gold" },
    { name: "La Liga Titles", count: "36", label: "National Supremacy", icon: Star, color: "text-rm-gold" },
    { name: "Copa del Rey", count: "20", label: "The King's Cup", icon: Award, color: "text-rm-gold" },
    { name: "Club World Cups", count: "8", label: "Global Champions", icon: Globe, color: "text-rm-gold" },
  ];

  const milestones = [
    { year: "1902", title: "The Foundation", desc: "March 6: Madrid Foot-ball Club is founded by Julian Palacios and the Padrós brothers." },
    { year: "1920", title: "Royal Decree", desc: "King Alfonso XIII grants the 'Real' title, adding the royal crown to the club's crest." },
    { year: "1929", title: "La Liga Debut", desc: "Real Madrid becomes a founding member of the Spanish National League." },
    { year: "1947", title: "A New Temple", desc: "Inauguration of the Nuevo Estadio Chamartín, later renamed Santiago Bernabéu." },
    { year: "1953", title: "The Golden Era", desc: "Signing of Alfredo Di Stéfano, the catalyst for five consecutive European Cups." },
    { year: "1960", title: "Intercontinental", desc: "The club wins the first-ever Intercontinental Cup, defeating Peñarol." },
    { year: "1998", title: "La Séptima", desc: "Ending a 32-year wait for the European Cup with victory in Amsterdam." },
    { year: "2000", title: "Fifa's Best", desc: "FIFA officially names Real Madrid as the 'Club of the Century'." },
    { year: "2009", title: "Galácticos 2.0", desc: "Return of Florentino Pérez and signing of Cristiano Ronaldo, Kaká, and Benzema." },
    { year: "2014", title: "La Décima", desc: "The legendary 92:48 header by Sergio Ramos leads to the 10th European title." },
    { year: "2018", title: "Three-Peat", desc: "First and only club to win three consecutive Champions Leagues in the modern era." },
    { year: "2024", title: "La Decimoquinta", desc: "Victory at Wembley secures the record-extending 15th European Cup." },
  ];

  const legends = [
    { name: "Alfredo Di Stéfano", role: "The Saeta Rubia", image: "/Images/the best club.jpg" },
    { name: "Cristiano Ronaldo", role: "CR7 Legend", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" },
    { name: "Zinedine Zidane", role: "The Maestro", image: "/Images/Santiago.webp" },
    { name: "Raúl González", role: "El Capitán", image: "/Images/pirri.webp" },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="Eternal Legacy" 
        subtitle="Hala Madrid y nada más. Since 1902, Real Madrid has redefined excellence, becoming the most successful club in football history."
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
        category="Institutional Profile"
      />

      {/* Institutional Overview */}
      <section className="py-24 px-4 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
           <motion.div {...fadeUp} className="lg:col-span-12 flex flex-col gap-4 text-center mb-10">
              <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[10px] italic">Institutional Pillars</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">THE <span className="text-gold">GREATEST</span> CLUB <br /> IN THE WORLD</h2>
           </motion.div>

           <div className="lg:col-span-7 flex flex-col gap-8">
              <p className="text-2xl md:text-3xl font-bold italic text-foreground tracking-tight leading-snug">
                Real Madrid Club de Fútbol is a professional football club based in Madrid, Spain. Founded on <span className="text-rm-gold">March 6, 1902</span>, it is one of the most widely supported teams in the world.
              </p>
              <p className="text-foreground/60 text-lg font-medium leading-relaxed italic">
                Unlike most European sporting entities, the club's members (socios) have owned and operated the club throughout its history. This unique structure preserves its identity and values: Commitment to winning, sportsmanship, and universal appeal.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-4">
                 <div className="flex flex-col gap-2 p-6 bg-card border border-border-subtle rounded-3xl group hover:border-rm-gold/40 transition-all">
                    <span className="text-rm-gold font-black uppercase text-[10px] tracking-widest">Headquarters</span>
                    <span className="text-xl font-bold text-foreground">Valdebebas, Madrid</span>
                 </div>
                 <div className="flex flex-col gap-2 p-6 bg-card border border-border-subtle rounded-3xl group hover:border-rm-gold/40 transition-all">
                    <span className="text-rm-gold font-black uppercase text-[10px] tracking-widest">Club Members</span>
                    <span className="text-xl font-bold text-foreground">90,000+ Socios</span>
                 </div>
              </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="lg:col-span-5 relative h-[500px] rounded-[50px] overflow-hidden group shadow-premium"
           >
              <Image src="/Images/Fans.webp" alt="Club Identity" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark/80 to-transparent p-12 flex flex-col justify-end">
                 <h4 className="text-3xl font-black uppercase text-white italic tracking-tighter leading-none">A Global <br /> <span className="text-gold">Philosophy</span></h4>
              </div>
           </motion.div>
        </div>

        {/* The Trophy Room / Data Grid */}
        <div className="mb-40">
           <div className="flex flex-col gap-4 mb-16 text-center">
              <span className="text-rm-gold font-black uppercase tracking-[0.4em] text-[10px] italic">Palmarés</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground italic">THE <span className="text-gold">HONOUR</span> ROLL</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trophyStats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border-subtle rounded-[40px] p-10 flex flex-col items-center text-center group hover:border-rm-gold/40 transition-all hover:shadow-premium"
                >
                    <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-rm-gold">
                       <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="text-6xl font-black text-foreground italic mb-2 tracking-tighter">{stat.count}</div>
                    <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground/80 mb-2">{stat.name}</h3>
                    <p className="text-foreground/40 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
           </div>
           
           {/* Detailed Trophy Table - Desktop Only */}
           <motion.div {...fadeUp} className="mt-12 overflow-hidden border border-border-subtle rounded-[40px] bg-card hidden md:block">
              <table className="w-full text-left">
                 <thead className="bg-foreground/5 uppercase font-black italic text-[10px] tracking-widest text-foreground/40">
                    <tr>
                       <th className="px-8 py-4">Trophy</th>
                       <th className="px-8 py-4 text-center">Count</th>
                       <th className="px-8 py-4">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-border-subtle">
                    {[
                      { name: "European Super Cups", count: "5", status: "Records Holder" },
                      { name: "UEFA Cups", count: "2", status: "Historical Winners" },
                      { name: "Spanish Super Cups", count: "13", status: "Recent Champions" },
                      { name: "Latin Cups", count: "2", status: "Historical Trophy" },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-foreground/[0.02] transition-colors">
                         <td className="px-8 py-6 font-black uppercase italic tracking-tighter text-foreground group-hover:text-rm-gold transition-colors">{row.name}</td>
                         <td className="px-8 py-6 text-2xl font-black text-center text-foreground italic group-hover:scale-110 transition-transform">{row.count}</td>
                         <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-foreground/40">{row.status}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </motion.div>
        </div>

        {/* Stadium & Tech Data Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-[600px] rounded-[60px] overflow-hidden group shadow-2xl"
           >
              <Image src="/Images/Santiago.webp" alt="Santiago Bernabéu" fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] brightness-50" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                 <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-rm-gold" />
                    <span className="text-xs font-black uppercase tracking-widest text-white/60">Chamartín District, Madrid</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black uppercase text-white italic tracking-tighter leading-none mb-4">SANTIAGO <br /> <span className="text-gold">BERNABÉU</span></h2>
                 <p className="text-white/60 text-sm font-medium italic leading-relaxed max-w-md">
                    The newly renovated stadium is a technological marvel, featuring a retractable roof, a unique 360-degree LED board, and an underground pitch greenhouse.
                 </p>
              </div>
           </motion.div>

           <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                 <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[10px] italic border-b border-rm-gold/30 pb-2 w-fit">Technical Specs</span>
                 <h3 className="text-4xl font-black uppercase text-foreground italic tracking-tighter">A TEMPLE OF <span className="text-gold">INNOVATION</span></h3>
              </div>
              
              <div className="flex flex-col gap-6">
                 {[
                   { label: "Capicity", value: "84,744", desc: "Seating capacity after 2024 renovation" },
                   { label: "Project Cost", value: "€1.1 Billion", desc: "Complete modernization and digital integration" },
                   { label: "Multipurpose", value: "365 days/year", desc: "Designed for football, concerts, and major events" },
                   { label: "Retractable Pitch", value: "6 Underground levels", desc: "Greenhouse technology to preserve grass quality" },
                 ].map((spec, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex items-center justify-between p-8 bg-card border border-border-subtle rounded-3xl hover:border-rm-gold/40 transition-all group"
                   >
                      <div className="flex flex-col gap-1">
                         <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{spec.label}</span>
                         <span className="text-foreground/60 text-xs italic font-medium">{spec.desc}</span>
                      </div>
                      <span className="text-2xl font-black italic uppercase text-foreground group-hover:text-rm-gold transition-colors">{spec.value}</span>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* Timeline - Full History */}
        <div className="flex flex-col gap-20 mb-40">
           <div className="text-center flex flex-col gap-4">
              <span className="text-rm-gold font-black uppercase tracking-[0.4em] text-[10px] italic">Our History</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase text-foreground italic tracking-tighter">HISTORIC <span className="text-gold">CHRONOLOGY</span></h2>
           </div>
           
           <div className="relative">
              <div className="absolute top-0 bottom-0 left-[21px] md:left-1/2 w-[2px] bg-border-active/20" />
              
              <div className="flex flex-col gap-12">
                 {milestones.map((m, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 relative ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                   >
                      <div className="flex-1 hidden md:block" />
                      
                      <div className="flex flex-col items-center justify-center relative z-10">
                         <div className="w-12 h-12 bg-background border-4 border-rm-gold rounded-full flex items-center justify-center shadow-lg">
                            <Clock className="w-4 h-4 text-rm-gold" />
                         </div>
                         <div className="absolute -top-10 text-3xl font-black italic text-rm-gold drop-shadow-sm">{m.year}</div>
                      </div>

                      <div className="flex-[1.5] w-full bg-card border border-border-subtle p-8 rounded-[40px] shadow-premium hover:border-rm-gold/40 transition-all group">
                         <div className="flex items-center gap-3 mb-3">
                            <span className="w-2 h-2 rounded-full bg-rm-gold" />
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-gold transition-colors">{m.title}</h4>
                         </div>
                         <p className="text-foreground/40 text-sm italic font-medium leading-relaxed">{m.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* Legends / Personalities */}
        <div className="flex flex-col gap-16 mb-40">
           <div className="flex justify-between items-end border-b border-border-subtle pb-10">
              <div className="flex flex-col gap-4">
                 <span className="text-rm-gold font-black uppercase tracking-[0.4em] text-[10px] italic">The Icons</span>
                 <h2 className="text-4xl md:text-7xl font-black uppercase text-foreground italic tracking-tighter">ETERNAL <span className="text-gold">LEGENDS</span></h2>
              </div>
              <p className="text-foreground/40 text-sm italic font-medium max-w-xs text-right hidden lg:block">The players who defined an era and became the standard for every player who wears the white shirt.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {legends.map((l, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-[500px] rounded-[50px] overflow-hidden shadow-premium border border-border-subtle group hover:border-rm-gold/40 transition-all cursor-pointer"
                >
                   <Image src={l.image} alt={l.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-10 left-10 flex flex-col gap-1">
                      <span className="text-rm-gold text-[10px] font-black uppercase tracking-[0.3em] italic mb-1">{l.role}</span>
                      <h4 className="text-3xl font-black uppercase text-white italic tracking-tighter leading-none group-hover:text-gold transition-colors">{l.name}</h4>
                   </div>
                   <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <ChevronRight className="w-6 h-6 text-white" />
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Final CTA / Institutional Link */}
        <motion.div 
           whileHover={{ scale: 1.01 }}
           className="w-full relative h-[450px] rounded-[80px] overflow-hidden group cursor-pointer shadow-premium flex flex-col items-center justify-center text-center p-12 border border-border-subtle"
        >
           <Image src="/Images/the best club.jpg" alt="Final Background" fill className="object-cover brightness-[0.25] group-hover:scale-105 transition-transform duration-[3000ms]" />
           <div className="relative z-10 flex flex-col items-center gap-10">
              <div className="flex flex-col gap-4">
                 <h2 className="text-5xl md:text-[7rem] font-black uppercase text-white tracking-tighter italic leading-none max-w-5xl drop-shadow-2xl">OWN THE <span className="text-gold">HISTORY</span></h2>
                 <p className="text-white/60 text-lg md:text-xl font-medium italic italic tracking-tight">Become part of the legend and explore the world's most trophy-laden museum.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                 <button className="px-12 py-6 bg-rm-gold text-rm-blue-dark font-black uppercase text-sm tracking-widest rounded-full hover:bg-white transition-all transform hover:translate-y-[-4px] active:scale-95 shadow-2xl flex items-center gap-4">
                    Book Museum Tour <ArrowUpRight className="w-6 h-6" />
                 </button>
                 <button className="px-12 py-6 border border-white/20 text-white font-black uppercase text-sm tracking-widest rounded-full hover:bg-white/10 transition-all transform hover:translate-y-[-4px] active:scale-95 flex items-center gap-4">
                    Member Info <Users className="w-6 h-6" />
                 </button>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
