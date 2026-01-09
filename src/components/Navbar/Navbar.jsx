import { useState, useEffect } from "react";
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
    setOpenMenu(!openMenu);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-content">
          <img
            className="logo"
            src="/assets/img/MahsaLogo-1.svg"
            alt="Mahsa"
          />
          <ul>
            <li>
              <a className="nav-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-item" href="#experience">
                Work experience
              </a>
            </li>
            <button
              className="contact-btn"
              onClick={scrollToContact}
              aria-label="Contact Me"
            >
              Contact Me
            </button>
          </ul>

          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-label={openMenu ? "Close menu" : "Open menu"}
            aria-expanded={openMenu}
          >
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
