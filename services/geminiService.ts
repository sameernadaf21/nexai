import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// System instruction to frame the AI as an immigration consultant
const SYSTEM_INSTRUCTION = `You are an expert Senior Consultant at NexOverseas, a premium overseas career consultant. 
Your goal is to assist users with inquiries about:
1. Migration (PR Visas for Canada, Australia, Germany, etc.)
2. Work Visas and Job Search Services
3. Study Abroad options (Universities, Student Visas)
4. Visit Visas
5. Coaching (IELTS, PTE, etc.)

Guidelines:
- Tone: Professional, encouraging, and sophisticated.
- Emphasize NexOverseas's status as a premium consultant.
- Provide accurate, general information about visa processes (but add a disclaimer that rules change).
- Encouragingly suggest they "Sign up for Free Counseling" for specific eligibility assessments.
- Keep answers concise.
- Use British English spelling.
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