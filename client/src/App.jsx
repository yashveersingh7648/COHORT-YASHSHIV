
import React, { Suspense, lazy, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios'; 

import Home from './components/Home/Home';
import AgencyProfilePage from './components/AgencyProfilePage/AgencyProfilePage';
// import AgencyPro from './components/AgencyPro/AgencyPro';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { AuthProvider } from './context/AuthContext';

const Contact = lazy(() => import('./components/Contact/Contact'));
const Login_SignUp = lazy(() => import('./components/Login_SignUp/Login_SignUp'));

const DashboardTabs = lazy(() => import('./components/DashboardTabs/DashboardTabs'));
const DashboardPage = lazy(() => import('./components/DashboardPage/DashboardPage'));
const BusDashboard = lazy(() => import('./components/BusDashboard/BusDashboard'));
const DashboardBus = lazy(() => import('./components/DashboardBus/DashboardBus'));
const EditAgencyProfile = lazy(() => import('./components/EditAgencyProfile/EditAgencyProfile'));
const StatusDashboard = lazy(() => import('./components/StatusDashboard/StatusDashboard'));
const AddManpowerForm = lazy(() => import('./components/AddManpowerForm/AddManpowerForm'));


const ManageRequirements = lazy(() => import('./components/ManageRequirements/ManageRequirements'));
const BusinessSignUpModal = lazy(() => import('./components/BusinessSignupModal/BusinessSignupModal'));
const Admincreate = lazy(() => import('./components/Admincreate/Admincreate'));

const AgencyCreate = lazy(() => import('./components/AgencyCreate/AgencyCreate'));

const SignIn1 = lazy(() => import('./components/SignIn1'));

const SignIn = lazy(() => import('./components/SignIn'));
const Mobilelogin = lazy(() => import("./components/Mobilelogin.jsx"));



function App() {
  // const BASE_URL = "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const [agencies, setAgencies] = useState([]);
const [filteredAgencies, setFilteredAgencies] = useState([]);

useEffect(() => {
  const fetchAgencies = async () => {
    try {
       const response = await axios.get(`${API_URL}/api/dashboard`);
      setAgencies(response.data);
      setFilteredAgencies(response.data);
    } catch (error) {
      console.error('Error fetching agencies:', error);
    }
  };

  fetchAgencies();
}, []);

const handleSearch = (searchTerm) => {
  if (!searchTerm) {
    setFilteredAgencies(agencies);
    return;
  }

  const filtered = agencies.filter(agency => {
    return (
      agency.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.categoryType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.companyProduct?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.companyCity?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.companyState?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.companyPincode?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  setFilteredAgencies(filtered);
};

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return user ? children : null;
};

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <Navbar  onSearch={handleSearch}/>
          <main style={{ minHeight: "60vh" }}>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />

                <Route path="/DashboardPage" element={<DashboardPage agencies={filteredAgencies}/>} />
                <Route path="/BusDashboard" element={<BusDashboard />} />
                 {/* <Route path="/agency/:id" element={<AgencyProfilePage />} /> */}
                <Route path="/agency/profile" element={<AgencyProfilePage />} />
<Route path="/agency/edit" element={<EditAgencyProfile />} />
                <Route path="/agency/profile" element={<AgencyProfilePage />} />
            {/* <Route path="/agency/:email" element={<AgencyProfilePage />} />  */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/Login_SignUp" element={<Login_SignUp />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignIn1" element={<SignIn1 />} />

                <Route path="/Mobilelogin" element={<Mobilelogin />} />
                <Route path="/DashboardTabs" element={<DashboardTabs />} />
                <Route path="/DashboardBus" element={<DashboardBus />} />
                <Route path="/StatusDashboard" element={<StatusDashboard />} />
                <Route path="/AddManpowerForm" element={<AddManpowerForm />} />
                <Route path="/BusinessSignupModal" element={<BusinessSignUpModal />} />
                <Route path="/AgencyCreate" element={<AgencyCreate />} />
                <Route path="/Admincreate" element={<Admincreate />} />
 


                  <Route path="/ManageRequirements" element={  <ProtectedRoute>
                
                      <ManageRequirements />
                    </ProtectedRoute>} />

              </Routes>
            </Suspense>
          </main>
          <Footer />
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
