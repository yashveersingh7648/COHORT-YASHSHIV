
import { useState } from 'react';
import { FiSearch, FiMenu, FiX, FiUser, FiChevronDown, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import styles from './SignIn.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Navbar = ({ onSearch }) => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('All India');
  
  // Login Modal States
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setShowMobileSearch(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setShowOtpField(false);
    setPhoneNumber('');
    setOtp('');
    setError('');
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (phoneNumber.length === 10) {
        console.log(`OTP sent to +91${phoneNumber}`);
        setShowOtpField(true);
        setError('');
      } else {
        setError('Please enter a valid 10-digit phone number');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (otp.length === 6) {
        // Create user object for mobile login
        const mobileUser = {
          id: 'mobile-user-' + Math.random().toString(36).substr(2, 9),
          phone: `+91${phoneNumber}`,
          name: 'Mobile User',
          isMobileLogin: true // Flag to identify mobile login
        };
        
        login(mobileUser); // Update global auth state
        closeLoginModal();
        navigate('/BusDashboard');
      } else {
        setError('Please enter a 6-digit OTP');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Top Row - Logo and Mobile Controls */}
        <div className={styles.headerTopRow}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo}>COHORT<b>.</b></Link>
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

        {/* Search Bar - Desktop */}
        <div className={styles.desktopSearchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <button type="button" className={styles.locationBtn}>
              <FiMapPin className={styles.locationIcon} size={16} />
              <span className={styles.locationText}>{selectedLocation}</span>
            </button>
            <input
              type='text'
              placeholder='Search for products...'
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchBtn}>
              <FiSearch size={18} />
            </button>
          </form>
        </div>

        {/* Search Bar - Mobile */}
        {showMobileSearch && (
          <div className={styles.mobileSearchContainer}>
            <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
              <input
                type='text'
                placeholder='Search for products...'
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

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <NavBar 
            user={user} 
            logout={logout} 
            styles={styles} 
            openLoginModal={openLoginModal} 
          />
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={styles.mobileNavContainer}>
            <div className={styles.mobileNavContent}>
              <NavBar 
                isMobile 
                user={user} 
                logout={logout} 
                styles={styles} 
                openLoginModal={openLoginModal} 
              />
            </div>
          </div>
        )}

        {/* Login Modal */}
        <Modal
          isOpen={isLoginOpen}
          onRequestClose={closeLoginModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div className={styles.modalContent}>
            <button onClick={closeLoginModal} className={styles.closeButton}>
              <FiX size={24} />
            </button>
            
            <div className={styles.modalHeader}>
              <FiPhone size={32} className={styles.phoneIcon} />
              <h2>Phone Login</h2>
              <p>Enter any 10-digit number and 6-digit OTP for Login</p>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            {!showOtpField ? (
              <form onSubmit={handleSendOtp} className={styles.phoneForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Mobile Number</label>
                  <div className={styles.phoneInput}>
                    <span className={styles.countryCode}>+91</span>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter 10-digit number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      maxLength="10"
                      required
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isLoading || phoneNumber.length !== 10}
                >
                  {isLoading ? 'Sending...' : 'Send OTP'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className={styles.otpForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="otp">Verification Code</label>
                  <input
                    type="text"
                    id="otp"
                    placeholder="Enter any 6-digit number"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    maxLength="6"
                    required
                  />
                  <p className={styles.otpNote}>Test OTP sent to +91{phoneNumber}</p>
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

const NavBar = ({ isMobile = false, user, logout, styles, openLoginModal }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleRoute = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <nav className={`${styles.nav} ${isMobile ? styles.mobileNav : ''}`}>
      <ul className={`${styles.navList} ${isMobile ? styles.mobileNavList : ''}`}>
        <li className={styles.navItem}><Link to="/Home" className={styles.navLink}>Home</Link></li>
        <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact Us</Link></li>

        {user ? (
          <>
            {/* Show these only if user logged in via Agency Login */}
            {!user.isMobileLogin && (
              <li className={styles.navItem}>
                <Link to="/DashboardPage" className={styles.navLink}>Agency</Link>
              </li>
            )}
            
            <li className={styles.navItem}>
              <Link to="/BusDashboard" className={styles.navLink}>Business</Link>
            </li>

            <li className={`${styles.accountItem} ${isMobile ? styles.mobileAccountItem : ''}`}>
              <div className={styles.accountContainer}>
                <FiUser className={styles.accountIcon} size={20} />
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
                  {/* Show Agency Profile only for Agency login */}
                  {!user.isMobileLogin && (
                    <button 
                      onClick={() => handleRoute('/DashboardTabs')}
                      className={styles.dropdownItem}
                    >
                      Agency Profile
                    </button>
                  )}
                  <button 
                    onClick={() => {
                      logout();
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
          <>
            <li className={styles.authItem}>
              <Link to="/Login_SignUp" className={`${styles.authLink} ${styles.login}`}>
                Agency Login
              </Link>
            </li>
            
            <li className={styles.authItem}>
              <button 
                onClick={openLoginModal}
                className={`${styles.authLink} ${styles.login}`}
              >
                Login
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;