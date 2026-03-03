const InsideSection = () => {
  return (
    <div className="bg-white py-16 px-4 border-t border-gray-500">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-7 font-title uppercase">
          Inside Thursday Night Founders Club
        </h2>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Q1SNoXmP4CI?si=dsoE8dExRU9eBljM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default InsideSection;
