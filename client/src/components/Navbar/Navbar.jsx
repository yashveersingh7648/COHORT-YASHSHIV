
// 28-07-25
import React, { useState, useEffect } from 'react';
import { FiSearch, FiMenu, FiX, FiUser, FiChevronDown, FiMapPin, FiMail } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext';
import jwtDecode from 'jwt-decode'; 
import AsyncSelect from 'react-select/async';
Modal.setAppElement('#root');

// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const Navbar = ({ onSearch }) => {
   const [searchLoading, setSearchLoading] = useState(false); 
  const location = useLocation();
  const {
    user,
    isAgencyLoggedIn,
    isBusinessLoggedIn,
    loginBusiness,
    logoutAgency,
    logoutBusiness,
    loading: authLoading
  } = useAuth();

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [selectedLocation] = useState('All India');
  const [selectedLender, setSelectedLender] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle redirect from guest signup
  useEffect(() => {
    if (location.state?.showBusinessLogin) {
      setEmail(location.state.prefilledEmail || '');
      setSelectedLender({ label: location.state.lender || 'Other', value: 'other' });
      setIsLoginOpen(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setShowMobileSearch(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

// const loadOptions = async (inputValue, callback) => {
//     setSearchLoading(true); // Show loading when search starts
    
//     try {
//       const response = await axios.get(`/api/lenders?search=${inputValue}`);
      
//       const options = Array.isArray(response.data) 
//         ? response.data.map(lender => ({
//             label: lender.lenderName,
//             value: lender._id,
//             domain: lender.domain
//           }))
//         : [];

//       // Always include "Other" option
//       if (!options.some(o => o.label === "Other")) {
//         options.unshift({ 
//           label: "Other", 
//           value: "other", 
//           domain: "other" 
//         });
//       }

//       callback(options);
//     } catch (err) {
//       console.error("Lenders load error:", err);
//       // Return default "Other" option on error
//       callback([{ label: "Other", value: "other", domain: "other" }]);
//     } finally {
//       setSearchLoading(false); 
//     }
//   };


const loadOptions = async (inputValue, callback) => {
  setSearchLoading(true);
  
  try {
    // Correct API endpoint with /api prefix
    const response = await axios.get(`${API_URL}/api/lenders/?search=${inputValue}`);
    
    // Secure data handling
    const lenders = response?.data?.data || [];
    
    const options = lenders.map(lender => ({
      label: lender.lenderName || 'Unknown Lender',
      value: lender._id || 'other',
      domain: lender.domain || 'other'
    }));

    // Add default "Other" option
    if (!options.some(o => o.label === "Other")) {
      options.unshift({
        label: "Other",
        value: "other",
        domain: "other"
      });
    }

    callback(options);
  } catch (error) {
    console.error("Failed to load lenders:", error);
    // Return default options on error
    callback([{ label: "Other", value: "other", domain: "other" }]);
  } finally {
    setSearchLoading(false);
  }
};

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setShowOtpField(false);
    setEmail('');
    setOtp('');
    setError('');
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

const handleSendOtp = async (e) => {
  e.preventDefault();
  
  if (!email.includes('@')) {
    setError('Please enter valid email');
    return;
  }

  setIsLoading(true);
  setError('');

  try {
    // Use full API URL with /api prefix
    const response = await axios.post(`${API_URL}/api/send-otp`, {
      email: email.trim(),
      lenderName: selectedLender?.label
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 second timeout
    });

    if (response.data.success) {
      setShowOtpField(true);
      if (response.data.isGuest) {
        setSelectedLender({ label: 'Other', value: 'other' });
      }
    } else {
      setError(response.data.message);
    }
  } catch (err) {
    let errorMsg = 'Network error';
    
    if (err.code === 'ECONNABORTED') {
      errorMsg = 'Request timeout. Please try again.';
    } else if (err.response) {
      errorMsg = err.response?.data?.message || 'Server error';
    }

    setError(errorMsg);
    
    // Auto-redirect to signup if guest not found
    if (errorMsg.includes('No matching lender') && selectedLender?.label === 'Other') {
      navigate('/BusinessSignupModal', { state: { prefilledEmail: email } });
    }
  } finally {
    setIsLoading(false);
  }
};

const handleVerifyOtp = async (e) => {
  e.preventDefault();

  if (otp.length !== 6) {
    setError('Please enter the 6-digit OTP');
    return;
  }

  setIsLoading(true);
  setError('');

  try {
    const response = await axios.post(`${API_URL}/api/verify-otp`, {
      email: email.trim(),
      otp
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.success) {
      // Handle successful verification
     loginBusiness({
      email: response.data.user.email,
      token: response.data.token, // Yeh line zaroori hai
      isAdmin: response.data.user.isAdmin || false,
      isGuest: response.data.user.isGuest || false
    });
      
      closeLoginModal();
      
      // Redirect based on user type
      if (response.data.user.isAdmin) {
        navigate('/StatusDashboard');
      } else if (response.data.user.isGuest) {
        navigate('/GuestDashboard');
      } else {
        navigate('/BusDashboard');
      }
    } else {
      setError(response.data.message || 'OTP verification failed');
    }
  } catch (err) {
    console.error('OTP verification error:', err);
    if (err.response) {
      // Handle 400 Bad Request specifically
      if (err.response.status === 400) {
        setError(err.response.data.message || 'Invalid OTP or expired');
      } else {
        setError(err.response.data.message || 'Something went wrong');
      }
    } else {
      setError('Network error. Please try again.');
    }
  } finally {
    setIsLoading(false);
  }
};



  if (authLoading) {
    return <div className={styles.loadingBar}>Loading...</div>;
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTopRow}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo}>
              <img src="/uploads/Cohortlogo.jpeg" alt="Profile" width={32} height={32} className={styles.logoImage} />
            </Link>
          </div>
          <div className={styles.mobileControls}>
            <button onClick={toggleMobileSearch} className={styles.mobileSearchBtn}>
              <FiSearch size={24} />
            </button>
            <button onClick={toggleMobileMenu} className={styles.mobileMenuBtn}>
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <div className={styles.desktopSearchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <button type="button" className={styles.locationBtn}>
              <FiMapPin className={styles.locationIcon} size={16} />
              <span className={styles.locationText}>{selectedLocation}</span>
            </button>
            <input
              type="text"
              placeholder="Search for products..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchBtn}>
              <FiSearch size={18} />
            </button>
          </form>
        </div>

        {showMobileSearch && (
          <div className={styles.mobileSearchContainer}>
            <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
              <input
                type="text"
                placeholder="Search for products..."
                className={styles.mobileSearchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className={styles.mobileSearchBtn}>
                <FiSearch size={18} />
              </button>
            </form>
          </div>
        )}

        <div className={styles.desktopNav}>
          <NavBar
            styles={styles}
            openLoginModal={openLoginModal}
            isAgencyLoggedIn={isAgencyLoggedIn}
            isBusinessLoggedIn={isBusinessLoggedIn}
            user={user}
            logoutAgency={logoutAgency}
            logoutBusiness={logoutBusiness}
          />
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileNavContainer}>
            <div className={styles.mobileNavContent}>
              <NavBar
                isMobile
                styles={styles}
                openLoginModal={openLoginModal}
                isAgencyLoggedIn={isAgencyLoggedIn}
                isBusinessLoggedIn={isBusinessLoggedIn}
                user={user}
                logoutAgency={logoutAgency}
                logoutBusiness={logoutBusiness}
              />
            </div>
          </div>
        )}

        <Modal
          isOpen={isLoginOpen}
          onRequestClose={closeLoginModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
          closeTimeoutMS={200}
        >
          <div className={styles.modalContent}>
            <button onClick={closeLoginModal} className={styles.closeButton}>
              <FiX size={24} />
            </button>
            <div className={styles.modalHeader}>
              <FiMail size={32} className={styles.emailIcon} />
              <h2>Lender Login</h2>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            {!showOtpField ? (
              <form onSubmit={handleSendOtp} className={styles.emailForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="lender">Search Lender</label>
                  <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultValue={selectedLender}
                onChange={setSelectedLender}
                placeholder={searchLoading ? "Searching lenders..." : "Start typing lender name..."}
                isLoading={searchLoading} 
                loadingMessage={() => "Searching lenders..."}
                noOptionsMessage={({ inputValue }) => 
                  inputValue ? "No lenders found" : "Type to search lenders"
                }
              />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Business Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="support@company.com or info@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading || !email || !selectedLender}
                >
                  {isLoading ? 'Sending...' : 'Send OTP'}
                </button>
                <div className={styles.sign}>
<span>please click to sign up page  <a href="/BusinessSignupModal" className={styles.anchor}>Sign Up</a></span>
             

                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className={styles.otpForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="otp">Verification Code</label>
                  <input
                    type="text"
                    id="otp"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    maxLength="6"
                    required
                  />
                  <p className={styles.otpNote}>OTP sent to {email}</p>
                </div>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </form>
            )}
          </div>
        </Modal>
      </div>
    </header>
  );
};

const NavBar = ({ 
  isMobile = false, 
  styles, 
  openLoginModal,
  isAgencyLoggedIn,
  isBusinessLoggedIn,
  user,
  logoutAgency,
  logoutBusiness
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
const isAdminUser = isBusinessLoggedIn && user?.isAdmin;
  useEffect(() => {
    if (isAgencyLoggedIn || isBusinessLoggedIn) {
      setShowDropdown(false);
    }
  }, [isAgencyLoggedIn, isBusinessLoggedIn]);

  const handleAgencyProfileClick = () => {
    navigate("/agency/profile");
  };

  return (
    <nav className={`${styles.nav} ${isMobile ? styles.mobileNav : ''}`}>
      <ul className={`${styles.navList} ${isMobile ? styles.mobileNavList : ''}`}>
        <li className={styles.navItem}>
          <Link to="/Home" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>Contact Us</Link>
        </li>
    
        {!isBusinessLoggedIn && (
          isAgencyLoggedIn ? (
            <>
              <li className={styles.navItem}>
                <Link to="/DashboardPage" className={styles.navLink}>Agency</Link>
              </li>
               <li className={styles.navItem}>
                <Link to="/DashboardTabs" className={styles.navLink}>CreateAgency</Link>
              </li>
              {/* <li className={styles.navItem}>
                <Link to="/BusDashboard" className={styles.navLink}>Business</Link>
              </li> */}
              <li className={`${styles.accountItem} ${isMobile ? styles.mobileAccountItem : ''}`}>
                <div className={styles.accountContainer}>
                  {user?.image ? (
                    <img src={user.image} alt="Profile" width={32} height={32} className={styles.accountImage} />
                  ) : (
                    <FiUser className={styles.accountIcon} size={20} />
                  )}
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)} 
                    className={styles.accountBtn}
                  >
                    <span>Account</span>
                    <FiChevronDown className={`${styles.dropdownIcon} ${showDropdown ? styles.open : ''}`} size={18} />
                  </button>
                </div>
                {showDropdown && (
                  <div className={`${styles.dropdownMenu} ${isMobile ? styles.mobileDropdown : ''}`}>
                    <button 
                      onClick={handleAgencyProfileClick}
                      className={styles.dropdownItem}
                    >
                      Agency Profile
                    </button>
                    <button
                      onClick={() => {
                        logoutAgency();
                        navigate('/');
                      }}
                      className={`${styles.dropdownItem} ${styles.logout}`}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <li className={styles.authItem}>
              <Link to="/Login_SignUp" className={`${styles.authLink} ${styles.login}`}>
                Agency Login
              </Link>
            </li>
          )
        )}

        {!isAgencyLoggedIn && (
          isBusinessLoggedIn ? (
            <>
            <li className={styles.navItem}>
    <Link 
      to={isAdminUser ? "/StatusDashboard" : "/BusDashboard"} 
      className={styles.navLink}
    >
      {isAdminUser ? "Admin_Dashboard" : "Business"}
    </Link>
  </li>
            <li className={styles.authItem}>
              <button
                onClick={() => {
                  logoutBusiness();
                  navigate('/');
                }}
                className={`${styles.authLink} ${styles.login}`}
              >
                Logout
              </button>
            </li>
            </>
          ) : (
            <>
           
            <li className={styles.authItem}>
              <button 
                onClick={openLoginModal} 
                className={`${styles.authLink} ${styles.login}`}
              >
               Lender Login
              </button>
            </li>
            </>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;