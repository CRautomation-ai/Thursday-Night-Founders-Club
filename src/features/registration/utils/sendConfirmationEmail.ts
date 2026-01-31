import emailjs from "@emailjs/browser";
import { EVENT } from "@/config/event";

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
      event_date: EVENT.displayDate,
      event_time: EVENT.time,
      event_venue: EVENT.venue,
    },
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
  );
}
