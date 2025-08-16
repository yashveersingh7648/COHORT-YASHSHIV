import React from 'react';
import './WhoWeServe.css';
import { 
  FaBuilding, 
  FaBalanceScale, 
  FaUserTie, 
//   FaBank, 
FaMoneyBillAlt,
  FaHandshake, 
  FaSearch 
} from 'react-icons/fa';

function WhoWeServe() {
  return (
    <div className="serve-container">
              <div className="heading-container1">
  <h1 className="main-heading">Who We Serve</h1>
</div>
<div className="heading-container1">
  <p className="main-headings">Connecting the debt management ecosystem</p>
</div>
      {/* <div className="serve-header">
        <h1>Who We Serve</h1>
        <p className="serve-subtitle">Connecting the debt management ecosystem</p>
      </div> */}

      <div className="serve-cards">
        {/* Lenders Card */}
        <div className="serve-card lender-card">
          <div className="card-icon">
            <FaMoneyBillAlt size={40} />
          </div>
          <h2>Lenders</h2>
          <p className="card-description">Banks, NBFCs, ARCs, Microfinance, Fintech professionals</p>
          <div className="card-tags">
            <span className="tag"><FaBuilding /> Financial Institutions</span>
            <span className="tag"><FaHandshake /> Credit Providers</span>
          </div>
        </div>

        {/* Service Partners Card */}
        <div className="serve-card partner-card">
          <div className="card-icon">
            <FaBalanceScale size={40} />
          </div>
          <h2>Service Partners</h2>
          <p className="card-description">Debt recovery and legal agencies/entities</p>
          <div className="card-tags">
            <span className="tag"><FaUserTie /> Legal Experts</span>
            <span className="tag"><FaHandshake /> Recovery Specialists</span>
          </div>
        </div>

        {/* Admirers Card */}
        <div className="serve-card admirer-card">
          <div className="card-icon">
            <FaSearch size={40} />
          </div>
          <h2>Admirers / Guests</h2>
          <p className="card-description">All others not in above two categories – Individuals or companies exploring the debt management space</p>
          <div className="card-tags">
            <span className="tag"><FaUserTie /> Professionals</span>
            <span className="tag"><FaBuilding /> Companies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeServe;