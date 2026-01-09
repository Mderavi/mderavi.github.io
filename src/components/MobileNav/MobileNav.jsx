import React from 'react';
import './MobileNav.scss';

const MobileNav = ({ isOpen, toggleMenu }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
          <img className='logo' src="/assets/img/MahsaLogo-1.svg" alt='Mahsa'/>
          <ul>
            <li><a className='nav-item' href='#home' onClick={handleNavClick}>Home</a></li>
            <li><a className='nav-item' href='#skills' onClick={handleNavClick}>Skills</a></li>
            <li><a className='nav-item' href='#experience' onClick={handleNavClick}>Work experience</a></li>
            <button className='contact-btn' onClick={scrollToContact}>Contact Me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
