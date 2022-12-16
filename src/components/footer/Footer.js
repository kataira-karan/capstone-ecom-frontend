import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <Link to="/">
          <img
            src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
            className="logo"
          ></img>
        </Link>
      </div>
      <div className="footer-links">
        <div className="footer-div">
          <span className="footer-div-title">Categories</span>

          <div className="footer-div-links">
            <ul>
              <li>Shoes</li>
            </ul>
            <ul>
              <li>Shirt</li>
            </ul>
            <ul>
              <li>Laptop</li>
            </ul>
            <ul>
              <li>Home</li>
            </ul>
          </div>
        </div>

        <div className="footer-div">
          <span className="footer-div-title">Contact Us</span>

          <div className="footer-div-links">
            <ul>
              <li>kkataria4165@conestogac.on.ca</li>
            </ul>
            <ul>
              <li>437-238-8424</li>
            </ul>
            <ul>
              <li>31-Activa Avenue</li>
            </ul>

            <ul>
              <div className="social-media-links">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Youtube</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
