import React from "react";
import "../stylesheet/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">        

        <div className="footer-social">
          <p>Follow Us</p>
          <div className="icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      <p className="footer-bottom">
        © 2026 MyProperty. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;