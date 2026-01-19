import Navbar from "../components/Navbar";
import landingImage from "../assets/landing_page_image.png";

const Landing = () => {
  return (
    <div className="relative h-[85vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${landingImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-main bg-opacity-70"></div>
      </div>

      <div className="animate-fade-in-nav">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          className="text-center px-4 max-w-4xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-title mb-6 font-bold text-primary">
            Welcome to the club
          </p>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-title mb-10 leading-tight font-bold">
            <div className="block">Melbourne's Premier</div>
            <div className="block">Networking Events</div>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Landing;
