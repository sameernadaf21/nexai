import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// System instruction to frame the AI as an immigration consultant
const SYSTEM_INSTRUCTION = `You are an expert Senior Consultant at Y-Axis, the world's no.1 overseas career consultant. 
Your goal is to assist users with inquiries about:
1. Migration (PR Visas for Canada, Australia, Germany, etc.)
2. Work Visas and Job Search Services
3. Study Abroad options (Universities, Student Visas)
4. Visit Visas
5. Coaching (IELTS, PTE, etc.)

Guidelines:
- Be professional, empathetic, and encouraging.
- Provide accurate, general information about visa processes (but add a disclaimer that rules change).
- Keep answers concise (under 150 words) unless detailed steps are asked.
- Encouragingly suggest they "Sign up for a Free Counseling session" for specific eligibility assessments.
- Do not make legal guarantees.
- Use British English spelling (colour, program, etc.) as this is a UK-focused clone.
`;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I'm currently offline (API Key missing). Please contact support.";
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

    return response.text || "I apologize, I couldn't process that request. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the immigration database. Please try again later.";
  }
};
