import { useState, type FormEvent } from "react";
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
  const [searchKeyword, setSearchKeyWord] = useState("");
  const [endPoint, setEndPoint] = useState<string>("/games");
  
  function onChangeEndPoint(endPoint: string) {
    setEndPoint(endPoint);
  }

  function handleSelectGenre(genre: Genre) {
    setSelectedGenre(genre);
    onChangeEndPoint("/games");
  }
  function handleSelectedPlatform(platform: Platform) {
    setSelectedPlatform(platform);
    onChangeEndPoint("/games");
  }
  function handleSelectedOrder(order: Order | null) {
    setSelectedOrder(order);
    onChangeEndPoint("/games");
  }
  function onAscendingOrdering(isAscending: boolean) {
    setAscendingOrdering(isAscending);
    onChangeEndPoint("/games");
  }
  function onSubmitKeyword(e: FormEvent, keyword: string | undefined) {
    e.preventDefault();
    if (keyword) setSearchKeyWord(keyword);
  }

  return (
      <div className="grid grid-side-main  gap-8 bg-blue-100 dark:bg-black">
        <div className="col-span-full">
          <NavBar onSubmitKeyword={onSubmitKeyword} />
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
            searchKeyword={searchKeyword}
            endPoint={endPoint}
            onHandleEndPoint={onChangeEndPoint}
          />
        </div>
      </div>
  );
}
