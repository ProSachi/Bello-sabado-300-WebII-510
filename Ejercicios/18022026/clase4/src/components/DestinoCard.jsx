export function DestinoCard({ ciudad, pais, imagen, precio }) {
  return (
    <div className="card-turismo">
      <img src={imagen} alt={ciudad} className="card-img" />
      <div className="card-body">
        <h2>{ciudad}</h2>
        <p className="subtitulo">{pais}</p>
        <span className="precio">US$ {precio}</span>
        <button>Reservar</button>
      </div>
    </div>
  );
}
