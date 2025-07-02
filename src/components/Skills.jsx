import React from 'react';
import '../Style/Skills.css'; // Make sure this CSS file exists

function Skills() {
  const skills = [
    { name: 'C', category: 'Language' },
    { name: 'C++', category: 'Language' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React.js', category: 'Frontend' },


    { name: 'Java', category: 'Backend' },
    { name: 'JDBC', category: 'Database' },
    { name: 'SQL', category: 'Database' },
    { name: 'Hibernate Framework', category: 'Backend' },
    { name: 'JSP', category: 'Backend' },
    { name: 'Servlet', category: 'Backend' },
    { name: 'Spring MVC', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
