import type { VercelRequest, VercelResponse } from "@vercel/node";
import { appendToGoogleSheet } from "./services/googleSheets.js";

interface FormData {
  name: string;
  email: string;
  businessName: string;
  industry: string;
  aboutBusiness: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, businessName, industry, aboutBusiness }: FormData =
      req.body;

    await appendToGoogleSheet({
      name,
      email,
      businessName,
      industry,
      aboutBusiness,
    });

    // Email is now sent from client-side
    return res.status(200).json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      err: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
