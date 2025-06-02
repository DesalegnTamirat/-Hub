import type { Order } from "../components/SortSelector";
import useData from "./useData";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";

interface ParentPlatform {
  platform: { name: string; slug: string };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  parent_platforms: ParentPlatform[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedOrder: string | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id, ordering: selectedOrder}}, [selectedGenre?.id, selectedPlatform?.id, selectedOrder]);

export default useGames;