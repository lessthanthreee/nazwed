import { GoogleGenAI } from "@google/genai";
import { WishRequest } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    // In a real scenario, handle this gracefully. For now, the app will fail safely if called.
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateWeddingWish = async (request: WishRequest): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Ақ жол, бақытты болыңыз!";

  try {
    const prompt = `
      Write a short, culturally respectful, and ${request.tone} wish in Kazakh language for a Kazakh Kyz Uzatu (farewell ceremony) for a bride named ${request.brideName}.
      I am a ${request.relationship} of the family.
      Keep it under 50 words. Focus on the journey, happiness, and the blessing of the "Ak Zhol" (White Road).
      Do not include any markdown formatting. Ensure the text is in Kazakh (Cyrillic script).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "Ақ жол, қадамыңыз құтты болсын!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Болашағыңыз жарқын болсын.";
  }
};