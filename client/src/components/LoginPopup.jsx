// import React, { useState, useEffect } from 'react';
// import { FiX, FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';
// import Modal from 'react-modal';
// import { useNavigate } from 'react-router-dom';
// import AsyncSelect from "react-select/async";
// Modal.setAppElement('#root');

// // Admin email configuration
// const ADMIN_EMAILS = ['info@ciphershieldtech.com', 'admin@ciphershieldtech.com'];
// const ADMIN_REDIRECT = '/StatusDashboard';

// // Mock lender data
// // const MOCK_LENDERS = [
// //   { id: 1, name: "HDFC Bank", domain: "hdfcbank.com" },
// //   { id: 2, name: "ICICI Bank", domain: "icicibank.com" },
// //   { id: 3, name: "State Bank of India", domain: "sbi.co.in" },
// //   { id: 4, name: "Axis Bank", domain: "axisbank.com" },
// //   { id: 5, name: "Kotak Mahindra Bank", domain: "kotak.com" }
// // ];

// const loadOptions = async (inputValue, callback) => {
//   try {
//     const response = await axios.get(`${API_URL}/api/lenders/?search=${inputValue}`);
//     const lenders = response?.data?.data || [];

//     const options = lenders.map(lender => ({
//       label: lender.lenderName || 'Unknown Lender',
//       value: lender._id || 'other',
//       domain: lender.domain || 'other'
//     }));

//     if (!options.some(o => o.label === "Other")) {
//       options.unshift({ label: "Other", value: "other", domain: "other" });
//     }

//     callback(options);
//   } catch (error) {
//     callback([{ label: "Other", value: "other", domain: "other" }]);
//   }
// };

// // Business email validation function
// const isBusinessEmail = (email) => {
//   if (!email) return false;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) return false;
  
//   // Common free email domains to reject
//   const freeDomains = [
//     'gmail.com',
//     'yahoo.com',
//     'outlook.com',
//     'hotmail.com',
//     'aol.com',
//     'protonmail.com',
//     'icloud.com',
//     'mail.com',
//     'zoho.com',
//     'yandex.com'
//   ];
  
//   const domain = email.split('@')[1].toLowerCase();
//   return !freeDomains.includes(domain);
// };

// const LoginPopup = ({ isOpen, onClose, onLoginSuccess }) => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('lender');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpField, setShowOtpField] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [selectedLender, setSelectedLender] = useState(null);
//   const [lenderSearch, setLenderSearch] = useState('');
//   const [showLenderDropdown, setShowLenderDropdown] = useState(false);
//   // const [filteredLenders, setFilteredLenders] = useState(MOCK_LENDERS);
//   const [otpResendTimer, setOtpResendTimer] = useState(0);
//   const [isAdminEmail, setIsAdminEmail] = useState(false);
//   const [generatedOtp, setGeneratedOtp] = useState('');

//   useEffect(() => {
//     // Check if email is an admin email
//     setIsAdminEmail(ADMIN_EMAILS.includes(email.toLowerCase()));
//   }, [email]);

//   useEffect(() => {
//     // Check for guest signup data in localStorage when component mounts or opens
//     if (isOpen) {
//       const guestData = JSON.parse(localStorage.getItem('guestSignupData') || '{}');
      
//       if (guestData.email) {
//         setEmail(guestData.email);
//       }
//       if (guestData.name) {
//         setName(guestData.name);
//       }
      
//       // Clear the localStorage after reading
//       localStorage.removeItem('guestSignupData');
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     // OTP resend timer
//     let timer;
//     if (otpResendTimer > 0) {
//       timer = setTimeout(() => setOtpResendTimer(otpResendTimer - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [otpResendTimer]);

//   // useEffect(() => {
//   //   // Filter lenders based on search input
//   //   if (lenderSearch) {
//   //     const filtered = MOCK_LENDERS.filter(lender => 
//   //       lender.name.toLowerCase().includes(lenderSearch.toLowerCase())
//   //     );
//   //     setFilteredLenders(filtered);
//   //   } else {
//   //     setFilteredLenders(MOCK_LENDERS);
//   //   }
//   // }, [lenderSearch]);

//   // Generate a random 6-digit OTP
//   const generateOtp = () => {
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(otp);
//     return otp;
//   };

//   const handleAgencyLoginClick = () => {
//     onClose();
//     navigate('/Login_SignUp');
//   };

//   const handleGuestSignupClick = () => {
//     onClose();
//     navigate('/BusinessSignupModal', { 
//       state: { 
//         userType: 'guest',
//         prefilledEmail: email,
//         prefilledName: name 
//       }
//     });
//   };

//   const selectLender = (lender) => {
//     setSelectedLender(lender);
//     setLenderSearch(lender.name);
//     setShowLenderDropdown(false);
//   };

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
    
//     if (!email.includes('@')) {
//       setError('Please enter valid email');
//       return;
//     }

//     // Business email validation for guest login (skip for admin emails)
//     if (activeTab === 'guest' && !isBusinessEmail(email) && !isAdminEmail) {
//       setError('Please enter a valid business email address (personal emails like Gmail, Yahoo are not allowed)');
//       return;
//     }

//     if (!name) {
//       setError('Please enter your name');
//       return;
//     }

//     if (activeTab === 'lender' && !selectedLender) {
//       setError('Please select a lender');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       // Generate and display OTP
//       const otp = generateOtp();
      
//       // For demo purposes, we'll simulate OTP sending
//       console.log(`Sending OTP to ${email} for ${name}`);
//       console.log(`Generated OTP: ${otp}`);
      
//       // Simulate API call delay
//       setTimeout(() => {
//         setIsLoading(false);
//         setShowOtpField(true);
//         setOtpResendTimer(30); // 30 seconds resend timer
//         setError('');
        
//         // Show OTP in alert for demo purposes
//         alert(`OTP sent successfully!\nEmail: ${email}\nOTP: ${otp}\n\nFor demo purposes, this OTP is shown here. In production, it would be sent via email.`);
//       }, 1500);
      
//     } catch (err) {
//       setError('Failed to send OTP. Please try again.');
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = () => {
//     if (otpResendTimer > 0) return;
    
//     setIsLoading(true);
//     setError('');
    
//     // Generate new OTP
//     const newOtp = generateOtp();
    
//     // Simulate OTP resend
//     setTimeout(() => {
//       setIsLoading(false);
//       setOtpResendTimer(30);
//       setError('');
//       alert(`OTP has been resent!\nNew OTP: ${newOtp}\n\nFor demo purposes, this OTP is shown here.`);
//     }, 1000);
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();

//     if (otp.length !== 6) {
//       setError('Please enter the 6-digit OTP');
//       return;
//     }

//     // For demo purposes, accept the generated OTP or any OTP that starts with 1
//     if (otp !== generatedOtp && !otp.startsWith('1')) {
//       setError('Invalid OTP. Please try again or use any code starting with 1 (e.g., 123456)');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       console.log(`Verifying OTP: ${otp} for ${email}`);
      
//       // Simulate API verification delay
//       setTimeout(() => {
//         setIsLoading(false);
        
//         // Determine user type and redirect path
//         let userType = activeTab;
//         let redirectPath = '/BusDashboard';
        
//         // If it's an admin email, override the user type and redirect
//         if (isAdminEmail) {
//           userType = 'admin';
//           redirectPath = ADMIN_REDIRECT;
//         }
        
//         // Mock successful login
//         const userData = {
//           name: name,
//           email: email,
//           type: userType,
//           token: 'mock-token-' + Date.now(),
//           isGuest: activeTab === 'guest',
//           isAdmin: isAdminEmail,
//           lender: activeTab === 'lender' ? selectedLender?.name : null
//         };
        
//         onLoginSuccess(userData);
//         onClose();
        
//         // Redirect based on user type
//         if (activeTab === 'agency') {
//           navigate('/DashboardPage');
//         } else {
//           navigate(redirectPath);
//         }
//       }, 1500);
      
//     } catch (err) {
//       console.error('OTP verification error:', err);
//       setError('OTP verification failed. Please try again.');
//       setIsLoading(false);
//     }
//   };

//   const handleClose = () => {
//     setActiveTab('lender');
//     setShowOtpField(false);
//     setEmail('');
//     setName('');
//     setOtp('');
//     setError('');
//     setSelectedLender(null);
//     setLenderSearch('');
//     setShowLenderDropdown(false);
//     setOtpResendTimer(0);
//     setIsAdminEmail(false);
//     setGeneratedOtp('');
//     onClose();
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setShowOtpField(false);
//     setEmail('');
//     setName('');
//     setOtp('');
//     setError('');
//     setSelectedLender(null);
//     setLenderSearch('');
//     setShowLenderDropdown(false);
//     setOtpResendTimer(0);
//     setIsAdminEmail(false);
//     setGeneratedOtp('');
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={handleClose}
//       className="login-popup-modal"
//       overlayClassName="login-popup-overlay"
//     >
//       <div className="login-popup-content">
//         <button onClick={handleClose} className="close-button">
//           <FiX size={24} />
//         </button>
        
//         <div className="login-popup-container">
//           <div className="login-options">
//             <h2>Login to Suppcohort</h2>
//             <div className="login-tabs">
//               <button 
//                 className={`tab-button ${activeTab === 'agency' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('agency')}
//               >
//                 Agency Login
//               </button>
//               <button 
//                 className={`tab-button ${activeTab === 'lender' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('lender')}
//               >
//                 Lender Login
//               </button>
//               <button 
//                 className={`tab-button ${activeTab === 'guest' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('guest')}
//               >
//                 Guest Login
//               </button>
//             </div>

//             {error && <div className="error-message">{error}</div>}

//             <div className="login-form">
//               {activeTab === 'agency' && (
//                 <div className="agency-login-content">
//                   <p>Click below to login to your agency account</p>
//                   <button 
//                     className="login-submit-button"
//                     onClick={handleAgencyLoginClick}
//                   >
//                     Go to Agency Login <FiArrowRight style={{ marginLeft: '8px' }} />
//                   </button>
//                 </div>
//               )}

//               {(activeTab === 'lender' || activeTab === 'guest') && (
//                 <>
//                   {!showOtpField ? (
//                     <form onSubmit={handleSendOtp}>
//                       <div className="input-group">
//                         <label htmlFor="name">Full Name</label>
//                         <div className="input-with-icon">
//                           <FiUser className="input-icon" />
//                           <input
//                             type="text"
//                             id="name"
//                             placeholder="Enter your full name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                           />
//                         </div>
//                       </div>

//                       {activeTab === 'lender' && (
//                         <div className="input-group">
//                           <label htmlFor="lender">Search Lender</label>
//                           <div className="lender-search-container">
//                             <div className="input-with-icon">
//                         {/* <label htmlFor="lender">Search Lender</label> */}
//   <AsyncSelect
//     cacheOptions
//     loadOptions={loadOptions}
//     defaultValue={selectedLender}
//     onChange={setSelectedLender}
//     placeholder="Start typing lender name..."
//     isClearable
//   />
//                             </div>
//                             {showLenderDropdown && (
//                               <div className="lender-dropdown">
//                                 {filteredLenders.length > 0 ? (
//                                   filteredLenders.map((lender) => (
//                                     <div
//                                       key={lender.id}
//                                       className="lender-option"
//                                       onClick={() => selectLender(lender)}
//                                     >
//                                       {lender.name}
//                                     </div>
//                                   ))
//                                 ) : (
//                                   <div className="no-lenders">No lenders found</div>
//                                 )}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       )}

//                       <div className="input-group">
//                         <label htmlFor="email">Email Address</label>
//                         <div className="input-with-icon">
//                           <FiMail className="input-icon" />
//                           <input
//                             type="email"
//                             id="email"
//                             placeholder={activeTab === 'lender' ? "support@company.com" : "yourname@company.com"}
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                           />
//                         </div>
//                         {isAdminEmail && (
//                           <div className="admin-notice">
//                             <span className="admin-icon">⚡</span>
//                             <span>Admin account detected</span>
//                           </div>
//                         )}
//                         {activeTab === 'guest' && !isAdminEmail && (
//                           <p className="email-note">Only business email addresses are accepted</p>
//                         )}
//                       </div>

//                       <button 
//                         type="submit"
//                         className="login-submit-button"
//                         disabled={ isLoading || 
//   !email || 
//   !name || 
//   (activeTab === 'lender' && !isAdminEmail && !selectedLender)}
//                       >
//                         {isLoading ? 'Sending OTP...' : 'Send OTP'}
//                       </button>

//                       {activeTab === 'guest' && (
//                         <div className="guest-signup-option">
//                           <p className="or-divider">New to Suppcohort?</p>
//                           <button 
//                             type="button"
//                             className="guest-signup-button"
//                             onClick={handleGuestSignupClick}
//                           >
//                             Create New Guest Account
//                           </button>
//                         </div>
//                       )}
//                     </form>
//                   ) : (
//                     <form onSubmit={handleVerifyOtp}>
//                       <div className="input-group">
//                         <label htmlFor="otp">Verification Code</label>
//                         <div className="input-with-icon">
//                           <FiLock className="input-icon" />
//                           <input
//                             type="text"
//                             id="otp"
//                             placeholder="Enter 6-digit OTP"
//                             value={otp}
//                             onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                             maxLength="6"
//                             required
//                           />
//                         </div>
//                         <p className="otp-note">
//                           OTP sent to {email}
//                           {otpResendTimer > 0 ? (
//                             ` | Resend in ${otpResendTimer}s`
//                           ) : (
//                             <button 
//                               type="button" 
//                               className="resend-otp-btn"
//                               onClick={handleResendOtp}
//                               disabled={otpResendTimer > 0}
//                             >
//                               Resend OTP
//                             </button>
//                           )}
//                         </p>
//                         <p className="demo-note">For demo purposes, use the OTP shown in the alert or any code starting with 1</p>
//                         {isAdminEmail && (
//                           <div className="admin-notice">
//                             <span className="admin-icon">⚡</span>
//                             <span>You will be redirected to Admin Dashboard</span>
//                           </div>
//                         )}
//                       </div>
//                       <button 
//                         type="submit"
//                         className="login-submit-button"
//                         disabled={isLoading || otp.length !== 6}
//                       >
//                         {isLoading ? 'Verifying...' : `Login as ${isAdminEmail ? 'Admin' : (activeTab === 'lender' ? 'Lender' : 'Guest')}`}
//                       </button>
//                     </form>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="user-groups-info">
//             <h3>Who Uses Suppcohort?</h3>
//             <div className="user-group-card">
//               <h4>Lenders' Teams</h4>
//               <p>Recovery, collection, and legal professionals from Banks, NBFCs, ARCs, Microfinance, and Fintech.</p>
//             </div>
//             <div className="user-group-card">
//               <h4>Support Partners</h4>
//               <p>Agencies or entities offering debt collection, recovery, or legal services to lenders.</p>
//             </div>
//             <div className="user-group-card">
//               <h4>Admirers / Guests</h4>
//               <p>All Others not in above two categories - Experts, individuals, or companies exploring opportunities, learning, or seeking careers in the industry.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default LoginPopup; 
















// import React, { useState, useEffect } from 'react';
// import { FiX, FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';
// import Modal from 'react-modal';
// import { useNavigate } from 'react-router-dom';
// import AsyncSelect from "react-select/async";
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// Modal.setAppElement('#root');

// // Admin email configuration
// const ADMIN_EMAILS = ['info@ciphershieldtech.com', 'admin@ciphershieldtech.com'];
// const ADMIN_REDIRECT = '/StatusDashboard';

// // API configuration
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// const loadOptions = async (inputValue, callback) => {
//   try {
//     const response = await axios.get(`${API_URL}/api/lenders?search=${inputValue}`);
//     const lenders = response?.data?.data || [];

//     const options = lenders.map(l => ({
//       label: l.lenderName,
//       value: l._id,
//       domain: l.domain,
//       originalName: l.lenderName
//     }));

//     options.unshift({ label: "Other", value: "other", domain: "other" });
//     callback(options);
//   } catch (err) {
//     console.error(err);
//     callback([{ label: "Other", value: "other", domain: "other" }]);
//   }
// };

// const LoginPopup = ({ isOpen, onClose, onLoginSuccess }) => {
//   const navigate = useNavigate();
//   const { loginBusiness } = useAuth();
  
//   const [activeTab, setActiveTab] = useState('lender');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOtpField, setShowOtpField] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [selectedLender, setSelectedLender] = useState(null);
//   const [otpResendTimer, setOtpResendTimer] = useState(0);
//   const [isAdminEmail, setIsAdminEmail] = useState(false);
//   const [searchLoading, setSearchLoading] = useState(false);

//   useEffect(() => {
//     setIsAdminEmail(ADMIN_EMAILS.includes(email.toLowerCase()));
//   }, [email]);

//   useEffect(() => {
//     if (isOpen) {
//       const guestData = JSON.parse(localStorage.getItem('guestSignupData') || '{}');
      
//       if (guestData.email) {
//         setEmail(guestData.email);
//       }
//       if (guestData.name) {
//         setName(guestData.name);
//       }
      
//       localStorage.removeItem('guestSignupData');
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     let timer;
//     if (otpResendTimer > 0) {
//       timer = setTimeout(() => setOtpResendTimer(otpResendTimer - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [otpResendTimer]);

//   const handleAgencyLoginClick = () => {
//     onClose();
//     navigate('/Login_SignUp');
//   };

//   const handleGuestSignupClick = () => {
//     onClose();
//     navigate('/BusinessSignupModal', { 
//       state: { 
//         userType: 'guest',
//         prefilledEmail: email,
//         prefilledName: name 
//       }
//     });
//   };

// const handleSendOtp = async (e) => {
//   e.preventDefault();
//   if (!email || !name || (activeTab === 'lender' && !selectedLender)) return;

//   try {
//     const response = await axios.post(`${API_URL}/api/auth/send-otp`, {
//       email: email.trim(),
//       name,
//       userType: activeTab,
//       lenderId: selectedLender?.value,
//       lenderName: selectedLender?.label
//     });

//     if (response.data.success) {
//       setShowOtpField(true);
//       setOtpResendTimer(30);
//     } else {
//       setError(response.data.message);
//     }
//   } catch (err) {
//     setError(err.response?.data?.message || 'Network error');
//   }
// };

//   const handleResendOtp = async () => {
//     if (otpResendTimer > 0) return;
    
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await axios.post(`${API_URL}/api/auth/resend-otp`, {
//         email: email.trim()
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.data.success) {
//         setOtpResendTimer(30);
//         setError('');
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       setError('Failed to resend OTP. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();

//     if (otp.length !== 6) {
//       setError('Please enter the 6-digit OTP');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await axios.post(`${API_URL}/api/auth/verify-otp`, {
//         email: email.trim(),
//         otp,
//         userType: activeTab,
//         lenderName: selectedLender?.label
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.data.success) {
//         // Save user data with 12-hour expiration
//         const userData = {
//           email: response.data.user.email,
//           token: response.data.token,
//           isAdmin: response.data.user.isAdmin || false,
//           isGuest: response.data.user.isGuest || false,
//           name: response.data.user.name || name,
//           lender: response.data.user.lender || selectedLender?.label,
//           expiresAt: Date.now() + (12 * 60 * 60 * 1000)
//         };

//         loginBusiness(userData);
        
//         onLoginSuccess(userData);
        
//         handleClose();
        
//         // Redirect based on user type - ADMIN goes to StatusDashboard
//         if (response.data.user.isAdmin) {
//           navigate('/StatusDashboard');
//         } else if (response.data.user.isGuest) {
//           navigate('/BusDashboard');
//         } else {
//           navigate('/BusDashboard');
//         }
//       } else {
//         setError(response.data.message || 'OTP verification failed');
//       }
//     } catch (err) {
//       console.error('OTP verification error:', err);
//       if (err.response) {
//         if (err.response.status === 400) {
//           setError(err.response.data.message || 'Invalid OTP or expired');
//         } else {
//           setError(err.response.data.message || 'Something went wrong');
//         }
//       } else {
//         setError('Network error. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleClose = () => {
//     setActiveTab('lender');
//     setShowOtpField(false);
//     setEmail('');
//     setName('');
//     setOtp('');
//     setError('');
//     setSelectedLender(null);
//     setOtpResendTimer(0);
//     setIsAdminEmail(false);
//     onClose();
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setShowOtpField(false);
//     setEmail('');
//     setName('');
//     setOtp('');
//     setError('');
//     setSelectedLender(null);
//     setOtpResendTimer(0);
//     setIsAdminEmail(false);
//   };

//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       minHeight: '48px',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       '&:hover': {
//         borderColor: '#aaa'
//       }
//     }),
//     placeholder: (provided) => ({
//       ...provided,
//       color: '#999',
//     }),
//     menu: (provided) => ({
//       ...provided,
//       zIndex: 9999
//     })
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={handleClose}
//       className="login-popup-modal"
//       overlayClassName="login-popup-overlay"
//     >
//       <div className="login-popup-content">
//         <button onClick={handleClose} className="close-button">
//           <FiX size={24} />
//         </button>
        
//         <div className="login-popup-container">
//           <div className="login-options">
//             <h2>Login to Suppcohort</h2>
//             <div className="login-tabs">
//               <button 
//                 className={`tab-button ${activeTab === 'agency' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('agency')}
//               >
//                 Agency Login
//               </button>
//               <button 
//                 className={`tab-button ${activeTab === 'lender' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('lender')}
//               >
//                 Lender Login
//               </button>
//               <button 
//                 className={`tab-button ${activeTab === 'guest' ? 'active' : ''}`}
//                 onClick={() => handleTabChange('guest')}
//               >
//                 Guest Login
//               </button>
//             </div>

//             {error && <div className="error-message">{error}</div>}

//             <div className="login-form">
//               {activeTab === 'agency' && (
//                 <div className="agency-login-content">
//                   <p>Click below to login to your agency account</p>
//                   <button 
//                     className="login-submit-button"
//                     onClick={handleAgencyLoginClick}
//                   >
//                     Go to Agency Login <FiArrowRight style={{ marginLeft: '8px' }} />
//                   </button>
//                 </div>
//               )}

//               {(activeTab === 'lender' || activeTab === 'guest') && (
//                 <>
//                   {!showOtpField ? (
//                     <form onSubmit={handleSendOtp}>
//                       <div className="input-group">
//                         <label htmlFor="name">Full Name</label>
//                         <div className="input-with-icon">
//                           <FiUser className="input-icon" />
//                           <input
//                             type="text"
//                             id="name"
//                             placeholder="Enter your full name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                           />
//                         </div>
//                       </div>

//                       {activeTab === 'lender' && (
//                         <div className="input-group">
//                           <label htmlFor="lender-select">Search Lender</label>
//                           <div className="lender-select-container">
//                             <AsyncSelect
//                               id="lender-select"
//                               cacheOptions
//                               defaultOptions
//                               loadOptions={loadOptions}
//                               value={selectedLender}
//                               onChange={setSelectedLender}
//                               placeholder="Start typing lender name..."
//                               styles={customStyles}
//                               isLoading={searchLoading}
//                               loadingMessage={() => "Searching lenders..."}
//                               noOptionsMessage={({ inputValue }) => 
//                                 inputValue ? "No lenders found" : "Type to search lenders"
//                               }
//                               isClearable
//                             />
//                           </div>
//                         </div>
//                       )}

//                       <div className="input-group">
//                         <label htmlFor="email">Email Address</label>
//                         <div className="input-with-icon">
//                           <FiMail className="input-icon" />
//                           <input
//                             type="email"
//                             id="email"
//                             placeholder={activeTab === 'lender' ? "support@company.com" : "yourname@company.com"}
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                           />
//                         </div>
//                         {isAdminEmail && (
//                           <div className="admin-notice">
//                             <span className="admin-icon">⚡</span>
//                             <span>Admin account detected - You will be redirected to Admin Dashboard</span>
//                           </div>
//                         )}
//                       </div>

//                       <button 
//                         type="submit"
//                         className="login-submit-button"
//                         disabled={isLoading || !email || !name || (activeTab === 'lender' && !selectedLender)}
//                       >
//                         {isLoading ? 'Sending OTP...' : 'Send OTP'}
//                       </button>

//                       {activeTab === 'guest' && (
//                         <div className="guest-signup-option">
//                           <p className="or-divider">New to Suppcohort?</p>
//                           <button 
//                             type="button"
//                             className="guest-signup-button"
//                             onClick={handleGuestSignupClick}
//                           >
//                             Create New Guest Account
//                           </button>
//                         </div>
//                       )}
//                     </form>
//                   ) : (
//                     <form onSubmit={handleVerifyOtp}>
//                       <div className="input-group">
//                         <label htmlFor="otp">Verification Code</label>
//                         <div className="input-with-icon">
//                           <FiLock className="input-icon" />
//                           <input
//                             type="text"
//                             id="otp"
//                             placeholder="Enter 6-digit OTP"
//                             value={otp}
//                             onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
//                             maxLength="6"
//                             required
//                           />
//                         </div>
//                         <p className="otp-note">
//                           OTP sent to {email}
//                           {otpResendTimer > 0 ? (
//                             ` | Resend in ${otpResendTimer}s`
//                           ) : (
//                             <button 
//                               type="button" 
//                               className="resend-otp-btn"
//                               onClick={handleResendOtp}
//                               disabled={otpResendTimer > 0}
//                             >
//                               Resend OTP
//                             </button>
//                           )}
//                         </p>
//                         {isAdminEmail && (
//                           <div className="admin-notice">
//                             <span className="admin-icon">⚡</span>
//                             <span>You will be redirected to Admin Dashboard</span>
//                           </div>
//                         )}
//                       </div>
//                       <button 
//                         type="submit"
//                         className="login-submit-button"
//                         disabled={isLoading || otp.length !== 6}
//                       >
//                         {isLoading ? 'Verifying...' : `Login as ${isAdminEmail ? 'Admin' : (activeTab === 'lender' ? 'Lender' : 'Guest')}`}
//                       </button>
//                     </form>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="user-groups-info">
//             <h3>Who Uses Suppcohort?</h3>
//             <div className="user-group-card">
//               <h4>Lenders' Teams</h4>
//               <p>Recovery, collection, and legal professionals from Banks, NBFCs, ARCs, Microfinance, and Fintech.</p>
//             </div>
//             <div className="user-group-card">
//               <h4>Support Partners</h4>
//               <p>Agencies or entities offering debt collection, recovery, or legal services to lenders.</p>
//             </div>
//             <div className="user-group-card">
//               <h4>Admirers / Guests</h4>
//               <p>All Others not in above two categories - Experts, individuals, or companies exploring opportunities, learning, or seeking careers in the industry.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default LoginPopup;











// 26-08-25

import React, { useState, useEffect } from 'react';
import { FiX, FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import AsyncSelect from "react-select/async";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

Modal.setAppElement('#root');

// Admin email configuration
const ADMIN_EMAILS = ['info@ciphershieldtech.com', 'admin@ciphershieldtech.com'];
const ADMIN_REDIRECT = '/StatusDashboard';

// API configuration
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const loadOptions = async (inputValue, callback) => {
  try {
    const response = await axios.get(`${API_URL}/api/lenders?search=${inputValue}`);
    const lenders = response?.data?.data || [];
    
    const options = lenders.map(lender => ({
      label: lender.lenderName || 'Unknown Lender',
      value: lender._id || lender.lenderName || 'other',
      domain: lender.domain || 'other'
    }));

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
    callback([{ label: "Other", value: "other", domain: "other" }]);
  }
};

const LoginPopup = ({ isOpen, onClose, onLoginSuccess }) => {
  const navigate = useNavigate();
  const { loginBusiness } = useAuth();
  
  const [activeTab, setActiveTab] = useState('lender');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedLender, setSelectedLender] = useState(null);
  const [otpResendTimer, setOtpResendTimer] = useState(0);
  const [isAdminEmail, setIsAdminEmail] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  // ✅ Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsAdminEmail(ADMIN_EMAILS.includes(email.toLowerCase()));
  }, [email]);

  useEffect(() => {
    if (isOpen) {
      const guestData = JSON.parse(localStorage.getItem('guestSignupData') || '{}');
      if (guestData.email) setEmail(guestData.email);
      if (guestData.name) setName(guestData.name);
      localStorage.removeItem('guestSignupData');
    }
  }, [isOpen]);

  useEffect(() => {
    let timer;
    if (otpResendTimer > 0) {
      timer = setTimeout(() => setOtpResendTimer(otpResendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpResendTimer]);

  const handleAgencyLoginClick = () => {
    handleClose();
    navigate('/Login_SignUp');
  };

  const handleGuestSignupClick = () => {
    handleClose();
    navigate('/BusinessSignupModal', { 
      state: { 
        userType: 'guest',
        prefilledEmail: email,
        prefilledName: name 
      }
    });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    
    if (!email.includes('@')) {
      setError('Please enter valid email');
      return;
    }

    if (!name) {
      setError('Please enter your name');
      return;
    }

    if (activeTab === 'lender' && !selectedLender) {
      setError('Please select a lender');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/api/auth/send-otp`, {
        email: email.trim(),
        lenderName: selectedLender?.label,
        name: name,
        userType: activeTab
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });

      if (response.data.success) {
        setShowOtpField(true);
        setOtpResendTimer(30);
        if (response.data.isGuest) {
          setSelectedLender({ label: 'Other', value: 'other' });
        }
      } else {
        setError(response.data.message);
        
        if (response.data.message.includes('No matching lender') && selectedLender?.label === 'Other') {
          navigate('/BusinessSignupModal', { state: { prefilledEmail: email, prefilledName: name } });
        }
      }
    } catch (err) {
      let errorMsg = 'Network error';
      
      if (err.code === 'ECONNABORTED') {
        errorMsg = 'Request timeout. Please try again.';
      } else if (err.response) {
        errorMsg = err.response?.data?.message || 'Server error';
      }

      setError(errorMsg);
      
      if (errorMsg.includes('No matching lender') && selectedLender?.label === 'Other') {
        navigate('/BusinessSignupModal', { state: { prefilledEmail: email, prefilledName: name } });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (otpResendTimer > 0) return;
    
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/api/auth/resend-otp`, {
        email: email.trim()
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        setOtpResendTimer(30);
        setError('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Failed to resend OTP. Please try again.');
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
      const response = await axios.post(`${API_URL}/api/auth/verify-otp`, {
        email: email.trim(),
        otp,
        userType: activeTab,
        lenderName: selectedLender?.label
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        const userData = {
          email: response.data.user.email,
          token: response.data.token,
          isAdmin: response.data.user.isAdmin || false,
          isGuest: response.data.user.isGuest || false,
          name: response.data.user.name || name,
          lender: response.data.user.lender || selectedLender?.label,
          expiresAt: Date.now() + (12 * 60 * 60 * 1000)
        };

        loginBusiness(userData);
        onLoginSuccess(userData);
        handleClose();
        
        if (response.data.user.isAdmin) {
          navigate('/StatusDashboard');
        } else if (response.data.user.isGuest) {
          navigate('/BusDashboard');
        } else {
          navigate('/BusDashboard');
        }
      } else {
        setError(response.data.message || 'OTP verification failed');
      }
    } catch (err) {
      console.error('OTP verification error:', err);
      if (err.response) {
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

  const handleClose = () => {
    // ✅ Only close if explicitly called
    setActiveTab('lender');
    setShowOtpField(false);
    setEmail('');
    setName('');
    setOtp('');
    setError('');
    setSelectedLender(null);
    setOtpResendTimer(0);
    setIsAdminEmail(false);
    onClose(); // Parent component ko inform karein
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowOtpField(false);
    setEmail('');
    setName('');
    setOtp('');
    setError('');
    setSelectedLender(null);
    setOtpResendTimer(0);
    setIsAdminEmail(false);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '48px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      '&:hover': {
        borderColor: '#aaa'
      }
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999
    })
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={(e) => {
        // ✅ Only close if clicking on close button
        if (e && e.target.classList.contains('close-button')) {
          handleClose();
        }
      }}
      className="login-popup-modal"
      overlayClassName="login-popup-overlay"
      shouldCloseOnOverlayClick={false} 
      shouldCloseOnEsc={false} 
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        },
        content: {
          position: 'relative',
          padding: '0',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          maxWidth: '900px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto'
        }
      }}
    >
      <div className="login-popup-content">
        <button 
          onClick={handleClose} 
          className="close-button"
          style={{
            position: 'absolute',
            top: '5px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.24)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10000,
            fontSize: '20px',
            color: '#000000ff'
          }}
        >
          <FiX size={24} />
        </button>
        
        <div className="login-popup-container">
          <div className="login-options">
            <h2>Login to Suppcohort</h2>
            <div className="login-tabs">
              <button 
                className={`tab-button ${activeTab === 'agency' ? 'active' : ''}`}
                onClick={() => handleTabChange('agency')}
              >
                Agency Login
              </button>
              <button 
                className={`tab-button ${activeTab === 'lender' ? 'active' : ''}`}
                onClick={() => handleTabChange('lender')}
              >
                Lender Login
              </button>
              <button 
                className={`tab-button ${activeTab === 'guest' ? 'active' : ''}`}
                onClick={() => handleTabChange('guest')}
              >
                Guest Login
              </button>
            </div>

            {error && (
              <div className="error-message">
                {error}
                <button onClick={() => setError('')} style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                  ×
                </button>
              </div>
            )}

            <div className="login-form">
               {activeTab === 'agency' && (
                <div className="agency-login-content">
                  <p>Click below to login to your agency account</p>
                  <button 
                    className="login-submit-button"
                    onClick={handleAgencyLoginClick}
                  >
                    Go to Agency Login <FiArrowRight style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              )}

              {(activeTab === 'lender' || activeTab === 'guest') && (
                <>
                  {!showOtpField ? (
                    <form onSubmit={handleSendOtp}>
                      <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <div className="input-with-icon">
                          <FiUser className="input-icon" />
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {activeTab === 'lender' && (
                        <div className="input-group">
                          <label htmlFor="lender-select">Search Lender</label>
                          <div className="lender-select-container">
                            <AsyncSelect
                              id="lender-select"
                              cacheOptions
                              defaultOptions
                              loadOptions={loadOptions}
                              value={selectedLender}
                              onChange={setSelectedLender}
                              placeholder="Start typing lender name..."
                              styles={customStyles}
                              isLoading={searchLoading}
                              loadingMessage={() => "Searching lenders..."}
                              noOptionsMessage={({ inputValue }) => 
                                inputValue ? "No lenders found" : "Type to search lenders"
                              }
                              isClearable
                            />
                          </div>
                        </div>
                      )}

                      <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-with-icon">
                          <FiMail className="input-icon" />
                          <input
                            type="email"
                            id="email"
                            placeholder={activeTab === 'lender' ? "support@company.com" : "yourname@company.com"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        {isAdminEmail && (
                          <div className="admin-notice">
                            <span className="admin-icon">⚡</span>
                            <span>Admin account detected - You will be redirected to Admin Dashboard</span>
                          </div>
                        )}
                      </div>

                      <button 
                        type="submit"
                        className="login-submit-button"
                        disabled={isLoading || !email || !name || (activeTab === 'lender' && !selectedLender)}
                      >
                        {isLoading ? 'Sending OTP...' : 'Send OTP'}
                      </button>

                      {activeTab === 'guest' && (
                        <div className="guest-signup-option">
                          <p className="or-divider">New to Suppcohort?</p>
                          <button 
                            type="button"
                            className="guest-signup-button"
                            onClick={handleGuestSignupClick}
                          >
                            Create New Guest Account
                          </button>
                        </div>
                      )}
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOtp}>
                      <div className="input-group">
                        <label htmlFor="otp">Verification Code</label>
                        <div className="input-with-icon">
                          <FiLock className="input-icon" />
                          <input
                            type="text"
                            id="otp"
                            placeholder="Enter 6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            maxLength="6"
                            required
                          />
                        </div>
                        <p className="otp-note">
                          OTP sent to {email}
                          {otpResendTimer > 0 ? (
                            ` | Resend in ${otpResendTimer}s`
                          ) : (
                            <button 
                              type="button" 
                              className="resend-otp-btn"
                              onClick={handleResendOtp}
                              disabled={otpResendTimer > 0}
                            >
                              Resend OTP
                            </button>
                          )}
                        </p>
                        {isAdminEmail && (
                          <div className="admin-notice">
                            <span className="admin-icon">⚡</span>
                            <span>You will be redirected to Admin Dashboard</span>
                          </div>
                        )}
                      </div>
                      <button 
                        type="submit"
                        className="login-submit-button"
                        disabled={isLoading || otp.length !== 6}
                      >
                        {isLoading ? 'Verifying...' : `Login as ${isAdminEmail ? 'Admin' : (activeTab === 'lender' ? 'Lender' : 'Guest')}`}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="user-groups-info">
            <h3>Who Uses Suppcohort?</h3>
            <div className="user-group-card">
              <h4>Lenders' Teams</h4>
              <p>Recovery, collection, and legal professionals from Banks, NBFCs, ARCs, Microfinance, and Fintech.</p>
            </div>
            <div className="user-group-card">
              <h4>Support Partners</h4>
              <p>Agencies or entities offering debt collection, recovery, or legal services to lenders.</p>
            </div>
            <div className="user-group-card">
              <h4>Admirers / Guests</h4>
              <p>All Others not in above two categories - Experts, individuals, or companies exploring opportunities, learning, or seeking careers in the industry.</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginPopup;