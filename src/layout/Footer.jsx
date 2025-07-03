import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import fb from "../assets/fb.png";
import yt from "../assets/yt.png";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>AuthFolio</h2>
          <p>For developers who care about access</p>
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/profile.php?id=61565920400619"
              target="_blank"
              className="social-link"
            >
              <img src={fb} alt="Facebook" />
            </Link>
            <Link
              to="https://www.youtube.com/@AnuragSharma-nits"
              target="_blank"
              className="social-link"
            >
              <img src={yt} alt="Twitter" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/anurag-sharma-nits/"
              target="_blank"
              className="social-link"
            >
            <img src={linkedin} alt="LinkedIn" />
            </Link>
            <Link
              to="https://github.com/techy-geek"
              target="_blank"
              className="social-link"
            >
              <img src={git} alt="GitHub" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 AuthFolio. All Rights Reserved.</p>
        <p>Designed by Anurag Sharma</p>
      </div>
    </footer>
  );
};

export default Footer;
