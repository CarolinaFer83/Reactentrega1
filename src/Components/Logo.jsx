import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
      <img 
        src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg"  // Imagen de frutos secos de Pexels
        alt="Corazón de Frutos Secos" 
        className="logo-image"
      />
      <h1>Cuidarse es Salud</h1>
    </div>
  );
}

export default Logo; 