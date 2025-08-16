import React from 'react';
import './WhySuppcohort.css';
import { 
  FaUsers, 
  FaChartLine, 
  FaHubspot, 
  FaGlobeAmericas,
  FaHandshake,
  FaBookOpen
} from 'react-icons/fa';

function WhySuppcohort() {
  return (
    <div className="why-container">
        <div className="heading-container1">
  <h1 className="main-heading">Why Choose Suppcohort?</h1>
</div>
<div className="heading-container1">
  <p className="main-headings">The premier platform for debt management professionals</p>
</div>
      {/* <div className="why-header">
        <h1>Why Choose Suppcohort?</h1>
        <p className="why-subtitle">The premier platform for debt management professionals</p>
      </div> */}

      <div className="why-cards">
        {/* Card 1 */}
        <div className="why-card">
          <div className="why-icon">
            <FaUsers size={50} />
          </div>
          <h2>Inclusive Platform</h2>
          <p>For all team sizes and experience levels</p>
        </div>

        {/* Card 2 */}
        <div className="why-card">
          <div className="why-icon">
            <FaChartLine size={50} />
          </div>
          <h2>Equal Opportunity</h2>
          <p>For growth and visibility</p>
        </div>

        {/* Card 3 */}
        <div className="why-card">
          <div className="why-icon">
            <FaHubspot size={50} />
          </div>
          <h2>Central Hub</h2>
          <p>For business, hiring, and learning in debt management</p>
        </div>
      </div>

      {/* <div className="why-cta">
        <h3>Join the Suppcohort community today</h3>
        <button className="cta-button">Get Started</button>
      </div> */}
    </div>
  );
}

export default WhySuppcohort;