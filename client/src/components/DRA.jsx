import React, { useState, useEffect } from 'react';

import { 
  FaFileInvoiceDollar, FaInfoCircle, FaCheckCircle, FaTasks, FaClock, 
  FaMoneyBillWave,  FaQuestionCircle,
  FaUser, FaGraduationCap, FaSignInAlt, FaBookReader, 
  FaCheckDouble, FaAward, FaFileInvoice, FaRupeeSign, FaIdCard,
  FaLaptop, FaPercentage, FaCalendarAlt, FaRedo, FaExclamationCircle,
  FaLandmark,  FaComments, FaChartLine, FaClipboardCheck,
   FaFileContract, FaHandshake,FaFileAlt, FaGavel, FaBook,FaBalanceScale,
   FaExclamationTriangle, FaClipboardList,
  FaEnvelope, FaNewspaper, FaMoneyCheckAlt, FaUniversity,
  FaChartBar, FaShieldAlt, FaUserTie, FaHandHoldingUsd,FaSearchDollar,  FaLaptop as FaLaptopIcon,
  FaPercentage as FaPercentageIcon,
  FaCalendarAlt as FaCalendarAltIcon,
  FaRedo as FaRedoIcon
} from 'react-icons/fa';
const DRA = () => {
      const [activeSection, setActiveSection] = useState('overview'); 
      const sections = [
        { id: 'overview', name: 'Overview', icon: <FaInfoCircle /> },
        { id: 'eligibility', name: 'Eligibility', icon: <FaCheckCircle /> },
        { id: 'process', name: 'Process', icon: <FaTasks /> },
        { id: 'duration', name: 'Duration', icon: <FaClock /> },
        { id: 'fees', name: 'Fees', icon: <FaMoneyBillWave /> },
        { id: 'exam', name: 'Exam', icon: <FaFileAlt /> },
        { id: 'mandatory', name: 'Mandatory', icon: <FaGavel /> },
        { id: 'modules', name: 'Modules', icon: <FaBook /> },
        { id: 'quiz', name: 'Quiz', icon: <FaQuestionCircle /> },
      ];
      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      };
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          
          for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
              const offsetTop = element.offsetTop - 100;
              const offsetBottom = offsetTop + element.offsetHeight;
              
              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                setActiveSection(section.id);
                break;
              }
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <div>
      <div className="dra-page">
            <header className="dra-header">
              <div className="container">
                <div className="logo-container">
                  <FaFileInvoiceDollar className="logo" />
                  <h1>Debt Recovery Agent Certification</h1>
                </div>
                <div className="subtitle">Empowering Debt Recovery Agents with Knowledge, Ethics & Opportunity</div>
                <div className="hindi-subtitle">ज्ञान, नैतिकता और अवसर के साथ ऋण वसूली एजेंटों को सशक्त बनाना</div>
              </div>
            </header>
            
            <nav className="dra-nav">
              <div className="containered nav-container">
                {sections.map(section => (
                  <button
                    key={section.id}
                    className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.icon}
                    <span>{section.name}</span>
                  </button>
                ))}
              </div>
            </nav>
            
            <main className="container">
              {/* Overview Section */}
              <section id="overview" className="dra-section">
                <h2 className="section-title"><FaInfoCircle /> Overview</h2>
                <div className="card">
                  <div className="card-title">
                    <FaFileInvoiceDollar className="card-icon" />
                    <h3>What is a Debt Recovery Agent (DRA)?</h3>
                  </div>
                  <p>A Debt Recovery Agent is a professional authorized to recover debts on behalf of banks and financial institutions. Their role is to contact borrowers, negotiate repayments, and ensure recovery of overdue loans in a legal and ethical manner.</p>
                  <p>The Debt Recovery Agent course equips learners with the skills and knowledge necessary to effectively manage and recover overdue debts. This comprehensive program covers negotiation techniques, legal frameworks, communication strategies, and ethical practices essential for successful debt recovery.</p>
                  <p>To get a Debt Recovery Agent (DRA) certificate, you need to enroll in a training program, complete the required hours, and pass the IIBF-administered DRA examination. The training must be completed at an IIBF-accredited institute. After passing the exam, you can obtain the certificate from the IIBF.</p>
                </div>
              </section>
              
              {/* Eligibility Section */}
              <section id="eligibility" className="dra-section">
                <h2 className="section-title"><FaCheckCircle /> Eligibility Criteria</h2>
                <div className="info-grid">
                  <div className="card">
                    <div className="card-title">
                      <FaUser className="card-icon" />
                      <h3>Age Requirement</h3>
                    </div>
                    <p>You must be at least <strong>18 years old</strong> to become a certified DRA.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaGraduationCap className="card-icon" />
                      <h3>Education Qualification</h3>
                    </div>
                    <p>A minimum of <strong>Class 10 (SSC) qualification</strong> is required.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaClock className="card-icon" />
                      <h3>Training Requirements</h3>
                    </div>
                    <ul>
                      <li className="list-item"><FaCheckCircle className="list-icon" /> <span>100 hours for candidates with 10+2 or below</span></li>
                      <li className="list-item"><FaCheckCircle className="list-icon" /> <span>50 hours for graduates and above</span></li>
                      <li className="list-item"><FaCheckCircle className="list-icon" /> <span>Retired bank officers (60+) may be exempted</span></li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* Process Section */}
              <section id="process" className="dra-section">
                <h2 className="section-title"><FaTasks /> Certification Process</h2>
                <div className="info-grid">
                  <div className="card">
                    <div className="card-title">
                      <FaSignInAlt className="card-icon" />
                      <h3>1. Enrollment</h3>
                    </div>
                    <p>Enroll in a DRA training program at an IIBF-accredited institute.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaBookReader className="card-icon" />
                      <h3>2. Training</h3>
                    </div>
                    <p>Complete the required training hours (100 or 50) based on your educational qualification.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaFileAlt className="card-icon" />
                      <h3>3. Training Certificate</h3>
                    </div>
                    <p>Obtain a training completion certificate from the institute.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaFileAlt className="card-icon" />
                      <h3>4. Examination Registration</h3>
                    </div>
                    <p>Register for the DRA examination with IIBF, usually facilitated by the training institute.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaCheckDouble className="card-icon" />
                      <h3>5. Pass Exam</h3>
                    </div>
                    <p>Appear for and pass the IIBF DRA examination.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaAward className="card-icon" />
                      <h3>6. Certification</h3>
                    </div>
                    <p>After passing the exam, obtain the DRA certificate from IIBF.</p>
                  </div>
                </div>
              </section>
              
              {/* Duration Section */}
              <section id="duration" className="dra-section">
                <h2 className="section-title"><FaClock /> Course Duration</h2>
                <div className="info-grid">
                  <div className="card">
                    <div className="card-title">
                      <FaClock className="card-icon" />
                      <h3>100 Hours Training</h3>
                    </div>
                    <p>For candidates with educational qualifications below graduation.</p>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaClock className="card-icon" />
                      <h3>50 Hours Training</h3>
                    </div>
                    <p>For candidates with a graduation degree or higher and for employees of BPO/Call Centers with a graduation degree.</p>
                  </div>
                </div>
              </section>
              
              {/* Fees Section */}
              <section id="fees" className="dra-section">
                <h2 className="section-title"><FaMoneyBillWave /> Fees Structure</h2>
                <div className="info-grid">
                  <div className="card">
                    <div className="card-title">
                      <FaFileInvoice className="card-icon" />
                      <h3>Examination Fees</h3>
                    </div>
                    <ul>
                      <li className="list-item"><FaRupeeSign className="list-icon" /> <span>For members: ₹1,200 per attempt</span></li>
                      <li className="list-item"><FaRupeeSign className="list-icon" /> <span>For non-members: ₹1,500 per attempt</span></li>
                      <li className="list-item"><FaInfoCircle className="list-icon" /> <span>May be subject to additional taxes</span></li>
                    </ul>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">
                      <FaIdCard className="card-icon" />
                      <h3>Membership Fees</h3>
                    </div>
                    <p>One-time life membership fee for ordinary membership: ₹1,770 (₹1,500 + ₹270 GST)</p>
                  </div>
                </div>
              </section>
              
              {/* Exam Section */}
              <section id="exam" className="dra-section">
                <h2 className="section-title"><FaFileAlt /> Exam Details</h2>
                <div className="card">
                  <div className="card-title">
                    <FaInfoCircle className="card-icon" />
                    <h3>Exam Pattern</h3>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>Questions</th>
                        <th>Marks/Question</th>
                        <th>Negative Marking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Part A</td>
                        <td>15</td>
                        <td>3</td>
                        <td>Yes (1/3 mark)</td>
                      </tr>
                      <tr>
                        <td>Part B</td>
                        <td>10</td>
                        <td>3</td>
                        <td>Yes (1/3 mark)</td>
                      </tr>
                      <tr>
                        <td>Part C</td>
                        <td>25</td>
                        <td>1</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>50</strong></td>
                        <td><strong>—</strong></td>
                        <td><strong>—</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="highlight">
                    <p><FaLaptopIcon /> <strong>Mode:</strong> Online (Computer-Based Test)</p>
                    <p><FaPercentageIcon /> <strong>Passing Marks:</strong> Minimum 50%</p>
                    <p><FaCalendarAltIcon /> <strong>Exam Frequency:</strong> Monthly slots available</p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-title">
                    <FaRedoIcon className="card-icon" />
                    <h3>Attempts & Time Limit</h3>
                  </div>
                  <ul>
                    <li className="list-item"><FaCheckCircle className="list-icon" /> <span>Three attempts are allowed within nine months of training completion</span></li>
                    <li className="list-item"><FaCheckCircle className="list-icon" /> <span>The nine-month period starts from the completion date of the training program</span></li>
                    <li className="list-item"><FaCheckCircle className="list-icon" /> <span>If unsuccessful, retraining is required</span></li>
                    <li className="list-item"><FaCheckCircle className="list-icon" /> <span>After retraining, candidates can re-register for the exam</span></li>
                  </ul>
                </div>
              </section>
              
              {/* Mandatory Section */}
              <section id="mandatory" className="dra-section">
                <h2 className="section-title"><FaGavel /> Mandatory Certification</h2>
                <div className="card">
                  <div className="card-title">
                    <FaExclamationCircle className="card-icon" />
                    <h3>Is DRA Certificate Mandatory?</h3>
                  </div>
                  <p><strong>Yes</strong>, the Debt Recovery Agent (DRA) certificate is mandatory for individuals working as recovery agents for banks and other financial institutions in India.</p>
                  
                  <div className="highlight">
                    <p>The Reserve Bank of India (RBI) requires this certification to ensure that recovery agents are trained in legal, ethical, and procedural aspects of debt collection.</p>
                  </div>
                  
                  <h4>Regulatory Timeline</h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Milestone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2003</td>
                        <td>RBI introduces the Fair Practices Code, emphasizing ethical recovery practices</td>
                      </tr>
                      <tr>
                        <td>2007</td>
                        <td>RBI mandates that agents engaged in recovery must be trained and certified</td>
                      </tr>
                      <tr>
                        <td>2018–2024</td>
                        <td>RBI and IBA reinforce mandatory certification with updated syllabi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              
              {/* Modules Section */}
              <section id="modules" className="dra-section">
                <h2 className="section-title"><FaBook /> Course Modules</h2>
                <div className="card module-card">
                  <div className="module-title"><FaLandmark /> Module 1 – Introduction to Banking & Financial System</div>
                  <p>Overview of Indian Financial System, Types of Banks & NBFCs, Retail Lending Products, Loan Lifecycle, RBI & Regulatory Structure Overview</p>
                </div>
                
                <div className="card module-card">
                  <div className="module-title"><FaBalanceScale /> Module 2 – Debt Recovery Framework & Legal Aspects</div>
                  <p>RBI Guidelines, SARFAESI Act, DRT Act, Negotiable Instruments Act, IBC Basics, Contract Law, Consumer Protection Act, Fair Practices Code</p>
                </div>
                
                <div className="card module-card">
                  <div className="module-title"><FaComments /> Module 3 – Communication Skills & Customer Handling</div>
                  <p>Principles of Ethical Communication, Telephone Recovery Techniques, Face-to-Face Collection, Negotiation Skills, Handling Difficult Customers, Bilingual Communication, De-escalation Techniques</p>
                </div>
                
                <div className="card module-card">
                  <div className="module-title"><FaChartLine /> Module 5 – Recovery Strategies & Techniques</div>
                  <p>Early Delinquency Management, Skip Tracing Techniques, Field Visit Planning, Soft vs Hard Collection, Recovery in Special Situations, Coordination with Lenders, Asset Seizure Procedures</p>
                </div>
                
                <div className="card module-card">
                  <div className="module-title"><FaLaptop /> Module 6 – Digital Tools & Record Keeping</div>
                  <p>Mobile Collection Apps, Maintaining Field Reports, Digital Payment Methods, Data Privacy & Cybersecurity</p>
                </div>
                
                <div className="card module-card">
                  <div className="module-title"><FaClipboardCheck /> Module 7 – Mock Tests, Case Studies & Role Plays</div>
                  <p>Bilingual Mock Tests, Role Play Exercises, Analysis of Real-Life Cases, Compliance Violation Examples, Final Assessment</p>
                </div>
              </section>
              
              {/* Quiz Section */}
              <section id="quiz" className="dra-section">
                <h2 className="section-title"><FaQuestionCircle /> Sample Quiz Questions</h2>
                
                <div className="quiz-container">
                  <div className="quiz-question">1. What is the minimum age required to become a certified DRA in India?</div>
                  <ul className="quiz-options">
                    <li>a) 16 years</li>
                    <li className="correct">b) 18 years</li>
                    <li>c) 21 years</li>
                    <li>d) 25 years</li>
                  </ul>
                </div>
                
                <div className="quiz-container">
                  <div className="quiz-question">2. Which organization conducts the DRA certification exam?</div>
                  <ul className="quiz-options">
                    <li>a) RBI</li>
                    <li className="correct">b) IIBF</li>
                    <li>c) SEBI</li>
                    <li>d) ICAI</li>
                  </ul>
                </div>
                
                <div className="quiz-container">
                  <div className="quiz-question">3. How many hours of training are required for candidates with 10+2 or below qualification?</div>
                  <ul className="quiz-options">
                    <li>a) 50 hours</li>
                    <li>b) 75 hours</li>
                    <li className="correct">c) 100 hours</li>
                    <li>d) 150 hours</li>
                  </ul>
                </div>
                
                <div className="quiz-container">
                  <div className="quiz-question">4. Which law governs the recovery of debts by banks in India?</div>
                  <ul className="quiz-options">
                    <li>a) Companies Act</li>
                    <li className="correct">b) SARFAESI Act</li>
                    <li>c) Income Tax Act</li>
                    <li>d) Consumer Protection Act</li>
                  </ul>
                </div>
                
                <div className="quiz-container">
                  <div className="quiz-question">5. What is a key ethical guideline for DRAs?</div>
                  <ul className="quiz-options">
                    <li>a) Use pressure tactics</li>
                    <li className="correct">b) Respect borrower dignity</li>
                    <li>c) Avoid written communication</li>
                    <li>d) Demand cash payments only</li>
                  </ul>
                </div>
              </section>
            </main>
            
            <footer className="dra-footer">
              <div className="container">
                <p>Debt Recovery Agent Certification Information</p>
                <p>For more details, visit the official IIBF website</p>
                <p>© 2023 Debt Recovery Agent Certification Portal</p>
              </div>
            </footer>
      
           
          </div>
    </div>
  )
}

export default DRA
