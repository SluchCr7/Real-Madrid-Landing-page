import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MatchList } from "@/components/MatchList";
import { NewsGrid } from "@/components/NewsGrid";
import { PlayerList } from "@/components/PlayerList";
import { Champions } from "@/components/Champions";
import { ClubNews } from "@/components/ClubNews";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full bg-background transition-colors duration-500 overflow-x-hidden selection:bg-rm-gold selection:text-white">
      {/* Dynamic Navbar */}
      <Navbar />

      {/* Hero Section: Premium, Parallax, High-quality imagery */}
      <Hero />

      {/* Match Center: Latest Fixtures & Live Results */}
      <MatchList />

      {/* News Grid: Masonry, Immersive storytelling */}
      <NewsGrid />

      {/* Squad: Interactive Player Cards & Animated Stats */}
      <PlayerList />

      {/* Trophies: The Legendary Trophy Room */}
      <Champions />

      {/* Club Context: History, Values & Bernabéu Tour */}
      <ClubNews />

      {/* Professional Footer: Standard Brand Experience */}
      <Footer />
    </main>
  );
}
