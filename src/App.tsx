import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <>
      <div className="grid grid-side-main">
        <div className="col-span-full">
          <NavBar />
        </div>
        <div className="bg-yellow-400 hidden lg:block">Aside</div>
        <div className="col-span-full lg:col-span-1"><GameGrid /></div>
      </div>
      <div className="fixed top-3 right-3">
        <ThemeToggle />
      </div>
    </>
  );
}
