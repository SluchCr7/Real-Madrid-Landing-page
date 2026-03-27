"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Trophy as TrophyIcon, Globe, Award, Shield, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

interface TrophyFull {
  id: number;
  title: string;
  image: string;
  count: number;
  years: string[];
  description: string;
  icon: any;
}

const majorTrophies: TrophyFull[] = [
  { 
    id: 1, 
    title: "UEFA Champions League", 
    image: "/Images/champion.svg", 
    count: 15, 
    years: ["1956", "1957", "1958", "1959", "1960", "1966", "1998", "2000", "2002", "2014", "2016", "2017", "2018", "2022", "2024"],
    description: "The most prestigious club competition in the world. Real Madrid's relationship with the European Cup is legendary, holding the record for the most titles won.",
    icon: TrophyIcon 
  },
  { 
    id: 2, 
    title: "La Liga EA Sports", 
    image: "/Images/Laliga.svg", 
    count: 36, 
    years: ["1932", "1933", "1954", "1955", "1957", "1958", "1961", "1962", "1963", "1964", "1965", "1967", "1968", "1969", "1972", "1975", "1976", "1978", "1979", "1980", "1986", "1987", "1988", "1989", "1990", "1995", "1997", "2001", "2003", "2007", "2008", "2012", "2017", "2020", "2022", "2024"],
    description: "The pinnacle of Spanish football. A testament to domestic dominance and consistency over decades of competition.",
    icon: Award 
  },
  { 
    id: 3, 
    title: "FIFA Club World Cup", 
    image: "/Images/World Cup.svg", 
    count: 8, 
    years: ["1960", "1998", "2002", "2014", "2016", "2017", "2018", "2022"],
    description: "Crowning the best club on the planet. Real Madrid has conquered the world more times than any other team in history.",
    icon: Globe 
  },
  { 
    id: 4, 
    title: "Copa del Rey", 
    image: "/Images/Copa de rey.svg", 
    count: 20, 
    years: ["1905", "1906", "1907", "1908", "1917", "1934", "1936", "1946", "1947", "1962", "1970", "1974", "1975", "1980", "1982", "1989", "1993", "2011", "2014", "2023"],
    description: "The historic Spanish cup competition. A journey through legendary matches and unforgettable final victories.",
    icon: Shield 
  }
];

export default function TrophiesPage() {
  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="The Honor Roll" 
        subtitle="A century of dominance, a legacy of glory. Discover the titles that have made Real Madrid the greatest club in history."
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
        category="Legends & Glory"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-32">
          {majorTrophies.map((trophy, idx) => (
            <motion.div
              key={trophy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}
            >
              {/* Trophy Visual */}
              <div className="flex-1 relative flex justify-center items-center">
                 <div className="absolute inset-0 gold-gradient opacity-5 blur-[100px] rounded-full scale-150" />
                 <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative w-64 h-96 md:w-80 md:h-[500px] group transition-transform duration-1000"
                 >
                    <Image 
                      src={trophy.image} 
                      alt={trophy.title} 
                      fill 
                      className="object-contain drop-shadow-2xl brightness-110 group-hover:brightness-125 transition-all"
                    />
                 </motion.div>
              </div>

              {/* Trophy Content */}
              <div className="flex-1 flex flex-col gap-8">
                 <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-rm-gold text-rm-blue-dark rounded-3xl flex items-center justify-center shadow-gold">
                       <trophy.icon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-rm-gold text-[10px] font-black uppercase tracking-[0.4em] italic mb-1">Official Honors</span>
                       <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-foreground leading-none">{trophy.title}</h2>
                    </div>
                 </div>

                 <div className="flex items-baseline gap-4 mt-4">
                    <span className="text-8xl md:text-[10rem] font-black italic text-gold leading-none">{trophy.count}</span>
                    <span className="text-xl font-black uppercase italic text-foreground/40 tracking-widest border-l border-border-subtle pl-6 h-fit py-2">Titles <br /> Won</span>
                 </div>

                 <p className="text-foreground/60 font-medium text-lg md:text-xl leading-relaxed italic max-w-xl">
                    {trophy.description}
                 </p>

                 <div className="flex flex-wrap gap-3 mt-4">
                    {trophy.years.map((year) => (
                      <span key={year} className="px-5 py-2 bg-card border border-border-subtle rounded-xl text-[10px] font-black uppercase tracking-widest text-foreground hover:border-rm-gold/40 hover:text-rm-gold transition-all cursor-default">
                        {year}
                      </span>
                    ))}
                 </div>

                 <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest italic text-rm-gold group mt-8">
                    View Match History <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Historic Milestone Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 w-full bg-rm-blue-dark rounded-[70px] overflow-hidden p-12 md:p-24 relative group border border-white/5"
        >
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center brightness-[0.2] transition-transform duration-1000 group-hover:scale-105" />
           <div className="relative z-10 flex flex-col items-center text-center gap-10">
              <Star className="w-12 h-12 text-rm-gold animate-pulse mb-4" />
              <h2 className="text-5xl md:text-[7rem] font-black uppercase italic tracking-tighter text-white leading-none max-w-5xl">Best Club of the <br /> <span className="text-gold">20th Century</span></h2>
              <p className="text-white/60 text-lg md:text-2xl font-medium max-w-2xl italic">Awarded by FIFA in 2000, confirming Real Madrid as the most successful and influential football club in history.</p>
              <div className="flex gap-10 mt-6">
                 <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-white italic">1902</span>
                    <span className="text-[10px] uppercase font-black text-rm-gold tracking-widest mt-1">Founded</span>
                 </div>
                 <div className="w-[1px] h-12 bg-white/10" />
                 <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-white italic">120+</span>
                    <span className="text-[10px] uppercase font-black text-rm-gold tracking-widest mt-1">Years</span>
                 </div>
                 <div className="w-[1px] h-12 bg-white/10" />
                 <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-white italic">100</span>
                    <span className="text-[10px] uppercase font-black text-rm-gold tracking-widest mt-1">Official Titles</span>
                 </div>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
