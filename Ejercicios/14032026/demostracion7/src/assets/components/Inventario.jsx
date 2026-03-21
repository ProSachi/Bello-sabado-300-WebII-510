import { Link } from 'react-router-dom';

const Inventario = () => {
    const productos = [
        { id: 1, nombre: "Laptop", stock: 15 },
        { id: 2, nombre: "Teclado Mecánico", stock: 0 }
    ];

    return (
        <div className="vista-pagina">
            <h2>📦 Gestión de Inventario</h2>
            <p>Control de existencias en almacén.</p>

            <ul>
                {productos.map(prod => (
                    <li key={prod.id} style={{ color: prod.stock === 0 ? 'red' : 'black' }}>
                        {prod.nombre} - Stock: {prod.stock}
                    </li>
                ))}
            </ul>

            {/* Navegación interna */}
            <Link to="/reportes" className="btn-secundario">Ver Reportes</Link>
        </div>
    );
}

export default Inventario
