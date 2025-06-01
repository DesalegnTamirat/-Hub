import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import { type Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { type Platform } from "./hooks/usePlatforms";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  function handleSelectGenre(genre: Genre) {
    setSelectedGenre(genre);
  }
  function handleSelectedPlatform(platform: Platform) {
    setSelectedPlatform(platform);
  }

  return (
    <>
      <div className="grid grid-side-main bg-blue-100 dark:bg-black px-8 lg:px-5">
        <div className="col-span-full">
          <NavBar />
        </div>
        <div className="lg:block hidden">
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col-span-full lg:col-span-1 py-4 md:py-8">
          <PlatformSelector onSelectPlatform={handleSelectedPlatform} selectedPlatform={selectedPlatform}/>
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div>
    </>
  );
}
