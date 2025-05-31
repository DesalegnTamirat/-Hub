import useData from "../hooks/useData";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";

export interface Genre {
  id: number,
  name: string;
}

export default function GenreList() {
  const {data: genres, error, isLoading} = useGenres();

  return (
    <div className="pt-7">
      {error && <p className="text-lg text-error text-center uppercase">{error}</p>}
      {
        isLoading && <span className="loading loading-spinner loading-xl block mx-auto"></span>
      }
      {genres.map(genre => <li key={genre.id}>
         {genre.name}
      </li>)}
    </div>
  )
}
