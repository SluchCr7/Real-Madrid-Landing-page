import { Hero } from "@/components/Hero";
import { MatchList } from "@/components/MatchList";
import { NewsGrid } from "@/components/NewsGrid";
import { PlayerList } from "@/components/PlayerList";
import { Champions } from "@/components/Champions";
import { ClubNews } from "@/components/ClubNews";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
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
    </div>
  );
}

