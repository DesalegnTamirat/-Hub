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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (error) return null;

  return (
    <div ref={dropdownRef} className="mb-4">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-primary px-4 py-2 gap-2 shadow-md hover:shadow-lg transition-all duration-200"
        onClick={() => setOpen(!open)}
      >
        {selectedPlatform?.name || "Platforms"} <BiChevronDown size={20} />
      </div>

      {open && (
        <ul
          tabIndex={1}
          className="absolute p-2 mt-2 shadow-lg bg-base-100 rounded-xl w-56 z-[1] border border-base-200"
        >
          <li>
            <button
              className="text-sm px-2 py-2 hover:bg-primary hover:text-white rounded-md transition-colors w-full text-left"
              onClick={() => {
                onSelectPlatform(null!);
                setOpen(false);
              }}
            >
              All Platforms
            </button>
          </li>
          {platforms.map((platform) => (
            <li key={platform.id}>
              <button
                className="text-sm px-2 py-2 hover:bg-primary hover:text-white rounded-md transition-colors w-full text-left"
                onClick={() => {
                  onSelectPlatform(platform);
                  setOpen(false);
                }}
              >
                {platform.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}