// import React, { useState, useEffect } from 'react';
// import CommonDebt from './CommonDebt'


// import DRA from './DRA';
// import Legal from './Legal';


// // import {
// //   FaBalanceScale, FaGavel, FaFileContract, FaHandshake,
// //   FaBook, FaFileAlt, FaExclamationTriangle, FaClipboardList,
// //   FaEnvelope, FaNewspaper, FaMoneyCheckAlt, FaUniversity,
// //   FaChartBar, FaShieldAlt, FaUserTie, FaHandHoldingUsd
// // } from 'react-icons/fa';
// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState(0);
 
//   // Tab data with component mapping
//   const tabs = [
//     { id: 0, name: "Coomon Debt Info & Activities", component: <DashboardComponent /> },
//     { id: 1, name: "DRA", component: <AnalyticsComponent /> },
//     { id: 2, name: "Legal & Guidelince CoC", component: <SettingsComponent /> }
//   ];
  
//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <div className="logo">
//           <h2>My Dashboard</h2>
//         </div>
//         <ul className="tabs">
//           {tabs.map(tab => (
//             <li 
//               key={tab.id} 
//               className={activeTab === tab.id ? 'active' : ''}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.name}
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <div className="main-content">
//         <div className="content-header">
//           <h1>{tabs[activeTab].name}</h1>
//         </div>
//         <div className="content-body">
//           {tabs[activeTab].component}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Dummy Components
// const DashboardComponent = () => {
//   return (
//     <div className="component">
//       <CommonDebt />
//     </div>
//   );
// };

// const AnalyticsComponent = () => {
 
//   return (
//     <div className="component">
//       <DRA />
//     </div>
//   );
// };

// const SettingsComponent = () => {

//   return (
//     <div className="component">
//       <Legal />
//     </div>
//   );
// };

// export default Dashboard;









import React, { useState } from 'react';
import { 
  FaBalanceScale, FaGavel, FaFileContract, FaHandshake,
  FaBook, FaFileAlt, FaExclamationTriangle, FaClipboardList,
  FaEnvelope,  FaUniversity,
  FaChartBar, FaShieldAlt, FaUserTie, FaHandHoldingUsd,
  FaInfoCircle, FaCheckCircle, FaTasks, FaClock, 
  FaMoneyBillWave, FaQuestionCircle, FaUser, FaGraduationCap, 
   FaCalendarAlt, 
   FaLandmark, FaComments, FaChartLine, 
  FaClipboardCheck, FaSearchDollar, FaPhone, FaSms, FaUsers, 
  FaMapMarkerAlt, 
  FaCalculator, FaCoins,
   FaChartPie, 
  FaCar,FaFileInvoiceDollar 
} from 'react-icons/fa';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
 
  // Tab data with component mapping
  const tabs = [
    { id: 0, name: "Common Debt Info & Activities", component: <DashboardComponent /> },
    { id: 1, name: "DRA", component: <AnalyticsComponent /> },
    { id: 2, name: "Legal & Guidance CoC", component: <SettingsComponent /> }
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
      <CommonDebt />
    </div>
  );
};

const AnalyticsComponent = () => {
  return (
    <div className="component">
      <DRA />
    </div>
  );
};

const SettingsComponent = () => {
  return (
    <div className="component">
      <Legal />
    </div>
  );
};

// CommonDebt Component
const CommonDebt = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return <Overview />;
      case 'civil-courts':
        return <CivilCourts />;
      case 'drts':
        return <DRTs />;
      case 'sarfasi':
        return <SARFAESI />;
      case 'ibc':
        return <IBC />;
      case 'criminal-courts':
        return <CriminalCourts />;
      case 'sop':
        return <SOP />;
      case 'vehicle-loan':
        return <VehicleLoan />;
      case 'templates':
        return <Templates />;
      case 'nclt':
        return <NCLT />;
      case 'rbi':
        return <RBI />;
      case 'notices':
        return <Notices />;
      case 'communication':
        return <CommunicationPhrases />;
      case 'terms':
        return <RecoveryTerms />;
      case 'dialers':
        return <Dialers />;
      case 'dpd':
        return <DPDStages />;
      case 'field-action':
        return <FieldAction />;
      case 'lending-products':
        return <LendingProducts />;
      case 'mis-dashboards':
        return <MISDashboards />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="debt-recovery-dashboard">
      <header className="dashboard-header">
        <h1><FaBalanceScale /> Debt Recovery & Collection Management System</h1>
        <p>Comprehensive platform for debt recovery agents, banks, and financial institutions</p>
      </header>
      
      <nav className="dashboard-nav">
        <button onClick={() => setActiveSection('overview')} className={activeSection === 'overview' ? 'active' : ''}>
          <FaChartLine /> Overview
        </button>
        <button onClick={() => setActiveSection('communication')} className={activeSection === 'communication' ? 'active' : ''}>
          <FaPhone /> Communication
        </button>
        <button onClick={() => setActiveSection('terms')} className={activeSection === 'terms' ? 'active' : ''}>
          <FaBook /> Terms
        </button>
        <button onClick={() => setActiveSection('dialers')} className={activeSection === 'dialers' ? 'active' : ''}>
          <FaPhone /> Dialers
        </button>
        <button onClick={() => setActiveSection('dpd')} className={activeSection === 'dpd' ? 'active' : ''}>
          <FaCalendarAlt /> DPD Stages
        </button>
        <button onClick={() => setActiveSection('field-action')} className={activeSection === 'field-action' ? 'active' : ''}>
          <FaMapMarkerAlt /> Field Action
        </button>
        <button onClick={() => setActiveSection('lending-products')} className={activeSection === 'lending-products' ? 'active' : ''}>
          <FaCoins /> Lending Products
        </button>
        <button onClick={() => setActiveSection('mis-dashboards')} className={activeSection === 'mis-dashboards' ? 'active' : ''}>
          <FaChartBar /> MIS & Dashboards
        </button>
        <button onClick={() => setActiveSection('civil-courts')} className={activeSection === 'civil-courts' ? 'active' : ''}>
          <FaLandmark /> Civil Courts
        </button>
        <button onClick={() => setActiveSection('drts')} className={activeSection === 'drts' ? 'active' : ''}>
          <FaGavel /> DRTs
        </button>
        <button onClick={() => setActiveSection('sarfasi')} className={activeSection === 'sarfasi' ? 'active' : ''}>
          <FaFileContract /> SARFAESI
        </button>
        <button onClick={() => setActiveSection('ibc')} className={activeSection === 'ibc' ? 'active' : ''}>
          <FaHandshake /> IBC
        </button>
        <button onClick={() => setActiveSection('criminal-courts')} className={activeSection === 'criminal-courts' ? 'active' : ''}>
          <FaExclamationTriangle /> Criminal Courts
        </button>
        <button onClick={() => setActiveSection('sop')} className={activeSection === 'sop' ? 'active' : ''}>
          <FaClipboardList /> SOP
        </button>
        <button onClick={() => setActiveSection('vehicle-loan')} className={activeSection === 'vehicle-loan' ? 'active' : ''}>
          <FaCar /> Vehicle Loans
        </button>
        <button onClick={() => setActiveSection('templates')} className={activeSection === 'templates' ? 'active' : ''}>
          <FaFileAlt /> Templates
        </button>
        <button onClick={() => setActiveSection('nclt')} className={activeSection === 'nclt' ? 'active' : ''}>
          <FaUniversity /> NCLT/NCLAT
        </button>
        <button onClick={() => setActiveSection('rbi')} className={activeSection === 'rbi' ? 'active' : ''}>
          <FaShieldAlt /> RBI Guidelines
        </button>
        <button onClick={() => setActiveSection('notices')} className={activeSection === 'notices' ? 'active' : ''}>
          <FaEnvelope /> Legal Notices
        </button>
      </nav>
      
      <main className="dashboard-content">
        {renderContent()}
      </main>

      <footer className="dashboard-footer">
        <p>Thank You</p>
        <h3>Suppcohort</h3>
        <p>Empowering India's Debt Management Ecosystem</p>
        <p>📍 www.suppcohort.com | 📧 contact@suppcohort.com</p>
        <p>"Let's build an ethical, inclusive, and opportunity-driven future for debt management in India."</p>
      </footer>
    </div>
  );
};

// Component for each section
const Overview = () => (
  <div className="section">
    <h2><FaChartLine /> Debt Recovery Forums Overview</h2>
    <div className="card-grid">
      <div className="card">
        <FaLandmark />
        <h3>Civil Courts</h3>
        <p>For undisputed debts under Order XXXVII of CPC</p>
      </div>
      <div className="card">
        <FaGavel />
        <h3>Debt Recovery Tribunals (DRTs)</h3>
        <p>For debts over ₹20 lakh involving banks/NBFCs</p>
      </div>
      <div className="card">
        <FaFileContract />
        <h3>SARFAESI Act</h3>
        <p>Allows secured creditors to seize collateral without court intervention</p>
      </div>
      <div className="card">
        <FaHandshake />
        <h3>Insolvency & Bankruptcy Code (IBC)</h3>
        <p>For corporate debt resolution via NCLT</p>
      </div>
      <div className="card">
        <FaExclamationTriangle />
        <h3>Criminal Courts</h3>
        <p>For fraud, cheating, or cheque bounce cases</p>
      </div>
    </div>
  </div>
);

const CommunicationPhrases = () => (
  <div className="section">
    <h2><FaPhone /> Collection & Recovery Communication Phrases</h2>
    
    <div className="subsection">
      <h3><FaPhone /> Phone Call Phrases</h3>
      
      <div className="info-card">
        <h4 className="green"><FaPhone /> Opening the Conversation</h4>
        <ul>
          <li>"Good morning, am I speaking with Mr./Ms. [Name]? I'm calling on behalf of [Bank/Agency Name] regarding your loan account."</li>
          <li>"I hope I'm not catching you at a bad time. I'd like to discuss a matter related to your outstanding dues."</li>
        </ul>
      </div>
      
      <div className="info-card">
        <h4 className="yellow"><FaPhone /> Addressing the Issue</h4>
        <ul>
          <li>"Our records show that your payment due on [Date] hasn't been received yet. I wanted to check if everything is alright."</li>
          <li>"We understand that financial situations can change. Is there any difficulty you're facing that we should be aware of?"</li>
        </ul>
      </div>
      
      <div className="info-card">
        <h4 className="blue"><FaPhone /> Offering Solutions</h4>
        <ul>
          <li>"We'd like to help you resolve this in a way that works for you. Would you be open to discussing a revised payment plan?"</li>
          <li>"There are options available such as part-payment or rescheduling. Let's explore what suits you best."</li>
        </ul>
      </div>
      
      <div className="info-card">
        <h4 className="red"><FaPhone /> Closing the Call</h4>
        <ul>
          <li>"Thank you for your time today. I'll note down your concerns and follow up as discussed."</li>
          <li>"We appreciate your cooperation. Please feel free to reach out if you need any assistance before the next due date."</li>
        </ul>
      </div>
    </div>
  </div>
);

const RecoveryTerms = () => (
  <div className="section">
    <h2><FaBook /> Collection & Recovery Terminology</h2>
    
    <div className="subsection">
      <h3><FaFileInvoiceDollar /> Financial & Account Terms</h3>
      <div className="info-card">
        <ul>
          <li><strong>NPA (Non-Performing Asset):</strong> A loan where the borrower has not made scheduled payments for 90+ days.</li>
          <li><strong>Overdue:</strong> Payment not made by the due date.</li>
          <li><strong>EMI (Equated Monthly Installment):</strong> Fixed monthly payment toward a loan.</li>
          <li><strong>Outstanding Amount:</strong> Total unpaid dues including principal, interest, and penalties.</li>
          <li><strong>Charge-off:</strong> When a lender writes off a loan as a loss but may still pursue recovery.</li>
        </ul>
      </div>
    </div>
  </div>
);

const Dialers = () => (
  <div className="section">
    <h2><FaPhone /> Dialer Types & Use Cases</h2>
    
    <div className="info-card">
      <p>Dialers are essential tools in outbound communication—especially in debt recovery, sales, and customer engagement. They automate the calling process, improve agent productivity, and reduce idle time.</p>
    </div>
    
    <div className="subsection">
      <h3><FaPhone /> Types of Dialers & Their Use Cases</h3>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Dialer Type</th>
              <th>How It Works</th>
              <th>Best Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Preview Dialer</strong></td>
              <td>Shows customer info before dialing; agent manually initiates the call.</td>
              <td>High-value interactions, upselling, or sensitive recovery calls.</td>
            </tr>
            <tr>
              <td><strong>Progressive Dialer</strong></td>
              <td>Dials one number at a time as soon as the agent becomes available.</td>
              <td>Balanced outreach with moderate automation; good for compliance-heavy industries.</td>
            </tr>
            <tr>
              <td><strong>Predictive Dialer</strong></td>
              <td>Uses algorithms to dial multiple numbers ahead of time, predicting agent availability.</td>
              <td>High-volume campaigns like collections, lead generation, or surveys.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const DPDStages = () => (
  <div className="section">
    <h2><FaCalendarAlt /> DPD & Delinquency Stages</h2>
    
    <div className="subsection">
      <h3><FaCalendarAlt /> What Is DPD (Days Past Due)?</h3>
      <div className="info-card">
        <p>DPD (Days Past Due) is a metric used to track how many days a borrower has missed a scheduled payment.</p>
        <p>It's a critical indicator in credit risk assessment, portfolio health monitoring, and regulatory reporting.</p>
        
        <h4><FaCalculator /> DPD Calculation</h4>
        <p><strong>Formula:</strong> DPD = Current Date – Payment Due Date</p>
        <p><strong>Example:</strong> If a payment was due on August 1st and today is August 20th, the DPD is 19.</p>
      </div>
    </div>
  </div>
);

const FieldAction = () => (
  <div className="section">
    <h2><FaMapMarkerAlt /> Field Action in Debt Collection & Recovery</h2>
    
    <div className="subsection">
      <h3><FaMapMarkerAlt /> What Is Field Collection?</h3>
      <div className="info-card">
        <p>Field collection refers to face-to-face recovery efforts by trained agents who visit borrowers at their residence, workplace, or other agreed locations. It's typically used for:</p>
        <ul>
          <li>Early bucket recovery (1–30 days overdue)</li>
          <li>X bucket management (60+ days overdue)</li>
          <li>Skip tracing (locating absconding borrowers)</li>
          <li>Document pickup (e.g., post-dated cheques, KYC updates)</li>
        </ul>
      </div>
    </div>
  </div>
);

const LendingProducts = () => (
  <div className="section">
    <h2><FaCoins /> Lending Products Categorization</h2>
    
    <div className="subsection">
      <h3><FaUsers /> By Borrower Type</h3>
      <div className="info-card">
        <ul>
          <li><strong>Retail Lending</strong> – Individuals (personal, home, auto)</li>
          <li><strong>SME Lending</strong> – Small and medium enterprises</li>
          <li><strong>Corporate Lending</strong> – Large businesses</li>
          <li><strong>Institutional Lending</strong> – Government or financial entities</li>
        </ul>
      </div>
    </div>
  </div>
);

const MISDashboards = () => (
  <div className="section">
    <h2><FaChartBar /> Types of MIS & Dashboards in Collection Recovery</h2>
    
    <div className="subsection">
      <h3><FaChartPie /> 1. Portfolio Performance Dashboard</h3>
      <div className="info-card">
        <p>Tracks overall health of the debt portfolio.</p>
        <ul>
          <li><strong>Metrics:</strong> Recovery rate, delinquency %, write-offs, NPA trends</li>
          <li><strong>Use:</strong> Strategic planning, investor reporting, risk profiling</li>
        </ul>
      </div>
    </div>
  </div>
);

const CivilCourts = () => (
  <div className="section">
    <h2><FaLandmark /> Civil Courts</h2>
    <div className="info-card">
      <h3><FaSearchDollar /> Jurisdiction</h3>
      <p>Used for filing summary suits under Order XXXVII of the Civil Procedure Code (CPC) for undisputed debts.</p>
      
      <h3><FaHandHoldingUsd /> Use Case</h3>
      <p>Ideal for private lenders, service providers, or when no specialized tribunal applies.</p>
      
      <h3><FaExclamationTriangle /> Limitations</h3>
      <p>Slower process, higher cost, and procedural complexity.</p>
    </div>
  </div>
);

const DRTs = () => (
  <div className="section">
    <h2><FaGavel /> Debt Recovery Tribunals (DRTs)</h2>
    <div className="info-card">
      <h3><FaBook /> Established Under</h3>
      <p>Recovery of Debts Due to Banks and Financial Institutions Act (RDDBFI), 1993.</p>
      
      <h3><FaSearchDollar /> Jurisdiction</h3>
      <p>Handles cases where debt exceeds ₹20 lakh and involves banks or NBFCs.</p>
      
      <h3><FaChartLine /> Process</h3>
      <p>Faster than civil courts; allows direct filing by financial institutions.</p>
      
      <h3><FaUniversity /> Appeals</h3>
      <p>Heard by Debt Recovery Appellate Tribunals (DRATs)—there are 5 DRATs and over 30 DRTs across India.</p>
    </div>
  </div>
);

const SARFAESI = () => (
  <div className="section">
    <h2><FaFileContract /> SARFAESI Act Mechanism</h2>
    <div className="info-card">
      <h3><FaBook /> Full Name</h3>
      <p>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002.</p>
      
      <h3><FaShieldAlt /> Power</h3>
      <p>Allows secured creditors to seize and sell collateral without court intervention.</p>
      
      <h3><FaUniversity /> Support</h3>
      <p>District Magistrates assist in enforcement if borrower resists possession.</p>
      
      <h3><FaHandHoldingUsd /> Use Case</h3>
      <p>For secured loans (e.g., property-backed), especially by banks and NBFCs.</p>
    </div>
  </div>
);

const IBC = () => (
  <div className="section">
    <h2><FaHandshake /> Insolvency & Bankruptcy Code (IBC), 2016</h2>
    <div className="info-card">
      <h3><FaUniversity /> Forum</h3>
      <p>National Company Law Tribunal (NCLT) for corporate debtors; Debt Recovery Tribunal for individuals.</p>
      
      <h3><FaExclamationTriangle /> Trigger</h3>
      <p>When borrower defaults and resolution is sought via insolvency.</p>
      
      <h3><FaStore /> Outcome</h3>
      <p>Can lead to restructuring, liquidation, or settlement.</p>
    </div>
  </div>
);

const CriminalCourts = () => (
  <div className="section">
    <h2><FaExclamationTriangle /> Criminal Courts</h2>
    <div className="info-card">
      <h3><FaBook /> Applicable Laws</h3>
      <ul>
        <li>Indian Penal Code (IPC) – for fraud, cheating, or criminal breach of trust.</li>
        <li>Negotiable Instruments Act, 1881 – for cheque bounce cases under Section 138.</li>
      </ul>
    </div>
  </div>
);

const SOP = () => (
  <div className="section">
    <h2><FaClipboardList /> Standard Operating Procedure (SOP)</h2>
    <div className="info-card">
      <h3><FaClipboardCheck /> Objective</h3>
      <p>To guide recovery agents, partners, and internal teams in selecting the correct legal forum based on loan type, borrower profile, and recovery strategy.</p>
      
      <h3><FaSearchDollar /> Step 1: Classify the Debt</h3>
      <ul>
        <li>Secured Loan → Has collateral (e.g., property, vehicle)</li>
        <li>Unsecured Loan → No collateral (e.g., personal loan, credit card)</li>
        <li>Corporate Debt → Borrower is a company or LLP</li>
        <li>Individual Debt → Borrower is a person</li>
      </ul>
    </div>
  </div>
);

const VehicleLoan = () => (
  <div className="section">
    <h2><FaCar /> Vehicle Loan Recovery Process</h2>
    <div className="info-card">
      <h3><FaEnvelope /> 1. Reminder & Demand Notices</h3>
      <p>Initial reminders via phone, SMS, emails followed by formal written notice requesting payment within specified time.</p>
      
      <h3><FaCar /> 2. Repossession of Vehicle</h3>
      <p>Peaceful repossession as per loan agreement and RBI's Fair Practices Code with proper documentation.</p>
      
      <h3><FaFileAlt /> 3. Pre-Sale Notice</h3>
      <p>Inform borrower of intent to sell with 7-15 days to repay and reclaim vehicle.</p>
      
      <h3><FaMoneyBillWave /> 4. Auction or Sale of Vehicle</h3>
      <p>Transparent public auction or private sale with proceeds adjusted against outstanding loan.</p>
    </div>
  </div>
);

const Templates = () => (
  <div className="section">
    <h2><FaFileAlt /> Legal Notice Templates</h2>
    <div className="info-card">
      <h3><FaFileAlt /> 1. Repossession Memo (Post-Vehicle Seizure)</h3>
      <div className="template">
        <p><strong>Repossession Memo</strong></p>
        <p>Date: [DD/MM/YYYY]</p>
        <p>Loan Account No.: [XXXXXX]</p>
        <p>Borrower Name: [Full Name]</p>
        <p>Vehicle Details: [Make, Model, Registration No.]</p>
        <p>This is to confirm that the above-mentioned vehicle has been repossessed by [Bank/NBFC Name] on [Date] due to non-payment of EMIs as per the loan agreement.</p>
        <p>Borrower Signature: ____________________</p>
        <p>Recovery Agent Signature: ____________________</p>
      </div>
    </div>
  </div>
);

const NCLT = () => (
  <div className="section">
    <h2><FaUniversity /> NCLT vs NCLAT: Structure & Strategic Role</h2>
    <div className="info-card">
      <div className="table-container">
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
              <td>Adjudicates corporate disputes, insolvency cases</td>
              <td>Hears appeals against NCLT decisions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const RBI = () => (
  <div className="section">
    <h2><FaShieldAlt /> RBI Guidelines on Collection & Recovery</h2>
    <div className="info-card">
      <p>These guidelines apply to all regulated entities (REs), including banks, NBFCs, housing finance companies, and asset reconstruction companies.</p>
      
      <h3><FaUserTie /> 1. Recovery Agent Engagement</h3>
      <ul>
        <li>Due Diligence: Agents must be vetted for background, character, and credit history</li>
        <li>Formal Agreement: Must include terms of engagement and code of conduct</li>
        <li>Training & Certification: Agents must be trained and certified by IIBF</li>
      </ul>
    </div>
  </div>
);

const Notices = () => (
  <div className="section">
    <h2><FaEnvelope /> Types of Legal Notices</h2>
    <div className="info-card">
      <h3><FaEnvelope /> 1. Demand Notice</h3>
      <p><strong>Purpose:</strong> First formal intimation about overdue dues</p>
      <p><strong>Tone:</strong> Polite but firm</p>
      
      <h3><FaFileContract /> 2. Notice Under Section 13(2) of SARFAESI Act</h3>
      <p><strong>Purpose:</strong> Initiates recovery for secured loans without court intervention</p>
      <p><strong>Issued By:</strong> Secured creditors (banks/NBFCs)</p>
    </div>
  </div>
);

// DRA Component
const DRA = () => {
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

  return (
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
  );
};

// Legal Component
const Legal = () => {
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
  );
};

export default Dashboard;