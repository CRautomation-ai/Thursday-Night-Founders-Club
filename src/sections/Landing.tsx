import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="relative h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop)",
          }}
        ></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-blue-900 bg-opacity-70"></div>
      </div>

      <div className="animate-fade-in-nav">
        <Navbar useBg={false} />
      </div>

      {/* Hero Section */}
      <section className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          className="text-center px-4 max-w-4xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p
            className="text-xl md:text-3xl lg:text-4xl font-title mb-6 font-bold"
            style={{ color: "#e1007a" }}
          >
            Welcome to the club
          </p>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-title mb-10 leading-tight font-bold">
            <div className="block">Reading's premier</div>
            <div className="block">networking events</div>
          </h1>

          <button className="px-6 py-3 border-2 border-white bg-transparent text-white uppercase font-body text-xs md:text-sm hover:bg-blue-800 transition-colors tracking-wider">
            TAKE A LOOK AT OUR MOST RECENT EVENT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
