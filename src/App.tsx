import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import { type Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { type Platform } from "./hooks/usePlatforms";
import SortSelector, { type Order } from "./components/SortSelector";
import SortOrderingSelector from "./components/SortOrderingSelector";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [ascendingOrdering, setAscendingOrdering] = useState(false);
  function handleSelectGenre(genre: Genre) {
    setSelectedGenre(genre);
  }
  function handleSelectedPlatform(platform: Platform) {
    setSelectedPlatform(platform);
  }
  function handleSelectedOrder(order: Order | null) {
    setSelectedOrder(order);
  }
  function onAscendingOrdering(isAscending: boolean) {
    setAscendingOrdering(isAscending);
  }

  return (
    <>
      <div className="grid grid-side-main bg-blue-100 dark:bg-black px-8 lg:px-5 transition-all gap-2">
        <div className="col-span-full flex items-center justify-between -mx- gap-10">
          <NavBar />
          <label className="input w-full rounded-3xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <ThemeToggle />
        </div>
        <div className="lg:block hidden">
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col-span-full lg:col-span-1 py-4 md:py-8">
          <div className="flex gap-3 mt-2">
            <PlatformSelector
              onSelectPlatform={handleSelectedPlatform}
              selectedPlatform={selectedPlatform}
            />
            <SortSelector
              selectedOrder={selectedOrder}
              onSelectOrder={handleSelectedOrder}
            />
            <SortOrderingSelector 
            ascendingOrdering={ascendingOrdering}
            onAscendingOrdering={onAscendingOrdering}
            />
          </div>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedOrder={selectedOrder}
            ascendingOrdering={ascendingOrdering}
          />
        </div>
      </div>
    </>
  );
}
