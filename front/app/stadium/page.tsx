"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Info, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function StadiumPage() {
  const stats = [
    { label: "Inauguration", value: "1947", icon: Calendar },
    { label: "Capacity", value: "81,044", icon: Users },
    { label: "Location", value: "Madrid, Spain", icon: MapPin },
    { label: "Pitch", value: "Hybrid Grass", icon: Zap },
  ];

  const features = [
    {
      title: "Retractable Roof",
      description: "A state-of-the-art roof that opens or closes in just 15 minutes, allowing for matches in any weather conditions.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "360° Scoreboard",
      description: "A first-of-its-kind circular LED screen providing an immersive visual experience to every spectator in the arena.",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Retractable Pitch",
      description: "The field can be stored in an underground greenhouse, allowing the stadium to host concerts and major events year-round.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="Temple of Glory" 
        subtitle="The Santiago Bernabéu: A legendary arena transformed into the most modern stadium in the world."
        backgroundImage="/Images/Santiago.webp"
        category="Santiago Bernabéu"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border-subtle rounded-[40px] p-10 flex flex-col items-center text-center group hover:border-rm-gold/40 transition-all shadow-premium"
            >
              <div className="w-12 h-12 bg-rm-gold/10 text-rm-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40 italic mb-2">{stat.label}</span>
              <span className="text-3xl font-black italic uppercase text-foreground group-hover:text-gold transition-colors">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Narrative Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
               <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[10px] italic border-b border-rm-gold/30 pb-2 w-fit">Transformation</span>
               <h2 className="text-5xl md:text-7xl font-black uppercase text-foreground italic tracking-tighter leading-none">THE NEW <span className="text-gold">SANTIAGO</span> BERNABÉU</h2>
            </div>
            <p className="text-foreground/60 text-lg md:text-xl font-medium italic leading-relaxed">
              The renovation of the Bernabéu is far more than a facelift. It is a technological masterpiece designed to offer an unparalleled fan experience and create a 365-day-a-year destination in the heart of Madrid.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-6 bg-card border border-border-subtle rounded-3xl">
                 <ShieldCheck className="w-6 h-6 text-rm-gold flex-shrink-0" />
                 <div>
                    <h4 className="text-lg font-black uppercase italic text-foreground tracking-tighter">Iconic Architecture</h4>
                    <p className="text-foreground/40 text-sm italic mt-1 font-medium">The stadium's wrap-around steel skin creates a dynamic facade that reflects the sky and city lights.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-card border border-border-subtle rounded-3xl">
                 <Info className="w-6 h-6 text-rm-gold flex-shrink-0" />
                 <div>
                    <h4 className="text-lg font-black uppercase italic text-foreground tracking-tighter">Innovation Hub</h4>
                    <p className="text-foreground/40 text-sm italic mt-1 font-medium">Real Madrid's home integrates smart stadium technology and sustainability at its core.</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-2xl group border border-border-subtle"
          >
            <Image src="/Images/Santiago.webp" alt="Stadium Facade" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark/80 via-transparent to-transparent opacity-60 flex flex-col justify-end p-12">
               <h3 className="text-3xl font-black text-white italic uppercase tracking-widest drop-shadow-lg">A Madrid Landmark</h3>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-foreground italic tracking-tighter text-center">WORLD CLASS <span className="text-gold">FEATURES</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col gap-6"
              >
                <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden shadow-premium border border-border-subtle group-hover:border-rm-gold/40 transition-all">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
                <div className="flex flex-col gap-4 px-2">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm font-medium italic leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Virtual Tour Banner */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="mt-40 w-full relative h-[450px] rounded-[70px] overflow-hidden group cursor-pointer shadow-premium flex items-center justify-center text-center p-12"
        >
           <Image src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" alt="Virtual Tour" fill className="object-cover brightness-[0.3] group-hover:scale-105 transition-transform duration-2000" />
           <div className="relative z-10 flex flex-col items-center gap-8">
              <span className="text-rm-gold text-xs font-black uppercase tracking-[0.6em] italic drop-shadow-md underline underline-offset-8">Interactive Experience</span>
              <h2 className="text-5xl md:text-[7rem] font-black uppercase text-white tracking-tighter italic leading-none max-w-4xl drop-shadow-2xl">VIRTUAL <span className="text-gold">TOUR</span></h2>
              <button className="px-12 py-6 bg-white text-rm-blue-dark font-black uppercase text-sm tracking-widest rounded-full hover:bg-rm-gold transition-all flex items-center gap-4 transform hover:translate-y-[-4px] active:scale-95 shadow-2xl">
                 Step Inside the Arena <ArrowUpRight className="w-6 h-6" />
              </button>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
