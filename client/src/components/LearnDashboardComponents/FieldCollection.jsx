import React from 'react';
import styles from './FieldCollection.module.css';
import { 
  FaWalking, 
  FaSearch, 
  FaUserTie, 
  FaClock, 
  FaIdCard, 
  FaHandshake, 
  FaFileUpload, 
  FaChartLine,
  FaShieldAlt,
  FaBook,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaComments,
  FaExclamationTriangle,
  FaCheckCircle,
  FaListAlt,
  FaTable,
  FaRegClock,
  FaUserCheck,
  FaFileSignature,
  FaSyncAlt,
  FaTachometerAlt   // ✅ replace FaDashboard with this
} from 'react-icons/fa';
const FieldCollection = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaWalking className={styles.titleIcon} /> 
          Field Action in Debt Collection & Recovery
        </h1>
        <p className={styles.subtitle}>
          Strategic framework for effective face-to-face recovery operations
        </p>
      </header>

      <div className={styles.content}>
        {/* What Is Field Collection? Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaSearch className={styles.sectionIcon} /> 
            What Is Field Collection?
          </h2>
          <p className={styles.sectionDescription}>
            Field collection refers to face-to-face recovery efforts by trained agents who visit borrowers at their residence, workplace, or other agreed locations.
          </p>
          
          <div className={styles.grid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaRegClock />
              </div>
              <h3>Early Bucket Recovery</h3>
              <p>1–30 days overdue</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaExclamationTriangle />
              </div>
              <h3>X Bucket Management</h3>
              <p>60+ days overdue</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaSearch />
              </div>
              <h3>Skip Tracing</h3>
              <p>Locating absconding borrowers</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaFileSignature />
              </div>
              <h3>Document Pickup</h3>
              <p>Post-dated cheques, KYC updates</p>
            </div>
          </div>
        </section>

        {/* Strategic Components Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaChartLine className={styles.sectionIcon} /> 
            Strategic Components of Field Action
          </h2>
          
          <div className={styles.strategyGrid}>
            <div className={styles.strategyCard}>
              <div className={styles.strategyHeader}>
                <FaUserTie className={styles.strategyIcon} />
                <h3>1. Agent Deployment</h3>
              </div>
              <ul className={styles.strategyList}>
                <li>Agents must be DRA-certified (Debt Recovery Agent) via IIBF</li>
                <li>Assigned based on region, language, and borrower profile</li>
                <li>Equipped with mobile CRM apps for real-time updates</li>
              </ul>
            </div>
            
            <div className={styles.strategyCard}>
              <div className={styles.strategyHeader}>
                <FaClock className={styles.strategyIcon} />
                <h3>2. Pre-Visit Protocol</h3>
              </div>
              <ul className={styles.strategyList}>
                <li>Review borrower history, payment behavior, and risk flags</li>
                <li>Schedule visits within RBI-mandated hours (8 AM–7 PM)</li>
                <li>Carry ID cards and authorization letters</li>
              </ul>
            </div>
            
            <div className={styles.strategyCard}>
              <div className={styles.strategyHeader}>
                <FaHandshake className={styles.strategyIcon} />
                <h3>3. On-Ground Engagement</h3>
              </div>
              <ul className={styles.strategyList}>
                <li>Maintain respectful tone and privacy</li>
                <li>Offer resolution options (settlement, restructuring)</li>
                <li>Avoid coercion, threats, or public confrontation</li>
              </ul>
            </div>
            
            <div className={styles.strategyCard}>
              <div className={styles.strategyHeader}>
                <FaFileUpload className={styles.strategyIcon} />
                <h3>4. Post-Visit Reporting</h3>
              </div>
              <ul className={styles.strategyList}>
                <li>Log visit outcome in CRM (promise to pay, dispute, refusal)</li>
                <li>Upload supporting documents or borrower feedback</li>
                <li>Trigger next steps (legal notice, escalation, revisit)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RBI Guidelines Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaShieldAlt className={styles.sectionIcon} /> 
            RBI Guidelines for Field Collection
          </h2>
          
          <div className={styles.guidelinesGrid}>
            <div className={styles.guidelineItem}>
              <FaShieldAlt className={styles.guidelineIcon} />
              <div>
                <h3>Fair Practices Code</h3>
                <p>Must be followed by all agents</p>
              </div>
            </div>
            
            <div className={styles.guidelineItem}>
              <FaUserCheck className={styles.guidelineIcon} />
              <div>
                <h3>Privacy & Dignity</h3>
                <p>No harassment, intimidation, or social shaming</p>
              </div>
            </div>
            
            <div className={styles.guidelineItem}>
              <FaBook className={styles.guidelineIcon} />
              <div>
                <h3>Training & Certification</h3>
                <p>Mandatory for all field agents</p>
              </div>
            </div>
            
            <div className={styles.guidelineItem}>
              <FaFileUpload className={styles.guidelineIcon} />
              <div>
                <h3>Documentation</h3>
                <p>All interactions must be recorded and traceable</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOP Framework Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaListAlt className={styles.sectionIcon} /> 
            Suppcohort Field Collection SOP Framework
          </h2>
          
          <div className={styles.sopContainer}>
            {/* Pre-Action Preparation */}
            <div className={styles.sopSection}>
              <h3 className={styles.sopHeader}>
                <FaClipboardList className={styles.sopIcon} />
                🏁 1. Pre-Action Preparation
              </h3>
              <div className={styles.sopTable}>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>📋 Agent Assignment</div>
                  <div className={styles.sopDesc}>Allocate certified DRA agents based on region, language, and borrower profile</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>🧠 Borrower Profiling</div>
                  <div className={styles.sopDesc}>Review loan type, overdue bucket, past interactions, and risk flags</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>📱 Tech Setup</div>
                  <div className={styles.sopDesc}>Equip agents with mobile CRM for geo-tagging, visit logs, and borrower updates</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>📄 Documentation</div>
                  <div className={styles.sopDesc}>Ensure agents carry ID cards, authorization letters, and visit scripts</div>
                </div>
              </div>
            </div>

            {/* On-Ground Engagement Protocol */}
            <div className={styles.sopSection}>
              <h3 className={styles.sopHeader}>
                <FaUserCheck className={styles.sopIcon} />
                🚪 2. On-Ground Engagement Protocol
              </h3>
              <div className={styles.sopTable}>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>🕒 Visit Timing</div>
                  <div className={styles.sopDesc}>Conduct visits between 8 AM–7 PM (RBI mandate)</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>🤝 Interaction Ethics</div>
                  <div className={styles.sopDesc}>Maintain respectful tone, avoid public confrontation, ensure borrower privacy</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>💬 Resolution Options</div>
                  <div className={styles.sopDesc}>Offer payment plans, settlements, or restructuring if applicable</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>📸 Evidence Capture</div>
                  <div className={styles.sopDesc}>Record visit outcome, borrower statements, and supporting documents via app</div>
                </div>
              </div>
            </div>

            {/* Post-Visit Reporting & Escalation */}
            <div className={styles.sopSection}>
              <h3 className={styles.sopHeader}>
                <FaFileUpload className={styles.sopIcon} />
                🧾 3. Post-Visit Reporting & Escalation
              </h3>
              <div className={styles.sopTable}>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>📝 CRM Update</div>
                  <div className={styles.sopDesc}>Log visit outcome: PTP (Promise to Pay), dispute, refusal, skip</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>📤 Document Upload</div>
                  <div className={styles.sopDesc}>Attach borrower feedback, signed forms, or visual evidence</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>⚖️ Escalation Trigger</div>
                  <div className={styles.sopDesc}>Initiate legal notice, revisit, or skip tracing based on visit outcome</div>
                </div>
                <div className={styles.sopRow}>
                  <div className={styles.sopStep}>📊 Dashboard Sync</div>
                  <div className={styles.sopDesc}>Update central dashboard for real-time tracking and analytics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Checklist Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCheckCircle className={styles.sectionIcon} /> 
            Compliance & Ethics Checklist
          </h2>
          
          <div className={styles.checklist}>
            <div className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} />
              <span>All agents must be DRA-certified via IIBF</span>
            </div>
            <div className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} />
              <span>No coercion, intimidation, or social shaming</span>
            </div>
            <div className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} />
              <span>Maintain borrower dignity and confidentiality</span>
            </div>
            <div className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} />
              <span>Record all interactions digitally for audit trail</span>
            </div>
            <div className={styles.checklistItem}>
              <FaCheckCircle className={styles.checkIcon} />
              <span>Follow RBI's Fair Practices Code and grievance redressal norms</span>
            </div>
          </div>
        </section>

        {/* Field Action Dashboard Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaTachometerAlt className={styles.sectionIcon} /> 
            Field Action Dashboard (Suggested Layout)
          </h2>
          
          <div className={styles.dashboardTable}>
            <div className={styles.tableRow}>
              <div className={styles.tableHeader}>Metric</div>
              <div className={styles.tableHeader}>Description</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>🔄 Visit Status</div>
              <div className={styles.tableCell}>Scheduled, Completed, Revisit Required</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>📍 Geo-Tag</div>
              <div className={styles.tableCell}>Location of borrower interaction</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>🗣️ Outcome</div>
              <div className={styles.tableCell}>PTP, Dispute, Refusal, Skip</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>📎 Attachments</div>
              <div className={styles.tableCell}>Signed documents, borrower feedback, images</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>🚨 Escalation Flag</div>
              <div className={styles.tableCell}>Legal notice, revisit, or skip tracing required</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Create the missing icon component
const FaClipboardList = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em">
    <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path>
  </svg>
);

export default FieldCollection;