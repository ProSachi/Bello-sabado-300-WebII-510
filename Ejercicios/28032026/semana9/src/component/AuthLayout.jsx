
// Layout para páginas públicas/limpias (No tiene menú)
function AuthLayout({ children }) {
  return (
    <div className="fondo-login">
      {/* Simplemente renderiza el contenido, sin adornos */}
      {children} 
    </div>
  );
}

export default AuthLayout
