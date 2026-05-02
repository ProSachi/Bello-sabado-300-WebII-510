
// Layout para el sistema interno (Tiene menú y pie de página)
function MainLayout({ children }) {
  return (
    <div>
      <nav>Menú Principal</nav>
      <main>{children}</main>
      <footer>Derechos Reservados</footer>
    </div>
  );
}

export default MainLayout