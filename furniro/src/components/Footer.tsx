import React from "react";
import './styles.css'; // Importando o arquivo CSS

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div>
          <h3 className="footer-title">Furniro.</h3>
          <p className="footer-text">
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className="footer-text">FL 33134 USA</p>
        </div>
        <div className="footer-links">
          <h4 className="footer-heading">Links</h4>
          <span>
            <a href="/" className="footer-link">Home</a>
          </span>
          <span>
            <a href="/shop" className="footer-link">Shop</a>
          </span>
          <span>
            <a href="/" className="footer-link">About</a>
          </span>
          <span>
            <a href="/" className="footer-link">Contact</a>
          </span>
        </div>
        <div className="footer-links">
          <h4 className="footer-heading">Help</h4>
          <span>
            <a href="/" className="footer-link">Payment Options</a>
          </span>
          <span>
            <a href="/shop" className="footer-link">Returns</a>
          </span>
          <span>
            <a href="/" className="footer-link">Privacy Policies</a>
          </span>
        </div>
        <div className="footer-newsletter">
          <h4 className="footer-heading">Newsletter</h4>
          <form action="/">
            <input
              className="footer-input"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="footer-button" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-copyright">2023 furniro. All rights reserved</p>
    </div>
  );
};

export default Footer;
