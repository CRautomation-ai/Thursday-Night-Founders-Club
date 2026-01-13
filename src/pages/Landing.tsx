const Landing = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      {/* Header */}
      <header className="bg-blue-900 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-3">
            {/* Logo - Four overlapping rectangles */}
            <div className="relative w-12 h-8 flex items-center">
              <div className="absolute w-6 h-6 bg-blue-500 transform rotate-12"></div>
              <div className="absolute left-2 w-6 h-6 bg-orange-500 transform -rotate-12"></div>
              <div className="absolute left-3 w-6 h-6 bg-red-500 transform rotate-12"></div>
              <div className="absolute left-4 w-6 h-6 bg-green-500 transform -rotate-12"></div>
            </div>
            <span className="text-white text-lg md:text-xl font-sans">
              First Friday Club
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-white uppercase font-sans text-sm border-b-2 border-blue-400 pb-1"
            >
              HOME
            </a>
            <a
              href="#members"
              className="text-white uppercase font-sans text-sm hover:text-blue-200"
            >
              MEMBERS
            </a>
            <a
              href="#venues"
              className="text-white uppercase font-sans text-sm hover:text-blue-200"
            >
              VENUES
            </a>
            <a
              href="#gallery"
              className="text-white uppercase font-sans text-sm hover:text-blue-200"
            >
              GALLERY
            </a>
            <a
              href="#take-the-mic"
              className="text-white uppercase font-sans text-sm hover:text-blue-200"
            >
              TAKE THE MIC
            </a>
            <a
              href="#join"
              className="text-white uppercase font-sans text-sm hover:text-blue-200"
            >
              JOIN
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop)",
            }}
          ></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-blue-900 bg-opacity-70"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          {/* Welcome Text */}
          <p className="text-pink-400 text-base md:text-lg font-sans mb-8">
            Welcome to the club
          </p>

          {/* Main Headline */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-16 leading-tight">
            <div className="block">Reading's premier</div>
            <div className="block">networking events</div>
          </h1>

          {/* Call-to-Action Button */}
          <button className="px-6 py-3 border border-white bg-transparent text-white uppercase font-sans text-xs md:text-sm hover:bg-blue-800 transition-colors">
            TAKE A LOOK AT OUR MOST RECENT EVENT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
