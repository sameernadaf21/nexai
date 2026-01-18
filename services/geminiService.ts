import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// System instruction to frame the AI as a Westkin Associates consultant
const SYSTEM_INSTRUCTION = `You are a Senior Legal Assistant at Westkin Associates, a leading London-based immigration law firm known for "project managing" immigration cases.
Your goal is to assist potential clients with inquiries about:
1. Corporate Immigration (Sponsor Licences, Skilled Worker Visas)
2. Private Client Matters (Spouse Visas, British Citizenship, Global Talent)
3. Appeals and Human Rights
4. EU Settlement Scheme

Guidelines:
- Tone: Professional, reassuring, sophisticated, and trustworthy.
- Emphasize Westkin's core value: "Project managing every step of the application process."
- Provide accurate general information about UK immigration law (always adding a disclaimer that this is not legal advice).
- Encourage users to "Book a Consultation" for tailored legal advice.
- Keep answers concise and clear.
- Use British English.
`;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I am currently offline. Please call us at +44 (0) 207 118 4546 for assistance.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // We use gemini-3-flash-preview for fast, responsive chat interactions
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I apologize, I couldn't process that request. Please contact our office directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later or call us directly.";
  }
};
