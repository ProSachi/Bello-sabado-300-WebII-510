import React from 'react'
import { Link } from 'react-router-dom';

const NoEncontrado = () => {
    return (
        <div className="vista-error" style={{ textAlign: 'center', padding: '50px' }}>
            <h1 style={{ fontSize: '4rem', color: '#ff4444', margin: '0' }}>404</h1>
            <h2>Página no encontrada</h2>
            <p>Parece que te perdiste en el sistema. La ruta que buscas no existe.</p>

            {/* La vía de escape obligatoria */}
            <Link to="/inicio" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                background: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
            }}>
                Regresar a lugar seguro (Inicio)
            </Link>
        </div>
    );
}

export default NoEncontrado