import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { VistaInicio } from './views/VistaInicio';
import { VistaEstudiantes } from './views/VistaEstudiantes';

const dbEstudiantes = [
  { id: 1, nombre: "Ana Gómez", grado: "10A" },
  { id: 2, nombre: "Carlos Ruiz", grado: "11B" }
];

export default function App() {
  return (
    <BrowserRouter>
      {/* El Layout envuelve a TODAS las rutas. Todo lo que está dentro es el 'children' */}
      <Layout>
        <Routes>
          <Route path="/" element={<VistaInicio />} />
          
          {/* Pasamos datos estáticos por Props a la vista */}
          <Route 
            path="/estudiantes" 
            element={<VistaEstudiantes listaDatos={dbEstudiantes} />} 
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
