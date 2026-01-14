const Join = () => {
  return (
    <div className="bg-white h-[100vh] py-16 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-ffc-blue text-center mb-6 font-title">
          Why join First Friday Club?
        </h2>

        {/* Introductory Text */}
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto font-body">
          Take a look at the video below to hear some of our members explain why
          they join our business networking events.
        </p>

        {/* Video Embed */}
        <div className="mb-8 aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/KfVPjIlRldw"
            title="Why join First Friday Club?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Credits Text */}
        <p className="text-center text-gray-700 font-body">
          Thanks to{" "}
          <a
            href="#321media"
            className="text-ffc-blue-light hover:text-ffc-blue underline"
          >
            321media
          </a>{" "}
          for creating our latest video filmed at Côte Brasserie.
        </p>
      </div>
    </div>
  );
};

export default Join;
