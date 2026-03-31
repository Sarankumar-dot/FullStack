import React from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'ST Software Solutions',
      period: 'June 2025 - July 2025',
      description: 'Gained hands-on experience in web development, working on client projects and enhancing UI/UX implementations.',
      achievements: [
        'Developed responsive UI components for client projects',
        'Implemented CSS animations to enhance user experience',
        'Collaborated with designers to optimize layouts for cross-device compatibility'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">
                      <FaBriefcase /> {exp.company}
                    </p>
                  </div>
                  <span className="experience-period">
                    <FaCalendar /> {exp.period}
                  </span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
