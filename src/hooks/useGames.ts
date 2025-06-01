import useData from "./useData";
import type { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id}}, [selectedGenre?.id]); 

export default useGames;