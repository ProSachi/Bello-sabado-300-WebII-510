function TarjetaBase({ children }) {
  return <div className="caja-con-sombra">{children}</div>;
}

// 2. El Uso (El Relleno)
<TarjetaBase>
  {/* Todo esto es el "children" */}
  <h2>Título inyectado</h2>
  <button>Aceptar</button>
</TarjetaBase>

export default TarjetaBase