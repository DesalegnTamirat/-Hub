import type { Genre } from "../hooks/useGenres";

export default function GenreItem({genre}: {genre: Genre}) {
  return (
    <div className="flex gap-2.5 items-center my-3.5f">
      <img src={genre.image_background} alt={genre.name} className="w-12 h-10 object-cover rounded-xl"/>
      <span className="text-xl">{genre.name}</span>
    </div>
  )
}
