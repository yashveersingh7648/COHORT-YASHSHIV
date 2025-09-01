import React from 'react';
import styles from './DRATraining.module.css';
import { 
  FaBook,
  FaBalanceScale,
  FaComments,
  FaUserShield,
  FaChartLine,
  FaLaptop,
  FaGraduationCap,
  FaUniversity,
  FaHandHoldingUsd,
  FaPhone,
  FaUsers,
  FaShieldAlt,
  FaFileContract,
  FaHandshake,
  FaMobileAlt,
  FaLock,
  FaClipboardCheck,
  FaCertificate
} from 'react-icons/fa';

const DRATraining = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaBook className={styles.titleIcon} /> 
          Debt Recovery Agent (DRA) Certification Course
        </h1>
        <div className={styles.subtitleContainer}>
          <p className={styles.subtitleHindi}>सपकोहोर्ट ऋण वसूली एजेंट प्रशिक्षण</p>
          <p className={styles.subtitle}>Empowering Debt Recovery Agents with Knowledge, Ethics & Opportunity</p>
          <p className={styles.subtitleHindi}>ज्ञान, नैतिकता और अवसर के साथ ऋण वसूली एजेंटों को सशक्त बनाना</p>
        </div>
      </header>

      <div className={styles.content}>
        {/* Module 1 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUniversity className={styles.sectionIcon} /> 
            Module 1 – Introduction to Banking & Financial System
          </h2>
          
          <div className={styles.moduleContent}>
            <div className={styles.topicItem}>
              <FaUniversity className={styles.topicIcon} />
              <span>Overview of Indian Financial System</span>
            </div>
            <div className={styles.topicItem}>
              <FaHandHoldingUsd className={styles.topicIcon} />
              <span>Types of Banks & NBFCs – Commercial, Cooperative, RRBs, Microfinance</span>
            </div>
            <div className={styles.topicItem}>
              <FaChartLine className={styles.topicIcon} />
              <span>Retail Lending Products – Personal Loans, Credit Cards, Auto Loans, Home Loans, Business Loans</span>
            </div>
            <div className={styles.topicItem}>
              <FaChartLine className={styles.topicIcon} />
              <span>Loan Lifecycle – Sourcing, Disbursement, Servicing, Recovery</span>
            </div>
            <div className={styles.topicItem}>
              <FaShieldAlt className={styles.topicIcon} />
              <span>RBI & Regulatory Structure Overview</span>
            </div>
          </div>
        </section>

        {/* Module 2 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaBalanceScale className={styles.sectionIcon} /> 
            Module 2 – Debt Recovery Framework & Legal Aspects
          </h2>
          
          <div className={styles.moduleContent}>
            <div className={styles.topicItem}>
              <FaShieldAlt className={styles.topicIcon} />
              <span>RBI Guidelines on Debt Recovery Agents – Code of Conduct, Certification, Renewal</span>
            </div>
            <div className={styles.topicItem}>
              <FaFileContract className={styles.topicIcon} />
              <span>SARFAESI Act, 2002 – Scope & Application</span>
            </div>
            <div className={styles.topicItem}>
              <FaBalanceScale className={styles.topicIcon} />
              <span>DRT Act, 1993 – Debt Recovery Tribunals & Appellate Tribunals</span>
            </div>
            <div className={styles.topicItem}>
              <FaFileContract className={styles.topicIcon} />
              <span>Negotiable Instruments Act (Cheque Bounce cases – Sec 138)</span>
            </div>
            <div className={styles.topicItem}>
              <FaBalanceScale className={styles.topicIcon} />
              <span>Insolvency & Bankruptcy Code (IBC) Basics</span>
            </div>
            <div className={styles.topicItem}>
              <FaFileContract className={styles.topicIcon} />
              <span>Contract Law & Loan Agreement Essentials</span>
            </div>
            <div className={styles.topicItem}>
              <FaShieldAlt className={styles.topicIcon} />
              <span>Consumer Protection Act – Rights of Borrowers</span>
            </div>
            <div className={styles.topicItem}>
              <FaShieldAlt className={styles.topicIcon} />
              <span>Fair Practices Code – Do's & Don'ts in Recovery</span>
            </div>
          </div>
        </section>

        {/* Module 3 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaComments className={styles.sectionIcon} /> 
            Module 3 – Communication Skills & Customer Handling
          </h2>
          
          <div className={styles.moduleContent}>
            <div className={styles.topicItem}>
              <FaComments className={styles.topicIcon} />
              <span>Principles of Ethical Communication</span>
            </div>
            <div className={styles.topicItem}>
              <FaPhone className={styles.topicIcon} />
              <span>Telephone Recovery Techniques</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Face-to-Face Collection Strategies</span>
            </div>
            <div className={styles.topicItem}>
              <FaHandshake className={styles.topicIcon} />
              <span>Negotiation & Persuasion Skills</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Handling Difficult Customers & Conflict Resolution</span>
            </div>
            <div className={styles.topicItem}>
              <FaComments className={styles.topicIcon} />
              <span>Bilingual & Multilingual Communication Approaches</span>
            </div>
            <div className={styles.topicItem}>
              <FaUserShield className={styles.topicIcon} />
              <span>De-escalation Techniques & Avoiding Harassment</span>
            </div>
          </div>
        </section>

        {/* Module 4 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUserShield className={styles.sectionIcon} /> 
            Module 4 – Ethics & Professional Conduct
          </h2>
          
          <div className={styles.moduleContent}>
            <div className={styles.topicItem}>
              <FaUserShield className={styles.topicIcon} />
              <span>Code of Ethics for DRAs (per RBI & IBA)</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Cultural Sensitivity & Inclusive Practices</span>
            </div>
            <div className={styles.topicItem}>
              <FaUserShield className={styles.topicIcon} />
              <span>Avoiding Coercion, Threats, and Unlawful Practices</span>
            </div>
            <div className={styles.topicItem}>
              <FaLock className={styles.topicIcon} />
              <span>Confidentiality & Data Protection</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Professionalism in Field Visits</span>
            </div>
          </div>
        </section>

        {/* Module 5 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaChartLine className={styles.sectionIcon} /> 
            Module 5 – Recovery Strategies & Techniques
          </h2>
          
          <div className={styles.moduleContent}>
            <div className={styles.topicItem}>
              <FaChartLine className={styles.topicIcon} />
              <span>Early Delinquency Management (Pre-NPA accounts)</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Skip Tracing Techniques</span>
            </div>
            <div className={styles.topicItem}>
              <FaUserShield className={styles.topicIcon} />
              <span>Field Visit Planning & Safety Measures</span>
            </div>
            <div className={styles.topicItem}>
              <FaHandshake className={styles.topicIcon} />
              <span>Soft vs Hard Collection Approaches</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Recovery in Special Situations (Death of Borrower, Natural Disasters)</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Coordination with Lenders, Legal Teams & Law Enforcement</span>
            </div>
            <div className={styles.topicItem}>
              <FaShieldAlt className={styles.topicIcon} />
              <span>Asset Seizure Procedures (as per SARFAESI)</span>
            </div>
          </div>
        </section>

        {/* Module 6 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaLaptop className={styles.sectionIcon} /> 
            Module 6 – Digital Tools & Record Keeping
          </h2>
          
          <div className={styles.moduleContent}>
            <div className={styles.topicItem}>
              <FaMobileAlt className={styles.topicIcon} />
              <span>Mobile Collection Apps & CRM Tools</span>
            </div>
            <div className={styles.topicItem}>
              <FaClipboardCheck className={styles.topicIcon} />
              <span>Maintaining Field Visit Reports & Payment Records</span>
            </div>
            <div className={styles.topicItem}>
              <FaLaptop className={styles.topicIcon} />
              <span>Digital Payment Collection Methods (UPI, NEFT, RTGS)</span>
            </div>
            <div className={styles.topicItem}>
              <FaLock className={styles.topicIcon} />
              <span>Data Privacy & Cybersecurity in Recovery</span>
            </div>
          </div>
        </section>

        {/* Module 7 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaGraduationCap className={styles.sectionIcon} /> 
            Module 7 – Mock Tests, Case Studies & Role Plays
          </h2>
          
          <div className={styles.moduleContent}>
            <div className={styles.topicItem}>
              <FaClipboardCheck className={styles.topicIcon} />
              <span>Bilingual Mock Test (as per certification standards)</span>
            </div>
            <div className={styles.topicItem}>
              <FaUsers className={styles.topicIcon} />
              <span>Role Play Exercises – Telecalling & Field Recovery</span>
            </div>
            <div className={styles.topicItem}>
              <FaBook className={styles.topicIcon} />
              <span>Analysis of Real-Life Recovery Cases</span>
            </div>
            <div className={styles.topicItem}>
              <FaUserShield className={styles.topicIcon} />
              <span>Compliance Violation Examples & Learning Points</span>
            </div>
          </div>
        </section>

        {/* Final Assessment */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCertificate className={styles.sectionIcon} /> 
            Final Assessment & Certification
          </h2>
          
          <div className={styles.assessmentContent}>
            <div className={styles.assessmentItem}>
              <FaClipboardCheck className={styles.assessmentIcon} />
              <div className={styles.assessmentDetails}>
                <h3>Written/Online Exam</h3>
                <p>MCQ + Case Scenarios</p>
              </div>
            </div>
            <div className={styles.assessmentItem}>
              <FaUsers className={styles.assessmentIcon} />
              <div className={styles.assessmentDetails}>
                <h3>Practical Evaluation</h3>
                <p>Role Play & Communication</p>
              </div>
            </div>
            <div className={styles.assessmentItem}>
              <FaChartLine className={styles.assessmentIcon} />
              <div className={styles.assessmentDetails}>
                <h3>Passing Marks</h3>
                <p>60%+ in both theory & practical</p>
              </div>
            </div>
            <div className={styles.assessmentItem}>
              <FaCertificate className={styles.assessmentIcon} />
              <div className={styles.assessmentDetails}>
                <h3>Certificate Validity</h3>
                <p>2 years (per RBI mandate)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DRATraining;