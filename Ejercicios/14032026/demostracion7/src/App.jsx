import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './assets/components/Inicio';
import Inventario from './assets/components/Inventario';
import NoEncontrado from './assets/components/NoEncontrado';
import Reportes from './assets/components/Reportes';

function App() {
  return (
    <BrowserRouter>
      {/* Menú Global (Podría estar en su propio archivo Menu.jsx también) */}
      <nav style={{ background: '#333', padding: '10px' }}>
        <Link to="/inicio" style={{ color: 'white', marginRight: '15px' }}>Inicio</Link>
        <Link to="/inventario" style={{ color: 'white', marginRight: '15px' }}>Inventario</Link>
        <Link to="/reportes" style={{ color: 'white', marginRight: '15px' }}>Reportes</Link>
        <Link to="/" style={{ color: 'white' }}>LinkRoto</Link>
      </nav>

      {/* Contenedor dinámico */}
      <main style={{ padding: '20px' }}>
        <Routes>
          {/* Reglas de ruteo conectadas a los archivos importados */}
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/reportes" element={<Reportes />} />

          {/* Ruta Comodín para atrapar errores de tipeo en la URL */}
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App
