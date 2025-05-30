import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-full">
          <NavBar />
        </div>
        <div className="bg-yellow-400 hidden lg:block">Aside</div>
        <div className="bg-purple-400 col-span-full lg:col-span-1 dark:bg-purple-200">Main</div>
      </div>
      <div className="fixed top-3 right-5">
        <ThemeToggle />
      </div>
    </>
  );
}
