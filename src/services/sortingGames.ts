import type { Order } from "../components/SortSelector";
import type { Game } from "../hooks/useGames";

export function sortGames(games: Game[], selectedOrder: Order) {
  return selectedOrder
    ? [...games].sort((game1, game2) =>
        selectedOrder === "name"
          ? game1[selectedOrder] > game2[selectedOrder]
            ? 1
            : -1
          : game1[selectedOrder] < game2[selectedOrder]
          ? 1
          : -1
      )
    : games;
}
