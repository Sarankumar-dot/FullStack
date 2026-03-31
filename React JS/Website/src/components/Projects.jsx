import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Money Manager Web Application',
      category: 'frontend',
      description: 'A financial management web application to manage personal and office transactions efficiently with comprehensive analytics.',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      image: 'Money Manager',
      github: 'https://github.com/sarankumar-k',
      demo: 'https://vercel.com'
    },
    {
      title: 'IoT-based Car Parking System',
      category: 'fullstack',
      description: 'Smart parking system with facial recognition for secure access control, automated gate control, and real-time availability display.',
      technologies: ['Arduino', 'Python', 'OpenCV', 'IoT Sensors'],
      image: 'Smart Parking',
      github: 'https://github.com/sarankumar-k',
      demo: '#'
    },
    {
      title: 'E-commerce Website',
      category: 'frontend',
      description: 'Responsive e-commerce platform with dynamic product listings, shopping cart functionality, and session handling.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      image: 'E-Commerce',
      github: 'https://github.com/sarankumar-k',
      demo: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'fullstack' ? 'active' : ''} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
          <button 
            className={filter === 'frontend' ? 'active' : ''} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={filter === 'backend' ? 'active' : ''} 
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.image}</div>
                <div className="project-overlay">
                  <a href={project.github} className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.demo} className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
