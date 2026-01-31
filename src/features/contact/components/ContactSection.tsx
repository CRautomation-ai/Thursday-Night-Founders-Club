import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";
import { useInView } from "@/hooks/useInView";

const ContactSection = () => {
  const [socialRef, isInView] = useInView();

  return (
    <div className="bg-white h-[100vh] flex flex-col overflow-hidden border-t border-gray-500">
      <div className="bg-white py-16 px-4 flex-[2] flex items-center min-h-0">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-7 font-title uppercase">
              Contact us
            </h2>
            <a
              href="mailto:Thursdaynightfoundersclub@gmail.com"
              className="text-primary text-lg hover:text-main font-body"
            >
              Thursdaynightfoundersclub@gmail.com
            </a>
          </div>

          <div ref={socialRef} className={isInView ? "animate-fade-up" : "opacity-0"} style={{ animationDelay: "0.4s" }}>
            <SocialIcons />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactSection;
