import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

export type Order = "name" | "released" | "rating" | "metacritic";
interface Props {
  ascendingOrdering: boolean;
  onAscendingOrdering: (isAscending: boolean) => void;
}

export default function SortOrderingSelector({ ascendingOrdering, onAscendingOrdering }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    // Add slight delay to allow for click propagation
    const timer = setTimeout(() => {
      if (open) {
        document.addEventListener("click", handleClickOutside);
      }
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleSelect = (isAscending: boolean) => {
    onAscendingOrdering(isAscending);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative mb-4">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-primary px-4 py-2 gap-2 shadow-md hover:shadow-lg transition-all flex items-center"
        onMouseDown={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        {ascendingOrdering ? "Ascending" : "Descending"}
        <BiChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <ul
          className="absolute top-full left-0 mt-1 p-2 shadow-lg bg-base-100 rounded-box w-56 z-10 border border-base-200"
          // Prevent immediate closing when clicking inside dropdown
          onMouseDown={(e) => e.stopPropagation()}
        >
          <li onMouseDown={() => handleSelect(true)}>
              <button className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-content rounded-md transition-colors w-full text-left active:scale-95">
                Ascending
              </button>
            </li>
          <li onMouseDown={() => handleSelect(false)}>
              <button className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-content rounded-md transition-colors w-full text-left active:scale-95">
                Descending
              </button>
            </li>
        </ul>
      )}
    </div>
  );
}
