import React, { useState, useRef, useEffect } from "react";
import { HandMetal, X, Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";

const SignLanguageHelper = ({ section, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const isDisabilitySection = section === "disability";

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("play", () => setIsPlaying(true));
      video.addEventListener("pause", () => setIsPlaying(false));
      video.addEventListener("ended", () => setIsPlaying(false));
    }
    
    // Limpiar al desmontar
    return () => {
      if (video) {
        video.pause();
        video.removeEventListener("play", () => setIsPlaying(true));
        video.removeEventListener("pause", () => setIsPlaying(false));
        video.removeEventListener("ended", () => setIsPlaying(false));
      }
    };
  }, [isOpen]);

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed right-0 top-[70vh] z-[9999]">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-10 h-9 bg-gradient-to-r from-primary to-secondary rounded-l-lg hover:shadow-xl transition-all duration-300"
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

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            style={{ animation: "fadeIn 0.3s ease-out forwards" }}
          />

          <div
            className="relative bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden"
            style={{ animation: "scaleIn 0.3s ease-out forwards" }}
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

            {/* Contenido */}
            {isDisabilitySection ? (
              // Contenedor de video para la sección inicial
              <div className="relative bg-black aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  muted={isMuted}
                >
                  <source src="/videos/signs/disability.mp4" type="video/mp4" />
                </video>

                {/* Controles de video */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePlayPause}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </button>
                      <button
                        onClick={handleRestart}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      >
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
            ) : (
              // Mensaje para otras secciones
              <div className="p-8 text-center bg-gray-50">
                <p className="text-gray-600 mb-2">
                  Lo sentimos, el contenido en lenguaje de señas para esta sección 
                  estará disponible próximamente.
                </p>
                <p className="text-sm text-gray-500">
                  Estamos trabajando para hacer nuestra plataforma más accesible.
                </p>
              </div>
            )}

            {/* Descripción */}
            <div className="p-4">
              <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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