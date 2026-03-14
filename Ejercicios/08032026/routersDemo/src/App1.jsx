import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inventario from './pages/Inventario';
import Reportes from './pages/Reportes';
import NoEncontrado from './pages/NoEncontrado';
import Inicio from './pages/Inicio';
import './App.css';


const MenuNavegacion = () => (
  <nav className="navbar">
    <h1>Mi Sistema</h1>
    <ul>
      {/* Usamos Link en lugar de <a>, y 'to' en lugar de 'href' */}
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/inventario">Inventario</Link></li>
      <li><Link to="/reportes">Reportes</Link></li>
    </ul>
  </nav>
);

export default function App1() {
  return (
    <BrowserRouter>

      {/* Menú Global (Podría estar en su propio archivo Menu.jsx también) */}
      <nav style={{ background: '#333', padding: '10px' }}>
        <Link to="/inicio" style={{ color: 'white', marginRight: '15px' }}>Inicio</Link>
        <Link to="/inventario" style={{ color: 'white', marginRight: '15px' }}>Inventario</Link>
        <Link to="/reportes" style={{ color: 'white', marginRight: '15px'  }}>Reportes</Link>
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