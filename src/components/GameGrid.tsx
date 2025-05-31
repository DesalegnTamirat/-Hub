import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <p className="text-2xl text-error text-center uppercase">{error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-6 md:gap-8 p-4 md:p-8">
        {isLoading
          ? skeletons.map((skeleton) => (
              <li key={skeleton} className="w-full max-w-md">
                <GameCardSkeleton />
              </li>
            ))
          : games.map((game) => (
              <li key={game.id} className="w-full max-w-md">
                <GameCard game={game} />
              </li>
            ))}
      </ul>
    </>
  );
}