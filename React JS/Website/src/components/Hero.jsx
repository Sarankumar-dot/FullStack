import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Saran Kumar K</h1>
          <h2 className="hero-title">Frontend-Focused Full Stack Developer</h2>
          <p className="hero-description">
            Building responsive web applications with React.js and expanding into full-stack development
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="/src/assets/SaranKumarResumee.pdf" download className="btn btn-secondary">
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/sarankumar-k" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sarankumar-k" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:kumarsaran2004@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
