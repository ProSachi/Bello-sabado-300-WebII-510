export function BotonAccion() {
  const procesarPago = (monto) => {
    alert(`Procesando pago de $${monto}`);
  };

  return (
    // Observa la función envoltura para poder pasar el argumento '100'
    <button onClick={() => procesarPago(100)}>
      Pagar $100
    </button>
  );
}
