import getGenres from "../data/genres";
import { type Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const genres = getGenres();

  return (
    <div>
      <h1 className="text-4xl font-bold pl-3">Genres</h1>
      {genres.map((genre) => (
        <GenreItem
          genre={genre}
          key={genre.id}
          onSelectGenre={onSelectGenre}
          selectedGenre={selectedGenre}
        />
      ))}
    </div>
  );
}
