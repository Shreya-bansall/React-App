import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const menuItems = [
    'Home',
    'Menu',
    'Restaurants',
    'Promos',
    'Order In',
    'Vouchers',
    'Contact',
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderNavbarItems = () => {
    const maxVisibleItems = 5;
    const visibleItems = windowWidth >= 768 ? menuItems : menuItems.slice(0, maxVisibleItems);
    const hiddenItems = windowWidth >= 768 ? [] : menuItems.slice(maxVisibleItems);

    return (
      <>
        {visibleItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
        {hiddenItems.length > 0 && (
          <li className="dropdown">
            <span onClick={toggleMenu}>More</span>
            {showMenu && (
              <div className="dropdown-content">
                {hiddenItems.map((item, index) => (
                  <a key={index} href={`#${item.toLowerCase()}`}>{item}</a>
                ))}
              </div>
            )}
          </li>
        )}
      </>
    );
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand">Barista</div>
        <ul className="nav-menu">
          {renderNavbarItems()}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
