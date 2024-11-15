import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { candidateService } from '../services/api';

const Matches = () => {
  const { candidateId } = useParams();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await candidateService.getMatches(candidateId);
        setMatches(response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, [candidateId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#9333EA] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">¡Encontramos trabajos para ti!</h2>
        <p className="mt-4 text-lg text-gray-600">
          Basado en tu perfil, estos son los trabajos que mejor se ajustan a tus habilidades y preferencias
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <div 
            key={match.job._id} 
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="px-4 py-2 text-sm font-semibold text-white bg-[#9333EA] rounded-full">
                {match.compatibilityScore}% Match
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">{match.job.titulo}</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Empresa</p>
                <p className="text-gray-900">{match.job.empresa.nombre}</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Modalidad</p>
                  <p className="text-gray-900">{match.job.condicionesLaborales.modalidad}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Salario</p>
                  <p className="text-gray-900">{match.job.condicionesLaborales.rangoSalarial}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">¿Por qué es una buena opción para ti?</p>
                <ul className="space-y-2">
                  {match.analysis.razones_match.map((razon, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <svg 
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-600">{razon}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {match.analysis.sugerencias_adaptacion && (
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Adaptaciones sugeridas</p>
                  <ul className="space-y-2">
                    {match.analysis.sugerencias_adaptacion.map((sugerencia, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg 
                          className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        <span className="text-gray-600">{sugerencia}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;