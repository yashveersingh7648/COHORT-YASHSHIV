import React, { useState } from 'react';
import styles from './LegalNotices.module.css';
import { 
  FaClipboardList,
  FaEnvelope,
  FaGavel,
  FaFileContract,
  FaHandshake,
  FaMoneyBillWave,
  FaNewspaper,
  FaBalanceScale,
  FaUserCheck,
  FaExclamationTriangle,
  FaBook,
  FaInfoCircle,
  FaFileAlt,
  FaSignature,
  FaClock
} from 'react-icons/fa';

const LegalNotices = () => {
  const [activeTab, setActiveTab] = useState('types');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaClipboardList className={styles.titleIcon} /> 
          Types of Legal Notices in Collection & Recovery
        </h1>
        <p className={styles.subtitle}>
          Comprehensive guide to various legal notices used in debt recovery processes
        </p>
      </header>

      <div className={styles.content}>
        {/* Navigation Tabs */}
        <nav className={styles.tabNav}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'types' ? styles.active : ''}`}
            onClick={() => setActiveTab('types')}
          >
            <FaFileAlt className={styles.tabIcon} />
            Notice Types
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'templates' ? styles.active : ''}`}
            onClick={() => setActiveTab('templates')}
          >
            <FaFileContract className={styles.tabIcon} />
            Templates
          </button>
        </nav>

        {/* Notice Types Section */}
        {activeTab === 'types' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaFileAlt className={styles.sectionIcon} /> 
              Legal Notice Types in Debt Recovery
            </h2>

            {/* Demand Notice */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>1</div>
                <h3>Demand Notice</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>First formal intimation to the borrower about overdue dues.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaFileAlt className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Contents</h4>
                    <p>Loan details, outstanding amount, due date, and request for payment.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaGavel className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Legal Basis</h4>
                    <p>Often issued under general contract law or banking terms.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaUserCheck className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Tone</h4>
                    <p>Polite but firm.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SARFAESI Notice */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>2</div>
                <h3>Notice Under Section 13(2) of SARFAESI Act</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>Initiates recovery for secured loans without court intervention.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaUserCheck className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Issued By</h4>
                    <p>Secured creditors (banks/NBFCs).</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaFileAlt className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Contents</h4>
                    <p>Demands repayment within 60 days; warns of asset possession if unpaid.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaGavel className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Legal Weight</h4>
                    <p>Strong—can lead to asset seizure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Possession Notice */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>3</div>
                <h3>Possession Notice (Section 13(4) of SARFAESI Act)</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>Declares intent to take possession of secured assets.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaExclamationTriangle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Issued After</h4>
                    <p>Borrower fails to comply with Section 13(2) notice.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaNewspaper className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Published In</h4>
                    <p>Local newspapers and affixed on the property.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaMoneyBillWave className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Next Step</h4>
                    <p>Auction or sale of assets.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Notice Before Suit */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>4</div>
                <h3>Legal Notice Before Filing Suit</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>Final warning before initiating civil litigation.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaFileAlt className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Contents</h4>
                    <p>Details of default, legal consequences, and time to respond.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaMoneyBillWave className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Used For</h4>
                    <p>Unsecured loans, credit cards, personal loans.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaUserCheck className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Sent By</h4>
                    <p>Legal department or external counsel.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lok Adalat Notice */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>5</div>
                <h3>Lok Adalat Referral Notice</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>Offers borrower a chance to settle via alternative dispute resolution.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaUserCheck className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Issued By</h4>
                    <p>Bank or recovery agency in coordination with legal services authority.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaHandshake className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Tone</h4>
                    <p>Cooperative and solution-oriented.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cheque Bounce Notice */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>6</div>
                <h3>Cheque Bounce Notice (Section 138 of NI Act)</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>Sent when a repayment cheque is dishonored.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaGavel className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Legal Basis</h4>
                    <p>Negotiable Instruments Act, 1881.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaClock className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Timeline</h4>
                    <p>Must be sent within 30 days of bounce; gives 15 days to repay.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaExclamationTriangle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Next Step</h4>
                    <p>Criminal complaint if unpaid.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arbitration Notice */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>7</div>
                <h3>Arbitration Notice</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>Invokes arbitration clause in loan agreement.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaFileContract className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Used When</h4>
                    <p>Loan contract includes arbitration provision.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaBalanceScale className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Outcome</h4>
                    <p>Dispute resolution via arbitrator instead of court.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Recovery Notice */}
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader}>
                <div className={styles.noticeNumber}>8</div>
                <h3>Final Recovery Notice / Pre-Auction Notice</h3>
              </div>
              <div className={styles.noticeContent}>
                <div className={styles.noticeItem}>
                  <FaInfoCircle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Purpose</h4>
                    <p>Informs borrower of impending auction of assets.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaExclamationTriangle className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Issued After</h4>
                    <p>Possession is taken and valuation is done.</p>
                  </div>
                </div>
                <div className={styles.noticeItem}>
                  <FaFileAlt className={styles.noticeIcon} />
                  <div className={styles.noticeText}>
                    <h4>Includes</h4>
                    <p>Auction date, reserve price, and recovery terms.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Templates Section */}
        {activeTab === 'templates' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaFileContract className={styles.sectionIcon} /> 
              Legal Notice Templates
            </h2>

            <div className={styles.templateIntro}>
              <p>Sample legal notice templates used in the debt collection and recovery process. These are tailored for different stages and types of recovery actions.</p>
            </div>

            {/* Demand Notice Template */}
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaEnvelope className={styles.templateIcon} />
                <h3>1. Demand Notice (General Overdue)</h3>
              </div>
              <div className={styles.templateContent}>
                <div className={styles.templateDetails}>
                  <div className={styles.templateField}>
                    <strong>Subject:</strong> Demand Notice for Overdue Loan Payment – Account No. [XXXX]
                  </div>
                  <div className={styles.templateField}>
                    <strong>To:</strong> [Borrower Name]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Address:</strong> [Borrower Address]
                  </div>
                  <div className={styles.templateField}>
                    Dear Sir/Madam,
                  </div>
                  <div className={styles.templateField}>
                    This is to inform you that your loan account [XXXX] with [Bank/NBFC Name] has an outstanding amount of ₹[Amount], which was due on [Due Date]. Despite prior reminders, the payment remains unpaid.
                  </div>
                  <div className={styles.templateField}>
                    You are hereby requested to pay the said amount within 15 days from the date of this notice, failing which further recovery actions may be initiated.
                  </div>
                  <div className={styles.templateField}>
                    Sincerely,
                  </div>
                  <div className={styles.templateField}>
                    [Authorized Signatory]
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

            {/* SARFAESI Notice Template */}
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaGavel className={styles.templateIcon} />
                <h3>2. SARFAESI Act Notice – Section 13(2)</h3>
              </div>
              <div className={styles.templateContent}>
                <div className={styles.templateDetails}>
                  <div className={styles.templateField}>
                    <strong>Subject:</strong> Notice under Section 13(2) of SARFAESI Act – Loan Account [XXXX]
                  </div>
                  <div className={styles.templateField}>
                    <strong>To:</strong> [Borrower Name]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Address:</strong> [Borrower Address]
                  </div>
                  <div className={styles.templateField}>
                    Dear Sir/Madam,
                  </div>
                  <div className={styles.templateField}>
                    Under Section 13(2) of the SARFAESI Act, 2002, you are hereby notified that your loan account [XXXX] has been classified as a Non-Performing Asset (NPA) due to non-payment of dues amounting to ₹[Amount] as of [Date].
                  </div>
                  <div className={styles.templateField}>
                    You are required to discharge the liability within 60 days from the date of this notice, failing which the secured asset(s) will be taken into possession under Section 13(4) of the Act.
                  </div>
                  <div className={styles.templateField}>
                    Sincerely,
                  </div>
                  <div className={styles.templateField}>
                    [Authorized Officer]
                  </div>
                  <div className={styles.templateField}>
                    [Bank Name]
                  </div>
                  <div className={styles.templateField}>
                    [Contact Details]
                  </div>
                </div>
              </div>
            </div>

            {/* Final Legal Notice Template */}
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaExclamationTriangle className={styles.templateIcon} />
                <h3>3. Final Legal Notice Before Filing Suit</h3>
              </div>
              <div className={styles.templateContent}>
                <div className={styles.templateDetails}>
                  <div className={styles.templateField}>
                    <strong>Subject:</strong> Final Legal Notice – Recovery of Outstanding Dues
                  </div>
                  <div className={styles.templateField}>
                    <strong>To:</strong> [Borrower Name]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Address:</strong> [Borrower Address]
                  </div>
                  <div className={styles.templateField}>
                    Dear Sir/Madam,
                  </div>
                  <div className={styles.templateField}>
                    This is the final legal notice regarding your unpaid dues of ₹[Amount] under Loan Account [XXXX]. Despite multiple reminders, the amount remains unpaid.
                  </div>
                  <div className={styles.templateField}>
                    If the payment is not received within 15 days of this notice, we shall initiate legal proceedings for recovery, including but not limited to filing a civil suit under applicable laws.
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
                    [Law Firm/Bank Legal Cell]
                  </div>
                  <div className={styles.templateField}>
                    [Contact Details]
                  </div>
                </div>
              </div>
            </div>

            {/* Cheque Bounce Notice Template */}
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaMoneyBillWave className={styles.templateIcon} />
                <h3>4. Cheque Bounce Notice – Section 138 of NI Act</h3>
              </div>
              <div className={styles.templateContent}>
                <div className={styles.templateDetails}>
                  <div className={styles.templateField}>
                    <strong>Subject:</strong> Legal Notice under Section 138 of Negotiable Instruments Act
                  </div>
                  <div className={styles.templateField}>
                    <strong>To:</strong> [Borrower Name]
                  </div>
                  <div className={styles.templateField}>
                    <strong>Address:</strong> [Borrower Address]
                  </div>
                  <div className={styles.templateField}>
                    Dear Sir/Madam,
                  </div>
                  <div className={styles.templateField}>
                    This is to inform you that the cheque bearing number [Cheque No.] dated [Date] for ₹[Amount] issued by you in favor of [Bank/NBFC Name] was dishonored due to [Reason].
                  </div>
                  <div className={styles.templateField}>
                    You are hereby called upon to make the payment within 15 days of receipt of this notice, failing which legal action under Section 138 of the Negotiable Instruments Act shall be initiated.
                  </div>
                  <div className={styles.templateField}>
                    Sincerely,
                  </div>
                  <div className={styles.templateField}>
                    [Legal Counsel Name]
                  </div>
                  <div className={styles.templateField}>
                    [Law Firm/Bank Legal Cell]
                  </div>
                  <div className={styles.templateField}>
                    [Contact Details]
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default LegalNotices;