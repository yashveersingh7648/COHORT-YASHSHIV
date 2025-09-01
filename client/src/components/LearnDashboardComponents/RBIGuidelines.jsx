import React, { useState } from 'react';
import styles from './RBIGuidelines.module.css';
import { 
  FaUniversity,
  FaUserShield,
  FaPhone,
  FaClock,
  FaBan,
  FaUserCheck,
  FaBalanceScale,
  FaClipboardList,
  FaHandshake,
  FaLock,
  FaEye,
  FaShieldAlt,
  FaExclamationTriangle,
  FaFileContract,
  FaGraduationCap,
  FaBook,
  FaInfoCircle
} from 'react-icons/fa';

const RBIGuidelines = () => {
  const [activeTab, setActiveTab] = useState('guidelines');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaUniversity className={styles.titleIcon} /> 
          RBI Guidelines for Debt Collection & Recovery
        </h1>
        <p className={styles.subtitle}>
          Comprehensive framework to uphold ethical standards and regulatory compliance in debt recovery practices
        </p>
      </header>

      <div className={styles.content}>
        {/* Navigation Tabs */}
        <nav className={styles.tabNav}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'guidelines' ? styles.active : ''}`}
            onClick={() => setActiveTab('guidelines')}
          >
            <FaClipboardList className={styles.tabIcon} />
            RBI Guidelines
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'code' ? styles.active : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <FaHandshake className={styles.tabIcon} />
            Code of Conduct
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'compliance' ? styles.active : ''}`}
            onClick={() => setActiveTab('compliance')}
          >
            <FaShieldAlt className={styles.tabIcon} />
            Compliance
          </button>
        </nav>

        {/* RBI Guidelines Section */}
        {activeTab === 'guidelines' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaUniversity className={styles.sectionIcon} /> 
              RBI Guidelines on Collection & Recovery
            </h2>

            <div className={styles.applicability}>
              <FaInfoCircle className={styles.infoIcon} />
              <p>These guidelines apply to all regulated entities (REs), including banks, NBFCs, housing finance companies, and asset reconstruction companies.</p>
            </div>

            {/* Recovery Agent Engagement */}
            <div className={styles.guidelineCard}>
              <div className={styles.guidelineHeader}>
                <div className={styles.guidelineNumber}>1</div>
                <h3>Recovery Agent Engagement</h3>
              </div>
              <div className={styles.guidelineContent}>
                <div className={styles.guidelineItem}>
                  <FaUserShield className={styles.guidelineIcon} />
                  <div className={styles.guidelineText}>
                    <h4>Due Diligence</h4>
                    <p>Agents must be vetted for background, character, and credit history.</p>
                  </div>
                </div>
                <div className={styles.guidelineItem}>
                  <FaFileContract className={styles.guidelineIcon} />
                  <div className={styles.guidelineText}>
                    <h4>Formal Agreement</h4>
                    <p>Must include terms of engagement and code of conduct.</p>
                  </div>
                </div>
                <div className={styles.guidelineItem}>
                  <FaGraduationCap className={styles.guidelineIcon} />
                  <div className={styles.guidelineText}>
                    <h4>Training & Certification</h4>
                    <p>Agents must be trained and certified by IIBF (Indian Institute of Banking & Finance).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Protocols */}
            <div className={styles.guidelineCard}>
              <div className={styles.guidelineHeader}>
                <div className={styles.guidelineNumber}>2</div>
                <h3>Communication Protocols</h3>
              </div>
              <div className={styles.guidelineContent}>
                <div className={styles.guidelineItem}>
                  <FaClock className={styles.guidelineIcon} />
                  <div className={styles.guidelineText}>
                    <h4>Calling Hours</h4>
                    <p>Only between 8:00 AM and 7:00 PM.</p>
                  </div>
                </div>
                <div className={styles.guidelineItem}>
                  <FaPhone className={styles.guidelineIcon} />
                  <div className={styles.guidelineText}>
                    <h4>Language & Tone</h4>
                    <p>Must be respectful, non-intimidating, and in a language the borrower understands.</p>
                  </div>
                </div>
                <div className={styles.guidelineItem}>
                  <FaLock className={styles.guidelineIcon} />
                  <div className={styles.guidelineText}>
                    <h4>Privacy</h4>
                    <p>No intrusion into borrower's family, workplace, or social circles.</p>
                  </div>
                </div>
                <div className={styles.guidelineItem}>
                  <FaBook className={styles.guidelineIcon} />
                  <div className={styles.guidelineText}>
                    <h4>Documentation</h4>
                    <p>All interactions must be recorded and traceable.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prohibited Practices */}
            <div className={styles.guidelineCard}>
              <div className={styles.guidelineHeader}>
                <div className={styles.guidelineNumber}>3</div>
                <h3>Prohibited Practices</h3>
              </div>
              <div className={styles.guidelineContent}>
                <div className={styles.prohibitedList}>
                  <div className={styles.prohibitedItem}>
                    <FaBan className={styles.prohibitedIcon} />
                    <span>Harassment, verbal or physical intimidation.</span>
                  </div>
                  <div className={styles.prohibitedItem}>
                    <FaBan className={styles.prohibitedIcon} />
                    <span>Public humiliation or threats.</span>
                  </div>
                  <div className={styles.prohibitedItem}>
                    <FaBan className={styles.prohibitedIcon} />
                    <span>Anonymous or persistent calls.</span>
                  </div>
                  <div className={styles.prohibitedItem}>
                    <FaBan className={styles.prohibitedIcon} />
                    <span>Misleading representations or impersonation.</span>
                  </div>
                  <div className={styles.prohibitedItem}>
                    <FaBan className={styles.prohibitedIcon} />
                    <span>Contacting borrowers via social media inappropriately.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Borrower Rights */}
            <div className={styles.guidelineCard}>
              <div className={styles.guidelineHeader}>
                <div className={styles.guidelineNumber}>4</div>
                <h3>Borrower Rights</h3>
              </div>
              <div className={styles.guidelineContent}>
                <div className={styles.rightsList}>
                  <div className={styles.rightsItem}>
                    <FaUserCheck className={styles.rightsIcon} />
                    <span>Right to dignity and privacy.</span>
                  </div>
                  <div className={styles.rightsItem}>
                    <FaUserCheck className={styles.rightsIcon} />
                    <span>Right to request specific contact times or locations.</span>
                  </div>
                  <div className={styles.rightsItem}>
                    <FaUserCheck className={styles.rightsIcon} />
                    <span>Right to be informed of the recovery agent's identity and authority.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Oversight & Accountability */}
            <div className={styles.guidelineCard}>
              <div className={styles.guidelineHeader}>
                <div className={styles.guidelineNumber}>5</div>
                <h3>Oversight & Accountability</h3>
              </div>
              <div className={styles.guidelineContent}>
                <div className={styles.accountabilityList}>
                  <div className={styles.accountabilityItem}>
                    <FaBalanceScale className={styles.accountabilityIcon} />
                    <span>REs are fully responsible for the actions of their agents.</span>
                  </div>
                  <div className={styles.accountabilityItem}>
                    <FaExclamationTriangle className={styles.accountabilityIcon} />
                    <span>Violations are taken seriously and may attract penalties or regulatory action.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.reference}>
              <FaInfoCircle className={styles.referenceIcon} />
              <p>You can explore the full circular from RBI on their official notification page.</p>
            </div>
          </section>
        )}

        {/* Code of Conduct Section */}
        {activeTab === 'code' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaHandshake className={styles.sectionIcon} /> 
              Code of Conduct for Recovery Agents
            </h2>

            <div className={styles.codeIntro}>
              <p>Outlined by RBI and adopted by financial institutions, this code emphasizes:</p>
            </div>

            <div className={styles.codeGrid}>
              <div className={styles.codeCard}>
                <div className={styles.codeIcon}>
                  <FaClipboardList />
                </div>
                <div className={styles.codeContent}>
                  <h3>Professionalism</h3>
                  <p>Act within laws and institutional policies.</p>
                </div>
              </div>

              <div className={styles.codeCard}>
                <div className={styles.codeIcon}>
                  <FaBalanceScale />
                </div>
                <div className={styles.codeContent}>
                  <h3>Fairness</h3>
                  <p>Treat customers with respect and avoid coercion.</p>
                </div>
              </div>

              <div className={styles.codeCard}>
                <div className={styles.codeIcon}>
                  <FaLock />
                </div>
                <div className={styles.codeContent}>
                  <h3>Confidentiality</h3>
                  <p>Protect borrower data; no unauthorized sharing.</p>
                </div>
              </div>

              <div className={styles.codeCard}>
                <div className={styles.codeIcon}>
                  <FaEye />
                </div>
                <div className={styles.codeContent}>
                  <h3>Transparency</h3>
                  <p>No false promises or misrepresentation.</p>
                </div>
              </div>

              <div className={styles.codeCard}>
                <div className={styles.codeIcon}>
                  <FaShieldAlt />
                </div>
                <div className={styles.codeContent}>
                  <h3>Ethical Conduct</h3>
                  <p>Reject bribery, fraud, and unauthorized access.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Compliance Section */}
        {activeTab === 'compliance' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaShieldAlt className={styles.sectionIcon} /> 
              Compliance & Implementation
            </h2>

            <div className={styles.complianceContent}>
              <div className={styles.complianceItem}>
                <div className={styles.complianceIcon}>
                  <FaUserShield />
                </div>
                <div className={styles.complianceText}>
                  <h3>Training Requirements</h3>
                  <p>All recovery agents must undergo comprehensive training covering RBI guidelines, communication skills, legal aspects, and ethical practices. Certification from IIBF is mandatory.</p>
                </div>
              </div>

              <div className={styles.complianceItem}>
                <div className={styles.complianceIcon}>
                  <FaBook />
                </div>
                <div className={styles.complianceText}>
                  <h3>Documentation & Record Keeping</h3>
                  <p>Maintain detailed records of all recovery activities, including call logs, visit reports, and communication with borrowers. Records must be available for audit purposes.</p>
                </div>
              </div>

              <div className={styles.complianceItem}>
                <div className={styles.complianceIcon}>
                  <FaBalanceScale />
                </div>
                <div className={styles.complianceText}>
                  <h3>Grievance Redressal Mechanism</h3>
                  <p>Establish accessible channels for borrowers to register complaints. Appoint grievance officers to address concerns promptly and fairly.</p>
                </div>
              </div>

              <div className={styles.complianceItem}>
                <div className={styles.complianceIcon}>
                  <FaExclamationTriangle />
                </div>
                <div className={styles.complianceText}>
                  <h3>Monitoring & Audits</h3>
                  <p>Regular internal audits and monitoring of recovery practices to ensure compliance with RBI guidelines. Third-party audits may be conducted annually.</p>
                </div>
              </div>

              <div className={styles.complianceItem}>
                <div className={styles.complianceIcon}>
                  <FaUniversity />
                </div>
                <div className={styles.complianceText}>
                  <h3>Regulatory Reporting</h3>
                  <p>Submit periodic reports to RBI detailing recovery activities, complaints received, and actions taken. Report any serious violations immediately.</p>
                </div>
              </div>

              <div className={styles.complianceItem}>
                <div className={styles.complianceIcon}>
                  <FaHandshake />
                </div>
                <div className={styles.complianceText}>
                  <h3>Stakeholder Awareness</h3>
                  <p>Educate borrowers about their rights and responsibilities. Provide clear information about recovery processes and grievance mechanisms.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default RBIGuidelines;