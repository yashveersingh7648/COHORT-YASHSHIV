import React, { useState } from 'react';
import styles from './NCLTNCLAT.module.css';
import { 
  FaBalanceScale,
  FaGavel,
  FaLandmark,
  FaBook,
  FaChartLine,
  FaUniversity,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaHandshake,
  FaUsers,
  FaFileContract,
  FaClipboardCheck,
  FaSearch,
  FaLightbulb
} from 'react-icons/fa';

const NCLTNCLAT = () => {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaBalanceScale className={styles.titleIcon} /> 
          NCLT vs NCLAT: Structure & Strategic Role
        </h1>
        <p className={styles.subtitle}>
          Comprehensive guide to the National Company Law Tribunal and National Company Law Appellate Tribunal in debt recovery and insolvency
        </p>
      </header>

      <div className={styles.content}>
        {/* Navigation Tabs */}
        <nav className={styles.tabNav}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'comparison' ? styles.active : ''}`}
            onClick={() => setActiveTab('comparison')}
          >
            <FaBalanceScale className={styles.tabIcon} />
            Comparison
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'recovery' ? styles.active : ''}`}
            onClick={() => setActiveTab('recovery')}
          >
            <FaChartLine className={styles.tabIcon} />
            Debt Recovery
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'roles' ? styles.active : ''}`}
            onClick={() => setActiveTab('roles')}
          >
            <FaGavel className={styles.tabIcon} />
            Strategic Roles
          </button>
        </nav>

        {/* Comparison Section */}
        {activeTab === 'comparison' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaBalanceScale className={styles.sectionIcon} /> 
              NCLT vs NCLAT: Structure & Comparison
            </h2>

            <div className={styles.comparisonTable}>
              <div className={styles.tableHeader}>
                <div className={styles.tableCell}>Aspect</div>
                <div className={styles.tableCell}>NCLT</div>
                <div className={styles.tableCell}>NCLAT</div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaBook className={styles.tableIcon} />
                  Full Form
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  National Company Law Tribunal
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  National Company Law Appellate Tribunal
                </div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaGavel className={styles.tableIcon} />
                  Established Under
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  Companies Act, 2013
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  Companies Act, 2013
                </div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaSearch className={styles.tableIcon} />
                  Primary Role
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  Adjudicates corporate disputes, insolvency cases, and recovery petitions
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  Hears appeals against NCLT decisions
                </div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaLandmark className={styles.tableIcon} />
                  Jurisdiction
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  First-level forum for IBC, mergers, oppression, mismanagement
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  Appellate forum for NCLT and Competition Commission of India (CCI)
                </div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaBook className={styles.tableIcon} />
                  Applicable Law
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  Insolvency & Bankruptcy Code (IBC), Companies Act
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  Same laws, but only for appeals
                </div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaUsers className={styles.tableIcon} />
                  Bench Composition
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  Judicial + Technical Members
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  Judicial + Technical Members
                </div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaMapMarkerAlt className={styles.tableIcon} />
                  Location
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  14+ benches across India
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  Principal bench in New Delhi
                </div>
              </div>
              
              <div className={styles.tableRow}>
                <div className={styles.tableCell} data-label="Aspect">
                  <FaExchangeAlt className={styles.tableIcon} />
                  Appeal Path
                </div>
                <div className={styles.tableCell} data-label="NCLT">
                  NCLT → NCLAT → Supreme Court
                </div>
                <div className={styles.tableCell} data-label="NCLAT">
                  Final appeal lies with the Supreme Court
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Debt Recovery Section */}
        {activeTab === 'recovery' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaChartLine className={styles.sectionIcon} /> 
              Strategic Use in Debt Recovery & Insolvency
            </h2>

            <div className={styles.recoveryGrid}>
              {/* NCLT Card */}
              <div className={styles.recoveryCard}>
                <div className={styles.recoveryHeader}>
                  <FaLandmark className={styles.recoveryIcon} />
                  <h3>NCLT: Where Recovery Begins</h3>
                </div>
                <div className={styles.recoveryContent}>
                  <div className={styles.recoveryItem}>
                    <FaFileContract className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                      <h4>Section 7 (IBC)</h4>
                      <p>Financial creditors initiate insolvency against corporate debtors.</p>
                    </div>
                  </div>
                  <div className={styles.recoveryItem}>
                    <FaFileContract className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                      <h4>Section 9 (IBC)</h4>
                      <p>Operational creditors (vendors, service providers) file for recovery.</p>
                    </div>
                  </div>
                  <div className={styles.recoveryItem}>
                    <FaFileContract className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                      <h4>Section 10 (IBC)</h4>
                      <p>Corporate debtor voluntarily initiates insolvency.</p>
                    </div>
                  </div>
                  <div className={styles.recoveryItem}>
                    <FaHandshake className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                      <h4>Outcome</h4>
                      <p>Resolution plan or liquidation, depending on Committee of Creditors (CoC) decision.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NCLAT Card */}
              <div className={styles.recoveryCard}>
                <div className={styles.recoveryHeader}>
                  <FaBalanceScale className={styles.recoveryIcon} />
                  <h3>NCLAT: Where Disputes Are Resolved</h3>
                </div>
                <div className={styles.recoveryContent}>
                  <div className={styles.recoveryItem}>
                    <FaExchangeAlt className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                      <h4>Appeals</h4>
                      <p>If a creditor or debtor disagrees with NCLT's decision (e.g., rejection of insolvency petition, approval of resolution plan).</p>
                    </div>
                  </div>
                  <div className={styles.recoveryItem}>
                    <FaSearch className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                      <h4>Clarifications</h4>
                      <p>NCLAT often interprets IBC provisions, shaping jurisprudence.</p>
                    </div>
                  </div>
                  <div className={styles.recoveryItem}>
                    <FaLightbulb className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                      <h4>Landmark Cases</h4>
                      <p>Essar Steel, Swiss Ribbons, Innoventive Industries—all refined creditor rights and timelines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Strategic Roles Section */}
        {activeTab === 'roles' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaGavel className={styles.sectionIcon} /> 
              Strategic Roles in Corporate Governance
            </h2>

            <div className={styles.rolesGrid}>
              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>
                  <FaUniversity />
                </div>
                <div className={styles.roleContent}>
                  <h3>Corporate Dispute Resolution</h3>
                  <p>NCLT handles cases of oppression and mismanagement under the Companies Act, providing remedies for minority shareholders.</p>
                </div>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>
                  <FaExchangeAlt />
                </div>
                <div className={styles.roleContent}>
                  <h3>Mergers & Acquisitions</h3>
                  <p>NCLT approves schemes of arrangement, mergers, and demergers, ensuring compliance with legal requirements.</p>
                </div>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>
                  <FaHandshake />
                </div>
                <div className={styles.roleContent}>
                  <h3>Insolvency Resolution</h3>
                  <p>NCLT facilitates the insolvency resolution process, aiming to maximize value for all stakeholders through restructuring or liquidation.</p>
                </div>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>
                  <FaBalanceScale />
                </div>
                <div className={styles.roleContent}>
                  <h3>Appellate Oversight</h3>
                  <p>NCLAT provides appellate review of NCLT decisions, ensuring legal consistency and protecting stakeholder rights.</p>
                </div>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>
                  <FaClipboardCheck />
                </div>
                <div className={styles.roleContent}>
                  <h3>Compliance Enforcement</h3>
                  <p>Both NCLT and NCLAT enforce compliance with corporate laws and regulations, maintaining market integrity.</p>
                </div>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.roleIcon}>
                  <FaChartLine />
                </div>
                <div className={styles.roleContent}>
                  <h3>Economic Impact</h3>
                  <p>Through efficient dispute resolution, these tribunals contribute to India's ease of doing business and economic growth.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default NCLTNCLAT;