import React, { useState } from 'react';
import { Settings, Volume2, Accessibility, User } from 'lucide-react';

const DisabilitySelector = ({ onComplete }) => {
  const [loading, setSelected] = useState(false);

  const disabilities = [
    { 
      id: 'visual',
      name: 'Discapacidad Visual',
      icon: Settings,
      description: 'Adaptaciones para personas con dificultades visuales'
    },
    { 
      id: 'auditiva',
      name: 'Discapacidad Auditiva',
      icon: Volume2,
      description: 'Ajustes para personas con dificultades auditivas'
    },
    { 
      id: 'motriz',
      name: 'Discapacidad Motriz',
      icon: Accessibility,
      description: 'Configuración para personas con movilidad reducida'
    },
    { 
      id: 'ninguna',
      name: 'Sin Discapacidad',
      icon: User,
      description: 'Experiencia estándar de la plataforma'
    }
  ];

  const handleSelection = async (disability) => {
    setSelected(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    onComplete(disability);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white to-gray-50 z-50 overflow-y-auto">
      {!loading ? (
        <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-8">
          <div className="w-full max-w-3xl my-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
              Personaliza tu Experiencia Digital
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-12">
              Elige la configuración que mejor se adapte a tus necesidades
            </p>
            
            <div className="grid gap-4 sm:gap-6 w-full">
              {disabilities.map(({ id, name, icon: Icon, description }, index) => (
                <button
                  key={id}
                  onClick={() => handleSelection({ id, name })}
                  className={`flex items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all group ${
                    index % 2 === 0 
                    ? 'hover:border-primary' 
                    : 'hover:border-secondary'
                  }`}
                >
                  <div className={`p-2 sm:p-3 rounded-lg ${
                    index % 2 === 0 
                    ? 'bg-primary/10 group-hover:bg-primary/20' 
                    : 'bg-secondary/10 group-hover:bg-secondary/20'
                  }`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${
                      index % 2 === 0 
                      ? 'text-primary' 
                      : 'text-secondary'
                    }`} />
                  </div>
                  <div className="ml-4 sm:ml-6 flex-grow text-left">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {description}
                    </p>
                  </div>
                  <svg 
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                      index % 2 === 0 
                      ? 'text-gray-400 group-hover:text-primary' 
                      : 'text-gray-400 group-hover:text-secondary'
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6"></div>
          <p className="text-xl text-gray-600">Adaptando la experiencia...</p>
        </div>
      )}
    </div>
  );
};

export default DisabilitySelector;