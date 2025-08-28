import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { item, type } = location.state || {};

  
  if (!isAuthenticated) {
    navigate('/agency-login');
    return null;
  }

  if (!item) {
    return (
      <div className="detail-container">
        <h2>Data not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <>
    <div id="heade"></div>
    <div className="detail-container">
      <div className="detail-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
        <h1>Detailed Information</h1>
      </div>

      <div className="detail-content">
        <h2>{item.companyName || item.designation || 'Details'}</h2>
        
        <div className="detail-grid">
          {Object.entries(item).map(([key, value]) => {
            if (key === '_id' || key === '__v') return null;
            
            return (
              <div key={key} className="detail-item">
                <strong>{key}:</strong> 
                <span>{value || 'N/A'}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default DetailPage;