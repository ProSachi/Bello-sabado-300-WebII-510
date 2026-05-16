import axios from 'axios';

// Configuración de integración de acuerdo con características técnicas
export const apiPublica = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 8000, // Parámetro técnico: no esperar más de 8 segundos
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer Cesde_Docente_225'
    // Aquí irían los parámetros de licenciamiento si la API lo requiriera
  }
});
