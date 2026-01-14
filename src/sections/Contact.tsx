import trcLogo from "../assets/trc_logo.png";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";

const Contact = () => {
  return (
    <div className="bg-white h-[100vh] flex flex-col overflow-hidden">
      {/* White Background Section - Top two-thirds */}
      <div className="bg-white py-20 px-4 flex-[2] flex items-center min-h-0">
        <div className="max-w-5xl mx-auto w-full">
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

          <div
            className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-left md:text-center">
              <img
                src={trcLogo}
                alt="The Reading Chronicle Logo"
                className="h-16 md:h-20 w-auto mx-auto"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <SocialIcons />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
