import { useState, useEffect } from "react";
import axios from "axios";

export interface ApiSquadMember {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
    shirtNumber?: number;
}

export interface Coach {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string;
    nationality: string;
}

export interface Player {
    id: number;
    apiId?: number;
    name: string;
    number: number;
    image: string;
    country: string;
    Position: string;
    Age: number | string;
    nationality: string;
    Goals?: number;
    Assists?: number;
    Club?: string;
}

const useTeam = () => {
    const [team, setTeam] = useState<any>(null);
    const [squad, setSquad] = useState<Player[]>([]);
    const [coach, setCoach] = useState<Coach | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTeam = async () => {
            setLoading(true);
            setError(null);
            try {
                const [localRes, apiRes] = await Promise.all([
                    fetch("/data.json").then((res) => {
                        if (!res.ok) throw new Error("Failed to load local data");
                        return res.json() as Promise<Player[]>;
                    }),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/football/team`).catch((err) => {
                        console.warn("API restricted or failed, using pure local data fallback.", err);
                        return null;
                    })
                ]);

                const localPlayers = localRes;

                let combinedSquad = [...localPlayers];
                let apiTeam = null;
                let apiCoach = null;

                if (apiRes && apiRes.data) {
                    apiTeam = apiRes.data;
                    apiCoach = apiRes.data.coach;
                    const apiSquad: ApiSquadMember[] = apiRes.data.squad || [];

                    combinedSquad = localPlayers.map(lp => {
                        const matchedApi = apiSquad.find(ap =>
                            ap.shirtNumber === lp.number ||
                            ap.name.toLowerCase().includes(lp.name.split(" ").pop()?.toLowerCase() || "")
                        );

                        if (matchedApi) {
                            return {
                                ...lp,
                                apiId: matchedApi.id,
                                Age: calculateAge(matchedApi.dateOfBirth) || lp.Age,
                                number: matchedApi.shirtNumber || lp.number,
                                nationality: matchedApi.nationality || lp.nationality,
                                Position: translatePosition(matchedApi.position) || lp.Position
                            };
                        }
                        return lp;
                    });
                }

                setTeam(apiTeam);
                setSquad(combinedSquad);
                setCoach(apiCoach);
            } catch (err: any) {
                console.error("Error fetching team data:", err);
                setError(err.message || "Failed to fetch team data.");
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
    }, []);

    return { team, loading, error, squad, coach };
};

function calculateAge(dob: string) {
    if (!dob) return undefined;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function translatePosition(pos: string) {
    if (pos === "Defence") return "Defender";
    if (pos === "Offence") return "Forward";
    return pos;
}

export default useTeam;