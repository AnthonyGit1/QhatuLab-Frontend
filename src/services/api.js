const API_URL = import.meta.env.VITE_API_URL;

export const candidateService = {
  create: async (candidateData) => {
    try {
      const response = await fetch(`${API_URL}/candidates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(candidateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error al crear el candidato:', errorData);
        throw new Error('Error al crear el candidato');
      }

      return await response.json();
    } catch (error) {
      console.error('Error al crear el candidato:', error);
      throw error;
    }
  },

  getMatches: async (candidateId) => {
    try {
      const response = await fetch(`${API_URL}/match/candidate/${candidateId}`);
      console.log(response);
      return await response.json();
    } catch (error) {
      throw new Error('Error al obtener matches');
    }
  }
};