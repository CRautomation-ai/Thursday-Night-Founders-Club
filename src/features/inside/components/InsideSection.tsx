const InsideSection = () => {
  return (
    <div className="bg-white py-16 px-4 border-t border-gray-500">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-7 font-title uppercase">
          Inside Thursday Night Founders Club
        </h2>

        <div className="w-full max-w-4xl mx-auto">
          <video
            src="https://www.dropbox.com/scl/fi/reb025g3mpq8n7l29nb9w/Video-11-02-2026-12-47-53-PM.mp4?rlkey=xng8sqx1sofgww2t1mun20yph&e=4&st=cx5jf1qa&dl=1"
            controls
            className="w-full rounded-lg"
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default InsideSection;
