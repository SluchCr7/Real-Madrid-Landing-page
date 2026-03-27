"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MessageCircle, Share2, Bookmark, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  comments: number;
  description: string;
}

const newsArticles: NewsItem[] = [
  {
    id: 1,
    title: "All to play for at the Santiago Bernabéu after a tough game",
    image: "/Images/Real News One.webp",
    category: "Match Report",
    date: "2h ago",
    comments: 124,
    description: "Real Madrid showed resilience in a high-stakes encounter, setting up a thrilling return leg at the legendary Santiago Bernabéu stadium."
  },
  {
    id: 2,
    title: "Vini Jr., MVP: “Time for a magical night at home\"",
    image: "/Images/Vin new.webp",
    category: "Interview",
    date: "4h ago",
    comments: 89,
    description: "The Brazilian star expressed his confidence ahead of the crucial home tie, calling on the Madridistas to create an electric atmosphere."
  },
  {
    id: 3,
    title: "Kroos' dazzling assist for Vini Jr. to score",
    image: "/Images/Toni.webp",
    category: "Highlights",
    date: "5h ago",
    comments: 45,
    description: "A masterclass in vision and execution as Toni Kroos pinpointed a pass that unlocked the opposition defense for a spectacular opening goal."
  },
  {
    id: 4,
    title: "Kroos: “Home leg is the most important of the season”",
    image: "/Images/Toni2.webp",
    category: "Interview",
    date: "Yesterday",
    comments: 213,
    description: "The midfield maestro emphasized the importance of home advantage as the team prepares for the most defining moment of their European campaign."
  },
  {
    id: 5,
    title: "Rodrygo: “It's wide open for us back in our stadium”",
    image: "/Images/rodrigo.webp",
    category: "Club News",
    date: "Yesterday",
    comments: 156,
    description: "Rodrygo reflects on the team's performance and remains optimistic about their chances of progression in front of the home crowd."
  },
  {
    id: 6,
    title: "Rüdiger: \"A good result before the return leg\"",
    image: "/Images/rudiger.webp",
    category: "Match Report",
    date: "Yesterday",
    comments: 67,
    description: "The German defender praised the team's defensive solidity and remains focused on finishing the job in Madrid next week."
  },
  {
    id: 7,
    title: "Training Report: Team returns to Valdebebas",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
    category: "Training",
    date: "2 days ago",
    comments: 42,
    description: "Preparation continues at the Real Madrid City as Ancelotti puts the squad through their paces ahead of the upcoming weekend fixture."
  },
  {
    id: 8,
    title: "Official Announcement: Club Foundation Gala",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop",
    category: "Foundation",
    date: "3 days ago",
    comments: 12,
    description: "Real Madrid Foundation celebrates another year of social impact with a star-studded gala event at the Palacio de Cibeles."
  }
];

export default function NewsPage() {
  return (
    <div className="flex flex-col w-full bg-background transition-colors duration-500 min-h-screen">
      <PageHero 
        title="Inside Madrid" 
        subtitle="Stay updated with the latest news, exclusive interviews, and behind-the-scenes stories from the white house."
        backgroundImage="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
        category="Latest Updates"
      />

      <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-12">
          {newsArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col lg:flex-row gap-8 bg-card border border-border-subtle rounded-[50px] overflow-hidden hover:border-rm-gold/40 transition-all hover:shadow-premium p-6 md:p-10"
            >
              {/* Image Section */}
              <div className="w-full lg:w-[450px] h-[300px] relative rounded-[40px] overflow-hidden flex-shrink-0">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/20 italic">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between flex-grow py-4 md:px-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-6 text-[10px] text-foreground/40 font-black uppercase tracking-widest italic">
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-rm-gold" /> {article.date}</div>
                    <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-rm-gold" /> {article.comments} Comments</div>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black uppercase text-foreground tracking-tighter leading-[0.9] italic group-hover:text-gold transition-colors duration-300">
                    {article.title}
                  </h2>
                  
                  <p className="text-foreground/60 font-medium text-lg leading-relaxed max-w-2xl italic">
                    {article.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 pt-8 border-t border-border-subtle">
                  <button className="flex items-center gap-3 group/btn text-xs font-black uppercase tracking-[0.2em] italic text-rm-gold">
                    Read Full Story <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  <div className="flex items-center gap-6">
                    <button className="p-3 rounded-full bg-foreground/5 hover:bg-rm-gold transition-all text-foreground/40 hover:text-rm-blue-dark">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-3 rounded-full bg-foreground/5 hover:bg-rm-gold transition-all text-foreground/40 hover:text-rm-blue-dark">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-20">
          <button className="px-16 py-6 bg-foreground text-background font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-rm-gold hover:text-rm-blue-dark transition-all shadow-2xl shadow-foreground/20 hover:shadow-rm-gold/40 transform hover:translate-y-[-4px] active:scale-95 italic">
            Load More Stories
          </button>
        </div>
      </section>
    </div>
  );
}
