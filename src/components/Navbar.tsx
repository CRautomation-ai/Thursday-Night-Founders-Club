import logo from "../assets/ffc_logo.png";

interface NavbarProps {
  isVisible: boolean;
}

const Navbar = ({ isVisible }: NavbarProps) => {
  if (!isVisible) return null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
      style={{ backgroundColor: "#001e3d" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="First Friday Club Logo"
            className="h-8 md:h-10 w-auto"
          />
          
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-cyan-400 uppercase font-body text-sm hover:text-cyan-300 transition-colors"
          >
            HOME
          </a>
          <a
            href="#members"
            className="text-white uppercase font-body text-sm hover:text-cyan-300 transition-colors"
          >
            MEMBERS
          </a>
          <a
            href="#venues"
            className="text-white uppercase font-body text-sm hover:text-cyan-300 transition-colors"
          >
            VENUES
          </a>
          <a
            href="#gallery"
            className="text-white uppercase font-body text-sm hover:text-cyan-300 transition-colors"
          >
            GALLERY
          </a>
          <a
            href="#take-the-mic"
            className="text-white uppercase font-body text-sm hover:text-cyan-300 transition-colors"
          >
            TAKE THE MIC
          </a>
          <a
            href="#join"
            className="text-white uppercase font-body text-sm hover:text-cyan-300 transition-colors"
          >
            JOIN
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
