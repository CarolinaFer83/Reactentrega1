import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import Quienes from './paginas/Quienes'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

  return (
    <CartProvider>
      <div className="App">
        <Navbar onCategoriaSelect={setCategoriaSeleccionada} />
        {categoriaSeleccionada === 'quienes' ? (
          <Quienes />
        ) : (
          <ItemListContainer 
            greeting="¡Bienvenidos a nuestra tienda!" 
            categoriaInicial={categoriaSeleccionada}
          />
        )}
      </div>
    </CartProvider>
  );
}

export default App;



