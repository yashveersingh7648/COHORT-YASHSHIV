// import React, { useState } from "react";
// import BusniesForm from "../BusniesForm/BusniesForm";
// import styles from "./DashboardBus.module.css";
// import axios from "axios";
// import { FaBuilding, FaCheck, FaSpinner } from "react-icons/fa";
// import { toast } from "react-toastify";

// const DashboardTabs = () => {
//   const [isSaved, setIsSaved] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});

//   const handleSave = (data) => {
//     console.log("Saved data:", data);
//     setFormData(data);
//     setIsSaved(true);
//     setValidationErrors({});
//     toast.success("Form data saved successfully! Click Submit to send.");
//   };

//   const handleSubmit = async () => {
//   if (!isSaved || !formData) {
//     toast.error("Please save the form before submitting");
//     return;
//   }

//   setIsSubmitting(true);
//   setValidationErrors({});
  
//   try {
//     // Normal JSON data bhej rahe hain (FormData ki jagah)
//     const response = await axios.post('http://localhost:8000/api/busnies', formData, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       withCredentials: true
//     });

//     if (response.data.success) {
//       toast.success('Company details successfully submitted!');
//       setIsSaved(false);
//       setFormData(null);
//     } else {
//       throw new Error(response.data.message || 'Submission failed');
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
    
//     if (error.response?.data?.errors) {
//       setValidationErrors(error.response.data.errors);
//       Object.entries(error.response.data.errors).forEach(([field, message]) => {
//         toast.error(`${field}: ${message}`);
//       });
//     } else if (error.response?.data?.message) {
//       toast.error(error.response.data.message);
//     } else {
//       toast.error(error.message || 'Network error. Please try again.');
//     }
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   return (
//     <div className={styles.dashboardContainer}>
//       <div className={styles.sidebar}>
//         <button className={`${styles.tabButton} ${styles.activeTab}`}>
//           <FaBuilding className={styles.tabIcon} />
//           Business Information
//           {isSaved && <FaCheck className={styles.checkIcon} />}
//         </button>
//       </div>

//       <div className={styles.content}>
//         <BusniesForm
//           formData={formData}
//           onSave={handleSave}
//           validationErrors={validationErrors}
//         />

//         <div className={styles.submitContainer}>
//           <button
//             className={styles.submitButton}
//             onClick={handleSubmit}
//             disabled={isSubmitting || !isSaved}
//           >
//             {isSubmitting ? (
//               <>
//                 <FaSpinner className={styles.spinnerIcon} spin />
//                 Submitting...
//               </>
//             ) : 'Submit'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardTabs;

















// src/components/DashboardPage/DashboardPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  FaUser, FaSearch, FaBuilding, FaMapMarkerAlt,
  FaEnvelope, FaPhone, FaCity, FaMapPin, FaFilePdf,
  FaEyeSlash, FaTrash
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardBus.module.css';
import {
  getHiddenIds,
  markHiddenId,
  getRemovedIds,
  markRemovedId
} from "../../utils/dashboardState";

// const BASE_URL = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const DashboardPage = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hiddenIds, setHiddenIds] = useState({});
  const [removedIds, setRemovedIds] = useState({});
  const navigate = useNavigate();

  // Real-time sync with localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      setHiddenIds(getHiddenIds());
      setRemovedIds(getRemovedIds());
    }, 500); // Check every 500ms for changes
    
    return () => clearInterval(interval);
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_URL}/api/dashboard`);
      
      const formattedData = res.data.map(item => ({
        ...item,
        companyName: item.companyName || 'Unnamed Company',
        contactName: item.contactName || 'N/A',
        categoryType: item.categoryType || 'N/A',
        companyPhone: item.companyPhone || 'N/A',
        companyCity: item.companyCity || 'N/A',
        companyState: item.companyState || 'N/A',
      }));

      setData(formattedData);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleHide = (id) => {
    markHiddenId(id);
    setHiddenIds(getHiddenIds());
  };

  const handleDelete = (id) => {
    markRemovedId(id);
    setRemovedIds(getRemovedIds());
  };

  // Filter out hidden and removed items
  const activeData = data.filter(
    item => !hiddenIds[item._id] && !removedIds[item._id]
  );

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}><h2>AgencyHub</h2></div>
        <nav className={styles.navMenu}>
          <button className={`${styles.tabButton} ${styles.activeTab}`}>
            <FaUser className={styles.tabIcon} /> Agency
          </button>
        </nav>
        <div className={styles.sidebarFooter}><p>© 2025 AgencyHub</p></div>
      </div>

      <main className={styles.content}>
        <section className={styles.contentBody}>
          {error ? (
            <div className={styles.errorState}><p>{error}</p></div>
          ) : loading ? (
            <div className={styles.loadingState}>
              <div className={styles.spinner}></div>
              <p>Loading...</p>
            </div>
          ) : activeData.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No companies found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className={styles.twoColumnGrid}>
              {activeData.map((item) => (
                <div key={item._id} className={styles.card}>
                  <div className={styles.cardBanner}>
                    {item.companyBanner ? (
                      <img
                        src={`${BASE_URL}/uploads/${item.companyBanner}`}
                        alt="Banner"
                        className={styles.bannerImage}
                      />
                    ) : (
                      <div className={styles.defaultBanner}>
                        <FaBuilding size={48} color="#666" />
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.cardHeader}>
                    <div className={styles.cardTitle}>
                      <h3>{item.companyName}</h3>
                    </div>
                    <div className={styles.cardActions}>
                      <button
                        className={styles.hideBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHide(item._id);
                        }}
                        title="Hide"
                      >
                        <FaEyeSlash />
                      </button>
                      <button
                        className={styles.deleteBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item._id);
                        }}
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardData}>
                      <div className={styles.infoItem}><FaUser /> {item.contactName}</div>
                      <div className={styles.infoItem}><FaBuilding /> {item.categoryType}</div>
                      <div className={styles.infoItem}><FaPhone /> {item.companyPhone}</div>
                      <div className={styles.infoItem}><FaCity /> {item.companyCity}</div>
                      <div className={styles.infoItem}><FaMapMarkerAlt /> {item.companyState}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;