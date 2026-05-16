import { apiPublica } from '../api/axiosConfig';

export const usuariosService = {
  
  obtenerTodos: async () => {
    // Fíjate en la limpieza: No hay .json(), no hay validación manual de errores
    const respuesta = await apiPublica.get('/users');
    return respuesta.data; // Axios siempre envuelve la respuesta del servidor en '.data'
  },

  obtenerPorId: async (id) => {
    const respuesta = await apiPublica.get(`/users/${id}`);
    return respuesta.data;
  },

    obtenerPorName: async (nombre) => {
    const respuesta = await apiPublica.get(`/users/${nombre}`);
    return respuesta.data;
  },



};
