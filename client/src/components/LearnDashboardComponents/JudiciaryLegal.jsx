import React, { useState } from 'react';
import styles from './JudiciaryLegal.module.css';
import { 
  FaBalanceScale,
  FaGavel,
  FaLandmark,
  FaFileContract,
  FaUserShield,
  FaHandshake,
  FaClipboardList,
  FaSearch,
  FaRoute,
  FaFileAlt,
  FaChartLine,
  FaBook,
  FaUniversity,
  FaBuilding,
  FaUser,
  FaMoneyBillWave,
  FaExclamationTriangle
} from 'react-icons/fa';

const JudiciaryLegal = () => {
  const [activeTab, setActiveTab] = useState('forums');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaBalanceScale className={styles.titleIcon} /> 
          Judiciary & Legal Forums for Debt Recovery in India
        </h1>
        <p className={styles.subtitle}>
          Comprehensive guide to legal pathways and strategic approaches for debt recovery
        </p>
      </header>

      <div className={styles.content}>
        {/* Navigation Tabs */}
        <nav className={styles.tabNav}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'forums' ? styles.active : ''}`}
            onClick={() => setActiveTab('forums')}
          >
            <FaLandmark className={styles.tabIcon} />
            Legal Forums
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'sop' ? styles.active : ''}`}
            onClick={() => setActiveTab('sop')}
          >
            <FaClipboardList className={styles.tabIcon} />
            SOP Guide
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'strategy' ? styles.active : ''}`}
            onClick={() => setActiveTab('strategy')}
          >
            <FaChartLine className={styles.tabIcon} />
            Strategic Implications
          </button>
        </nav>

        {/* Legal Forums Section */}
        {activeTab === 'forums' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaLandmark className={styles.sectionIcon} /> 
              Legal Forums for Debt Recovery
            </h2>

            {/* Civil Courts */}
            <div className={styles.forumCard}>
              <div className={styles.forumHeader}>
                <FaUniversity className={styles.forumIcon} />
                <h3>1. Civil Courts (District & High Courts)</h3>
              </div>
              <div className={styles.forumContent}>
                <div className={styles.featureItem}>
                  <FaSearch className={styles.featureIcon} />
                  <span><strong>Jurisdiction:</strong> Used for filing summary suits under Order XXXVII of the Civil Procedure Code (CPC) for undisputed debts.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaFileAlt className={styles.featureIcon} />
                  <span><strong>Use Case:</strong> Ideal for private lenders, service providers, or when no specialized tribunal applies.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaExclamationTriangle className={styles.featureIcon} />
                  <span><strong>Limitation:</strong> Slower process, higher cost, and procedural complexity.</span>
                </div>
              </div>
            </div>

            {/* DRTs */}
            <div className={styles.forumCard}>
              <div className={styles.forumHeader}>
                <FaGavel className={styles.forumIcon} />
                <h3>2. Debt Recovery Tribunals (DRTs)</h3>
              </div>
              <div className={styles.forumContent}>
                <div className={styles.featureItem}>
                  <FaBook className={styles.featureIcon} />
                  <span><strong>Established Under:</strong> Recovery of Debts Due to Banks and Financial Institutions Act (RDDBFI), 1993.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaSearch className={styles.featureIcon} />
                  <span><strong>Jurisdiction:</strong> Handles cases where debt exceeds ₹20 lakh and involves banks or NBFCs.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaChartLine className={styles.featureIcon} />
                  <span><strong>Process:</strong> Faster than civil courts; allows direct filing by financial institutions.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaBalanceScale className={styles.featureIcon} />
                  <span><strong>Appeals:</strong> Heard by Debt Recovery Appellate Tribunals (DRATs)—there are 5 DRATs and over 30 DRTs across India.</span>
                </div>
              </div>
            </div>

            {/* SARFAESI */}
            <div className={styles.forumCard}>
              <div className={styles.forumHeader}>
                <FaFileContract className={styles.forumIcon} />
                <h3>3. SARFAESI Act Mechanism</h3>
              </div>
              <div className={styles.forumContent}>
                <div className={styles.featureItem}>
                  <FaBook className={styles.featureIcon} />
                  <span><strong>Full Name:</strong> Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaGavel className={styles.featureIcon} />
                  <span><strong>Power:</strong> Allows secured creditors to seize and sell collateral without court intervention.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaUserShield className={styles.featureIcon} />
                  <span><strong>Support:</strong> District Magistrates assist in enforcement if borrower resists possession.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaFileAlt className={styles.featureIcon} />
                  <span><strong>Use Case:</strong> For secured loans (e.g., property-backed), especially by banks and NBFCs.</span>
                </div>
              </div>
            </div>

            {/* IBC */}
            <div className={styles.forumCard}>
              <div className={styles.forumHeader}>
                <FaBuilding className={styles.forumIcon} />
                <h3>4. Insolvency & Bankruptcy Code (IBC), 2016</h3>
              </div>
              <div className={styles.forumContent}>
                <div className={styles.featureItem}>
                  <FaLandmark className={styles.featureIcon} />
                  <span><strong>Forum:</strong> National Company Law Tribunal (NCLT) for corporate debtors; Debt Recovery Tribunal for individuals.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaExclamationTriangle className={styles.featureIcon} />
                  <span><strong>Trigger:</strong> When borrower defaults and resolution is sought via insolvency.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaHandshake className={styles.featureIcon} />
                  <span><strong>Outcome:</strong> Can lead to restructuring, liquidation, or settlement.</span>
                </div>
              </div>
            </div>

            {/* Criminal Courts */}
            <div className={styles.forumCard}>
              <div className={styles.forumHeader}>
                <FaGavel className={styles.forumIcon} />
                <h3>5. Criminal Courts</h3>
              </div>
              <div className={styles.forumContent}>
                <div className={styles.featureItem}>
                  <FaBook className={styles.featureIcon} />
                  <span><strong>Applicable Laws:</strong></span>
                </div>
                <div className={styles.featureItem}>
                  <FaFileAlt className={styles.featureIcon} />
                  <span>Indian Penal Code (IPC) – for fraud, cheating, or criminal breach of trust.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaFileAlt className={styles.featureIcon} />
                  <span>Negotiable Instruments Act, 1881 – for cheque bounce cases under Section 138.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaFileAlt className={styles.featureIcon} />
                  <span><strong>Use Case:</strong> When recovery involves criminal misconduct or dishonored instruments.</span>
                </div>
              </div>
            </div>

            {/* ADR */}
            <div className={styles.forumCard}>
              <div className={styles.forumHeader}>
                <FaHandshake className={styles.forumIcon} />
                <h3>6. Alternative Dispute Resolution (ADR)</h3>
              </div>
              <div className={styles.forumContent}>
                <div className={styles.featureItem}>
                  <FaHandshake className={styles.featureIcon} />
                  <span><strong>Methods:</strong> Arbitration, mediation, conciliation.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaFileAlt className={styles.featureIcon} />
                  <span><strong>Use Case:</strong> Fast-track resolution for contractual disputes or private lending.</span>
                </div>
                <div className={styles.featureItem}>
                  <FaGavel className={styles.featureIcon} />
                  <span><strong>Enforcement:</strong> Arbitration awards can be enforced via civil courts.</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SOP Section */}
        {activeTab === 'sop' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaClipboardList className={styles.sectionIcon} /> 
              Standard Operating Procedure (SOP): Legal Forum Mapping for Debt Recovery
            </h2>

            <div className={styles.sopObjective}>
              <h3 className={styles.sopSubtitle}>
                <FaSearch className={styles.sopIcon} />
                Objective
              </h3>
              <p>To guide recovery agents, partners, and internal teams in selecting the correct legal forum based on loan type, borrower profile, and recovery strategy.</p>
            </div>

            <div className={styles.stepSection}>
              <h3 className={styles.stepTitle}>
                <FaRoute className={styles.stepIcon} />
                Step-by-Step SOP
              </h3>

              {/* Step 1 */}
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>1</div>
                  <h4>Classify the Debt</h4>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepItem}>
                    <FaMoneyBillWave className={styles.stepItemIcon} />
                    <span><strong>Secured Loan</strong> → Has collateral (e.g., property, vehicle)</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaMoneyBillWave className={styles.stepItemIcon} />
                    <span><strong>Unsecured Loan</strong> → No collateral (e.g., personal loan, credit card)</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaBuilding className={styles.stepItemIcon} />
                    <span><strong>Corporate Debt</strong> → Borrower is a company or LLP</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaUser className={styles.stepItemIcon} />
                    <span><strong>Individual Debt</strong> → Borrower is a person</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>2</div>
                  <h4>Determine Amount & Lender Type</h4>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepItem}>
                    <FaMoneyBillWave className={styles.stepItemIcon} />
                    <span><strong>Debt &gt; ₹20 lakh</strong> → Eligible for DRT</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaMoneyBillWave className={styles.stepItemIcon} />
                    <span><strong>Debt &lt; ₹20 lakh</strong> → Civil Court or ADR</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaUniversity className={styles.stepItemIcon} />
                    <span><strong>Lender is Bank/NBFC</strong> → SARFAESI or DRT</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaUser className={styles.stepItemIcon} />
                    <span><strong>Lender is Private/Unregulated</strong> → Civil Court or ADR</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>3</div>
                  <h4>Choose Forum Based on Conditions</h4>
                </div>
                <div className={styles.stepTable}>
                  <div className={styles.tableHeader}>
                    <div className={styles.tableCell}>Condition</div>
                    <div className={styles.tableCell}>Legal Forum</div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Secured loan by bank/NBFC</div>
                    <div className={styles.tableCell}>SARFAESI Act (via District Magistrate)</div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Unsecured loan by bank/NBFC &gt; ₹20 lakh</div>
                    <div className={styles.tableCell}>Debt Recovery Tribunal (DRT)</div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Corporate default</div>
                    <div className={styles.tableCell}>NCLT under Insolvency & Bankruptcy Code</div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Individual default &lt; ₹20 lakh</div>
                    <div className={styles.tableCell}>Civil Court (Summary Suit under CPC)</div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Cheque bounce</div>
                    <div className={styles.tableCell}>Criminal Court (NI Act, Section 138)</div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Fraud or misrepresentation</div>
                    <div className={styles.tableCell}>Criminal Court (IPC)</div>
                  </div>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Private lender dispute</div>
                    <div className={styles.tableCell}>Civil Court or Arbitration</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>4</div>
                  <h4>Initiate Recovery Process</h4>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepItem}>
                    <FaFileAlt className={styles.stepItemIcon} />
                    <span><strong>Send Legal Notice</strong> (mandatory for most forums)</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaFileAlt className={styles.stepItemIcon} />
                    <span><strong>Prepare Documentation</strong> (loan agreement, KYC, payment history)</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaGavel className={styles.stepItemIcon} />
                    <span><strong>File Case or Application</strong> (based on forum)</span>
                  </div>
                  <div className={styles.stepItem}>
                    <FaChartLine className={styles.stepItemIcon} />
                    <span><strong>Track Progress & Update CRM</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Strategic Implications Section */}
        {activeTab === 'strategy' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaChartLine className={styles.sectionIcon} /> 
              Strategic Implications for Suppcohort
            </h2>

            <div className={styles.strategyGrid}>
              <div className={styles.strategyCard}>
                <div className={styles.strategyIcon}>
                  <FaUserShield />
                </div>
                <div className={styles.strategyContent}>
                  <h3>Partner Onboarding</h3>
                  <p>Ensure recovery partners understand which forum applies based on loan type, amount, and borrower profile.</p>
                </div>
              </div>

              <div className={styles.strategyCard}>
                <div className={styles.strategyIcon}>
                  <FaBook />
                </div>
                <div className={styles.strategyContent}>
                  <h3>Training Modules</h3>
                  <p>Include judiciary pathways in agent certification—especially DRT vs SARFAESI vs IBC.</p>
                </div>
              </div>

              <div className={styles.strategyCard}>
                <div className={styles.strategyIcon}>
                  <FaChartLine />
                </div>
                <div className={styles.strategyContent}>
                  <h3>Data Mapping</h3>
                  <p>Align borrower segmentation with legal recovery options (e.g., unsecured vs secured, individual vs corporate).</p>
                </div>
              </div>

              <div className={styles.strategyCard}>
                <div className={styles.strategyIcon}>
                  <FaClipboardList />
                </div>
                <div className={styles.strategyContent}>
                  <h3>Compliance SOPs</h3>
                  <p>Build workflows that respect jurisdiction, timelines, and borrower rights.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default JudiciaryLegal;