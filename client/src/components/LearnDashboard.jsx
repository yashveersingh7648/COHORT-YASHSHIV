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
   FaCalendarAlt,FaCog,FaChartLine, 
  FaClipboardCheck, FaSearchDollar, FaPhone, FaSms, FaUsers, 
  FaMapMarkerAlt, FaLandmark,FaSignInAlt,FaBookReader,FaCheckDouble,FaAward,
  FaCalculator, FaCoins,FaFileInvoice,FaRupeeSign,
   FaChartPie, FaExclamationCircle, FaComments,
  FaCar,FaFileInvoiceDollar ,FaNewspaper,
FaStore,FaLaptop,
FaIdCard, FaMobile, 
 FaMoneyCheckAlt,
 FaIndustry, FaTable, FaMapMarkedAlt,
  FaHistory, FaUserCheck, FaFileMedical, FaRegHandshake,
  FaLaptop as FaLaptopIcon,
  FaPercentage as FaPercentageIcon,
  FaCalendarAlt as FaCalendarAltIcon,
  FaRedo as FaRedoIcon
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
    
    <div className="subsection">
      <h3><FaSms /> Email or SMS Templates</h3>
      
      <div className="info-card">
        <h4 className="blue"><FaEnvelope /> Reminder Message</h4>
        <div className="template">
          <p><strong>Subject: Friendly Reminder – Payment Due for Loan Account [XXXX]</strong></p>
          <p>Dear [Name],</p>
          <p>This is a gentle reminder that your payment of ₹[Amount] for Loan Account [XXXX] was due on [Date]. We request you to kindly make the payment at your earliest convenience to avoid any late charges.</p>
          <p>If you're facing any issues, please contact us at [Phone/Email].</p>
          <p>Regards,<br/>[Your Name]<br/>[Bank/Agency Name]</p>
        </div>
      </div>
      
      <div className="info-card">
        <h4 className="yellow"><FaEnvelope /> Follow-Up Message</h4>
        <div className="template">
          <p><strong>Subject: Follow-Up on Outstanding Payment – Loan Account [XXXX]</strong></p>
          <p>Dear [Name],</p>
          <p>We noticed that your payment is still pending. We're here to support you and discuss any repayment options that may help.</p>
          <p>Please get in touch with us by [Date] to avoid escalation.</p>
          <p>Thank you for your attention.</p>
          <p>Regards,<br/>[Your Name]<br/>[Bank/Agency Name]</p>
        </div>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaHandshake /> In-Person Communication Tips</h3>
      <div className="info-card">
        <ul>
          <li>Maintain a calm and respectful tone at all times.</li>
          <li>Use phrases like:
            <ul>
              <li>"We're here to help you resolve this."</li>
              <li>"Let's find a solution that works for both sides."</li>
              <li>"Would you be comfortable sharing what's causing the delay?"</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaPhone /> Sample Call Scripts</h3>
      
      <div className="info-card">
        <h4 className="green"><FaPhone /> Initial Reminder Call</h4>
        <div className="script">
          <p>"Good morning, am I speaking with Mr./Ms. [Name]? I'm calling from [Bank/Agency Name] regarding your loan account. We noticed your payment due on [Date] hasn't been received. Is everything alright? We're here to help if you're facing any issues."</p>
        </div>
      </div>
      
      <div className="info-card">
        <h4 className="yellow"><FaPhone /> Follow-Up Call (Negotiation)</h4>
        <div className="script">
          <p>"Hi [Name], I'm following up on our previous conversation about your overdue payment. We understand financial challenges can arise. Would you be open to discussing a part-payment or rescheduling plan that works for you?"</p>
        </div>
      </div>
      
      <div className="info-card">
        <h4 className="red"><FaPhone /> Final Call Before Escalation</h4>
        <div className="script">
          <p>"Hello [Name], this is [Your Name] from [Bank/Agency Name]. This is a final reminder regarding your unpaid dues of ₹[Amount]. If payment is not received by [Date], we may be compelled to initiate legal recovery procedures. We'd prefer to resolve this amicably—can we discuss a solution today?"</p>
        </div>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaFileAlt /> Sample Written Notice Templates</h3>
      
      <div className="info-card">
        <h4 className="green"><FaFileAlt /> Friendly Reminder Notice (Pre-Due or Just Overdue)</h4>
        <div className="template">
          <p><strong>Subject: Payment Reminder – Loan Account [XXXX]</strong></p>
          <p>Dear [Borrower Name],</p>
          <p>We hope this message finds you well. This is a gentle reminder that your payment of ₹[Amount] for Loan Account [XXXX] was due on [Due Date]. Kindly make the payment at your earliest convenience to avoid late fees or disruption of services.</p>
          <p>If you are facing any difficulty, please contact us at [Phone/Email] so we can assist you.</p>
          <p>Warm regards,<br/>[Your Name]<br/>[Bank/Agency Name]</p>
        </div>
      </div>
      
      <div className="info-card">
        <h4 className="yellow"><FaFileAlt /> Overdue Notice (Firm but Polite)</h4>
        <div className="template">
          <p><strong>Subject: Overdue Payment Notification – Loan Account [XXXX]</strong></p>
          <p>Dear [Borrower Name],</p>
          <p>Our records indicate that your payment of ₹[Amount] due on [Due Date] remains unpaid. We urge you to clear the dues immediately to avoid further action.</p>
          <p>If you require assistance or wish to discuss repayment options, please reach out by [Date].</p>
          <p>Sincerely,<br/>[Your Name]<br/>[Bank/Agency Name]</p>
        </div>
      </div>
      
      <div className="info-card">
        <h4 className="red"><FaFileAlt /> Final Notice Before Legal Action</h4>
        <div className="template">
          <p><strong>Subject: Final Notice – Loan Account [XXXX]</strong></p>
          <p>Dear [Borrower Name],</p>
          <p>Despite multiple reminders, your loan account [XXXX] remains unpaid. This is the final notice before initiating legal recovery proceedings under applicable laws, including the SARFAESI Act (if applicable).</p>
          <p>Please settle the outstanding amount of ₹[Amount] by [Final Date] to avoid escalation.</p>
          <p>Regards,<br/>[Recovery Officer Name]<br/>[Bank/Agency Name]</p>
        </div>
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
    
    <div className="subsection">
      <h3><FaPhone /> Communication & Follow-Up Terms</h3>
      <div className="info-card">
        <ul>
          <li><strong>Reminder Call:</strong> Initial contact to inform borrower of missed payment.</li>
          <li><strong>Follow-Up:</strong> Subsequent communication after initial contact.</li>
          <li><strong>Promise to Pay (PTP):</strong> Borrower commits to pay by a specific date.</li>
          <li><strong>Skip Tracing:</strong> Locating a borrower who has become unreachable.</li>
          <li><strong>Field Visit:</strong> In-person visit by a recovery agent.</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaGavel /> Legal & Compliance Terms</h3>
      <div className="info-card">
        <ul>
          <li><strong>Demand Notice:</strong> Formal request for payment.</li>
          <li><strong>SARFAESI Notice:</strong> Legal notice under the SARFAESI Act for secured loans.</li>
          <li><strong>Repossession:</strong> Seizing collateral (e.g., vehicle) due to default.</li>
          <li><strong>Auction Notice:</strong> Notification of intent to sell repossessed asset.</li>
          <li><strong>Section 138 Notice:</strong> Legal notice for dishonored cheque under NI Act.</li>
          <li><strong>Civil Suit:</strong> Legal action filed in court for recovery.</li>
          <li><strong>Lok Adalat:</strong> Alternative dispute resolution forum for settlement.</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaCog /> Operational Terms</h3>
      <div className="info-card">
        <ul>
          <li><strong>Bucket:</strong> Classification of overdue accounts by age (e.g., 30-day, 60-day).</li>
          <li><strong>Roll Rate:</strong> Percentage of accounts moving from one delinquency bucket to the next.</li>
          <li><strong>Recovery Ratio:</strong> Amount recovered vs. total overdue.</li>
          <li><strong>Settlement:</strong> Agreement to pay a reduced amount to close the account.</li>
          <li><strong>Write-Off:</strong> Loan removed from books due to non-recovery.</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaHandshake /> Customer Interaction Terms</h3>
      <div className="info-card">
        <ul>
          <li><strong>Hardship Case:</strong> Borrower facing genuine financial difficulty.</li>
          <li><strong>Restructuring:</strong> Modifying loan terms to ease repayment.</li>
          <li><strong>Part-Payment:</strong> Partial settlement of dues.</li>
          <li><strong>Negotiation:</strong> Discussion to reach a mutually acceptable repayment plan.</li>
          <li><strong>Grievance Redressal:</strong> Process for handling borrower complaints.</li>
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
            <tr>
              <td><strong>Power Dialer</strong></td>
              <td>Dials numbers one after another with minimal delay, skipping unanswered calls.</td>
              <td>Fast-paced environments needing high call throughput.</td>
            </tr>
            <tr>
              <td><strong>Smart Dialer</strong></td>
              <td>Combines CRM data, AI, and automation to optimize call timing and personalization.</td>
              <td>Advanced outreach with segmentation and dynamic scripting.</td>
            </tr>
            <tr>
              <td><strong>Voice Broadcast Dialer</strong></td>
              <td>Sends pre-recorded messages to many recipients simultaneously.</td>
              <td>Mass notifications, reminders, or awareness campaigns.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaCog /> How to Use Dialers Effectively</h3>
      <div className="info-card">
        <ul>
          <li><strong>Integrate with CRM:</strong> Sync customer data for personalized outreach and compliance tracking.</li>
          <li><strong>Segment Lists:</strong> Use filters (e.g., delinquency stage, region, loan type) to target the right audience.</li>
          <li><strong>Set Call Strategies:</strong> Choose dialer type based on campaign goals—e.g., predictive for volume, preview for quality.</li>
          <li><strong>Monitor & Optimize:</strong> Track metrics like call connection rate, agent talk time, and drop rate to refine strategy.</li>
          <li><strong>Ensure Compliance:</strong> Use progressive or preview dialers when regulatory timing or consent is critical.</li>
        </ul>
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
    
    <div className="subsection">
      <h3><FaHistory /> Delinquency Stages</h3>
      <div className="info-card">
        <p>These stages help categorize borrower risk and guide recovery strategies. Here's a typical breakdown used by banks, NBFCs, and collection platforms:</p>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>DPD Range</th>
                <th>Stage</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0 DPD</td>
                <td>Current</td>
                <td>No missed payments. Account is in good standing.</td>
              </tr>
              <tr>
                <td>1–30 DPD</td>
                <td>Early Delinquency</td>
                <td>Minor delay. Often due to oversight or cash flow issues.</td>
              </tr>
              <tr>
                <td>31–60 DPD</td>
                <td>Mild Delinquency</td>
                <td>Payment delay is more serious. Reminder and soft follow-up initiated.</td>
              </tr>
              <tr>
                <td>61–90 DPD</td>
                <td>Moderate Delinquency</td>
                <td>Risk increases. May trigger stronger recovery efforts or restructuring options.</td>
              </tr>
              <tr>
                <td>91–180 DPD</td>
                <td>Serious Delinquency/NPA</td>
                <td>Account is classified as Substandard under RBI norms.</td>
              </tr>
              <tr>
                <td>&gt;180 DPD</td>
                <td>Write Off / Loss Asset</td>
                <td>Account becomes Doubtful. And considered Loss. Write-off or legal recovery is typical.</td>
              </tr>
            </tbody>
          </table>
        </div>
         <p><b>Regulatory Note: </b>As per RBI guidelines, accounts with 90+ DPD are classified as Non-Performing Assets (NPAs).</p>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaEnvelope /> Sample Messaging & Action Framework by Delinquency Stages</h3>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>DPD Stage</th>
              <th>Borrower Messaging</th>
              <th>Lender Action</th>
              <th>Tone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0 DPD (Current)</td>
              <td>"Your account is in good standing. Thank you for staying on track!"</td>
              <td>Monitor account health, offer loyalty benefits or credit score insights</td>
              <td>Reassuring</td>
            </tr>
            <tr>
              <td>1–30 DPD</td>
              <td>"We noticed a slight delay. Need help or a reminder setup? Let's stay on track."</td>
              <td>Send automated reminders (SMS/email), offer grace period or flexible options</td>
              <td>Friendly & Supportive</td>
            </tr>
            <tr>
              <td>31–60 DPD</td>
              <td>"We understand life gets busy. Let's explore payment options to avoid penalties."</td>
              <td>Initiate outbound calls, offer short-term restructuring or counseling</td>
              <td>Empathetic</td>
            </tr>
            <tr>
              <td>61–90 DPD</td>
              <td>"Your account is at risk. Let's resolve this together before it affects your credit."</td>
              <td>Escalate to resolution team, assess risk, initiate soft legal prep</td>
              <td>Firm but Helpful</td>
            </tr>
            <tr>
              <td>91–180 DPD</td>
              <td>"Your account is now classified as overdue. Recovery actions may begin soon."</td>
              <td>Flag as NPA, begin legal documentation, offer final restructuring opportunity</td>
              <td>Serious & Direct</td>
            </tr>
            <tr>
              <td>&gt;180 DPD</td>
              <td>"Your account has been classified as a written off/ a loss. recovery steps are underway."</td>
              <td>Initiate recovery/legal action, write-off, pursue litigation or asset seizure if applicable</td>
              <td>Legal & Final & Procedural</td>
            </tr>
          </tbody>
        </table>
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
    
    <div className="subsection">
      <h3><FaCog /> Strategic Components of Field Action</h3>
      
      <div className="info-card">
        <h4><FaUserCheck /> 1. Agent Deployment</h4>
        <ul>
          <li>Agents must be DRA-certified (Debt Recovery Agent) via IIBF.</li>
          <li>Assigned based on region, language, and borrower profile.</li>
          <li>Equipped with mobile CRM apps for real-time updates.</li>
        </ul>
        
        <h4><FaClipboardList /> 2. Pre-Visit Protocol</h4>
        <ul>
          <li>Review borrower history, payment behavior, and risk flags.</li>
          <li>Schedule visits within RBI-mandated hours (8 AM–7 PM).</li>
          <li>Carry ID cards and authorization letters.</li>
        </ul>
        
        <h4><FaHandshake /> 3. On-Ground Engagement</h4>
        <ul>
          <li>Maintain respectful tone and privacy.</li>
          <li>Offer resolution options (settlement, restructuring).</li>
          <li>Avoid coercion, threats, or public confrontation.</li>
        </ul>
        
        <h4><FaFileAlt /> 4. Post-Visit Reporting</h4>
        <ul>
          <li>Log visit outcome in CRM (promise to pay, dispute, refusal).</li>
          <li>Upload supporting documents or borrower feedback.</li>
          <li>Trigger next steps (legal notice, escalation, revisit).</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaShieldAlt /> RBI Guidelines for Field Collection</h3>
      <div className="info-card">
        <ul>
          <li><strong>Fair Practices Code:</strong> Must be followed by all agents.</li>
          <li><strong>Privacy & Dignity:</strong> No harassment, intimidation, or social shaming.</li>
          <li><strong>Training & Certification:</strong> Mandatory for all field agents.</li>
          <li><strong>Documentation:</strong> All interactions must be recorded and traceable.</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaClipboardCheck /> Suppcohort Field Collection SOP Framework</h3>
      
      <div className="info-card">
        <h4><FaClipboardList /> 1. Pre-Action Preparation</h4>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FaUserCheck /> Agent Assignment</td>
                <td>Allocate certified DRA agents based on region, language, and borrower profile</td>
              </tr>
              <tr>
                <td><FaIdCard /> Borrower Profiling</td>
                <td>Review loan type, overdue bucket, past interactions, and risk flags</td>
              </tr>
              <tr>
                <td><FaMobile /> Tech Setup</td>
                <td>Equip agents with mobile CRM for geo-tagging, visit logs, and borrower updates</td>
              </tr>
              <tr>
                <td><FaFileAlt /> Documentation</td>
                <td>Ensure agents carry ID cards, authorization letters, and visit scripts</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4><FaHandshake /> 2. On-Ground Engagement Protocol</h4>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FaClock /> Visit Timing</td>
                <td>Conduct visits between 8 AM–7 PM (RBI mandate)</td>
              </tr>
              <tr>
                <td><FaRegHandshake /> Interaction Ethics</td>
                <td>Maintain respectful tone, avoid public confrontation, ensure borrower privacy</td>
              </tr>
              <tr>
                <td><FaMoneyBillWave /> Resolution Options</td>
                <td>Offer payment plans, settlements, or restructuring if applicable</td>
              </tr>
              <tr>
                <td><FaMobile /> Evidence Capture</td>
                <td>Record visit outcome, borrower statements, and supporting documents via app</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4><FaFileAlt /> 3. Post-Visit Reporting & Escalation</h4>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FaFileAlt /> CRM Update</td>
                <td>Log visit outcome: PTP (Promise to Pay), dispute, refusal, skip</td>
              </tr>
              <tr>
                <td><FaFileMedical /> Document Upload</td>
                <td>Attach borrower feedback, signed forms, or visual evidence</td>
              </tr>
              <tr>
                <td><FaExclamationTriangle /> Escalation Trigger</td>
                <td>Initiate legal notice, revisit, or skip tracing based on visit outcome</td>
              </tr>
              <tr>
                <td><FaChartBar /> Dashboard Sync</td>
                <td>Update central dashboard for real-time tracking and analytics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaShieldAlt /> Compliance & Ethics Checklist</h3>
      <div className="info-card">
        <ul>
          <li>✅ All agents must be DRA-certified via IIBF</li>
          <li>✅ No coercion, intimidation, or social shaming</li>
          <li>✅ Maintain borrower dignity and confidentiality</li>
          <li>✅ Record all interactions digitally for audit trail</li>
          <li>✅ Follow RBI's Fair Practices Code and grievance redressal norms</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaChartBar /> Field Action Dashboard (Suggested Layout)</h3>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🔄 Visit Status</td>
              <td>Scheduled, Completed, Revisit Required</td>
            </tr>
            <tr>
              <td>📍 Geo-Tag</td>
              <td>Location of borrower interaction</td>
            </tr>
            <tr>
              <td>🗣️ Outcome</td>
              <td>PTP, Dispute, Refusal, Skip</td>
            </tr>
            <tr>
              <td>📎 Attachments</td>
              <td>Signed documents, borrower feedback, images</td>
            </tr>
            <tr>
              <td>🚨 Escalation Flag</td>
              <td>Legal notice, revisit, or skip tracing required</td>
            </tr>
          </tbody>
        </table>
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
    
    <div className="subsection">
      <h3><FaMoneyCheckAlt /> By Loan Purpose</h3>
      <div className="info-card">
        <ul>
          <li><strong>Personal Loans</strong> – Unsecured, for consumption</li>
          <li><strong>Home Loans</strong> – Purchase, renovation</li>
          <li><strong>Auto Loans</strong> – Vehicle financing</li>
          <li><strong>Education Loans</strong> – Tuition and fees</li>
          <li><strong>Business Loans</strong> – Working capital, expansion</li>
          <li><strong>Gold Loans</strong> – Secured against gold</li>
          <li><strong>Medical Loans</strong> – Healthcare expenses</li>
          <li><strong>Agricultural Loans</strong> – Farming and equipment</li>
          <li><strong>Credit Card</strong> – Revolving credit facility</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaShieldAlt /> By Security Type</h3>
      <div className="info-card">
        <ul>
          <li><strong>Secured Loans</strong> – Backed by collateral</li>
          <li><strong>Unsecured Loans</strong> – Based on creditworthiness</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaCalendarAlt /> By Repayment Structure</h3>
      <div className="info-card">
        <ul>
          <li><strong>Term Loans</strong> – Fixed tenure, EMI-based</li>
          <li><strong>Overdraft Facilities</strong> – Flexible withdrawal</li>
          <li><strong>Revolving Credit</strong> – Credit cards, lines of credit</li>
          <li><strong>Bullet Repayment</strong> – Lump-sum at maturity</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaExclamationTriangle /> By Risk Profile</h3>
      <div className="info-card">
        <ul>
          <li><strong>Prime Lending</strong> – Low-risk, strong credit</li>
          <li><strong>Subprime Lending</strong> – Higher-risk borrowers</li>
          <li><strong>Microfinance</strong> – Small loans to underserved groups</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaIndustry /> By Source of Lending</h3>
      <div className="info-card">
        <ul>
          <li><strong>Bank Lending</strong> – Traditional institutions</li>
          <li><strong>NBFC Lending</strong> – Non-banking financial companies</li>
          <li><strong>P2P Lending</strong> – Peer-to-peer platforms</li>
          <li><strong>Digital Lending</strong> – App/web-based platforms</li>
          <li><strong>Co-lending Models</strong> – Joint lending (Bank + NBFC)</li>
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
    
    <div className="subsection">
      <h3><FaUserTie /> 2. Agent Productivity MIS</h3>
      <div className="info-card">
        <p>Monitors field and call center agent performance.</p>
        <ul>
          <li><strong>Metrics:</strong> Visits made, calls attempted, successful recoveries, average resolution time</li>
          <li><strong>Use:</strong> Workforce optimization, incentive planning</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaHistory /> 3. Bucket-Wise Aging Dashboard</h3>
      <div className="info-card">
        <p>Segments accounts by delinquency age.</p>
        <ul>
          <li><strong>Buckets:</strong> 0–30, 31–60, 61–90, 90+ days</li>
          <li><strong>Use:</strong> Prioritization, escalation triggers, legal handoff planning</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaPhone /> 4. Channel Effectiveness Dashboard</h3>
      <div className="info-card">
        <p>Evaluates communication modes.</p>
        <ul>
          <li><strong>Channels:</strong> SMS, WhatsApp, IVR, email, field visits</li>
          <li><strong>Metrics:</strong> Engagement rate, conversion rate, cost per recovery</li>
          <li><strong>Use:</strong> Campaign optimization, partner evaluation</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaShieldAlt /> 5. Compliance & Audit MIS</h3>
      <div className="info-card">
        <p>Ensures regulatory adherence.</p>
        <ul>
          <li><strong>Metrics:</strong> RBI timing compliance, call/visit logs, grievance redressal</li>
          <li><strong>Use:</strong> Internal audits, legal defense, partner onboarding</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaMapMarkedAlt /> 6. Geo & Segment Insights Dashboard</h3>
      <div className="info-card">
        <p>Visualizes recovery trends by region and borrower type.</p>
        <ul>
          <li><strong>Filters:</strong> State, district, employment type, loan category</li>
          <li><strong>Use:</strong> Regional strategy, partner allocation, outreach customization</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaChartLine /> 7. Predictive Recovery Dashboard</h3>
      <div className="info-card">
        <p>Uses ML to forecast outcomes.</p>
        <ul>
          <li><strong>Metrics:</strong> Expected POS resolution, EMI loss, recovery probability</li>
          <li><strong>Use:</strong> Portfolio valuation, investor confidence, risk mitigation</li>
        </ul>
      </div>
    </div>
    
    <div className="subsection">
      <h3><FaTable /> Sample Dashboard Layouts</h3>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Dashboard Type</th>
              <th>Sample Visuals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Portfolio Performance</td>
              <td>Line charts, heatmaps, KPI tiles</td>
            </tr>
            <tr>
              <td>Agent Productivity</td>
              <td>Bar graphs, leaderboards, drill-downs</td>
            </tr>
            <tr>
              <td>Bucket-Wise Aging</td>
              <td>Stacked bar charts, donut charts</td>
            </tr>
            <tr>
              <td>Channel Effectiveness</td>
              <td>Funnel charts, pie charts, engagement maps</td>
            </tr>
            <tr>
              <td>Compliance & Audit</td>
              <td>Timeline logs, checklist views</td>
            </tr>
            <tr>
              <td>Geo & Segment Insights</td>
              <td>Geo heatmaps, segmentation trees</td>
            </tr>
            <tr>
              <td>Predictive Recovery</td>
              <td>Forecast curves, risk scoring tiles</td>
            </tr>
          </tbody>
        </table>
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
      
      <h3><FaMoneyBillWave /> Step 2: Determine Amount & Lender Type</h3>
      <ul>
        <li>Debt  ₹20 lakh → Eligible for DRT</li>
        <li>Debt  ₹20 lakh → Civil Court or ADR</li>
        <li>Lender is Bank/NBFC → SARFAESI or DRT</li>
        <li>Lender is Private/Unregulated → Civil Court or ADR</li>
      </ul>
      
      <h3><FaUniversity /> Step 3: Choose Forum Based on Conditions</h3>
      <div className="table-container">
        <table>
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
              <td>Unsecured loan by bank/NBFC  ₹20 lakh</td>
              <td>Debt Recovery Tribunal (DRT)</td>
            </tr>
            <tr>
              <td>Corporate default</td>
              <td>NCLT under Insolvency & Bankruptcy Code</td>
            </tr>
            <tr>
              <td>Individual default  ₹20 lakh</td>
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
      
      <h3><FaChartLine /> Step 4: Initiate Recovery Process</h3>
      <ul>
        <li>Send Legal Notice (mandatory for most forums)</li>
        <li>Prepare Documentation (loan agreement, KYC, payment history)</li>
        <li>File Case or Application (based on forum)</li>
        <li>Track Progress & Update CRM</li>
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
      
      <h3><FaExclamationTriangle /> 5. Legal Notice Before Filing Suit</h3>
      <p>Final warning before initiating civil suit for recovery of balance amount.</p>
      
      <h3><FaLandmark /> 6. Civil Suit for Recovery</h3>
      <p>Filed under Indian Contract Act or CPC for recovery of outstanding dues, interest, and legal costs.</p>
      
      <h3><FaGavel /> 7. Criminal Action (If Applicable)</h3>
      <p>For cheque bounce under Section 138 of NI Act or fraud/misrepresentation cases.</p>
      
      <h3><FaShieldAlt /> Important Compliance Notes</h3>
      <ul>
        <li>Repossession must be non-violent and documented</li>
        <li>Borrower must be given a chance to repay before auction</li>
        <li>RBI guidelines mandate respectful conduct and grievance redressal</li>
      </ul>
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
      
      <h3><FaFileAlt /> 2. Pre-Sale Notice (Before Auction/Sale)</h3>
      <div className="template">
        <p><strong>Subject: Pre-Sale Notice – Repossessed Vehicle under Loan Account [XXXXXX]</strong></p>
        <p>Dear [Borrower Name],</p>
        <p>This is to inform you that the vehicle [Make, Model, Reg. No.] financed under Loan Account [XXXXXX] was repossessed on [Date] due to continued default.</p>
        <p>You are hereby given 15 days from the date of this notice to repay the outstanding amount of ₹[Amount] and reclaim the vehicle.</p>
        <p>Sincerely,<br/>[Authorized Officer Name]<br/>[Bank/NBFC Name]</p>
      </div>
      
      <h3><FaFileAlt /> 3. Legal Notice Before Filing Civil Suit</h3>
      <div className="template">
        <p><strong>Subject: Final Legal Notice – Recovery of Vehicle Loan Dues</strong></p>
        <p>To: [Borrower Name]<br/>Address: [Full Address]</p>
        <p>Dear Sir/Madam,</p>
        <p>Despite repeated reminders and repossession of the financed vehicle [Make, Model], your loan account [XXXXXX] continues to reflect an unpaid balance of ₹[Amount].</p>
        <p>This is a final legal notice. If the dues are not cleared within 15 days, we shall initiate legal proceedings.</p>
        <p>Sincerely,<br/>[Legal Counsel Name]<br/>[Law Firm or Bank Legal Cell]</p>
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
            <tr>
              <td>Jurisdiction</td>
              <td>First-level forum for IBC, mergers, oppression</td>
              <td>Appellate forum for NCLT and CCI</td>
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
          </tbody>
        </table>
      </div>
      
      <h3><FaChartLine /> Strategic Use in Debt Recovery & Insolvency</h3>
      
      <h4><FaLandmark /> NCLT: Where Recovery Begins</h4>
      <ul>
        <li>Section 7 (IBC): Financial creditors initiate insolvency against corporate debtors</li>
        <li>Section 9 (IBC): Operational creditors file for recovery</li>
        <li>Section 10 (IBC): Corporate debtor voluntarily initiates insolvency</li>
        <li>Outcome: Resolution plan or liquidation based on CoC decision</li>
      </ul>
      
      <h4><FaUniversity /> NCLAT: Where Disputes Are Resolved</h4>
      <ul>
        <li>Appeals against NCLT decisions</li>
        <li>Interprets IBC provisions, shaping jurisprudence</li>
        <li>Landmark Cases: Essar Steel, Swiss Ribbons, Innoventive Industries</li>
      </ul>
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
      
      <h3><FaEnvelope /> 2. Communication Protocols</h3>
      <ul>
        <li>Calling Hours: Only between 8:00 AM and 7:00 PM</li>
        <li>Language & Tone: Must be respectful, non-intimidating</li>
        <li>Privacy: No intrusion into borrower's family, workplace, or social circles</li>
        <li>Documentation: All interactions must be recorded and traceable</li>
      </ul>
      
      <h3><FaExclamationTriangle /> 3. Prohibited Practices</h3>
      <ul>
        <li>Harassment, verbal or physical intimidation</li>
        <li>Public humiliation or threats</li>
        <li>Anonymous or persistent calls</li>
        <li>Misleading representations or impersonation</li>
      </ul>
      
      <h3><FaShieldAlt /> 4. Borrower Rights</h3>
      <ul>
        <li>Right to dignity and privacy</li>
        <li>Right to request specific contact times or locations</li>
        <li>Right to be informed of the recovery agent's identity and authority</li>
      </ul>
      
      <h3><FaClipboardCheck /> 5. Oversight & Accountability</h3>
      <ul>
        <li>REs are fully responsible for the actions of their agents</li>
        <li>Violations are taken seriously and may attract penalties or regulatory action</li>
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
      
      <h3><FaFileContract /> 3. Possession Notice (Section 13(4) of SARFAESI Act)</h3>
      <p><strong>Purpose:</strong> Declares intent to take possession of secured assets</p>
      <p><strong>Published In:</strong> Local newspapers and affixed on the property</p>
      
      <h3><FaExclamationTriangle /> 4. Legal Notice Before Filing Suit</h3>
      <p><strong>Purpose:</strong> Final warning before initiating civil litigation</p>
      <p><strong>Used For:</strong> Unsecured loans, credit cards, personal loans</p>
      
      <h3><FaHandshake /> 5. Lok Adalat Referral Notice</h3>
      <p><strong>Purpose:</strong> Offers borrower a chance to settle via alternative dispute resolution</p>
      <p><strong>Tone:</strong> Cooperative and solution-oriented</p>
      
      <h3><FaMoneyBillWave /> 6. Cheque Bounce Notice (Section 138 of NI Act)</h3>
      <p><strong>Purpose:</strong> Sent when a repayment cheque is dishonored</p>
      <p><strong>Timeline:</strong> Must be sent within 30 days of bounce; gives 15 days to repay</p>
      
      <h3><FaGavel /> 7. Arbitration Notice</h3>
      <p><strong>Purpose:</strong> Invokes arbitration clause in loan agreement</p>
      <p><strong>Used When:</strong> Loan contract includes arbitration provision</p>
      
      <h3><FaStore /> 8. Final Recovery Notice / Pre-Auction Notice</h3>
      <p><strong>Purpose:</strong> Informs borrower of impending auction of assets</p>
      <p><strong>Issued After:</strong> Possession is taken and valuation is done</p>
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
    <div>
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
      <div>
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
