import React from 'react';
import styles from './LendingProducts.module.css';
import { 
  FaUser, 
  FaBriefcase, 
  FaBuilding, 
  FaLandmark,
  FaHome, 
  FaCar, 
  FaGraduationCap, 
  FaStore, 
  FaGem, 
  FaHeartbeat,
  FaSeedling,
  FaCreditCard,
  FaShieldAlt,
  FaMoneyBillWave,
  FaChartLine,
  FaUserShield,
  FaHandHoldingUsd,
  FaUniversity,
  FaMobileAlt,
  FaHandsHelping,
  FaGlobe
} from 'react-icons/fa';

const LendingProducts = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaMoneyBillWave className={styles.titleIcon} /> 
          Lending Products Categorization
        </h1>
        <p className={styles.subtitle}>
          Comprehensive classification of lending products in the financial ecosystem
        </p>
      </header>

      <div className={styles.content}>
        {/* By Borrower Type Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUser className={styles.sectionIcon} /> 
            By Borrower Type
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaUser className={styles.cardIcon} />
                <h3>Retail Lending</h3>
              </div>
              <p className={styles.cardDescription}>Individuals (personal, home, auto)</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaBriefcase className={styles.cardIcon} />
                <h3>SME Lending</h3>
              </div>
              <p className={styles.cardDescription}>Small and medium enterprises</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaBuilding className={styles.cardIcon} />
                <h3>Corporate Lending</h3>
              </div>
              <p className={styles.cardDescription}>Large businesses</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaLandmark className={styles.cardIcon} />
                <h3>Institutional Lending</h3>
              </div>
              <p className={styles.cardDescription}>Government or financial entities</p>
            </div>
          </div>
        </section>

        {/* By Loan Purpose Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaGlobe className={styles.sectionIcon} /> 
            By Loan Purpose
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaUser className={styles.cardIcon} />
                <h3>Personal Loans</h3>
              </div>
              <p className={styles.cardDescription}>Unsecured, for consumption</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaHome className={styles.cardIcon} />
                <h3>Home Loans</h3>
              </div>
              <p className={styles.cardDescription}>Purchase, renovation</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaCar className={styles.cardIcon} />
                <h3>Auto Loans</h3>
              </div>
              <p className={styles.cardDescription}>Vehicle financing</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaGraduationCap className={styles.cardIcon} />
                <h3>Education Loans</h3>
              </div>
              <p className={styles.cardDescription}>Tuition and fees</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaStore className={styles.cardIcon} />
                <h3>Business Loans</h3>
              </div>
              <p className={styles.cardDescription}>Working capital, expansion</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaGem className={styles.cardIcon} />
                <h3>Gold Loans</h3>
              </div>
              <p className={styles.cardDescription}>Secured against gold</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaHeartbeat className={styles.cardIcon} />
                <h3>Medical Loans</h3>
              </div>
              <p className={styles.cardDescription}>Healthcare expenses</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaSeedling className={styles.cardIcon} />
                <h3>Agricultural Loans</h3>
              </div>
              <p className={styles.cardDescription}>Farming and equipment</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaCreditCard className={styles.cardIcon} />
                <h3>Credit Card</h3>
              </div>
              <p className={styles.cardDescription}>Revolving credit facility</p>
            </div>
          </div>
        </section>

        {/* By Security Type Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaShieldAlt className={styles.sectionIcon} /> 
            By Security Type
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaShieldAlt className={styles.cardIcon} />
                <h3>Secured Loans</h3>
              </div>
              <p className={styles.cardDescription}>Backed by collateral</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaUser className={styles.cardIcon} />
                <h3>Unsecured Loans</h3>
              </div>
              <p className={styles.cardDescription}>Based on creditworthiness</p>
            </div>
          </div>
        </section>

        {/* By Repayment Structure Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaChartLine className={styles.sectionIcon} /> 
            By Repayment Structure
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaMoneyBillWave className={styles.cardIcon} />
                <h3>Term Loans</h3>
              </div>
              <p className={styles.cardDescription}>Fixed tenure, EMI-based</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaCreditCard className={styles.cardIcon} />
                <h3>Overdraft Facilities</h3>
              </div>
              <p className={styles.cardDescription}>Flexible withdrawal</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaCreditCard className={styles.cardIcon} />
                <h3>Revolving Credit</h3>
              </div>
              <p className={styles.cardDescription}>Credit cards, lines of credit</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaMoneyBillWave className={styles.cardIcon} />
                <h3>Bullet Repayment</h3>
              </div>
              <p className={styles.cardDescription}>Lump-sum at maturity</p>
            </div>
          </div>
        </section>

        {/* By Risk Profile Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUserShield className={styles.sectionIcon} /> 
            By Risk Profile
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaUserShield className={styles.cardIcon} />
                <h3>Prime Lending</h3>
              </div>
              <p className={styles.cardDescription}>Low-risk, strong credit</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaChartLine className={styles.cardIcon} />
                <h3>Subprime Lending</h3>
              </div>
              <p className={styles.cardDescription}>Higher-risk borrowers</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaHandHoldingUsd className={styles.cardIcon} />
                <h3>Microfinance</h3>
              </div>
              <p className={styles.cardDescription}>Small loans to underserved groups</p>
            </div>
          </div>
        </section>

        {/* By Source of Lending Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUniversity className={styles.sectionIcon} /> 
            By Source of Lending
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaUniversity className={styles.cardIcon} />
                <h3>Bank Lending</h3>
              </div>
              <p className={styles.cardDescription}>Traditional institutions</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaBuilding className={styles.cardIcon} />
                <h3>NBFC Lending</h3>
              </div>
              <p className={styles.cardDescription}>Non-banking financial companies</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaHandsHelping className={styles.cardIcon} />
                <h3>P2P Lending</h3>
              </div>
              <p className={styles.cardDescription}>Peer-to-peer platforms</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaMobileAlt className={styles.cardIcon} />
                <h3>Digital Lending</h3>
              </div>
              <p className={styles.cardDescription}>App/web-based platforms</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <FaHandsHelping className={styles.cardIcon} />
                <h3>Co-lending Models</h3>
              </div>
              <p className={styles.cardDescription}>Joint lending (Bank + NBFC)</p>
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
            
            <div className={styles.thankYou}>
              <h3>🙏 Thank You</h3>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LendingProducts;