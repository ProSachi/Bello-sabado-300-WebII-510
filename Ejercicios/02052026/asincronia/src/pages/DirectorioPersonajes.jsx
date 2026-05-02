import { useState, useEffect } from 'react';
export function DirectorioPersonajes() {
    // 1. La Trinidad del Estado
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerPersonajes = async () => {
            // Configuramos los parámetros técnicos (Simulación de licenciamiento/reglas)
            try {
                // Ejecutamos la petición asíncrona
                const respuesta = await fetch('https://rickandmortyapi.com/api/character');
                if (!respuesta.ok) {
                    throw new Error(`Fallo de integración. Código: ${respuesta.status}`);
                }
                const data = await respuesta.json();
                setPersonajes(data.results);
            } catch (err) {
                setError(err.message); // Guardamos el error para mostrarlo
            } finally {
                setCargando(false); // Apagamos el 'spinner'
            }
        };
        obtenerPersonajes();
    }, []); // 🛡️ ESCUDO: Arreglo vacío, solo se ejecuta al montar.

    // --- RENDERIZADO CONDICIONAL ---

    // 1. Estado de Carga
    if (cargando) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Conectando con el servidor intergaláctico... 🛸</h2>
            </div>
        );
    }

    // 2. Estado de Error
    if (error) {
        return (
            <div style={{ backgroundColor: '#fed7d7', color: '#c53030', padding: '20px', borderRadius: '8px' }}>
                <h2>❌ Error de Conexión</h2>
                <p>{error}</p>
                <p>Por favor, contacte a soporte técnico.</p>
            </div>
        );
    }

    // 3. Estado de Éxito
    return (
        <div style={{ padding: '20px' }}>
            <h2>Directorio del Multiverso</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

                {personajes.map((personaje) => (
                    <div key={personaje.id} style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', width: '200px' }}>
                        <img src={personaje.image} alt={personaje.name} style={{ width: '100%' }} />
                        <div style={{ padding: '10px' }}>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{personaje.name}</h3>
                            <p style={{ margin: 0, color: personaje.status === 'Alive' ? 'green' : 'red' }}>
                                {personaje.status}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
 export default DirectorioPersonajes
