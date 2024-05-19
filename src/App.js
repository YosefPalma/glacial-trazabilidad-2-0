import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Modificado para agregar 'Routes'

import './App.css'; // Asegúrate de tener el archivo CSS correspondiente en la misma carpeta

// Componente para la página de bienvenida
function WelcomePage() {
  return (
    <div className="contenedor">
      <header>
        <img src="./img/Glacial.png" alt="Imagen principal" className="imagen-principal" width="100" height="400" />
        <h1 className="titulo">¡Bienvenido a Glacial!</h1>
        <h1>Para ir a las estaciones, presiona el botón de iniciar</h1>
        <img src="./img/Obrero.png" alt="Obrero" className="Obrero" width="100" height="400" />
        <Link to="/estaciones">
          <button>Iniciar</button>
        </Link>
      </header>
    </div>
  );
}

// Componente para la página de estaciones (simulada)
function EstacionesPage() {
  return (
    <div>
      <h1>Estaciones</h1>
      <p>Aquí iría el contenido de la página de estaciones.</p>
    </div>
  );
}

// Componente principal que contiene las rutas
function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/estaciones">Estaciones</Link></li>
            <li><Link to="/totaldiario">Total de producción diaria</Link></li>
          </ul>
        </nav>
        <Routes> {/* Cambiado de Route a Routes */}
          <Route path="/" exact element={<WelcomePage />} /> {/* Cambiado 'component' a 'element' */}
          <Route path="/estaciones" element={<EstacionesPage />} /> {/* Cambiado 'component' a 'element' */}
          {/* Agrega aquí más rutas según sea necesario */}
        </Routes> {/* Cambiado de Route a Routes */}
      </div>
    </Router>
  );
}

export default App;
