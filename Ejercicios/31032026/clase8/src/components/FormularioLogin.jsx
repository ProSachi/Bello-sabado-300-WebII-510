export function FormularioLogin() {
  const procesarFormulario = (e) => {
    // 1. OBLIGATORIO: Detiene la recarga de la página
    e.preventDefault(); 
    
    // 2. Aquí iría la lógica para enviar los datos a la base de datos (fetch/axios)
    console.log("Enviando datos al servidor de forma silenciosa...");
  };

  return (
    <form onSubmit={procesarFormulario}>
      <input type="email" placeholder="Correo" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>
  );
}
