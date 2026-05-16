import { useState, useEffect } from 'react';
import { usuariosService } from '../services/usuariosService';

export function Directorio() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // La llamada es semántica y directa
        const datos = await usuariosService.obtenerTodos();
        setUsuarios(datos);
      } catch (err) {
        // Axios guarda el error del servidor en err.response
        const mensaje = err.response ? `Error servidor: ${err.response.status}` : err.message;
        setError(mensaje);
      } finally {
        setCargando(false);
      }
    };
    cargarDatos();
  }, []);

  if (cargando) return <h3>Cargando sistema...</h3>;
  if (error) return <h3 style={{ color: 'red' }}>{error}</h3>;

  return (
    <ul>
      {usuarios.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
