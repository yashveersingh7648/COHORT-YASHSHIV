import React from 'react';
import './Products&Services.css';
import { 
  FaChartLine, 
  FaUserTie, 
  FaBullhorn, 
  FaGraduationCap,
  FaLink,
  FaUserCheck,
  FaSearchDollar,
  FaHandshake,
  FaBookOpen
} from 'react-icons/fa';

function ProductsServices() {
  return (
    <div className="ps-container">
                      <div className="heading-container1">
  <h1 className="main-heading">Products & Services</h1>
</div>
<div className="heading-container1">
  <p className="main-headings">Empowering your growth in debt management</p>
</div>
      {/* <div className="ps-header">
        <h1>Products & Services</h1>
        <p className="ps-subtitle">Empowering your growth in debt management</p>
      </div> */}

      <div className="ps-sections">
        {/* Grow Section */}
        <section className="ps-section grow-section">
          <div className="section-header">
            <FaChartLine className="section-icon" size={30} />
            <h2>Grow</h2>
          </div>
          <ul className="benefits-list">
            <li><FaLink /> Build and increase your visibility across debt management world</li>
            <li><FaUserCheck /> Be ready with your business profile link to share with prospective clients</li>
            <li><FaHandshake /> Build credibility and stand out into the business</li>
            <li><FaSearchDollar /> Find and engage more prospective clients</li>
            <li><FaChartLine /> Grow your business at ease with suppcohort</li>
          </ul>
        </section>

        {/* Hiring Section */}
        <section className="ps-section hiring-section">
          <div className="section-header">
            <FaUserTie className="section-icon" size={30} />
            <h2>Hiring</h2>
          </div>
          <ul className="benefits-list">
            <li><FaUserCheck /> Find and invite right candidates efficiently</li>
            <li><FaUserTie /> Post your job to the right set of people</li>
            <li><FaHandshake /> Make hiring easy, fast and efficient with Suppcohort job postings</li>
          </ul>
        </section>

        {/* Advertise Section */}
        <section className="ps-section advertise-section">
          <div className="section-header">
            <FaBullhorn className="section-icon" size={30} />
            <h2>Advertise</h2>
          </div>
          <ul className="benefits-list">
            <li><FaSearchDollar /> Target direct to the right audience</li>
            <li><FaHandshake /> Build long-term relationships with clients</li>
            <li><FaChartLine /> Create ads with flexible budgets and schedules</li>
            <li><FaBullhorn /> Increase engagement with suppcohort Ads</li>
            <li><FaUserCheck /> Identify hidden leads to make warm introductions</li>
          </ul>
        </section>

        {/* Learn Section */}
        <section className="ps-section learn-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" size={30} />
            <h2>Learn</h2>
          </div>
          <ul className="benefits-list">
            <li><FaBookOpen /> Access DRA training courses and mock test</li>
            <li><FaGraduationCap /> Code of conduct and regulatory updates on debt management</li>
            <li><FaUserTie /> Soft skills training and help notes</li>
            <li><FaChartLine /> Build skills and grow with Suppcohort</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProductsServices;