import React from "react";
import "./components/MainMenu.css"; // Importa los estilos del menú
import MainMenu from "./components/MainMenu"; // Importa el componente del menú

const App = () => {
  return (
    <div className="app-container">
      {/* Menú lateral */}
      <MainMenu /> 

      {/* Contenedor principal */}
      <div className="main-content">
        {/* Barra superior */}
        <header className="top-bar">
          <input
            type="text"
            placeholder="Escribe algo..."
            className="top-bar-input"
          />
        </header>

        {/* Contenido central */}
        <div className="content-area">
          <h1>Contenido Central</h1>
          <p>Aquí puedes añadir cualquier contenido que desees.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
