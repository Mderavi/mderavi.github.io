import React from 'react';
import './MobileNav.scss';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          <img className='logo' src="" alt='logo'/>
          <ul>
            <li><a className='nav-item' href='#'>Home</a></li>
            <li><a className='nav-item' href='#'>Skills</a></li>
            <li><a className='nav-item' href='#'>Work experience</a></li>
            <li><a className='nav-item' href='#'>Gallery</a></li>
            <button className='contact-btn' onClick={()=>{}}>Contact Me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
