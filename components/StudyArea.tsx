
import React, { useState, useEffect, useMemo } from 'react';
import { STUDY_CONTENT } from '../constants';
import { generateImage } from '../services/geminiService';

export const StudyArea: React.FC = () => {
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const allMissions = useMemo(() => STUDY_CONTENT.flatMap(module => module.missions), []);
  const currentMission = allMissions[currentMissionIndex];

  useEffect(() => {
    const fetchImage = async () => {
      if (!currentMission) return;
      
      setIsLoading(true);
      setError(null);
      setImageUrl(null);

      try {
        const url = await generateImage(currentMission.imagePrompt);
        setImageUrl(url);
      } catch (err) {
        setError('Não foi possível carregar a imagem da missão. Tente recarregar.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [currentMissionIndex, currentMission]);

  const goToNextMission = () => {
    if (currentMissionIndex < allMissions.length - 1) {
      setCurrentMissionIndex(currentMissionIndex + 1);
    }
  };

  const goToPreviousMission = () => {
    if (currentMissionIndex > 0) {
      setCurrentMissionIndex(currentMissionIndex - 1);
    }
  };
  
  const getModuleTitleForMission = (index: number): string => {
      let missionCount = 0;
      for (const module of STUDY_CONTENT) {
          missionCount += module.missions.length;
          if (index < missionCount) {
              return module.title;
          }
      }
      return '';
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-2">{getModuleTitleForMission(currentMissionIndex)}</h2>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{currentMission.title}</h3>

      <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        {isLoading && <div className="text-gray-500 animate-pulse">Gerando imagem da missão...</div>}
        {error && <div className="text-red-500 p-4">{error}</div>}
        {imageUrl && <img src={imageUrl} alt={currentMission.title} className="w-full h-full object-cover" />}
      </div>
      
      <div className="text-gray-700 text-base md:text-lg leading-relaxed prose max-w-none">
          {currentMission.content}
      </div>

      <div className="mt-8 pt-6 border-t flex justify-between items-center">
        <button 
          onClick={goToPreviousMission} 
          disabled={currentMissionIndex === 0}
          className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
        >
          Anterior
        </button>
        <span className="text-gray-600 font-medium">{currentMissionIndex + 1} / {allMissions.length}</span>
        <button 
          onClick={goToNextMission} 
          disabled={currentMissionIndex === allMissions.length - 1}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};
