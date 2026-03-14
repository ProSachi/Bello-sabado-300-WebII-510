
import { Link } from 'react-router-dom';

export function Acerca() {
  return (
    <div>
      <h1>Acerca de este Proyecto</h1>
      <p>
        Esta es la ruta secundaria (<strong>/acerca</strong>). 
        Como puedes notar, la página no se recargó para llegar hasta aquí, 
        el Virtual DOM simplemente destruyó el componente "Inicio" y dibujó este.
      </p>

      <div>
        <h2>Nuestro Equipo</h2>
        <ul>
          <li>Desarrollo Frontend</li>
          <li>Arquitectura de Rutas</li>
        </ul>
      </div>

      {/* Botón de regreso usando Link */}
      <Link to="/">
        Volver al Inicio
      </Link>
    </div>
  );
}