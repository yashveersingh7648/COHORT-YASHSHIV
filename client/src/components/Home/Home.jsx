import React, { useEffect, useState } from 'react';
import "./Home.css"
import BlurText from "./BlurText";
import { Link } from 'react-router-dom';
import ThumbnailSlider from '../ImageSlider';
import { useAuth } from '../../context/AuthContext';
import PlatformHighlights from "../PlatformHighlights"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faBalanceScale, faBullhorn, faIdCard, faGraduationCap, faRocket, faStar } from '@fortawesome/free-solid-svg-icons';
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
  FaChartLine,
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
   <section className="suppcohort-hero">
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <span className="badge">Industry Pioneers</span>
            <h1>Transforming Debt Management in <span className="highlight">India</span></h1>
            
            <div className="suppcohort-description">
              <p className="hero-text">
                Suppcohort is a pioneering platform dedicated to the improvement of processes and services in the debt management industry. Our mission is to seamlessly connect all key stakeholders — lenders, support partners, professionals, and aspirants — while creating and expanding the industry's workforce through awareness, education, and empowerment.
              </p>
              
              <h2>The Debt Management Ecosystem in India</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">2,500+</span>
                  <span className="stat-label">RBI-registered lenders</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1.5 Lakh+</span>
                  <span className="stat-label">Lender professionals</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2.5 Lakh+</span>
                  <span className="stat-label">Field agents & telecallers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1 Lakh+</span>
                  <span className="stat-label">Legal & compliance experts</span>
                </div>
              </div>
              
              <p className="closing-statement">
                In total, an estimated <strong>5 lakh+ growing workforce</strong> engaged across metros, Tier 2/3 cities, and rural India. With trillions of rupees worth of delinquent accounts under management and a fast-growing demand for trained Debt Recovery Agents (DRAs) and ethical recovery professionals, this industry is often described as an iceberg of untapped opportunities and potential.
              </p>
            </div>
            
            <div className="hero-buttons">
              <a href="/Contact" className="secondary-btn">Get Started</a>
              {/* <a href="/contact" className="outline-btn">Get Involved</a> */}
            </div>
          </div>
          
          {/* <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Debt management professionals" />
          </div> */}
        </div>
      </div>
    </section>


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


<div className="heading-container1">
  <h4 className="main-heading">At Suppcohort, we cater to three primary user groups:</h4>
</div>
<section>
    <div className="services-section">
  
  
  <div className="services-grid">
    <div className="service-cards">
      <div className="card-image" style={{ backgroundImage: "url('/uploads/LendersTeams.jpg')" }}>
        <div className="card-overlaye">
          <span className="card-category">Lenders</span>
          <h3 className="card-title">Lenders’ Teams</h3>
          <p className="card-description">Recovery, collection, and legal professionals from Banks, NBFCs, ARCs, Microfinance, and Fintech.
</p>
        </div>
      </div>
    </div>

    <div className="service-cards">
      <div className="card-image" style={{ backgroundImage: "url('/uploads/SupportPartners.jpg')" }}>
        <div className="card-overlaye">
          <span className="card-category">Support</span>
          <h3 className="card-title">Support Partners</h3>
          <p className="card-description"> Agencies or entities offering debt collection, recovery, or legal services to lenders.
</p>
        </div>
      </div>
    </div>

    <div className="service-cards">
      <div className="card-image" style={{ backgroundImage: "url('/uploads/AdmirersGuests.jpg')" }}>
        <div className="card-overlaye">
          <span className="card-category">Admirers</span>
          <h3 className="card-title">Admirers/Guests</h3>
          <p className="card-description">Experts, individuals, or companies exploring opportunities, learning, or seeking careers in the industry.
</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

 <section className="user-groups">
      <div className="container">
       
        
         <div className="key-features">
                 <div className="heading-container1">
  <h4 className="main-heading">Key Features of Suppcohort</h4>
</div>
<div className="heading-container1 ">
  <h5 className="main-headings">Our platform is designed to transform the debt management industry</h5>
</div>
      {/* <div className="features-header">
        <h2>Key Features of Suppcohort</h2>
        <p>Our platform is designed to transform the debt management industry</p>
      </div> */}
      
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faLink} />
          </div>
          <div className="feature-content">
            <h4>Unified Platform</h4>
            <p>Connecting all people and entities in debt management.</p>
          </div>
        </div>
        
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faBalanceScale} />
          </div>
          <div className="feature-content">
            <h4>Equal Opportunity</h4>
            <p>For everyone — regardless of team size or market experience.</p>
          </div>
        </div>
        
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faBullhorn} />
          </div>
          <div className="feature-content">
            <h4>Business Opportunities</h4>
            <p>Lenders can publish opportunities for service partners and jobs for seekers.</p>
          </div>
        </div>
        
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faIdCard} />
          </div>
          <div className="feature-content">
            <h4>Profile Showcase</h4>
            <p>Service partners can showcase their profiles and create opportunities for professionals.</p>
          </div>
        </div>
        
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="feature-content">
            <h4>Learning Hub</h4>
            <p>Admirers/guests can explore, learn, and connect with the debt management world.</p>
          </div>
        </div>
        
        <div className="feature-item">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faRocket} />
          </div>
          <div className="feature-content">
            <h4>Growth Platform</h4>
            <p>Whether you are offering, servicing, seeking, or admiring — Suppcohort is the trusted platform.</p>
          </div>
        </div>
      </div>
      
      <div className="closing-statement">
        <div className="closing-content">
          <FontAwesomeIcon icon={faStar} className="closing-icon" />
          <p>Whether you are offering, servicing, seeking, or admiring — Suppcohort.com is the trusted platform designed to connect, collaborate, learn, and grow within the debt management industry.</p>
        </div>
      </div>
    </div>
      </div>
    </section>
    

{/* <section>
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
  <h3 className="banner-heading ">
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
</section> */}




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
<div className="heading-container1 ">
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


      {/* <ThumbnailSlider /> */}
    </div>
    
    
  )
}

export default Home
