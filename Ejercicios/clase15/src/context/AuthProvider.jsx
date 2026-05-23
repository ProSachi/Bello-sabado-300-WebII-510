import { useState } from 'react';
import { AuthContext } from './AuthContext';

// Creamos el Provider personalizado
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = (datosUsuario) => setUsuario(datosUsuario);
  const logout = () => setUsuario(null);

  // Exponemos el estado y los mutadores
  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
