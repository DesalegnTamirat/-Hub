import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <>
      <div className="grid grid-side-main bg-blue-100 dark:bg-black">
        <div className="col-span-full">
          <NavBar />
        </div> 
        <div className="lg:block"><GenreList /></div>
        <div className="col-span-full lg:col-span-1"><GameGrid /></div>
      </div>
      <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div>
    </>
  );
}
