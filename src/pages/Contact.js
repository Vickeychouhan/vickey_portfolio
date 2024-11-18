// src/pages/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Ensure you have this CSS file

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Information</h1>
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:officialvickey2001@gmail.com">officialvickey2001@gmail.com</a></p>
        {/* <p><strong>Mobile:</strong> <a href="tel:+918377920291">+91 8377920291</a></p> */}
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vickey-chouhan-5a0aa6286" target="_blank" rel="noopener noreferrer">linkedin.com/in/vickey-chouhan-5a0aa6286</a></p>
      </div>
    </div>
  );
};

export default Contact;
