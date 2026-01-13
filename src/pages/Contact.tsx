const Contact = () => {
  return (
    <div className="bg-white">
      {/* White Background Section - Top two-thirds */}
      <div className="bg-white py-20 px-4 min-h-[66vh] flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Contact Information */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ffc-blue mb-4">
              Contact us
            </h2>
            <a
              href="mailto:admin@firstfridayclubreading.com"
              className="text-ffc-blue-light text-lg hover:text-ffc-blue"
            >
              admin@firstfridayclubreading.com
            </a>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16">
            {/* Cream Logo */}
            <div
              className="text-6xl font-bold text-cream-red"
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
            >
              Cream
            </div>

            {/* The Reading Chronicle Logo */}
            <div className="text-left md:text-center">
              <div className="text-xs uppercase text-ffc-blue font-semibold tracking-widest mb-1">
                THE READING
              </div>
              <div className="text-5xl font-bold text-ffc-blue">CHRONICLE</div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <span className="text-white font-bold text-lg">in</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <span className="text-white font-bold text-lg">f</span>
            </a>
            <a
              href="mailto:admin@firstfridayclubreading.com"
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <span className="text-white text-xl">✉</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dark Blue Footer - Bottom third */}
      <div className="bg-blue-900 text-white py-12 px-4 min-h-[34vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Navigation Links */}
            <div>
              <nav className="space-y-3">
                <a
                  href="#home"
                  className="block uppercase underline hover:text-blue-200 transition-colors"
                >
                  HOME
                </a>
                <a
                  href="#members"
                  className="block uppercase underline hover:text-blue-200 transition-colors"
                >
                  MEMBERS
                </a>
                <a
                  href="#venues"
                  className="block uppercase underline hover:text-blue-200 transition-colors"
                >
                  VENUES
                </a>
                <a
                  href="#gallery"
                  className="block uppercase underline hover:text-blue-200 transition-colors"
                >
                  GALLERY
                </a>
                <a
                  href="#take-the-mic"
                  className="block uppercase underline hover:text-blue-200 transition-colors"
                >
                  TAKE THE MIC
                </a>
                <a
                  href="#join"
                  className="block uppercase underline hover:text-blue-200 transition-colors"
                >
                  JOIN
                </a>
              </nav>
            </div>

            {/* Right Column - Address and Legal */}
            <div>
              <div className="mb-6">
                <div className="mb-1">First Friday Club</div>
                <div className="mb-1">7-11 Cross Street</div>
                <div>Reading RG1 1ST</div>
              </div>

              <div className="mb-4 text-gray-300 text-sm">
                <a href="#terms" className="underline hover:text-white">
                  Terms and conditions
                </a>
                {", "}
                <a href="#cookie" className="underline hover:text-white">
                  cookie policy and privacy policy
                </a>
              </div>

              <div className="text-gray-300 text-sm">
                © First Friday Club 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
