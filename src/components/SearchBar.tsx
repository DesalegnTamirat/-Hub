import { useRef, type FormEvent } from "react";
import { FiSearch } from "react-icons/fi";

export interface SearchProps {
  onSubmitKeyword: (e: FormEvent, searchKeyword: string | undefined) => void
}

export default function SearchBar({onSubmitKeyword}: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="relative w-64" onSubmit={(e) => onSubmitKeyword(e, inputRef.current?.value)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search games..."
        className="block w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      />
    </form>
  );
}
