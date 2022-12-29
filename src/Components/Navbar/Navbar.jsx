import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h2>HS.</h2>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <a href="">ABOUT.</a>
          </li>
          <li>
            <a href="">WORK.</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
