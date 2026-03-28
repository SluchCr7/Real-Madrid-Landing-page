import { useState, useEffect } from "react";
import axios from "axios";

// ===== Types =====
export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export interface TableRow {
    position: number;
    team: Team;
    playedGames: number;
    form: string;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

export interface Standing {
    stage: string;
    type: string;
    group: string | null;
    table: TableRow[];
}

export interface StandingsResponse {
    filters: any;
    competition: {
        id: number;
        name: string;
        code: string;
        type: string;
        emblem: string;
    };
    season: {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number;
        winner: any;
    };
    standings: Standing[];
}

// ===== Hook =====
const useStandings = (competition: string = "PD") => {
    const [standingsData, setStandingsData] = useState<StandingsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStandings = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<StandingsResponse>(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/football/standings/${competition}`
                );
                
                setStandingsData(response.data);
            } catch (err: any) {
                console.error(`Error fetching standings for ${competition}:`, err);
                setError(err.response?.data?.message || err.message || "Failed to fetch standings.");
            } finally {
                setLoading(false);
            }
        };

        if (competition) {
            fetchStandings();
        }
    }, [competition]);

    const allStandings: Standing[] = standingsData?.standings || [];

    return { standingsData, allStandings, loading, error };
};

export default useStandings;
