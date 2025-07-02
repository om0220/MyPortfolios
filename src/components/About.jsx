import React from 'react';
import '../Style/About.css';

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a <strong>motivated and enthusiastic Full-Stack Developer</strong> with a solid foundation in both frontend and backend technologies.
          I specialize in <span className="highlight">React.js</span> for building dynamic and user-friendly interfaces, and in 
          <span className="highlight">Java-based MVC architecture</span> for creating robust and scalable backend systems.
        </p>

        <p>
          As a recent graduate and self-motivated learner, I've worked on multiple hands-on projects that showcase my ability to design, build, and deploy full-stack web applications.
          My frontend work focuses on <span className="highlight">responsive layouts</span>, <span className="highlight">clean UI</span>, and
          <span className="highlight">seamless user experience</span>, while the backend reflects well-structured logic using Java, Spring MVC, Servlets, and JDBC.
        </p>

        <p>
          I love solving problems, writing clean and maintainable code, and constantly exploring new tools and frameworks. I'm eager to contribute to 
          <strong>real-world projects</strong>, collaborate in an agile environment, and grow alongside a passionate development team.
        </p>
      </div>
    </section>
  );
}

export default About;
