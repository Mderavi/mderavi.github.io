import React, { useState } from 'react'
import './Navbar.scss'
import MobileNav from '../MobileNav/MobileNav';
 

  const Navbar = () => {
  const [openMenu, setOpenMenu]= useState(false);
  const toggleMenu =() => {
    setOpenMenu(!openMenu);

  };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          
            <img className='logo'  src='./' alt=''/>
            
            <ul>
              <li> <a className='nav-item' href='#'>Home</a></li>
              <li> <a className='nav-item' href='#'>Skills</a></li>
              <li> <a className='nav-item' href='#'>Work experience</a></li>
              <li> <a className='nav-item' href='#'>Gallery</a></li>
              <button className='contact-btn' onClick={()=>{}}>Contact Me</button>
            </ul>
            

            <button className="menu-btn" onClick={toggleMenu}>
              <span className="material-symbols-outlined" style={{ fontSize: "1.8rem"}}>
                {openMenu ? "close" : "menu"}
              </span>
            </button>

        </div>
      </nav>
    </>
  )
}

export default Navbar