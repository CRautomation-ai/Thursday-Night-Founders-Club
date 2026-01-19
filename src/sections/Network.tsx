import venueImage from "../assets/venue_image.png";

const Network = () => {
  return (
    <div
      id="network-section"
      className="bg-white h-[100vh] pt-24 pb-16 px-4 flex items-start"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-main text-center mb-10 font-title">
          Join us at our next networking event
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 text-center mb-10 font-body max-w-5xl mx-auto">
          On February 5 2026 we will be networking at Natural Velocity, Docklands from 6pm - 7:30pm.
        </p>

        <div className="text-center mb-16 text-gray-700 max-w-4xl mx-auto font-body text-lg md:text-xl">
          <p className="mb-6">
            To join us simply{" "}
            <a href="#join" className="text-primary hover:text-main">
              register here
            </a>{" "}
            and an email will be sent out confirming your attendance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={venueImage}
              alt="Natural Velocity Venue"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={venueImage}
              alt="Natural Velocity Venue"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
