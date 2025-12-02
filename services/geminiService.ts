import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

// Initialize Gemini client safely
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn("Gemini API Key is missing. Chat features will be disabled.");
}

const SYSTEM_INSTRUCTION = `
You are 'Sagar', an intelligent and friendly AI admissions assistant for Dayananda Sagar University (DSU).
Your goal is to help prospective students, parents, and visitors with information about the university.

Key Information to know:
- DSU is located in Bangalore, India.
- It offers Engineering, Medical, Management, Arts, and Law programs.
- It has a legacy of over 60 years.
- Admissions are currently open for 2025.
- The website has sections for Admissions, Academics, Placements, and Contact.

Tone: Professional, encouraging, helpful, and concise.
If you don't know a specific detail (like a specific phone number for a specific professor), suggest they visit the 'Contact' page.
Format responses in clean text. Do not use Markdown unless necessary for lists.
`;

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I apologize, but I am currently offline (API Key missing). Please contact the administration directly.";
  }

  try {
    const result: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return result.text || "I'm sorry, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};