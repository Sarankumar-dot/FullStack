import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Saran Kumar K</h3>
          <p>Building responsive web applications with modern technologies and creative problem-solving.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="https://github.com/sarankumar-k" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sarankumar-k" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/sarankumar_k" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:kumarsaran2004@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Saran Kumar K. Made with <FaHeart className="heart" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
