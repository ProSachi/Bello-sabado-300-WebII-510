import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function BotonSalida() {
  // Desestructuración directa de la función global
  const { logout, usuario } = useContext(AuthContext);

  if (!usuario) return null;

  return <button onClick={logout}>Desconectar a {usuario.nombre}</button>;
}
