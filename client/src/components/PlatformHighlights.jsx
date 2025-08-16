import React from 'react';
import {
  FaRocket,
  FaHandshake,
  FaShieldAlt,
  FaGraduationCap,
  FaChevronRight
} from 'react-icons/fa';

function PlatformHighlights() {
  const highlights = [
    {
      icon: <FaRocket />,
      title: "Seamless Onboarding",
      description: "Quick and easy registration for all user types"
    },
    {
      icon: <FaHandshake />,
      title: "Smart Matchmaking",
      description: "Intelligent connections between lenders and service partners"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Platform",
      description: "Transparent and protected interactions for all users"
    },
    {
      icon: <FaGraduationCap />,
      title: "Industry Learning",
      description: "Tailored educational modules for debt management professionals"
    }
  ];

  return (
    <section className="highlights-section">
      <div className="container">
              <div className="heading-container1">
  <h1 className="main-heading">Platform Highlights</h1>
</div>
<div className="heading-container1">
  <h2 className="main-headings">Discover what makes Suppcohort the preferred choice</h2>
</div>
        {/* <div className="section-header">
          <h2>Platform Highlights</h2>
          <p>Discover what makes Suppcohort the preferred choice</p>
        </div> */}

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div className="highlight-card" key={index}>
              <div className="card-icon" style={{ '--hue': index * 90 }}>
                {highlight.icon}
              </div>
              <div className="card-content">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
                {/* <button className="learn-more">
                  Learn more <FaChevronRight className="arrow-icon" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformHighlights;