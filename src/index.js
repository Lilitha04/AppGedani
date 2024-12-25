import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Estilos globales
import App from './App'; // Componente principal

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Conecta la app con el div "root"
);
