import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
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
    <div className="grid grid-side-main bg-blue-100 dark:bg-black
    transition-all gap-8">
      <div className="col-span-full">
        <NavBar />
      </div>
      <div className="lg:block hidden pl-3 mt-20">
        <GenreList
          onSelectGenre={handleSelectGenre}
          selectedGenre={selectedGenre}
        />
      </div>
      <div className="col-span-full lg:col-span-1 px-20 sm:px-10 lg:pr-10 mt-14 md:mt-18 lg:mt-20">
        <h1 className="text-7xl font-bold">
          {selectedPlatform?.name} {selectedGenre?.name} Games
        </h1>
        <div className="flex mt-8 flex-col sm:flex-row gap-0 sm:gap-3 m-auto">
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
  );
}
