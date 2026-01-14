const Join = () => {
  return (
    <div className="bg-white h-[100vh] py-16 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-ffc-blue text-center mb-6 font-title">
          Why join First Friday Club?
        </h2>

        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto font-body text-lg md:text-xl">
          Take a look at the video below to hear some of our members explain why
          they join our business networking events.
        </p>

        <div className="mb-8 aspect-video w-full max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/KfVPjIlRldw"
            title="Why join First Friday Club?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-center text-gray-700 font-body text-xl md:text-2xl max-w-6xl mx-auto">
          Thanks to{" "}
          <a
            href="#321media"
            className="text-ffc-blue-light hover:text-ffc-blue"
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
