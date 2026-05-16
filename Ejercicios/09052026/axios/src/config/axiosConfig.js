import axios from 'axios';

// Configuración base de axios
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para las peticiones
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Petición enviada:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para las respuestas
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Respuesta recibida:', response.status);
    return response;
  },
  (error) => {
    console.error('Error en la petición:', error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
