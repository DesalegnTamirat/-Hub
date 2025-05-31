import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface ParentPlatform {
  platform: {name: string}
}

export interface Game {
  id: number;
  name: string;
  background_image: string,
  rating: number,
  released: string,
  parent_platforms: ParentPlatform[]
}

interface GameResponse {
  count: number;
  results: Game[];
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) =>
        setError(err instanceof CanceledError ? "" : err.message)
      );

    return () => controller.abort();
  }, []);

  return { games, error };
}
