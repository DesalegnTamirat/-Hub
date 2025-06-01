import type { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
}

export default function GenreItem({ genre, onSelectGenre }: Props) {
  return (
    <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-base-200 dark:hover:bg-base-300 transition-colors duration-200 cursor-pointer">
      <div className="relative flex-shrink-0 w-14 h-14 overflow-hidden rounded-xl">
        <img
          src={genre.image_background}
          alt={genre.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex-1 min-w-0" onClick={() => onSelectGenre(genre)}>
        <h3 className="text-lg font-semibold truncate text-gray-800 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">
          {genre.name}
        </h3>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
