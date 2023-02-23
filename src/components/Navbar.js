import React from "react";
import { pageLinks } from "./data";
import { socialLinks } from "./data";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div class="nav-center">
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-log" alt="" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Nav Links*/}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              const {id,href,text}=link;
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Nav Icons*/}
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const {id,href,icon}= link;
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
