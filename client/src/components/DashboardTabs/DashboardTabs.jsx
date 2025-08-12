
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompanyForm from "../CompanyForm/CompanyForm";
import styles from "./DashboardTabs.module.css";
import axios from "axios";
import { FaBuilding, FaCheck, FaSpinner, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from '../../context/AuthContext';

// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const DashboardTabs = ({onSave, onCancel}) => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [companies, setCompanies] = useState([]);
  const [loadingCompanies, setLoadingCompanies] = useState(true);

  // Client-side validation rules
  const validateForm = (data) => {
    const errors = {};
    
    // Required field validation
    if (!data.companyName) errors.companyName = 'Company name is required';
    if (!data.companyType) errors.companyType = 'Company type is required';
    if (!data.categoryType) errors.categoryType = 'Category type is required';
    if (!data.companyRegNo) errors.companyRegNo = 'Registration number is required';
    if (!data.companyEstablished) errors.companyEstablished = 'Establishment date is required';
    if (!data.contactName) errors.contactName = 'Contact person is required';
    if (!data.companyEmail) {
      errors.companyEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.companyEmail)) {
      errors.companyEmail = 'Invalid email format';
    }
    if (!data.companyPhone) {
      errors.companyPhone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.companyPhone)) {
      errors.companyPhone = 'Phone must be 10 digits';
    }
    if (!data.companyGst) {
      errors.companyGst = 'GST number is required';
    } else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(data.companyGst)) {
      errors.companyGst = 'Invalid GST format (e.g. 22AAAAA0000A1Z5)';
    }
    if (!data.companyAddress) errors.companyAddress = 'Address is required';
    if (!data.companyCity) errors.companyCity = 'City is required';
    if (!data.companyState) errors.companyState = 'State is required';
    if (!data.companyCountry) errors.companyCountry = 'Country is required';
    if (!data.companyPincode) {
      errors.companyPincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(data.companyPincode)) {
      errors.companyPincode = 'Pincode must be 6 digits';
    }
    if (!data.totalManpower) {
      errors.totalManpower = 'Manpower count is required';
    } else if (data.totalManpower < 1 || data.totalManpower > 100000) {
      errors.totalManpower = 'Manpower must be between 1-100,000';
    }
    if (!data.workstations) {
      errors.workstations = 'Workstation count is required';
    } else if (data.workstations < 1 || data.workstations > 10000) {
      errors.workstations = 'Workstations must be between 1-10,000';
    }

    // File validation (if files are selected)
    if (data.companyLogo && !/\.(jpg|jpeg|png|gif)$/i.test(data.companyLogo.name)) {
      errors.companyLogo = 'Logo must be JPG, PNG or GIF';
    }
    if (data.profilePdf && !/\.pdf$/i.test(data.profilePdf.name)) {
      errors.profilePdf = 'Profile must be PDF';
    }

    return errors;
  };

  const handleSave = (data) => {
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      Object.entries(errors).forEach(([field, message]) => {
        toast.error(`${field}: ${message}`);
      });
      return;
    }
    
    setFormData(data);
    setIsSaved(true);
    setValidationErrors({});
    toast.success("Form data saved successfully! Click Submit to send.");
     if (onSave) {
      onSave(data);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!isSaved || !formData) {
    toast.error("Please save the form before submitting");
    return;
  }

  try {
    setIsSubmitting(true);
    setValidationErrors({});

    const formDataToSend = new FormData();
    
    // Append all fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        formDataToSend.append(key, value);
      } else if (value !== null && value !== undefined) {
        // Handle date formatting
        if (key === 'companyEstablished' && typeof value === 'string') {
          if (value.includes('/')) {
            const [month, year] = value.split('/');
            const date = new Date(year, month - 1, 1);
            formDataToSend.append(key, date.toISOString());
          } else {
            formDataToSend.append(key, value);
          }
        } else {
          formDataToSend.append(key, value);
        }
      }
    });

    // Add user email
    formDataToSend.append('userEmail', user?.email || '');

    const response = await axios.post(
      `${API_URL}/api/companies`, 
      formDataToSend, 
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
        withCredentials: true
      }
    );

    if (response.data.success) {
      toast.success('Company details successfully submitted!');
      setIsSaved(false);
      setFormData(null);
      
      // Redirect to success page with company data
      navigate('/DashboardPage', {
        state: {
          company: response.data.company,
          message: "Your company has been successfully registered!"
        }
      });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    
    if (error.response?.status === 401) {
      logout();
      navigate('/login');
      toast.error('Session expired. Please login again.');
    } else if (error.response?.status === 400) {
      if (error.response.data?.errors) {
        const serverErrors = error.response.data.errors;
        setValidationErrors(serverErrors);
        Object.entries(serverErrors).forEach(([field, message]) => {
          toast.error(`${field}: ${message}`);
        });
      }
    } else {
      toast.error(error.message || 'Error submitting form');
    }
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <button className={`${styles.tabButton} ${styles.activeTab}`}>
          <FaBuilding className={styles.tabIcon} />
          Company Information
          {isSaved && <FaCheck className={styles.checkIcon} />}
        </button>
      </div>

      <div className={styles.content}>
        <CompanyForm
          formData={formData}
          onSave={handleSave}
          validationErrors={validationErrors}
        />

        <div className={styles.submitContainer}>
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={isSubmitting || !isSaved}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className={styles.spinnerIcon} spin />
                Submitting...
              </>
            ) : 'Submit'}
          </button>
        </div>

        {/* Companies List Section */}
        {/* <div className={styles.companiesList}>
          <h3>Your Companies</h3>
          {loadingCompanies ? (
            <div className={styles.loading}>Loading companies...</div>
          ) : companies.length === 0 ? (
            <div className={styles.noCompanies}>No companies found</div>
          ) : (
            <ul>
              {companies.map(company => (
                <li key={company._id} className={styles.companyItem}>
                  <div className={styles.companyInfo}>
                    {company.logoUrl && (
                      <img 
                        src={company.logoUrl} 
                        alt={`${company.companyName} logo`} 
                        className={styles.companyLogo}
                      />
                    )}
                    <div>
                      <h4>{company.companyName}</h4>
                      <p>{company.companyCity}, {company.companyState}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/companies/${company._id}`)}
                    className={styles.viewButton}
                  >
                    <FaEye /> View
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default DashboardTabs;