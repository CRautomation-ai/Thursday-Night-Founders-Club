import logo from "../assets/tnfc_logo.png";

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
      className={`${positionClass} top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 ${animationClass} ${useBg ? "bg-main" : ""}`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Thursday Night Founders Club Logo"
            className="h-20 md:h-32 lg:h-32 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 pt-2 mr-4 lg:mr-8">
          <a
            href="#join"
            className="text-primary uppercase font-body text-base lg:text-xl hover:text-secondary transition-colors tracking-widest font-bold"
          >
            JOIN
          </a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
