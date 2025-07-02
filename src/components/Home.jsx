import React from 'react';
import photo from '../image/myphoto.jpg';
// import bg from '../image/bg.jpeg'; // Optional background image
import '../Style/Home.css'
const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-photo">
          <img src={photo} alt="Om Kumar Devangan" />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Omkumar Devangan</span></h1>
          <p className="subtitle">
            Full Stack Developer | React | Java | Spring MVC | SQL
          </p>
          <a href="#projects" className="btn">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
