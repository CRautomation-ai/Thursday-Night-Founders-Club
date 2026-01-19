import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";

const Contact = () => {
  return (
    <div className="bg-white h-[100vh] flex flex-col overflow-hidden">
      {/* White Background Section - Top two-thirds */}
      <div className="bg-white py-20 px-4 flex-[2] flex items-center min-h-0">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-main mb-4 font-title">
              Contact us
            </h2>
            <a
              href="mailto:Thursdaynightfoundersclub@gmail.com"
              className="text-primary text-lg hover:text-main font-body"
            >
              Thursdaynightfoundersclub@gmail.com
            </a>
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
