
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { validateAnswer } from '../services/geminiService';
import type { ValidationResponse } from '../types';

export const QuizArea: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [validationResult, setValidationResult] = useState<ValidationResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userAnswer.trim()) return;

        setIsLoading(true);
        setValidationResult(null);

        const result = await validateAnswer(currentQuestion.context, currentQuestion.question, userAnswer);
        
        setValidationResult(result);
        setIsLoading(false);
    };

    const handleNextQuestion = () => {
        setValidationResult(null);
        setUserAnswer('');
        if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };
    
    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setUserAnswer('');
        setValidationResult(null);
        setIsQuizFinished(false);
    }

    if (isQuizFinished) {
        return (
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Parabéns! 🎉</h2>
                <p className="text-lg text-gray-700 mb-6">Você completou a prova! Você é um verdadeiro mestre das ciências!</p>
                <button 
                    onClick={handleRestart}
                    className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors"
                >
                    Refazer a Prova
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="mb-4">
                <span className="text-sm font-semibold text-blue-600">Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</span>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">{currentQuestion.question}</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Digite sua resposta aqui..."
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    disabled={!!validationResult}
                />
                <button 
                    type="submit" 
                    className="w-full mt-4 bg-green-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-wait"
                    disabled={isLoading || !!validationResult}
                >
                    {isLoading ? 'Verificando...' : 'Verificar Resposta'}
                </button>
            </form>

            {validationResult && (
                <div className={`mt-6 p-4 rounded-lg text-white ${validationResult.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                    <h3 className="font-bold text-lg mb-2">{validationResult.isCorrect ? 'Correto! 😄' : 'Quase lá! 🤔'}</h3>
                    <p>{validationResult.explanation}</p>
                    <button 
                        onClick={handleNextQuestion}
                        className="w-full mt-4 bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                       {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Próxima Pergunta' : 'Finalizar Prova'}
                    </button>
                </div>
            )}
        </div>
    );
};
