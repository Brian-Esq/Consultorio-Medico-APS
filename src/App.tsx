import React, { useState } from 'react';
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

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <main className="App">
      <BrowserRouter>
        {isAuthenticated ? (
          <>
            <Header />
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