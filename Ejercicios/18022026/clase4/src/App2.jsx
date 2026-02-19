import { TarjetaPerfil } from './components/TarjetaPerfil'
import { equipo } from './data/datos'
 
function App2() {
    return (
        <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
            <h1>Nuestro Equipo de Trabajo</h1>

            {/* Contenedor Flex para poner las tarjetas una al lado de la otra */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

                {/* Mapeamos el arreglo 'equipo' */}
                {equipo.map((miembro) => (

                    <TarjetaPerfil
                        key={miembro.id}         // OBLIGATORIO: Identificador único
                        nombre={miembro.nombre}   // Pasamos datos del objeto a la prop
                        rol={miembro.rol}
                        foto={miembro.foto}
                    />

                ))}

            </div>
        </div>
    );
}

export default App2;
