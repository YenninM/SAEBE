import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/inicio';
import Acerca from './components/Acerca';
import Contacto from './components/Contacto'; // Importa el componente Contacto
import Login from './components/Login';


function App() {
  return (
    
    <div class="contenedor">
    <Router>
      <div className="App">
        <nav>
          <div className="nav-logo">
            <Link to="/">
              <img src="/logo.png" alt="Logo de la empresa" />
            </Link>
          </div>
          <ul className="nav-list">
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/acerca">Acerca De Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/iniciar-sesion">Iniciar Sesión</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
