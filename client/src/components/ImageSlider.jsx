

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageSlider.css';
import { useAuth } from './../context/AuthContext';
import {
  getHiddenRequirementIds,
  getRemovedRequirementIds,
  getHiddenManpowerIds,
  getRemovedManpowerIds,
  getHiddenBusinessIds,
  getRemovedBusinessIds
} from './../utils/dashboardState';

// const BASE_URL = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const ImageSlider = () => {
  const [requirements, setRequirements] = useState([]);
  const [manpowerData, setManpowerData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Animation duration in seconds (same for all sliders)
  const animationDuration = 60;

  // Calculate animation duration based on item count to maintain consistent speed
  const getAnimationDuration = (items) => {
    const baseDuration = animationDuration;
    const itemCount = items.length || 1;
    return `${baseDuration * (itemCount / 10)}s`; 
  };

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get current hidden and removed IDs for all data types
      const hiddenReqs = getHiddenRequirementIds();
      const removedReqs = getRemovedRequirementIds();
      const hiddenManpower = getHiddenManpowerIds();
      const removedManpower = getRemovedManpowerIds();
      const hiddenBusiness = getHiddenBusinessIds();
      const removedBusiness = getRemovedBusinessIds();

      const [requirementsRes, manpowerRes, businessesRes] = await Promise.all([
        axios.get(`${API_URL}/api/all-requirements`),
        axios.get(`${API_URL}/api/manpower/all`), 
        axios.get(`${API_URL}/api/busnies/public`)  
      ]);

      // Filter out hidden and removed items for each data type
      const filteredRequirements = (requirementsRes.data?.data || [])
        .filter(item => !removedReqs[item._id] && !hiddenReqs[item._id]);

      const filteredManpower = (manpowerRes.data?.data || [])
        .filter(item => !removedManpower[item._id] && !hiddenManpower[item._id]);

      const filteredBusinesses = (businessesRes.data?.data || [])
        .filter(item => !removedBusiness[item._id] && !hiddenBusiness[item._id]);

      setRequirements(filteredRequirements);
      setManpowerData(filteredManpower);
      setBusinessData(filteredBusinesses);

    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();

    // Enhanced event listener setup
    const handleDataChange = (event) => {
      if (!event || event.detail?.type === 'business') {
        fetchAllData();
      }
    };

    window.addEventListener('storage', handleDataChange);
    window.addEventListener('dashboardStateChanged', handleDataChange);
    
    return () => {
      window.removeEventListener('storage', handleDataChange);
      window.removeEventListener('dashboardStateChanged', handleDataChange);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3>Error Loading Data</h3>
        <p>{error}</p>
        <button onClick={fetchAllData} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="slider-container">
      <div className="three-column-slider">
        {/* Left Section - Manpower Data */}
        <div className="slider-column">
          <h2 className="column-title">Job Positions ({manpowerData.length})</h2>
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{ 
                animation: `scrollUp ${getAnimationDuration(manpowerData)} linear infinite`,
                animationPlayState: loading ? 'paused' : 'running'
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {manpowerData.length > 0 ? (
                manpowerData.map((item) => (
                  <div 
                    className="slider-card" 
                    key={item._id}
                    onMouseEnter={(e) => {
                      const track = e.currentTarget.closest('.slider-track');
                      if (track) track.style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      const track = e.currentTarget.closest('.slider-track');
                      if (track) track.style.animationPlayState = 'running';
                    }}
                  >
                    <h3>{item.designation || 'Position'}</h3>
                    <div className="card-details">
                      <p><strong>Positions:</strong> {item.noOfPositions || '-'}</p>
                      <p><strong>Experience:</strong> {item.experience || '-'}</p>
                      <p><strong>Location:</strong> {item.location || '-'}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-message">No positions available</div>
              )}
            </div>
          </div>
        </div>

        {/* Center Section - Requirements Data */}
        <div className="slider-column">
          <h2 className="column-title">Company Requirements ({requirements.length})</h2>
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{ 
                animation: `scrollUp ${getAnimationDuration(requirements)} linear infinite`,
                animationPlayState: loading ? 'paused' : 'running'
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {requirements.length > 0 ? (
                requirements.map((item) => (
                  <div 
                    className="slider-card" 
                    key={item._id}
                    onMouseEnter={(e) => {
                      const track = e.currentTarget.closest('.slider-track');
                      if (track) track.style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      const track = e.currentTarget.closest('.slider-track');
                      if (track) track.style.animationPlayState = 'running';
                    }}
                  >
                    <h3>{item.companyName || 'Company'}</h3>
                    <div className="card-details">
                      <p><strong>Product:</strong> {item.product || '-'}</p>
                      <p><strong>Team Size:</strong> {item.teamSize || '-'}</p>
                      <p><strong>Category:</strong> {item.categoryType || '-'}</p>
                      <p><strong>City:</strong> {item.companyCity || '-'}</p>
                      <p><strong>State:</strong> {item.companyState || '-'}</p>
                      <p><strong>Pincode:</strong> {item.companyPincode || '-'}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-message">No requirements available</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Businesses Data */}
        <div className="slider-column">
          <h2 className="column-title">Businesses ({businessData.length})</h2>
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{ 
                animation: `scrollUp ${getAnimationDuration(businessData)} linear infinite`,
                animationPlayState: loading ? 'paused' : 'running'
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {businessData.length > 0 ? (
                businessData.map((item) => (
                  <div 
                    className="slider-card" 
                    key={item._id}
                    onMouseEnter={(e) => {
                      const track = e.currentTarget.closest('.slider-track');
                      if (track) track.style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      const track = e.currentTarget.closest('.slider-track');
                      if (track) track.style.animationPlayState = 'running';
                    }}
                  >
                    <h3>{item.companyName || 'Business'}</h3>
                    <div className="card-details">
                      <p><strong>Type:</strong> {item.companyType || '-'}</p>
                      <p><strong>Contact:</strong> {item.contactName || '-'}</p>
                      <p><strong>Products:</strong> {item.productsHandling || '-'}</p>
                      <p><strong>Location:</strong> {item.companyCity || '-'}, {item.companyState || '-'}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-message">No businesses available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;