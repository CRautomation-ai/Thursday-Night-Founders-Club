import { useState } from "react";
import emailjs from "@emailjs/browser";

const JoinForm = () => {
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      businessName: formData.get("businessName") as string,
      industry: formData.get("industry") as string,
      aboutBusiness: formData.get("aboutBusiness") as string,
    };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setErrorMsg("Invalid email format");
      return;
    }

    try {
      // Submit to Google Sheets via API
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.err || "Failed to register");
      }

      // Send confirmation email from client-side
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email: data.email, // Match the template variable name
          to_name: data.name,
          from_name: "Thursday Night Founders Club",
          event_date: "February 5, 2026",
          event_time: "6:00 PM - 7:30 PM",
          event_venue: "Natural Velocity, Docklands",
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setErrorMsg("");
      alert("Registration successful! Check your email for confirmation.");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsg("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200 w-full max-w-full">
      <h3 className="text-xl font-extrabold text-primary text-center mb-6 font-title uppercase">
        Register Here
      </h3>

      <p className="text-center text-gray-700 mb-6 font-body text-sm break-words">
        Please enter these details to attend the event (your business and what
        it is you do will be featured on our attendees list for some free
        advertising!)
      </p>

      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-body text-sm mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-body text-sm mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body"
          />
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="block text-gray-700 font-body text-sm mb-2"
          >
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body"
          />
        </div>

        <div>
          <label
            htmlFor="industry"
            className="block text-gray-700 font-body text-sm mb-2"
          >
            Industry
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body"
          />
        </div>

        <div>
          <label
            htmlFor="aboutBusiness"
            className="block text-gray-700 font-body text-sm mb-2"
          >
            About your business
          </label>
          <textarea
            id="aboutBusiness"
            name="aboutBusiness"
            rows={4}
            required
            placeholder="Tell us what you do"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body resize-none"
          ></textarea>
        </div>

        {errorMsg && (
          <div className="text-red-600 text-sm font-body text-center animate-shake">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-body font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
