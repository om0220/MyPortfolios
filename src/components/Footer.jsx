import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Omkumar Devangan. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/omkumar-devangan-47b273316"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:omkumar.devangan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
