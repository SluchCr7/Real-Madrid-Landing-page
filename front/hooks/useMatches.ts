import { useState, useEffect } from "react";
import axios from "axios";

// ===== Types =====
export interface MatchScore {
    home: number | null;
    away: number | null;
}

export interface MatchTeam {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export interface Competition {
    id: number;
    name: string;
    emblem: string;
    code?: string;
    type?: string;
}

export interface Referee {
    id: number;
    name: string;
    type: string;
    nationality?: string;
}

export interface Match {
    id: number;
    utcDate: string;
    status: string;
    matchday: number;
    homeTeam: MatchTeam;
    awayTeam: MatchTeam;
    score: {
        winner: string | null;
        duration: string;
        fullTime: MatchScore;
        halfTime: MatchScore;
    };
    competition: Competition;
    referees: Referee[];
}

// ===== Hook =====
const useMatches = () => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMatches = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<{ matches: Match[] }>(
                    "https://api.football-data.org/v4/teams/86/matches",
                    {
                        headers: {
                            "X-Auth-Token": process.env.NEXT_PUBLIC_API_TOKEN,
                        },
                    }
                );

                const apiMatches: Match[] = response.data.matches || [];

                // Optional: add computed fields (Result and formatted date)
                const formattedMatches = apiMatches.map((m) => ({
                    ...m,
                    referees: m.referees || [],
                    result:
                        m.score.winner === "HOME_TEAM"
                            ? "Win"
                            : m.score.winner === "AWAY_TEAM"
                                ? "Loss"
                                : "Draw",
                    localDate: new Date(m.utcDate).toLocaleDateString(undefined, {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    }),
                }));

                setMatches(formattedMatches);
            } catch (err: any) {
                console.error("Error fetching matches:", err);
                setError(err.response?.data?.message || err.message || "Failed to fetch matches.");
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    return { matches, loading, error };
};

export default useMatches;