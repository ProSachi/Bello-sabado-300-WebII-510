import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { RutaProtegida } from './components/RutaProtegida';

// Vistas
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Perfil } from './pages/Perfil';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* --- RUTAS PÚBLICAS --- */}
          <Route path="/login" element={<Login />} />

          {/* --- RUTAS PRIVADAS (Aseguradas) --- */}
          <Route path="/" element={
            <RutaProtegida>
              <Dashboard />
            </RutaProtegida>
          } />
          
          <Route path="/perfil" element={
            <RutaProtegida>
              <Perfil />
            </RutaProtegida>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
