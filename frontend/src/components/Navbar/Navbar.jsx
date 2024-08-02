import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-brand">
        <span>📖Once Upon</span>
      </div>
      <div className="navbar-toggle font-extrabold" onClick={toggleNav}>
        ☰
      </div>
      <ul className={`navbar-list ${isNavOpen ? "show" : ""}`}>
        <li className="navbar-item">
          <Link
            to="landing"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            🏠Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="category"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            📚Categories
          </Link>
        </li>
        <li className="navbar-item">
        <Link
            to="about"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            🙋‍♀️About us
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            📞Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
