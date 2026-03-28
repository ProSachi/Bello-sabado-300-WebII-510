export function CampoTexto() {
  const capturarTeclado = (e) => {
    // e.target.value contiene la letra exacta que se acaba de presionar
    console.log("El usuario escribió:", e.target.value);
  };

  return (
    <input type="text" onChange={capturarTeclado} placeholder="Escribe tu nombre..." />
  );
}
