import React from 'react';
import '../styles//Projects.css';

const projects = [
  {
    title: "KEERYA APPLICATION",
    description: "A car rental application offering services to rent vehicle on easy basis like Aadhar card, PAN card, and DL verification, with home delivery within 5-10 minutes (2km range). Built with MySQL, JSP, Java, HTML, CSS, and React.js.",
    technologies: "MySQL, JSP, Java, HTML, CSS, React.js",
    uiDesign: "Designed using Figma and other design tools.",
    image: "path_to_kiraya_image.jpg", // Add a relevant image path
    // demoLink: "#", // Add demo link if available
    // codeLink: "#" // Add source code link if available
  },
  {
    title: "WHOLESALE MANAGEMENT SYSTEM",
    description: "A system built using JSP, Servlet, JDBC, HTML, CSS, and React.js, featuring vendor setup with a login system. Includes item management and master information system for vendors.",
    technologies: "JSP, Servlet, JDBC, HTML, CSS, React.js",
    image: "path_to_wholesale_image.jpg", // Add a relevant image path
    // demoLink: "#", // Add demo link if available
    // codeLink: "#" // Add source code link if available
  },
  {
    title: "E-SHOPPING WEBSITE",
    description: "A system built using Spring Boot, JSP, Servlet, JDBC, HTML, CSS, and MySQL, featuring vendor setup with a login system. Includes item management and master information system for vendors.",
    technologies: "Java",
    image: "path_to_wholesale_image.jpg", // Add a relevant image path
    // demoLink: "#", // Add demo link if available
    // codeLink: "#" // Add source code link if available
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h1> Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* <img src={project.image} alt={project.title} className="project-image" /> */}
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <p>{project.uiDesign}</p>
              <div className="project-links">
                {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">View Demo</a>}
                {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
