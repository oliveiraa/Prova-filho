
import { GoogleGenAI, Modality, Type } from "@google/genai";
import type { ValidationResponse } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateImage = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [{ text: prompt }],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });
        
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                const base64ImageBytes: string = part.inlineData.data;
                return `data:image/png;base64,${base64ImageBytes}`;
            }
        }
        throw new Error("Nenhuma imagem gerada.");
    } catch (error) {
        console.error("Erro ao gerar imagem:", error);
        throw error;
    }
};

export const validateAnswer = async (context: string, question: string, answer: string): Promise<ValidationResponse> => {
    try {
        const prompt = `Você é um professor de ciências avaliando a resposta de uma criança de 9 anos. Baseado APENAS no contexto, determine se a resposta do aluno está correta.

Contexto: "${context}"
Pergunta: "${question}"
Resposta do Aluno: "${answer}"

Responda em JSON. Se a resposta estiver correta, elogie. Se estiver errada, explique de forma simples e encorajadora.`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        isCorrect: {
                            type: Type.BOOLEAN,
                            description: 'true se a resposta está correta, false se não.',
                        },
                        explanation: {
                            type: Type.STRING,
                            description: 'Explicação simples e encorajadora para a criança.',
                        },
                    },
                    required: ["isCorrect", "explanation"],
                },
            },
        });

        const jsonStr = response.text.trim();
        const result = JSON.parse(jsonStr);
        return result;

    } catch (error) {
        console.error("Erro ao validar resposta:", error);
        return {
            isCorrect: false,
            explanation: "Opa, tive um probleminha para verificar sua resposta. Tente novamente!"
        };
    }
};

export const getAiChatInstance = () => {
    const systemInstruction = 'Você é um professor de ciências divertido e amigável chamado Professor Astro. Você está conversando com um aluno de 9 anos que está estudando para uma prova. Seu objetivo é ajudá-lo a entender os tópicos e se sentir confiante. Use palavras simples, analogias divertidas e um tom muito encorajador. Os tópicos são: a forma e as camadas da Terra, a água na Terra, instrumentos de observação como telescópios, Galileu Galilei, Isaac Newton e por que o dia e a noite acontecem. Mantenha suas respostas curtas e envolventes. Use emojis! 🚀🌎✨';

    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction,
        },
    });
};
