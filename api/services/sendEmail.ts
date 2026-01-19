import emailjs from "@emailjs/nodejs";

export const sendConfirmationEmail = async (
  email: string,
  name: string,
): Promise<void> => {
  // Skip if EmailJS is not configured
  if (
    !process.env.EMAILJS_SERVICE_ID ||
    !process.env.EMAILJS_TEMPLATE_ID ||
    !process.env.EMAILJS_PRIVATE_KEY
  ) {
    console.log("EmailJS not configured, skipping email to:", email);
    return;
  }

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        to_email: email,
        to_name: name,
        from_name: "Thursday Night Founders Club",
        event_date: "February 5, 2026",
        event_time: "6:00 PM - 7:30 PM",
        event_venue: "Natural Velocity, Docklands",
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      },
    );
  } catch (error) {
    console.error("EmailJS error:", error);
    throw error;
  }
};
