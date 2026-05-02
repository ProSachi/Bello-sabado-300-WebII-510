import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './component/MainLayout'
import AuthLayout from './component/AuthLayout'
import Login from './component/Login';
import Registro from './component/Registro';
import Dashboard from './component/Dashboard';
import Inventario from './component/Inventario';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* GRUPO 1: Vistas que usan el AuthLayout (Sin menú) */}
        <Route path="/login" element={
          <AuthLayout> <Login /> </AuthLayout>
        } />
        <Route path="/registro" element={
          <AuthLayout> <Registro /> </AuthLayout>
        } />

        {/* GRUPO 2: Vistas que usan el MainLayout (Con menú) */}
        <Route path="/" element={
          <MainLayout> <Dashboard /> </MainLayout>
        } />
        <Route path="/inventario" element={
          <MainLayout> <Inventario /> </MainLayout>
        } />

      </Routes>
    </BrowserRouter>

  )
}

export default App
