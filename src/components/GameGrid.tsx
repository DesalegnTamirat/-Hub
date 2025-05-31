import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[]
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<GameResponse>("/games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
  });

  return (
    <>
    <p className="text-error text-center">{error}</p>
    <ul>
      {games?.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}