import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

interface Props {
  isMobileMenuOpen: boolean;
  onMobileMenuSelect: (isMobileMenuOpen: boolean) => void;
}

export default function MobileMenuButton({
  isMobileMenuOpen,
  onMobileMenuSelect,
}: Props) {
  return (
    <div className="flex md:hidden items-center gap-4">
      <button
        onClick={() => onMobileMenuSelect(isMobileMenuOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none transition-colors"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isMobileMenuOpen ? (
          <FiX className="h-6 w-6" />
        ) : (
          <FiMenu className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
