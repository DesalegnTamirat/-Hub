import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";

export default function GenreList() {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <div className="pt-7">
      {error && (
        <p className="text-lg text-error text-center uppercase">{error}</p>
      )}
      {isLoading && (
        <span className="loading loading-spinner loading-xl block mx-auto"></span>
      )}
      <div>
        {genres.map((genre) => (
          <GenreItem genre={genre} key={genre.id}/>
        ))}
      </div>
    </div>
  );
}
