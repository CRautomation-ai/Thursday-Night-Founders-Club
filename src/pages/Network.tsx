const Network = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-ffc-blue text-center mb-16">
          Join us at our next networking event
        </h1>

        {/* Event Details */}
        <p className="text-lg text-gray-700 text-center mb-10">
          On Friday 6 February 2026 we will be networking at Pentahotel from 4pm
          - 5.30pm.
        </p>

        {/* Instructions */}
        <div className="text-center mb-16 text-gray-700 max-w-3xl mx-auto">
          <p className="mb-6">
            To join us please reply to our email invitation which will be sent
            the week before the event. To become a member and receive our
            invitations please{" "}
            <a
              href="#join"
              className="text-ffc-blue-light underline hover:text-ffc-blue"
            >
              register here
            </a>
            .
          </p>
          <p className="mb-2">
            Pentahotel Reading, Oxford Road, Reading RG1 7RH.
          </p>
          <p>
            <a
              href="https://pentahotels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ffc-blue-light underline hover:text-ffc-blue"
            >
              pentahotels.com
            </a>
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-200 aspect-[4/3] rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-gray-500">Bar Area Image 1</span>
          </div>
          <div className="bg-gray-200 aspect-[4/3] rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-gray-500">Bar Area Image 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
