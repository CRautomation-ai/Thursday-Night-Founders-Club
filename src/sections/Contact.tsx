import trcLogo from "../assets/trc_logo.png";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-white h-[100vh] flex flex-col overflow-hidden">
      {/* White Background Section - Top two-thirds */}
      <div className="bg-white py-20 px-4 flex-[2] flex items-center min-h-0">
        <div className="max-w-5xl mx-auto w-full">
          {/* Contact Information */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ffc-blue mb-4 font-title">
              Contact us
            </h2>
            <a
              href="mailto:admin@firstfridayclubreading.com"
              className="text-ffc-blue-light text-lg hover:text-ffc-blue font-body"
            >
              admin@firstfridayclubreading.com
            </a>
          </div>

          {/* Partner Logos */}
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* The Reading Chronicle Logo */}
            <div className="text-left md:text-center">
              <img
                src={trcLogo}
                alt="The Reading Chronicle Logo"
                className="h-16 md:h-20 w-auto mx-auto"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div
            className="flex justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://www.linkedin.com/groups/3941628/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <span className="text-white font-bold text-lg">in</span>
            </a>
            <a
              href="https://www.facebook.com/FFCRDG/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <span className="text-white font-bold text-lg">f</span>
            </a>
            <a
              href="admin@firstfridayclubreading.com"
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <span className="text-white text-xl">✉</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
