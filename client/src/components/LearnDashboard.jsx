import React, { useState, useEffect } from 'react';
import CommonDebt from './CommonDebt'

import { 
  FaFileInvoiceDollar, FaInfoCircle, FaCheckCircle, FaTasks, FaClock, 
  FaMoneyBillWave, FaFileAlt, FaGavel, FaBook, FaQuestionCircle,
  FaUser, FaGraduationCap, FaSignInAlt, FaBookReader, 
  FaCheckDouble, FaAward, FaFileInvoice, FaRupeeSign, FaIdCard,
  FaLaptop, FaPercentage, FaCalendarAlt, FaRedo, FaExclamationCircle,
  FaLandmark, FaBalanceScale, FaComments, FaChartLine, FaClipboardCheck,
   FaFileContract, FaHandshake,
   FaExclamationTriangle, FaClipboardList,
  FaEnvelope, FaNewspaper, FaMoneyCheckAlt, FaUniversity,
  FaChartBar, FaShieldAlt, FaUserTie, FaHandHoldingUsd,FaSearchDollar,  FaLaptop as FaLaptopIcon,
  FaPercentage as FaPercentageIcon,
  FaCalendarAlt as FaCalendarAltIcon,
  FaRedo as FaRedoIcon
} from 'react-icons/fa';


// import {
//   FaBalanceScale, FaGavel, FaFileContract, FaHandshake,
//   FaBook, FaFileAlt, FaExclamationTriangle, FaClipboardList,
//   FaEnvelope, FaNewspaper, FaMoneyCheckAlt, FaUniversity,
//   FaChartBar, FaShieldAlt, FaUserTie, FaHandHoldingUsd
// } from 'react-icons/fa';
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
 
  // Tab data with component mapping
  const tabs = [
    { id: 0, name: "Coomon Debt Info & Activities", component: <DashboardComponent /> },
    { id: 1, name: "DRA", component: <AnalyticsComponent /> },
    { id: 2, name: "Legal & Guidelince CoC", component: <SettingsComponent /> }
  ];
  
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <h2>My Dashboard</h2>
        </div>
        <ul className="tabs">
          {tabs.map(tab => (
            <li 
              key={tab.id} 
              className={activeTab === tab.id ? 'active' : ''}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="main-content">
        <div className="content-header">
          <h1>{tabs[activeTab].name}</h1>
        </div>
        <div className="content-body">
          {tabs[activeTab].component}
        </div>
      </div>
    </div>
  );
};

// Dummy Components
const DashboardComponent = () => {
  return (
    <div className="component">
      {/* <h2>Dashboard Overview</h2> */}
      {/* <div className="card-grid">
        <div className="card">
          <h3>Users</h3>
          <p className="stat">1,234</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p className="stat">$45,678</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p className="stat">567</p>
        </div>

      </div> */}

      <CommonDebt />
    </div>
  );
};

const AnalyticsComponent = () => {
   const [activeSection, setActiveSection] = useState('overview');
  
  const sections = [
    { id: 'overview', name: 'Overview', icon: <FaInfoCircle /> },
    { id: 'eligibility', name: 'Eligibility', icon: <FaCheckCircle /> },
    { id: 'process', name: 'Process', icon: <FaTasks /> },
    { id: 'duration', name: 'Duration', icon: <FaClock /> },
    { id: 'fees', name: 'Fees', icon: <FaMoneyBillWave /> },
    { id: 'exam', name: 'Exam', icon: <FaFileAlt /> },
    { id: 'mandatory', name: 'Mandatory', icon: <FaGavel /> },
    { id: 'modules', name: 'Modules', icon: <FaBook /> },
    { id: 'quiz', name: 'Quiz', icon: <FaQuestionCircle /> },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="component">
      {/* <h2>Analytics Report</h2>
      <div className="chart-placeholder">
        <p>Analytics chart would be displayed here</p>
      </div>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Page Views</td>
              <td>12,345</td>
              <td className="positive">+12%</td>
            </tr>
            <tr>
              <td>Conversion Rate</td>
              <td>3.2%</td>
              <td className="positive">+2%</td>
            </tr>
            <tr>
              <td>Bounce Rate</td>
              <td>42%</td>
              <td className="negative">-5%</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className="dra-page">
      <header className="dra-header">
        <div className="container">
          <div className="logo-container">
            <FaFileInvoiceDollar className="logo" />
            <h1>Debt Recovery Agent Certification</h1>
          </div>
          <div className="subtitle">Empowering Debt Recovery Agents with Knowledge, Ethics & Opportunity</div>
          <div className="hindi-subtitle">ज्ञान, नैतिकता और अवसर के साथ ऋण वसूली एजेंटों को सशक्त बनाना</div>
        </div>
      </header>
      
      <nav className="dra-nav">
        <div className="containered nav-container">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.icon}
              <span>{section.name}</span>
            </button>
          ))}
        </div>
      </nav>
      
      <main className="container">
        {/* Overview Section */}
        <section id="overview" className="dra-section">
          <h2 className="section-title"><FaInfoCircle /> Overview</h2>
          <div className="card">
            <div className="card-title">
              <FaFileInvoiceDollar className="card-icon" />
              <h3>What is a Debt Recovery Agent (DRA)?</h3>
            </div>
            <p>A Debt Recovery Agent is a professional authorized to recover debts on behalf of banks and financial institutions. Their role is to contact borrowers, negotiate repayments, and ensure recovery of overdue loans in a legal and ethical manner.</p>
            <p>The Debt Recovery Agent course equips learners with the skills and knowledge necessary to effectively manage and recover overdue debts. This comprehensive program covers negotiation techniques, legal frameworks, communication strategies, and ethical practices essential for successful debt recovery.</p>
            <p>To get a Debt Recovery Agent (DRA) certificate, you need to enroll in a training program, complete the required hours, and pass the IIBF-administered DRA examination. The training must be completed at an IIBF-accredited institute. After passing the exam, you can obtain the certificate from the IIBF.</p>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section id="eligibility" className="dra-section">
          <h2 className="section-title"><FaCheckCircle /> Eligibility Criteria</h2>
          <div className="info-grid">
            <div className="card">
              <div className="card-title">
                <FaUser className="card-icon" />
                <h3>Age Requirement</h3>
              </div>
              <p>You must be at least <strong>18 years old</strong> to become a certified DRA.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaGraduationCap className="card-icon" />
                <h3>Education Qualification</h3>
              </div>
              <p>A minimum of <strong>Class 10 (SSC) qualification</strong> is required.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaClock className="card-icon" />
                <h3>Training Requirements</h3>
              </div>
              <ul>
                <li className="list-item"><FaCheckCircle className="list-icon" /> <span>100 hours for candidates with 10+2 or below</span></li>
                <li className="list-item"><FaCheckCircle className="list-icon" /> <span>50 hours for graduates and above</span></li>
                <li className="list-item"><FaCheckCircle className="list-icon" /> <span>Retired bank officers (60+) may be exempted</span></li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="dra-section">
          <h2 className="section-title"><FaTasks /> Certification Process</h2>
          <div className="info-grid">
            <div className="card">
              <div className="card-title">
                <FaSignInAlt className="card-icon" />
                <h3>1. Enrollment</h3>
              </div>
              <p>Enroll in a DRA training program at an IIBF-accredited institute.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaBookReader className="card-icon" />
                <h3>2. Training</h3>
              </div>
              <p>Complete the required training hours (100 or 50) based on your educational qualification.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaFileAlt className="card-icon" />
                <h3>3. Training Certificate</h3>
              </div>
              <p>Obtain a training completion certificate from the institute.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaFileAlt className="card-icon" />
                <h3>4. Examination Registration</h3>
              </div>
              <p>Register for the DRA examination with IIBF, usually facilitated by the training institute.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaCheckDouble className="card-icon" />
                <h3>5. Pass Exam</h3>
              </div>
              <p>Appear for and pass the IIBF DRA examination.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaAward className="card-icon" />
                <h3>6. Certification</h3>
              </div>
              <p>After passing the exam, obtain the DRA certificate from IIBF.</p>
            </div>
          </div>
        </section>
        
        {/* Duration Section */}
        <section id="duration" className="dra-section">
          <h2 className="section-title"><FaClock /> Course Duration</h2>
          <div className="info-grid">
            <div className="card">
              <div className="card-title">
                <FaClock className="card-icon" />
                <h3>100 Hours Training</h3>
              </div>
              <p>For candidates with educational qualifications below graduation.</p>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaClock className="card-icon" />
                <h3>50 Hours Training</h3>
              </div>
              <p>For candidates with a graduation degree or higher and for employees of BPO/Call Centers with a graduation degree.</p>
            </div>
          </div>
        </section>
        
        {/* Fees Section */}
        <section id="fees" className="dra-section">
          <h2 className="section-title"><FaMoneyBillWave /> Fees Structure</h2>
          <div className="info-grid">
            <div className="card">
              <div className="card-title">
                <FaFileInvoice className="card-icon" />
                <h3>Examination Fees</h3>
              </div>
              <ul>
                <li className="list-item"><FaRupeeSign className="list-icon" /> <span>For members: ₹1,200 per attempt</span></li>
                <li className="list-item"><FaRupeeSign className="list-icon" /> <span>For non-members: ₹1,500 per attempt</span></li>
                <li className="list-item"><FaInfoCircle className="list-icon" /> <span>May be subject to additional taxes</span></li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">
                <FaIdCard className="card-icon" />
                <h3>Membership Fees</h3>
              </div>
              <p>One-time life membership fee for ordinary membership: ₹1,770 (₹1,500 + ₹270 GST)</p>
            </div>
          </div>
        </section>
        
        {/* Exam Section */}
        <section id="exam" className="dra-section">
          <h2 className="section-title"><FaFileAlt /> Exam Details</h2>
          <div className="card">
            <div className="card-title">
              <FaInfoCircle className="card-icon" />
              <h3>Exam Pattern</h3>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Questions</th>
                  <th>Marks/Question</th>
                  <th>Negative Marking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Part A</td>
                  <td>15</td>
                  <td>3</td>
                  <td>Yes (1/3 mark)</td>
                </tr>
                <tr>
                  <td>Part B</td>
                  <td>10</td>
                  <td>3</td>
                  <td>Yes (1/3 mark)</td>
                </tr>
                <tr>
                  <td>Part C</td>
                  <td>25</td>
                  <td>1</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>50</strong></td>
                  <td><strong>—</strong></td>
                  <td><strong>—</strong></td>
                </tr>
              </tbody>
            </table>
            
            <div className="highlight">
              <p><FaLaptopIcon /> <strong>Mode:</strong> Online (Computer-Based Test)</p>
              <p><FaPercentageIcon /> <strong>Passing Marks:</strong> Minimum 50%</p>
              <p><FaCalendarAltIcon /> <strong>Exam Frequency:</strong> Monthly slots available</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-title">
              <FaRedoIcon className="card-icon" />
              <h3>Attempts & Time Limit</h3>
            </div>
            <ul>
              <li className="list-item"><FaCheckCircle className="list-icon" /> <span>Three attempts are allowed within nine months of training completion</span></li>
              <li className="list-item"><FaCheckCircle className="list-icon" /> <span>The nine-month period starts from the completion date of the training program</span></li>
              <li className="list-item"><FaCheckCircle className="list-icon" /> <span>If unsuccessful, retraining is required</span></li>
              <li className="list-item"><FaCheckCircle className="list-icon" /> <span>After retraining, candidates can re-register for the exam</span></li>
            </ul>
          </div>
        </section>
        
        {/* Mandatory Section */}
        <section id="mandatory" className="dra-section">
          <h2 className="section-title"><FaGavel /> Mandatory Certification</h2>
          <div className="card">
            <div className="card-title">
              <FaExclamationCircle className="card-icon" />
              <h3>Is DRA Certificate Mandatory?</h3>
            </div>
            <p><strong>Yes</strong>, the Debt Recovery Agent (DRA) certificate is mandatory for individuals working as recovery agents for banks and other financial institutions in India.</p>
            
            <div className="highlight">
              <p>The Reserve Bank of India (RBI) requires this certification to ensure that recovery agents are trained in legal, ethical, and procedural aspects of debt collection.</p>
            </div>
            
            <h4>Regulatory Timeline</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Milestone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2003</td>
                  <td>RBI introduces the Fair Practices Code, emphasizing ethical recovery practices</td>
                </tr>
                <tr>
                  <td>2007</td>
                  <td>RBI mandates that agents engaged in recovery must be trained and certified</td>
                </tr>
                <tr>
                  <td>2018–2024</td>
                  <td>RBI and IBA reinforce mandatory certification with updated syllabi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Modules Section */}
        <section id="modules" className="dra-section">
          <h2 className="section-title"><FaBook /> Course Modules</h2>
          <div className="card module-card">
            <div className="module-title"><FaLandmark /> Module 1 – Introduction to Banking & Financial System</div>
            <p>Overview of Indian Financial System, Types of Banks & NBFCs, Retail Lending Products, Loan Lifecycle, RBI & Regulatory Structure Overview</p>
          </div>
          
          <div className="card module-card">
            <div className="module-title"><FaBalanceScale /> Module 2 – Debt Recovery Framework & Legal Aspects</div>
            <p>RBI Guidelines, SARFAESI Act, DRT Act, Negotiable Instruments Act, IBC Basics, Contract Law, Consumer Protection Act, Fair Practices Code</p>
          </div>
          
          <div className="card module-card">
            <div className="module-title"><FaComments /> Module 3 – Communication Skills & Customer Handling</div>
            <p>Principles of Ethical Communication, Telephone Recovery Techniques, Face-to-Face Collection, Negotiation Skills, Handling Difficult Customers, Bilingual Communication, De-escalation Techniques</p>
          </div>
          
          <div className="card module-card">
            <div className="module-title"><FaChartLine /> Module 5 – Recovery Strategies & Techniques</div>
            <p>Early Delinquency Management, Skip Tracing Techniques, Field Visit Planning, Soft vs Hard Collection, Recovery in Special Situations, Coordination with Lenders, Asset Seizure Procedures</p>
          </div>
          
          <div className="card module-card">
            <div className="module-title"><FaLaptop /> Module 6 – Digital Tools & Record Keeping</div>
            <p>Mobile Collection Apps, Maintaining Field Reports, Digital Payment Methods, Data Privacy & Cybersecurity</p>
          </div>
          
          <div className="card module-card">
            <div className="module-title"><FaClipboardCheck /> Module 7 – Mock Tests, Case Studies & Role Plays</div>
            <p>Bilingual Mock Tests, Role Play Exercises, Analysis of Real-Life Cases, Compliance Violation Examples, Final Assessment</p>
          </div>
        </section>
        
        {/* Quiz Section */}
        <section id="quiz" className="dra-section">
          <h2 className="section-title"><FaQuestionCircle /> Sample Quiz Questions</h2>
          
          <div className="quiz-container">
            <div className="quiz-question">1. What is the minimum age required to become a certified DRA in India?</div>
            <ul className="quiz-options">
              <li>a) 16 years</li>
              <li className="correct">b) 18 years</li>
              <li>c) 21 years</li>
              <li>d) 25 years</li>
            </ul>
          </div>
          
          <div className="quiz-container">
            <div className="quiz-question">2. Which organization conducts the DRA certification exam?</div>
            <ul className="quiz-options">
              <li>a) RBI</li>
              <li className="correct">b) IIBF</li>
              <li>c) SEBI</li>
              <li>d) ICAI</li>
            </ul>
          </div>
          
          <div className="quiz-container">
            <div className="quiz-question">3. How many hours of training are required for candidates with 10+2 or below qualification?</div>
            <ul className="quiz-options">
              <li>a) 50 hours</li>
              <li>b) 75 hours</li>
              <li className="correct">c) 100 hours</li>
              <li>d) 150 hours</li>
            </ul>
          </div>
          
          <div className="quiz-container">
            <div className="quiz-question">4. Which law governs the recovery of debts by banks in India?</div>
            <ul className="quiz-options">
              <li>a) Companies Act</li>
              <li className="correct">b) SARFAESI Act</li>
              <li>c) Income Tax Act</li>
              <li>d) Consumer Protection Act</li>
            </ul>
          </div>
          
          <div className="quiz-container">
            <div className="quiz-question">5. What is a key ethical guideline for DRAs?</div>
            <ul className="quiz-options">
              <li>a) Use pressure tactics</li>
              <li className="correct">b) Respect borrower dignity</li>
              <li>c) Avoid written communication</li>
              <li>d) Demand cash payments only</li>
            </ul>
          </div>
        </section>
      </main>
      
      <footer className="dra-footer">
        <div className="container">
          <p>Debt Recovery Agent Certification Information</p>
          <p>For more details, visit the official IIBF website</p>
          <p>© 2023 Debt Recovery Agent Certification Portal</p>
        </div>
      </footer>

     
    </div>
    </div>
  );
};

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState('overview');
    const tabs = [
    { id: 'overview', name: 'Overview', icon: <FaChartBar /> },
    { id: 'forums', name: 'Legal Forums', icon: <FaBalanceScale /> },
    { id: 'sop', name: 'SOP', icon: <FaClipboardList /> },
    { id: 'vehicle', name: 'Vehicle Recovery', icon: <FaHandHoldingUsd /> },
    { id: 'templates', name: 'Templates', icon: <FaFileAlt /> },
    { id: 'nclt', name: 'NCLT/NCLAT', icon: <FaUniversity /> },
    { id: 'conduct', name: 'Code of Conduct', icon: <FaShieldAlt /> },
    { id: 'notices', name: 'Legal Notices', icon: <FaEnvelope /> }
  ];

  
  return (
    <div className="component">
       <div className="legal-framework">
      <header className="legal-header">
        <div className="container">
          <div className="header-content">
            <FaGavel className="main-icon" />
            <h1>Judiciary & Legal Forums for Debt Recovery in India</h1>
            <p>Comprehensive guide to legal frameworks, procedures, and compliance requirements</p>
          </div>
        </div>
      </header>

      <nav className="legal-nav">
        <div className="container">
          <div className="nav-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="content-section">
            <h2><FaChartBar /> Legal Framework Overview</h2>
            <div className="card">
              <p>India's debt recovery ecosystem involves multiple legal forums and mechanisms, each with specific jurisdiction, procedures, and applications. Understanding these frameworks is essential for effective and compliant debt recovery operations.</p>
              
              <div className="highlight-box">
                <h4><FaExclamationTriangle /> Key Principles</h4>
                <ul>
                  <li>Different legal forums apply based on debt type, amount, and creditor profile</li>
                  <li>Regulatory compliance is mandatory for all recovery activities</li>
                  <li>Borrower rights must be respected throughout the recovery process</li>
                  <li>Proper documentation and procedures are critical for legal enforcement</li>
                </ul>
              </div>

              <div className="card-grid">
                <div className="card">
                  <h4><FaSearchDollar /> Strategic Implications</h4>
                  <ul>
                    <li><strong>Partner Onboarding:</strong> Ensure recovery partners understand applicable forums</li>
                    <li><strong>Training Modules:</strong> Include judiciary pathways in agent certification</li>
                    <li><strong>Data Mapping:</strong> Align borrower segmentation with legal recovery options</li>
                    <li><strong>Compliance SOPs:</strong> Build workflows respecting jurisdiction and timelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Legal Forums Section */}
        {activeTab === 'forums' && (
          <section className="content-section">
            <h2><FaBalanceScale /> Legal Forums for Debt Recovery</h2>
            
            <div className="card-grid">
              <div className="card">
                <h3><FaUniversity /> Civil Courts</h3>
                <ul>
                  <li><strong>Jurisdiction:</strong> Summary suits under Order XXXVII of CPC for undisputed debts</li>
                  <li><strong>Use Case:</strong> Private lenders, service providers</li>
                  <li><strong>Limitation:</strong> Slower process, higher cost</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaGavel /> Debt Recovery Tribunals (DRTs)</h3>
                <ul>
                  <li><strong>Established Under:</strong> RDDBFI Act, 1993</li>
                  <li><strong>Jurisdiction:</strong> Debts over ₹20 lakh involving banks/NBFCs</li>
                  <li><strong>Appeals:</strong> Handled by DRATs (5 DRATs and 30+ DRTs across India)</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaFileContract /> SARFAESI Act Mechanism</h3>
                <ul>
                  <li><strong>Full Name:</strong> Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002</li>
                  <li><strong>Power:</strong> Secured creditors can seize collateral without court intervention</li>
                  <li><strong>Support:</strong> District Magistrates assist in enforcement</li>
                  <li><strong>Use Case:</strong> Secured loans by banks/NBFCs</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaBalanceScale /> Insolvency & Bankruptcy Code</h3>
                <ul>
                  <li><strong>Forum:</strong> NCLT for corporate debtors; DRT for individuals</li>
                  <li><strong>Trigger:</strong> Borrower default leading to insolvency</li>
                  <li><strong>Outcome:</strong> Restructuring, liquidation, or settlement</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaGavel /> Criminal Courts</h3>
                <ul>
                  <li><strong>Applicable Laws:</strong> IPC for fraud, NI Act for cheque bounce</li>
                  <li><strong>Use Case:</strong> Criminal misconduct or dishonored instruments</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaHandshake /> Alternative Dispute Resolution</h3>
                <ul>
                  <li><strong>Methods:</strong> Arbitration, mediation, conciliation</li>
                  <li><strong>Use Case:</strong> Contractual disputes, private lending</li>
                  <li><strong>Enforcement:</strong> Arbitration awards via civil courts</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* SOP Section */}
        {activeTab === 'sop' && (
          <section className="content-section">
            <h2><FaClipboardList /> Standard Operating Procedure: Legal Forum Mapping</h2>
            
            <div className="card">
              <h3><FaClipboardList /> Objective</h3>
              <p>To guide recovery agents, partners, and internal teams in selecting the correct legal forum based on loan type, borrower profile, and recovery strategy.</p>
            </div>

            <div className="step-cards">
              <div className="step-card">
                <div className="step-number">1</div>
                <h4>Classify the Debt</h4>
                <ul>
                  <li>Secured Loan → Has collateral (e.g., property, vehicle)</li>
                  <li>Unsecured Loan → No collateral (e.g., personal loan, credit card)</li>
                  <li>Corporate Debt → Borrower is a company or LLP</li>
                  <li>Individual Debt → Borrower is a person</li>
                </ul>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <h4>Determine Amount & Lender Type</h4>
                <ul>
                  {/* <li>Debt > ₹20 lakh → Eligible for DRT</li> */}
                  <li>Debt &gt; ₹20 lakh → Eligible for DRT</li>

                  {/* <li>Debt < ₹20 lakh → Civil Court or ADR</li> */}
                  <li>Debt &lt; ₹20 lakh → Civil Court or ADR</li>

                  <li>Lender is Bank/NBFC → SARFAESI or DRT</li>
                  <li>Lender is Private/Unregulated → Civil Court or ADR</li>
                </ul>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <h4>Choose Forum Based on Conditions</h4>
                <div className="table-container">
                  <table className="forum-table">
                    <thead>
                      <tr>
                        <th>Condition</th>
                        <th>Legal Forum</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Secured loan by bank/NBFC</td>
                        <td>SARFAESI Act (via District Magistrate)</td>
                      </tr>
                      <tr>
                        {/* <td>Unsecured loan by bank/NBFC > ₹20 lakh</td> */}
                        <td>Unsecured loan by bank/NBFC &gt; ₹20 lakh</td>

                        <td>Debt Recovery Tribunal (DRT)</td>
                      </tr>
                      <tr>
                        <td>Corporate default</td>
                        <td>NCLT under Insolvency & Bankruptcy Code</td>
                      </tr>
                      <tr>
                        {/* <td>Individual default < ₹20 lakh</td> */}
                        <td>Individual default &lt; ₹20 lakh</td>

                        <td>Civil Court (Summary Suit under CPC)</td>
                      </tr>
                      <tr>
                        <td>Cheque bounce</td>
                        <td>Criminal Court (NI Act, Section 138)</td>
                      </tr>
                      <tr>
                        <td>Fraud or misrepresentation</td>
                        <td>Criminal Court (IPC)</td>
                      </tr>
                      <tr>
                        <td>Private lender dispute</td>
                        <td>Civil Court or Arbitration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">4</div>
                <h4>Initiate Recovery Process</h4>
                <ul>
                  <li>Send Legal Notice (mandatory for most forums)</li>
                  <li>Prepare Documentation (loan agreement, KYC, payment history)</li>
                  <li>File Case or Application (based on forum)</li>
                  <li>Track Progress & Update CRM</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Vehicle Recovery Section */}
        {activeTab === 'vehicle' && (
          <section className="content-section">
            <h2><FaHandHoldingUsd /> Vehicle Loan Recovery Process</h2>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-icon"><FaEnvelope /></div>
                <h3>1. Reminder & Demand Notices</h3>
                <p>Initial reminders followed by formal written notice requesting payment within 15-30 days.</p>
              </div>

              <div className="process-step">
                <div className="step-icon"><FaHandHoldingUsd /></div>
                <h3>2. Repossession of Vehicle</h3>
                <p>Peaceful repossession with proper documentation and issuance of repossession memo.</p>
              </div>

              <div className="process-step">
                <div className="step-icon"><FaNewspaper /></div>
                <h3>3. Pre-Sale Notice</h3>
                <p>Inform borrower of intent to sell with vehicle valuation and auction details.</p>
              </div>

              <div className="process-step">
                <div className="step-icon"><FaMoneyCheckAlt /></div>
                <h3>4. Auction or Sale of Vehicle</h3>
                <p>Transparent auction process with proceeds adjusted against outstanding loan.</p>
              </div>

              <div className="process-step">
                <div className="step-icon"><FaFileAlt /></div>
                <h3>5. Legal Notice Before Filing Suit</h3>
                <p>Final warning before initiating civil suit for recovery of balance amount.</p>
              </div>

              <div className="process-step">
                <div className="step-icon"><FaGavel /></div>
                <h3>6. Civil Suit for Recovery</h3>
                <p>Filed under Indian Contract Act or CPC for recovery of outstanding dues.</p>
              </div>

              <div className="process-step">
                <div className="step-icon"><FaExclamationTriangle /></div>
                <h3>7. Criminal Action (If Applicable)</h3>
                <p>For cheque bounce under NI Act or fraud under IPC.</p>
              </div>
            </div>

            <div className="card warning-card">
              <h4><FaExclamationTriangle /> Important Compliance Notes</h4>
              <ul>
                <li>Repossession must be non-violent and documented</li>
                <li>Borrower must be given chance to repay before auction</li>
                <li>RBI guidelines mandate respectful conduct and grievance redressal</li>
              </ul>
            </div>
          </section>
        )}

        {/* Templates Section */}
        {activeTab === 'templates' && (
          <section className="content-section">
            <h2><FaFileAlt /> Legal Document Templates</h2>
            
            <div className="template-cards">
              <div className="template-card">
                <h3><FaClipboardList /> Repossession Memo</h3>
                <div className="template-content">
                  <p><strong>Date:</strong> [DD/MM/YYYY]</p>
                  <p><strong>Loan Account No.:</strong> [XXXXXX]</p>
                  <p><strong>Borrower Name:</strong> [Full Name]</p>
                  <p><strong>Vehicle Details:</strong> [Make, Model, Registration No.]</p>
                  <p>This is to confirm that the above-mentioned vehicle has been repossessed by [Bank/NBFC Name] on [Date] due to non-payment of EMIs as per the loan agreement. The repossession was conducted peacefully and in accordance with RBI's Fair Practices Code.</p>
                  <p>Both parties acknowledge the condition of the vehicle and the outstanding dues of ₹[Amount].</p>
                  <p>Borrower Signature: ____________________</p>
                  <p>Recovery Agent Signature: ____________________</p>
                  <p>Witness (if any): ____________________</p>
                </div>
              </div>

              <div className="template-card">
                <h3><FaNewspaper /> Pre-Sale Notice</h3>
                <div className="template-content">
                  <p><strong>Subject:</strong> Pre-Sale Notice – Repossessed Vehicle under Loan Account [XXXXXX]</p>
                  <p>Dear [Borrower Name],</p>
                  <p>This is to inform you that the vehicle [Make, Model, Reg. No.] financed under Loan Account [XXXXXX] was repossessed on [Date] due to continued default.</p>
                  <p>You are hereby given 15 days from the date of this notice to repay the outstanding amount of ₹[Amount] and reclaim the vehicle. Failing which, the vehicle will be sold via public auction or private sale on or after [Auction Date].</p>
                  <p>Any surplus from the sale will be refunded to you. Any shortfall will remain payable.</p>
                  <p>Sincerely,</p>
                  <p>[Authorized Officer Name]</p>
                  <p>[Bank/NBFC Name]</p>
                  <p>[Contact Details]</p>
                </div>
              </div>

              <div className="template-card">
                <h3><FaFileAlt /> Legal Notice Before Filing Civil Suit</h3>
                <div className="template-content">
                  <p><strong>Subject:</strong> Final Legal Notice – Recovery of Vehicle Loan Dues</p>
                  <p>To: [Borrower Name]</p>
                  <p>Address: [Full Address]</p>
                  <p>Dear Sir/Madam,</p>
                  <p>Despite repeated reminders and repossession of the financed vehicle [Make, Model], your loan account [XXXXXX] continues to reflect an unpaid balance of ₹[Amount].</p>
                  <p>This is a final legal notice. If the dues are not cleared within 15 days of receipt of this notice, we shall initiate legal proceedings under the Indian Contract Act and Civil Procedure Code for recovery of the balance amount, along with applicable interest and legal costs.</p>
                  <p>This notice may be used as evidence in court.</p>
                  <p>Sincerely,</p>
                  <p>[Legal Counsel Name]</p>
                  <p>[Law Firm or Bank Legal Cell]</p>
                  <p>[Contact Details]</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* NCLT/NCLAT Section */}
        {activeTab === 'nclt' && (
          <section className="content-section">
            <h2><FaUniversity /> NCLT vs NCLAT: Structure & Strategic Role</h2>
            
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>NCLT</th>
                    <th>NCLAT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full Form</td>
                    <td>National Company Law Tribunal</td>
                    <td>National Company Law Appellate Tribunal</td>
                  </tr>
                  <tr>
                    <td>Established Under</td>
                    <td>Companies Act, 2013</td>
                    <td>Companies Act, 2013</td>
                  </tr>
                  <tr>
                    <td>Primary Role</td>
                    <td>Adjudicates corporate disputes, insolvency cases, and recovery petitions</td>
                    <td>Hears appeals against NCLT decisions</td>
                  </tr>
                  <tr>
                    <td>Jurisdiction</td>
                    <td>First-level forum for IBC, mergers, oppression, mismanagement</td>
                    <td>Appellate forum for NCLT and Competition Commission of India (CCI)</td>
                  </tr>
                  <tr>
                    <td>Applicable Law</td>
                    <td>Insolvency & Bankruptcy Code (IBC), Companies Act</td>
                    <td>Same laws, but only for appeals</td>
                  </tr>
                  <tr>
                    <td>Bench Composition</td>
                    <td>Judicial + Technical Members</td>
                    <td>Judicial + Technical Members</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>14+ benches across India</td>
                    <td>Principal bench in New Delhi</td>
                  </tr>
                  <tr>
                    <td>Appeal Path</td>
                    <td>NCLT → NCLAT → Supreme Court</td>
                    <td>Final appeal lies with the Supreme Court</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-grid">
              <div className="card">
                <h3><FaGavel /> NCLT: Where Recovery Begins</h3>
                <ul>
                  <li><strong>Section 7 (IBC):</strong> Financial creditors initiate insolvency against corporate debtors</li>
                  <li><strong>Section 9 (IBC):</strong> Operational creditors (vendors, service providers) file for recovery</li>
                  <li><strong>Section 10 (IBC):</strong> Corporate debtor voluntarily initiates insolvency</li>
                  <li><strong>Outcome:</strong> Resolution plan or liquidation, depending on Committee of Creditors (CoC) decision</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaBalanceScale /> NCLAT: Where Disputes Are Resolved</h3>
                <ul>
                  <li><strong>Appeals:</strong> If a creditor or debtor disagrees with NCLT's decision (e.g., rejection of insolvency petition, approval of resolution plan)</li>
                  <li><strong>Clarifications:</strong> NCLAT often interprets IBC provisions, shaping jurisprudence</li>
                  <li><strong>Landmark Cases:</strong> Essar Steel, Swiss Ribbons, Innoventive Industries—all refined creditor rights and timelines</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Code of Conduct Section */}
        {activeTab === 'conduct' && (
          <section className="content-section">
            <h2><FaShieldAlt /> Code of Conduct for Recovery Agents</h2>
            
            <div className="card">
              <h3><FaUserTie /> RBI Guidelines for Recovery Agents</h3>
              <ul>
                <li>Regulated Entities (REs) must ensure agents are trained and certified</li>
                <li>Agents must carry authorized identity cards with clear identification</li>
                <li>Language & Tone: Must be respectful, non-intimidating, and in a language the borrower understands</li>
                <li>Privacy: No intrusion into borrower's family, workplace, or social circles</li>
                <li>Documentation: All interactions must be recorded and traceable</li>
              </ul>
            </div>

            <div className="card-grid">
              <div className="card">
                <h3><FaExclamationTriangle /> Prohibited Practices</h3>
                <ul>
                  <li>Harassment, verbal or physical intimidation</li>
                  <li>Public humiliation or threats</li>
                  <li>Anonymous or persistent calls</li>
                  <li>Misleading representations or impersonation</li>
                  <li>Contacting borrowers via social media inappropriately</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaShieldAlt /> Borrower Rights</h3>
                <ul>
                  <li>Right to dignity and privacy</li>
                  <li>Right to request specific contact times or locations</li>
                  <li>Right to be informed of the recovery agent's identity and authority</li>
                  <li>Right to grievance redressal mechanisms</li>
                </ul>
              </div>

              <div className="card">
                <h3><FaGavel /> Oversight & Accountability</h3>
                <ul>
                  <li>REs are fully responsible for the actions of their agents</li>
                  <li>Violations are taken seriously and may attract penalties or regulatory action</li>
                  <li>Regular monitoring and audits of recovery practices are required</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3><FaBook /> Code of Conduct Principles</h3>
              <ul>
                <li><strong>Professionalism:</strong> Act within laws and institutional policies</li>
                <li><strong>Fairness:</strong> Treat customers with respect and avoid coercion</li>
                <li><strong>Confidentiality:</strong> Protect borrower data; no unauthorized sharing</li>
                <li><strong>Transparency:</strong> No false promises or misrepresentation</li>
                <li><strong>Ethical Conduct:</strong> Reject bribery, fraud, and unauthorized access</li>
              </ul>
            </div>
          </section>
        )}

        {/* Legal Notices Section */}
        {activeTab === 'notices' && (
          <section className="content-section">
            <h2><FaEnvelope /> Types of Legal Notices in Collection & Recovery</h2>
            
            <div className="notice-cards">
              <div className="notice-card">
                <h3><FaEnvelope /> Demand Notice</h3>
                <p><strong>Purpose:</strong> First formal intimation to the borrower about overdue dues</p>
                <p><strong>Contents:</strong> Loan details, outstanding amount, due date, and request for payment</p>
                <p><strong>Legal Basis:</strong> Often issued under general contract law or banking terms</p>
                <p><strong>Tone:</strong> Polite but firm</p>
                <div className="notice-example">
                  <p><strong>Subject:</strong> Demand Notice for Overdue Loan Payment – Account No. [XXXX]</p>
                  <p>To: [Borrower Name]</p>
                  <p>Address: [Borrower Address]</p>
                  <p>Dear Sir/Madam,</p>
                  <p>This is to inform you that your loan account [XXXX] with [Bank/NBFC Name] has an outstanding amount of ₹[Amount], which was due on [Due Date]. Despite prior reminders, the payment remains unpaid.</p>
                  <p>You are hereby requested to pay the said amount within 15 days from the date of this notice, failing which further recovery actions may be initiated.</p>
                  <p>Sincerely,</p>
                  <p>[Authorized Signatory]</p>
                  <p>[Bank/NBFC Name]</p>
                  <p>[Contact Details]</p>
                </div>
              </div>

              <div className="notice-card">
                <h3><FaFileContract /> SARFAESI Notice – Section 13(2)</h3>
                <p><strong>Purpose:</strong> Initiates recovery for secured loans without court intervention</p>
                <p><strong>Issued By:</strong> Secured creditors (banks/NBFCs)</p>
                <p><strong>Contents:</strong> Demands repayment within 60 days; warns of asset possession if unpaid</p>
                <p><strong>Legal Weight:</strong> Strong—can lead to asset seizure</p>
                <div className="notice-example">
                  <p><strong>Subject:</strong> Notice under Section 13(2) of SARFAESI Act – Loan Account [XXXX]</p>
                  <p>To: [Borrower Name]</p>
                  <p>Address: [Borrower Address]</p>
                  <p>Dear Sir/Madam,</p>
                  <p>Under Section 13(2) of the SARFAESI Act, 2002, you are hereby notified that your loan account [XXXX] has been classified as a Non-Performing Asset (NPA) due to non-payment of dues amounting to ₹[Amount] as of [Date].</p>
                  <p>You are required to discharge the liability within 60 days from the date of this notice, failing which the secured asset(s) will be taken into possession under Section 13(4) of the Act.</p>
                  <p>Sincerely,</p>
                  <p>[Authorized Officer]</p>
                  <p>[Bank Name]</p>
                  <p>[Contact Details]</p>
                </div>
              </div>

              <div className="notice-card">
                <h3><FaGavel /> Cheque Bounce Notice – Section 138 of NI Act</h3>
                <p><strong>Purpose:</strong> Sent when a repayment cheque is dishonored</p>
                <p><strong>Legal Basis:</strong> Negotiable Instruments Act, 1881</p>
                <p><strong>Timeline:</strong> Must be sent within 30 days of bounce; gives 15 days to repay</p>
                <p><strong>Next Step:</strong> Criminal complaint if unpaid</p>
                <div className="notice-example">
                  <p><strong>Subject:</strong> Legal Notice under Section 138 of Negotiable Instruments Act</p>
                  <p>To: [Borrower Name]</p>
                  <p>Address: [Borrower Address]</p>
                  <p>Dear Sir/Madam,</p>
                  <p>This is to inform you that the cheque bearing number [Cheque No.] dated [Date] for ₹[Amount] issued by you in favor of [Bank/NBFC Name] was dishonored due to [Reason].</p>
                  <p>You are hereby called upon to make the payment within 15 days of receipt of this notice, failing which legal action under Section 138 of the Negotiable Instruments Act shall be initiated.</p>
                  <p>Sincerely,</p>
                  <p>[Legal Counsel Name]</p>
                  <p>[Law Firm/Bank Legal Cell]</p>
                  <p>[Contact Details]</p>
                </div>
              </div>

              <div className="notice-card">
                <h3><FaFileAlt /> Final Legal Notice</h3>
                <p><strong>Purpose:</strong> Final warning before initiating civil litigation</p>
                <p><strong>Contents:</strong> Details of default, legal consequences, and time to respond</p>
                <p><strong>Used For:</strong> Unsecured loans, credit cards, personal loans</p>
                <p><strong>Sent By:</strong> Legal department or external counsel</p>
                <div className="notice-example">
                  <p><strong>Subject:</strong> Final Legal Notice – Recovery of Outstanding Dues</p>
                  <p>To: [Borrower Name]</p>
                  <p>Address: [Borrower Address]</p>
                  <p>Dear Sir/Madam,</p>
                  <p>This is the final legal notice regarding your unpaid dues of ₹[Amount] under Loan Account [XXXX]. Despite multiple reminders, the amount remains unpaid.</p>
                  <p>If the payment is not received within 15 days of this notice, we shall initiate legal proceedings for recovery, including but not limited to filing a civil suit under applicable laws.</p>
                  <p>This notice may be used as evidence in court.</p>
                  <p>Sincerely,</p>
                  <p>[Legal Counsel Name]</p>
                  <p>[Law Firm/Bank Legal Cell]</p>
                  <p>[Contact Details]</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="legal-footer">
        <div className="container">
          <p>Legal Framework for Debt Recovery in India</p>
          <p>For regulatory updates, refer to official RBI notifications and legal statutes</p>
          <p>© 2023 Debt Recovery Legal Knowledge Base</p>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Dashboard;