import { dataDestinos } from './data/destinos';
import { DestinoCard } from './components/DestinoCard';
import './App.css'

function App() {
  return (
    <div className="contenedor-principal">
      <h1>Nuestros Destinos</h1>
      <div className="grilla-destinos">
        {/* Iteramos sobre la "base de datos" */}
        {dataDestinos.map((destino) => (
          <DestinoCard
            key={destino.id} // VITAL: Identificador único para React
            ciudad={destino.ciudad}
            pais={destino.pais}
            imagen={destino.img}
            precio={destino.precio} />
        ))}
      </div>
    </div>
  );
}


export default App
