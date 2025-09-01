import React from 'react';
import styles from './DRACertification.module.css';
import { 
  FaHistory,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCity,
  FaChartBar,
  FaUsers,
  FaGraduationCap,
  FaCertificate,
  FaBook,
  FaGlobeAsia,
  FaRegCalendarCheck,
  FaUserTie,
  FaSchool,
  FaChartLine
} from 'react-icons/fa';

const DRACertification = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaCertificate className={styles.titleIcon} /> 
          DRA Certification Insights
        </h1>
        <p className={styles.subtitle}>
          Comprehensive overview of Debt Recovery Agent certification landscape in India
        </p>
      </header>

      <div className={styles.content}>
        {/* Historical Context Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaHistory className={styles.sectionIcon} /> 
            Historical Context
          </h2>
          <div className={styles.historicalContext}>
            <p>
              The certification for Debt Recovery Agents (DRAs) working with regulated entities became mandatory under RBI guidelines starting in 2007, when the Indian Institute of Banking & Finance (IIBF) was officially designated as the primary certifying body.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCalendarAlt className={styles.sectionIcon} /> 
            Timeline of Mandatory DRA Certification
          </h2>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2003</div>
              <div className={styles.timelineContent}>
                <h3>RBI introduces the Fair Practices Code</h3>
                <p>Emphasizing ethical recovery practices</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2007</div>
              <div className={styles.timelineContent}>
                <h3>RBI mandates agent certification</h3>
                <p>Agents engaged in recovery must be trained and certified. IIBF begins conducting DRA certification exams.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2018–2024</div>
              <div className={styles.timelineContent}>
                <h3>RBI and IBA reinforce mandatory certification</h3>
                <p>For Business Correspondents and DRAs, with updated syllabi and stricter timelines.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>Current Status</div>
              <div className={styles.timelineContent}>
                <h3>All DRAs must be certified by IIBF</h3>
                <p>All DRAs working with banks, NBFCs, and regulated entities must be certified by IIBF before deployment. Training is mandatory prior to exam registration.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.timelineNote}>
            <p>This mandate ensures that agents are professionally trained in recovery ethics, legal boundaries, and customer handling.</p>
          </div>
        </section>

        {/* City-wise Presence Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaMapMarkerAlt className={styles.sectionIcon} /> 
            Estimated City-Wise Presence of Debt Recovery Agents (DRAs)
          </h2>
          <p className={styles.sectionDescription}>
            This breakdown is based on agency registration data, zone-wise summaries, and regional NBFC activity—not direct certification counts.
          </p>
          
          <div className={styles.cityTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}>City</div>
              <div className={styles.tableCell}>Estimated DRA Activity Level</div>
              <div className={styles.tableCell}>Strategic Notes</div>
            </div>
            
            {/* Very High Activity Cities */}
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Delhi NCR</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelVeryHigh}>🔴 Very High</span>
              </div>
              <div className={styles.tableCell}>Dense agency network; bilingual onboarding essential (Hindi/English).</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Mumbai</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelVeryHigh}>🔴 Very High</span>
              </div>
              <div className={styles.tableCell}>Hub for NBFCs and fintech recovery; digital training preferred.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Kolkata</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelVeryHigh}>🔴 Very High</span>
              </div>
              <div className={styles.tableCell}>Multiple agencies listed; strong demand for Bengali bilingual content.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Bengaluru</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelVeryHigh}>🔴 Very High</span>
              </div>
              <div className={styles.tableCell}>Tech-savvy agents; online certification uptake is high.</div>
            </div>
            
            {/* High Activity Cities */}
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Hyderabad</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelHigh}>🟠 High</span>
              </div>
              <div className={styles.tableCell}>Growing NBFC presence; bilingual content (Telugu/English) useful.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Chennai</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelHigh}>🟠 High</span>
              </div>
              <div className={styles.tableCell}>Tamil onboarding modules recommended; active agency base.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Ahmedabad</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelHigh}>🟠 High</span>
              </div>
              <div className={styles.tableCell}>Strong regional demand; Gujarati content may boost engagement.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Pune</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelHigh}>🟠 High</span>
              </div>
              <div className={styles.tableCell}>Active training and certification; partner outreach viable.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Lucknow</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelHigh}>🟠 High</span>
              </div>
              <div className={styles.tableCell}>High delinquency zones nearby; Hindi-first onboarding ideal.</div>
            </div>
            
            {/* Moderate Activity Cities */}
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Jaipur</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelModerate}>🟡 Moderate</span>
              </div>
              <div className={styles.tableCell}>Emerging market; potential for expansion.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Indore</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelModerate}>🟡 Moderate</span>
              </div>
              <div className={styles.tableCell}>Active agencies; regional onboarding support needed.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Ranchi</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelModerate}>🟡 Moderate</span>
              </div>
              <div className={styles.tableCell}>Growing demand; fewer training centers but rising interest.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Bhubaneswar</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelModerate}>🟡 Moderate</span>
              </div>
              <div className={styles.tableCell}>East zone expansion opportunity; bilingual content (Odia/Hindi).</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Chandigarh</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelModerate}>🟡 Moderate</span>
              </div>
              <div className={styles.tableCell}>North zone hub; Hindi/Punjabi bilingual support helpful.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Surat</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelModerate}>🟡 Moderate</span>
              </div>
              <div className={styles.tableCell}>Active agencies; partner onboarding potential.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <FaCity className={styles.cityIcon} />
                <span>Guwahati</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.activityLevelModerate}>🟡 Moderate</span>
              </div>
              <div className={styles.tableCell}>Northeast gateway; Assamese/Hindi content may aid adoption.</div>
            </div>
          </div>
        </section>

        {/* Certification Landscape Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaChartBar className={styles.sectionIcon} /> 
            Estimated DRA Certification Landscape in India
          </h2>
          
          <div className={styles.landscapeGrid}>
            <div className={styles.landscapeCard}>
              <div className={styles.landscapeIcon}>
                <FaSchool />
              </div>
              <h3>Accredited Training Institutes</h3>
              <p>~30+ active across major states</p>
            </div>
            
            <div className={styles.landscapeCard}>
              <div className={styles.landscapeIcon}>
                <FaRegCalendarCheck />
              </div>
              <h3>Exam Frequency</h3>
              <p>Monthly (nationwide, computer-based)</p>
            </div>
            
            <div className={styles.landscapeCard}>
              <div className={styles.landscapeIcon}>
                <FaUsers />
              </div>
              <h3>Batch Size per Institute</h3>
              <p>30–100 candidates per batch</p>
            </div>
            
            <div className={styles.landscapeCard}>
              <div className={styles.landscapeIcon}>
                <FaChartLine />
              </div>
              <h3>Annual Certification Volume</h3>
              <p>Estimated 15,000–25,000 new DRAs per year</p>
            </div>
            
            <div className={styles.landscapeCard}>
              <div className={styles.landscapeIcon}>
                <FaUserTie />
              </div>
              <h3>Cumulative Certified DRAs</h3>
              <p>Likely exceeds 1,25,000+ over the past decade</p>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaGlobeAsia className={styles.sectionIcon} /> 
            Key Insights
          </h2>
          
          <div className={styles.insights}>
            <div className={styles.insightItem}>
              <FaGraduationCap className={styles.insightIcon} />
              <div className={styles.insightContent}>
                <h3>Nationwide Reach</h3>
                <p>DRA certification has become a nationwide requirement with training institutes spread across all major regions of India.</p>
              </div>
            </div>
            
            <div className={styles.insightItem}>
              <FaBook className={styles.insightIcon} />
              <div className={styles.insightContent}>
                <h3>Standardized Curriculum</h3>
                <p>IIBF ensures a standardized curriculum across all training institutes, maintaining consistent quality of education.</p>
              </div>
            </div>
            
            <div className={styles.insightItem}>
              <FaCertificate className={styles.insightIcon} />
              <div className={styles.insightContent}>
                <h3>Quality Assurance</h3>
                <p>The certification process ensures that all DRAs meet minimum competency standards in ethical debt recovery practices.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DRACertification;