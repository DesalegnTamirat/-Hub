import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      <p className="text-2xl text-error text-center uppercase">{error}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-6 md:gap-8 p-4 md:p-8">
        {games.map((game) => (
          <li key={game.id} className="w-full max-w-md">
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </>
  );
}
