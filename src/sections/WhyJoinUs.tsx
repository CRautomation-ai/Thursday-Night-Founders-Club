import { useInView } from "../hooks/useInView";

const WhyJoinUs = () => {
  const [containerRef, isInView] = useInView();

  return (
    <div className="bg-white py-16 px-4 border-t border-gray-500">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-7 font-title uppercase">
          Why Join Us
        </h2>

        <p className="text-center text-gray-800 mb-12 max-w-3xl mx-auto font-body text-lg md:text-xl">
          Because the right room changes everything.
        </p>

        <p className="text-center text-gray-700 mb-8 max-w-4xl mx-auto font-body text-base md:text-lg">
          Thursday Night Founders Club is designed for people building, not just
          talking. It's a space to step away from the noise, meet other driven
          founders and operators, and have conversations that actually matter.
        </p>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
          <div className={`bg-gray-50 p-6 rounded-lg ${isInView ? "animate-slide-in-left" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-extrabold text-primary mb-4 font-title tracking-wide">
              Curated connections
            </h3>
            <p className="text-gray-700 font-body">
              Everyone in the room is building something. No cold pitching, no
              surface-level small talk.
            </p>
          </div>

          <div className={`bg-gray-50 p-6 rounded-lg ${isInView ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-extrabold text-primary mb-4 font-title tracking-wide">
              Real conversations
            </h3>
            <p className="text-gray-700 font-body">
              Share wins, challenges, and ideas with people who genuinely
              understand the journey.
            </p>
          </div>

          <div className={`bg-gray-50 p-6 rounded-lg ${isInView ? "animate-slide-in-left" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-extrabold text-primary mb-4 font-title tracking-wide">
              Long-term relationships
            </h3>
            <p className="text-gray-700 font-body">
              This isn't a one-off event. It's a growing community built on
              trust, consistency, and mutual support.
            </p>
          </div>

          <div className={`bg-gray-50 p-6 rounded-lg ${isInView ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-extrabold text-primary mb-4 font-title tracking-wide">
              Relaxed, social atmosphere
            </h3>
            <p className="text-gray-700 font-body">
              Good people, good energy, food and drinks included. No pressure,
              just connection.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700 max-w-4xl mx-auto font-body text-base md:text-lg">
          If you're looking to expand your network with intention, gain new
          perspectives, and surround yourself with people moving in the same
          direction, Thursday Night Founders Club is where you belong.
        </p>
      </div>
    </div>
  );
};

export default WhyJoinUs;
