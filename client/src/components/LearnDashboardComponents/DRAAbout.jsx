import React from 'react';
import styles from './DRAAbout.module.css';
import { 
  FaGraduationCap,
  FaClock,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaQuestionCircle,
  FaExclamationCircle,
  FaBook,
  FaUserCheck,
  FaShieldAlt,
  FaCheckCircle,
  FaListAlt,
  FaCertificate,
  FaUserTie,
  FaRegCalendarCheck,
  FaChalkboardTeacher
} from 'react-icons/fa';

const DRAAbout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaGraduationCap className={styles.titleIcon} /> 
          Debt Recovery Agent (DRA) Certification
        </h1>
        <p className={styles.subtitle}>
          Comprehensive training program for effective debt recovery management
        </p>
      </header>

      <div className={styles.content}>
        {/* Introduction Section */}
        <section className={styles.section}>
          <div className={styles.intro}>
            <p>
              The Debt Recovery Agent course equips learners with the skills and knowledge necessary to effectively manage and recover overdue debts. This comprehensive program covers negotiation techniques, legal frameworks, communication strategies, and ethical practices essential for successful debt recovery.
            </p>
          </div>
        </section>

        {/* Certification Process Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCertificate className={styles.sectionIcon} /> 
            DRA Certification Process
          </h2>
          <p className={styles.sectionDescription}>
            To get a Debt Recovery Agent (DRA) certificate, you need to enroll in a training program, complete the required hours, and pass the IIBF-administered DRA examination. The training must be completed at an IIBF-accredited institute. After passing the exam, you can obtain the certificate from the IIBF.
          </p>
          
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>1</div>
              <div className={styles.processContent}>
                <h3>Eligibility</h3>
                <ul className={styles.processList}>
                  <li><FaUserCheck className={styles.listIcon} /> Age: You must be at least 18 years old.</li>
                  <li><FaBook className={styles.listIcon} /> Education: A minimum of Class 10 (SSC) qualification is required.</li>
                  <li><FaClock className={styles.listIcon} /> Training Hours: Individuals with pre-graduation education need 100 hours of training, while graduates and those with BPO/call center experience need 50 hours.</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.processCard}>
              <div className={styles.processNumber}>2</div>
              <div className={styles.processContent}>
                <h3>Training</h3>
                <ul className={styles.processList}>
                  <li><FaChalkboardTeacher className={styles.listIcon} /> Enroll in a DRA training program at an IIBF-accredited institute.</li>
                  <li><FaRegCalendarCheck className={styles.listIcon} /> Complete the required training hours (100 or 50).</li>
                  <li><FaCertificate className={styles.listIcon} /> Obtain a training completion certificate from the institute.</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.processCard}>
              <div className={styles.processNumber}>3</div>
              <div className={styles.processContent}>
                <h3>Examination</h3>
                <ul className={styles.processList}>
                  <li><FaListAlt className={styles.listIcon} /> Register for the DRA examination with IIBF, usually facilitated by the training institute.</li>
                  <li><FaTachometerAlt className={styles.listIcon} /> Appear for and pass the IIBF DRA examination.</li>
                  <li><FaExclamationCircle className={styles.listIcon} /> You have three attempts and nine months to pass the exam from the training completion date.</li>
                  <li><FaCheckCircle className={styles.listIcon} /> If unsuccessful, retraining is required.</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.processCard}>
              <div className={styles.processNumber}>4</div>
              <div className={styles.processContent}>
                <h3>Certification</h3>
                <ul className={styles.processList}>
                  <li><FaCertificate className={styles.listIcon} /> After passing the exam, you can obtain the DRA certificate from IIBF.</li>
                  <li><FaUserTie className={styles.listIcon} /> This certificate is often needed for employment in debt recovery roles.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Course Duration Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaClock className={styles.sectionIcon} /> 
            Course Duration
          </h2>
          
          <div className={styles.durationGrid}>
            <div className={styles.durationCard}>
              <div className={styles.durationHeader}>
                <div className={styles.durationHours}>100 Hours</div>
                <h3>Pre-Graduation Candidates</h3>
              </div>
              <p className={styles.durationDescription}>
                This is for candidates with educational qualifications below graduation, according to the Indian Institute of Banking & Finance (IIBF).
              </p>
            </div>
            
            <div className={styles.durationCard}>
              <div className={styles.durationHeader}>
                <div className={styles.durationHours}>50 Hours</div>
                <h3>Graduates & BPO Professionals</h3>
              </div>
              <p className={styles.durationDescription}>
                This is for candidates with a graduation degree or higher and for employees of BPO/Call Centers with a graduation degree, according to the Indian Institute of Banking & Finance (IIBF).
              </p>
            </div>
          </div>
          
          <div className={styles.trainingInfo}>
            <p>
              The training, whether 50 or 100 hours, is designed to equip agents with the necessary knowledge and skills for debt recovery, including understanding banking products/policies, soft skills, and fair collection practices.
            </p>
            <p>
              After completing the training, candidates need to pass an examination conducted by the Indian Institute of Banking & Finance (IIBF).
            </p>
          </div>
        </section>

        {/* Fees Structure Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaMoneyBillWave className={styles.sectionIcon} /> 
            Certification Fees
          </h2>
          
          <div className={styles.feesGrid}>
            <div className={styles.feesCard}>
              <div className={styles.feesHeader}>
                <h3>Examination Fees</h3>
              </div>
              <div className={styles.feesContent}>
                <div className={styles.feesItem}>
                  <span className={styles.feesLabel}>For IIBF Members:</span>
                  <span className={styles.feesAmount}>₹1,200 per attempt</span>
                </div>
                <div className={styles.feesItem}>
                  <span className={styles.feesLabel}>For Non-Members:</span>
                  <span className={styles.feesAmount}>₹1,500 per attempt</span>
                </div>
                <div className={styles.feesNote}>
                  * May be subject to additional taxes
                </div>
              </div>
            </div>
            
            <div className={styles.feesCard}>
              <div className={styles.feesHeader}>
                <h3>Membership Fees</h3>
              </div>
              <div className={styles.feesContent}>
                <div className={styles.feesItem}>
                  <span className={styles.feesLabel}>One-time Life Membership:</span>
                  <span className={styles.feesAmount}>₹1,770 (₹1,500 + ₹270 GST)</span>
                </div>
                <div className={styles.feesNote}>
                  * For applicants in India
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Attempts Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaTachometerAlt className={styles.sectionIcon} /> 
            Exam Attempts & Passing Criteria
          </h2>
          
          <div className={styles.examInfo}>
            <div className={styles.examCard}>
              <h3>Attempts Allowed</h3>
              <p>Candidates appearing for the IIBF DRA (Debt Recovery Agents) exam have a maximum of three attempts to pass the exam within nine months of completing their training.</p>
            </div>
            
            <div className={styles.examCard}>
              <h3>Passing Criteria</h3>
              <p>A minimum of 50 out of 100 marks is required to pass the exam.</p>
            </div>
            
            <div className={styles.examCard}>
              <h3>Time Limit</h3>
              <p>The nine-month period starts from the completion date of the training program.</p>
            </div>
            
            <div className={styles.examCard}>
              <h3>Retraining Requirement</h3>
              <p>If the candidate does not pass within the allotted attempts and time, they must undergo retraining.</p>
            </div>
            
            <div className={styles.examCard}>
              <h3>Re-registration</h3>
              <p>After retraining, candidates can re-register for the exam.</p>
            </div>
          </div>
        </section>

        {/* Mandatory Certification Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaShieldAlt className={styles.sectionIcon} /> 
            Is DRA Certificate Mandatory?
          </h2>
          
          <div className={styles.mandatoryInfo}>
            <div className={styles.mandatoryAnswer}>
              <FaCheckCircle className={styles.mandatoryIcon} />
              <span>Yes, the Debt Recovery Agent (DRA) certificate is mandatory for individuals working as recovery agents for banks and other financial institutions in India.</span>
            </div>
            
            <p className={styles.mandatoryDescription}>
              The Reserve Bank of India (RBI) requires this certification to ensure that recovery agents are trained in legal, ethical, and procedural aspects of debt collection.
            </p>
            
            <div className={styles.mandatoryDetails}>
              <h3>Key Details:</h3>
              <ul className={styles.mandatoryList}>
                <li><strong>Regulatory Requirement:</strong> The RBI mandates that all Debt Recovery Agents (DRAs) must be certified through a recognized training program and exam conducted by the Indian Institute of Banking and Finance (IIBF).</li>
                <li><strong>Scope of Application:</strong> This applies to agents working directly or indirectly for banks, NBFCs (Non-Banking Financial Companies), and other private collection agencies.</li>
                <li><strong>Importance of Certification:</strong> The DRA certification ensures that recovery agents are aware of relevant laws, ethical practices, borrower rights, and communication norms, promoting fair and legal debt collection practices.</li>
                <li><strong>Consequences of Non-Compliance:</strong> Without the DRA certificate, individuals cannot legally operate as debt recovery agents for financial institutions.</li>
                <li><strong>Training and Examination:</strong> The IIBF provides the required training and conducts the certification exam.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DRAAbout;