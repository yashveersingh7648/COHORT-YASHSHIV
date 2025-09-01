import React from 'react';
import styles from './CommonTerms.module.css';
import { 
  FaFileInvoiceDollar,
  FaPhone,
  FaBalanceScale,
  FaCogs,
  FaHandshake,
  FaMoneyBillWave,
  FaSearch,
  FaUserFriends,
  FaGavel,
  FaHammer,
  FaChartLine,
  FaHandHoldingUsd,
  FaComments,
  FaClipboardList,
  FaExclamationTriangle,
  FaBook,
  FaUniversity,
  FaStore,
  FaHandPaper,
  FaHeadset
} from 'react-icons/fa';

const CommonTerms = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaBook className={styles.titleIcon} /> 
          Common Terms in Collection & Recovery
        </h1>
        <p className={styles.subtitle}>
          Essential vocabulary used by banks, NBFCs, recovery agents, and legal teams
        </p>
      </header>

      <div className={styles.content}>
        {/* Financial & Account Terms Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaMoneyBillWave className={styles.sectionIcon} /> 
            Financial & Account Terms
          </h2>
          
          <div className={styles.termsGrid}>
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaFileInvoiceDollar className={styles.termIcon} />
                <h3>NPA (Non-Performing Asset)</h3>
              </div>
              <p className={styles.termDefinition}>A loan where the borrower has not made scheduled payments for 90+ days.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaExclamationTriangle className={styles.termIcon} />
                <h3>Overdue</h3>
              </div>
              <p className={styles.termDefinition}>Payment not made by the due date.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaClipboardList className={styles.termIcon} />
                <h3>EMI (Equated Monthly Installment)</h3>
              </div>
              <p className={styles.termDefinition}>Fixed monthly payment toward a loan.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaMoneyBillWave className={styles.termIcon} />
                <h3>Outstanding Amount</h3>
              </div>
              <p className={styles.termDefinition}>Total unpaid dues including principal, interest, and penalties.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHandPaper className={styles.termIcon} />
                <h3>Charge-off</h3>
              </div>
              <p className={styles.termDefinition}>When a lender writes off a loan as a loss but may still pursue recovery.</p>
            </div>
          </div>
        </section>

        {/* Communication & Follow-Up Terms Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaPhone className={styles.sectionIcon} /> 
            Communication & Follow-Up Terms
          </h2>
          
          <div className={styles.termsGrid}>
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaPhone className={styles.termIcon} />
                <h3>Reminder Call</h3>
              </div>
              <p className={styles.termDefinition}>Initial contact to inform borrower of missed payment.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHeadset className={styles.termIcon} />
                <h3>Follow-Up</h3>
              </div>
              <p className={styles.termDefinition}>Subsequent communication after initial contact.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHandshake className={styles.termIcon} />
                <h3>Promise to Pay (PTP)</h3>
              </div>
              <p className={styles.termDefinition}>Borrower commits to pay by a specific date.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaSearch className={styles.termIcon} />
                <h3>Skip Tracing</h3>
              </div>
              <p className={styles.termDefinition}>Locating a borrower who has become unreachable.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaUserFriends className={styles.termIcon} />
                <h3>Field Visit</h3>
              </div>
              <p className={styles.termDefinition}>In-person visit by a recovery agent.</p>
            </div>
          </div>
        </section>

        {/* Legal & Compliance Terms Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaBalanceScale className={styles.sectionIcon} /> 
            Legal & Compliance Terms
          </h2>
          
          <div className={styles.termsGrid}>
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaGavel className={styles.termIcon} />
                <h3>Demand Notice</h3>
              </div>
              <p className={styles.termDefinition}>Formal request for payment.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaUniversity className={styles.termIcon} />
                <h3>SARFAESI Notice</h3>
              </div>
              <p className={styles.termDefinition}>Legal notice under the SARFAESI Act for secured loans.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHammer className={styles.termIcon} />
                <h3>Repossession</h3>
              </div>
              <p className={styles.termDefinition}>Seizing collateral (e.g., vehicle) due to default.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaStore className={styles.termIcon} />
                <h3>Auction Notice</h3>
              </div>
              <p className={styles.termDefinition}>Notification of intent to sell repossessed asset.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaGavel className={styles.termIcon} />
                <h3>Section 138 Notice</h3>
              </div>
              <p className={styles.termDefinition}>Legal notice for dishonored cheque under NI Act.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaBalanceScale className={styles.termIcon} />
                <h3>Civil Suit</h3>
              </div>
              <p className={styles.termDefinition}>Legal action filed in court for recovery.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHandshake className={styles.termIcon} />
                <h3>Lok Adalat</h3>
              </div>
              <p className={styles.termDefinition}>Alternative dispute resolution forum for settlement.</p>
            </div>
          </div>
        </section>

        {/* Operational Terms Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCogs className={styles.sectionIcon} /> 
            Operational Terms
          </h2>
          
          <div className={styles.termsGrid}>
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaChartLine className={styles.termIcon} />
                <h3>Bucket</h3>
              </div>
              <p className={styles.termDefinition}>Classification of overdue accounts by age (e.g., 30-day, 60-day).</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaChartLine className={styles.termIcon} />
                <h3>Roll Rate</h3>
              </div>
              <p className={styles.termDefinition}>Percentage of accounts moving from one delinquency bucket to the next.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaChartLine className={styles.termIcon} />
                <h3>Recovery Ratio</h3>
              </div>
              <p className={styles.termDefinition}>Amount recovered vs. total overdue.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHandshake className={styles.termIcon} />
                <h3>Settlement</h3>
              </div>
              <p className={styles.termDefinition}>Agreement to pay a reduced amount to close the account.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHandPaper className={styles.termIcon} />
                <h3>Write-Off</h3>
              </div>
              <p className={styles.termDefinition}>Loan removed from books due to non-recovery.</p>
            </div>
          </div>
        </section>

        {/* Customer Interaction Terms Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaHandshake className={styles.sectionIcon} /> 
            Customer Interaction Terms
          </h2>
          
          <div className={styles.termsGrid}>
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaComments className={styles.termIcon} />
                <h3>Hardship Case</h3>
              </div>
              <p className={styles.termDefinition}>Borrower facing genuine financial difficulty.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHandHoldingUsd className={styles.termIcon} />
                <h3>Restructuring</h3>
              </div>
              <p className={styles.termDefinition}>Modifying loan terms to ease repayment.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaMoneyBillWave className={styles.termIcon} />
                <h3>Part-Payment</h3>
              </div>
              <p className={styles.termDefinition}>Partial settlement of dues.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaComments className={styles.termIcon} />
                <h3>Negotiation</h3>
              </div>
              <p className={styles.termDefinition}>Discussion to reach a mutually acceptable repayment plan.</p>
            </div>
            
            <div className={styles.termCard}>
              <div className={styles.termHeader}>
                <FaHeadset className={styles.termIcon} />
                <h3>Grievance Redressal</h3>
              </div>
              <p className={styles.termDefinition}>Process for handling borrower complaints.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommonTerms;