import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h2>
          <a href="#hero" style={{ color: "white" }}>
            HS.
          </a>
        </h2>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <a href="#about">ABOUT.</a>
          </li>
          <li>
            <a href="#work">WORK.</a>
          </li>
          <li>
            <a href="#projects">PROJECTS.</a>
          </li>
          <li>
            <a href="#achievements">ACHIEVEMENTS.</a>
          </li>
          <li>
            <a href="#contact">SAY HELLO.</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
