import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';
import Home from '../pages/Home';

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem('token') !== null; 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/" element={<Navigate to="/cadastro" replace />} />
        <Route path="*" element={<Navigate to="/cadastro" />} />

      </Routes>
    </BrowserRouter>
  );
};