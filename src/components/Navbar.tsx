import logo from "../assets/ffc_logo.png";

interface NavbarProps {
  isVisible?: boolean;
  useBg?: boolean;
}

const Navbar = ({ isVisible = true, useBg = true }: NavbarProps) => {
  const positionClass = useBg ? "fixed" : "relative";
  const animationClass = useBg
    ? `transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`
    : "";

  return (
    <nav
      className={`${positionClass} top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 ${animationClass}`}
      style={{
        backgroundColor: useBg ? "#001d3c" : "transparent",
      }}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="First Friday Club Logo"
            className="h-12 md:h-20 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 pt-2">
          <a
            href="#home"
            className="text-cyan-400 uppercase font-body text-md hover:text-cyan-300 transition-colors tracking-widest"
          >
            HOME
          </a>
          <a
            href="#members"
            className="text-white uppercase font-body text-md hover:text-cyan-300 transition-colors tracking-widest"
          >
            MEMBERS
          </a>
          <a
            href="#venues"
            className="text-white uppercase font-body text-md hover:text-cyan-300 transition-colors tracking-widest"
          >
            VENUES
          </a>
          <a
            href="#gallery"
            className="text-white uppercase font-body text-md hover:text-cyan-300 transition-colors tracking-widest"
          >
            GALLERY
          </a>
          <a
            href="#take-the-mic"
            className="text-white uppercase font-body text-md hover:text-cyan-300 transition-colors tracking-widest"
          >
            TAKE THE MIC
          </a>
          <a
            href="#join"
            className="text-white uppercase font-body text-md hover:text-cyan-300 transition-colors tracking-widest"
          >
            JOIN
          </a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
