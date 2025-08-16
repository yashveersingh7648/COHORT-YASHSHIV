import React, { useEffect, useState } from 'react';
import "./Home.css"
import BlurText from "./BlurText";
import { Link } from 'react-router-dom';
import ThumbnailSlider from '../ImageSlider';
import { useAuth } from '../../context/AuthContext';
import PlatformHighlights from "../PlatformHighlights"
import axios from 'axios';
import { 
  FaCheckCircle, 
  FaSearch, 
  FaHandshake, 
  FaUserShield, 
  FaShieldAlt,
  FaLock,
  FaBell,
  FaMoneyBillWave,
  FaUsers ,
   FaLink, 
  FaBriefcase, 
  FaUserTie, 
  FaChartLine
} from "react-icons/fa";

const Home = () => {
  const [requirementsData, setRequirementsData] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const BASE_URL = "http://localhost:8000";
// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";



  const { user } = useAuth();

  const handleAnimationComplete = () => {
    console.log("Animation complete!");
  };

const fetchRequirements = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/all-requirements`);
    setRequirementsData(response.data.data);
  } catch (err) {
    console.error('Error fetching requirements:', err);
    setError('Failed to load requirements');
  } finally {
    setLoading(false);
  }
};




  useEffect(() => {
    fetchRequirements();
  }, []);


 const handleFooterLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

const whyItems = [
  { icon: <FaShieldAlt />, text: "100% Verified & Compliant Agencies" },
  { icon: <FaSearch />, text: "Smart Search & Matching" },
  { icon: <FaLock />, text: "Transparent & Secure Platform" },
  { icon: <FaBell />, text: "Real-Time Notifications and Reporting" },
  { icon: <FaMoneyBillWave />, text: "Low Subscription Cost for Institutions" },
  { icon: <FaUsers />, text: "Multi-User Dashboard Access" }
];
  return (
    <div>
    <div id="heade"></div>
 
<section>
    <div className="services-grid">
 <div className="service-card">
    <div className="card-glow"></div>

    <div className="service-content">
     
      <h2 className="banner-heading1">
 <BlurText
  text="About cohort and it’s feature and benefit "
  delay={8}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl animation"
/>
        
      </h2>
  <h3 className="banner-heading">
        <BlurText
  text="of updating and uploading profile…some market facts ……business providers and approximate business opportunity availability.
Encouraging word to upload profile and become part of the community\ race.  "
  delay={10}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl animation"
/>

      </h3>
     <li className= "authItem">
              <Link to="/Login_SignUp" className="authLink" onClick={handleFooterLinkClick}>
              Get Started\ Register

              </Link>
            </li>
    </div>

    <div className="service-image">
      <img src="/uploads/home.avif" alt="Service Illustration" />
    </div>
  </div>



 
</div>
</section>

<div className="heading-container1">
  <h4 className="main-heading">Welcome to India's Premier B2B Marketplace for Recovery Agencies & Financial Institutions</h4>
</div>
<div className="heading-container1">
  <h5 className="main-headings">Your Trusted Platform for Recovery Agency Discovery and Collaboration</h5>
</div>

<section>
    <div className="services-grid">
 <div className="service-card1">
    <div className="card-glow1"></div>

  

    <div className="service-image">
      <img src="/uploads/recovery.png" alt="Service Illustration" />
    </div>


      <div className="service-content">
      {/* <div className="card-icon">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
          strokeWidth="2" viewBox="0 0 24 24" className="icon-svg">
          <path d="M12 2a10 10 0 0 0 0 20m0-20a10 10 0 0 1 0 20m0-20v20m0-20H2m10 0h10" />
        </svg>
      </div> */}
      <h2 className="banner-headings">
        For Recovery Agencies (First Party)
      </h2>
      <h2 className="banner-heading1">
 <BlurText
  text="About cohort and it’s feature and benefit "
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl animations"
/>
        
      </h2>
  <h3 className="banner-headinge"> 
Are you a registered Recovery Agency looking to partner with leading banks, NBFCs, and financial institutions? Our platform gives you a verified digital presence and direct access to lenders actively searching for partners like you.<br/>
✔ Verified Agency Profiles<br/>
✔ PAN India Visibility<br/>
✔ State, City & Pincode-wise Discoverability<br/>
✔ Increase Your Client Base<br/>
      </h3>
    
    </div>
  </div>



 
</div>
</section>




<section>
  <div className="heading-container1">
  <h4 className="main-heading">Register today to become a trusted recovery partner.</h4>
</div>
  
    <div className="services-grid">
 <div className="service-card2">
    <div className="card-glow1"></div>


      <div className="service-content">
     
      <h2 className="banner-headings">
        For Banks, NBFCs & Financial Institutions (Second Party)
Find the Right Agency, Fast.

      </h2>
      <h2 className="banner-heading1">
 <BlurText
  text="About cohort and it’s feature and benefit "
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl animations"
/>
        
      </h2>
  <h3 className="banner-headinge"> 
Searching for reliable and region-specific recovery agencies? Our platform empowers you to explore and connect with verified agencies across India—filtered by state, city, pincode, or compliance standards.<br/>
✔ Easy Search & Filter Tools<br />
✔ Downloadable Agency Reports<br />
✔ Direct Communication Channel<br />
✔ Save Time and Reduce Risk<br />

      </h3>
    
    </div>
      

    <div className="service-image">
      <img src="/uploads/fiBank.avif" alt="Service Illustration" />
    </div>
  </div>

</div>
</section>


 <div className="how-modern-wrapper">
      <section className="how-modern-section">
        <div className="heading-container1">
  <h4 className="main-heading">How It Works</h4>
</div>
        {/* <h2 className="section-heading">How It Works</h2> */}
        <div className="how-modern-grid">
          <div className="how-card">
            <FaUserShield className="how-icon" />
            <h3>Agency Registration</h3>
            <p>Agencies create their profile and upload legal documents (RC, GST, PAN, etc.)</p>
          </div>
          <div className="how-card">
            <FaCheckCircle className="how-icon" />
            <h3>Profile Verification</h3>
            <p>We verify all agencies before listing them on the platform.</p>
          </div>
          <div className="how-card">
            <FaSearch className="how-icon" />
            <h3>Search & Connect</h3>
            <p>Institutions search by location, category, or keywords to find the right agency.</p>
          </div>
          <div className="how-card">
            <FaHandshake className="how-icon" />
            <h3>Direct Collaboration</h3>
            <p>Connect directly through the dashboard or messaging tools for real-time engagement.</p>
          </div>
        </div>
      </section>

<section className="why-choose-section">
    <div className="heading-container1">
  <h4 className="main-heading">Why Choose Our Platform?</h4>
</div>
      {/* <h2 className="section-heading">Why Choose Our Platform?</h2> */}
      <div className="why-grid">
        {whyItems.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
<section className="browse-section">
   <div className="heading-container1">
  <h4 className="main-heading">Browse Agencies By</h4>
</div>
  {/* <h2 className="section-heading"> Browse Agencies By</h2> */}
  <div className="browse-grid">
    <div className="browse-card">
      <h4>State</h4>
      <p>Uttar Pradesh, Maharashtra, Delhi, Gujarat, etc.</p>
    </div>
    <div className="browse-card">
      <h4>City</h4>
      <p>Mumbai, Delhi, Lucknow, Indore, Hyderabad...</p>
    </div>
    <div className="browse-card">
      <h4>Pincode</h4>
      <p>Granular-level location targeting</p>
    </div>
    <div className="browse-card">
      <h4>Agency Type</h4>
      <p>Asset Recovery, Legal Recovery, Field Agents, etc.</p>
    </div>
  </div>
</section>


 <section className="achieve-section">
      <div className="container">
        <div className="heading-container1">
  <h4 className="main-heading">Achieve your success with Suppcohort</h4>
</div>
<div className="heading-container1">
  <h5 className="main-headings">We connect all the entities/people of debt management together</h5>
</div>
        {/* <div className="section-header">
          <h2>Achieve your success with Suppcohort</h2>
          <p className="subtitle">We connect all the entities/people of debt management together</p>
        </div> */}

        <div className="benefits-grid">
          {/* Equal Opportunity */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaUsers size={30} />
            </div>
            <div className="benefit-content">
              <h3>Equal Opportunity</h3>
              <p>We provide equal opportunity to All, no matter your team size or how new you are.</p>
            </div>
          </div>

          {/* Lenders */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaBriefcase size={30} />
            </div>
            <div className="benefit-content">
              <h3>For Lenders</h3>
              <p>Publish business opportunity for service partners and job opportunity for job seekers.</p>
            </div>
          </div>

          {/* Service Partners */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaUserTie size={30} />
            </div>
            <div className="benefit-content">
              <h3>For Service Partners</h3>
              <p>Upload your profile and publish job opportunity for job seekers.</p>
            </div>
          </div>

          {/* Admirers */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaSearch size={30} />
            </div>
            <div className="benefit-content">
              <h3>For Admirers/Guests</h3>
              <p>Visit and explore the portal to connect with the world of debt management and opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<PlatformHighlights />

      <section className="testimonial-section">
        <div className="heading-container1">
  <h4 className="main-heading">Agency Testimonials</h4>
</div>
        {/* <h2 className="section-heading"> Agency Testimonials</h2> */}
        <blockquote className="testimonial">
          “Since joining this platform, we’ve secured 3 new bank contracts in just 2 months!”<br />
          <span>— Sharma Recovery Services, Delhi</span>
        </blockquote>
        <blockquote className="testimonial">
          “The dashboard is simple and fast. Highly recommended for NBFCs like us.”<br />
          <span>— Operations Head, Urban NBFC Pvt. Ltd.</span>
        </blockquote>
      </section>


   
<section>
    <div className="hero-banner"
    style={{ backgroundImage: "url('/uploads/join.jpg')" }}
    >
  <div className="banner-overlay"></div>
  <div className="banner-content">
    <h4 className="banner-title">Join Us</h4>
    <p className="banner-subtitle"> Whether you're offering services, seeking opportunities, or simply admiring the industry—
          Suppcohort is your gateway to connect, collaborate, learn, and grow.</p>
    <div className="banner-buttons">
      <a href="/Contact" className="cta-btn primary-btn">Contact Us</a>
  
    </div>
    
  </div>
</div>
</section>

      <section className="get-started-section">
          <div className="heading-container1">
  <h4 className="main-heading">Get Started Today</h4>
</div>
        {/* <h2 className="section-heading"> Get Started Today</h2> */}
        <div className="start-buttons">
        
                 <button> <Link to="/DashboardTabs" className="authLink" onClick={handleFooterLinkClick}>
              Register Your Agency
              </Link></button>
          
            <button> <Link to="/BusDashboard" className="authLink" onClick={handleFooterLinkClick}>
             Search for Agencies
              </Link></button>
          <button><Link to="/Contact" className="authLink" onClick={handleFooterLinkClick}>
              Talk to Our Sales Team
              </Link></button>
          {/* <button><Link to="/Contact" className="authLink">
              Talk to Our Sales Team
              </Link></button> */}
        </div>
      </section>
    </div>
{/* <ThumbnailSlider /> */}
 {/* Modified ThumbnailSlider with requirements data */}
      <div className="slider-container">
        {/* <h2 className="section-heading">Latest Requirements</h2> */}
        {loading ? (
          <div className="loading-spinner">Loading requirements...</div>
        ) : (
          
           <ThumbnailSlider 
      items={requirementsData.map(req => ({
        companyName: req.companyName,
        companyType: req.companyType,
        product: req.product,
        categoryType: req.categoryType,
        companyCity: req.companyCity,
        companyPincode: req.companyPincode,
        companyState: req.companyState,
        teamSize: req.teamSize
        
      }))}
      
      direction="bottomToTop"
      speed={5000}
    />
    
        )}
      </div>

      {/* <ThumbnailSlider /> */}
    </div>
    
    
  )
}

export default Home
