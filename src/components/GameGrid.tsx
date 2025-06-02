import useGames from "../hooks/useGames";
import type { Genre } from "../hooks/useGenres";
import type { Platform } from "../hooks/usePlatforms";
import { sortGames } from "../services/sortingGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { Order } from "./SortSelector";

interface Props {
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
  selectedOrder: Order | null,
  ascendingOrdering: boolean
}

export default function GameGrid({selectedGenre, selectedPlatform, selectedOrder, ascendingOrdering}: Props) {
  const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform, ascendingOrdering ? selectedOrder : "-" + selectedOrder);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <p className="text-2xl text-error text-center uppercase">{error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-8 md:gap-5">
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