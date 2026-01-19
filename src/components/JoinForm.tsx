const JoinForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      businessName: formData.get("businessName") as string,
      industry: formData.get("industry") as string,
      aboutBusiness: formData.get("aboutBusiness") as string,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        // Handle success
        console.log("Registration successful:", result);
      } else {
        // Handle error
        console.error("Registration failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200 w-full max-w-full">
      <h3 className="text-xl font-extrabold text-primary text-center mb-6 font-title uppercase">
        Register Here
      </h3>
      
      <p className="text-center text-gray-700 mb-6 font-body text-sm break-words">
        Please enter these details to attend the event (your business and what it is you do will be featured on our attendees list for some free advertising!)
      </p>

      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-body text-sm mb-2">
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
          <label htmlFor="email" className="block text-gray-700 font-body text-sm mb-2">
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
          <label htmlFor="businessName" className="block text-gray-700 font-body text-sm mb-2">
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
          <label htmlFor="industry" className="block text-gray-700 font-body text-sm mb-2">
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
          <label htmlFor="aboutBusiness" className="block text-gray-700 font-body text-sm mb-2">
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
