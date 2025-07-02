import React from 'react';
import '../Style/Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>If you'd like to connect or collaborate, feel free to reach out through the links below.</p>
      
      <div className="contact-details">
        <p>
          📧 Email: <a href="mailto:omkumar.devangan@gmail.com">omkumar.devangan@gmail.com</a>
        </p>
        <p>
          💼 LinkedIn: <a href="https://www.linkedin.com/in/omkumar-devangan-47b273316" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/omkumar-devangan-47b273316
          </a>
        </p>
        <p>
          📁 GitHub: <a href="https://github.com/om0220" target="_blank" rel="noopener noreferrer">
            github.com/om0220
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
