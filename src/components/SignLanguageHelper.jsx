import React, { useState } from "react";
import {
  HandMetal,
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";

const SignLanguageHelper = ({ section, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-[70vh] z-[9999]">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-10 h-9 bg-gradient-to-r from-primary to-secondary rounded-l-lg hover:shadow-xl transition-all duration-300" // Cambiado: rounded-full por rounded-l-lg
          aria-label="Ayuda en lenguaje de señas"
        >
          <HandMetal className="h-6 w-6 text-white" />

          <div className="absolute right-full mr-3 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Lenguaje de señas
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Modal con animación suave */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Overlay con animación */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            style={{
              animation: "fadeIn 0.3s ease-out forwards",
            }}
          />

          {/* Modal content con animación */}
          <div
            className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 overflow-hidden"
            style={{
              animation: "scaleIn 0.3s ease-out forwards",
            }}
          >
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-2">
                <HandMetal className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-gray-900">
                  Explicación en Lenguaje de Señas
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative bg-black aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/api/placeholder/640/360"
                  alt="Video placeholder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <p className="text-white text-center px-4">
                    [Video en lenguaje de señas explicando: {title}]
                  </p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </button>
                    <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                      <RotateCcw className="h-5 w-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-6">
              <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default SignLanguageHelper;
