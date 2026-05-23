import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export function RutaProtegida({ children }) {
  const { usuario } = useContext(AuthContext);

  // Política de seguridad: Si no hay token/usuario, expulsar.
  if (!usuario) {
    return <Navigate to="/login" replace />; 
    // 'replace' borra el historial para que el usuario no pueda volver atrás con la flecha
  }

  // Si pasa la validación, dibujamos la pantalla solicitada
  return children;
}
