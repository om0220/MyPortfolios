import React from 'react';
import '../Style/Education.css';

function Education() {
  const educationList = [
    {
      title: 'Bachelor of Science (Computer Science)',
      institution: 'Nagpur University',
      year: '2021 – 2024',
      type: 'Degree',
    },
    {
      title: 'Fullstack Developer Internship & Certification',
      institution: 'Tops Technologies',
      year: '2024',
      type: 'Internship & Certified',
      pdf: '/certificates/fullstack.pdf',
      // preview: '/certificates/previews/fullstack.jpg'
    },
    {
      title: 'Basics of IoT Certification',
      institution: 'VNIT College, Nagpur',
      year: '2023',
      type: 'Certification',
      pdf: '/certificates/iot.pdf',
      // preview: '/certificates/previews/iot.jpg'
    }
  ];

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationList.map((edu, i) => (
          <div key={i} className="education-card">
            <h3>{edu.title}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p className="edu-type">{edu.type} | {edu.year}</p>

            {edu.preview && edu.pdf && (
              <a href={edu.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={edu.preview}
                  alt={`${edu.title} Certificate`}
                  className="edu-image"
                />
              </a>
            )}

            {!edu.preview && edu.pdf && (
              <a
                href={edu.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link"
              >
                View Certificate (PDF)
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
