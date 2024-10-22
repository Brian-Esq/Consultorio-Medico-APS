import { useState, useEffect } from 'react';
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
import Inventario from './Pages/Inventario/inventario';
import HeaderPac from './Componentes/HeaderPac/headerPac';
import NuevaCita from './PatPages/NuevaCita/nuevacita';
import MisCitas from './PatPages/MisCitas/miscitas';
import Perfil from './PatPages/PerfilPac/perfil';
import "bootstrap/dist/css/bootstrap.min.css";

interface User {
  user: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPatient, setIsPatient] = useState(false);

  useEffect(() => {
    // Leer el estado de autenticación de localStorage al cargar la aplicación
    const authStatus = localStorage.getItem('isAuthenticated');
    const userType = localStorage.getItem('userType');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      if (userType === 'Paciente') {
        setIsPatient(true);
      }
    }
  }, []);

  const handleLogin = (user: User) => {
    setIsAuthenticated(true);
    if (user.user.toLowerCase() === 'paciente') {
      setIsPatient(true);
      localStorage.setItem('userType', 'Paciente');
    } else {
      setIsPatient(false);
      localStorage.setItem('userType', 'Doctor');
    }
    localStorage.setItem('isAuthenticated', 'true'); // Guardar el estado en localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsPatient(false);
    localStorage.removeItem('isAuthenticated'); // Eliminar el estado de localStorage
    localStorage.removeItem('userType'); // Eliminar el tipo de usuario de localStorage
  };

  return (
    <main className="App">
      <BrowserRouter>
        {isAuthenticated ? (
          <>
            {isPatient ? (
              <>
                <HeaderPac onLogout={handleLogout} />
                <div className="mainCont">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nuevacita" element={<NuevaCita />} />
                    <Route path="/miscitas" element={<MisCitas />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </div>
                <Footer />
              </>
            ) : (
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
                    <Route path="/inventario" element={<Inventario />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </div>
                <Footer />
              </>
            )}
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </BrowserRouter>
    </main>
  );
}

export default App;