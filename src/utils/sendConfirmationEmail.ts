import emailjs from "@emailjs/browser";

export interface ConfirmationEmailParams {
  toEmail: string;
  toName: string;
}

export async function sendConfirmationEmail({
  toEmail,
  toName,
}: ConfirmationEmailParams): Promise<void> {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      email: toEmail, 
      to_name: toName,
      from_name: "Thursday Night Founders Club",
      event_date: "February 5, 2026",
      event_time: "6:00 PM - 7:30 PM",
      event_venue: "Natural Velocity, Docklands",
    },
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
  );
}

