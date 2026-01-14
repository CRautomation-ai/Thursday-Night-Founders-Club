const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-2">
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

          <div className="text-right md:text-right">
            <div className="mb-6">
              <div className="mb-1">First Friday Club</div>
              <div className="mb-1">7-11 Cross Street</div>
              <div>Reading RG1 1ST</div>
            </div>

            <div className="mb-4 text-gray-300 text-sm">
              <a
                href="/terms-conditions"
                className="underline hover:text-white"
              >
                Terms and conditions, cookie policy and privacy policy
              </a>
            </div>

            <div className="text-gray-300 text-sm">
              © First Friday Club 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
