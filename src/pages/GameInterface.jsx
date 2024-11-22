import React, { useState } from 'react';
import { 
  Gamepad, 
  Maximize2, 
  Minimize2, 
  Info, 
  ArrowDown, 
  ArrowUp 
} from 'lucide-react';

const GameInterface = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleFullscreen = () => {
    const gameFrame = document.getElementById('game-frame');
    if (!document.fullscreenElement) {
      gameFrame.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleGameLoad = () => {
    setIsLoading(false);
  };

  return (
    // Añadido pt-16 para compensar la altura del navbar
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section con gradiente */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Simulador de Entrevistas Interactivo
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Practica y mejora tus habilidades de entrevista en un entorno virtual seguro
          </p>
        </div>
      </section>

      {/* Contenedor del juego y controles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Panel de Control */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gamepad className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-gray-900">Panel de Control</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                aria-label={showInstructions ? 'Ocultar instrucciones' : 'Ver instrucciones'}
              >
                <Info className="h-4 w-4" />
                {showInstructions ? 'Ocultar' : 'Ver'} instrucciones
                {showInstructions ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="px-3 py-1.5 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
                aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
              >
                {isFullscreen ? (
                  <><Minimize2 className="h-4 w-4" /> Salir</>
                ) : (
                  <><Maximize2 className="h-4 w-4" /> Pantalla completa</>
                )}
              </button>
            </div>
          </div>

          {/* Instrucciones colapsables */}
          {showInstructions && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Controles Básicos:</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Flechas direccionales: Movimiento</li>
                    <li>• Enter/Espacio: Interactuar/Confirmar</li>
                    <li>• ESC: Menú/Cancelar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consejos:</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Explora el entorno</li>
                    <li>• Interactúa con los personajes</li>
                    <li>• Guarda tu progreso regularmente</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contenedor del juego */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg aspect-[16/9]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-white text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Cargando simulador...</p>
              </div>
            </div>
          )}
          <iframe
            id="game-frame"
            src="/game/index.html"
            className="w-full h-full border-0"
            allow="fullscreen"
            onLoad={handleGameLoad}
            style={{ visibility: isLoading ? 'hidden' : 'visible' }}
          ></iframe>
        </div>

        {/* Nota informativa */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-600">
            Este simulador está diseñado para ayudarte a practicar y mejorar tus habilidades 
            de entrevista en un entorno seguro y controlado. Experimenta diferentes escenarios 
            y aprende de cada interacción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameInterface;