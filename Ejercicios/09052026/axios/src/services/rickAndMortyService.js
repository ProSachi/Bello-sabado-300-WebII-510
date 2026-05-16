import axiosInstance from '../config/axiosConfig';

// Servicio para consumir la API de Rick and Morty

export const rickAndMortyService = {
  // Obtener todos los personajes (con paginación)
  getCharacters: async (page = 1) => {
    try {
      const response = await axiosInstance.get(`/character?page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener personajes: ${error.message}`);
    }
  },

  // Obtener un personaje por ID
  getCharacterById: async (id) => {
    try {
      const response = await axiosInstance.get(`/character/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener personaje: ${error.message}`);
    }
  },

  // Buscar personajes por nombre
  searchCharacters: async (name) => {
    try {
      const response = await axiosInstance.get(`/character/?name=${name}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al buscar personajes: ${error.message}`);
    }
  },

  // Obtener ubicaciones
  getLocations: async (page = 1) => {
    try {
      const response = await axiosInstance.get(`/location?page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener ubicaciones: ${error.message}`);
    }
  },

  // Obtener episodios
  getEpisodes: async (page = 1) => {
    try {
      const response = await axiosInstance.get(`/episode?page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener episodios: ${error.message}`);
    }
  },
};
