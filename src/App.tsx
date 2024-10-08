import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Consulta from './Pages/Consulta/consulta';
import Home from './Pages/Home/home';
import Header from './Componentes/Header/header';
import Footer from './Componentes/Footer/footer';
import Citas from './Pages/Citas/citas';
import Settings from './Pages/Config/config';
import Reportes from './Pages/Reportes/reportes';
import Login from './Pages/Login/login';
import Expedientes from './Pages/Expedientes/expedientes';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Leer el estado de autenticación de localStorage al cargar la aplicación
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Guardar el estado en localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Eliminar el estado de localStorage
  };

  return (
    <main className="App">
      <BrowserRouter>
        {isAuthenticated ? (
          <>
            <Header onLogout={handleLogout} />
            <div className="mainCont">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consulta/:id" element={<Consulta />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/config" element={<Settings />} />
                <Route path="/reportes" element={<Reportes />} />
                <Route path="/expedientes" element={<Expedientes />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
            <Footer />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </BrowserRouter>
    </main>
  );
}

export default App;