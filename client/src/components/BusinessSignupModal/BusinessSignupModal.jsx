// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase } from 'react-icons/fi';
// import styles from './BusinessSignUpModal.module.css';

// const EXPERTISE_OPTIONS = [
//   'IT Services',
//   'Healthcare',
//   'Finance',
//   'Education',
//   'Manufacturing',
//   'Retail',
//   'Hospitality',
//   'Construction',
//   'Real Estate',
//   'Consulting',
//   'Marketing',
//   'Legal',
//   'Engineering',
//   'Design',
//   'Transportation'
// ];

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
//     'protonmail.com'
//   ];
  
//   const domain = email.split('@')[1];
//   return !freeDomains.includes(domain.toLowerCase());
// };
// // const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// const GuestSignUpPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobile: '',
//     state: '',
//     city: '',
//     pinCode: '',
//     expertise: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [filteredExpertise, setFilteredExpertise] = useState([]);
//   const [showExpertiseDropdown, setShowExpertiseDropdown] = useState(false);

//   useEffect(() => {
//     setFilteredExpertise(EXPERTISE_OPTIONS);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleExpertiseChange = (e) => {
//     const value = e.target.value;
//     setFormData(prev => ({
//       ...prev,
//       expertise: value
//     }));
    
//     if (value) {
//       setFilteredExpertise(
//         EXPERTISE_OPTIONS.filter(opt => 
//           opt.toLowerCase().includes(value.toLowerCase())
//       ));
//     } else {
//       setFilteredExpertise(EXPERTISE_OPTIONS);
//     }
//     setShowExpertiseDropdown(true);
//   };

//   const selectExpertise = (expertise) => {
//     setFormData(prev => ({
//       ...prev,
//       expertise
//     }));
//     setShowExpertiseDropdown(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setSuccess('');

//     // Validation
//     if (!isBusinessEmail(formData.email)) {
//       setError('Please enter a valid business email address');
//       setIsLoading(false);
//       return;
//     }

//     if (formData.mobile.length !== 10) {
//       setError('Please enter a valid 10-digit mobile number');
//       setIsLoading(false);
//       return;
//     }

//     if (!formData.expertise) {
//       setError('Please select your expertise');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/api/guest/signup`, formData);
      
//       if (response.data.success) {
//         setSuccess('Signup successful! Redirecting to login...');
//         setTimeout(() => {
//           navigate('/', { 
//             state: { 
//               showBusinessLogin: true,
//               prefilledEmail: formData.email,
//               isGuest: true
//             }
//           });
//         }, 2000);
//       } else {
//         setError(response.data.message || 'Signup failed. Please try again.');
//       }
//     } catch (err) {
//       if (err.response?.status === 409) {
//         setError('This email or mobile number is already registered');
//       } else {
//         setError(err.response?.data?.message || 'Something went wrong. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h2 className={styles.title}>Guest Sign Up</h2>
//         <p className={styles.subtitle}>Create your business account to get started</p>

//         {error && <div className={styles.error}>{error}</div>}
//         {success && <div className={styles.success}>{success}</div>}

//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.formRow}>
//             <div className={styles.inputGroup}>
//               <label htmlFor="firstName" className={styles.label}>
//                 <FiUser className={styles.icon} /> First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 className={styles.input}
//                 placeholder="Enter your first name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className={styles.inputGroup}>
//               <label htmlFor="lastName" className={styles.label}>Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 className={styles.input}
//                 placeholder="Enter your last name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="email" className={styles.label}>
//               <FiMail className={styles.icon} /> Business Email ID
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className={styles.input}
//               placeholder="yourname@company.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <p className={styles.note}>Only business email addresses are accepted</p>
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="mobile" className={styles.label}>
//               <FiPhone className={styles.icon} /> Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               className={styles.input}
//               placeholder="Enter 10-digit mobile number"
//               value={formData.mobile}
//               onChange={handleChange}
//               maxLength="10"
//               required
//             />
//           </div>

//           <div className={styles.formRow}>
//             <div className={styles.inputGroup}>
//               <label htmlFor="state" className={styles.label}>State</label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 className={styles.input}
//                 placeholder="Enter your state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className={styles.inputGroup}>
//               <label htmlFor="city" className={styles.label}>City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 className={styles.input}
//                 placeholder="Enter your city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="pinCode" className={styles.label}>Pin Code</label>
//             <input
//               type="text"
//               id="pinCode"
//               name="pinCode"
//               className={styles.input}
//               placeholder="Enter 6-digit pin code"
//               value={formData.pinCode}
//               onChange={handleChange}
//               maxLength="6"
//               required
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="expertise" className={styles.label}>
//               <FiBriefcase className={styles.icon} /> Expertise
//             </label>
//             <div className={styles.expertiseContainer}>
//               <input
//                 type="text"
//                 id="expertise"
//                 name="expertise"
//                 className={styles.input}
//                 placeholder="Search or select your expertise"
//                 value={formData.expertise}
//                 onChange={handleExpertiseChange}
//                 onFocus={() => setShowExpertiseDropdown(true)}
//                 onBlur={() => setTimeout(() => setShowExpertiseDropdown(false), 200)}
//                 required
//               />
//               {showExpertiseDropdown && (
//                 <div className={styles.expertiseDropdown}>
//                   {filteredExpertise.length > 0 ? (
//                     filteredExpertise.map((expertise) => (
//                       <div
//                         key={expertise}
//                         className={styles.expertiseOption}
//                         onClick={() => selectExpertise(expertise)}
//                       >
//                         {expertise}
//                       </div>
//                     ))
//                   ) : (
//                     <div className={styles.noOptions}>No matching expertise found</div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className={styles.submitButton}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Signing Up...' : 'Sign Up'}
//           </button>

//           {/* <div className={styles.loginLink}>
//             Already have an account?{' '}
//             <span 
//               className={styles.link}
//               onClick={() => navigate('/', { state: { showLogin: true } })}
//             >
//               Login
//             </span>
//           </div> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GuestSignUpPage;

















// 20-08-25
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase } from 'react-icons/fi';
import styles from './BusinessSignUpModal.module.css';

const EXPERTISE_OPTIONS = [
  'IT Services',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Hospitality',
  'Construction',
  'Real Estate',
  'Consulting',
  'Marketing',
  'Legal',
  'Engineering',
  'Design',
  'Transportation'
];

const API_URL = import.meta.env.VITE_API_URL || "https://supcohort-backend.onrender.com";

const GuestSignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Pre-fill form data if coming from login popup
  const [formData, setFormData] = useState({
    firstName: location.state?.prefilledName?.split(' ')[0] || '',
    lastName: location.state?.prefilledName?.split(' ')[1] || '',
    email: location.state?.prefilledEmail || '',
    mobile: '',
    state: '',
    city: '',
    pinCode: '',
    expertise: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredExpertise, setFilteredExpertise] = useState([]);
  const [showExpertiseDropdown, setShowExpertiseDropdown] = useState(false);

  useEffect(() => {
    setFilteredExpertise(EXPERTISE_OPTIONS);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExpertiseChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      expertise: value
    }));
    
    if (value) {
      setFilteredExpertise(
        EXPERTISE_OPTIONS.filter(opt => 
          opt.toLowerCase().includes(value.toLowerCase())
      ));
    } else {
      setFilteredExpertise(EXPERTISE_OPTIONS);
    }
    setShowExpertiseDropdown(true);
  };

  const selectExpertise = (expertise) => {
    setFormData(prev => ({
      ...prev,
      expertise
    }));
    setShowExpertiseDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Validation
    if (!formData.firstName || !formData.lastName) {
      setError('Please enter your full name');
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    if (formData.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      setIsLoading(false);
      return;
    }

    if (!formData.state || !formData.city) {
      setError('Please enter your state and city');
      setIsLoading(false);
      return;
    }

    if (formData.pinCode.length !== 6) {
      setError('Please enter a valid 6-digit pin code');
      setIsLoading(false);
      return;
    }

    if (!formData.expertise) {
      setError('Please select your expertise');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/guest/signup`, formData);
      // MOCK API CALL - Replace with real API when backend is ready
      setTimeout(() => {
        setIsLoading(false);
        
        // Simulate successful signup
        setSuccess('Signup successful! Redirecting to login...');
        
        // Store data in localStorage for the login popup
        localStorage.setItem('guestSignupData', JSON.stringify({
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          timestamp: Date.now() // Add timestamp to ensure fresh data
        }));
        
        // Redirect to home with state to open login popup
        setTimeout(() => {
          navigate('/', { 
            state: { 
              showLoginPopup: true,
              prefilledEmail: formData.email,
              prefilledName: `${formData.firstName} ${formData.lastName}`,
              activeTab: 'guest'
            }
          });
        }, 1500);
      }, 1500);
      
    } catch (err) {
      setIsLoading(false);
      setError('This email or mobile number is already registered');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Guest Sign Up</h2>
        <p className={styles.subtitle}>Create your guest account to get started</p>

        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName" className={styles.label}>
                <FiUser className={styles.icon} /> First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={styles.input}
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="lastName" className={styles.label}>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={styles.input}
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              <FiMail className={styles.icon} /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="yourname@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mobile" className={styles.label}>
              <FiPhone className={styles.icon} /> Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className={styles.input}
              placeholder="Enter 10-digit mobile number"
              value={formData.mobile}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="state" className={styles.label}>State</label>
              <input
                type="text"
                id="state"
                name="state"
                className={styles.input}
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="city" className={styles.label}>City</label>
              <input
                type="text"
                id="city"
                name="city"
                className={styles.input}
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="pinCode" className={styles.label}>Pin Code</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              className={styles.input}
              placeholder="Enter 6-digit pin code"
              value={formData.pinCode}
              onChange={handleChange}
              maxLength="6"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="expertise" className={styles.label}>
              <FiBriefcase className={styles.icon} /> Expertise
            </label>
            <div className={styles.expertiseContainer}>
              <input
                type="text"
                id="expertise"
                name="expertise"
                className={styles.input}
                placeholder="Search or select your expertise"
                value={formData.expertise}
                onChange={handleExpertiseChange}
                onFocus={() => setShowExpertiseDropdown(true)}
                onBlur={() => setTimeout(() => setShowExpertiseDropdown(false), 200)}
                required
              />
              {showExpertiseDropdown && (
                <div className={styles.expertiseDropdown}>
                  {filteredExpertise.length > 0 ? (
                    filteredExpertise.map((expertise) => (
                      <div
                        key={expertise}
                        className={styles.expertiseOption}
                        onClick={() => selectExpertise(expertise)}
                      >
                        {expertise}
                      </div>
                    ))
                  ) : (
                    <div className={styles.noOptions}>No matching expertise found</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className={styles.loginLink}>
            Already have an account?{' '}
            <span 
              className={styles.link}
              onClick={() => navigate('/', { state: { showLoginPopup: true, activeTab: 'guest' } })}
            >
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuestSignUpPage;
