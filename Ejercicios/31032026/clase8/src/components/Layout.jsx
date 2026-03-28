// src/components/ Layout.jsx
import { Link } from 'react-router-dom';
import './Layout.css'; 

export function Layout({ children }) {
  return (
    <div className="contenedor-principal">
      <header className="cabecera">
        <h2>Mi Sistema Escolar</h2>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/estudiantes">Estudiantes</Link>
        </nav>
      </header>

      <main className="area-de-trabajo">
        {children}
      </main>

      <footer className="pie-pagina">
        <p>Sistema de Gestión - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
