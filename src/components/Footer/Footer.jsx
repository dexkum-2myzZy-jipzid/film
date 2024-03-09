import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rights" aria-label="Copyright information">
        © 2023 All rights reserved.
      </div>
      <a>|</a>
      <div className="footer__made-by" aria-label="Author information">
        Made by @
        <a
          href="mailto:chen.liang2@northeastern.edu"
          className="footer__email-link"
          aria-label="Email link">
          Liang Chen
        </a>
      </div>
    </footer>
  );
}

export default Footer;
