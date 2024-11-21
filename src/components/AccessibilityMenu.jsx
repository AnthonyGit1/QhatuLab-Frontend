import React, { useState } from 'react';
import { 
  Eye, 
  Volume2, 
  Type, 
  ZoomIn, 
  ZoomOut,
  Paintbrush,
  RotateCcw,
  Moon,
  X
} from 'lucide-react';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-[20vh] z-[9999] flex items-start">
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary p-2 text-white rounded-l-lg shadow-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-xl"
        aria-label="Accesibilidad"
      >
        <Eye className="h-6 w-6" />
      </button>

      <div 
        className={`fixed top-[20vh] right-0 bg-white shadow-xl border-l border-gray-200 w-64 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ visibility: isOpen ? 'visible' : 'visible' }}
      >
        <div className="p-3 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-sm font-medium text-gray-900 flex items-center gap-2">
            <Eye className="h-4 w-4 text-primary" />
            Accesibilidad
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        <div className="p-3 space-y-3">
          <div>
            <p className="text-xs font-medium text-gray-700 mb-2">Tamaño del texto</p>
            <div className="flex gap-2">
              <button className="flex-1 p-1.5 bg-gray-50 hover:bg-primary/10 text-gray-700 rounded text-sm flex items-center justify-center gap-1 transition-colors duration-200">
                <ZoomIn className="h-3 w-3" />
                <span>Aumentar</span>
              </button>
              <button className="flex-1 p-1.5 bg-gray-50 hover:bg-primary/10 text-gray-700 rounded text-sm flex items-center justify-center gap-1 transition-colors duration-200">
                <ZoomOut className="h-3 w-3" />
                <span>Reducir</span>
              </button>
            </div>
          </div>

          {/* Alto contraste */}
          <button className="w-full p-1.5 bg-gray-900 text-white rounded text-sm flex items-center justify-center gap-1 transition-colors duration-200">
            <Moon className="h-3 w-3" />
            <span>Alto contraste</span>
          </button>

          {/* Lector de texto */}
          <button className="w-full p-1.5 bg-primary/10 text-primary rounded text-sm flex items-center justify-center gap-1 hover:bg-primary hover:text-white transition-colors duration-200">
            <Volume2 className="h-3 w-3" />
            <span>Lector de texto</span>
          </button>

          {/* Dislexia */}
          <button className="w-full p-1.5 bg-secondary/10 text-secondary rounded text-sm flex items-center justify-center gap-1 hover:bg-secondary hover:text-white transition-colors duration-200">
            <Type className="h-3 w-3" />
            <span>Fuente para dislexia</span>
          </button>

          {/* Esquema de colores */}
          <button className="w-full p-1.5 bg-gray-50 hover:bg-primary/10 text-gray-700 rounded text-sm flex items-center justify-center gap-1 transition-colors duration-200">
            <Paintbrush className="h-3 w-3" />
            <span>Esquema de colores</span>
          </button>

          {/* Restablecer */}
          <button className="w-full p-1.5 border border-gray-200 text-gray-600 rounded text-sm flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors duration-200">
            <RotateCcw className="h-3 w-3" />
            <span>Restablecer ajustes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityMenu;