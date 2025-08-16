import React from 'react';
import './MissionVision.css';
import { FaBullseye, FaEye, FaHandshake, FaGraduationCap, FaShieldAlt, FaGlobe } from 'react-icons/fa';

function MissionVision() {
  return (
    <div className="mission-vision">
           <div className="heading-container1">
  <h4 className="main-heading">Mission & Vision
</h4>
</div>
      <div className="mv-container">
        {/* Mission Section */}
        
        <div className="mission-card">
          <div className="mv-header">
            <FaBullseye className="mv-icon" />
            <h2>Mission</h2>
          </div>
          <div className="mv-content">
            <p>
              To empower businesses, professionals, job seekers and admirer into debt management by providing 
              a seamless digital platform for collaboration, opportunity sharing, learning and professional 
              growth — all in a simplifying, secure and transparent environment.
            </p>
            <div className="mv-features">
              <div className="feature">
                <FaHandshake />
                <span>Collaboration</span>
              </div>
              <div className="feature">
                <FaGraduationCap />
                <span>Learning</span>
              </div>
              <div className="feature">
                <FaShieldAlt />
                <span>Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision-card">
          <div className="mv-header">
            <FaEye className="mv-icon" />
            <h2>Vision</h2>
          </div>
          <div className="mv-content">
            <p>
              Our vision is to make Suppcohort reliable and trusted name into the world of debt management globally.
            </p>
            <div className="global-tag">
              <FaGlobe />
              <span>Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;