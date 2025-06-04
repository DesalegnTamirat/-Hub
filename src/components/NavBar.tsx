import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuButton from "./MobileMenuButton";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="">
            <img src={logo} alt="joy-stick" className="w-24 mt-2" />
          </a>
          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <DesktopNavigation />
            {/* Mobile menu button */}
            <MobileMenuButton
              isMobileMenuOpen={isMobileMenuOpen}
              onMobileMenuSelect={(isMobileMenuOpen) =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
            />
          <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
}
