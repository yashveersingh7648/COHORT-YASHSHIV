
// 07-08-25
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import {
  FaUser, FaPhone, FaMapMarkerAlt, FaBuilding, FaFilePdf,
  FaEnvelope, FaCity, FaIdCard, FaUsers, FaSave, FaSpinner
} from "react-icons/fa";
import styles from "./EditAgencyProfile.module.css";

// const BASE = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const AgencyEditPage = () => {
  const navigate = useNavigate();
  const { agencyUser, logoutAgency } = useAuth();
  const [agency, setAgency] = useState({
    companyName: "",
    contactName: "",
    companyPhone: "",
    userEmail: "",
    companyCity: "",
    companyState: "",
    companyPincode: "",
    categoryType: "",
    totalManpower: "",
    companyLogo: null,
    companyBanner: null,
    profilePdf: null
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [previewLogo, setPreviewLogo] = useState(null);
  const [previewBanner, setPreviewBanner] = useState(null);

  // Configure axios instance with interceptors
  const api = axios.create({
    baseURL: API_URL
  });

  api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (agencyUser?.email) {
      config.headers["X-User-Email"] = agencyUser.email;
    }
    return config;
  });

  useEffect(() => {
    const fetchAgencyData = async () => {
      try {
        if (!agencyUser?.email) {
          throw new Error("No authenticated user found");
        }

        const res = await api.post("/api/agency/dashboard/by-email", { 
          email: agencyUser.email 
        });
        
        if (!res.data?.data) {
          throw new Error("Failed to fetch agency data");
        }

        const data = res.data.data;
        setAgency({
          ...data,
          userEmail: data.userEmail || agencyUser.email,
          companyLogo: null,
          companyBanner: null,
          profilePdf: null
        });
        
        if (data.companyLogo) {
          setPreviewLogo(`${API_URL}/uploads/${data.companyLogo}`);
        }
        if (data.companyBanner) {
          setPreviewBanner(`${API_URL}/uploads/${data.companyBanner}`);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.response?.data?.message || err.message);
        
        if (err.response?.status === 401) {
          logoutAgency();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAgencyData();
  }, [agencyUser, navigate, logoutAgency]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgency(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;
    
    setAgency(prev => ({ ...prev, [name]: files[0] }));
    
    if (name === "companyLogo" || name === "companyBanner") {
      const reader = new FileReader();
      reader.onload = () => {
        name === "companyLogo" 
          ? setPreviewLogo(reader.result)
          : setPreviewBanner(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    
    try {
      const formData = new FormData();
      
      // Add all text fields
      Object.entries(agency).forEach(([key, value]) => {
        if (value !== null && !["companyLogo", "companyBanner", "profilePdf"].includes(key)) {
          formData.append(key, value);
        }
      });
      
      // Handle file uploads
      if (agency.companyLogo instanceof File) {
        formData.append("companyLogo", agency.companyLogo);
      } else if (previewLogo && !agency.companyLogo) {
        formData.append("keepExistingLogo", "true");
      }
      
      if (agency.companyBanner instanceof File) {
        formData.append("companyBanner", agency.companyBanner);
      } else if (previewBanner && !agency.companyBanner) {
        formData.append("keepExistingBanner", "true");
      }
      
      if (agency.profilePdf instanceof File) {
        formData.append("profilePdf", agency.profilePdf);
      }

      const res = await api.put("/api/agency/update", formData);
      
      if (!res.data?.success) {
        throw new Error(res.data?.message || "Update failed");
      }
      
      alert("Profile updated successfully!");
      navigate("/agency/profile");
    } catch (err) {
      console.error("Update error:", err);
      setError(err.response?.data?.message || err.message);
      
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        logoutAgency();
        navigate("/login");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <FaSpinner className={styles.spinner} />
        <p>Loading agency data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Error</h2>
        <p>{error}</p>
        <div className={styles.errorButtons}>
          <button onClick={() => window.location.reload()}>Try Again</button>
          <button onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.editContainer}>
      <h1>Edit Agency Profile</h1>
      
      <form onSubmit={handleSubmit} className={styles.editForm}>
        <div className={styles.formSection}>
          <h2><FaUser /> Basic Information</h2>
          
          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={agency.companyName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Contact Person</label>
            <input
              type="text"
              name="contactName"
              value={agency.contactName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="companyPhone"
              value={agency.companyPhone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="userEmail"
              value={agency.userEmail}
              onChange={handleChange}
              disabled
            />
          </div>
        </div>
        
        <div className={styles.formSection}>
          <h2><FaMapMarkerAlt /> Location</h2>
          
          <div className={styles.formGroup}>
            <label>City</label>
            <input
              type="text"
              name="companyCity"
              value={agency.companyCity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>State</label>
            <input
              type="text"
              name="companyState"
              value={agency.companyState}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Pincode</label>
            <input
              type="text"
              name="companyPincode"
              value={agency.companyPincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className={styles.formSection}>
          <h2><FaBuilding /> Company Details</h2>
          
          <div className={styles.formGroup}>
            <label>Business Category</label>
            <input
              type="text"
              name="categoryType"
              value={agency.categoryType}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Total Staff</label>
            <input
              type="number"
              name="totalManpower"
              value={agency.totalManpower}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className={styles.formSection}>
          <h2>Upload Files</h2>
          
          <div className={styles.fileUploadGroup}>
            <label>Company Logo</label>
            <input
              type="file"
              name="companyLogo"
              onChange={handleFileChange}
              accept="image/*"
            />
            {previewLogo && (
              <div className={styles.previewContainer}>
                <img src={previewLogo} alt="Logo Preview" className={styles.previewImage} />
                <p className={styles.previewText}>Current logo</p>
              </div>
            )}
          </div>
          
          <div className={styles.fileUploadGroup}>
            <label>Company Banner</label>
            <input
              type="file"
              name="companyBanner"
              onChange={handleFileChange}
              accept="image/*"
            />
            {previewBanner && (
              <div className={styles.previewContainer}>
                <img src={previewBanner} alt="Banner Preview" className={styles.previewImage} />
                <p className={styles.previewText}>Current banner</p>
              </div>
            )}
          </div>
          
          <div className={styles.fileUploadGroup}>
            <label>Company Profile PDF</label>
            <input
              type="file"
              name="profilePdf"
              onChange={handleFileChange}
              accept=".pdf"
            />
          </div>
        </div>
        
        <div className={styles.formActions}>
          <button 
            type="button" 
            onClick={() => navigate("/agency/profile")}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className={styles.saveButton}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <FaSpinner className={styles.spinner} />
                Saving...
              </>
            ) : (
              <>
                <FaSave /> Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgencyEditPage;