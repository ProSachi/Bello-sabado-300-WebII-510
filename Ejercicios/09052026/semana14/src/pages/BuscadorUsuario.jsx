import { useState } from 'react';
// Importamos el mismo servicio exacto que usamos en el Directorio
import { usuariosService } from '../services/usuariosService';

export function BuscadorUsuario() {
    // 1. Estado para el input controlado
    const [idBusqueda, setIdBusqueda] = useState("");

    // 2. La Trinidad del Estado (Inician vacíos porque no buscamos nada al cargar)
    const [usuario, setUsuario] = useState(null); // 'null' porque esperamos un Objeto, no un Arreglo
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    // 3. Función manejadora del evento de búsqueda
    const ejecutarBusqueda = async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Validación de seguridad básica
        if (!idBusqueda || idBusqueda <= 0) {
            setError("Por favor, ingresa un ID válido (mayor a 0).");
            return;
        }

        // Reiniciamos los estados antes de buscar
        setCargando(true);
        setError(null);
        setUsuario(null);

        try {
            // MAGIA ARQUITECTÓNICA: Consumimos el método específico del servicio
            const datos = await usuariosService.obtenerPorId(idBusqueda);

            // Guardamos el objeto devuelto en el estado
            setUsuario(datos);

        } catch (err) {
            // Si el ID no existe (ej. ID 999), Axios lanzará un error 404
            const mensaje = err.response && err.response.status === 404
                ? "Usuario no encontrado en la base de datos."
                : "Error de conexión con el servidor.";

            setError(mensaje);
        } finally {
            // Pase lo que pase, apagamos el indicador de carga
            setCargando(false);
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h2>Buscar Usuario por ID</h2>

            {/* Formulario que dispara la búsqueda */}
            <form onSubmit={ejecutarBusqueda} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="number"
                    value={idBusqueda}
                    onChange={(e) => setIdBusqueda(e.target.value)}
                    placeholder="Ej. 3"
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e0',
                        color: '#333', // 👈 ¡SOLUCIÓN 1: Fuerza la tinta del input a gris oscuro!
                        backgroundColor: 'white' // Aseguramos el fondo blanco
                    }}
                />
                <button
                    type="submit"
                    disabled={cargando}
                    style={{ padding: '10px 20px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '4px', cursor: cargando ? 'not-allowed' : 'pointer' }}
                >
                    {cargando ? 'Buscando...' : 'Buscar'}
                </button>
            </form>

            {/* --- RENDERIZADO CONDICIONAL DE RESULTADOS --- */}

            {error && (
                <div style={{ backgroundColor: '#fed7d7', color: '#c53030', padding: '10px', borderRadius: '4px' }}>
                    ❌ {error}
                </div>
            )}

            {/* Como 'usuario' es un objeto único, no usamos .map(), accedemos directamente a sus llaves */}
            {usuario && !cargando && (
                <div style={{
                    backgroundColor: '#f7fafc',
                    padding: '20px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #3182ce',
                    color: '#333' // 👈 ¡SOLUCIÓN 2: Fuerza el texto de esta caja a gris oscuro!
                }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>👤 {usuario.name}</h3>
                    <p style={{ margin: '5px 0' }}><strong>Email:</strong> {usuario.email}</p>
                    <p style={{ margin: '5px 0' }}><strong>Teléfono:</strong> {usuario.phone}</p>
                    <p style={{ margin: '5px 0' }}><strong>Empresa:</strong> {usuario.company?.name}</p>
                </div>
            )}
        </div>
    );
}
