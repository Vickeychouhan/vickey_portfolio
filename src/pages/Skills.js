import React from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaServer, FaDatabase, FaJs, FaWordpress, FaTools } from 'react-icons/fa';

const skills = [
  {
    category: 'Front-End',
    items: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JS', icon: <FaJs /> }
    ]
  },
  {
    category: 'Back-End',
    items: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'OOPS', icon: <FaServer /> },
      { name: 'J2EE', icon: <FaServer /> },
      { name: 'Automation', icon: <FaServer /> }
    ]
  },
  {
    category: 'Framework',
    items: [
      { name: 'Bootstrap', icon: <FaServer /> },
      { name: 'Spring Boot', icon: <FaServer /> }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', icon: <FaDatabase /> },
      { name: 'Tools', icon: <FaTools /> }
    ]
  },
  {
    category: 'Application',
    items: [
      { name: 'WordPress', icon: <FaWordpress /> },
      { name: 'Eclipse IDE', icon: <FaServer /> },
      { name: 'Sts IDE', icon: <FaServer /> },
      { name: 'VS Code', icon: <FaTools /> }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skillSet, index) => (
          <div className="skills-category" key={index}>
            <h2>{skillSet.category}</h2>
            <div className="skills-list">
              {skillSet.items.map((item, i) => (
                <div className="skill-item" key={i}>
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
