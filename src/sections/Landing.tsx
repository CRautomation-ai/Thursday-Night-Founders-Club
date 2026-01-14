import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="relative h-[80vh]">
      {/* Background Image */}
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

      <Navbar useBg={false} />

      {/* Hero Section */}
      <section className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 py-10 max-w-4xl mx-auto">
          <p className="text-pink-400 text-base md:text-lg font-title mb-6">
            Welcome to the club
          </p>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-title mb-10 leading-tight">
            <div className="block">Reading's premier</div>
            <div className="block">networking events</div>
          </h1>

          <button className="px-6 py-3 border border-white bg-transparent text-white uppercase font-body text-xs md:text-sm hover:bg-blue-800 transition-colors">
            TAKE A LOOK AT OUR MOST RECENT EVENT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
