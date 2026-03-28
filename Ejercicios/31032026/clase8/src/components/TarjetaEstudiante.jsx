import './TarjetaEstudiante.css'; 

export function TarjetaEstudiante({ nombre, grado }) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>{nombre}</h3>
            <p>Grado: {grado}</p>
        </div>
    );
}
