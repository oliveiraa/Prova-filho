
import type { Chat } from '@google/genai';
// FIX: Import ReactElement to resolve "Cannot find namespace 'JSX'" error.
import type { ReactElement } from 'react';

export type View = 'home' | 'study' | 'quiz' | 'chat';

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface Mission {
  title: string;
  // FIX: Replaced JSX.Element with the imported ReactElement type.
  content: ReactElement;
  imagePrompt: string;
}

export interface Module {
  title: string;
  missions: Mission[];
}

export interface QuizQuestion {
    question: string;
    context: string;
}

export interface ValidationResponse {
    isCorrect: boolean;
    explanation: string;
}