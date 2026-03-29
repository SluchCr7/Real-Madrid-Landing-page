"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterest
} from "react-icons/fa";
import { RMLogo } from "./RMLogo";
import { Download, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const footerData = {
  Football: [
    { name: "First team", href: "/squad" },
    { name: "Matches", href: "/matches" },
    { name: "Academy", href: "#" },
    { name: "Woman football", href: "#" },
    { name: "Legends", href: "/legends" }
  ],
  Basketball: [
    { name: "First team", href: "/basketball" },
    { name: "Champions", href: "/basketball" },
    { name: "History", href: "/basketball" },
    { name: "Tickets", href: "#" }
  ],
  "The Club": [
    { name: "Values", href: "/about" },
    { name: "Honors", href: "/trophies" },
    { name: "History", href: "/about" },
    { name: "Fan Club", href: "#" },
    { name: "Bernabeu Stadium", href: "/stadium" },
    { name: "Contact", href: "/contact" }
  ],
  "News & Media": [
    { name: "Latest News", href: "/news" },
    { name: "RMTV live", href: "#" },
    { name: "Foundation", href: "#" },
    { name: "RM Play", href: "#" }
  ],
  Madridistas: [
    { name: "Hospitality", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Tour", href: "/stadium" },
    { name: "Tickets", href: "/matches" }
  ],
};
const sponsers = [
  [
    { id: 1, img: "/sponsers/adidas_gray1.svg" },
    { id: 2, img: "/sponsers/emirates_gray1.svg" },
  ],
  [
    { id: 1, img: "/sponsers/hp_gray2.svg" },
    { id: 2, img: "/sponsers/abbott_gray3.svg" },
    { id: 3, img: "/sponsers/adobe_gray4.svg" },
    { id: 4, img: "/sponsers/BMW_gray3.svg" },
    { id: 5, img: "/sponsers/canon_gray4.svg" },
    { id: 6, img: "/sponsers/cisco_gray4.svg" },
  ],
  [
    { id: 1, img: "/sponsers/corpay_gray5.svg" },
    { id: 2, img: "/sponsers/daktronics_gray4.svg" },
    { id: 3, img: "/sponsers/dubai_gra3.svg" },
    { id: 4, img: "/sponsers/ea-sports_gray3.svg" },
    { id: 5, img: "/sponsers/kress_black13.svg" },
    { id: 6, img: "/sponsers/linglong_gray4.svg" },
  ],
  [
    { id: 1, img: "/sponsers/LouisVuitton_gray3.svg" },
    { id: 2, img: "/sponsers/mahou_gray3.svg" },
    { id: 3, img: "/sponsers/Melitta_gray3.svg" },
    { id: 4, img: "/sponsers/nivea_gray3.svg" },
    { id: 5, img: "/sponsers/Roborock_gray.svg" },
    { id: 6, img: "/sponsers/Roborock_gray4.svg" },
  ],
  [
    { id: 1, img: "/sponsers/sanitas_gray5.svg" },
    { id: 2, img: "/sponsers/softtek_gray4.svg" },
    { id: 3, img: "/sponsers/solan_gray5.svg" },
  ]
];
export const Footer = () => {
  return (
    <footer className="w-full py-32 px-4 md:px-20 bg-background text-foreground border-t border-border-subtle transition-colors duration-500 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <RMLogo className="w-[800px] h-[800px] -mr-40 -mb-40" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 w-full">
          {Object.entries(footerData).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-8">
              <span className="text-[10px] font-black uppercase text-rm-gold tracking-[0.4em] italic flex items-center gap-2 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-rm-gold" />
                {category}
              </span>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm font-medium hover:text-rm-gold transition-all opacity-40 hover:opacity-100 italic tracking-wide flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Download Section - Premium Badge Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 p-12 bg-card border border-border-subtle rounded-[60px] shadow-premium">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-rm-gold mb-2">
              <Download className="w-6 h-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">The Mobile Experience</span>
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground italic leading-none">Official <span className="text-gold">Club App</span></h3>
            <p className="max-w-md opacity-50 text-sm font-medium leading-relaxed italic">Get exclusive content, match highlights, and live updates directly from the heart of Valdebebas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="group cursor-pointer hover:scale-105 transition-all active:scale-95 shadow-xl hover:shadow-gold/20 rounded-2xl overflow-hidden">
              <Image src="/Images/App+Store+Badge_en.svg" alt="App Store" width={180} height={60} className="object-contain" />
            </div>
            <div className="group cursor-pointer hover:scale-105 transition-all active:scale-95 shadow-xl hover:shadow-gold/20 rounded-2xl overflow-hidden">
              <Image src="/Images/Google+Play+Badge_en.svg" alt="Google Play" width={180} height={60} className="object-contain" />
            </div>
          </div>
        </div>
        {/* Sponsers */}
        <div className="flex flex-col justify-center items-center w-full gap-8">
          {sponsers.map((sponser, idx) => (
            <div key={idx} className="flex flex-wrap gap-8">
              {sponser.map((sponser) => (
                <div key={sponser.id} className="flex items-center gap-2">
                  <Image src={sponser.img} alt="Sponser" width={100} height={100} className="object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Brand & Social Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 pt-12 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
            <Link href="/" className="group flex items-center gap-6 cursor-pointer hover:scale-105 transition-all duration-500">
              <RMLogo className="w-20 h-20 text-rm-gold drop-shadow-lg" />
              <div className="flex flex-col -gap-1">
                <span className="text-3xl font-black uppercase tracking-tighter leading-none italic text-foreground">Real Madrid</span>
                <span className="text-[10px] uppercase tracking-[0.5em] text-foreground/40 font-black italic mt-1">Club de Fútbol</span>
              </div>
            </Link>

            <div className="hidden sm:block h-12 w-[1px] bg-border-subtle" />

            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-foreground/30 italic">
              <Globe className="w-4 h-4 text-rm-gold" /> Global HQ: Madrid, Spain
            </div>
          </div>

          <div className="flex gap-10">
            {[
              { icon: FaFacebook, label: "Facebook" },
              { icon: FaTwitter, label: "Twitter" },
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaYoutube, label: "YouTube" },
              { icon: FaLinkedin, label: "LinkedIn" },
              { icon: FaPinterest, label: "Pinterest" }
            ].map((social, idx) => (
              <a key={idx} href="#" aria-label={social.label} className="text-foreground/20 hover:text-rm-gold transition-all transform hover:scale-125 hover:-translate-y-2 text-2xl group flex flex-col items-center">
                <social.icon />
                <div className="h-1.5 w-1.5 rounded-full bg-rm-gold mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-8 opacity-40 text-[9px] font-black uppercase tracking-[0.3em] italic">
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies Policy</a>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-rm-gold" />
            © 2026 Real Madrid C.F. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

