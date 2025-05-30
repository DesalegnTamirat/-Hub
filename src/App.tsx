export default function App() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-blue-500 col-span-full">Navbar</div>
      <div className="bg-yellow-400 hidden lg:block">Aside</div>
      <div className="bg-purple-400 col-span-full lg:col-span-1">Main</div>
    </div> 
  );
}
