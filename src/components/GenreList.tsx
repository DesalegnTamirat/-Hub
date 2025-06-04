import useGenres, { type Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

interface Props {
  onSelectGenre: (genre: Genre) => void,
  selectedGenre: Genre | null
}

export default function GenreList({onSelectGenre, selectedGenre}: Props) {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return;
  
  return (
    <div>
      {isLoading && (
        <span className="loading loading-spinner loading-xl block mx-auto"></span>
      )}
      <div>
        <h1 className="text-4xl font-bold pl-3">Genres</h1>
        {genres.map((genre) => (
          <GenreItem genre={genre} key={genre.id} onSelectGenre={onSelectGenre} selectedGenre={selectedGenre}/>
        ))}
      </div>
    </div>
  );
}
