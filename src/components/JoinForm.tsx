import { useState } from "react";
import { sendConfirmationEmail } from "../utils/sendConfirmationEmail";

const JoinForm = () => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    setErrorMsg("");
    setIsSending(true);

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
      setIsSending(false);
      return;
    }

    try {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'JoinForm.tsx:31',message:'Before API call',data:{email:data.email,name:data.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'JoinForm.tsx:40',message:'API response received',data:{status:response.status,statusText:response.statusText,ok:response.ok},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion

      if (!response.ok) {
        const result = await response.json();
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'JoinForm.tsx:43',message:'API error response',data:{status:response.status,error:result.err},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        throw new Error(result.err || "Failed to register");
      }

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'JoinForm.tsx:45',message:'Before email send',data:{toEmail:data.email,toName:data.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      await sendConfirmationEmail({ toEmail: data.email, toName: data.name });
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'JoinForm.tsx:46',message:'Email send successful',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion

      setErrorMsg("");
      alert("Registration successful! Check your email for confirmation.");
    } catch (error) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'JoinForm.tsx:49',message:'Error caught in JoinForm',data:{errorMessage:error instanceof Error?error.message:'unknown',errorType:error instanceof Error?error.constructor.name:'unknown',errorString:String(error)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      console.error("Error submitting form:", error);
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setIsSending(false);
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
          disabled={isSending}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-body font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
