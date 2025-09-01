import React from 'react';
import styles from './DialerTypes.module.css';
import { 
  FaPhone,
  FaUser,
  FaClock,
  FaBrain,
  FaBolt,
  FaRobot,
  FaBroadcastTower,
  FaCogs,
  FaFilter,
  FaChartLine,
  FaShieldAlt,
  FaDatabase,
  FaUsers,
  FaBullseye,
  FaTachometerAlt,
  FaCheckCircle
} from 'react-icons/fa';

const DialerTypes = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaPhone className={styles.titleIcon} /> 
          Dialer Types & Use Cases
        </h1>
        <p className={styles.subtitle}>
          Essential tools for outbound communication in debt recovery, sales, and customer engagement
        </p>
      </header>

      <div className={styles.content}>
        {/* Introduction Section */}
        <section className={styles.section}>
          <div className={styles.intro}>
            <p>
              Dialers are essential tools in outbound communication—especially in debt recovery, sales, and customer engagement. 
              They automate the calling process, improve agent productivity, and reduce idle time.
            </p>
          </div>
        </section>

        {/* Dialer Types Table Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaPhone className={styles.sectionIcon} /> 
            Types of Dialers & Their Use Cases
          </h2>
          
          <div className={styles.dialerTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}>Dialer Type</div>
              <div className={styles.tableCell}>How It Works</div>
              <div className={styles.tableCell}>Best Use Case</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <div className={styles.dialerType}>
                  <FaUser className={styles.dialerIcon} />
                  <span>Preview Dialer</span>
                </div>
              </div>
              <div className={styles.tableCell}>Shows customer info before dialing; agent manually initiates the call.</div>
              <div className={styles.tableCell}>High-value interactions, upselling, or sensitive recovery calls.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <div className={styles.dialerType}>
                  <FaClock className={styles.dialerIcon} />
                  <span>Progressive Dialer</span>
                </div>
              </div>
              <div className={styles.tableCell}>Dials one number at a time as soon as the agent becomes available.</div>
              <div className={styles.tableCell}>Balanced outreach with moderate automation; good for compliance-heavy industries.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <div className={styles.dialerType}>
                  <FaBrain className={styles.dialerIcon} />
                  <span>Predictive Dialer</span>
                </div>
              </div>
              <div className={styles.tableCell}>Uses algorithms to dial multiple numbers ahead of time, predicting agent availability.</div>
              <div className={styles.tableCell}>High-volume campaigns like collections, lead generation, or surveys.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <div className={styles.dialerType}>
                  <FaBolt className={styles.dialerIcon} />
                  <span>Power Dialer</span>
                </div>
              </div>
              <div className={styles.tableCell}>Dials numbers one after another with minimal delay, skipping unanswered calls.</div>
              <div className={styles.tableCell}>Fast-paced environments needing high call throughput.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <div className={styles.dialerType}>
                  <FaRobot className={styles.dialerIcon} />
                  <span>Smart Dialer</span>
                </div>
              </div>
              <div className={styles.tableCell}>Combines CRM data, AI, and automation to optimize call timing and personalization.</div>
              <div className={styles.tableCell}>Advanced outreach with segmentation and dynamic scripting.</div>
            </div>
            
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <div className={styles.dialerType}>
                  <FaBroadcastTower className={styles.dialerIcon} />
                  <span>Voice Broadcast Dialer</span>
                </div>
              </div>
              <div className={styles.tableCell}>Sends pre-recorded messages to many recipients simultaneously.</div>
              <div className={styles.tableCell}>Mass notifications, reminders, or awareness campaigns.</div>
            </div>
          </div>
        </section>

        {/* Effective Usage Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCogs className={styles.sectionIcon} /> 
            How to Use Dialers Effectively
          </h2>
          
          <div className={styles.usageGrid}>
            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <FaDatabase />
              </div>
              <div className={styles.usageContent}>
                <h3>Integrate with CRM</h3>
                <p>Sync customer data for personalized outreach and compliance tracking.</p>
              </div>
            </div>
            
            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <FaFilter />
              </div>
              <div className={styles.usageContent}>
                <h3>Segment Lists</h3>
                <p>Use filters (e.g., delinquency stage, region, loan type) to target the right audience.</p>
              </div>
            </div>
            
            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <FaBullseye />
              </div>
              <div className={styles.usageContent}>
                <h3>Set Call Strategies</h3>
                <p>Choose dialer type based on campaign goals—e.g., predictive for volume, preview for quality.</p>
              </div>
            </div>
            
            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <FaChartLine />
              </div>
              <div className={styles.usageContent}>
                <h3>Monitor & Optimize</h3>
                <p>Track metrics like call connection rate, agent talk time, and drop rate to refine strategy.</p>
              </div>
            </div>
            
            <div className={styles.usageCard}>
              <div className={styles.usageIcon}>
                <FaShieldAlt />
              </div>
              <div className={styles.usageContent}>
                <h3>Ensure Compliance</h3>
                <p>Use progressive or preview dialers when regulatory timing or consent is critical.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaCheckCircle className={styles.sectionIcon} /> 
            Best Practices for Dialer Implementation
          </h2>
          
          <div className={styles.practicesList}>
            <div className={styles.practiceItem}>
              <FaCheckCircle className={styles.practiceIcon} />
              <div className={styles.practiceContent}>
                <h3>Agent Training</h3>
                <p>Ensure agents are properly trained on each dialer type and understand compliance requirements.</p>
              </div>
            </div>
            
            <div className={styles.practiceItem}>
              <FaCheckCircle className={styles.practiceIcon} />
              <div className={styles.practiceContent}>
                <h3>Performance Metrics</h3>
                <p>Establish clear KPIs for each campaign type and dialer system.</p>
              </div>
            </div>
            
            <div className={styles.practiceItem}>
              <FaCheckCircle className={styles.practiceIcon} />
              <div className={styles.practiceContent}>
                <h3>Technology Integration</h3>
                <p>Integrate dialers with other systems like CRM, analytics, and compliance tools.</p>
              </div>
            </div>
            
            <div className={styles.practiceItem}>
              <FaCheckCircle className={styles.practiceIcon} />
              <div className={styles.practiceContent}>
                <h3>Regular Audits</h3>
                <p>Conduct regular compliance and performance audits to ensure optimal operation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Examples Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUsers className={styles.sectionIcon} /> 
            Industry Use Cases
          </h2>
          
          <div className={styles.useCaseGrid}>
            <div className={styles.useCaseCard}>
              <h3>Debt Recovery</h3>
              <p>Predictive dialers for high-volume collections, preview dialers for sensitive cases.</p>
            </div>
            
            <div className={styles.useCaseCard}>
              <h3>Sales & Marketing</h3>
              <p>Power dialers for rapid outreach, smart dialers for personalized sales pitches.</p>
            </div>
            
            <div className={styles.useCaseCard}>
              <h3>Customer Service</h3>
              <p>Progressive dialers for follow-ups and customer satisfaction surveys.</p>
            </div>
            
            <div className={styles.useCaseCard}>
              <h3>Emergency Notifications</h3>
              <p>Voice broadcast for mass alerts and important announcements.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DialerTypes;