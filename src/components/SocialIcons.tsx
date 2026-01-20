import { FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const SocialIcons = () => {
  const email = "Thursdaynightfoundersclub@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/groups/3941628/profile";

  return (
    <div className="flex justify-center gap-6">
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center transition-[filter] hover:brightness-110"
        style={{ backgroundColor: "#116ac2" }}
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-white text-xl" />
      </a>

      <a
        href={`mailto:${email}`}
        className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Email"
      >
        <IoMailOutline className="text-white text-xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
