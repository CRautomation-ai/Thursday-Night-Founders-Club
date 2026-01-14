import logo from "../assets/ffc_logo.png";

const Landing = () => {
  return (
    <div className="relative h-[80vh]">
      {/* Background Image with Overlay - only for landing page */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop)",
          }}
        ></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-blue-900 bg-opacity-70"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-4 md:px-8 bg-transparent">
        <div className="w-full flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="First Friday Club Logo"
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-cyan-400 uppercase font-body text-base hover:text-cyan-300 transition-colors"
            >
              HOME
            </a>
            <a
              href="#members"
              className="text-white uppercase font-body text-base hover:text-cyan-300 transition-colors"
            >
              MEMBERS
            </a>
            <a
              href="#venues"
              className="text-white uppercase font-body text-base hover:text-cyan-300 transition-colors"
            >
              VENUES
            </a>
            <a
              href="#gallery"
              className="text-white uppercase font-body text-base hover:text-cyan-300 transition-colors"
            >
              GALLERY
            </a>
            <a
              href="#take-the-mic"
              className="text-white uppercase font-body text-base hover:text-cyan-300 transition-colors"
            >
              TAKE THE MIC
            </a>
            <a
              href="#join"
              className="text-white uppercase font-body text-base hover:text-cyan-300 transition-colors"
            >
              JOIN
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 h-full flex items-center justify-center">
        {/* Content Overlay */}
        <div className="text-center px-4 py-10 max-w-4xl mx-auto">
          {/* Welcome Text */}
          <p className="text-pink-400 text-base md:text-lg font-title mb-6">
            Welcome to the club
          </p>

          {/* Main Headline */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-title mb-10 leading-tight">
            <div className="block">Reading's premier</div>
            <div className="block">networking events</div>
          </h1>

          {/* Call-to-Action Button */}
          <button className="px-6 py-3 border border-white bg-transparent text-white uppercase font-body text-xs md:text-sm hover:bg-blue-800 transition-colors">
            TAKE A LOOK AT OUR MOST RECENT EVENT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
