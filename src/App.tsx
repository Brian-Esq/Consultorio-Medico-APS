import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Consulta from './Pages/Consulta/consulta';
import Home from './Pages/Home/home';
import Header from './Componentes/Header/header';
import Footer from './Componentes/Footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
