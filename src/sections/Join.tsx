import venueImage from "../assets/venue_image.png";
import JoinForm from "../components/JoinForm";
import { EVENT } from "../config/event";

const Join = () => {
  return (
    <div
      id="join"
      className="bg-white min-h-screen py-16 px-4 flex items-start border-t border-gray-500"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-7 font-title uppercase">
          Join us at our next networking event
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 text-center mb-10 font-body max-w-5xl mx-auto">
          On {EVENT.displayDate} we will be networking at {EVENT.venue} from{" "}
          {EVENT.time}.
        </p>

        <div className="text-center mb-16 text-gray-700 max-w-4xl mx-auto font-body text-lg md:text-xl">
          <p className="mb-6">
            To join us simply register below and an email will be sent out
            confirming your attendance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={venueImage}
              alt="Natural Velocity Venue"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-full">
              <JoinForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
