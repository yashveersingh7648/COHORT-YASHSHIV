import React from 'react';
import styles from './DRAShort.module.css';
import { 
  FaUserTie,
  FaGraduationCap,
  FaBook,
  FaClipboardList,
  FaMoneyBillWave,
  FaLaptop,
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaChartBar,
  FaExclamationTriangle
} from 'react-icons/fa';

const DRAShort = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaUserTie className={styles.titleIcon} /> 
          DRA – Debt Recovery Agent
        </h1>
        <p className={styles.subtitle}>
          Essential information about becoming a certified Debt Recovery Agent in India
        </p>
      </header>

      <div className={styles.content}>
        {/* What is DRA Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUserTie className={styles.sectionIcon} /> 
            What Is a Debt Recovery Agent (DRA)?
          </h2>
          <div className={styles.definition}>
            <p>
              A Debt Recovery Agent is a professional authorized to recover debts on behalf of banks and financial institutions. Their role is to contact borrowers, negotiate repayments, and ensure recovery of overdue loans in a legal and ethical manner.
            </p>
          </div>
        </section>

        {/* Certification Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaGraduationCap className={styles.sectionIcon} /> 
            Certification: IIBF DRA Exam
          </h2>
          <div className={styles.certificationInfo}>
            <p>
              To become a certified DRA, you must pass the DRA Certificate Exam conducted by the Indian Institute of Banking & Finance (IIBF) under RBI guidelines.
            </p>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCheckCircle className={styles.sectionIcon} /> 
            Eligibility Criteria
          </h2>
          
          <div className={styles.criteriaGrid}>
            <div className={styles.criteriaCard}>
              <div className={styles.criteriaIcon}>
                <FaBook />
              </div>
              <div className={styles.criteriaContent}>
                <h3>Minimum Qualification</h3>
                <p>Class 10 (SSC) or above</p>
              </div>
            </div>
            
            <div className={styles.criteriaCard}>
              <div className={styles.criteriaIcon}>
                <FaUserTie />
              </div>
              <div className={styles.criteriaContent}>
                <h3>Age Requirement</h3>
                <p>Must be 18+</p>
              </div>
            </div>
            
            <div className={styles.criteriaCard}>
              <div className={styles.criteriaIcon}>
                <FaClock />
              </div>
              <div className={styles.criteriaContent}>
                <h3>Training Requirement</h3>
                <ul className={styles.criteriaList}>
                  <li>100 hours for candidates with 10+2 or below</li>
                  <li>50 hours for graduates and above</li>
                  <li>Retired bank officers (60+) may be exempted</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Training & Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaBook className={styles.sectionIcon} /> 
            Training & Skills
          </h2>
          
          <div className={styles.trainingInfo}>
            <p>The training covers:</p>
            <div className={styles.skillsGrid}>
              <div className={styles.skillItem}>
                <FaChartBar className={styles.skillIcon} />
                <span>Banking products and recovery procedures</span>
              </div>
              <div className={styles.skillItem}>
                <FaExclamationTriangle className={styles.skillIcon} />
                <span>Legal aspects of debt collection</span>
              </div>
              <div className={styles.skillItem}>
                <FaUserTie className={styles.skillIcon} />
                <span>Soft skills like negotiation and communication</span>
              </div>
              <div className={styles.skillItem}>
                <FaCheckCircle className={styles.skillIcon} />
                <span>Ethical conduct and compliance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Pattern Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaClipboardList className={styles.sectionIcon} /> 
            Exam Pattern
          </h2>
          
          <div className={styles.examTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}>Section</div>
              <div className={styles.tableCell}>Questions</div>
              <div className={styles.tableCell}>Marks/Question</div>
              <div className={styles.tableCell}>Negative Marking</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Part A</div>
              <div className={styles.tableCell}>15</div>
              <div className={styles.tableCell}>3</div>
              <div className={styles.tableCell}>Yes (1/3 mark)</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Part B</div>
              <div className={styles.tableCell}>10</div>
              <div className={styles.tableCell}>3</div>
              <div className={styles.tableCell}>Yes (1/3 mark)</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Part C</div>
              <div className={styles.tableCell}>25</div>
              <div className={styles.tableCell}>1</div>
              <div className={styles.tableCell}>No</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>Total</div>
              <div className={styles.tableCell}>50</div>
              <div className={styles.tableCell}>—</div>
              <div className={styles.tableCell}>—</div>
            </div>
          </div>
          
          <div className={styles.examDetails}>
            <div className={styles.detailItem}>
              <FaLaptop className={styles.detailIcon} />
              <span>Mode: Online (Computer-Based Test)</span>
            </div>
            <div className={styles.detailItem}>
              <FaChartBar className={styles.detailIcon} />
              <span>Passing Marks: Minimum 50%</span>
            </div>
          </div>
        </section>

        {/* Fees & Application Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaMoneyBillWave className={styles.sectionIcon} /> 
            Fees & Application
          </h2>
          
          <div className={styles.feesGrid}>
            <div className={styles.feeItem}>
              <div className={styles.feeIcon}>
                <FaMoneyBillWave />
              </div>
              <div className={styles.feeContent}>
                <h3>Examination Fee</h3>
                <p>₹1,200 per attempt</p>
              </div>
            </div>
            
            <div className={styles.feeItem}>
              <div className={styles.feeIcon}>
                <FaLaptop />
              </div>
              <div className={styles.feeContent}>
                <h3>Application Process</h3>
                <p>Apply Online: IIBF official website</p>
              </div>
            </div>
            
            <div className={styles.feeItem}>
              <div className={styles.feeIcon}>
                <FaClock />
              </div>
              <div className={styles.feeContent}>
                <h3>Exam Frequency</h3>
                <p>Monthly slots available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaBriefcase className={styles.sectionIcon} /> 
            Career Opportunities
          </h2>
          
          <div className={styles.careerInfo}>
            <p>After certification, you can work with:</p>
            <div className={styles.opportunitiesGrid}>
              <div className={styles.opportunityItem}>
                <FaBriefcase className={styles.opportunityIcon} />
                <span>Banks</span>
              </div>
              <div className={styles.opportunityItem}>
                <FaBriefcase className={styles.opportunityIcon} />
                <span>NBFCs</span>
              </div>
              <div className={styles.opportunityItem}>
                <FaBriefcase className={styles.opportunityIcon} />
                <span>Collection agencies</span>
              </div>
              <div className={styles.opportunityItem}>
                <FaBriefcase className={styles.opportunityIcon} />
                <span>BPOs handling financial recovery</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DRAShort;