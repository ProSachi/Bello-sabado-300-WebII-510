function Navbar() {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem' }}>
      <h2>Mi Sitio Web Increíble</h2>
      <nav>
         <a href="#" style={{color: 'white', marginRight: '10px'}}>Inicio</a>
         <a href="#" style={{color: 'white'}}>Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;
