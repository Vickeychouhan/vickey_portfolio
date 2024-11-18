import React from 'react';
import '../styles/Home.css';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import WorkProfile from './WorkProfile';
import myPhoto from './homeanimation.png'

const Home = () => {
  return (
    <div className="home">
      <section className="home-intro">
        <div className="home-content">
          <div className="text-content">
            <h1>Hi, I'm Vickey Chouhan</h1>
            <h2>Software Engineering Trainee</h2>
            <p>
              As a highly motivated and passionate computer science student, my goal is to pursue a fulfilling career in software development. I have the ability to work independently as an individual contributor, as well as part of a team, with excellent team spirit.
            </p>
            <p>
              I am able to utilize my skills in coding and development, and I am quick to adopt new methodologies and technologies. I am continuously learning and growing as a developer, striving for success in this dynamic field.
            </p>
            <p className="typewriter">
              I specialize in Java, React.js, and API development.
            </p>
            <a href="/VICKEYCHOUHAN_RESUME-1.pdf" target="_blank" rel="noopener noreferrer" className="resume-view-button">
              View Resume
            </a>
          </div>
          <div className="photo-content">
            <img src={myPhoto} alt="Vickey Chouhan" className="my-photo" />
          </div>
        </div>
      </section>


      <section id="projects" className="home-projects">
        <WorkProfile />
      </section>

      <section id="skills" className="home-skills">
        <Skills />
      </section>

      <section id="projects" className="home-projects">
        <Projects />
      </section>

      <section id="contact" className="home-contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
