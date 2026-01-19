import type { VercelRequest, VercelResponse } from "@vercel/node";
import { appendToGoogleSheet } from "../src/utils/googleSheets";
import { sendConfirmationEmail } from "../src/utils/sendEmail";

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
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get form data from request body
    const { name, email, businessName, industry, aboutBusiness }: FormData =
      req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        error: "Name and email are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Validate other fields (if required)
    if (!businessName || !industry || !aboutBusiness) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Create timestamp
    const timestamp = new Date().toISOString();

    // Append to Google Sheet
    await appendToGoogleSheet({
      timestamp,
      name,
      email,
      businessName,
      industry,
      aboutBusiness,
    });

    // Send confirmation email
    await sendConfirmationEmail(email, name);

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
