import React from 'react'
import { Link } from 'react-router-dom';

export function Inicio() {
  return (
    <div>
      <h1>Bienvenido al Sistema Central</h1>
      <p>
        Esta es la ruta raíz (<strong>/</strong>). Desde aquí controlamos
        el acceso a los diferentes módulos de la aplicación.
      </p>
      <div>
        <h3>¿Quieres conocer más sobre el proyecto?</h3>
        {/* Demostración de navegación interna desde el contenido, no desde el menú */}
        <Link to="/acerca">
          Ir a la sección Acerca de
        </Link>
      </div>
    </div>
  );
}
