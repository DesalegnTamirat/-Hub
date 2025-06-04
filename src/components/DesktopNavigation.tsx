import SearchBar from "./SearchBar";
import type { SearchProps } from "./SearchBar";

export default function ({ onSubmitKeyword }: SearchProps) {
  return (
    <div className="hidden md:flex items-center gap-8">
      <SearchBar onSubmitKeyword={onSubmitKeyword} />
      <nav className="flex items-center gap-6">
        <a
          href="#"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
        >
          Games
        </a>
        <a
          href="#"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
        >
          Genres
        </a>
      </nav>
    </div>
  );
}
