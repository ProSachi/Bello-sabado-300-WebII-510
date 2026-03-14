import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Acerca } from './pages/Acerca';

function App() {
  return (
    <BrowserRouter> {/* 1. Habilita el modo navegación */}
      
      {/* Todo lo que esté FUERA de <Routes> se verá en todas las páginas (Ej: Menú) */}
      <nav>
        <Link to="/">Inicio</Link> {/* 4. Enlace sin recarga */}
        <Link to="/acerca">Acerca de</Link>
      </nav>

      <Routes> {/* 2. Contenedor de reglas */}
        {/* 3. Las reglas: path="ruta" element={<Componente/>} */}
        <Route path="/" element={<Inicio />} /> 
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App
