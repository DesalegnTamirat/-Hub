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
    <div className="pt-7">
      {isLoading && (
        <span className="loading loading-spinner loading-xl block mx-auto"></span>
      )}
      <div>
        {genres.map((genre) => (
          <GenreItem genre={genre} key={genre.id} onSelectGenre={onSelectGenre} selectedGenre={selectedGenre}/>
        ))}
      </div>
    </div>
  );
}
