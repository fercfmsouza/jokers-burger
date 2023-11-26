import { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link to="/">
        <img src="/img/logo.png" alt="Joker's Burguer Logo" />
      </Link>

      {/* Menu Hamburguer */}
      <div
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <i className="material-symbols-outlined">menu</i>
      </div>

      <ul className={`navbar-items ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/menu" className="special-link">
            CARDÁPIO
          </Link>
        </li>
        <li>
          <Link to="/contact">CONTATO</Link>
        </li>
        <li>
          <a
            href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
              '+5568992090190',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-button"
          >
            FAÇA SEU PEDIDO
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
