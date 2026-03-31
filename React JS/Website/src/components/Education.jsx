import React from 'react';
import { FaGraduationCap, FaCalendar, FaAward } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Business Systems',
      institution: 'PSNA College of Engineering and Technology',
      location: 'Dindigul',
      period: '2022 - 2026',
      cgpa: '7.96 (up to 7th semester)',
      highlights: [
        'Strong focus on Data Structures & Algorithms',
        'Solved 150+ problems on LeetCode and GeeksforGeeks',
        'Active participation in coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Education (Class 12)',
      institution: 'Saradha Vidhyalaya Matric Hr. Sec. School',
      location: 'Tiruppur',
      period: '2019 - 2022',
      cgpa: '84.16%',
      highlights: [
        'Computer Science stream',
        'Strong foundation in Mathematics and Science'
      ]
    }
  ];

  const certifications = [
    'Java Programming Certification — Udemy',
    'Java and SQL Certification — CodeChef',
    'IoT and Embedded Systems Workshop — PSNA College'
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-grid">
          <div className="education-main">
            <h3 className="subsection-title">Academic Background</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-content">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">
                    {edu.institution}, {edu.location}
                  </p>
                  <div className="education-meta">
                    <span className="education-period">
                      <FaCalendar /> {edu.period}
                    </span>
                    <span className="education-score">
                      Score: {edu.cgpa}
                    </span>
                  </div>
                  <ul className="education-highlights">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications-sidebar">
            <h3 className="subsection-title">
              <FaAward /> Certifications
            </h3>
            <div className="certifications-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="certification-item">
                  <div className="cert-bullet"></div>
                  <p>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
