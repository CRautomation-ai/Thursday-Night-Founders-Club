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
      className={`${positionClass} top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 ${animationClass}`}
      style={{
        backgroundColor: useBg ? "#000000" : "transparent",
      }}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Thursday Night Founders Club Logo"
            className="h-12 md:h-20 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 pt-2">
          <a
            href="/join"
            className="text-tnfc-gold uppercase font-body text-md hover:text-tnfc-gold-dark transition-colors tracking-widest"
          >
            JOIN
          </a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
