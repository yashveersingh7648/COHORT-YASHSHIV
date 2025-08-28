

// Working

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ImageSlider.css';
// import { useAuth } from './../context/AuthContext';
// import {
//   getHiddenRequirementIds,
//   getRemovedRequirementIds,
//   getHiddenManpowerIds,
//   getRemovedManpowerIds,
//   getHiddenAgencyIds,
//   getRemovedAgencyIds
// } from './../utils/dashboardState';

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// const ImageSlider = () => {
//   const [requirements, setRequirements] = useState([]);
//   const [manpowerData, setManpowerData] = useState([]);
//   const [agencyData, setAgencyData] = useState([]); // Changed from businessData to agencyData
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { user } = useAuth();

//   const animationDuration = 60;

//   const getAnimationDuration = (items) => {
//     const baseDuration = animationDuration;
//     const itemCount = items.length || 1;
//     return `${baseDuration * (itemCount / 10)}s`; 
//   };

//   const fetchAllData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       // Get current hidden and removed IDs for all data types
//       const hiddenReqs = getHiddenRequirementIds();
//       const removedReqs = getRemovedRequirementIds();
//       const hiddenManpower = getHiddenManpowerIds();
//       const removedManpower = getRemovedManpowerIds();
//       const hiddenAgency = getHiddenAgencyIds(); // Changed from hiddenBusiness
//       const removedAgency = getRemovedAgencyIds(); // Changed from removedBusiness

//       const [requirementsRes, manpowerRes, agenciesRes] = await Promise.all([
//         axios.get(`${API_URL}/api/all-requirements`),
//         axios.get(`${API_URL}/api/manpower/all`), 
//         axios.get(`${API_URL}/api/dashboard`)  // Changed from /api/busnies/public to /api/dashboard
//       ]);

//       // Filter out hidden and removed items for each data type
//       const filteredRequirements = (requirementsRes.data?.data || requirementsRes.data || [])
//         .filter(item => !removedReqs[item._id] && !hiddenReqs[item._id]);

//       const filteredManpower = (manpowerRes.data?.data || manpowerRes.data || [])
//         .filter(item => !removedManpower[item._id] && !hiddenManpower[item._id]);

//       const filteredAgencies = (agenciesRes.data?.data || agenciesRes.data || [])
//         .filter(item => !removedAgency[item._id] && !hiddenAgency[item._id]);

//       setRequirements(filteredRequirements);
//       setManpowerData(filteredManpower);
//       setAgencyData(filteredAgencies); // Changed from setBusinessData

//     } catch (err) {
//       console.error('Fetch error:', err);
//       setError(err.response?.data?.error || err.message || 'Failed to load data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllData();

//     const handleDataChange = (event) => {
//       if (!event || event.detail?.type === 'agency') { // Changed from 'business' to 'agency'
//         fetchAllData();
//       }
//     };

//     window.addEventListener('storage', handleDataChange);
//     window.addEventListener('dashboardStateChanged', handleDataChange);
    
//     return () => {
//       window.removeEventListener('storage', handleDataChange);
//       window.removeEventListener('dashboardStateChanged', handleDataChange);
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p>Loading data...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-container">
//         <div className="error-icon">⚠️</div>
//         <h3>Error Loading Data</h3>
//         <p>{error}</p>
//         <button onClick={fetchAllData} className="retry-button">
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="slider-container">
//       <div className="three-column-slider">
//         {/* Left Section - Manpower Data */}
//         <div className="slider-column">
//           <h2 className="column-title">Job Positions ({manpowerData.length})</h2>
//           <div className="slider-wrapper">
//             <div 
//               className="slider-track"
//               style={{ 
//                 animation: `scrollUp ${getAnimationDuration(manpowerData)} linear infinite`,
//                 animationPlayState: loading ? 'paused' : 'running'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
//               onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
//             >
//               {manpowerData.length > 0 ? (
//                 manpowerData.map((item) => (
//                   <div className="slider-card" key={item._id}>
//                     <h3>{item.designation || 'Position'}</h3>
//                     <div className="card-details">
//                       <p><strong>Positions:</strong> {item.noOfPositions || '-'}</p>
//                       <p><strong>Experience:</strong> {item.experience || '-'}</p>
//                       <p><strong>Location:</strong> {item.location || '-'}</p>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-data-message">No positions available</div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Center Section - Requirements Data */}
//         <div className="slider-column">
//           <h2 className="column-title">Company Requirements ({requirements.length})</h2>
//           <div className="slider-wrapper">
//             <div 
//               className="slider-track"
//               style={{ 
//                 animation: `scrollUp ${getAnimationDuration(requirements)} linear infinite`,
//                 animationPlayState: loading ? 'paused' : 'running'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
//               onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
//             >
//               {requirements.length > 0 ? (
//                 requirements.map((item) => (
//                   <div className="slider-card" key={item._id}>
//                     <h3>{item.companyName || 'Company'}</h3>
//                     <div className="card-details">
//                       <p><strong>Product:</strong> {item.product || '-'}</p>
//                       <p><strong>Team Size:</strong> {item.teamSize || '-'}</p>
//                       <p><strong>Category:</strong> {item.categoryType || '-'}</p>
//                       <p><strong>City:</strong> {item.companyCity || '-'}</p>
//                       <p><strong>State:</strong> {item.companyState || '-'}</p>
//                       <p><strong>Pincode:</strong> {item.companyPincode || '-'}</p>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-data-message">No requirements available</div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Agency Data (Changed from Businesses) */}
//         <div className="slider-column">
//           <h2 className="column-title">Agencies ({agencyData.length})</h2>
//           <div className="slider-wrapper">
//             <div 
//               className="slider-track"
//               style={{ 
//                 animation: `scrollUp ${getAnimationDuration(agencyData)} linear infinite`,
//                 animationPlayState: loading ? 'paused' : 'running'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
//               onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
//             >
//               {agencyData.length > 0 ? (
//                 agencyData.map((item) => (
//                   <div className="slider-card" key={item._id}>
//                     <h3>{item.companyName || 'Agency'}</h3>
//                     <div className="card-details">
//                       <p><strong>Contact:</strong> {item.contactName || '-'}</p>
//                       <p><strong>Category:</strong> {item.categoryType || '-'}</p>
//                       <p><strong>Phone:</strong> {item.companyPhone || '-'}</p>
//                       <p><strong>Location:</strong> {item.companyCity || '-'}, {item.companyState || '-'}</p>
//                       <p><strong>Email:</strong> {item.companyEmail || item.userEmail || '-'}</p>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-data-message">No agencies available</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;






// 27-08-25
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ImageSlider.css';
import { useAuth } from './../context/AuthContext';
import {
  getHiddenRequirementIds,
  getRemovedRequirementIds,
  getHiddenManpowerIds,
  getRemovedManpowerIds,
  getHiddenAgencyIds,
  getRemovedAgencyIds
} from './../utils/dashboardState';

const API_URL = import.meta.env.VITE_API_URL || "https://supcohort-muvm.onrender.com";

const ImageSlider = () => {
  const [requirements, setRequirements] = useState([]);
  const [manpowerData, setManpowerData] = useState([]);
  const [agencyData, setAgencyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { isAuthenticated, userType } = useAuth();
  const navigate = useNavigate();

  const animationDuration = 60;

  // localStorage se initial value load karo
  const [agencyViewCount, setAgencyViewCount] = useState(() => {
    return parseInt(localStorage.getItem("agencyViewCount") || "0", 10);
  });

  const [isSubscribed, setIsSubscribed] = useState(() => {
    return localStorage.getItem("isSubscribed") === "true";
  });

  // const getAnimationDuration = (items) => {
  //   const baseDuration = animationDuration;
  //   const itemCount = items.length || 1;
  //   return `${baseDuration * (itemCount / 10)}s`;
  // };

const getAnimationDuration = (items) => {
  const baseDuration = animationDuration; // 60s
  const itemCount = items.length;

  // kam se kam 1 card ke liye bhi scroll ka time bada ho
  const safeCount = Math.max(itemCount, 10);  

  return `${baseDuration * (safeCount / 10)}s`;
};
      
  const maskSensitiveData = (data, fieldName) => {
    if (!data) return '*****';
    if (fieldName === 'email') {
      const [username, domain] = data.split('@');
      return `${username.slice(0, 2)}****@${domain}`;
    }
    if (fieldName === 'phone') {
      return data.slice(0, 3) + '****' + data.slice(-2);
    }
    if (fieldName === 'name') {
      return data.slice(0, 2) + '****';
    }
    return '*****';
  };

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      const hiddenReqs = getHiddenRequirementIds();
      const removedReqs = getRemovedRequirementIds();
      const hiddenManpower = getHiddenManpowerIds();
      const removedManpower = getRemovedManpowerIds();
      const hiddenAgency = getHiddenAgencyIds();
      const removedAgency = getRemovedAgencyIds();

      const [requirementsRes, manpowerRes, agenciesRes] = await Promise.all([
        axios.get(`${API_URL}/api/all-requirements`),
        axios.get(`${API_URL}/api/manpower/all`),
        axios.get(`${API_URL}/api/dashboard`)
      ]);

      const filteredRequirements = (requirementsRes.data?.data || requirementsRes.data || [])
        .filter(item => !removedReqs[item._id] && !hiddenReqs[item._id]);

      const filteredManpower = (manpowerRes.data?.data || manpowerRes.data || [])
        .filter(item => !removedManpower[item._id] && !hiddenManpower[item._id]);

      const filteredAgencies = (agenciesRes.data?.data || agenciesRes.data || [])
        .filter(item => !removedAgency[item._id] && !hiddenAgency[item._id]);

      setRequirements(filteredRequirements);
      setManpowerData(filteredManpower);
      setAgencyData(filteredAgencies);

    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };


  const handleCardClick = (item, type) => {
    // Guest → Login page bhej do
     window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    if (!isAuthenticated) {
      navigate('/Login_SignUp');
      return;
    }

    // Agency restriction
    if (userType === 'agency') {
      if (!isSubscribed) {
        if (agencyViewCount >= 2) {
          setShowPaymentModal(true);
          return;
        }
        // free quota use karna
        const newCount = agencyViewCount + 1;
        setAgencyViewCount(newCount);
        localStorage.setItem("agencyViewCount", newCount); // save localStorage
      }
    }

    // Lender ya subscribed agency → allow navigation
    navigate(`/detail/${type}/${item._id}`, { state: { item, type } });
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setIsSubscribed(true);
    localStorage.setItem("isSubscribed", "true"); // subscription persist
    alert('✅ Payment successful! Now you can view unlimited cards.');
  };

  useEffect(() => {
    fetchAllData();

    const handleDataChange = () => fetchAllData();
    window.addEventListener('storage', handleDataChange);
    window.addEventListener('dashboardStateChanged', handleDataChange);

    return () => {
      window.removeEventListener('storage', handleDataChange);
      window.removeEventListener('dashboardStateChanged', handleDataChange);
    };
  }, []);

  // reset agar agency login kare to
  useEffect(() => {
    if (userType !== 'agency') {
      localStorage.removeItem("agencyViewCount");
      localStorage.removeItem("isSubscribed");
    }
  }, [userType]);



   const handleFooterLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }; 


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
      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <h3>Premium Subscription Required</h3>
            <p>You have already viewed 2 cards. Please subscribe for unlimited access.</p>
            <div className="payment-options">
              <button className="payment-option">Monthly - ₹999</button>
              <button className="payment-option">Yearly - ₹9999</button>
            </div>
            <div className="modal-actions">
              <button onClick={() => setShowPaymentModal(false)} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handlePaymentSuccess} className="subscribe-btn">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      )}

       <div className="three-column-slider">
        
        {/* Left Section - Manpower Data (Agency can view) */}
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
                    onClick={() => handleCardClick(item, 'manpower')}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>{item.designation || 'Position'}</h3>
                    <div className="card-details">
                      <p><strong>Positions:</strong> {item.noOfPositions || '-'}</p>
                      <p><strong>Experience:</strong> {item.experience || '-'}</p>
                      <p><strong>Location:</strong> {item.location || '-'}</p>
                      {!isAuthenticated && (
                        <p className="login-prompt">Login to view details</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-message">No positions available</div>
              )}
            </div>
          </div>
        </div>

        {/* Center Section - Requirements Data (Agency can view) */}
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
                    onClick={() => handleCardClick(item, 'requirement')}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>{item.companyName || 'Company'}</h3>
                    <div className="card-details">
                      <p><strong>Product:</strong> {item.product || '-'}</p>
                      <p><strong>Team Size:</strong> {item.teamSize || '-'}</p>
                      <p><strong>Category:</strong> {item.categoryType || '-'}</p>
                      <p><strong>City:</strong> {item.companyCity || '-'}</p>
                      <p><strong>State:</strong> {item.companyState || '-'}</p>
                      <p><strong>Pincode:</strong> {item.companyPincode || '-'}</p>
                      
                      {!isAuthenticated && (
                        <p className="login-prompt">Login to view contact details</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-message">No requirements available</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Agency Data (Payment required for agency users) */}
        <div className="slider-column">
          <h2 className="column-title">Agencies ({agencyData.length})</h2>
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{ 
                animation: `scrollUp ${getAnimationDuration(agencyData)} linear infinite`,
                animationPlayState: loading ? 'paused' : 'running'
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {agencyData.length > 0 ? (
                agencyData.map((item) => (
                  <div 
                    className="slider-card" 
                    key={item._id}
                    onClick={() => handleCardClick(item, 'agency')}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>{item.companyName || 'Agency'}</h3>
                    <div className="card-details">
                      <p><strong>Contact:</strong> 
                        {userType === 'lender' ? (item.contactName || '-') : maskSensitiveData(item.contactName, 'name')}
                      </p>
                      <p><strong>Category:</strong> {item.categoryType || '-'}</p>
                      <p><strong>Phone:</strong> 
                        {userType === 'lender' ? (item.companyPhone || '-') : maskSensitiveData(item.companyPhone, 'phone')}
                      </p>
                      <p><strong>Location:</strong> {item.companyCity || '-'}, {item.companyState || '-'}</p>
                      <p><strong>Email:</strong> 
                        {userType === 'lender' ? (item.companyEmail || item.userEmail || '-') : maskSensitiveData(item.companyEmail || item.userEmail, 'email')}
                      </p>
                      
                     
                      
                      {!isAuthenticated && (
                        <p className="login-prompt">Login to view details</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data-message">No agencies available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
