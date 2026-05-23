
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      // Simulamos el login con los datos del usuario
      login({ 
        nombre, 
        email: `${nombre.toLowerCase()}@example.com`,
        rol: 'usuario'
      });
      // Redirigimos al dashboard
      navigate('/');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Nombre de usuario:
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            style={{ 
              width: '100%', 
              padding: '8px', 
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Ingresar
        </button>
      </form>
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        💡 Tip: Ingresa cualquier nombre para probar el sistema
      </p>
    </div>
  );
}


