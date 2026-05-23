import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { apiClient } from '../api/axiosConfig'; // Descomentar para API real

export function Dashboard() {
  const { usuario, logout } = useContext(AuthContext);
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatosSeguros = async () => {
      try {
        setLoading(true);
        // Llamada real a la API
        const response = await apiClient.get('/recursos-privados');
        setDatos(response.data);
        setError(null);
      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError('No se pudieron cargar los datos');
        // Datos de respaldo en caso de error
        setDatos([{ id: 1, info: "Reporte Confidencial A (simulado)" }]);
      } finally {
        setLoading(false);
      }
    };
    cargarDatosSeguros();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Panel de Control</h2>
        <button onClick={logout}>Cerrar Sesión</button>
      </header>
      <p>Bienvenido/a, <strong>{usuario.nombre}</strong></p>
      <Link to="/perfil">Ver mi perfil →</Link>
      
      <div style={{ border: '1px solid gray', padding: '10px', marginTop: '20px' }}>
        <h3>Datos Restringidos:</h3>
        {loading && <p>Cargando datos...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && datos.map(d => <p key={d.id}>{d.info}</p>)}
      </div>
    </div>
  );
}
