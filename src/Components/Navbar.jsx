import React, { useState } from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import "./navbar.css";
import { BsFillGiftFill, BsGrid3X3GapFill, BsPeopleFill, BsList, BsX } from 'react-icons/bs';
import { GiWheat, GiFruitBowl, GiMeal } from 'react-icons/gi';

function Navbar({ onCategoriaSelect }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    onCategoriaSelect(menu);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="NavBar">
      <nav>
        <Logo />
      </nav>

      <button className="menu-hamburguesa" onClick={toggleMenu}>
        {menuAbierto ? <BsX size={30} /> : <BsList size={30} />}
      </button>

      <ul className={`navbar-links ${menuAbierto ? 'activo' : ''}`}>
        <li className="navbar-item">
          <a href="#" onClick={() => onCategoriaSelect('quienes')}>
            <BsPeopleFill className="menu-icon" />
            QUIENES SOMOS
          </a>
        </li>
        
        <li className="navbar-item dropdown">
          <a href="#" onClick={() => handleDropdown('frutos')}>
            <GiFruitBowl className="menu-icon" />
            FRUTOS
          </a>
          {activeDropdown === 'frutos' && (
            <ul className="dropdown-menu">
              <li><a href="#" onClick={(e) => { e.stopPropagation(); onCategoriaSelect('frutos'); }}>Ver todos</a></li>
            </ul>
          )}
        </li>

        <li className="navbar-item dropdown">
          <a href="#" onClick={() => handleDropdown('harinas')}>
            <GiWheat className="menu-icon" />
            HARINAS
          </a>
          {activeDropdown === 'harinas' && (
            <ul className="dropdown-menu">
              <li><a href="#" onClick={(e) => { e.stopPropagation(); onCategoriaSelect('harinas'); }}>Ver todos</a></li>
            </ul>
          )}
        </li>

        <li className="navbar-item dropdown">
          <a href="#" onClick={() => handleDropdown('comidas')}>
            <GiMeal className="menu-icon" />
            COMIDAS SIN TAC
          </a>
          {activeDropdown === 'comidas' && (
            <ul className="dropdown-menu">
              <li><a href="#" onClick={(e) => { e.stopPropagation(); onCategoriaSelect('comidas'); }}>Ver todos</a></li>
            </ul>
          )}
        </li>

        <li className="navbar-item dropdown">
          <a href="#" onClick={() => handleDropdown('recetas')}>
            <BsGrid3X3GapFill className="menu-icon" />
            RECETAS
          </a>
          {activeDropdown === 'recetas' && (
            <ul className="dropdown-menu">
              <li><a href="#" onClick={(e) => { e.stopPropagation(); onCategoriaSelect('recetas'); }}>Ver todos</a></li>
            </ul>
          )}
        </li>
      </ul>

      <CartWidget />
    </div>
  );
}

export default Navbar;
