import { google } from "googleapis";

interface RegistrationData {
  name: string;
  email: string;
  businessName: string;
  industry: string;
  aboutBusiness: string;
}

export const appendToGoogleSheet = async (
  data: RegistrationData,
): Promise<void> => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const sheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured");
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${sheetName}!A:F`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.name,
          data.email,
          data.businessName,
          data.industry,
          data.aboutBusiness,
        ],
      ],
    },
  });
};
