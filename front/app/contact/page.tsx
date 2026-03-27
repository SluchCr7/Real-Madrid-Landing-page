"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Globe, Clock, CheckCircle } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    setIsSubmitted(true);
    setTimeout(() => {
       setIsSubmitted(false);
       setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    { label: "Global HQ", value: "Av. de Concha Espina, 1, 28036 Madrid, Spain", icon: MapPin },
    { label: "Reach Out", value: "+34 91 101 1902", icon: Phone },
    { label: "Direct Mail", value: "contact@realmadrid.com", icon: Mail },
    { label: "Office Hours", value: "Mon-Sat: 09:00 - 20:00", icon: Clock },
  ];

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="Get in Touch" 
        subtitle="Connected with the world. Whether you're a fan, a partner, or a visitor, we are here to assist you."
        backgroundImage="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
        category="Contact & Support"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4">
               <span className="text-rm-gold font-black uppercase tracking-[0.5em] text-[10px] italic underline underline-offset-8">Information Center</span>
               <h2 className="text-5xl md:text-7xl font-black uppercase text-foreground italic tracking-tighter leading-none">THE HEART OF <br /> <span className="text-gold">MADRID</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {contactInfo.map((info, idx) => (
                 <div key={idx} className="flex flex-col gap-4 p-8 bg-card border border-border-subtle rounded-[40px] hover:border-rm-gold/40 transition-all group">
                    <div className="w-12 h-12 bg-rm-gold/10 text-rm-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                       <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase font-black tracking-widest text-foreground/40 italic">{info.label}</span>
                       <span className="text-sm font-black italic mt-1 leading-relaxed">{info.value}</span>
                    </div>
                 </div>
               ))}
            </div>

            {/* Simulated Map Placeholder */}
            <div className="w-full h-[400px] rounded-[50px] overflow-hidden border border-border-subtle relative group cursor-pointer shadow-premium">
               <div className="absolute inset-0 bg-rm-blue/10 grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-full object-cover" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark/80 via-transparent to-transparent flex flex-col justify-end p-12">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-rm-gold rounded-full flex items-center justify-center text-rm-blue-dark animate-bounce">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div className="flex flex-col">
                        <h4 className="text-xl font-black uppercase italic text-white tracking-tighter drop-shadow-lg">Visit Us</h4>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Madrid, Spain</span>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border-subtle rounded-[60px] p-8 md:p-16 shadow-premium relative overflow-hidden flex flex-col items-center"
          >
            {/* Form Title & Description */}
            <div className="flex flex-col items-center text-center gap-6 mb-12">
               <div className="w-16 h-1 w-20 bg-rm-gold/30 rounded-full" />
               <h3 className="text-4xl md:text-6xl font-black uppercase italic text-foreground tracking-tighter">SEND A <span className="text-gold">MESSAGE</span></h3>
               <p className="max-w-md text-foreground/40 text-[11px] font-black uppercase tracking-widest italic leading-relaxed">Fill in the details below and our management team will reach out to you as soon as possible.</p>
            </div>

            {!isSubmitted ? (
               <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase font-black tracking-[0.3em] text-foreground/40 italic ml-4">Full Name</label>
                        <input 
                           type="text" required placeholder="White Legend" 
                           className="w-full bg-background border border-border-subtle rounded-[50px] p-6 focus:ring-2 focus:ring-rm-gold outline-none text-sm transition-all italic hover:border-rm-gold/40"
                           value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase font-black tracking-[0.3em] text-foreground/40 italic ml-4">Email Address</label>
                        <input 
                           type="email" required placeholder="fan@madrid.com" 
                           className="w-full bg-background border border-border-subtle rounded-[50px] p-6 focus:ring-2 focus:ring-rm-gold outline-none text-sm transition-all italic hover:border-rm-gold/40"
                           value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                     </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-black tracking-[0.3em] text-foreground/40 italic ml-4">Subject</label>
                     <input 
                        type="text" required placeholder="How can we help you?" 
                        className="w-full bg-background border border-border-subtle rounded-[30px] p-6 focus:ring-2 focus:ring-rm-gold outline-none text-sm transition-all italic hover:border-rm-gold/40"
                        value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                     />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase font-black tracking-[0.3em] text-foreground/40 italic ml-4">Message</label>
                     <textarea 
                        required placeholder="Your message here..." rows={6} 
                        className="w-full bg-background border border-border-subtle rounded-[40px] p-8 focus:ring-2 focus:ring-rm-gold outline-none text-sm transition-all italic resize-none hover:border-rm-gold/40"
                        value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                     />
                  </div>

                  <button className="w-full py-8 gold-gradient text-rm-blue-dark font-black uppercase text-xs tracking-[0.4em] rounded-[100px] hover:scale-[1.02] transition-all transform active:scale-95 shadow-xl flex items-center justify-center gap-4 italic mt-4 group">
                     Transmit Intelligence <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </form>
            ) : (
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 gap-8"
               >
                  <div className="w-32 h-32 bg-rm-gold/10 text-rm-gold rounded-full flex items-center justify-center shadow-gold">
                     <CheckCircle className="w-16 h-16" />
                  </div>
                  <h3 className="text-4xl font-black uppercase text-foreground italic leading-none">MESSAGE <span className="text-gold">SENT</span></h3>
                  <p className="text-foreground/40 text-sm font-black uppercase tracking-widest max-w-xs italic">Thank you for your transmission. Hala Madrid!</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black uppercase tracking-widest text-rm-gold italic underline underline-offset-8 mt-10">Send Another Message</button>
               </motion.div>
            )}

            {/* Decorative background logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none w-full h-full p-20">
               {/* Note: I'm not using the RMLogo component here directly due to complexity in the SVG, but a simple SVG would work */}
               <svg viewBox="0 0 24 24" className="w-full h-full fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
            </div>
          </motion.div>
        </div>

        {/* Global Supporter Network */}
        <div className="mt-40 flex flex-col items-center gap-16">
           <h2 className="text-4xl md:text-5xl font-black uppercase text-foreground italic tracking-tighter text-center">GLOBAL <span className="text-gold">PRESENCE</span></h2>
           <div className="flex flex-wrap justify-center gap-10">
              {["Palo Alto", "New York", "London", "Tokyo", "Dubai", "Madrid"].map((city) => (
                <div key={city} className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="w-2 h-2 rounded-full bg-rm-gold/20 group-hover:bg-rm-gold transition-colors group-hover:scale-150 transition-transform" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 group-hover:text-foreground transition-all italic">{city}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
