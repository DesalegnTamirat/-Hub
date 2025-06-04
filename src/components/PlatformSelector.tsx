import { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import usePlatform, { type Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

export default function PlatformSelector({
  selectedPlatform,
  onSelectPlatform,
}: Props) {
  const { data: platforms, error } = usePlatform("platforms/lists/parents");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleSelect = (platform: Platform | null) => {
    onSelectPlatform(platform!);
    setTimeout(() => setOpen(false), 150);
  };

  if (error) return null;

  return (
    <div ref={dropdownRef} className="relative mb-2 sm:mb-4">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-primary px-4 py-2 gap-2 shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
        onMouseDown={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        {selectedPlatform?.name || "All Platforms"}
        <BiChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <ul
          className="absolute top-full left-0 mt-1 p-2 shadow-lg bg-base-100 rounded-box w-56 z-10 border border-base-200"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <li onMouseDown={() => handleSelect(null)}>
            <button className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-content rounded-md transition-colors w-full text-left active:scale-95">
              All Platforms
            </button>
          </li>
          {platforms?.map((platform) => (
            <li key={platform.id} onMouseDown={() => handleSelect(platform)}>
              <button className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-content rounded-md transition-colors w-full text-left active:scale-95">
                {platform.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
