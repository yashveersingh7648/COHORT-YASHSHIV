
// AgencyProfilePage.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useAuth } from '../../context/AuthContext';
import {
  FaUser, FaPhone, FaMapMarkerAlt, FaBuilding, FaFilePdf,
  FaEnvelope, FaCity, FaIdCard, FaUsers, FaShareAlt,
  FaEdit, FaTrash, FaCopy, FaWhatsapp,
  FaLinkedin, FaTwitter, FaEnvelopeOpen, FaYoutube
} from "react-icons/fa";
import styles from "./AgencyProfilePage.module.css";

// const BASE = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "https://supcohort-backend.onrender.com";

const AgencyProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { agencyUser, logoutAgency } = useAuth();

  // Create axios instance with interceptors
  const api = axios.create({
    baseURL: API_URL
  });

  // Set up request interceptor
  api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (agencyUser?.email) {
      config.headers["X-User-Email"] = agencyUser.email;
    }
    return config;
  });

  // Get email from auth context or token
  let email = agencyUser?.email;
  if (!email) {
    email = location.state?.email;
    if (!email) {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          email = decoded.email;
        }
      } catch (err) {
        console.error("Token decode failed:", err);
      }
    }
  }

  const [agency, setAgency] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const profileUrl = `${window.location.origin}/agency/profile`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowShareOptions(false);
    });
  };

  const toggleShareOptions = () => setShowShareOptions(prev => !prev);

  const share = (url) => {
    window.open(url, "_blank");
    setShowShareOptions(false);
  };

  const shareOnWhatsApp = () =>
    share(`https://wa.me/?text=${encodeURIComponent("Check out this agency profile: " + profileUrl)}`);

  const shareOnLinkedIn = () =>
    share(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`);

  const shareOnTwitter = () =>
    share(`https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out this agency profile:")}&url=${encodeURIComponent(profileUrl)}`);

  const shareOnEmail = () =>
    share(`mailto:?subject=${encodeURIComponent("Agency Profile")}&body=${encodeURIComponent(`Check out this agency profile: ${profileUrl}`)}`);

  const shareOnYouTube = () =>
    share(`https://www.youtube.com/results?search_query=${encodeURIComponent(`${agency?.companyName} profile`)}`);

  const handleEdit = () => {
    navigate("/agency/edit", { state: { email } });
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to permanently delete your agency profile? This action cannot be undone.")) return;

    try {
      await api.delete("/api/agency");
      
      // Clear all auth-related data
      localStorage.removeItem("token");
      localStorage.removeItem("authToken");
      localStorage.removeItem("agencyUser");
      
      logoutAgency();
      
      alert("Agency profile deleted successfully.");
      navigate("/login");
    } catch (err) {
      console.error("Delete error:", err);
      
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        logoutAgency();
        navigate("/login");
      } else {
        alert(err.response?.data?.message || "Failed to delete profile. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (!email) {
      setError("No email provided.");
      setLoading(false);
      return;
    }

    const fetchAgency = async () => {
      try {
        const res = await api.post("/api/agency/dashboard/by-email", { email });
        const data = res.data.data;

        setAgency({
          ...data,
          logoUrl: data.companyLogo ? `${API_URL}/uploads/${data.companyLogo}` : null,
          bannerUrl: data.companyBanner ? `${API_URL}/uploads/${data.companyBanner}` : null,
          pdfUrl: data.profilePdf ? `${API_URL}/uploads/${data.profilePdf}` : null,
        });
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to load agency profile.");
        
        if (err.response?.status === 401) {
          logoutAgency();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAgency();
  }, [email, navigate, logoutAgency]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!agency) return <div className={styles.notFound}>No agency data found.</div>;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        {agency.bannerUrl && <img src={agency.bannerUrl} alt="Banner" className={styles.bannerImage} />}
        <div className={styles.headerContent}>
          {agency.logoUrl && <img src={agency.logoUrl} alt="Logo" className={styles.logoImage} />}
          <h1>{agency.companyName}</h1>
          <div className={styles.actionButtons} style={{ position: "relative" }}>
            <button onClick={toggleShareOptions} className={styles.shareBtn}><FaShareAlt /></button>
            <button onClick={handleEdit} className={styles.editBtn}><FaEdit /> Edit</button>
            <button onClick={handleDelete} className={styles.deleteBtn}><FaTrash /> Delete</button>

            {showShareOptions && (
              <div className={styles.shareDropdown}>
                <button onClick={copyToClipboard}><FaCopy /> {copied ? "Copied!" : "Copy Link"}</button>
                <button onClick={shareOnWhatsApp}><FaWhatsapp /> WhatsApp</button>
                <button onClick={shareOnLinkedIn}><FaLinkedin /> LinkedIn</button>
                <button onClick={shareOnTwitter}><FaTwitter /> Twitter</button>
                <button onClick={shareOnEmail}><FaEnvelopeOpen /> Email</button>
                <button onClick={shareOnYouTube}><FaYoutube /> YouTube</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.infoCard}>
            <h2><FaUser /> Contact Info</h2>
            <div className={styles.infoItem}><FaUser /> {agency.contactName || "N/A"}</div>
            <div className={styles.infoItem}><FaPhone /> {agency.companyPhone || "N/A"}</div>
            <div className={styles.infoItem}><FaEnvelope /> {agency.userEmail || "N/A"}</div>
          </div>
          <div className={styles.infoCard}>
            <h2><FaMapMarkerAlt /> Location</h2>
            <div className={styles.infoItem}><FaCity /> {agency.companyCity || "N/A"}</div>
            <div className={styles.infoItem}><FaMapMarkerAlt /> {agency.companyState || "N/A"}</div>
            <div className={styles.infoItem}><FaIdCard /> {agency.companyPincode || "N/A"}</div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.infoCard}>
            <h2><FaBuilding /> Company Info</h2>
            <div className={styles.infoItem}><FaBuilding /> {agency.categoryType || "N/A"}</div>
            <div className={styles.infoItem}><FaUsers /> Total Staff: {agency.totalManpower || "N/A"}</div>
          </div>

          {agency.pdfUrl && (
            <div className={styles.pdfCard}>
              <h2><FaFilePdf /> Company Profile</h2>
              <a href={agency.pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.pdfButton}>
                <FaFilePdf /> View PDF Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgencyProfilePage;
