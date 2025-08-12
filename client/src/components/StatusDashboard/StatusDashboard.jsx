

// // 02-08-25
// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import {
//   FaUser, FaSearch, FaBuilding, FaMapMarkerAlt, 
//   FaEnvelope, FaPhone, FaCity, FaMapPin, FaFilePdf,
//   FaEyeSlash, FaTrash, FaPlus, FaList, FaCheck, FaSpinner,
//   FaEdit, FaTimes, FaChevronUp, FaChevronDown, FaEye, FaUndo,
//   FaChartPie, FaCalendarAlt, FaFilter, FaEnvelopeOpen, FaCheckSquare
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import styles from './StatusDashboard.module.css';
// import BusniesForm from '../BusniesForm/BusniesForm';
// import * as XLSX from 'xlsx';

// import {
//   useSyncHiddenRemoved,
//   markHiddenId, markRemovedId,
//   markHiddenBusinessId, markRemovedBusinessId,
//   markHiddenRequirementId, markRemovedRequirementId,
//   markHiddenManpowerId, markRemovedManpowerId,
//   unmarkHiddenId, unmarkRemovedId,
//   unmarkHiddenBusinessId, unmarkRemovedBusinessId,
//   unmarkHiddenRequirementId, unmarkRemovedRequirementId,
//   unmarkHiddenManpowerId, unmarkRemovedManpowerId
// } from "../../utils/dashboardState";

// // const BASE_URL = "http://localhost:8000";
// // const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// const DashboardPage = () => {
  
//   // State management
//   const [activeTab, setActiveTab] = useState('agency');
//   const [managementTab, setManagementTab] = useState('active');
//   const [search, setSearch] = useState('');
//   const [searchField, setSearchField] = useState('companyName');
//   const [agencyData, setAgencyData] = useState([]);
//   const [businessData, setBusinessData] = useState([]);
//   const [requirementsData, setRequirementsData] = useState([]);
//   const [manpowerData, setManpowerData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
//   const [insightsData, setInsightsData] = useState({
//     agencies: 0,
//     businesses: 0,
//     requirements: 0,
//     manpower: 0,
//     monthlyTrends: Array(12).fill().map((_, i) => ({
//       month: new Date(0, i).toLocaleString('default', { month: 'short' }),
//       agencies: 0,
//       businesses: 0,
//       requirements: 0,
//       manpower: 0
//     })),
//     yearlyTrends: []
//   });
//   const [dateRange, setDateRange] = useState('all');
//   const [searchResults, setSearchResults] = useState([]);
// const [totalManpower, setTotalManpower] = useState(0);
//   // New states for bulk selection and email
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [emailModalOpen, setEmailModalOpen] = useState(false);
//   const [emailData, setEmailData] = useState({
//     subject: '',
//     message: '',
//     isSending: false,
//     sendError: null,
//     sendSuccess: false
//   });
  
//   // Date filter states
//   const [showDateFilter, setShowDateFilter] = useState(false);
//   const [dateFilter, setDateFilter] = useState({
//     range: 'all',
//     startDate: '',
//     endDate: '',
//     days: '0-5',
//     month: new Date().getMonth() + 1,
//     year: new Date().getFullYear()
//   });
  
//   // Hidden/Removed states for all tabs
//   const { hiddenIds, removedIds } = useSyncHiddenRemoved('agency');
//   const { hiddenIds: hiddenBusinessIds, removedIds: removedBusinessIds } = useSyncHiddenRemoved('business');
//   const { hiddenIds: hiddenRequirementIds, removedIds: removedRequirementIds } = useSyncHiddenRemoved('requirement');
//   const { hiddenIds: hiddenManpowerIds, removedIds: removedManpowerIds } = useSyncHiddenRemoved('manpower');
  
//   const navigate = useNavigate();

//   // Search fields configuration
//   const agencySearchFields = [
//     { value: 'companyName', label: 'Company Name' },
//     { value: 'contactName', label: 'Contact Name' },
//     { value: 'categoryType', label: 'Category' },
//     { value: 'companyPhone', label: 'Phone' },
//     { value: 'companyCity', label: 'City' },
//     { value: 'companyState', label: 'State' }
//   ];

//   const businessSearchFields = [
//     { value: 'companyName', label: 'Company Name' },
//     { value: 'contactName', label: 'Contact Name' },
//     { value: 'companyType', label: 'Type' },
//     { value: 'companyEmail', label: 'Email' },
//     { value: 'companyCity', label: 'City' },
//     { value: 'companyState', label: 'State' }
//   ];

//   const requirementsSearchFields = [
//     { value: 'companyName', label: 'Company Name' },
//     { value: 'product', label: 'Product' },
//     { value: 'categoryType', label: 'Category' },
//     { value: 'companyCity', label: 'City' }
//   ];

//   const manpowerSearchFields = [
//     { value: 'designation', label: 'Designation' },
//     { value: 'location', label: 'Location' },
//     { value: 'experience', label: 'Experience' }
//   ];

//   // New function to handle bulk email sending
// const handleSendBulkEmail = async () => {
//   if (selectedItems.length === 0) {
//     setEmailData({ ...emailData, sendError: "Please select items first" });
//     return;
//   }

//   setEmailData({ ...emailData, isSending: true, sendError: null });

//   try {
//     // Get current data
//     const currentData = 
//       activeTab === 'agency' ? agencyData :
//       activeTab === 'business' ? businessData :
//       activeTab === 'requirements' ? requirementsData :
//       manpowerData;

//     // Verify data structure
//     if (!currentData || currentData.length === 0) {
//       throw new Error("No data available");
//     }

//     // Process selected items
//     const emailResults = selectedItems.map(id => {
//       const item = currentData.find(i => i._id === id);
//       if (!item) {
//         return { id, status: "not_found" };
//       }

//       // Check all possible email fields
//       const emailFields = ['userEmail', 'companyEmail', 'email', 'contactEmail'];
//       const email = emailFields.reduce((found, field) => 
//         found || (item[field] && item[field].includes('@') ? item[field] : null), 
//         null
//       );

//       if (!email) {
//         return { 
//           id, 
//           status: "no_email",
//           availableFields: Object.keys(item).filter(k => k.toLowerCase().includes('email'))
//         };
//       }

//       return { id, status: "valid", email: email.trim() };
//     });

//     // Filter valid emails
//     const validEmails = emailResults
//       .filter(result => result.status === "valid")
//       .map(result => result.email);

//     if (validEmails.length === 0) {
//       throw new Error(
//         `No valid emails found in selected items.\n` +
//         `Debug info:\n${JSON.stringify(emailResults, null, 2)}`
//       );
//     }

//     // Send emails
//     const response = await axios.post(`${API_URL}/api/send-bulk-email`, {
//       emails: [...new Set(validEmails)],
//       subject: emailData.subject,
//       message: emailData.message
//     });

//     // Success
//     setEmailData({
//       isSending: false,
//       sendSuccess: true,
//       sendError: null,
//       subject: '',
//       message: ''
//     });
//     setSelectedItems([]);

//   } catch (err) {
//     console.error("Email sending failed:", err);
//     setEmailData({
//       ...emailData,
//       isSending: false,
//       sendError: err.response?.data?.message || err.message
//     });
//   }
// };

//   // New function to toggle item selection
//   const toggleItemSelection = (id) => {
//     setSelectedItems(prev => 
//       prev.includes(id) 
//         ? prev.filter(itemId => itemId !== id) 
//         : [...prev, id]
//     );
//   };

//   // New function to toggle select all
//   const toggleSelectAll = () => {
//     const currentData = searchResults.length > 0 ? searchResults : getFilteredData();
//     if (selectAll) {
//       setSelectedItems([]);
//     } else {
//       setSelectedItems(currentData.map(item => item._id));
//     }
//     setSelectAll(!selectAll);
//   };

//   const exportToExcel = () => {
//     let dataToExport = [];
//     let fileName = '';

//     switch(activeTab) {
//       case 'agency':
//         dataToExport = agencyData;
//         fileName = 'Agencies_Data.xlsx';
//         break;
//       case 'business':
//         dataToExport = businessData;
//         fileName = 'Businesses_Data.xlsx';
//         break;
//       case 'requirements':
//         dataToExport = requirementsData;
//         fileName = 'Requirements_Data.xlsx';
//         break;
//       case 'manpower':
//         dataToExport = manpowerData;
//         fileName = 'Manpower_Data.xlsx';
//         break;
//       default:
//         return;
//     }

//     // Prepare the data for export
//     const exportData = dataToExport.map(item => {
//       const newItem = {...item};
//       // Remove MongoDB _id field if it exists
//       delete newItem._id;
//       return newItem;
//     });

//     const ws = XLSX.utils.json_to_sheet(exportData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
//     XLSX.writeFile(wb, fileName);
//   };

//   const months = Array.from({ length: 12 }, (_, i) => ({
//     value: i + 1,
//     label: new Date(0, i).toLocaleString('default', { month: 'long' })
//   }));

//   // Function to filter data by date
//   const filterByDate = (data) => {
//     if (dateFilter.range === 'all') return data;
    
//     const now = new Date();
//     const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
//     return data.filter(item => {
//       // Default to current date if createdAt is not available
//       const itemDate = item.createdAt ? new Date(item.createdAt) : new Date();
//       const daysDiff = Math.floor((currentDate - itemDate) / (1000 * 60 * 60 * 24));
      
//       switch(dateFilter.range) {
//         case 'today':
//           return itemDate.toDateString() === currentDate.toDateString();
//         case 'yesterday':
//           const yesterday = new Date(currentDate);
//           yesterday.setDate(yesterday.getDate() - 1);
//           return itemDate.toDateString() === yesterday.toDateString();
//         case 'days':
//           const [minDays, maxDays] = dateFilter.days.split('-').map(Number);
//           return daysDiff >= minDays && daysDiff <= maxDays;
//         case 'month':
//           return itemDate.getMonth() + 1 === Number(dateFilter.month) && 
//                  itemDate.getFullYear() === Number(dateFilter.year);
//         case 'year':
//           return itemDate.getFullYear() === Number(dateFilter.year);
//         case 'custom':
//           if (!dateFilter.startDate || !dateFilter.endDate) return true;
//           const startDate = new Date(dateFilter.startDate);
//           const endDate = new Date(dateFilter.endDate);
//           return itemDate >= startDate && itemDate <= endDate;
//         default:
//           return true;
//       }
//     });
//   };

//   // Fetch all data counts from the server
//   const fetchInsightsData = useCallback(async () => {
//     try {
//       setLoading(true);
      
//       // Fetch actual counts from the server
//       const [agenciesRes, businessesRes, requirementsRes, manpowerRes] = await Promise.all([
//         axios.get(`${API_URL}/api/dashboard`),
//         axios.get(`${API_URL}/api/busnies`),
//         axios.get(`${API_URL}/api/all-requirements`),
//         axios.get(`${API_URL}/api/manpower/all-records`)
//       ]);

//       // Calculate counts from responses
//       const agenciesCount = agenciesRes.data?.length || 0;
//       const businessesCount = businessesRes.data?.length || 
//                             businessesRes.data?.data?.length || 
//                             businessesRes.data?.result?.length || 0;
//       const requirementsCount = requirementsRes.data?.data?.length || 0;
//       const manpowerCount = manpowerRes.data?.data?.length || 0;

//       // Get current date info for trends
//       const now = new Date();
//       const currentYear = now.getFullYear();
//       const currentMonth = now.getMonth();

//       // Generate monthly trends with actual current month data
//       const monthlyTrends = Array(12).fill().map((_, i) => ({
//         month: new Date(0, i).toLocaleString('default', { month: 'short' }),
//         agencies: i === currentMonth ? agenciesCount : Math.floor(agenciesCount / 12),
//         businesses: i === currentMonth ? businessesCount : Math.floor(businessesCount / 12),
//         requirements: i === currentMonth ? requirementsCount : Math.floor(requirementsCount / 12),
//         manpower: i === currentMonth ? manpowerCount : Math.floor(manpowerCount / 12)
//       }));

//       // Generate yearly trends with actual current year data
//       const yearlyTrends = Array(5).fill().map((_, i) => ({
//         year: currentYear - 4 + i,
//         agencies: (currentYear - 4 + i) === currentYear ? agenciesCount : Math.floor(agenciesCount / 5),
//         businesses: (currentYear - 4 + i) === currentYear ? businessesCount : Math.floor(businessesCount / 5),
//         requirements: (currentYear - 4 + i) === currentYear ? requirementsCount : Math.floor(requirementsCount / 5),
//         manpower: (currentYear - 4 + i) === currentYear ? manpowerCount : Math.floor(manpowerCount / 5)
//       }));

//       setInsightsData({
//         agencies: agenciesCount,
//         businesses: businessesCount,
//         requirements: requirementsCount,
//         manpower: manpowerCount,
//         monthlyTrends,
//         yearlyTrends
//       });
//     } catch (err) {
//       console.error('Error fetching insights:', err);
//       setError('Failed to load insights data');
//     } finally {
//       setLoading(false);
//     }
//   }, [dateRange]);

//   // Apply date range filtering to insights data
//   const getFilteredInsights = () => {
//     const now = new Date();
//     const currentYear = now.getFullYear();
//     const currentMonth = now.getMonth();
    
//     switch(dateRange) {
//       case 'month':
//         return {
//           ...insightsData,
//           monthlyTrends: insightsData.monthlyTrends.map((month, i) => ({
//             ...month,
//             agencies: i === currentMonth ? insightsData.agencies : 0,
//             businesses: i === currentMonth ? insightsData.businesses : 0,
//             requirements: i === currentMonth ? insightsData.requirements : 0,
//             manpower: i === currentMonth ? insightsData.manpower : 0
//           }))
//         };
//       case 'quarter':
//         // Show last 3 months of data
//         return {
//           ...insightsData,
//           monthlyTrends: insightsData.monthlyTrends.map((month, i) => {
//             const isInQuarter = i >= currentMonth - 2 && i <= currentMonth;
//             return {
//               ...month,
//               agencies: isInQuarter ? Math.round(insightsData.agencies / 3) : 0,
//               businesses: isInQuarter ? Math.round(insightsData.businesses / 3) : 0,
//               requirements: isInQuarter ? Math.round(insightsData.requirements / 3) : 0,
//               manpower: isInQuarter ? Math.round(insightsData.manpower / 3) : 0
//             };
//           })
//         };
//       case 'year':
//         return {
//           ...insightsData,
//           yearlyTrends: insightsData.yearlyTrends.map(yearData => ({
//             ...yearData,
//             agencies: yearData.year === currentYear ? insightsData.agencies : 0,
//             businesses: yearData.year === currentYear ? insightsData.businesses : 0,
//             requirements: yearData.year === currentYear ? insightsData.requirements : 0,
//             manpower: yearData.year === currentYear ? insightsData.manpower : 0
//           }))
//         };
//       default:
//         return insightsData;
//     }
//   };

//   // Enhanced search functionality
//   const performSearch = useCallback((query, field) => {
//     if (!query.trim()) {
//       setSearchResults([]);
//       return;
//     }

//     setLoading(true);
//     try {
//       let results = [];
//       const searchTerm = query.toLowerCase();

//       switch(activeTab) {
//         case 'agency':
//           results = agencyData.filter(item => 
//             String(item[field]).toLowerCase().includes(searchTerm)
//           );
//           break;
//         case 'business':
//           results = businessData.filter(item => 
//             String(item[field]).toLowerCase().includes(searchTerm)
//           );
//           break;
//         case 'requirements':
//           results = requirementsData.filter(item => 
//             String(item[field]).toLowerCase().includes(searchTerm)
//           );
//           break;
//         case 'manpower':
//           results = manpowerData.filter(item => 
//             String(item[field]).toLowerCase().includes(searchTerm)
//           );
//           break;
//         default:
//           break;
//       }

//       setSearchResults(filterByDate(results));
//     } catch (err) {
//       console.error('Search error:', err);
//       setError('Search failed. Please try again.');
//       setSearchResults([]);
//     } finally {
//       setLoading(false);
//     }
//   }, [activeTab, agencyData, businessData, requirementsData, manpowerData, dateFilter]);

//   // Debounced search
//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       if (search) {
//         performSearch(search, searchField);
//       } else {
//         setSearchResults([]);
//       }
//     }, 500);

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [search, searchField, performSearch]);

//   // Fetch functions for each tab
//   const fetchAgencyData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await axios.get(`${API_URL}/api/dashboard`);
//       const formattedData = res.data.map(item => ({
//         ...item,
//         companyName: item.companyName || 'Unnamed Company',
//         contactName: item.contactName || 'N/A',
//         categoryType: item.categoryType || 'N/A',
//         companyPhone: item.companyPhone || 'N/A',
//         companyCity: item.companyCity || 'N/A',
//         companyState: item.companyState || 'N/A',
//       }));
//       setAgencyData(formattedData);
//     } catch (err) {
//       console.error('Fetch error:', err);
//       setError('Failed to fetch agency data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const fetchBusinessData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`${API_URL}/api/busnies`);
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
//   }, []);

//   const fetchRequirementsData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await axios.get(`${API_URL}/api/all-requirements`);
//       setRequirementsData(res.data.data || []);
//     } catch (err) {
//       console.error('Error fetching requirements:', err);
//       setError('Failed to fetch requirements data.');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const fetchManpowerData = useCallback(async () => {
//   setLoading(true);
//   setError(null);
//   try {
//     const token = localStorage.getItem('businessToken');
//     if (!token) {
//       throw new Error('No authentication token found');
//     }

//     const res = await axios.get(`${API_URL}/api/manpower/all-records`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     console.log('Manpower API Response:', res.data); // Debug log

//     if (res.data.success) {
//       setManpowerData(res.data.data || []);
//       setTotalManpower(res.data.total || 0);
//     } else {
//       throw new Error(res.data.message || 'Invalid response format');
//     }
//   } catch (err) {
//     console.error('Manpower fetch error:', err);
    
//     // Handle unauthorized error
//     if (err.response?.status === 401) {
//       localStorage.removeItem('businessToken');
//       localStorage.removeItem('businessUser');
//       navigate('/login');
//       return;
//     }
    
//     setError(err.response?.data?.error || 
//              err.response?.data?.message || 
//              err.message || 
//              'Failed to fetch manpower data');
//   } finally {
//     setLoading(false);
//   }
// }, [navigate]);

//   // Load data when tab changes
//   useEffect(() => {
//     if (activeTab === 'agency') {
//       fetchAgencyData();
//     } else if (activeTab === 'business') {
//       fetchBusinessData();
//     } else if (activeTab === 'requirements') {
//       fetchRequirementsData();
//     } else if (activeTab === 'manpower') {
//       fetchManpowerData();
//     } else if (activeTab === 'insights') {
//       fetchInsightsData();
//     }
//   }, [activeTab, fetchAgencyData, fetchBusinessData, fetchRequirementsData, fetchManpowerData, fetchInsightsData]);

//   // Reset selections when tab changes
//   useEffect(() => {
//     setSelectedItems([]);
//     setSelectAll(false);
//   }, [activeTab]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     performSearch(search, searchField);
//   };

//   const handleClearSearch = () => {
//     setSearch('');
//     setSearchResults([]);
//     setSearchField(activeTab === 'manpower' ? 'designation' : 'companyName');
//   };

//   // Action handlers
//   const handleHide = (id) => {
//     if (activeTab === 'agency') markHiddenId(id);
//     else if (activeTab === 'business') markHiddenBusinessId(id);
//     else if (activeTab === 'requirements') markHiddenRequirementId(id);
//     else if (activeTab === 'manpower') markHiddenManpowerId(id);
//   };

//   const handleUnhide = (id) => {
//     if (activeTab === 'agency') unmarkHiddenId(id);
//     else if (activeTab === 'business') unmarkHiddenBusinessId(id);
//     else if (activeTab === 'requirements') unmarkHiddenRequirementId(id);
//     else if (activeTab === 'manpower') unmarkHiddenManpowerId(id);
//   };

//   const handleDelete = (id) => {
//     if (activeTab === 'agency') markRemovedId(id);
//     else if (activeTab === 'business') markRemovedBusinessId(id);
//     else if (activeTab === 'requirements') markRemovedRequirementId(id);
//     else if (activeTab === 'manpower') markRemovedManpowerId(id);
//   };

//   const handleUndelete = (id) => {
//     if (activeTab === 'agency') unmarkRemovedId(id);
//     else if (activeTab === 'business') unmarkRemovedBusinessId(id);
//     else if (activeTab === 'requirements') unmarkRemovedRequirementId(id);
//     else if (activeTab === 'manpower') unmarkRemovedManpowerId(id);
//   };

//   const handleSave = (data) => {
//     setFormData(data);
//     setIsSaved(true);
//     setValidationErrors({});
//   };

//   const handleSubmit = async () => {
//     if (!isSaved || !formData) return;

//     setIsSubmitting(true);
//     setValidationErrors({});
    
//     try {
//       const response = await axios.post(`${API_URL}/api/busnies`, formData);
//       if (response.data.success) {
//         setIsSaved(false);
//         setFormData(null);
//         setActiveTab('business');
//         fetchBusinessData();
//       }
//     } catch (error) {
//       if (error.response?.data?.errors) {
//         setValidationErrors(error.response.data.errors);
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Sorting functionality
//   const requestSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedData = (data) => {
//     const sortableData = [...data];
//     if (sortConfig.key) {
//       sortableData.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'asc' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableData;
//   };

//   // Filter data based on management tab and date
//   const getFilteredData = () => {
//     let data, hIds, rIds;
    
//     if (activeTab === 'agency') {
//       data = agencyData;
//       hIds = hiddenIds;
//       rIds = removedIds;
//     } else if (activeTab === 'business') {
//       data = businessData;
//       hIds = hiddenBusinessIds;
//       rIds = removedBusinessIds;
//     } else if (activeTab === 'requirements') {
//       data = requirementsData;
//       hIds = hiddenRequirementIds;
//       rIds = removedRequirementIds;
//     } else if (activeTab === 'manpower') {
//       data = manpowerData;
//       hIds = hiddenManpowerIds;
//       rIds = removedManpowerIds;
//     }

//     let filteredData = [];
    
//     if (managementTab === 'active') {
//       filteredData = data.filter(item => !hIds[item._id] && !rIds[item._id]);
//     } else if (managementTab === 'hidden') {
//       filteredData = data.filter(item => hIds[item._id] && !rIds[item._id]);
//     } else if (managementTab === 'deleted') {
//       filteredData = data.filter(item => rIds[item._id]);
//     }
    
//     // Apply date filtering
//     return sortedData(filterByDate(filteredData));
//   };

//   // Table columns configuration
//   const agencyColumns = [
//     { key: 'checkbox', label: '', render: (_, item) => (
//       <input 
//         type="checkbox" 
//         checked={selectedItems.includes(item._id)}
//         onChange={() => toggleItemSelection(item._id)}
//       />
//     )},
//     { key: 'companyName', label: 'Company Name' },
//     { key: 'contactName', label: 'Contact Name' },
//     { key: 'categoryType', label: 'Category' },
//     { key: 'companyPhone', label: 'Phone' },
//     { key: 'companyCity', label: 'City' },
//     { key: 'companyState', label: 'State' },
//     { 
//       key: 'createdAt', 
//       label: 'Created Date',
//       render: (value) => {
//         if (!value) return 'N/A';
//         const date = new Date(value);
//         return date.toLocaleDateString('en-IN'); // Indian format DD/MM/YYYY
//       }
//     },
//     { key: 'actions', label: 'Actions' }
//   ];

//   const businessColumns = [
//     { key: 'checkbox', label: '', render: (_, item) => (
//       <input 
//         type="checkbox" 
//         checked={selectedItems.includes(item._id)}
//         onChange={() => toggleItemSelection(item._id)}
//       />
//     )},
//     { key: 'companyName', label: 'Company Name' },
//     { key: 'contactName', label: 'Contact Name' },
//     { key: 'companyType', label: 'Type' },
//     { key: 'companyEmail', label: 'Email' },
//     { key: 'companyCity', label: 'City' },
//     { key: 'companyState', label: 'State' },
//     { key: 'createdAt', label: 'Created Date' },
//     { key: 'actions', label: 'Actions' }
//   ];

//   const requirementsColumns = [
//     { key: 'checkbox', label: '', render: (_, item) => (
//       <input 
//         type="checkbox" 
//         checked={selectedItems.includes(item._id)}
//         onChange={() => toggleItemSelection(item._id)}
//       />
//     )},
//     { key: 'companyName', label: 'Company Name' },
//     { key: 'product', label: 'Product' },
//     { key: 'teamSize', label: 'Team Size' },
//     { key: 'categoryType', label: 'Category' },
//     { key: 'companyCity', label: 'City' },
//     { key: 'companyState', label: 'State' },
//     { key: 'companyPincode', label: 'Pincode' },
//     { key: 'createdAt', label: 'Created Date' },
//     { key: 'actions', label: 'Actions' }
//   ];

//   const manpowerColumns = [
//     { key: 'checkbox', label: '', render: (_, item) => (
//       <input 
//         type="checkbox" 
//         checked={selectedItems.includes(item._id)}
//         onChange={() => toggleItemSelection(item._id)}
//       />
//     )},
//     { key: 'designation', label: 'Designation' },
//     { key: 'noOfPositions', label: 'Positions' },
//     { key: 'experience', label: 'Experience' },
//     { key: 'location', label: 'Location' },
//     { key: 'createdAt', label: 'Created Date' },
//     { key: 'actions', label: 'Actions' }
//   ];

//   // Render table cell content
//   const renderTableCell = (item, column) => {
//     if (column.key === 'checkbox') {
//       return column.render(null, item);
//     }

//     if (column.key === 'actions') {
//       return (
//         <div className={styles.actionButtons}>
//           {managementTab === 'active' ? (
//             <>
//               <button
//                 className={styles.hideBtn}
//                 onClick={() => handleHide(item._id)}
//                 title="Hide"
//               >
//                 <FaEyeSlash />
//               </button>
//               <button
//                 className={styles.deleteBtn}
//                 onClick={() => handleDelete(item._id)}
//                 title="Delete"
//               >
//                 <FaTrash />
//               </button>
//             </>
//           ) : managementTab === 'hidden' ? (
//             <button
//               className={styles.unhideBtn}
//               onClick={() => handleUnhide(item._id)}
//               title="Unhide"
//             >
//               <FaEye />
//             </button>
//           ) : managementTab === 'deleted' ? (
//             <button
//               className={styles.undeleteBtn}
//               onClick={() => handleUndelete(item._id)}
//               title="Undelete"
//             >
//               <FaUndo />
//             </button>
//           ) : null}
//         </div>
//       );
//     }

//     if (column.key === 'createdAt') {
//       return item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A';
//     }

//     if (column.render) {
//       return column.render(item[column.key], item);
//     }

//     return item[column.key] || 'N/A';
//   };

//   // Render email modal
//   const renderEmailModal = () => {
//     if (!emailModalOpen) return null;

//     return (
//       <div className={styles.modalOverlay}>
//         <div className={styles.emailModal}>
//           <div className={styles.modalHeader}>
//             <h3>Send Email to Selected Items</h3>
//             <button 
//               className={styles.closeModalBtn}
//               onClick={() => {
//                 setEmailModalOpen(false);
//                 setEmailData({
//                   subject: '',
//                   message: '',
//                   isSending: false,
//                   sendError: null,
//                   sendSuccess: false
//                 });
//               }}
//             >
//               <FaTimes />
//             </button>
//           </div>
          
//           <div className={styles.modalBody}>
//             {emailData.sendSuccess ? (
//               <div className={styles.successMessage}>
//                 <FaCheck /> Emails sent successfully!
//               </div>
//             ) : (
//               <>
//          {emailData.sendError && (
//   <div className={styles.errorMessage}>
//     <h4>Email Sending Failed</h4>
//     <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
//       {emailData.sendError}
//     </div>
    
//     <div style={{ marginTop: '15px' }}>
//       <h5>Required Fields:</h5>
//       <ul>
//         <li><code>companyEmail</code></li>
//         <li><code>userEmail</code></li>
//         <li><code>email</code></li>
//         <li><code>contactEmail</code></li>
//         <li><code>contact.email</code></li>
//       </ul>
      
//       <button 
//         onClick={() => console.log('Current data:', {
//           agencyData,
//           businessData,
//           requirementsData,
//           manpowerData,
//           selectedItems
//         })}
//         style={{ marginTop: '10px' }}
//       >
//         Debug: Log All Data
//       </button>
//     </div>
//   </div>
// )}
                
//                 <div className={styles.formGroup}>
//                   <label>Subject:</label>
//                   <input
//                     type="text"
//                     value={emailData.subject}
//                     onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
//                     placeholder="Email subject"
//                   />
//                 </div>
                
//                 <div className={styles.formGroup}>
//                   <label>Message:</label>
//                   <textarea
//                     value={emailData.message}
//                     onChange={(e) => setEmailData({...emailData, message: e.target.value})}
//                     placeholder="Your email message"
//                     rows={6}
//                   />
//                 </div>
                
//                 <div className={styles.modalActions}>
//                   <button
//                     className={styles.sendButton}
//                     onClick={handleSendBulkEmail}
//                     disabled={emailData.isSending || !emailData.subject || !emailData.message}
//                   >
//                     {emailData.isSending ? (
//                       <>
//                         <FaSpinner className={styles.spinner} /> Sending...
//                       </>
//                     ) : (
//                       <>
//                         <FaEnvelopeOpen /> Send Email
//                       </>
//                     )}
//                   </button>
//                   <button
//                     className={styles.cancelButton}
//                     onClick={() => setEmailModalOpen(false)}
//                     disabled={emailData.isSending}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };



//     // Render date filter dropdown
//   const renderDateFilter = () => {
//     const daysOptions = [
//       { value: '0-5', label: 'Last 0-5 days' },
//       { value: '6-15', label: 'Last 6-15 days' },
//       { value: '16-30', label: 'Last 16-30 days' },
//       { value: '31-60', label: 'Last 31-60 days' },
//       { value: '61-90', label: 'Last 61-90 days' }
//     ];

//     const months = Array.from({ length: 12 }, (_, i) => ({
//       value: i + 1,
//       label: new Date(0, i).toLocaleString('default', { month: 'long' })
//     }));

//     const currentYear = new Date().getFullYear();
//     const years = Array.from({ length: 5 }, (_, i) => ({
//       value: currentYear - i,
//       label: (currentYear - i).toString()
//     }));

//     return (
//       <div className={styles.dateFilterDropdown}>
//         <div className={styles.dateFilterHeader}>
//           <h4>Filter by Date</h4>
//           <button 
//             className={styles.closeFilterBtn}
//             onClick={() => setShowDateFilter(false)}
//           >
//             <FaTimes />
//           </button>
//         </div>
        
//         <div className={styles.dateFilterOptions}>
//           <div className={styles.dateFilterOption}>
//             <input
//               type="radio"
//               id="allDates"
//               name="dateRange"
//               value="all"
//               checked={dateFilter.range === 'all'}
//               onChange={() => setDateFilter({...dateFilter, range: 'all'})}
//             />
//             <label htmlFor="allDates">All Dates</label>
//           </div>
          
//           <div className={styles.dateFilterOption}>
//             <input
//               type="radio"
//               id="today"
//               name="dateRange"
//               value="today"
//               checked={dateFilter.range === 'today'}
//               onChange={() => setDateFilter({...dateFilter, range: 'today'})}
//             />
//             <label htmlFor="today">Today</label>
//           </div>
          
//           <div className={styles.dateFilterOption}>
//             <input
//               type="radio"
//               id="yesterday"
//               name="dateRange"
//               value="yesterday"
//               checked={dateFilter.range === 'yesterday'}
//               onChange={() => setDateFilter({...dateFilter, range: 'yesterday'})}
//             />
//             <label htmlFor="yesterday">Yesterday</label>
//           </div>
          
//           <div className={styles.dateFilterOption}>
//             <input
//               type="radio"
//               id="days"
//               name="dateRange"
//               value="days"
//               checked={dateFilter.range === 'days'}
//               onChange={() => setDateFilter({...dateFilter, range: 'days'})}
//             />
//             <label htmlFor="days">Last</label>
//             <select
//               value={dateFilter.days}
//               onChange={(e) => setDateFilter({...dateFilter, days: e.target.value})}
//               disabled={dateFilter.range !== 'days'}
//             >
//               {daysOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className={styles.dateFilterOption}>
//             <input
//               type="radio"
//               id="month"
//               name="dateRange"
//               value="month"
//               checked={dateFilter.range === 'month'}
//               onChange={() => setDateFilter({...dateFilter, range: 'month'})}
//             />
//             <label htmlFor="month">Month</label>
//             <select
//               value={dateFilter.month}
//               onChange={(e) => setDateFilter({...dateFilter, month: e.target.value})}
//               disabled={dateFilter.range !== 'month'}
//             >
//               {months.map(month => (
//                 <option key={month.value} value={month.value}>{month.label}</option>
//               ))}
//             </select>
//             <select
//               value={dateFilter.year}
//               onChange={(e) => setDateFilter({...dateFilter, year: e.target.value})}
//               disabled={dateFilter.range !== 'month'}
//             >
//               {years.map(year => (
//                 <option key={year.value} value={year.value}>{year.label}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className={styles.dateFilterOption}>
//             <input
//               type="radio"
//               id="year"
//               name="dateRange"
//               value="year"
//               checked={dateFilter.range === 'year'}
//               onChange={() => setDateFilter({...dateFilter, range: 'year'})}
//             />
//             <label htmlFor="year">Year</label>
//             <select
//               value={dateFilter.year}
//               onChange={(e) => setDateFilter({...dateFilter, year: e.target.value})}
//               disabled={dateFilter.range !== 'year'}
//             >
//               {years.map(year => (
//                 <option key={year.value} value={year.value}>{year.label}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className={styles.dateFilterOption}>
//             <input
//               type="radio"
//               id="custom"
//               name="dateRange"
//               value="custom"
//               checked={dateFilter.range === 'custom'}
//               onChange={() => setDateFilter({...dateFilter, range: 'custom'})}
//             />
//             <label htmlFor="custom">Custom Range</label>
//             <input
//               type="date"
//               value={dateFilter.startDate}
//               onChange={(e) => setDateFilter({...dateFilter, startDate: e.target.value})}
//               disabled={dateFilter.range !== 'custom'}
//             />
//             <span>to</span>
//             <input
//               type="date"
//               value={dateFilter.endDate}
//               onChange={(e) => setDateFilter({...dateFilter, endDate: e.target.value})}
//               disabled={dateFilter.range !== 'custom'}
//             />
//           </div>
//         </div>
        
//         <div className={styles.dateFilterActions}>
//           <button 
//             className={styles.applyFilterBtn}
//             onClick={() => {
//               setShowDateFilter(false);
//               // Trigger a re-filter of the data
//               if (search) {
//                 performSearch(search, searchField);
//               }
//             }}
//           >
//             Apply Filter
//           </button>
//           <button 
//             className={styles.resetFilterBtn}
//             onClick={() => {
//               setDateFilter({
//                 range: 'all',
//                 startDate: '',
//                 endDate: '',
//                 days: '0-5',
//                 month: new Date().getMonth() + 1,
//                 year: new Date().getFullYear()
//               });
//               setShowDateFilter(false);
//               if (search) {
//                 performSearch(search, searchField);
//               }
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     );
//   };
//   // Render data table
//   const renderTable = (columns) => {
//     const currentData = searchResults.length > 0 ? searchResults : getFilteredData();

//     const getCount = (status) => {
//       if (activeTab === 'agency') {
//         if (status === 'active') return agencyData.filter(item => !hiddenIds[item._id] && !removedIds[item._id]).length;
//         if (status === 'hidden') return agencyData.filter(item => hiddenIds[item._id] && !removedIds[item._id]).length;
//         if (status === 'deleted') return agencyData.filter(item => removedIds[item._id]).length;
//       } else if (activeTab === 'business') {
//         if (status === 'active') return businessData.filter(item => !hiddenBusinessIds[item._id] && !removedBusinessIds[item._id]).length;
//         if (status === 'hidden') return businessData.filter(item => hiddenBusinessIds[item._id] && !removedBusinessIds[item._id]).length;
//         if (status === 'deleted') return businessData.filter(item => removedBusinessIds[item._id]).length;
//       } else if (activeTab === 'requirements') {
//         if (status === 'active') return requirementsData.filter(item => !hiddenRequirementIds[item._id] && !removedRequirementIds[item._id]).length;
//         if (status === 'hidden') return requirementsData.filter(item => hiddenRequirementIds[item._id] && !removedRequirementIds[item._id]).length;
//         if (status === 'deleted') return requirementsData.filter(item => removedRequirementIds[item._id]).length;
//       } else if (activeTab === 'manpower') {
//         if (status === 'active') return manpowerData.filter(item => !hiddenManpowerIds[item._id] && !removedManpowerIds[item._id]).length;
//         if (status === 'hidden') return manpowerData.filter(item => hiddenManpowerIds[item._id] && !removedManpowerIds[item._id]).length;
//         if (status === 'deleted') return manpowerData.filter(item => removedManpowerIds[item._id]).length;
//       }
//       return 0;
//     };

//     return (
//       <div className={styles.tableContainer}>
//         <div className={styles.managementTabs}>
//           <button
//             className={`${styles.managementTab} ${managementTab === 'active' ? styles.activeManagementTab : ''}`}
//             onClick={() => setManagementTab('active')}
//           >
//             Active ({getCount('active')})
//           </button>
//           <button
//             className={`${styles.managementTab} ${managementTab === 'hidden' ? styles.activeManagementTab : ''}`}
//             onClick={() => setManagementTab('hidden')}
//           >
//             Hidden ({getCount('hidden')})
//           </button>
//           <button
//             className={`${styles.managementTab} ${managementTab === 'deleted' ? styles.activeManagementTab : ''}`}
//             onClick={() => setManagementTab('deleted')}
//           >
//             Deleted ({getCount('deleted')})
//           </button>
          
//           <div className={styles.dateFilterContainer}>
//             <button 
//               className={styles.dateFilterButton}
//               onClick={() => setShowDateFilter(!showDateFilter)}
//             >
//               <FaFilter /> Date Filter
//             </button>
//             {showDateFilter && renderDateFilter()}
//             {dateFilter.range !== 'all' && (
//               <span className={styles.activeFilterBadge}>
//                 {dateFilter.range === 'today' && 'Today'}
//                 {dateFilter.range === 'yesterday' && 'Yesterday'}
//                 {dateFilter.range === 'days' && `Last ${dateFilter.days} days`}
//                 {dateFilter.range === 'month' && 
//                   `${months.find(m => m.value === parseInt(dateFilter.month))?.label} ${dateFilter.year}`}
//                 {dateFilter.range === 'year' && `Year ${dateFilter.year}`}
//                 {dateFilter.range === 'custom' && 
//                   `${dateFilter.startDate} to ${dateFilter.endDate}`}
//                 <button 
//                   className={styles.clearActiveFilter}
//                   onClick={() => setDateFilter({
//                     range: 'all',
//                     startDate: '',
//                     endDate: '',
//                     days: '0-5',
//                     month: new Date().getMonth() + 1,
//                     year: new Date().getFullYear()
//                   })}
//                 >
//                   <FaTimes />
//                 </button>
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Bulk actions toolbar */}
//         {selectedItems.length > 0 && (
//           <div className={styles.bulkActionsToolbar}>
//             <div className={styles.bulkActionsInfo}>
//               <FaCheckSquare /> {selectedItems.length} item(s) selected
//             </div>
//             <div className={styles.bulkActionButtons}>
//               <button
//                 className={styles.bulkEmailButton}
//                 onClick={() => setEmailModalOpen(true)}
//               >
//                 <FaEnvelope /> Send Email
//               </button>
//               <button
//                 className={styles.bulkHideButton}
//                 onClick={() => {
//                   selectedItems.forEach(id => {
//                     if (activeTab === 'agency') markHiddenId(id);
//                     else if (activeTab === 'business') markHiddenBusinessId(id);
//                     else if (activeTab === 'requirements') markHiddenRequirementId(id);
//                     else if (activeTab === 'manpower') markHiddenManpowerId(id);
//                   });
//                   setSelectedItems([]);
//                   setSelectAll(false);
//                 }}
//               >
//                 <FaEyeSlash /> Hide Selected
//               </button>
//               <button
//                 className={styles.bulkDeleteButton}
//                 onClick={() => {
//                   selectedItems.forEach(id => {
//                     if (activeTab === 'agency') markRemovedId(id);
//                     else if (activeTab === 'business') markRemovedBusinessId(id);
//                     else if (activeTab === 'requirements') markRemovedRequirementId(id);
//                     else if (activeTab === 'manpower') markRemovedManpowerId(id);
//                   });
//                   setSelectedItems([]);
//                   setSelectAll(false);
//                 }}
//               >
//                 <FaTrash /> Delete Selected
//               </button>
//               <button
//                 className={styles.clearSelectionButton}
//                 onClick={() => {
//                   setSelectedItems([]);
//                   setSelectAll(false);
//                 }}
//               >
//                 <FaTimes /> Clear Selection
//               </button>
//             </div>
//           </div>
//         )}

//         <table className={styles.dataTable}>
//           <thead >
//             <tr>
//               {columns.map((column) => (
//                 <th key={column.key} onClick={() => column.key !== 'checkbox' && requestSort(column.key)}>
//                   <div className={styles.columnHeader}>
                    
//                     {column.key === 'checkbox' ? (
//                       <input 
//                         type="checkbox" 
//                         checked={selectAll}
//                         onChange={toggleSelectAll}
//                       />
//                     ) : (
//                       <>
//                         {column.label}
//                         {sortConfig.key === column.key && (
//                           <span className={styles.sortIcon}>
//                             {sortConfig.direction === 'asc' ? <FaChevronUp /> : <FaChevronDown />}
//                           </span>
//                         )}
//                       </>
//                     )}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.length > 0 ? (
//               currentData.map((item) => (
//                 <>
//                 <tr key={item._id} className={selectedItems.includes(item._id) ? styles.selectedRow : ''}>
//                   {columns.map((column) => (
//                     <td key={`${item._id}-${column.key}`}>
//                       {renderTableCell(item, column)}
//                     </td>
//                   ))}
//                 </tr>
//                 </>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={columns.length} className={styles.noData}>
//                   {searchResults.length > 0 ? 'No search results found' : `No ${managementTab} records found`}
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   // Render insights dashboard
//   const renderInsightsDashboard = () => {
//     if (loading) {
//       return (
//         <div className={styles.loadingState}>
//           <FaSpinner className={styles.spinner} />
//           <p>Loading insights...</p>
//         </div>
//       );
//     }

//     if (error) {
//       return <div className={styles.errorState}>{error}</div>;
//     }

//     const data = getFilteredInsights();
//     const totalItems = data.agencies + data.businesses + data.requirements + data.manpower;
//     const colors = ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'];

//     return (
//       <div className={styles.insightsContainer}>
//         <div className={styles.insightsHeader}>
//           <h2>Advanced Dashboard</h2>
//           <div className={styles.dateFilter}>
//             <FaCalendarAlt className={styles.filterIcon} />
//             <select 
//               value={dateRange}
//               onChange={(e) => setDateRange(e.target.value)}
//               className={styles.filterSelect}
//             >
//               <option value="all">All Time</option>
//               <option value="month">This Month</option>
//               <option value="quarter">Last Quarter</option>
//               <option value="year">This Year</option>
//             </select>
//           </div> 
//         </div>

//         <div className={styles.summaryCards}>
//           <div className={styles.summaryCard}>
//             <div className={styles.cardIcon} style={{ backgroundColor: colors[0] }}>
//               <FaUser />
//             </div>
//             <div className={styles.cardContent}>
//               <h3>Agencies</h3>
//               <p>{data.agencies}</p>
//               <small>{totalItems > 0 ? Math.round((data.agencies / totalItems) * 100) : 0}% of total</small>
//             </div>
//           </div>

//           <div className={styles.summaryCard}>
//             <div className={styles.cardIcon} style={{ backgroundColor: colors[1] }}>
//               <FaBuilding />
//             </div>
//             <div className={styles.cardContent}>
//               <h3>Businesses</h3>
//               <p>{data.businesses}</p>
//               <small>{totalItems > 0 ? Math.round((data.businesses / totalItems) * 100) : 0}% of total</small>
//             </div>
//           </div>

//           <div className={styles.summaryCard}>
//             <div className={styles.cardIcon} style={{ backgroundColor: colors[2] }}>
//               <FaList />
//             </div>
//             <div className={styles.cardContent}>
//               <h3>Requirements</h3>
//               <p>{data.requirements}</p>
//               <small>{totalItems > 0 ? Math.round((data.requirements / totalItems) * 100) : 0}% of total</small>
//             </div>
//           </div>

//           <div className={styles.summaryCard}>
//             <div className={styles.cardIcon} style={{ backgroundColor: colors[3] }}>
//               <FaUser />
//             </div>
//             <div className={styles.cardContent}>
//               <h3>Manpower</h3>
//               <p>{data.manpower}</p>
//               <small>{totalItems > 0 ? Math.round((data.manpower / totalItems) * 100) : 0}% of total</small>
//             </div>
//           </div>
//         </div>

//         <div className={styles.chartContainer}>
//           <div className={styles.pieChart}>
//             <h3>Data Distribution</h3>
//             <div className={styles.pieChartVisual}>
//               {totalItems > 0 ? (
//                 colors.map((color, index) => {
//                   const value = [
//                     data.agencies,
//                     data.businesses,
//                     data.requirements,
//                     data.manpower
//                   ][index];
//                   const percentage = (value / totalItems) * 360;
//                   const rotation = colors.slice(0, index).reduce((acc, _, i) => {
//                     const val = [
//                       data.agencies,
//                       data.businesses,
//                       data.requirements,
//                       data.manpower
//                     ][i];
//                     return acc + (val / totalItems) * 360;
//                   }, 0);
                  
//                   return (
//                     <div 
//                       key={index}
//                       className={styles.pieSegment}
//                       style={{
//                         backgroundColor: color,
//                         transform: `rotate(${rotation}deg)`,
//                         clipPath: percentage >= 180 ? 
//                           `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${50 + Math.sin((percentage - 180) * Math.PI / 180) * 50}% ${50 - Math.cos((percentage - 180) * Math.PI / 180) * 50}%)` :
//                           `polygon(50% 50%, 50% 0%, ${50 + Math.sin(percentage * Math.PI / 180) * 50}% ${50 - Math.cos(percentage * Math.PI / 180) * 50}%)`
//                       }}
//                     ></div>
//                   );
//                 })
//               ) : (
//                 <div className={styles.noDataPie}>No data available</div>
//               )}
//             </div>
//             <div className={styles.pieLegend}>
//               {colors.map((color, index) => {
//                 const label = ['Agencies', 'Businesses', 'Requirements', 'Manpower'][index];
//                 const value = [
//                   data.agencies,
//                   data.businesses,
//                   data.requirements,
//                   data.manpower
//                 ][index];
//                 return (
//                   <div key={index} className={styles.legendItem}>
//                     <span className={styles.legendColor} style={{ backgroundColor: color }}></span>
//                     <span>{label}: {value}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Helper functions
//   const getSearchFields = () => {
//     switch (activeTab) {
//       case 'agency': return agencySearchFields;
//       case 'business': return businessSearchFields;
//       case 'requirements': return requirementsSearchFields;
//       case 'manpower': return manpowerSearchFields;
//       default: return [];
//     }
//   };

//   const getPlaceholderText = () => {
//     switch (activeTab) {
//       case 'agency': return 'Search agencies...';
//       case 'business': return 'Search businesses...';
//       case 'requirements': return 'Search requirements...';
//       case 'manpower': return 'Search manpower...';
//       default: return 'Search...';
//     }
//   };

//   // const navigateToCreatePage = (type) => {
//   //   switch (type) {
//   //     case 'agency':
//   //       navigate('/DashboardTabs');
//   //       break;
//   //     case 'business':
//   //       navigate('/Admincreate');
//   //       break;
//   //     case 'requirements':
//   //       navigate('/Admincreate');
//   //       break;
//   //     case 'manpower':
//   //       navigate('/Admincreate');
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   // };

//   const navigateToCreatePage = (type) => {
//   navigate('/Admincreate', {
//     state: {
//       defaultTab: type === 'agency' ? 'agency' :
//                 type === 'business' ? 'addBusiness' :
//                 type === 'requirements' ? 'postRequirement' :
//                 'addManpower'
//     }
//   });
// };

//   return (
//     <div className={styles.dashboardContainer}>
//       <div className={styles.sidebar}>
//         <div className={styles.sidebarHeader}><h2>StatusHub</h2></div>
//         <nav className={styles.navMenu}>
//           <button 
//             className={`${styles.tabButton} ${activeTab === 'agency' ? styles.activeTab : ''}`}
//             onClick={() => {
//               setActiveTab('agency');
//               setManagementTab('active');
//               setSearch('');
//               setSearchField('companyName');
//               setSearchResults([]);
//             }}
//           >
//             <FaUser className={styles.tabIcon} /> Agencies
//           </button>
//           <button 
//             className={`${styles.tabButton} ${activeTab === 'business' ? styles.activeTab : ''}`}
//             onClick={() => {
//               setActiveTab('business');
//               setManagementTab('active');
//               setSearch('');
//               setSearchField('companyName');
//               setSearchResults([]);
//             }}
//           >
//             <FaBuilding className={styles.tabIcon} /> Businesses
//           </button>
//           <button 
//             className={`${styles.tabButton} ${activeTab === 'requirements' ? styles.activeTab : ''}`}
//             onClick={() => {
//               setActiveTab('requirements');
//               setManagementTab('active');
//               setSearch('');
//               setSearchField('companyName');
//               setSearchResults([]);
//             }}
//           >
//             <FaList className={styles.tabIcon} /> Requirements
//           </button>
//           <button 
//             className={`${styles.tabButton} ${activeTab === 'manpower' ? styles.activeTab : ''}`}
//             onClick={() => {
//               setActiveTab('manpower');
//               setManagementTab('active');
//               setSearch('');
//               setSearchField('designation');
//               setSearchResults([]);
//             }}
//           >
//             <FaUser className={styles.tabIcon} /> Add Post
//           </button>
//           <button 
//             className={`${styles.tabButton} ${activeTab === 'insights' ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab('insights')}
//           >
//             <FaChartPie className={styles.tabIcon} /> Advance
//           </button>
//         </nav>
//         <div className={styles.sidebarFooter}><p>© 2025 StatusHub</p></div>
//       </div>

//       <main className={styles.content}>
//         {activeTab === 'addBusiness' ? (
//           <>
//             <header className={styles.contentHeader}>
//               <h1>Add New Business</h1>
//             </header>
//             <section className={styles.contentBody}>
//               <BusniesForm onSave={handleSave} validationErrors={validationErrors} />
//               <div className={styles.submitContainer}>
//                 <button
//                   className={styles.submitButton}
//                   onClick={handleSubmit} 
//                   disabled={isSubmitting || !isSaved}
//                 >
//                   {isSubmitting ? <FaSpinner className={styles.spinnerIcon} /> : 'Submit'}
//                 </button>
//               </div>
//             </section>
//           </>
//         ) : activeTab === 'insights' ? (
//           renderInsightsDashboard()
//         ) : (
//           <>
//             <header className={styles.contentHeader}>
//               <h1>
//                 {activeTab === 'agency' ? 'Agency' : 
//                  activeTab === 'business' ? 'Business' : 
//                  activeTab === 'requirements' ? 'Requirements' : 
//                  'Manpower'} Dashboard
//               </h1>
//               <div className={styles.headerActions}>
//                 <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
//                   <select 
//                     value={searchField} 
//                     onChange={(e) => setSearchField(e.target.value)}
//                     className={styles.searchSelect}
//                   >
//                     {getSearchFields().map(field => (
//                       <option key={field.value} value={field.value}>{field.label}</option>
//                     ))}
//                   </select>
//                   <input
//                     type="text"
//                     placeholder={getPlaceholderText()}
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className={styles.searchInput}
//                   />
//                   <button type="submit" className={styles.searchButton}>
//                     <FaSearch /> Search
//                   </button>
//                   {search && (
//                     <button 
//                       type="button" 
//                       className={styles.clearSearchButton}
//                       onClick={handleClearSearch}
//                     >
//                       Clear
//                     </button>
//                   )}
//                 </form>
//                 <button 
//                   className={styles.createButton}
//                   onClick={() => navigateToCreatePage(activeTab)}
//                 >
//                   <FaPlus /> Create New
//                 </button>
//                 <button 
//                   className={styles.exportButton}
//                   onClick={exportToExcel}
//                   title="Export to Excel"
//                 >
//                   <FaFilePdf /> Export Excel
//                 </button>
//               </div>
//             </header>

//             <section className={styles.contentBody}>
//               {error ? (
//                 <div className={styles.errorState}>{error}</div>
//               ) : loading ? (
//                 <div className={styles.loadingState}>
//                   <FaSpinner className={styles.spinner} />
//                   <p>Loading...</p>
//                 </div>
//               ) : (
//                 renderTable(
//                   activeTab === 'agency' ? agencyColumns :
//                   activeTab === 'business' ? businessColumns :
//                   activeTab === 'requirements' ? requirementsColumns :
//                   manpowerColumns
//                 )
//               )}
//             </section>
//           </>
//         )}
//         {renderEmailModal()}
//       </main>
//     </div>
//   );
// };

// export default DashboardPage;









// 02-08-25
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  FaUser, FaSearch, FaBuilding, FaMapMarkerAlt, 
  FaEnvelope, FaPhone, FaCity, FaMapPin, FaFilePdf,
  FaEyeSlash, FaTrash, FaPlus, FaList, FaCheck, FaSpinner,
  FaEdit, FaTimes, FaChevronUp, FaChevronDown, FaEye, FaUndo,
  FaChartPie, FaCalendarAlt, FaFilter, FaEnvelopeOpen, FaCheckSquare
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import styles from './StatusDashboard.module.css';
import BusniesForm from '../BusniesForm/BusniesForm';
import * as XLSX from 'xlsx';

import {
  useSyncHiddenRemoved,
  markHiddenId, markRemovedId,
  markHiddenBusinessId, markRemovedBusinessId,
  markHiddenRequirementId, markRemovedRequirementId,
  markHiddenManpowerId, markRemovedManpowerId,
  unmarkHiddenId, unmarkRemovedId,
  unmarkHiddenBusinessId, unmarkRemovedBusinessId,
  unmarkHiddenRequirementId, unmarkRemovedRequirementId,
  unmarkHiddenManpowerId, unmarkRemovedManpowerId
} from "../../utils/dashboardState";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const DashboardPage = () => {
  // State management
  const [activeTab, setActiveTab] = useState('agency');
  const [managementTab, setManagementTab] = useState('active');
  const [search, setSearch] = useState('');
  const [searchField, setSearchField] = useState('companyName');
  const [agencyData, setAgencyData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [requirementsData, setRequirementsData] = useState([]);
  const [manpowerData, setManpowerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [insightsData, setInsightsData] = useState({
    agencies: 0,
    businesses: 0,
    requirements: 0,
    manpower: 0,
    monthlyTrends: Array(12).fill().map((_, i) => ({
      month: new Date(0, i).toLocaleString('default', { month: 'short' }),
      agencies: 0,
      businesses: 0,
      requirements: 0,
      manpower: 0
    })),
    yearlyTrends: []
  });
  const [dateRange, setDateRange] = useState('all');
  const [searchResults, setSearchResults] = useState([]);
  const [totalManpower, setTotalManpower] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    subject: '',
    message: '',
    isSending: false,
    sendError: null,
    sendSuccess: false
  });
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [dateFilter, setDateFilter] = useState({
    range: 'all',
    startDate: '',
    endDate: '',
    days: '0-5',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  });
  
  const { hiddenIds, removedIds } = useSyncHiddenRemoved('agency');
  const { hiddenIds: hiddenBusinessIds, removedIds: removedBusinessIds } = useSyncHiddenRemoved('business');
  const { hiddenIds: hiddenRequirementIds, removedIds: removedRequirementIds } = useSyncHiddenRemoved('requirement');
  const { hiddenIds: hiddenManpowerIds, removedIds: removedManpowerIds } = useSyncHiddenRemoved('manpower');
  
  const navigate = useNavigate();

  // Search fields configuration
  const agencySearchFields = [
    { value: 'companyName', label: 'Company Name' },
    { value: 'contactName', label: 'Contact Name' },
    { value: 'categoryType', label: 'Category' },
    { value: 'companyPhone', label: 'Phone' },
    { value: 'companyCity', label: 'City' },
    { value: 'companyState', label: 'State' }
  ];

  const businessSearchFields = [
    { value: 'companyName', label: 'Company Name' },
    { value: 'contactName', label: 'Contact Name' },
    { value: 'companyType', label: 'Type' },
    { value: 'companyEmail', label: 'Email' },
    { value: 'companyCity', label: 'City' },
    { value: 'companyState', label: 'State' }
  ];

  const requirementsSearchFields = [
    { value: 'companyName', label: 'Company Name' },
    { value: 'product', label: 'Product' },
    { value: 'categoryType', label: 'Category' },
    { value: 'companyCity', label: 'City' }
  ];

  const manpowerSearchFields = [
    { value: 'designation', label: 'Designation' },
    { value: 'location', label: 'Location' },
    { value: 'experience', label: 'Experience' }
  ];

  // Helper functions
  const handleSendBulkEmail = async () => {
    if (selectedItems.length === 0) {
      setEmailData({ ...emailData, sendError: "Please select items first" });
      return;
    }

    setEmailData({ ...emailData, isSending: true, sendError: null });

    try {
      const currentData = 
        activeTab === 'agency' ? agencyData :
        activeTab === 'business' ? businessData :
        activeTab === 'requirements' ? requirementsData :
        manpowerData;

      if (!currentData || currentData.length === 0) {
        throw new Error("No data available");
      }

      const emailResults = selectedItems.map(id => {
        const item = currentData.find(i => i._id === id);
        if (!item) {
          return { id, status: "not_found" };
        }

        const emailFields = ['userEmail', 'companyEmail', 'email', 'contactEmail'];
        const email = emailFields.reduce((found, field) => 
          found || (item[field] && item[field].includes('@') ? item[field] : null), 
          null
        );

        if (!email) {
          return { 
            id, 
            status: "no_email",
            availableFields: Object.keys(item).filter(k => k.toLowerCase().includes('email'))
          };
        }

        return { id, status: "valid", email: email.trim() };
      });

      const validEmails = emailResults
        .filter(result => result.status === "valid")
        .map(result => result.email);

      if (validEmails.length === 0) {
        throw new Error(
          `No valid emails found in selected items.\n` +
          `Debug info:\n${JSON.stringify(emailResults, null, 2)}`
        );
      }

      const response = await axios.post(`${API_URL}/api/send-bulk-email`, {
        emails: [...new Set(validEmails)],
        subject: emailData.subject,
        message: emailData.message
      });

      setEmailData({
        isSending: false,
        sendSuccess: true,
        sendError: null,
        subject: '',
        message: ''
      });
      setSelectedItems([]);

    } catch (err) {
      console.error("Email sending failed:", err);
      setEmailData({
        ...emailData,
        isSending: false,
        sendError: err.response?.data?.message || err.message
      });
    }
  };

  const toggleItemSelection = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    const currentData = searchResults.length > 0 ? searchResults : getFilteredData();
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentData.map(item => item._id));
    }
    setSelectAll(!selectAll);
  };

  const exportToExcel = () => {
    let dataToExport = [];
    let fileName = '';

    switch(activeTab) {
      case 'agency':
        dataToExport = agencyData;
        fileName = 'Agencies_Data.xlsx';
        break;
      case 'business':
        dataToExport = businessData;
        fileName = 'Businesses_Data.xlsx';
        break;
      case 'requirements':
        dataToExport = requirementsData;
        fileName = 'Requirements_Data.xlsx';
        break;
      case 'manpower':
        dataToExport = manpowerData;
        fileName = 'Manpower_Data.xlsx';
        break;
      default:
        return;
    }

    const exportData = dataToExport.map(item => {
      const newItem = {...item};
      delete newItem._id;
      return newItem;
    });

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, fileName);
  };

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: new Date(0, i).toLocaleString('default', { month: 'long' })
  }));

  const filterByDate = (data) => {
    if (dateFilter.range === 'all') return data;
    
    const now = new Date();
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return data.filter(item => {
      const itemDate = item.createdAt ? new Date(item.createdAt) : new Date();
      const daysDiff = Math.floor((currentDate - itemDate) / (1000 * 60 * 60 * 24));
      
      switch(dateFilter.range) {
        case 'today':
          return itemDate.toDateString() === currentDate.toDateString();
        case 'yesterday':
          const yesterday = new Date(currentDate);
          yesterday.setDate(yesterday.getDate() - 1);
          return itemDate.toDateString() === yesterday.toDateString();
        case 'days':
          const [minDays, maxDays] = dateFilter.days.split('-').map(Number);
          return daysDiff >= minDays && daysDiff <= maxDays;
        case 'month':
          return itemDate.getMonth() + 1 === Number(dateFilter.month) && 
                 itemDate.getFullYear() === Number(dateFilter.year);
        case 'year':
          return itemDate.getFullYear() === Number(dateFilter.year);
        case 'custom':
          if (!dateFilter.startDate || !dateFilter.endDate) return true;
          const startDate = new Date(dateFilter.startDate);
          const endDate = new Date(dateFilter.endDate);
          return itemDate >= startDate && itemDate <= endDate;
        default:
          return true;
      }
    });
  };

  const fetchInsightsData = useCallback(async () => {
    try {
      setLoading(true);
      
      const [agenciesRes, businessesRes, requirementsRes, manpowerRes] = await Promise.all([
        axios.get(`${API_URL}/api/dashboard`),
        axios.get(`${API_URL}/api/busnies`),
        axios.get(`${API_URL}/api/all-requirements`),
        axios.get(`${API_URL}/api/manpower/all-records`)
      ]);

      const agenciesCount = agenciesRes.data?.length || 0;
      const businessesCount = businessesRes.data?.length || 
                            businessesRes.data?.data?.length || 
                            businessesRes.data?.result?.length || 0;
      const requirementsCount = requirementsRes.data?.data?.length || 0;
      const manpowerCount = manpowerRes.data?.data?.length || 0;

      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();

      const monthlyTrends = Array(12).fill().map((_, i) => ({
        month: new Date(0, i).toLocaleString('default', { month: 'short' }),
        agencies: i === currentMonth ? agenciesCount : Math.floor(agenciesCount / 12),
        businesses: i === currentMonth ? businessesCount : Math.floor(businessesCount / 12),
        requirements: i === currentMonth ? requirementsCount : Math.floor(requirementsCount / 12),
        manpower: i === currentMonth ? manpowerCount : Math.floor(manpowerCount / 12)
      }));

      const yearlyTrends = Array(5).fill().map((_, i) => ({
        year: currentYear - 4 + i,
        agencies: (currentYear - 4 + i) === currentYear ? agenciesCount : Math.floor(agenciesCount / 5),
        businesses: (currentYear - 4 + i) === currentYear ? businessesCount : Math.floor(businessesCount / 5),
        requirements: (currentYear - 4 + i) === currentYear ? requirementsCount : Math.floor(requirementsCount / 5),
        manpower: (currentYear - 4 + i) === currentYear ? manpowerCount : Math.floor(manpowerCount / 5)
      }));

      setInsightsData({
        agencies: agenciesCount,
        businesses: businessesCount,
        requirements: requirementsCount,
        manpower: manpowerCount,
        monthlyTrends,
        yearlyTrends
      });
    } catch (err) {
      console.error('Error fetching insights:', err);
      setError('Failed to load insights data');
    } finally {
      setLoading(false);
    }
  }, [dateRange]);

  const getFilteredInsights = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    switch(dateRange) {
      case 'month':
        return {
          ...insightsData,
          monthlyTrends: insightsData.monthlyTrends.map((month, i) => ({
            ...month,
            agencies: i === currentMonth ? insightsData.agencies : 0,
            businesses: i === currentMonth ? insightsData.businesses : 0,
            requirements: i === currentMonth ? insightsData.requirements : 0,
            manpower: i === currentMonth ? insightsData.manpower : 0
          }))
        };
      case 'quarter':
        return {
          ...insightsData,
          monthlyTrends: insightsData.monthlyTrends.map((month, i) => {
            const isInQuarter = i >= currentMonth - 2 && i <= currentMonth;
            return {
              ...month,
              agencies: isInQuarter ? Math.round(insightsData.agencies / 3) : 0,
              businesses: isInQuarter ? Math.round(insightsData.businesses / 3) : 0,
              requirements: isInQuarter ? Math.round(insightsData.requirements / 3) : 0,
              manpower: isInQuarter ? Math.round(insightsData.manpower / 3) : 0
            };
          })
        };
      case 'year':
        return {
          ...insightsData,
          yearlyTrends: insightsData.yearlyTrends.map(yearData => ({
            ...yearData,
            agencies: yearData.year === currentYear ? insightsData.agencies : 0,
            businesses: yearData.year === currentYear ? insightsData.businesses : 0,
            requirements: yearData.year === currentYear ? insightsData.requirements : 0,
            manpower: yearData.year === currentYear ? insightsData.manpower : 0
          }))
        };
      default:
        return insightsData;
    }
  };

  const performSearch = useCallback((query, field) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      let results = [];
      const searchTerm = query.toLowerCase();

      switch(activeTab) {
        case 'agency':
          results = agencyData.filter(item => 
            String(item[field]).toLowerCase().includes(searchTerm)
          );
          break;
        case 'business':
          results = businessData.filter(item => 
            String(item[field]).toLowerCase().includes(searchTerm)
          );
          break;
        case 'requirements':
          results = requirementsData.filter(item => 
            String(item[field]).toLowerCase().includes(searchTerm)
          );
          break;
        case 'manpower':
          results = manpowerData.filter(item => 
            String(item[field]).toLowerCase().includes(searchTerm)
          );
          break;
        default:
          break;
      }

      setSearchResults(filterByDate(results));
    } catch (err) {
      console.error('Search error:', err);
      setError('Search failed. Please try again.');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }, [activeTab, agencyData, businessData, requirementsData, manpowerData, dateFilter]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (search) {
        performSearch(search, searchField);
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [search, searchField, performSearch]);

  const fetchAgencyData = useCallback(async () => {
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
      setAgencyData(formattedData);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch agency data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBusinessData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/api/busnies`);
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
  }, []);

  const fetchRequirementsData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_URL}/api/all-requirements`);
      setRequirementsData(res.data.data || []);
    } catch (err) {
      console.error('Error fetching requirements:', err);
      setError('Failed to fetch requirements data.');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchManpowerData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('businessToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const res = await axios.get(`${API_URL}/api/manpower/all-records`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.data.success) {
        setManpowerData(res.data.data || []);
        setTotalManpower(res.data.total || 0);
      } else {
        throw new Error(res.data.message || 'Invalid response format');
      }
    } catch (err) {
      console.error('Manpower fetch error:', err);
      
      if (err.response?.status === 401) {
        localStorage.removeItem('businessToken');
        localStorage.removeItem('businessUser');
        navigate('/login');
        return;
      }
      
      setError(err.response?.data?.error || 
               err.response?.data?.message || 
               err.message || 
               'Failed to fetch manpower data');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (activeTab === 'agency') {
      fetchAgencyData();
    } else if (activeTab === 'business') {
      fetchBusinessData();
    } else if (activeTab === 'requirements') {
      fetchRequirementsData();
    } else if (activeTab === 'manpower') {
      fetchManpowerData();
    } else if (activeTab === 'insights') {
      fetchInsightsData();
    }
  }, [activeTab, fetchAgencyData, fetchBusinessData, fetchRequirementsData, fetchManpowerData, fetchInsightsData]);

  useEffect(() => {
    setSelectedItems([]);
    setSelectAll(false);
  }, [activeTab]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    performSearch(search, searchField);
  };

  const handleClearSearch = () => {
    setSearch('');
    setSearchResults([]);
    setSearchField(activeTab === 'manpower' ? 'designation' : 'companyName');
  };

  const handleHide = (id) => {
    if (activeTab === 'agency') markHiddenId(id);
    else if (activeTab === 'business') markHiddenBusinessId(id);
    else if (activeTab === 'requirements') markHiddenRequirementId(id);
    else if (activeTab === 'manpower') markHiddenManpowerId(id);
  };

  const handleUnhide = (id) => {
    if (activeTab === 'agency') unmarkHiddenId(id);
    else if (activeTab === 'business') unmarkHiddenBusinessId(id);
    else if (activeTab === 'requirements') unmarkHiddenRequirementId(id);
    else if (activeTab === 'manpower') unmarkHiddenManpowerId(id);
  };

  const handleDelete = (id) => {
    if (activeTab === 'agency') markRemovedId(id);
    else if (activeTab === 'business') markRemovedBusinessId(id);
    else if (activeTab === 'requirements') markRemovedRequirementId(id);
    else if (activeTab === 'manpower') markRemovedManpowerId(id);
  };

  const handleUndelete = (id) => {
    if (activeTab === 'agency') unmarkRemovedId(id);
    else if (activeTab === 'business') unmarkRemovedBusinessId(id);
    else if (activeTab === 'requirements') unmarkRemovedRequirementId(id);
    else if (activeTab === 'manpower') unmarkRemovedManpowerId(id);
  };

  const handleSave = (data) => {
    setFormData(data);
    setIsSaved(true);
    setValidationErrors({});
  };

  const handleSubmit = async () => {
    if (!isSaved || !formData) return;

    setIsSubmitting(true);
    setValidationErrors({});
    
    try {
      const response = await axios.post(`${API_URL}/api/busnies`, formData);
      if (response.data.success) {
        setIsSaved(false);
        setFormData(null);
        setActiveTab('business');
        fetchBusinessData();
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setValidationErrors(error.response.data.errors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = (data) => {
    const sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const getFilteredData = () => {
    let data, hIds, rIds;
    
    if (activeTab === 'agency') {
      data = agencyData;
      hIds = hiddenIds;
      rIds = removedIds;
    } else if (activeTab === 'business') {
      data = businessData;
      hIds = hiddenBusinessIds;
      rIds = removedBusinessIds;
    } else if (activeTab === 'requirements') {
      data = requirementsData;
      hIds = hiddenRequirementIds;
      rIds = removedRequirementIds;
    } else if (activeTab === 'manpower') {
      data = manpowerData;
      hIds = hiddenManpowerIds;
      rIds = removedManpowerIds;
    }

    let filteredData = [];
    
    if (managementTab === 'active') {
      filteredData = data.filter(item => !hIds[item._id] && !rIds[item._id]);
    } else if (managementTab === 'hidden') {
      filteredData = data.filter(item => hIds[item._id] && !rIds[item._id]);
    } else if (managementTab === 'deleted') {
      filteredData = data.filter(item => rIds[item._id]);
    }
    
    return sortedData(filterByDate(filteredData));
  };

  const agencyColumns = [
    { key: 'companyName', label: 'Company Name' },
    { key: 'contactName', label: 'Contact Name' },
    { key: 'categoryType', label: 'Category' },
    { key: 'companyPhone', label: 'Phone' },
    { key: 'companyCity', label: 'City' },
    { key: 'companyState', label: 'State' },
    { 
      key: 'createdAt', 
      label: 'Created Date',
      render: (value) => {
        if (!value) return 'N/A';
        const date = new Date(value);
        return date.toLocaleDateString('en-IN');
      }
    },
    { key: 'actions', label: 'Actions' },
    { key: 'checkbox', label: '', render: (_, item) => (
      <input 
        type="checkbox" 
        checked={selectedItems.includes(item._id)}
        onChange={() => toggleItemSelection(item._id)}
      />
    )}
  ];

  const businessColumns = [
   
    { key: 'companyName', label: 'Company Name' },
    { key: 'contactName', label: 'Contact Name' },
    { key: 'companyType', label: 'Type' },
    { key: 'companyEmail', label: 'Email' },
    { key: 'companyCity', label: 'City' },
    { key: 'companyState', label: 'State' },
    { key: 'createdAt', label: 'Created Date' },
    { key: 'actions', label: 'Actions' },
     { key: 'checkbox', label: '', render: (_, item) => (
      <input 
        type="checkbox" 
        checked={selectedItems.includes(item._id)}
        onChange={() => toggleItemSelection(item._id)}
      />
    )}
  ];

  const requirementsColumns = [
   
    { key: 'companyName', label: 'Company Name' },
    { key: 'product', label: 'Product' },
    { key: 'teamSize', label: 'Team Size' },
    { key: 'categoryType', label: 'Category' },
    { key: 'companyCity', label: 'City' },
    { key: 'companyState', label: 'State' },
    { key: 'companyPincode', label: 'Pincode' },
    { key: 'createdAt', label: 'Created Date' },
    { key: 'actions', label: 'Actions' },
     { key: 'checkbox', label: '', render: (_, item) => (
      <input 
        type="checkbox" 
        checked={selectedItems.includes(item._id)}
        onChange={() => toggleItemSelection(item._id)}
      />
    )}
  ];

  const manpowerColumns = [
   
    { key: 'designation', label: 'Designation' },
    { key: 'noOfPositions', label: 'Positions' },
    { key: 'experience', label: 'Experience' },
    { key: 'location', label: 'Location' },
    { key: 'createdAt', label: 'Created Date' },
    { key: 'actions', label: 'Actions' },
     { key: 'checkbox', label: '', render: (_, item) => (
      <input 
        type="checkbox" 
        checked={selectedItems.includes(item._id)}
        onChange={() => toggleItemSelection(item._id)}
      />
    )}
  ];

  const renderTableCell = (item, column) => {
    if (column.key === 'checkbox') {
      return column.render(null, item);
    }

    if (column.key === 'actions') {
      return (
        <div className={styles.actionButtons}>
          {managementTab === 'active' ? (
            <>
              <button
                className={styles.hideBtn}
                onClick={() => handleHide(item._id)}
                title="Hide"
              >
                <FaEyeSlash />
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(item._id)}
                title="Delete"
              >
                <FaTrash />
              </button>
            </>
          ) : managementTab === 'hidden' ? (
            <button
              className={styles.unhideBtn}
              onClick={() => handleUnhide(item._id)}
              title="Unhide"
            >
              <FaEye />
            </button>
          ) : managementTab === 'deleted' ? (
            <button
              className={styles.undeleteBtn}
              onClick={() => handleUndelete(item._id)}
              title="Undelete"
            >
              <FaUndo />
            </button>
          ) : null}
        </div>
      );
    }

    if (column.key === 'createdAt') {
      return item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A';
    }

    if (column.render) {
      return column.render(item[column.key], item);
    }

    return item[column.key] || 'N/A';
  };

  const formatColumnsForDataTable = (columns) => {
    return columns.map(column => {
      if (column.key === 'checkbox') {
        return {
          name: '',
          cell: row => (
            <input 
              type="checkbox" 
              checked={selectedItems.includes(row._id)}
              onChange={() => toggleItemSelection(row._id)}
            />
          ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
          width: '50px'
        };
      }
      
      return {
        name: column.label,
        selector: row => row[column.key],
        sortable: true,
        cell: row => renderTableCell(row, column),
        grow: column.key === 'actions' ? 0.5 : 1
      };
    });
  };

  const renderTable = (columns) => {
    const currentData = searchResults.length > 0 ? searchResults : getFilteredData();
    const formattedColumns = formatColumnsForDataTable(columns);

    const getCount = (status) => {
      if (activeTab === 'agency') {
        if (status === 'active') return agencyData.filter(item => !hiddenIds[item._id] && !removedIds[item._id]).length;
        if (status === 'hidden') return agencyData.filter(item => hiddenIds[item._id] && !removedIds[item._id]).length;
        if (status === 'deleted') return agencyData.filter(item => removedIds[item._id]).length;
      } else if (activeTab === 'business') {
        if (status === 'active') return businessData.filter(item => !hiddenBusinessIds[item._id] && !removedBusinessIds[item._id]).length;
        if (status === 'hidden') return businessData.filter(item => hiddenBusinessIds[item._id] && !removedBusinessIds[item._id]).length;
        if (status === 'deleted') return businessData.filter(item => removedBusinessIds[item._id]).length;
      } else if (activeTab === 'requirements') {
        if (status === 'active') return requirementsData.filter(item => !hiddenRequirementIds[item._id] && !removedRequirementIds[item._id]).length;
        if (status === 'hidden') return requirementsData.filter(item => hiddenRequirementIds[item._id] && !removedRequirementIds[item._id]).length;
        if (status === 'deleted') return requirementsData.filter(item => removedRequirementIds[item._id]).length;
      } else if (activeTab === 'manpower') {
        if (status === 'active') return manpowerData.filter(item => !hiddenManpowerIds[item._id] && !removedManpowerIds[item._id]).length;
        if (status === 'hidden') return manpowerData.filter(item => hiddenManpowerIds[item._id] && !removedManpowerIds[item._id]).length;
        if (status === 'deleted') return manpowerData.filter(item => removedManpowerIds[item._id]).length;
      }
      return 0;
    };

    return (
      <div className={styles.tableContainer}>
        <div className={styles.managementTabs}>
          <button
            className={`${styles.managementTab} ${managementTab === 'active' ? styles.activeManagementTab : ''}`}
            onClick={() => setManagementTab('active')}
          >
            Active ({getCount('active')})
          </button>
          <button
            className={`${styles.managementTab} ${managementTab === 'hidden' ? styles.activeManagementTab : ''}`}
            onClick={() => setManagementTab('hidden')}
          >
            Hidden ({getCount('hidden')})
          </button>
          <button
            className={`${styles.managementTab} ${managementTab === 'deleted' ? styles.activeManagementTab : ''}`}
            onClick={() => setManagementTab('deleted')}
          >
            Deleted ({getCount('deleted')})
          </button>
          
          <div className={styles.dateFilterContainer}>
            <button 
              className={styles.dateFilterButton}
              onClick={() => setShowDateFilter(!showDateFilter)}
            >
              <FaFilter /> Date Filter
            </button>
            {showDateFilter && renderDateFilter()}
            {dateFilter.range !== 'all' && (
              <span className={styles.activeFilterBadge}>
                {dateFilter.range === 'today' && 'Today'}
                {dateFilter.range === 'yesterday' && 'Yesterday'}
                {dateFilter.range === 'days' && `Last ${dateFilter.days} days`}
                {dateFilter.range === 'month' && 
                  `${months.find(m => m.value === parseInt(dateFilter.month))?.label} ${dateFilter.year}`}
                {dateFilter.range === 'year' && `Year ${dateFilter.year}`}
                {dateFilter.range === 'custom' && 
                  `${dateFilter.startDate} to ${dateFilter.endDate}`}
                <button 
                  className={styles.clearActiveFilter}
                  onClick={() => setDateFilter({
                    range: 'all',
                    startDate: '',
                    endDate: '',
                    days: '0-5',
                    month: new Date().getMonth() + 1,
                    year: new Date().getFullYear()
                  })}
                >
                  <FaTimes />
                </button>
              </span>
            )}
          </div>
        </div>

        {selectedItems.length > 0 && (
          <div className={styles.bulkActionsToolbar}>
            <div className={styles.bulkActionsInfo}>
              <FaCheckSquare /> {selectedItems.length} item(s) selected
            </div>
            <div className={styles.bulkActionButtons}>
              <button
                className={styles.bulkEmailButton}
                onClick={() => setEmailModalOpen(true)}
              >
                <FaEnvelope /> Send Email
              </button>
              <button
                className={styles.bulkHideButton}
                onClick={() => {
                  selectedItems.forEach(id => {
                    if (activeTab === 'agency') markHiddenId(id);
                    else if (activeTab === 'business') markHiddenBusinessId(id);
                    else if (activeTab === 'requirements') markHiddenRequirementId(id);
                    else if (activeTab === 'manpower') markHiddenManpowerId(id);
                  });
                  setSelectedItems([]);
                  setSelectAll(false);
                }}
              >
                <FaEyeSlash /> Hide Selected
              </button>
              <button
                className={styles.bulkDeleteButton}
                onClick={() => {
                  selectedItems.forEach(id => {
                    if (activeTab === 'agency') markRemovedId(id);
                    else if (activeTab === 'business') markRemovedBusinessId(id);
                    else if (activeTab === 'requirements') markRemovedRequirementId(id);
                    else if (activeTab === 'manpower') markRemovedManpowerId(id);
                  });
                  setSelectedItems([]);
                  setSelectAll(false);
                }}
              >
                <FaTrash /> Delete Selected
              </button>
              <button
                className={styles.clearSelectionButton}
                onClick={() => {
                  setSelectedItems([]);
                  setSelectAll(false);
                }}
              >
                <FaTimes /> Clear Selection
              </button>
            </div>
          </div>
        )}

        <DataTable
          columns={formattedColumns}
          data={currentData}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
          highlightOnHover
          striped
          responsive
          noDataComponent={<div className={styles.noData}>
            {searchResults.length > 0 ? 'No search results found' : `No ${managementTab} records found`}
          </div>}
          customStyles={{
            headCells: {
              style: {
                backgroundColor: '#2c3e50',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem'
              },
            },
            rows: {
              style: {
                fontSize: '.9rem',
                '&:hover': {
                  backgroundColor: 'rgba(249, 115, 22, 0.1)',
                },
              },
            },
            pagination: {
              style: {
                borderTop: '2px solid #f97316',
              },
            },
          }}
        />
      </div>
    );
  };

  const renderEmailModal = () => {
    if (!emailModalOpen) return null;

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.emailModal}>
          <div className={styles.modalHeader}>
            <h3>Send Email to Selected Items</h3>
            <button 
              className={styles.closeModalBtn}
              onClick={() => {
                setEmailModalOpen(false);
                setEmailData({
                  subject: '',
                  message: '',
                  isSending: false,
                  sendError: null,
                  sendSuccess: false
                });
              }}
            >
              <FaTimes />
            </button>
          </div>
          
          <div className={styles.modalBody}>
            {emailData.sendSuccess ? (
              <div className={styles.successMessage}>
                <FaCheck /> Emails sent successfully!
              </div>
            ) : (
              <>
                {emailData.sendError && (
                  <div className={styles.errorMessage}>
                    <h4>Email Sending Failed</h4>
                    <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                      {emailData.sendError}
                    </div>
                    <div style={{ marginTop: '15px' }}>
                      <h5>Required Fields:</h5>
                      <ul>
                        <li><code>companyEmail</code></li>
                        <li><code>userEmail</code></li>
                        <li><code>email</code></li>
                        <li><code>contactEmail</code></li>
                        <li><code>contact.email</code></li>
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className={styles.formGroup}>
                  <label>Subject:</label>
                  <input
                    type="text"
                    value={emailData.subject}
                    onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                    placeholder="Email subject"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Message:</label>
                  <textarea
                    value={emailData.message}
                    onChange={(e) => setEmailData({...emailData, message: e.target.value})}
                    placeholder="Your email message"
                    rows={6}
                  />
                </div>
                
                <div className={styles.modalActions}>
                  <button
                    className={styles.sendButton}
                    onClick={handleSendBulkEmail}
                    disabled={emailData.isSending || !emailData.subject || !emailData.message}
                  >
                    {emailData.isSending ? (
                      <>
                        <FaSpinner className={styles.spinner} /> Sending...
                      </>
                    ) : (
                      <>
                        <FaEnvelopeOpen /> Send Email
                      </>
                    )}
                  </button>
                  <button
                    className={styles.cancelButton}
                    onClick={() => setEmailModalOpen(false)}
                    disabled={emailData.isSending}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderDateFilter = () => {
    const daysOptions = [
      { value: '0-5', label: 'Last 0-5 days' },
      { value: '6-15', label: 'Last 6-15 days' },
      { value: '16-30', label: 'Last 16-30 days' },
      { value: '31-60', label: 'Last 31-60 days' },
      { value: '61-90', label: 'Last 61-90 days' }
    ];

    const months = Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: new Date(0, i).toLocaleString('default', { month: 'long' })
    }));

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => ({
      value: currentYear - i,
      label: (currentYear - i).toString()
    }));

    return (
      <div className={styles.dateFilterDropdown}>
        <div className={styles.dateFilterHeader}>
          <h4>Filter by Date</h4>
          <button 
            className={styles.closeFilterBtn}
            onClick={() => setShowDateFilter(false)}
          >
            <FaTimes />
          </button>
        </div>
        
        <div className={styles.dateFilterOptions}>
          <div className={styles.dateFilterOption}>
            <input
              type="radio"
              id="allDates"
              name="dateRange"
              value="all"
              checked={dateFilter.range === 'all'}
              onChange={() => setDateFilter({...dateFilter, range: 'all'})}
            />
            <label htmlFor="allDates">All Dates</label>
          </div>
          
          <div className={styles.dateFilterOption}>
            <input
              type="radio"
              id="today"
              name="dateRange"
              value="today"
              checked={dateFilter.range === 'today'}
              onChange={() => setDateFilter({...dateFilter, range: 'today'})}
            />
            <label htmlFor="today">Today</label>
          </div>
          
          <div className={styles.dateFilterOption}>
            <input
              type="radio"
              id="yesterday"
              name="dateRange"
              value="yesterday"
              checked={dateFilter.range === 'yesterday'}
              onChange={() => setDateFilter({...dateFilter, range: 'yesterday'})}
            />
            <label htmlFor="yesterday">Yesterday</label>
          </div>
          
          <div className={styles.dateFilterOption}>
            <input
              type="radio"
              id="days"
              name="dateRange"
              value="days"
              checked={dateFilter.range === 'days'}
              onChange={() => setDateFilter({...dateFilter, range: 'days'})}
            />
            <label htmlFor="days">Last</label>
            <select
              value={dateFilter.days}
              onChange={(e) => setDateFilter({...dateFilter, days: e.target.value})}
              disabled={dateFilter.range !== 'days'}
            >
              {daysOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.dateFilterOption}>
            <input
              type="radio"
              id="month"
              name="dateRange"
              value="month"
              checked={dateFilter.range === 'month'}
              onChange={() => setDateFilter({...dateFilter, range: 'month'})}
            />
            <label htmlFor="month">Month</label>
            <select
              value={dateFilter.month}
              onChange={(e) => setDateFilter({...dateFilter, month: e.target.value})}
              disabled={dateFilter.range !== 'month'}
            >
              {months.map(month => (
                <option key={month.value} value={month.value}>{month.label}</option>
              ))}
            </select>
            <select
              value={dateFilter.year}
              onChange={(e) => setDateFilter({...dateFilter, year: e.target.value})}
              disabled={dateFilter.range !== 'month'}
            >
              {years.map(year => (
                <option key={year.value} value={year.value}>{year.label}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.dateFilterOption}>
            <input
              type="radio"
              id="year"
              name="dateRange"
              value="year"
              checked={dateFilter.range === 'year'}
              onChange={() => setDateFilter({...dateFilter, range: 'year'})}
            />
            <label htmlFor="year">Year</label>
            <select
              value={dateFilter.year}
              onChange={(e) => setDateFilter({...dateFilter, year: e.target.value})}
              disabled={dateFilter.range !== 'year'}
            >
              {years.map(year => (
                <option key={year.value} value={year.value}>{year.label}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.dateFilterOption}>
            <input
              type="radio"
              id="custom"
              name="dateRange"
              value="custom"
              checked={dateFilter.range === 'custom'}
              onChange={() => setDateFilter({...dateFilter, range: 'custom'})}
            />
            <label htmlFor="custom">Custom Range</label>
            <input
              type="date"
              value={dateFilter.startDate}
              onChange={(e) => setDateFilter({...dateFilter, startDate: e.target.value})}
              disabled={dateFilter.range !== 'custom'}
            />
            <span>to</span>
            <input
              type="date"
              value={dateFilter.endDate}
              onChange={(e) => setDateFilter({...dateFilter, endDate: e.target.value})}
              disabled={dateFilter.range !== 'custom'}
            />
          </div>
        </div>
        
        <div className={styles.dateFilterActions}>
          <button 
            className={styles.applyFilterBtn}
            onClick={() => {
              setShowDateFilter(false);
              if (search) {
                performSearch(search, searchField);
              }
            }}
          >
            Apply Filter
          </button>
          <button 
            className={styles.resetFilterBtn}
            onClick={() => {
              setDateFilter({
                range: 'all',
                startDate: '',
                endDate: '',
                days: '0-5',
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear()
              });
              setShowDateFilter(false);
              if (search) {
                performSearch(search, searchField);
              }
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  };

  const renderInsightsDashboard = () => {
    if (loading) {
      return (
        <div className={styles.loadingState}>
          <FaSpinner className={styles.spinner} />
          <p>Loading insights...</p>
        </div>
      );
    }

    if (error) {
      return <div className={styles.errorState}>{error}</div>;
    }

    const data = getFilteredInsights();
    const totalItems = data.agencies + data.businesses + data.requirements + data.manpower;
    const colors = ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'];

    return (
      <div className={styles.insightsContainer}>
        <div className={styles.insightsHeader}>
          <h2>Advanced Dashboard</h2>
          <div className={styles.dateFilter}>
            <FaCalendarAlt className={styles.filterIcon} />
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div> 
        </div>

        <div className={styles.summaryCards}>
          <div className={styles.summaryCard}>
            <div className={styles.cardIcon} style={{ backgroundColor: colors[0] }}>
              <FaUser />
            </div>
            <div className={styles.cardContent}>
              <h3>Agencies</h3>
              <p>{data.agencies}</p>
              <small>{totalItems > 0 ? Math.round((data.agencies / totalItems) * 100) : 0}% of total</small>
            </div>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.cardIcon} style={{ backgroundColor: colors[1] }}>
              <FaBuilding />
            </div>
            <div className={styles.cardContent}>
              <h3>Businesses</h3>
              <p>{data.businesses}</p>
              <small>{totalItems > 0 ? Math.round((data.businesses / totalItems) * 100) : 0}% of total</small>
            </div>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.cardIcon} style={{ backgroundColor: colors[2] }}>
              <FaList />
            </div>
            <div className={styles.cardContent}>
              <h3>Requirements</h3>
              <p>{data.requirements}</p>
              <small>{totalItems > 0 ? Math.round((data.requirements / totalItems) * 100) : 0}% of total</small>
            </div>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.cardIcon} style={{ backgroundColor: colors[3] }}>
              <FaUser />
            </div>
            <div className={styles.cardContent}>
              <h3>Manpower</h3>
              <p>{data.manpower}</p>
              <small>{totalItems > 0 ? Math.round((data.manpower / totalItems) * 100) : 0}% of total</small>
            </div>
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.pieChart}>
            <h3>Data Distribution</h3>
            <div className={styles.pieChartVisual}>
              {totalItems > 0 ? (
                colors.map((color, index) => {
                  const value = [
                    data.agencies,
                    data.businesses,
                    data.requirements,
                    data.manpower
                  ][index];
                  const percentage = (value / totalItems) * 360;
                  const rotation = colors.slice(0, index).reduce((acc, _, i) => {
                    const val = [
                      data.agencies,
                      data.businesses,
                      data.requirements,
                      data.manpower
                    ][i];
                    return acc + (val / totalItems) * 360;
                  }, 0);
                  
                  return (
                    <div 
                      key={index}
                      className={styles.pieSegment}
                      style={{
                        backgroundColor: color,
                        transform: `rotate(${rotation}deg)`,
                        clipPath: percentage >= 180 ? 
                          `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${50 + Math.sin((percentage - 180) * Math.PI / 180) * 50}% ${50 - Math.cos((percentage - 180) * Math.PI / 180) * 50}%)` :
                          `polygon(50% 50%, 50% 0%, ${50 + Math.sin(percentage * Math.PI / 180) * 50}% ${50 - Math.cos(percentage * Math.PI / 180) * 50}%)`
                      }}
                    ></div>
                  );
                })
              ) : (
                <div className={styles.noDataPie}>No data available</div>
              )}
            </div>
            <div className={styles.pieLegend}>
              {colors.map((color, index) => {
                const label = ['Agencies', 'Businesses', 'Requirements', 'Manpower'][index];
                const value = [
                  data.agencies,
                  data.businesses,
                  data.requirements,
                  data.manpower
                ][index];
                return (
                  <div key={index} className={styles.legendItem}>
                    <span className={styles.legendColor} style={{ backgroundColor: color }}></span>
                    <span>{label}: {value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getSearchFields = () => {
    switch (activeTab) {
      case 'agency': return agencySearchFields;
      case 'business': return businessSearchFields;
      case 'requirements': return requirementsSearchFields;
      case 'manpower': return manpowerSearchFields;
      default: return [];
    }
  };

  const getPlaceholderText = () => {
    switch (activeTab) {
      case 'agency': return 'Search agencies...';
      case 'business': return 'Search businesses...';
      case 'requirements': return 'Search requirements...';
      case 'manpower': return 'Search manpower...';
      default: return 'Search...';
    }
  };

  const navigateToCreatePage = (type) => {
    navigate('/Admincreate', {
      state: {
        defaultTab: type === 'agency' ? 'agency' :
                  type === 'business' ? 'addBusiness' :
                  type === 'requirements' ? 'postRequirement' :
                  'addManpower'
      }
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}><h2>StatusHub</h2></div>
        <nav className={styles.navMenu}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'agency' ? styles.activeTab : ''}`}
            onClick={() => {
              setActiveTab('agency');
              setManagementTab('active');
              setSearch('');
              setSearchField('companyName');
              setSearchResults([]);
            }}
          >
            <FaUser className={styles.tabIcon} /> Agencies
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'business' ? styles.activeTab : ''}`}
            onClick={() => {
              setActiveTab('business');
              setManagementTab('active');
              setSearch('');
              setSearchField('companyName');
              setSearchResults([]);
            }}
          >
            <FaBuilding className={styles.tabIcon} /> Businesses
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'requirements' ? styles.activeTab : ''}`}
            onClick={() => {
              setActiveTab('requirements');
              setManagementTab('active');
              setSearch('');
              setSearchField('companyName');
              setSearchResults([]);
            }}
          >
            <FaList className={styles.tabIcon} /> Requirements
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'manpower' ? styles.activeTab : ''}`}
            onClick={() => {
              setActiveTab('manpower');
              setManagementTab('active');
              setSearch('');
              setSearchField('designation');
              setSearchResults([]);
            }}
          >
            <FaUser className={styles.tabIcon} /> Add Post
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'insights' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('insights')}
          >
            <FaChartPie className={styles.tabIcon} /> Advance
          </button>
        </nav>
        <div className={styles.sidebarFooter}><p>© 2025 StatusHub</p></div>
      </div>

      <main className={styles.content}>
        {activeTab === 'addBusiness' ? (
          <>
            <header className={styles.contentHeader}>
              <h1>Add New Business</h1>
            </header>
            <section className={styles.contentBody}>
              <BusniesForm onSave={handleSave} validationErrors={validationErrors} />
              <div className={styles.submitContainer}>
                <button
                  className={styles.submitButton}
                  onClick={handleSubmit} 
                  disabled={isSubmitting || !isSaved}
                >
                  {isSubmitting ? <FaSpinner className={styles.spinnerIcon} /> : 'Submit'}
                </button>
              </div>
            </section>
          </>
        ) : activeTab === 'insights' ? (
          renderInsightsDashboard()
        ) : (
          <>
            <header className={styles.contentHeader}>
              <h1>
                {activeTab === 'agency' ? 'Agency' : 
                 activeTab === 'business' ? 'Business' : 
                 activeTab === 'requirements' ? 'Requirements' : 
                 'Manpower'} Dashboard
              </h1>
              <div className={styles.headerActions}>
                <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                  <select 
                    value={searchField} 
                    onChange={(e) => setSearchField(e.target.value)}
                    className={styles.searchSelect}
                  >
                    {getSearchFields().map(field => (
                      <option key={field.value} value={field.value}>{field.label}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder={getPlaceholderText()}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.searchInput}
                  />
                  <button type="submit" className={styles.searchButton}>
                    <FaSearch /> Search
                  </button>
                  {search && (
                    <button 
                      type="button" 
                      className={styles.clearSearchButton}
                      onClick={handleClearSearch}
                    >
                      Clear
                    </button>
                  )}
                </form>
                <button 
                  className={styles.createButton}
                  onClick={() => navigateToCreatePage(activeTab)}
                >
                  <FaPlus /> Create New
                </button>
                <button 
                  className={styles.exportButton}
                  onClick={exportToExcel}
                  title="Export to Excel"
                >
                  <FaFilePdf /> Export Excel
                </button>
              </div>
            </header>

            <section className={styles.contentBody}>
              {error ? (
                <div className={styles.errorState}>{error}</div>
              ) : loading ? (
                <div className={styles.loadingState}>
                  <FaSpinner className={styles.spinner} />
                  <p>Loading...</p>
                </div>
              ) : (
                renderTable(
                  activeTab === 'agency' ? agencyColumns :
                  activeTab === 'business' ? businessColumns :
                  activeTab === 'requirements' ? requirementsColumns :
                  manpowerColumns
                )
              )}
            </section>
          </>
        )}
        {renderEmailModal()}
      </main>
    </div>
  );
};

export default DashboardPage;