"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Star, 
  Award, 
  Calendar, 
  Users, 
  Goal, 
  Search, 
  ChevronRight, 
  Flag, 
  History,
  ShieldCheck,
  Zap
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

const legends = [
  {
    id: "di-stefano",
    name: "Alfredo Di Stéfano",
    nickname: "La Saeta Rubia",
    position: "Forward",
    nationality: "Argentina / Spain",
    years: "1953–1964",
    apps: 396,
    goals: 308,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Alfredo_Di_Stefano.jpg",
    bio: "The most influential player in Real Madrid's history. Di Stéfano led the club to five consecutive European Cups, redefining the game with his total football approach and relentless leadership.",
    achievements: ["5 European Cups", "8 La Liga Titles", "2 Ballon d'Or"],
    category: "Forwards"
  },
  {
    id: "cristiano-ronaldo",
    name: "Cristiano Ronaldo",
    nickname: "CR7",
    position: "Forward",
    nationality: "Portugal",
    years: "2009–2018",
    apps: 438,
    goals: 450,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_Real_Madrid_2015.jpg",
    bio: "Real Madrid's all-time leading goalscorer. A phenomenon of athleticism and ambition, Ronaldo averaged more than a goal per game, securing four Champions League titles in a legendary era.",
    achievements: ["4 Champions Leagues", "3 Club World Cups", "4 Ballon d'Or (at RM)"],
    category: "Forwards"
  },
  {
    id: "zinedine-zidane",
    name: "Zinedine Zidane",
    nickname: "Zizou",
    position: "Midfielder",
    nationality: "France",
    years: "2001–2006",
    apps: 227,
    goals: 49,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Zinedine_Zidane_2002.jpg",
    bio: "The embodiment of elegance and technical perfection. His legendary volley in the 2002 Glasgow final remains one of the greatest moments in football history.",
    achievements: ["1 Champions League", "1 La Liga", "FIFA World Player of the Year"],
    category: "Midfielders"
  },
  {
    id: "raul-gonzalez",
    name: "Raúl González",
    nickname: "El Capitán",
    position: "Forward",
    nationality: "Spain",
    years: "1994–2010",
    apps: 741,
    goals: 323,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Raul_Gonzalez_Blanco_01.jpg",
    bio: "An eternal symbol of Real Madrid's values. Raúl rose from the academy to become the club's record appearance holder and a clinical striker who always delivered in big moments.",
    achievements: ["3 Champions Leagues", "6 La Liga Titles", "2 Intercontinental Cups"],
    category: "Forwards"
  },
  {
    id: "iker-casillas",
    name: "Iker Casillas",
    nickname: "San Iker",
    position: "Goalkeeper",
    nationality: "Spain",
    years: "1999–2015",
    apps: 725,
    goals: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Iker_Casillas_2011.jpg",
    bio: "Arguably the greatest goalkeeper in history. A miracle-worker between the posts, Casillas captained both club and country to historic heights, earning the devotion of Madridistas.",
    achievements: ["3 Champions Leagues", "5 La Liga Titles", "World's Best Goalkeeper x5"],
    category: "Goalkeepers"
  },
  {
    id: "paco-gento",
    name: "Francisco Gento",
    nickname: "The Galician Wind",
    position: "Forward",
    nationality: "Spain",
    years: "1953–1971",
    apps: 601,
    goals: 182,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Francisco_Gento_1961.jpg",
    bio: "The only player in football history to win six European Cups. A left-winger of incredible speed and longevity, Gento was the backbone of the legendary 50s and 60s era.",
    achievements: ["6 European Cups", "12 La Liga Titles", "1 Intercontinental Cup"],
    category: "Forwards"
  },
  {
    id: "sergio-ramos",
    name: "Sergio Ramos",
    nickname: "The Pharaoh",
    position: "Defender",
    nationality: "Spain",
    years: "2005–2021",
    apps: 671,
    goals: 101,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Sergio_Ramos_2017.jpg",
    bio: "A legendary captain and a born winner. Famously scored the 92:48 header that led to La Décima, Ramos was a defensive titan with the heart of a striker.",
    achievements: ["4 Champions Leagues", "5 La Liga Titles", "4 Club World Cups"],
    category: "Defenders"
  },
  {
    id: "roberto-carlos",
    name: "Roberto Carlos",
    nickname: "The Bullet Man",
    position: "Defender",
    nationality: "Brazil",
    years: "1996–2007",
    apps: 527,
    goals: 69,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Roberto_Carlos_Real_Madrid.jpg",
    bio: "The left-back who redefined the position. Known for his explosive speed and thunderous free-kicks, Roberto Carlos was a key pillar of the 'Galácticos' era.",
    achievements: ["3 Champions Leagues", "4 La Liga Titles", "2 Intercontinental Cups"],
    category: "Defenders"
  },
  {
    id: "marcelo",
    name: "Marcelo Vieira",
    nickname: "The Magician",
    position: "Defender",
    nationality: "Brazil",
    years: "2007–2022",
    apps: 546,
    goals: 38,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Marcelo_Real_Madrid_2018.jpg",
    bio: "The most decorated player in Real Madrid's history. Marcelo brought joy and unparalleled technique to the left flank for over a decade, captaining the side to La Decimocuarta.",
    achievements: ["5 Champions Leagues", "6 La Liga Titles", "25 Total Trophies"],
    category: "Defenders"
  },
  {
    id: "toni-kroos",
    name: "Toni Kroos",
    nickname: "The Sniper",
    position: "Midfielder",
    nationality: "Germany",
    years: "2014–2024",
    apps: 465,
    goals: 28,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Toni_Kroos_Real_Madrid_2018.jpg",
    bio: "The definition of precision. Kroos dictated Real Madrid's midfield for a decade with metronomic passing, retiring at the top after winning his sixth Champions League in 2024.",
    achievements: ["5 Champions Leagues", "4 La Liga Titles", "5 Club World Cups"],
    category: "Midfielders"
  },
  {
    id: "luka-modric",
    name: "Luka Modrić",
    nickname: "The Maestro",
    position: "Midfielder",
    nationality: "Croatia",
    years: "2012–Present",
    apps: 540,
    goals: 39,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Luka_Modric_Real_Madrid_2018.jpg",
    bio: "The ageless artist of the midfield. Modrić has dictated the tempo of Real Madrid's greatest modern successes, defying logic with his longevity and technical brilliance.",
    achievements: ["6 Champions Leagues", "4 La Liga Titles", "2018 Ballon d'Or"],
    category: "Midfielders"
  },
  {
    id: "karim-benzema",
    name: "Karim Benzema",
    nickname: "KB9",
    position: "Forward",
    nationality: "France",
    years: "2009–2023",
    apps: 648,
    goals: 354,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Karim_Benzema_Real_Madrid_2018.jpg",
    bio: "A master of technique and link-up play. Benzema transitioned from a selfless teammate to a clinical leader, captaining the club to its 14th Champions League and winning the Ballon d'Or.",
    achievements: ["5 Champions Leagues", "4 La Liga Titles", "2022 Ballon d'Or"],
    category: "Forwards"
  },
  {
    id: "ronaldo-nazario",
    name: "Ronaldo Nazário",
    nickname: "O Fenômeno",
    position: "Forward",
    nationality: "Brazil",
    years: "2002–2007",
    apps: 177,
    goals: 104,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Ronaldo_Nazario_2005.jpg",
    bio: "The greatest pure striker of his generation. Ronaldo combined frightening pace, power, and finishing, becoming a central figure of the first 'Galácticos' era.",
    achievements: ["2 La Liga Titles", "1 Intercontinental Cup", "2 Ballon d'Or"],
    category: "Forwards"
  },
  {
    id: "gareth-bale",
    name: "Gareth Bale",
    nickname: "The Welsh Dragon",
    position: "Forward",
    nationality: "Wales",
    years: "2013–2022",
    apps: 258,
    goals: 106,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Gareth_Bale_Real_Madrid_2018.jpg",
    bio: "The man for the biggest moments. Bale scored legendary goals in the 2014 and 2018 Champions League finals, defining a golden era with his incredible pace and power.",
    achievements: ["5 Champions Leagues", "3 La Liga Titles", "4 Club World Cups"],
    category: "Forwards"
  },
  {
    id: "ferenc-puskas",
    name: "Ferenc Puskás",
    nickname: "Pancho",
    position: "Forward",
    nationality: "Hungary",
    years: "1958–1966",
    apps: 262,
    goals: 242,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ferenc_Pusk%C3%A1s.JPG/800px-Ferenc_Pusk%C3%A1s.JPG",
    bio: "Possessed perhaps the greatest left foot in football history. Puskás arrived late in his career but became a goal-scoring machine, forming a lethal duo with Di Stéfano.",
    achievements: ["3 European Cups", "5 La Liga Titles", "4 Pichichi Trophies"],
    category: "Forwards"
  },
  {
    id: "fernando-hierro",
    name: "Fernando Hierro",
    nickname: "The Captain",
    position: "Defender",
    nationality: "Spain",
    years: "1989–2003",
    apps: 601,
    goals: 127,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fernando_Hierro_2014.jpg",
    bio: "A defender with the goal-scoring record of a striker. Hierro was the rock upon which Real Madrid's return to European glory was built in the late 90s.",
    achievements: ["3 Champions Leagues", "5 La Liga Titles", "2 Intercontinental Cups"],
    category: "Defenders"
  }
];

const eras = [
  { year: "1950s-60s", title: "The Golden Era", desc: "Five consecutive European Cups led by Di Stéfano and Puskás." },
  { year: "1980s", title: "La Quinta del Buitre", desc: "Dominance in Spain led by Emilio Butragueño." },
  { year: "2000s", title: "The Galácticos", desc: "Zidane, Ronaldo, and Figo bring artistic brilliance to Madrid." },
  { year: "2010s", title: "The Four-Peat Era", desc: "Cristiano Ronaldo and the historic three-in-a-row Champions Leagues." },
  { year: "2020s", title: "Eternal Resurgence", desc: "The double in 2022 and the 15th title in 2024." }
];

export default function LegendsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredLegends = activeFilter === "All" 
    ? legends 
    : legends.filter(l => l.category === activeFilter);

  const categories = ["All", "Goalkeepers", "Defenders", "Midfielders", "Forwards"];

  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="Real Madrid Legends" 
        subtitle="The greatest players in history who wore the white shirt and conquered the world."
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/d/de/Santiago_Bernabeu_Stadium_-_Noche.jpg"
        category="Hall of Fame"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full text-foreground">
        {/* Filters and Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
              THE <span className="text-gold">IMMORTALS</span>
            </h2>
            <p className="text-foreground/60 font-medium italic mt-2">Filter by field position to explore the heritage</p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                  activeFilter === cat 
                    ? "bg-rm-gold border-rm-gold text-white shadow-gold" 
                    : "border-border-subtle text-foreground/40 hover:border-rm-gold/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Legend Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredLegends.map((legend, idx) => (
              <motion.div
                key={legend.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative h-[600px] rounded-[40px] overflow-hidden bg-card border border-border-subtle hover:border-rm-gold/40 transition-all duration-700 shadow-premium"
              >
                {/* Image Layer */}
                <div className="absolute inset-0">
                  <Image 
                    src={legend.image} 
                    alt={legend.name} 
                    fill 
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rm-blue-dark via-rm-blue-dark/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-700" />
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex flex-col gap-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                    <div className="flex items-center gap-2">
                       <span className="px-3 py-1 bg-rm-gold/20 text-rm-gold text-[10px] font-black uppercase tracking-widest rounded-full border border-rm-gold/30">
                         {legend.position}
                       </span>
                       <span className="flex items-center gap-1 text-[10px] text-white/40 font-black uppercase tracking-widest">
                         <Flag className="w-3 h-3" /> {legend.nationality}
                       </span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white leading-none">
                        {legend.name}
                      </h3>
                      <span className="text-rm-gold font-black uppercase text-[10px] tracking-[0.4em] italic mt-1">
                        {legend.nickname}
                      </span>
                    </div>

                    <p className="text-white/60 text-xs font-medium italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {legend.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                          <History className="w-3 h-3 text-rm-gold" /> Tenure
                        </span>
                        <span className="text-white text-sm font-black italic">{legend.years}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                          <Zap className="w-3 h-3 text-rm-gold" /> Legacy
                        </span>
                        <span className="text-white text-sm font-black italic">{legend.apps} Games</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {legend.achievements.slice(0, 2).map((ach, i) => (
                        <div key={i} className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                          <Trophy className="w-3 h-3 text-rm-gold" />
                          <span className="text-white/80 text-[10px] font-bold italic">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glassy Overlay Shine */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent group-hover:left-[100%] transition-all duration-[2000ms] skew-x-12" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Top Achievements Section */}
        <div className="mt-40">
           <div className="flex flex-col items-center text-center gap-4 mb-20">
             <span className="text-rm-gold font-black uppercase tracking-[0.6em] text-[10px] italic">Global Supremacy</span>
             <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
               THE <span className="text-gold">CABINET</span> OF KINGS
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Trophy, count: "15", label: "European Cups", color: "text-rm-gold" },
               { icon: Star, count: "36", label: "La Liga Titles", color: "text-white" },
               { icon: Award, count: "20", label: "Copa del Rey", color: "text-rm-gold" },
               { icon: Goal, count: "135", label: "Total Silverware", color: "text-white" }
             ].map((stat, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-10 rounded-[40px] bg-card border border-border-subtle flex flex-col items-center text-center group hover:border-rm-gold/40 transition-all hover:shadow-premium"
               >
                 <div className="w-16 h-16 rounded-2xl bg-rm-blue/10 flex items-center justify-center mb-6 text-rm-gold group-hover:scale-110 transition-transform">
                   <stat.icon className="w-8 h-8" />
                 </div>
                 <span className="text-6xl font-black italic tracking-tighter text-foreground mb-2">{stat.count}</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">{stat.label}</span>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-40 pb-20">
          <div className="flex flex-col gap-4 mb-20 text-center">
             <span className="text-rm-gold font-black uppercase tracking-[0.6em] text-[10px] italic">Historical Chronology</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
               ERAS OF <span className="text-gold">GLORY</span>
             </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border-subtle md:translate-x-[-0.5px]" />

            <div className="space-y-12">
              {eras.map((era, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 w-full md:text-right hidden md:block">
                    {i % 2 === 1 && (
                      <div className="pr-12">
                        <span className="text-6xl font-black italic text-foreground/5">{era.year}</span>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 w-10 h-10 rounded-full bg-background border-4 border-rm-gold flex items-center justify-center shadow-gold">
                    <ShieldCheck className="w-4 h-4 text-rm-gold" />
                  </div>

                  <div className="flex-1 w-full text-left">
                    <div className={`md:max-w-md p-8 rounded-3xl bg-card border border-border-subtle group hover:border-rm-gold/40 transition-all ${
                      i % 2 === 0 ? "md:ml-12" : "md:mr-12 md:text-right"
                    }`}>
                      <span className="text-rm-gold text-[10px] font-black uppercase tracking-widest">{era.year}</span>
                      <h4 className="text-2xl font-black uppercase italic tracking-tight text-foreground mt-2 mb-3">{era.title}</h4>
                      <p className="text-foreground/60 text-sm italic font-medium leading-relaxed">{era.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 relative rounded-[50px] overflow-hidden bg-rm-blue-dark py-24 px-8 text-center flex flex-col items-center gap-8"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/Santiago_Bernabeu_Stadium_-_Noche.jpg" 
              alt="Background" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="relative z-10 flex flex-col gap-4">
            <h2 className="text-4xl md:text-7xl font-black uppercase italic text-white tracking-tighter leading-none">
              THE STORY <span className="text-gold">NEVER</span> ENDS
            </h2>
            <p className="max-w-2xl text-white/50 text-base md:text-lg font-medium italic">Join the club, become a socio, and witness the next chapter of greatness at the Santiago Bernabéu.</p>
          </div>
          <button className="relative px-12 py-5 bg-rm-gold text-white font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-gold flex items-center gap-4 group overflow-hidden">
            <span className="relative z-10">Explore Club Membership</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
