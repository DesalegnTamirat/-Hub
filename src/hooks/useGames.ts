import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
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
      .get<GameResponse>("/game", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) =>
        setError(err instanceof CanceledError ? "" : err.message)
      );

    return () => controller.abort();
  }, []);

  return { games, error };
}
