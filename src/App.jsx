import { useState } from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import React from "react";
function App() {
  
  return (
    <>
   
      < Navbar/>
      < ItemListContainer greeting = "Bienvenidas a mi tienda de alimentos saludables " />                
    </>
  )
}
export default App