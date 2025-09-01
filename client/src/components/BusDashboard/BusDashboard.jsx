

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   FaUser, FaSearch, FaBuilding, FaMapMarkerAlt,
//   FaEnvelope, FaPhone, FaCity, FaMapPin, FaFilePdf,
//   FaShareAlt, FaCopy, FaWhatsapp, FaLinkedin, FaTwitter,
//   FaHome, FaPlus, FaList, FaCheck, FaSpinner, FaSearchDollar,
//   FaUserTie, FaClipboardList
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import styles from './BusDashboard.module.css';
// import PostRequrement from '../PostRequrement/PostRequrement';
// import AddManpowerForm from '../AddManpowerForm/AddManpowerForm';
// import BusniesForm from '../BusniesForm/BusniesForm';

// import ManageRequirements from '../ManageRequirements/ManageRequirements';
// import ManageManpower from '../AddManpowerForm/ManageManpower';

// import { useAuth } from '../../context/AuthContext';

// // const BASE_URL = "http://localhost:8000";
// // const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// const DashboardPage = ({role}) => {
//   const [search, setSearch] = useState('');
//   const [searchField, setSearchField] = useState('companyName');
//   const [businessData, setBusinessData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});
//   const navigate = useNavigate();
// const [requirementsKey, setRequirementsKey] = useState(0);
// const { user } = useAuth();
//   const [activeTab, setActiveTab] = useState("postRequirement");
//   const [isSaved, setIsSaved] = useState(false);
//   const isGuest = user?.isGuest;
//   // Fetch business data
//   const fetchBusinessData = async (query = '', field = 'companyName') => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`${BASE_URL}/api/busnies`, {
//         params: { 
//           q: query,
//           field: field 
//         },
//       });
      
//       let data = [];
//       if (response.data && Array.isArray(response.data)) {
//         data = response.data;
//       } else if (response.data?.data && Array.isArray(response.data.data)) {
//         data = response.data.data;
//       } else if (response.data?.result && Array.isArray(response.data.result)) {
//         data = response.data.result;
//       } else {
//         throw new Error('Unexpected API response structure');
//       }
      
//       setBusinessData(data);
//     } catch (err) {
//       console.error('Error fetching business data:', err);
//       setError(err.response?.data?.message || err.message || 'Failed to load business data');
//       setBusinessData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//    useEffect(() => {
//   if (isGuest && activeTab !== "postRequirement") {
//     setActiveTab("postRequirement");
//   }
// }, [isGuest, activeTab]);


//   useEffect(() => {
//     if (activeTab === 'businesses') {
//       fetchBusinessData();
//     }
//   }, [activeTab]);




//   const handleBusinessSubmit = async () => {
//   if (!formData) {
//     setError('No form data to submit');
//     return;
//   }

//   setIsSubmitting(true);
//   setError(null);

//   try {
//     // Add user information if available
//     const submissionData = {
//       ...formData,
//       userId: user?.id || null,
//       userEmail: user?.email || formData.userEmail || ''
//     };

//     const response = await axios.post(
//       `${API_URL}/api/busnies`,
//       submissionData,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${user?.token}`
//         }
//       }
//     );

//     console.log('Business submission response:', response.data);

//     if (response.data.success) {
//       alert('Business saved successfully!');
//       setFormData(null);
//       setIsSaved(false);
//       fetchBusinessData(); 
//     } else {
//       throw new Error(response.data.message || 'Business submission failed');
//     }
//   } catch (error) {
//     console.error('Business submission error:', error);

//     let errorMessage = 'Failed to submit business';
//     if (error.response) {
//       // Handle validation errors
//       if (error.response.data?.errors) {
//         const validationErrors = {};
//         Object.keys(error.response.data.errors).forEach(key => {
//           validationErrors[key] = error.response.data.errors[key].message;
//         });
//         setValidationErrors(validationErrors);
//         errorMessage = 'Please fix the form errors';
//       } else {
//         errorMessage = error.response.data?.message || error.response.statusText;
//       }
//     } else {
//       errorMessage = error.message;
//     }

//     setError(errorMessage);
//   } finally {
//     setIsSubmitting(false);
//   }
// };
//   // Handle form submission
// const handleRequirementSubmit = async () => {
//   console.log('Submitting:', formData); 
  
//   if (!formData) {
//     setError('No form data to submit');
//     return;
//   }

//   setIsSubmitting(true);
//  console.log('Form Data:', formData); 
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/requirements`,
//       formData,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${user?.token}`
//         }
//       }
//     );

//     console.log('Response:', response.data); 
//     if (response.data.success) {
//       // alert('Success! Requirement ID: ' + response.data.data._id);
//       alert("form submit succesfully")
//       setFormData(null);
//     } else {
//       throw new Error(response.data.error || 'Submission failed');
//     }
//   } catch (error) {
//     console.error('Submission error:', error.response?.data || error.message);
    
//     // Show detailed errors if available
//     const errorMsg = error.response?.data?.details 
//       ? error.response.data.details.join(', ')
//       : error.response?.data?.error || error.message;
    
//     setError(errorMsg);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

// const handleManpowerSubmit = async (formType) => {
//   console.log('Submitting:', formType, 'with data:', formData);
  
//   if (!user?.token) {
//     alert('Please login again - Token missing');
//     return;
//   }

//   try {
//     const response = await axios.post(
//       `${API_URL}/api/manpower`,
//       {
//         ...formData,
//         userId: user?.id 
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${user.token}`
//         },
//         timeout: 10000 
//       }
//     );

//     console.log('Full response:', response);
    
//     if (response.data?.success) {
//       alert('Successfully submitted!');
//       // Reset form or redirect
//       setFormData(null);
//       setRequirementsKey(prev => prev + 1); 
//     } else {
//       throw new Error(response.data?.error || 'Submission failed');
//     }
//   } catch (error) {
//     console.error('Error details:', {
//       message: error.message,
//       response: error.response?.data,
//       status: error.response?.status
//     });

//     let errorMessage = 'Submission failed';
//     if (error.response) {
//       if (error.response.status === 401) {
//         errorMessage = 'Session expired - Please login again';
//         // Optionally logout user
//       } else if (error.response.data?.message) {
//         errorMessage = error.response.data.message;
//       }
//     }
    
//     alert(errorMessage);
//   }
// };



//   // Handle save from child forms
// const handleSave = (data) => {
//   console.log("Form data saved:", data);
//   if (!data.userEmail && user?.email) {
//     data.userEmail = user.email; 
//   }
//   setFormData(data);
//   setIsSaved(true);
//   setValidationErrors({});
//   setError(null);
// };

//   // Handle search
//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchBusinessData(search, searchField);
//   };

//   // Handle field change for search
//   const handleFieldChange = (e) => {
//     setSearchField(e.target.value);
//     if (search) {
//       fetchBusinessData(search, e.target.value);
//     }
//   };

//   // Navigate to agency search
//   const handleSearchAgencyClick = () => {
//     navigate('/DashboardPage');
//   };


//    // Callback jab edit/delete hota hai
//   const onRequirementsChange = () => {
//     setRequirementsKey(prev => prev + 1);
//   }

  
//   // Business card component
//   const BusinessCard = ({ business }) => {
//     return (
//       <>
//     <div id="heade"></div>

//       <div className={styles.card}>
//         <div className={styles.cardHeader}>
//           <div className={styles.avatar}>
//             {business.companyName?.charAt(0)?.toUpperCase() || 'B'}
//           </div>
//           <div className={styles.cardTitle}>
//             <h3>{business.companyName || 'No Company Name'}</h3>
//             <span className={styles.companyType}>
//               {business.companyType || 'N/A'}
//             </span>
//           </div>
//         </div>

//         <div className={styles.cardContent}>
//           <div className={styles.cardData}>
//             <div className={styles.infoItem}>
//               <FaUser className={styles.infoIcon} />
//               <span>{business.contactName || 'N/A'}</span>
//             </div>
//             <div className={styles.infoItem}>
//               <FaBuilding className={styles.infoIcon} />
//               <span>{business.designation || 'N/A'}</span>
//             </div>
//             <div className={styles.infoItem}>
//               <FaEnvelope className={styles.infoIcon} />
//               <span>{business.companyEmail || 'N/A'}</span>
//             </div>
//             <div className={styles.infoItem}>
//               <FaCity className={styles.infoIcon} />
//               <span>{business.companyCity || 'N/A'}</span>
//             </div>
//             <div className={styles.infoItem}>
//               <FaMapPin className={styles.infoIcon} />
//               <span>{business.companyPincode || 'N/A'}</span>
//             </div>
//             <div className={styles.infoItem}>
//               <FaMapMarkerAlt className={styles.infoIcon} />
//               <span>{business.companyState || 'N/A'}</span>
//             </div>
//             <div className={styles.infoItem}>
//               <FaBuilding className={styles.infoIcon} />
//               <span>Products: {business.productsHandling || 'N/A'}</span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.cardFooter}>
//           <button 
//             className={styles.secondaryButton}
//             onClick={() => navigate(`/business/${business._id}`)}
//           >
//             View Details
//           </button>
//           <button className={styles.primaryButton}>Contact</button>
//         </div>
//       </div>
//       </>
//     );
//   };

//   return (
// <>
//     <div id="heade"></div>

//     <div className={styles.dashboardContainer}>
//       {/* Sidebar */}
//       {/* <div className={styles.sidebar}>
//         <div className={styles.sidebarHeader}><h2>BusinessHub</h2></div>
//         <nav className={styles.navMenu}>
//           <button 
//             className={`${styles.tabButton} ${activeTab === 'addBusiness' ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab('addBusiness')}
//           >
//             <FaPlus className={styles.tabIcon} /> Add Business
//             {activeTab === 'addBusiness' && isSaved && (
//               <FaCheck className={styles.checkIcon} />
//             )}
//           </button>

//           {/* <button 
//             className={`${styles.tabButton} ${activeTab === 'businesses' ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab('businesses')}
//           >
//             <FaList className={styles.tabIcon} /> View Businesses
//           </button> 

//           <button 
//             className={styles.tabButton}
//             onClick={handleSearchAgencyClick}
//           >
//             <FaSearchDollar className={styles.tabIcon} /> Search Agency
//           </button>

//           <button 
//             className={`${styles.tabButton} ${activeTab === 'postRequirement' ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab('postRequirement')}
//           >
//             <FaClipboardList className={styles.tabIcon} /> Post Requirement
//           </button>

//               <button 
//             className={`${styles.tabButton} ${activeTab === 'addManpower' ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab('addManpower')}
//           >
//             <FaUserTie className={styles.tabIcon} /> Add Post
//           </button>
//         </nav>
//         <div className={styles.sidebarFooter}><p>© 2025 BusinessHub</p></div>
//       </div> */}


// <div className={styles.sidebar}>
//   <div className={styles.sidebarHeader}>
//     <h2>BusinessHub</h2>
//   </div>

//   <nav className={styles.navMenu}>
//     {isGuest ? (
//       // Guest ke liye sirf ek tab
//       <button
//         className={`${styles.tabButton} ${
//           activeTab === "postRequirement" ? styles.activeTab : ""
//         }`}
//         onClick={() => setActiveTab("postRequirement")}
//       >
//         <FaClipboardList className={styles.tabIcon} /> Post Requirement
//       </button>
//     ) : (
//       // Normal users ke liye sabhi tabs
//       <>
//         <button
//           className={`${styles.tabButton} ${
//             activeTab === "addBusiness" ? styles.activeTab : ""
//           }`}
//           onClick={() => setActiveTab("addBusiness")}
//         >
//           <FaPlus className={styles.tabIcon} /> Add Business
//           {activeTab === "addBusiness" && isSaved && (
//             <FaCheck className={styles.checkIcon} />
//           )}
//         </button>

//         <button className={styles.tabButton} onClick={handleSearchAgencyClick}>
//           <FaSearchDollar className={styles.tabIcon} /> Search Agency
//         </button>

//         <button
//           className={`${styles.tabButton} ${
//             activeTab === "postRequirement" ? styles.activeTab : ""
//           }`}
//           onClick={() => setActiveTab("postRequirement")}
//         >
//           <FaClipboardList className={styles.tabIcon} /> Post Requirement
//         </button>

//         <button
//           className={`${styles.tabButton} ${
//             activeTab === "addManpower" ? styles.activeTab : ""
//           }`}
//           onClick={() => setActiveTab("addManpower")}
//         >
//           <FaUserTie className={styles.tabIcon} /> Add Post
//         </button>
//       </>
//     )}
//   </nav>

//   <div className={styles.sidebarFooter}>
//     <p>© 2025 BusinessHub</p>
//   </div>
// </div>


//       {/* Main Content */}

     
// <main className={styles.content}>
//   {/* Guest restriction */}
//   {isGuest ? (
//     activeTab === "postRequirement" && (
//       <>
//         <header className={styles.contentHeader}>
//           <h1>Post New Requirement</h1>
//         </header>

//         <section className={styles.contentBody}>
//           <div className={styles.formContainer}>
//             <PostRequrement
//               formData={formData}
//               onSave={handleSave}
//               validationErrors={validationErrors}
//             />

//             <div className={styles.submitContainer}>
//               <button
//                 type="button"
//                 className={styles.submitButton}
//                 onClick={() => {
//                   if (!isSaved) {
//                     setError(
//                       'Please save the form first by clicking "Save Company Details"'
//                     );
//                     return;
//                   }
//                   handleRequirementSubmit("requirements");
//                 }}
//                 disabled={isSubmitting || !isSaved}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <FaSpinner className={styles.spinnerIcon} spin="true" />
//                     Submitting...
//                   </>
//                 ) : (
//                   "Submit Requirement"
//                 )}
//               </button>
//             </div>
//           </div>
//         </section>

//         <ManageRequirements
//           key={requirementsKey}
//           onDataChange={onRequirementsChange}
//         />
//       </>
//     )
//   ) : (
//     <>
//       {/* ✅ Normal user ke liye pura tab system */}
//       {activeTab === "businesses" && (
//         <>
//           <header className={styles.contentHeader}>
//             <h1>Business Dashboard</h1>
//             {/* ... Search + Business list ... */}
//           </header>
//         </>
//       )}

//       {activeTab === "addBusiness" && (
//         <>
//           <header className={styles.contentHeader}>
//             <h1>Add New Business</h1>
//           </header>
//           <section className={styles.contentBody}>
//             <div className={styles.formContainer}>
//               <BusniesForm
//                 formData={formData}
//                 onSave={handleSave}
//                 validationErrors={validationErrors}
//               />
//               <div className={styles.submitContainer}>
//                 <button
//                   className={styles.submitButton}
//                   onClick={() => handleBusinessSubmit("busnies")}
//                   disabled={isSubmitting || !isSaved}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <FaSpinner className={styles.spinnerIcon} spin />
//                       Submitting...
//                     </>
//                   ) : (
//                     "Submit Business"
//                   )}
//                 </button>
//               </div>
//             </div>
//           </section>
//         </>
//       )}

//       {activeTab === "postRequirement" && (
//         <>
//           <header className={styles.contentHeader}>
//             <h1>Post New Requirement</h1>
//           </header>
//           <section className={styles.contentBody}>
//             <div className={styles.formContainer}>
//               <PostRequrement
//                 formData={formData}
//                 onSave={handleSave}
//                 validationErrors={validationErrors}
//               />
//               <div className={styles.submitContainer}>
//                 <button
//                   type="button"
//                   className={styles.submitButton}
//                   onClick={() => {
//                     if (!isSaved) {
//                       setError(
//                         'Please save the form first by clicking "Save Company Details"'
//                       );
//                       return;
//                     }
//                     handleRequirementSubmit("requirements");
//                   }}
//                   disabled={isSubmitting || !isSaved}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <FaSpinner className={styles.spinnerIcon} spin="true" />
//                       Submitting...
//                     </>
//                   ) : (
//                     "Submit Requirement"
//                   )}
//                 </button>
//               </div>
//             </div>
//           </section>
//           <ManageRequirements
//             key={requirementsKey}
//             onDataChange={onRequirementsChange}
//           />
//         </>
//       )}

//       {activeTab === "addManpower" && (
//         <>
//           <header className={styles.contentHeader}>
//             <h1>Add Job Position</h1>
//           </header>
//           <section className={styles.contentBody}>
//             <div className={styles.formContainer}>
//               <AddManpowerForm
//                 formData={formData}
//                 onSave={handleSave}
//                 validationErrors={validationErrors}
//               />
//               <div className={styles.submitContainer}>
//                 <button
//                   className={styles.submitButton}
//                   onClick={() => handleManpowerSubmit("manpower")}
//                   disabled={isSubmitting || !isSaved}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <FaSpinner className={styles.spinnerIcon} spin />
//                       Submitting...
//                     </>
//                   ) : (
//                     "Submit Position"
//                   )}
//                 </button>
//               </div>
//             </div>
//           </section>
//           <ManageManpower
//             key={requirementsKey}
//             onDataChange={onRequirementsChange}
//           />
//         </>
//       )}
//     </>
//   )}
// </main>

//       {/* <main className={styles.content}>
//         {activeTab === 'businesses' ? (
//           <>
//             <header className={styles.contentHeader}>
//               <h1>Business Dashboard</h1>
//               <form onSubmit={handleSearch} className={styles.searchForm}>
//                 <div className={styles.searchControls}>
//                   <select 
//                     value={searchField} 
//                     onChange={handleFieldChange}
//                     className={styles.searchSelect}
//                   >
//                     <option value="companyName">Company Name</option>
//                     <option value="companyType">Company Type</option>
//                     <option value="productsHandling">Products Handling</option>
//                     <option value="companyCity">City</option>
//                     <option value="companyState">State</option>
//                     <option value="companyPincode">Pincode</option>
//                   </select>
                  
//                   <div className={styles.searchInputContainer}>
//                     <FaSearch className={styles.searchIcon} />
//                     <input
//                       type="text"
//                       placeholder={`Search by ${searchField.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}...`}
//                       value={search}
//                       onChange={(e) => setSearch(e.target.value)}
//                       className={styles.searchInput}
//                     />
//                   </div>
//                   <button type="submit" className={styles.searchButton}>Search</button>
//                 </div>
//               </form>
//             </header>

//             <section className={styles.contentBody}>
//               {error ? (
//                 <div className={styles.errorState}>
//                   <p>{error}</p>
//                   <button onClick={() => fetchBusinessData()} className={styles.retryButton}>
//                     Retry
//                   </button>
//                 </div>
//               ) : loading ? (
//                 <div className={styles.loadingState}>
//                   <div className={styles.spinner}></div>
//                   <p>Loading business data...</p>
//                 </div>
//               ) : businessData.length === 0 ? (
//                 <div className={styles.emptyState}>
//                   <h3>No businesses found</h3>
//                   <p>Try adjusting your search or add a new business.</p>
//                 </div>
//               ) : (
//                 <div className={styles.twoColumnGrid}>
//                   {businessData.map((business) => (
//                     <BusinessCard key={business._id || business.id || Math.random()} business={business} />
//                   ))}
//                 </div>
//               )}
//             </section>
//           </>
//         ) : activeTab === 'addBusiness' ? (
//           <>
//             <header className={styles.contentHeader}>
//               <h1>Add New Business</h1>
//             </header>
            
//             <section className={styles.contentBody}>
//               <div className={styles.formContainer}>
//                 <BusniesForm
//                   formData={formData}
//                   onSave={handleSave}
//                   validationErrors={validationErrors}
//                 />
                
//                 <div className={styles.submitContainer}>
//                   <button
//                     className={styles.submitButton}
//                     onClick={() => handleBusinessSubmit('busnies')}
//                     disabled={isSubmitting || !isSaved}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <FaSpinner className={styles.spinnerIcon} spin />
//                         Submitting...
//                       </>
//                     ) : 'Submit Business'}
//                   </button>
//                 </div>
//               </div>
//             </section>
//           </>
//         ) : activeTab === 'postRequirement' ? (
//           <>
//             <header className={styles.contentHeader}>
//               <h1>Post New Requirement</h1>
//             </header>
            
//             <section className={styles.contentBody}>
//               <div className={styles.formContainer}>
//                 <PostRequrement
//                   formData={formData}
//                   onSave={handleSave}
//                   validationErrors={validationErrors}
//                 />
                
//                 <div className={styles.submitContainer}>
//   <button
//   type="button"
//   className={styles.submitButton}
//   onClick={() => {
//     if (!isSaved) {
//       setError('Please save the form first by clicking "Save Company Details"');
//       return;
//     }
//     handleRequirementSubmit('requirements');
//   }}
//   disabled={isSubmitting || !isSaved}
// >
//   {isSubmitting ? (
//     <>
//       <FaSpinner className={styles.spinnerIcon} spin="true" />
//       Submitting...
//     </>
//   ) : 'Submit Requirement'}
// </button>
//                 </div>
//               </div>
//             </section>

//  <ManageRequirements
//             key={requirementsKey}
//             onDataChange={onRequirementsChange}
//           />
//           </>
//         ) : (
//           <>
//             <header className={styles.contentHeader}>
//               <h1>Add Job Position</h1>
//             </header>
            
//             <section className={styles.contentBody}>
//               <div className={styles.formContainer}>
//                 <AddManpowerForm
//                   formData={formData}
//                   onSave={handleSave}
//                   validationErrors={validationErrors}
//                 />
                
//                 <div className={styles.submitContainer}>
//                   <button
//                     className={styles.submitButton}
//                     onClick={() => handleManpowerSubmit('manpower')}
//                     disabled={isSubmitting || !isSaved}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <FaSpinner className={styles.spinnerIcon} spin />
//                         Submitting...
//                       </>
//                     ) : 'Submit Position'}
//                   </button>
//                 </div>
//               </div>
//             </section>
//             <ManageManpower
//             key={requirementsKey}
//             onDataChange={onRequirementsChange}
//           />
//           </>
//         )}
//       </main> */}
     
//     </div>
//     </>
//   );
// };

// export default DashboardPage;





















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaUser, FaSearch, FaBuilding, FaMapMarkerAlt,
  FaEnvelope, FaPhone, FaCity, FaMapPin, FaFilePdf,
  FaShareAlt, FaCopy, FaWhatsapp, FaLinkedin, FaTwitter,
  FaHome, FaPlus, FaList, FaCheck, FaSpinner, FaSearchDollar,
  FaUserTie, FaClipboardList
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './BusDashboard.module.css';
import PostRequrement from '../PostRequrement/PostRequrement';
import AddManpowerForm from '../AddManpowerForm/AddManpowerForm';
import BusniesForm from '../BusniesForm/BusniesForm';
import ManageRequirements from '../ManageRequirements/ManageRequirements';
import ManageManpower from '../AddManpowerForm/ManageManpower';
import { useAuth } from '../../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || "https://supcohort-muvm.onrender.com";

const DashboardPage = ({role}) => {
  const [search, setSearch] = useState('');
  const [searchField, setSearchField] = useState('companyName');
  const [businessData, setBusinessData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();
  const [requirementsKey, setRequirementsKey] = useState(0);
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("postRequirement");
  const [isSaved, setIsSaved] = useState(false);
  const isGuest = user?.isGuest;


   console.log("Is guest:", isGuest);
  console.log("User object:", user);
  // Fetch business data
  const fetchBusinessData = async (query = '', field = 'companyName') => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/api/busnies`, {
        params: { 
          q: query,
          field: field 
        },
      });
      
      let data = [];
      if (response.data && Array.isArray(response.data)) {
        data = response.data;
      } else if (response.data?.data && Array.isArray(response.data.data)) {
        data = response.data.data;
      } else if (response.data?.result && Array.isArray(response.data.result)) {
        data = response.data.result;
      } else {
        throw new Error('Unexpected API response structure');
      }
      
      setBusinessData(data);
    } catch (err) {
      console.error('Error fetching business data:', err);
      setError(err.response?.data?.message || err.message || 'Failed to load business data');
      setBusinessData([]);
    } finally {
      setLoading(false);
    }
  };

  // Guest user ke liye sirf postRequirement tab allow karein
  useEffect(() => {
    if (isGuest && activeTab !== "postRequirement") {
      setActiveTab("postRequirement");
    }
  }, [isGuest, activeTab]);

  useEffect(() => {
    if (activeTab === 'businesses') {
      fetchBusinessData();
    }
  }, [activeTab]);

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
        fetchBusinessData(); 
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

  const handleManpowerSubmit = async (formType) => {
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
      console.error('Error details:', error);
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

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBusinessData(search, searchField);
  };

  const handleFieldChange = (e) => {
    setSearchField(e.target.value);
    if (search) {
      fetchBusinessData(search, e.target.value);
    }
  };

  const handleSearchAgencyClick = () => {
    navigate('/DashboardPage');
  };

  const onRequirementsChange = () => {
    setRequirementsKey(prev => prev + 1);
  };

  return (
    <>
      <div id="heade"></div>
      <div className={styles.dashboardContainer}>
        
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2>BusinessHub</h2>
          </div>

          <nav className={styles.navMenu}>
            {isGuest ? (
              // Guest user ke liye sirf ek hi tab - Post Requirement
              <button
                className={`${styles.tabButton} ${styles.activeTab}`}
                onClick={() => setActiveTab("postRequirement")}
              >
                <FaClipboardList className={styles.tabIcon} /> 
                Post Requirement
              </button>
            ) : (
              // Normal users ke liye sabhi tabs
              <>
                <button
                  className={`${styles.tabButton} ${
                    activeTab === "addBusiness" ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab("addBusiness")}
                >
                  <FaPlus className={styles.tabIcon} /> 
                  Add Business
                  {activeTab === "addBusiness" && isSaved && (
                    <FaCheck className={styles.checkIcon} />
                  )}
                </button>

                <button 
                  className={styles.tabButton}
                  onClick={handleSearchAgencyClick}
                >
                  <FaSearchDollar className={styles.tabIcon} /> 
                  Search Agency
                </button>

                <button
                  className={`${styles.tabButton} ${
                    activeTab === "postRequirement" ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab("postRequirement")}
                >
                  <FaClipboardList className={styles.tabIcon} /> 
                  Post Requirement
                </button>

                <button
                  className={`${styles.tabButton} ${
                    activeTab === "addManpower" ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab("addManpower")}
                >
                  <FaUserTie className={styles.tabIcon} /> 
                  Add Post
                </button>
              </>
            )}
          </nav>

          <div className={styles.sidebarFooter}>
            <p>© 2025 BusinessHub</p>
          </div>
        </div>

        {/* Main Content */}
        <main className={styles.content}>
          {/* Guest user ke liye sirf Post Requirement */}
          {isGuest ? (
            activeTab === "postRequirement" && (
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
                          handleRequirementSubmit("requirements");
                        }}
                        disabled={isSubmitting || !isSaved}
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className={styles.spinnerIcon} spin />
                            Submitting...
                          </>
                        ) : (
                          "Submit Requirement"
                        )}
                      </button>
                    </div>
                  </div>
                </section>

                <ManageRequirements
                  key={requirementsKey}
                  onDataChange={onRequirementsChange}
                />
              </>
            )
          ) : (
            // Normal users ke liye sabhi tabs
            <>
              {activeTab === "addBusiness" && (
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
                          onClick={() => handleBusinessSubmit("busnies")}
                          disabled={isSubmitting || !isSaved}
                        >
                          {isSubmitting ? (
                            <>
                              <FaSpinner className={styles.spinnerIcon} spin />
                              Submitting...
                            </>
                          ) : (
                            "Submit Business"
                          )}
                        </button>
                      </div>
                    </div>
                  </section>
                </>
              )}

              {activeTab === "postRequirement" && (
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
                            handleRequirementSubmit("requirements");
                          }}
                          disabled={isSubmitting || !isSaved}
                        >
                          {isSubmitting ? (
                            <>
                              <FaSpinner className={styles.spinnerIcon} spin="true" />
                              Submitting...
                            </>
                          ) : (
                            "Submit Requirement"
                          )}
                        </button>
                      </div>
                    </div>
                  </section>
                  <ManageRequirements
                    key={requirementsKey}
                    onDataChange={onRequirementsChange}
                  />
                </>
              )}

              {activeTab === "addManpower" && (
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
                          onClick={() => handleManpowerSubmit("manpower")}
                          disabled={isSubmitting || !isSaved}
                        >
                          {isSubmitting ? (
                            <>
                              <FaSpinner className={styles.spinnerIcon} spin />
                              Submitting...
                            </>
                          ) : (
                            "Submit Position"
                          )}
                        </button>
                      </div>
                    </div>
                  </section>
                  <ManageManpower
                    key={requirementsKey}
                    onDataChange={onRequirementsChange}
                  />
                </>
              )}
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
