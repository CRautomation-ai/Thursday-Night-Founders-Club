import avassLogo from "../assets/avass_media_logo.png";
import anchorAILogo from "../assets/anchor_ai_logo.png";
import kjMediaLogo from "../assets/kj_media_logo.png";
import naturalVelocityLogo from "../assets/natural_velocity_logo.png";

const Support = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-main text-center mb-6 font-title">
          Our supporters.
        </h2>

        <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto font-body">
          We are extremely grateful to our supporters and{" "}
          <a
            href="https://www.linkedin.com/company/natural-velocity/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-main"
          >
            venues
          </a>{" "}
          for helping make our events a success every month.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Avass Media */}
          <div className="flex flex-col">
            <div className="mb-6 aspect-[4/3] bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={avassLogo}
                alt="Avass Media Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-main text-center mb-4 font-title">
              Avass Media
            </h3>

            <p className="text-gray-700 text-center font-body">
              Avass Media is a growth-focused marketing partner dedicated to helping small and medium-sized businesses build a strong, modern digital presence. They specialise in leveraging social media marketing to turn attention into real business outcomes whether that's increased conversions, consistent lead flow, or scalable revenue growth.
            </p>
          </div>

          {/* Anchor AI */}
          <div className="flex flex-col">
            <div className="mb-6 aspect-[4/3] bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={anchorAILogo}
                alt="Anchor AI Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-main text-center mb-4 font-title">
              Anchor AI
            </h3>

            <p className="text-gray-700 text-center font-body">
              Anchor AI is an AI automation partner helping businesses streamline operations, reduce manual workload, and scale smarter through intelligent systems. They design and implement custom AI agents and workflow automations that integrate seamlessly into existing tools, teams, and processes.
            </p>
          </div>

          {/* KJ Media */}
          <div className="flex flex-col">
            <div className="mb-6 aspect-[4/3] bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={kjMediaLogo}
                alt="KJ Media Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-main text-center mb-4 font-title">
              KJ Media
            </h3>

            <p className="text-gray-700 text-center font-body">
              KJ Media is a videography and photography studio specialising in high-impact cinematic content for brands. They create visually compelling assets that capture attention, tell authentic stories, and elevate how businesses present themselves across digital platforms.
            </p>
          </div>

          {/* Natural Velocity */}
          <div className="flex flex-col">
            <div className="mb-6 aspect-[4/3] bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={naturalVelocityLogo}
                alt="Natural Velocity Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-main text-center mb-4 font-title">
              Natural Velocity
            </h3>

            <p className="text-gray-700 text-center font-body">
              Natural Velocity provides innovative solutions that are designed to accelerate the adoption of AI and cybersecurity technologies. Their focus is on ensuring that organisations can embrace these advancements in a responsible and secure manner, leading to increased business value and transformative innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
