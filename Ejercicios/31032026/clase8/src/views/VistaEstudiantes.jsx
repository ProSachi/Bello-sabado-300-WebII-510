import { TarjetaEstudiante } from '../components/TarjetaEstudiante';


export function VistaEstudiantes({ listaDatos }) {
  return (
    <div>
      <h2>Directorio de Estudiantes</h2>
      {/* Usamos las props recibidas para renderizar los componentes tontos */}
      {listaDatos.map(estudiante => (
        <TarjetaEstudiante 
          key={estudiante.id} 
          nombre={estudiante.nombre} 
          grado={estudiante.grado} 
        />
      ))}
    </div>
  );
}
