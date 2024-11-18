// src/pages/WorkProfile.js
import React from 'react';
import '../styles/WorkProfile.css'; // Ensure you have this CSS file

const WorkProfile = () => {
  return (
    <div className="work-profile">
      <h1>Work Profile</h1>
      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>VVnT Sequor</h3>
          <p><strong>Project Name:</strong> Testing Platform</p>
          {/* <p><strong>Role:</strong> React Js, Spring Boot Framework, MySQL</p> */}
          <p><strong>Technologies:</strong></p>
          <ul>
            <li><strong>Backend:</strong> Spring Boot, Java 17</li>
            <li><strong>Frontend:</strong> React Js, HTML, CSS, Bootstrap</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Others:</strong> Maven, REST APIs</li>
          </ul>
          <p><strong>Overview:</strong> The objective is to design a robust Verification, Validation, and Testing platform that ensures comprehensive test coverage of digital solutions.</p>
        </div>
        {/* Add more experience items if needed */}
      </section>
      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.Tech</h3>
          <p><strong>Institution:</strong> Dr. APJ Abdul Kalam Technical University, Ghaziabad</p>
          <p><strong>Year:</strong> 2020 - 2024</p>
        </div>
      </section>
    </div>
  );
};

export default WorkProfile;
