import React from 'react';
import styles from './CollectionPhrases.module.css';
import { 
  FaPhone,
  FaEnvelope,
  FaSms,
  FaHandshake,
  FaUserFriends,
  FaFileAlt,
  FaExclamationTriangle,
  FaClock,
  FaHeadset,
  FaComments,
  FaHandHoldingUsd,
  FaBalanceScale,
  FaShieldAlt,
  FaCheckCircle,
  FaRegCalendarCheck,
  FaMoneyBillWave,
  FaInfoCircle
} from 'react-icons/fa';

const CollectionPhrases = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaComments className={styles.titleIcon} /> 
          Collection & Recovery Communication Phrases
        </h1>
        <p className={styles.subtitle}>
          Professional, respectful, and effective communication templates for Debt Recovery Agents
        </p>
      </header>

      <div className={styles.content}>
        {/* Introduction Section */}
        <section className={styles.section}>
          <div className={styles.intro}>
            <p>
              Here's a set of professional, respectful, and effective collection and recovery communication phrases 
              tailored for Debt Recovery Agents (DRAs). These can be used in calls, emails, or in-person interactions 
              to maintain compliance, build rapport, and encourage repayment.
            </p>
          </div>
        </section>

        {/* Phone Call Phrases Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaPhone className={styles.sectionIcon} /> 
            Phone Call Phrases
          </h2>
          
          <div className={styles.categoryGrid}>
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <FaCheckCircle className={styles.categoryIcon} style={{color: '#27ae60'}} />
                <h3>Opening the Conversation</h3>
              </div>
              <ul className={styles.phraseList}>
                <li>"Good morning, am I speaking with Mr./Ms. [Name]? I'm calling on behalf of [Bank/Agency Name] regarding your loan account."</li>
                <li>"I hope I'm not catching you at a bad time. I'd like to discuss a matter related to your outstanding dues."</li>
              </ul>
            </div>
            
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <FaInfoCircle className={styles.categoryIcon} style={{color: '#f39c12'}} />
                <h3>Addressing the Issue</h3>
              </div>
              <ul className={styles.phraseList}>
                <li>"Our records show that your payment due on [Date] hasn't been received yet. I wanted to check if everything is alright."</li>
                <li>"We understand that financial situations can change. Is there any difficulty you're facing that we should be aware of?"</li>
              </ul>
            </div>
            
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <FaHandHoldingUsd className={styles.categoryIcon} style={{color: '#3498db'}} />
                <h3>Offering Solutions</h3>
              </div>
              <ul className={styles.phraseList}>
                <li>"We'd like to help you resolve this in a way that works for you. Would you be open to discussing a revised payment plan?"</li>
                <li>"There are options available such as part-payment or rescheduling. Let's explore what suits you best."</li>
              </ul>
            </div>
            
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <FaClock className={styles.categoryIcon} style={{color: '#e74c3c'}} />
                <h3>Closing the Call</h3>
              </div>
              <ul className={styles.phraseList}>
                <li>"Thank you for your time today. I'll note down your concerns and follow up as discussed."</li>
                <li>"We appreciate your cooperation. Please feel free to reach out if you need any assistance before the next due date."</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Email/SMS Templates Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaEnvelope className={styles.sectionIcon} /> 
            Email or SMS Templates
          </h2>
          
          <div className={styles.templateGrid}>
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaSms className={styles.templateIcon} />
                <h3>Reminder Message</h3>
              </div>
              <div className={styles.templateContent}>
                <p className={styles.templateSubject}>Subject: Friendly Reminder – Payment Due for Loan Account [XXXX]</p>
                <div className={styles.templateBody}>
                  <p>Dear [Name],</p>
                  <p>This is a gentle reminder that your payment of ₹[Amount] for Loan Account [XXXX] was due on [Date]. We request you to kindly make the payment at your earliest convenience to avoid any late charges.</p>
                  <p>If you're facing any issues, please contact us at [Phone/Email].</p>
                  <p>Regards,<br />[Your Name]<br />[Bank/Agency Name]</p>
                </div>
              </div>
            </div>
            
            <div className={styles.templateCard}>
              <div className={styles.templateHeader}>
                <FaEnvelope className={styles.templateIcon} />
                <h3>Follow-Up Message</h3>
              </div>
              <div className={styles.templateContent}>
                <p className={styles.templateSubject}>Subject: Follow-Up on Outstanding Payment – Loan Account [XXXX]</p>
                <div className={styles.templateBody}>
                  <p>Dear [Name],</p>
                  <p>We noticed that your payment is still pending. We're here to support you and discuss any repayment options that may help.</p>
                  <p>Please get in touch with us by [Date] to avoid escalation.</p>
                  <p>Thank you for your attention.</p>
                  <p>Regards,<br />[Your Name]<br />[Bank/Agency Name]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Person Communication Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaUserFriends className={styles.sectionIcon} /> 
            In-Person Communication Tips
          </h2>
          
          <div className={styles.tipsCard}>
            <p>Maintain a calm and respectful tone at all times.</p>
            <div className={styles.tipsList}>
              <div className={styles.tipItem}>
                <FaHandshake className={styles.tipIcon} />
                <span>"We're here to help you resolve this."</span>
              </div>
              <div className={styles.tipItem}>
                <FaHandshake className={styles.tipIcon} />
                <span>"Let's find a solution that works for both sides."</span>
              </div>
              <div className={styles.tipItem}>
                <FaHandshake className={styles.tipIcon} />
                <span>"Would you be comfortable sharing what's causing the delay?"</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Call Scripts Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaHeadset className={styles.sectionIcon} /> 
            Sample Call Scripts
          </h2>
          
          <div className={styles.scriptGrid}>
            <div className={styles.scriptCard}>
              <div className={styles.scriptHeader} style={{backgroundColor: '#f39c12'}}>
                <FaCheckCircle className={styles.scriptIcon} />
                <h3>Initial Reminder Call</h3>
              </div>
              <div className={styles.scriptContent}>
                <p>"Good morning, am I speaking with Mr./Ms. [Name]? I'm calling from [Bank/Agency Name] regarding your loan account. We noticed your payment due on [Date] hasn't been received. Is everything alright? We're here to help if you're facing any issues."</p>
              </div>
            </div>
            
            <div className={styles.scriptCard}>
              <div className={styles.scriptHeader} style={{backgroundColor: '#3498db'}}>
                <FaInfoCircle className={styles.scriptIcon} />
                <h3>Follow-Up Call (Negotiation)</h3>
              </div>
              <div className={styles.scriptContent}>
                <p>"Hi [Name], I'm following up on our previous conversation about your overdue payment. We understand financial challenges can arise. Would you be open to discussing a part-payment or rescheduling plan that works for you?"</p>
              </div>
            </div>
            
            <div className={styles.scriptCard}>
              <div className={styles.scriptHeader} style={{backgroundColor: '#f39c12'}}>
                <FaExclamationTriangle className={styles.scriptIcon} />
                <h3>Final Call Before Escalation</h3>
              </div>
              <div className={styles.scriptContent}>
                <p>"Hello [Name], this is [Your Name] from [Bank/Agency Name]. This is a final reminder regarding your unpaid dues of ₹[Amount]. If payment is not received by [Date], we may be compelled to initiate legal recovery procedures. We'd prefer to resolve this amicably—can we discuss a solution today?"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Written Notice Templates Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaFileAlt className={styles.sectionIcon} /> 
            Sample Written Notice Templates
          </h2>
          
          <div className={styles.noticeGrid}>
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader} style={{backgroundColor: '#3498db'}}>
                <FaEnvelope className={styles.noticeIcon} />
                <h3>Friendly Reminder Notice (Pre-Due or Just Overdue)</h3>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.noticeSubject}>Subject: Payment Reminder – Loan Account [XXXX]</p>
                <div className={styles.noticeBody}>
                  <p>Dear [Borrower Name],</p>
                  <p>We hope this message finds you well. This is a gentle reminder that your payment of ₹[Amount] for Loan Account [XXXX] was due on [Due Date]. Kindly make the payment at your earliest convenience to avoid late fees or disruption of services.</p>
                  <p>If you are facing any difficulty, please contact us at [Phone/Email] so we can assist you.</p>
                  <p>Warm regards,<br />[Your Name]<br />[Bank/Agency Name]</p>
                </div>
              </div>
            </div>
            
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader} style={{backgroundColor: '#f39c12'}}>
                <FaExclamationTriangle className={styles.noticeIcon} />
                <h3>Overdue Notice (Firm but Polite)</h3>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.noticeSubject}>Subject: Overdue Payment Notification – Loan Account [XXXX]</p>
                <div className={styles.noticeBody}>
                  <p>Dear [Borrower Name],</p>
                  <p>Our records indicate that your payment of ₹[Amount] due on [Due Date] remains unpaid. We urge you to clear the dues immediately to avoid further action.</p>
                  <p>If you require assistance or wish to discuss repayment options, please reach out by [Date].</p>
                  <p>Sincerely,<br />[Your Name]<br />[Bank/Agency Name]</p>
                </div>
              </div>
            </div>
            
            <div className={styles.noticeCard}>
              <div className={styles.noticeHeader} style={{backgroundColor: '#3498db'}}>
                <FaBalanceScale className={styles.noticeIcon} />
                <h3>Final Notice Before Legal Action</h3>
              </div>
              <div className={styles.noticeContent}>
                <p className={styles.noticeSubject}>Subject: Final Notice – Loan Account [XXXX]</p>
                <div className={styles.noticeBody}>
                  <p>Dear [Borrower Name],</p>
                  <p>Despite multiple reminders, your loan account [XXXX] remains unpaid. This is the final notice before initiating legal recovery proceedings under applicable laws, including the SARFAESI Act (if applicable).</p>
                  <p>Please settle the outstanding amount of ₹[Amount] by [Final Date] to avoid escalation.</p>
                  <p>Regards,<br />[Recovery Officer Name]<br />[Bank/Agency Name]</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollectionPhrases;