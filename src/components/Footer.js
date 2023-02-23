import React from "react";
import {footerLinks} from "./data";
import {footerIcons } from "./data";
function Footer() {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
      {footerLinks.map((link)=>{
        const { id, href, title } = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className="footer-link">
              {title}
            </a>
          </li>
        );
      })}
        </ul>
        {/*Footer social Icons*/}
        <ul className="footer-icons">
          {footerIcons.map((link)=>{
           const {id, href,icon}= link;
            return (
             <li key={id}>
            <a
              href={href}
              className="footer-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
            )
          })};
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
