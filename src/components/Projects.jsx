import React from 'react';
import '../Style/Projects.css'; // Make sure you have CSS file for styling

function Projects() {
  const projects = [
    {
      name: 'Weather App',
      desc: 'A real-time weather forecast app using OpenWeatherMap API with React hooks.',
      tech: 'React, OpenWeatherMap API, CSS',
      link: 'https://viteweather1.vercel.app/'
    },
    {
      name: 'E-commerce Site',
      desc: 'An online shopping cart system using React and Redux with product state management.',
      tech: 'React, Redux, React Router, CSS',
      link: 'https://github.com/om0220/Ecommercesite.git'
    },
    {
      name: 'Travel Website',
      desc: 'Responsive frontend travel website with routing and visual design for destinations and packages.',
      tech: 'React, CSS, JavaScript',
      link: 'https://travelsiteupdated.vercel.app/'
    },
    {
      name: 'Student Management System',
      desc: 'Full-stack CRUD application to manage student data using Java technologies.',
      tech: 'Spring MVC, JSP, Servlets, JDBC, MySQL',
      link: 'https://github.com/om0220/SpringMVCcrud.git'
    },
  {
      name: 'Agriculture – Product Preview & Rating System',
      desc: 'A Spring MVC web app to preview and rate agricultural products. Features user login, product pages, and responsive JSP views.',
      tech: 'Java, Spring MVC, JSP, Servlets, MySQL, JDBC, HTML, CSS.',
      link: "https://github.com/om0220/Agriculture.git"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <p><strong>Tech Used:</strong> {proj.tech}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
