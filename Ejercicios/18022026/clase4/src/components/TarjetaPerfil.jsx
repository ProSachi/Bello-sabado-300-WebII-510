export function TarjetaPerfil({ nombre, rol, foto }) {
  
  // Estilos simples para la tarjeta
  const estiloCard = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "200px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
  };

  return (
    <div style={estiloCard}>
      {/* 2. Usamos la prop 'foto' en el src */}
      <img 
        src={foto} 
        alt={`Foto de ${nombre}`} 
        style={{ borderRadius: "50%", width: "100px" }} 
      />
      
      {/* 3. Inyectamos las props de texto */}
      <h3 style={{ margin: "10px 0", color: "#333" }}>{nombre}</h3>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>{rol}</p>
      
      <button style={{ cursor: "pointer", marginTop: "10px" }}>
        Contactar
      </button>
    </div>
  );
}
