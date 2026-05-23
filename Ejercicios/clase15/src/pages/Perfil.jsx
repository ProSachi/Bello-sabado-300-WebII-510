
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const Perfil = () => {
  const { usuario } = useContext(AuthContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mi Perfil</h2>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
        <p><strong>Nombre:</strong> {usuario?.nombre}</p>
        <p><strong>Email:</strong> {usuario?.email}</p>
        <p><strong>Rol:</strong> {usuario?.rol}</p>
      </div>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px' }}>← Volver al Dashboard</Link>
    </div>
  );
}
