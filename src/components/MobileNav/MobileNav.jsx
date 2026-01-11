import React from 'react';
import './MobileNav.scss';

const MobileNav = ({ isOpen, toggleMenu }) => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  const scrollToContact = () => {
    scrollToId("contact");
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
          <img className='logo' src="/assets/img/MahsaLogo-1.svg" alt='Mahsa Deravi'/>
          <ul>
            <li>
              <button
                type="button"
                className='nav-item'
                onClick={() => scrollToId('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className='nav-item'
                onClick={() => scrollToId('skills')}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                type="button"
                className='nav-item'
                onClick={() => scrollToId('experience')}
              >
                Work experience
              </button>
            </li>
            <li>
              <button
                type="button"
                className='nav-item'
                onClick={() => scrollToId('gallery')}
              >
                Gallery
              </button>
            </li>
            <button className='contact-btn' type="button" onClick={scrollToContact}>
              Contact Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
