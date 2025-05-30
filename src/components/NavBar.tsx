import logo from "../assets/logo.webp";

export default function NavBar() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="logo for game-hub" className="w-14"/>
      <p>Navbar</p>
    </div>
  )
}
