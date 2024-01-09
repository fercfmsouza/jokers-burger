import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navbar-container')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const isLinkActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className={`navbar-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link to="/">
        <img src="/img/logo.png" alt="Joker's Burguer Logo" />
      </Link>

      {/* Menu Hamburger */}
      <div
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <i className="material-symbols-outlined">menu</i>
      </div>
      {/* End Menu Hamburger */}

      <ul className={`navbar-items ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/menu" className={isLinkActive('/menu')}>
            CARDÁPIO
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isLinkActive('/contact')}>
            CONTATO
          </Link>
        </li>
        <li>
          <a
            href={`https://jokersburger.com.br/jokers_burger`}
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
