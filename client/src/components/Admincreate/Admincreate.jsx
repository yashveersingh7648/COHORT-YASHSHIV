import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  FaUser, FaSearch, FaBuilding, FaMapMarkerAlt,
  FaEnvelope, FaPhone, FaCity, FaMapPin, FaFilePdf,
  FaShareAlt, FaCopy, FaWhatsapp, FaLinkedin, FaTwitter,
  FaHome, FaPlus, FaList, FaCheck, FaSpinner, FaSearchDollar,
  FaUserTie, FaClipboardList
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Admincreate.module.css';
import PostRequrement from '../PostRequrement/PostRequrement';
import AddManpowerForm from '../AddManpowerForm/AddManpowerForm';
import BusniesForm from '../BusniesForm/BusniesForm';
import DashboardTabs from '../AgencyCreate/AgencyCreate';
import ManageRequirements from '../ManageRequirements/ManageRequirements';
import ManageManpower from '../AddManpowerForm/ManageManpower';
import { useAuth } from '../../context/AuthContext';

// const BASE_URL = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const Admincreate = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.defaultTab || 'agency');
  const [businessData, setBusinessData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [requirementsKey, setRequirementsKey] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBusinessSubmit = async () => {
    if (!formData) {
      setError('No form data to submit');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const submissionData = {
        ...formData,
        userId: user?.id || null,
        userEmail: user?.email || formData.userEmail || ''
      };

      const response = await axios.post(
        `${API_URL}/api/busnies`,
        submissionData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token}`
          }
        }
      );

      if (response.data.success) {
        alert('Business saved successfully!');
        setFormData(null);
        setIsSaved(false);
      } else {
        throw new Error(response.data.message || 'Business submission failed');
      }
    } catch (error) {
      console.error('Business submission error:', error);
      let errorMessage = 'Failed to submit business';
      if (error.response) {
        if (error.response.data?.errors) {
          const validationErrors = {};
          Object.keys(error.response.data.errors).forEach(key => {
            validationErrors[key] = error.response.data.errors[key].message;
          });
          setValidationErrors(validationErrors);
          errorMessage = 'Please fix the form errors';
        } else {
          errorMessage = error.response.data?.message || error.response.statusText;
        }
      } else {
        errorMessage = error.message;
      }
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequirementSubmit = async () => {
    if (!formData) {
      setError('No form data to submit');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${API_URL}/api/requirements`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token}`
          }
        }
      );

      if (response.data.success) {
        alert("Form submitted successfully");
        setFormData(null);
      } else {
        throw new Error(response.data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      const errorMsg = error.response?.data?.details 
        ? error.response.data.details.join(', ')
        : error.response?.data?.error || error.message;
      setError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManpowerSubmit = async () => {
    if (!user?.token) {
      alert('Please login again - Token missing');
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/manpower`,
        {
          ...formData,
          userId: user?.id
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          timeout: 10000 
        }
      );

      if (response.data?.success) {
        alert('Successfully submitted!');
        setFormData(null);
        setRequirementsKey(prev => prev + 1);
      } else {
        throw new Error(response.data?.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });

      let errorMessage = 'Submission failed';
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Session expired - Please login again';
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      }
      alert(errorMessage);
    }
  };

  const handleSave = (data) => {
    console.log("Form data saved:", data);
    if (!data.userEmail && user?.email) {
      data.userEmail = user.email; 
    }
    setFormData(data);
    setIsSaved(true);
    setValidationErrors({});
    setError(null);
  };

  const onRequirementsChange = () => {
    setRequirementsKey(prev => prev + 1);
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'agency':
        return <DashboardTabs />;
      case 'addBusiness':
        return (
          <>
            <header className={styles.contentHeader}>
              <h1>Add New Business</h1>
            </header>
            <section className={styles.contentBody}>
              <div className={styles.formContainer}>
                <BusniesForm
                  formData={formData}
                  onSave={handleSave}
                  validationErrors={validationErrors}
                />
                <div className={styles.submitContainer}>
                  <button
                    className={styles.submitButton}
                    onClick={() => handleBusinessSubmit('busnies')}
                    disabled={isSubmitting || !isSaved}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className={styles.spinnerIcon} spin />
                        Submitting...
                      </>
                    ) : 'Submit Business'}
                  </button>
                </div>
              </div>
            </section>
          </>
        );
      case 'postRequirement':
        return (
          <>
            <header className={styles.contentHeader}>
              <h1>Post New Requirement</h1>
            </header>
            <section className={styles.contentBody}>
              <div className={styles.formContainer}>
                <PostRequrement
                  formData={formData}
                  onSave={handleSave}
                  validationErrors={validationErrors}
                />
                <div className={styles.submitContainer}>
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={() => {
                      if (!isSaved) {
                        setError('Please save the form first by clicking "Save Company Details"');
                        return;
                      }
                      handleRequirementSubmit('requirements');
                    }}
                    disabled={isSubmitting || !isSaved}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className={styles.spinnerIcon} spin="true" />
                        Submitting...
                      </>
                    ) : 'Submit Requirement'}
                  </button>
                </div>
              </div>
            </section>
            <ManageRequirements
              key={requirementsKey}
              onDataChange={onRequirementsChange}
            />
          </>
        );
      case 'addManpower':
        return (
          <>
            <header className={styles.contentHeader}>
              <h1>Add Job Position</h1>
            </header>
            <section className={styles.contentBody}>
              <div className={styles.formContainer}>
                <AddManpowerForm
                  formData={formData}
                  onSave={handleSave}
                  validationErrors={validationErrors}
                />
                <div className={styles.submitContainer}>
                  <button
                    className={styles.submitButton}
                    onClick={() => handleManpowerSubmit('manpower')}
                    disabled={isSubmitting || !isSaved}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className={styles.spinnerIcon} spin />
                        Submitting...
                      </>
                    ) : 'Submit Position'}
                  </button>
                </div>
              </div>
            </section>
            <ManageManpower
              key={requirementsKey}
              onDataChange={onRequirementsChange}
            />
          </>
        );
      default:
        return <DashboardTabs />;
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}><h2>BusinessHub</h2></div>
        <nav className={styles.navMenu}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'agency' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('agency')}
          >
            <FaUser className={styles.tabIcon} /> Agency
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'addBusiness' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('addBusiness')}
          >
            <FaBuilding className={styles.tabIcon} /> Add Business
            {activeTab === 'addBusiness' && isSaved && (
              <FaCheck className={styles.checkIcon} />
            )}
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'postRequirement' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('postRequirement')}
          >
            <FaClipboardList className={styles.tabIcon} /> Post Requirement
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'addManpower' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('addManpower')}
          >
            <FaUserTie className={styles.tabIcon} /> Add Post
          </button>
        </nav>
        <div className={styles.sidebarFooter}><p>© 2025 BusinessHub</p></div>
      </div>

      <main className={styles.content}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Admincreate;
