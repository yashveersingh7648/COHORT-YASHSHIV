import React from 'react';
import styles from './TypesOfMIS.module.css';
import { 
  FaChartLine, 
  FaUserTie, 
  FaCalendarAlt, 
  FaComments, 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaBrain,
  FaDesktop,
  FaChartBar,
  FaChartPie,
  FaMap,
  FaClock,
  FaTable
} from 'react-icons/fa';

const TypesOfMIS = () => {
  const dashboards = [
    {
      id: 1,
      title: "Portfolio Performance Dashboard",
      icon: <FaChartLine className={styles.icon} />,
      description: "Tracks overall health of the debt portfolio",
      metrics: ["Recovery rate", "Delinquency %", "Write-offs", "NPA trends"],
      use: ["Strategic planning", "Investor reporting", "Risk profiling"],
      visuals: ["Line charts", "Heatmaps", "KPI tiles"]
    },
    {
      id: 2,
      title: "Agent Productivity MIS",
      icon: <FaUserTie className={styles.icon} />,
      description: "Monitors field and call center agent performance",
      metrics: ["Visits made", "Calls attempted", "Successful recoveries", "Average resolution time"],
      use: ["Workforce optimization", "Incentive planning"],
      visuals: ["Bar graphs", "Leaderboards", "Drill-downs"]
    },
    {
      id: 3,
      title: "Bucket-Wise Aging Dashboard",
      icon: <FaCalendarAlt className={styles.icon} />,
      description: "Segments accounts by delinquency age",
      metrics: ["0-30 days", "31-60 days", "61-90 days", "90+ days"],
      use: ["Prioritization", "Escalation triggers", "Legal handoff planning"],
      visuals: ["Stacked bar charts", "Donut charts"]
    },
    {
      id: 4,
      title: "Channel Effectiveness Dashboard",
      icon: <FaComments className={styles.icon} />,
      description: "Evaluates communication modes",
      metrics: ["SMS", "WhatsApp", "IVR", "Email", "Field visits"],
      use: ["Campaign optimization", "Partner evaluation"],
      visuals: ["Funnel charts", "Pie charts", "Engagement maps"]
    },
    {
      id: 5,
      title: "Compliance & Audit MIS",
      icon: <FaShieldAlt className={styles.icon} />,
      description: "Ensures regulatory adherence",
      metrics: ["RBI timing compliance", "Call/visit logs", "Grievance redressal"],
      use: ["Internal audits", "Legal defense", "Partner onboarding"],
      visuals: ["Timeline logs", "Checklist views"]
    },
    {
      id: 6,
      title: "Geo & Segment Insights Dashboard",
      icon: <FaMapMarkerAlt className={styles.icon} />,
      description: "Visualizes recovery trends by region and borrower type",
      metrics: ["State", "District", "Employment type", "Loan category"],
      use: ["Regional strategy", "Partner allocation", "Outreach customization"],
      visuals: ["Geo heatmaps", "Segmentation trees"]
    },
    {
      id: 7,
      title: "Predictive Recovery Dashboard",
      icon: <FaBrain className={styles.icon} />,
      description: "Uses ML to forecast outcomes",
      metrics: ["Expected POS resolution", "EMI loss", "Recovery probability"],
      use: ["Portfolio valuation", "Investor confidence", "Risk mitigation"],
      visuals: ["Forecast curves", "Risk scoring tiles"]
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <FaDesktop className={styles.headerIcon} /> Types of MIS & Dashboards
      </h1>
      <p className={styles.subheader}>
        Comprehensive monitoring and analytical tools for effective debt collection recovery management
      </p>

      <div className={styles.grid}>
        {dashboards.map(dashboard => (
          <div key={dashboard.id} className={styles.card}>
            <div className={styles.cardHeader}>
              {dashboard.icon}
              <h2 className={styles.cardTitle}>{dashboard.title}</h2>
            </div>
            <p className={styles.cardDescription}>{dashboard.description}</p>
            
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FaChartBar className={styles.sectionIcon} /> Key Metrics
              </h3>
              <ul className={styles.list}>
                {dashboard.metrics.map((metric, index) => (
                  <li key={index} className={styles.listItem}>{metric}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FaTable className={styles.sectionIcon} /> Primary Uses
              </h3>
              <ul className={styles.list}>
                {dashboard.use.map((use, index) => (
                  <li key={index} className={styles.listItem}>{use}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FaChartPie className={styles.sectionIcon} /> Visualization Types
              </h3>
              <ul className={styles.list}>
                {dashboard.visuals.map((visual, index) => (
                  <li key={index} className={styles.listItem}>{visual}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.visualizationSection}>
        <h2 className={styles.visualizationHeader}>
          <FaMap className={styles.headerIcon} /> Dashboard Visualization Examples
        </h2>
        <div className={styles.visualizationGrid}>
          <div className={styles.visCard}>
            <h3>Portfolio Performance</h3>
            <p>Line charts, heatmaps, KPI tiles</p>
          </div>
          <div className={styles.visCard}>
            <h3>Agent Productivity</h3>
            <p>Bar graphs, leaderboards, drill-downs</p>
          </div>
          <div className={styles.visCard}>
            <h3>Bucket-Wise Aging</h3>
            <p>Stacked bar charts, donut charts</p>
          </div>
          <div className={styles.visCard}>
            <h3>Channel Effectiveness</h3>
            <p>Funnel charts, pie charts, engagement maps</p>
          </div>
          <div className={styles.visCard}>
            <h3>Compliance & Audit</h3>
            <p>Timeline logs, checklist views</p>
          </div>
          <div className={styles.visCard}>
            <h3>Geo & Segment Insights</h3>
            <p>Geo heatmaps, segmentation trees</p>
          </div>
          <div className={styles.visCard}>
            <h3>Predictive Recovery</h3>
            <p>Forecast curves, risk scoring tiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfMIS;