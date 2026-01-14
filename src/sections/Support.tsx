const Support = () => {
  return (
    <div className="bg-white h-[100vh] py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-ffc-blue text-center mb-6 font-title">
          Our supporters.
        </h2>

        <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto font-body">
          We are extremely grateful to our supporters and{" "}
          <a href="#venues" className="text-ffc-blue-light hover:text-ffc-blue">
            venues
          </a>{" "}
          for helping make our events a success every month.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Ady Williams Section */}
          <div className="flex flex-col">
            <div className="mb-6 aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <span className="text-gray-500">Ady Williams Image</span>
            </div>

            <h3 className="text-2xl font-bold text-ffc-blue text-center mb-4 font-title uppercase">
              ADY WILLIAMS PRESENTS.
            </h3>

            <p className="text-gray-700 text-center font-body">
              If it's a host or compere you require, Ady Williams will provide
              exactly what you require. A skilled broadcaster for both TV and
              radio, Ady has been involved with numerous Award Ceremonies,
              Corporate Dinners, Charity Events and Sporting Q&As. With quick
              wit, Ady will make your event unforgettable.
            </p>
          </div>

          {/* Photography Section */}
          <div className="flex flex-col">
            <div className="mb-6 aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <span className="text-gray-500">Photographers Image</span>
            </div>

            <h3 className="text-2xl font-bold text-ffc-blue text-center mb-4 font-title uppercase">
              PHOTOGRAPHERS.
            </h3>

            <p className="text-gray-700 text-center font-body">
              Each month we are delighted to showcase the work of our amazing
              photographers in our gallery. These include Annabel Crichard,
              Corporate Picture, DVision Images, Eye Imagine Images and Mike
              Swift.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
