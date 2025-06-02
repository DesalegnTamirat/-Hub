import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

export type Order = "relevance" | "name" | "rating" | "released" | "metacritic";
interface Props {
  selectedOrder: Order;
  onSelectOrder: (order: Order) => void;
}

export default function SortSelector({ selectedOrder, onSelectOrder }: Props) {
  const orders: Order[] = [
    "relevance",
    "name",
    "rating",
    "released",
    "metacritic",
  ];
  const mapping = {
    relevance: "Relevance",
    name: "Name",
    rating: "Rating",
    released: "Date Released",
    metacritic: "Popularity",
  };
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
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleSelect = (order: Order) => {
    onSelectOrder(order);
    // Add small delay for visual feedback
    setTimeout(() => setOpen(false), 150);
  };

  return (
    <div ref={dropdownRef} className="relative mb-4">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-primary px-4 py-2 gap-2 shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
        onMouseDown={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        {selectedOrder ? mapping[selectedOrder] : "Relevance"}
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
          {orders.map((order) => (
            <li key={order} onMouseDown={() => handleSelect(order)}>
              <button className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-content rounded-md transition-colors w-full text-left active:scale-95">
                {mapping[order]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
