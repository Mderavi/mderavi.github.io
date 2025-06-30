import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    scrollToId("contact");
  };

  const handleNavClick = (id) => {
    scrollToId(id);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-content">
          <img
            className="logo"
            src="/assets/img/MahsaLogo-1.svg"
            alt="Mahsa Deravi"
          />

          <ul>
            <li>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavClick("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavClick("experience")}
              >
                Work experience
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-item"
                onClick={() => handleNavClick("gallery")}
              >
                Gallery
              </button>
            </li>
            <button className="contact-btn" type="button" onClick={scrollToContact}>
              Contact Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
