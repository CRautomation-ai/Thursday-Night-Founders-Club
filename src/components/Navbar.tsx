import logo from "@/assets/logos/tnfc.png";
import { scrollToSection } from "@/utils/scrollTo";

const Navbar = () => {
  return (
    <nav className="relative top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 pointer-events-auto">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Thursday Night Founders Club Logo"
            className="h-20 md:h-32 lg:h-32 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 pt-2 mr-4 lg:mr-8 pointer-events-auto">
          <button
            onClick={() => scrollToSection("join")}
            className="text-primary uppercase font-body text-base lg:text-xl hover:text-secondary transition-colors tracking-widest font-bold cursor-pointer bg-transparent border-none pointer-events-auto relative z-50"
          >
            JOIN
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
