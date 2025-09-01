import React from 'react';
import styles from './DPDStages.module.css';
import { 
  FaCalendarAlt,
  FaCalculator,
  FaExclamationTriangle,
  FaUserClock,
  FaChartLine,
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaSms,
  FaPhone,
  FaHandshake,
  FaGavel,
  FaShieldAlt,
  FaClipboardCheck,
  FaInfoCircle,
  FaTachometerAlt,
  FaComments,
  FaHeadset,
  FaUserShield,
  FaFileContract,
  FaHandHoldingUsd
} from 'react-icons/fa';

const DPDStages = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaCalendarAlt className={styles.titleIcon} /> 
          DPD & Delinquency Stages with Sample Messaging & Action List
        </h1>
        <p className={styles.subtitle}>
          Comprehensive guide to Days Past Due metrics and recovery strategies
        </p>
      </header>

      <div className={styles.content}>
        {/* What Is DPD Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaInfoCircle className={styles.sectionIcon} /> 
            What Is DPD (Days Past Due)?
          </h2>
          <div className={styles.dpdDefinition}>
            <p>
              DPD (Days Past Due) is a metric used to track how many days a borrower has missed 
              a scheduled payment. It's a critical indicator in credit risk assessment, portfolio 
              health monitoring, and regulatory reporting.
            </p>
          </div>
        </section>

        {/* DPD Calculation Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCalculator className={styles.sectionIcon} /> 
            DPD Calculation
          </h2>
          <div className={styles.calculationCard}>
            <div className={styles.formula}>
              <h3>Formula:</h3>
              <p>DPD = Current Date – Payment Due Date</p>
            </div>
            <div className={styles.example}>
              <h3>Example:</h3>
              <p>If a payment was due on August 1st and today is August 20th, the DPD is 19.</p>
            </div>
          </div>
        </section>

        {/* Delinquency Stages Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaTachometerAlt className={styles.sectionIcon} /> 
            Delinquency Stages
          </h2>
          <p className={styles.sectionDescription}>
            These stages help categorize borrower risk and guide recovery strategies. Here's a typical breakdown used 
            by banks, NBFCs, and collection platforms:
          </p>
          
          <div className={styles.stagesTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}>DPD Range</div>
              <div className={styles.tableCell}>Stage</div>
              <div className={styles.tableCell}>Description</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>0 DPD</div>
              <div className={styles.tableCell}>Current</div>
              <div className={styles.tableCell}>No missed payments. Account is in good standing.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>1–30 DPD</div>
              <div className={styles.tableCell}>Early Delinquency</div>
              <div className={styles.tableCell}>Minor delay. Often due to oversight or cash flow issues.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>31–60 DPD</div>
              <div className={styles.tableCell}>Mild Delinquency</div>
              <div className={styles.tableCell}>Payment delay is more serious. Reminder and soft follow-up initiated.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>61–90 DPD</div>
              <div className={styles.tableCell}>Moderate Delinquency</div>
              <div className={styles.tableCell}>Risk increases. May trigger stronger recovery efforts or restructuring options.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>91–180 DPD</div>
              <div className={styles.tableCell}>Serious Delinquency/NPA</div>
              <div className={styles.tableCell}>Account is classified as Substandard under RBI norms.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>＞180 DPD</div>
              <div className={styles.tableCell}>Write Off / Loss Asset</div>
              <div className={styles.tableCell}>Account becomes Doubtful. And considered Loss. Write-off or legal recovery is typical.</div>
            </div>
          </div>
        </section>

        {/* Sample Messaging Framework Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaComments className={styles.sectionIcon} /> 
            Sample Messaging & Action Framework by Delinquency Stages
          </h2>
          
          <div className={styles.messagingFramework}>
            <div className={styles.frameworkHeader}>
              <div className={styles.frameworkCell}>DPD Stage</div>
              <div className={styles.frameworkCell}>Borrower Messaging</div>
              <div className={styles.frameworkCell}>Lender Action</div>
              <div className={styles.frameworkCell}>Tone</div>
            </div>
            
            <div className={styles.frameworkRow}>
              <div className={styles.frameworkCell}>0 DPD (Current)</div>
              <div className={styles.frameworkCell}>"Your account is in good standing. Thank you for staying on track!"</div>
              <div className={styles.frameworkCell}>Monitor account health, offer loyalty benefits or credit score insights</div>
              <div className={styles.frameworkCell}><span className={styles.toneReassuring}>Reassuring</span></div>
            </div>
            
            <div className={styles.frameworkRow}>
              <div className={styles.frameworkCell}>1–30 DPD</div>
              <div className={styles.frameworkCell}>"We noticed a slight delay. Need help or a reminder setup? Let's stay on track."</div>
              <div className={styles.frameworkCell}>Send automated reminders (SMS/email), offer grace period or flexible options</div>
              <div className={styles.frameworkCell}><span className={styles.toneFriendly}>Friendly & Supportive</span></div>
            </div>
            
            <div className={styles.frameworkRow}>
              <div className={styles.frameworkCell}>31–60 DPD</div>
              <div className={styles.frameworkCell}>"We understand life gets busy. Let's explore payment options to avoid penalties."</div>
              <div className={styles.frameworkCell}>Initiate outbound calls, offer short-term restructuring or counseling</div>
              <div className={styles.frameworkCell}><span className={styles.toneEmpathetic}>Empathetic</span></div>
            </div>
            
            <div className={styles.frameworkRow}>
              <div className={styles.frameworkCell}>61–90 DPD</div>
              <div className={styles.frameworkCell}>"Your account is at risk. Let's resolve this together before it affects your credit."</div>
              <div className={styles.frameworkCell}>Escalate to resolution team, assess risk, initiate soft legal prep</div>
              <div className={styles.frameworkCell}><span className={styles.toneFirm}>Firm but Helpful</span></div>
            </div>
            
            <div className={styles.frameworkRow}>
              <div className={styles.frameworkCell}>91–180 DPD</div>
              <div className={styles.frameworkCell}>"Your account is now classified as overdue. Recovery actions may begin soon."</div>
              <div className={styles.frameworkCell}>Flag as NPA, begin legal documentation, offer final restructuring opportunity</div>
              <div className={styles.frameworkCell}><span className={styles.toneSerious}>Serious & Direct</span></div>
            </div>
            
            <div className={styles.frameworkRow}>
              <div className={styles.frameworkCell}>＞180 DPD</div>
              <div className={styles.frameworkCell}>"Your account has been classified as a written off/ a loss. recovery steps are underway."</div>
              <div className={styles.frameworkCell}>Initiate recovery/legal action, write-off, pursue litigation or asset seizure if applicable</div>
              <div className={styles.frameworkCell}><span className={styles.toneLegal}>Legal & Final & Procedural</span></div>
            </div>
          </div>
        </section>

        {/* Action Icons Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaClipboardCheck className={styles.sectionIcon} /> 
            Recovery Action Overview
          </h2>
          
          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaSms />
              </div>
              <h3>Automated Reminders</h3>
              <p>SMS and email notifications for early stage delinquency</p>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaPhone />
              </div>
              <h3>Outbound Calls</h3>
              <p>Personalized communication for moderate delinquency cases</p>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaHandshake />
              </div>
              <h3>Restructuring Options</h3>
              <p>Payment plans and counseling for borrowers in difficulty</p>
            </div>
            
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaGavel />
              </div>
              <h3>Legal Actions</h3>
              <p>Formal recovery procedures for serious delinquency cases</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <h2 className={styles.footerTitle}>Suppcohort</h2>
            <p className={styles.footerSubtitle}>Empowering India's Debt Management Ecosystem</p>
            
            <div className={styles.contactInfo}>
              <p>📍 www.suppcohort.com</p>
              <p>📧 contact@suppcohort.com</p>
            </div>
            
            <blockquote className={styles.quote}>
              "Let's build an ethical, inclusive, and opportunity-driven future for debt management in India."
            </blockquote>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DPDStages;