import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'
function Navbar() {
  return (
    <div className='navbar'>
<Logo/>
<ul className='navbar-links'>
    <li className='navbar-item'>
       <a href="">BIENVENIDAS CUIDARSE ES SALUD</a> 
    </li>
    <li className='navbar-item'>
       <a href="">FRUTOS</a> 
    </li>
    <li className='navbar-item'>
       <a href="">HARINAS</a> 
    </li>
    <li className='navbar-item'>
       <a href="">COMIDAS SIN TAC</a> 
    </li>
    <li className='navbar-item'>
       <a href="">RECETAS </a> 
    </li>
</ul>
<CartWidget/>
</div>
)
}
export default Navbar