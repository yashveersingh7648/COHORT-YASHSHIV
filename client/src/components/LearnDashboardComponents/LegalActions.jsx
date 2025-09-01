import React, { useState } from 'react';
import styles from './LegalActions.module.css';
import { 
  FaClipboardList,
  FaCar,
  FaGavel,
  FaFileAlt,
  FaExclamationTriangle,
  FaPhone,
  FaEnvelope,
  FaMoneyBillWave,
  FaBalanceScale,
  FaHandshake,
  FaUserCheck,
  FaShoppingCart,
  FaBell,
  FaSignature,
  FaCalendarAlt,
  FaInfoCircle,
  FaFileSignature,
  FaShieldAlt
} from 'react-icons/fa';

const LegalActions = () => {
  const [activeTab, setActiveTab] = useState('steps');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaClipboardList className={styles.titleIcon} /> 
          Step-by-Step Legal Actions for Vehicle Loan Recovery
        </h1>
        <p className={styles.subtitle}>
          Comprehensive guide to legal procedures and compliance requirements for vehicle loan recovery
        </p>
      </header>

      <div className={styles.content}>
        {/* Navigation Tabs */}
        <nav className={styles.tabNav}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'steps' ? styles.active : ''}`}
            onClick={() => setActiveTab('steps')}
          >
            <FaCar className={styles.tabIcon} />
            Recovery Steps
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'templates' ? styles.active : ''}`}
            onClick={() => setActiveTab('templates')}
          >
            <FaFileAlt className={styles.tabIcon} />
            Document Templates
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'compliance' ? styles.active : ''}`}
            onClick={() => setActiveTab('compliance')}
          >
            <FaShieldAlt className={styles.tabIcon} />
            Compliance Notes
          </button>
        </nav>

        {/* Recovery Steps Section */}
        {activeTab === 'steps' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaCar className={styles.sectionIcon} /> 
              Vehicle Loan Recovery Process
            </h2>

            {/* Step 1 */}
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>1</div>
                <h3>Reminder & Demand Notices</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepItem}>
                  <FaPhone className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Initial Reminder</h4>
                    <p>Phone calls, SMS, and emails reminding the borrower of missed EMIs.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaEnvelope className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Demand Notice</h4>
                    <p>Formal written notice requesting payment within a specified time (usually 15–30 days).</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaInfoCircle className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Contents</h4>
                    <p>Loan details, overdue amount, consequences of non-payment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>2</div>
                <h3>Repossession of Vehicle</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepItem}>
                  <FaExclamationTriangle className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Trigger</h4>
                    <p>If the borrower fails to respond or repay after notices.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaGavel className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Legal Basis</h4>
                    <p>As per the loan agreement and RBI's Fair Practices Code.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaClipboardList className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Process</h4>
                    <ul className={styles.processList}>
                      <li>Authorized recovery agent visits borrower.</li>
                      <li>Repossession must be peaceful and documented.</li>
                      <li>A repossession memo is issued and signed by both parties.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>3</div>
                <h3>Pre-Sale Notice</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepItem}>
                  <FaBell className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Purpose</h4>
                    <p>Inform borrower of intent to sell the repossessed vehicle.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaCalendarAlt className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Timeline</h4>
                    <p>Typically 7–15 days to allow borrower to repay and reclaim the vehicle.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaInfoCircle className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Includes</h4>
                    <p>Vehicle valuation, auction details, and outstanding dues.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>4</div>
                <h3>Auction or Sale of Vehicle</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepItem}>
                  <FaShoppingCart className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Method</h4>
                    <p>Public auction or private sale.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaFileAlt className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Requirement</h4>
                    <p>Transparent process with proper documentation.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaMoneyBillWave className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Proceeds</h4>
                    <p>Adjusted against outstanding loan. Any surplus is returned to borrower; shortfall may lead to further legal action.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>5</div>
                <h3>Legal Notice Before Filing Suit</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepItem}>
                  <FaExclamationTriangle className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Issued If</h4>
                    <p>Vehicle sale doesn't cover full dues or borrower contests repossession.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaInfoCircle className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Contents</h4>
                    <p>Final warning before initiating civil suit for recovery of balance amount.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>6</div>
                <h3>Civil Suit for Recovery</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepItem}>
                  <FaBalanceScale className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Filed Under</h4>
                    <p>Indian Contract Act or CPC (Civil Procedure Code).</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaGavel className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Court</h4>
                    <p>Jurisdiction depends on loan amount and borrower's location.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaHandshake className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Relief Sought</h4>
                    <p>Recovery of outstanding dues, interest, and legal costs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>7</div>
                <h3>Criminal Action (If Applicable)</h3>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepItem}>
                  <FaFileSignature className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Cheque Bounce</h4>
                    <p>Under Section 138 of Negotiable Instruments Act.</p>
                  </div>
                </div>
                <div className={styles.stepItem}>
                  <FaUserCheck className={styles.stepItemIcon} />
                  <div className={styles.stepItemContent}>
                    <h4>Fraud or Misrepresentation</h4>
                    <p>FIR may be filed if borrower provided false documents or absconded with the vehicle.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Document Templates Section */}
        {activeTab === 'templates' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaFileAlt className={styles.sectionIcon} /> 
              Document Templates for Vehicle Loan Recovery
            </h2>

            <div className={styles.templateIntro}>
              <p>Here are three professionally drafted sample templates tailored for vehicle loan recovery situations.</p>
            </div>

            {/* Template 1 */}
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaFileSignature className={styles.templateIcon} />
                <h3>1. Repossession Memo (Post-Vehicle Seizure)</h3>
              </div>
              <div className={styles.templateContent}>
                <div className={styles.templateDetails}>
                  <div className={styles.templateField}>
                    <strong>Repossession Memo</strong>
                  </div>
                  <div className={styles.templateField}>
                    <strong>Date:</strong> [DD/MM/YYYY]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Loan Account No.:</strong> [XXXXXX]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Borrower Name:</strong> [Full Name]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Vehicle Details:</strong> [Make, Model, Registration No.]
                  </div>
                  <div className={styles.templateField}>
                    This is to confirm that the above-mentioned vehicle has been repossessed by [Bank/NBFC Name] on [Date] due to non-payment of EMIs as per the loan agreement. The repossession was conducted peacefully and in accordance with RBI's Fair Practices Code.
                  </div>
                  <div className={styles.templateField}>
                    Both parties acknowledge the condition of the vehicle and the outstanding dues of ₹[Amount].
                  </div>
                  <div className={styles.signatureGrid}>
                    <div className={styles.signatureField}>
                      <strong>Borrower Signature:</strong> ____________________
                    </div>
                    <div className={styles.signatureField}>
                      <strong>Recovery Agent Signature:</strong> ____________________
                    </div>
                    <div className={styles.signatureField}>
                      <strong>Witness (if any):</strong> ____________________
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Template 2 */}
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaBell className={styles.templateIcon} />
                <h3>2. Pre-Sale Notice (Before Auction/Sale)</h3>
              </div>
              <div className={styles.templateContent}>
                <div className={styles.templateDetails}>
                  <div className={styles.templateField}>
                    <strong>Subject:</strong> Pre-Sale Notice – Repossessed Vehicle under Loan Account [XXXXXX]
                  </div>
                  <div className={styles.templateField}>
                    Dear [Borrower Name],
                  </div>
                  <div className={styles.templateField}>
                    This is to inform you that the vehicle [Make, Model, Reg. No.] financed under Loan Account [XXXXXX] was repossessed on [Date] due to continued default.
                  </div>
                  <div className={styles.templateField}>
                    You are hereby given 15 days from the date of this notice to repay the outstanding amount of ₹[Amount] and reclaim the vehicle. Failing which, the vehicle will be sold via public auction or private sale on or after [Auction Date].
                  </div>
                  <div className={styles.templateField}>
                    Any surplus from the sale will be refunded to you. Any shortfall will remain payable.
                  </div>
                  <div className={styles.templateField}>
                    Sincerely,
                  </div>
                  <div className={styles.templateField}>
                    [Authorized Officer Name]
                  </div>
                  <div className={styles.templateField}>
                    [Bank/NBFC Name]
                  </div>
                  <div className={styles.templateField}>
                    [Contact Details]
                  </div>
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaGavel className={styles.templateIcon} />
                <h3>3. Legal Notice Before Filing Civil Suit</h3>
              </div>
              <div className={styles.templateContent}>
                <div className={styles.templateDetails}>
                  <div className={styles.templateField}>
                    <strong>Subject:</strong> Final Legal Notice – Recovery of Vehicle Loan Dues
                  </div>
                  <div className={styles.templateField}>
                    <strong>To:</strong> [Borrower Name]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Address:</strong> [Full Address]
                  </div>
                  <div className={styles.templateField}>
                    Dear Sir/Madam,
                  </div>
                  <div className={styles.templateField}>
                    Despite repeated reminders and repossession of the financed vehicle [Make, Model], your loan account [XXXXXX] continues to reflect an unpaid balance of ₹[Amount].
                  </div>
                  <div className={styles.templateField}>
                    This is a final legal notice. If the dues are not cleared within 15 days of receipt of this notice, we shall initiate legal proceedings under the Indian Contract Act and Civil Procedure Code for recovery of the balance amount, along with applicable interest and legal costs.
                  </div>
                  <div className={styles.templateField}>
                    This notice may be used as evidence in court.
                  </div>
                  <div className={styles.templateField}>
                    Sincerely,
                  </div>
                  <div className={styles.templateField}>
                    [Legal Counsel Name]
                  </div>
                  <div className={styles.templateField}>
                    [Law Firm or Bank Legal Cell]
                  </div>
                  <div className={styles.templateField}>
                    [Contact Details]
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Compliance Notes Section */}
        {activeTab === 'compliance' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaShieldAlt className={styles.sectionIcon} /> 
              Important Compliance Notes
            </h2>

            <div className={styles.complianceGrid}>
              <div className={styles.complianceCard}>
                <div className={styles.complianceIcon}>
                  <FaHandshake />
                </div>
                <div className={styles.complianceContent}>
                  <h3>Peaceful Repossession</h3>
                  <p>Repossession must be non-violent and documented with proper evidence and witness signatures.</p>
                </div>
              </div>

              <div className={styles.complianceCard}>
                <div className={styles.complianceIcon}>
                  <FaMoneyBillWave />
                </div>
                <div className={styles.complianceContent}>
                  <h3>Repayment Opportunity</h3>
                  <p>Borrower must be given a fair chance to repay before auction with clear timelines and terms.</p>
                </div>
              </div>

              <div className={styles.complianceCard}>
                <div className={styles.complianceIcon}>
                  <FaUserCheck />
                </div>
                <div className={styles.complianceContent}>
                  <h3>Respectful Conduct</h3>
                  <p>RBI guidelines mandate respectful conduct, privacy protection, and proper grievance redressal mechanisms.</p>
                </div>
              </div>

              <div className={styles.complianceCard}>
                <div className={styles.complianceIcon}>
                  <FaFileAlt />
                </div>
                <div className={styles.complianceContent}>
                  <h3>Documentation</h3>
                  <p>All recovery actions must be properly documented with signed acknowledgments and transparent records.</p>
                </div>
              </div>

              <div className={styles.complianceCard}>
                <div className={styles.complianceIcon}>
                  <FaGavel />
                </div>
                <div className={styles.complianceContent}>
                  <h3>Legal Compliance</h3>
                  <p>All actions must comply with SARFAESI Act, RBI guidelines, and other applicable laws and regulations.</p>
                </div>
              </div>

              <div className={styles.complianceCard}>
                <div className={styles.complianceIcon}>
                  <FaInfoCircle />
                </div>
                <div className={styles.complianceContent}>
                  <h3>Transparency</h3>
                  <p>All processes including vehicle valuation and auction must be transparent with proper communication to the borrower.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default LegalActions;