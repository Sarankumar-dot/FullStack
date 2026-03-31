import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="about-text">
            <p className="about-intro">
              Frontend-focused developer skilled in React.js with strong foundations in Java and DSA.
            </p>
            <p>
              I build responsive web applications and I'm currently expanding into full-stack development 
              using Node.js and Express.js. With a strong foundation in Data Structures & Algorithms and 
              Object-Oriented Programming, I focus on creating scalable software solutions.
            </p>
            <p>
              I'm passionate about problem-solving and continuous learning. Currently pursuing B.Tech in 
              Computer Science and Business Systems at PSNA College of Engineering and Technology with a 
              CGPA of 7.96.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>150+</h3>
                <p>Problems Solved</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
