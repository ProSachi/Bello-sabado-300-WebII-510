import { useState } from 'react';

export function FormularioRegistro() {
  
  // 1. Declaración Centralizada: Un solo hook inicializado con un objeto
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    password: "",
    telefono: ""
  });

  // 2. La Función Maestra (Sirve para 4 campos o para 40)
  const manejarCambio = (e) => {
    // Extraemos el 'name' (qué input escribió) y el 'value' (qué escribió)
    const { name, value } = e.target;
    
    setFormulario({
      ...formulario,    // Operador Spread: "Copia todo lo que ya estaba"
      [name]: value     // Llave dinámica: "Sobrescribe solo el campo que cambió"
    });
  };

  const enviar = (e) => {
    e.preventDefault();
    console.log("Enviando Objeto Completo:", formulario);
  };

  return (
    <form onSubmit={enviar} style={{ padding: '20px', border: '1px solid blue' }}>
      <h3>Registro (+3 Estados)</h3>
      
      {/* 3. Conexión limpia. El atributo 'name' ES OBLIGATORIO y debe ser igual a la llave del estado */}
      <input 
        type="text" 
        name="nombre" 
        value={formulario.nombre} 
        onChange={manejarCambio} 
        placeholder="Nombre Completo"
      />
      <br/><br/>
      
      <input 
        type="email" 
        name="correo" 
        value={formulario.correo} 
        onChange={manejarCambio} 
        placeholder="Correo"
      />
      <br/><br/>
      
      <input 
        type="password" 
        name="password" 
        value={formulario.password} 
        onChange={manejarCambio} 
        placeholder="Contraseña"
      />
      <br/><br/>
      
      <input 
        type="tel" 
        name="telefono" 
        value={formulario.telefono} 
        onChange={manejarCambio} 
        placeholder="Teléfono"
      />
      <br/><br/>
      
      <button type="submit">Registrar Usuario</button>
    </form>
  );
}

export default FormularioRegistro