import React from 'react';
import './About.css';

function AboutUs() {
  return (
    <>
    <div id="heade"></div>
    <div className="about-us">
      <div className="about-container">
        <h1>Welcome to suppcohort.com</h1>
        <p className="main-description">
          A unified platform that brings debt management's people & entities (Lenders, Service Partners, and Admirer) together, 
          to create opportunity, value, connection, learn and bring success to every member involved in debt management.
        </p>
        
        <div className="highlight-box">
          <p className="highlight-text">
            Suppcohort is a unified digital platform connecting all players in the debt management ecosystem.
            We create opportunities, foster learning, and enable growth for lenders, service partners, and admirers.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;