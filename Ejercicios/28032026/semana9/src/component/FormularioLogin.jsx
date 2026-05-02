import { useState } from 'react';

export function FormularioLogin() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    console.log("Enviando:", correo, password);
  };

  return (
    <form onSubmit={enviar} style={{ padding: '20px', border: '1px solid gray' }}>
      <h3>Login (2 Estados)</h3>
      
      {/*  Manejadores individuales y repetitivos */}
      <input 
        type="email" 
        value={correo} 
        onChange={(e) => setCorreo(e.target.value)} 
        placeholder="Correo"
      />
      <br/><br/>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Contraseña"
      />
      <br/><br/>
      <button type="submit">Ingresar</button>
    </form>
  );
}



export default FormularioLogin