
import React, { useState } from 'react';
import type { View } from './types';
import { StudyArea } from './components/StudyArea';
import { QuizArea } from './components/QuizArea';
import { ChatArea } from './components/ChatArea';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { PencilIcon } from './components/icons/PencilIcon';
import { ChatBubbleIcon } from './components/icons/ChatBubbleIcon';
import { SparklesIcon } from './components/icons/SparklesIcon';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'study':
        return <StudyArea />;
      case 'quiz':
        return <QuizArea />;
      case 'chat':
        return <ChatArea />;
      case 'home':
      default:
        return <HomeScreen onNavigate={setCurrentView} />;
    }
  };

  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const NavButton = ({ view, label, icon }: { view: View; label: string; icon: React.ReactElement }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-sm transition-colors duration-200 ${
        currentView === view ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-sky-100 font-sans text-gray-800 flex flex-col">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center text-blue-700">🚀 Missão Ciências 🪐</h1>
      </header>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>

      {currentView !== 'home' && (
        <footer className="sticky bottom-0 bg-white shadow-t-md border-t border-gray-200">
          <nav className="flex justify-around max-w-lg mx-auto">
            <NavButton view="study" label="Estudar" icon={<BookOpenIcon />} />
            <NavButton view="quiz" label="Prova" icon={<PencilIcon />} />
            <NavButton view="chat" label="Chat" icon={<ChatBubbleIcon />} />
          </nav>
        </footer>
      )}
    </div>
  );
};

const HomeScreen: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
      <SparklesIcon className="mx-auto text-yellow-500 h-20 w-20" />
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Olá, explorador do conhecimento!</h2>
      <p className="text-gray-600 mt-4">
        Sua missão é se tornar um mestre em Ciências! Escolha uma área abaixo para começar sua jornada de aprendizado.
      </p>
      <div className="mt-8 space-y-4">
        <button onClick={() => onNavigate('study')} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center justify-center">
          <BookOpenIcon className="mr-2"/>
          Começar Jornada de Estudo
        </button>
        <button onClick={() => onNavigate('quiz')} className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition-transform transform hover:scale-105 flex items-center justify-center">
          <PencilIcon className="mr-2"/>
          Testar Conhecimento
        </button>
        <button onClick={() => onNavigate('chat')} className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-purple-700 transition-transform transform hover:scale-105 flex items-center justify-center">
          <ChatBubbleIcon className="mr-2"/>
          Conversar com Professor Astro
        </button>
      </div>
    </div>
  </div>
);


export default App;