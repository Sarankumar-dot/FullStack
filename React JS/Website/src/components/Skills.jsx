import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
        { name: 'HTML/CSS', icon: <FaCode />, level: 95 },
      ]
    },
    {
      title: 'Backend & Languages',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
        { name: 'Java', icon: <FaCode />, level: 85 },
        { name: 'Python', icon: <FaPython />, level: 80 },
      ]
    },
    {
      title: 'Tools & Concepts',
      skills: [
        { name: 'Git/GitHub', icon: <FaGitAlt />, level: 85 },
        { name: 'DSA', icon: <FaCode />, level: 80 },
        { name: 'OOP', icon: <FaDatabase />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
