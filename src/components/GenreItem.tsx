import type { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreItem({ genre, onSelectGenre, selectedGenre }: Props) {
  const isSelected = genre.id === selectedGenre?.id;
  
  return (
    <div 
      className={`group flex items-center gap-4 p-3 rounded-lg transition-all duration-200 cursor-pointer ${
        isSelected 
          ? "bg-primary hover:bg-primary-focus text-primary-content shadow-md" 
          : "hover:bg-base-200 dark:hover:bg-base-300"
      }`}
    >
      <div className={`relative flex-shrink-0 w-14 h-14 overflow-hidden rounded-xl ${
        isSelected ? "ring-2 ring-primary-content" : ""
      }`}>
        <img
          src={genre.image_background}
          alt={genre.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
            isSelected ? "scale-105" : "group-hover:scale-105"
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent ${
          isSelected ? "opacity-70" : "opacity-0 group-hover:opacity-100"
        } transition-opacity duration-300`} />
      </div>
      <div 
        className="flex-1 min-w-0 relative"
        onClick={() => onSelectGenre(genre)}
      >
        <h3 
          className={`text-lg font-semibold truncate transition-colors duration-200 ${
            isSelected 
              ? "text-primary-content" 
              : "text-gray-800 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary"
          }`}
          title={genre.name} // Shows full text on hover
        >
          {genre.name}
        </h3>
        {/* Tooltip for mobile/touch devices */}
        <div className="absolute inset-0 lg:hidden" title={genre.name}></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 transition-colors duration-200 ${
          isSelected 
            ? "text-primary-content" 
            : "text-gray-400 group-hover:text-primary dark:group-hover:text-primary"
        }`}
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