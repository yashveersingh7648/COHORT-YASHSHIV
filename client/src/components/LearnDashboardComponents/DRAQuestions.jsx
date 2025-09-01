import React, { useState } from 'react';
import styles from './DRAQuestions.module.css';
import { 
  FaQuestionCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaGraduationCap,
  FaBook,
  FaClipboardList,
  FaBalanceScale,
  FaUserShield,
  FaComments,
  FaInfoCircle,
  FaChartBar
} from 'react-icons/fa';

const DRAQuestions = () => {
  const [activeCategory, setActiveCategory] = useState('eligibility');
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const questionsData = {
    eligibility: [
      {
        id: 'q1',
        question: 'What is the minimum educational qualification required to become a certified DRA in India?',
        options: ['Class 8', 'Class 10', 'Class 12', 'Graduate degree'],
        correctAnswer: 1,
        explanation: 'The minimum qualification required is Class 10 (SSC) or above as per IIBF guidelines.'
      },
      {
        id: 'q2',
        question: 'What is the minimum age required to become a certified DRA?',
        options: ['16 years', '18 years', '21 years', '25 years'],
        correctAnswer: 1,
        explanation: 'Candidates must be at least 18 years old to become a certified Debt Recovery Agent.'
      }
    ],
    certification: [
      {
        id: 'q3',
        question: 'Which organization conducts the DRA certification exam?',
        options: ['RBI', 'ICAI', 'IIBF', 'SEBI'],
        correctAnswer: 2,
        explanation: 'The Indian Institute of Banking & Finance (IIBF) conducts the DRA certification exam under RBI guidelines.'
      },
      {
        id: 'q4',
        question: 'What is the training duration for candidates with 10+2 or below qualification?',
        options: ['50 hours', '75 hours', '100 hours', '150 hours'],
        correctAnswer: 2,
        explanation: 'Candidates with 10+2 or below qualification require 100 hours of training as per RBI guidelines.'
      },
      {
        id: 'q5',
        question: 'What is the passing percentage for the DRA certification exam?',
        options: ['40%', '45%', '50%', '55%'],
        correctAnswer: 2,
        explanation: 'The passing marks for the DRA certification exam is 50% as per IIBF guidelines.'
      }
    ],
    exam: [
      {
        id: 'q6',
        question: 'Which section of the DRA exam does NOT have negative marking?',
        options: ['Part A', 'Part B', 'Part C', 'All sections have negative marking'],
        correctAnswer: 2,
        explanation: 'Part C of the DRA exam does not have negative marking, while Parts A and B have negative marking of 1/3 mark per wrong answer.'
      },
      {
        id: 'q7',
        question: 'What is the mode of the DRA certification exam?',
        options: ['Offline', 'Online (Computer-based)', 'Hybrid', 'Oral Interview'],
        correctAnswer: 1,
        explanation: 'The DRA certification exam is conducted online as a Computer-Based Test (CBT).'
      }
    ],
    legal: [
      {
        id: 'q8',
        question: 'Which law empowers banks to recover secured loans without court intervention?',
        options: ['Companies Act', 'SARFAESI Act', 'Consumer Protection Act', 'Banking Regulation Act'],
        correctAnswer: 1,
        explanation: 'The SARFAESI Act (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002) empowers banks to recover secured loans without court intervention.'
      },
      {
        id: 'q9',
        question: 'Who regulates the certification process for DRAs in India?',
        options: ['SEBI', 'RBI', 'IIBF', 'Ministry of Finance'],
        correctAnswer: 1,
        explanation: 'The Reserve Bank of India (RBI) regulates the certification process for Debt Recovery Agents in India.'
      }
    ],
    ethics: [
      {
        id: 'q10',
        question: 'Which of the following is a key ethical guideline for DRAs?',
        options: ['Use pressure tactics', 'Respect borrower dignity', 'Demand cash payments only', 'Avoid written communication'],
        correctAnswer: 1,
        explanation: 'Respecting borrower dignity is a fundamental ethical guideline for Debt Recovery Agents as per RBI guidelines.'
      },
      {
        id: 'q11',
        question: 'What should a DRA do if a borrower refuses to pay?',
        options: ['Threaten legal action', 'Visit daily', 'Inform the lender and escalate', 'Publicly shame the borrower'],
        correctAnswer: 2,
        explanation: 'DRAs should inform the lender and follow the proper escalation protocol rather than taking matters into their own hands.'
      }
    ],
    skills: [
      {
        id: 'q12',
        question: 'Which soft skill is emphasized in DRA training?',
        options: ['Coding', 'Negotiation', 'Financial modeling', 'Data analysis'],
        correctAnswer: 1,
        explanation: 'Negotiation skills are crucial for DRAs to effectively communicate with borrowers and reach mutually agreeable repayment plans.'
      },
      {
        id: 'q13',
        question: 'What is the importance of communication skills for a DRA?',
        options: ['To confuse borrowers', 'To build rapport and trust', 'To avoid legal issues', 'To reduce training time'],
        correctAnswer: 1,
        explanation: 'Effective communication helps DRAs build rapport and trust with borrowers, which is essential for successful recovery.'
      }
    ],
    general: [
      {
        id: 'q14',
        question: 'What is the fee for the DRA certification exam?',
        options: ['₹1,000', '₹1,200', '₹1,500', '₹2,000'],
        correctAnswer: 1,
        explanation: 'The examination fee for the DRA certification exam is ₹1,200 per attempt as per IIBF guidelines.'
      },
      {
        id: 'q15',
        question: 'How often is the DRA certification exam conducted?',
        options: ['Annually', 'Quarterly', 'Monthly', 'Biannually'],
        correctAnswer: 2,
        explanation: 'The DRA certification exam has monthly slots available throughout the year.'
      }
    ]
  };

  const categoryIcons = {
    eligibility: <FaGraduationCap className={styles.categoryIcon} />,
    certification: <FaBook className={styles.categoryIcon} />,
    exam: <FaClipboardList className={styles.categoryIcon} />,
    legal: <FaBalanceScale className={styles.categoryIcon} />,
    ethics: <FaUserShield className={styles.categoryIcon} />,
    skills: <FaComments className={styles.categoryIcon} />,
    general: <FaInfoCircle className={styles.categoryIcon} />
  };

  const categoryLabels = {
    eligibility: 'Eligibility',
    certification: 'Certification & Training',
    exam: 'Exam Format',
    legal: 'Legal & Regulatory',
    ethics: 'Ethics & Conduct',
    skills: 'Soft Skills',
    general: 'General Knowledge'
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <FaQuestionCircle className={styles.titleIcon} /> 
          DRA Sample Quiz Questions
        </h1>
        <p className={styles.subtitle}>
          Test your knowledge with these sample questions for the Debt Recovery Agent certification exam
        </p>
      </header>

      <div className={styles.content}>
        {/* Category Navigation */}
        <nav className={styles.categoryNav}>
          {Object.keys(questionsData).map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {categoryIcons[category]}
              {categoryLabels[category]}
            </button>
          ))}
        </nav>

        {/* Questions Section */}
        <section className={styles.questionsSection}>
          <h2 className={styles.sectionTitle}>
            {categoryIcons[activeCategory]}
            {categoryLabels[activeCategory]} Questions
          </h2>

          <div className={styles.questionsList}>
            {questionsData[activeCategory].map((q, index) => (
              <div key={q.id} className={styles.questionCard}>
                <div className={styles.questionHeader}>
                  <span className={styles.questionNumber}>Q{index + 1}:</span>
                  <h3 className={styles.questionText}>{q.question}</h3>
                </div>

                <div className={styles.optionsList}>
                  {q.options.map((option, optIndex) => (
                    <div 
                      key={optIndex} 
                      className={`${styles.option} ${optIndex === q.correctAnswer ? styles.correct : ''} ${showAnswers[q.id] && optIndex === q.correctAnswer ? styles.showCorrect : ''}`}
                    >
                      <span className={styles.optionLetter}>{String.fromCharCode(65 + optIndex)})</span>
                      <span className={styles.optionText}>{option}</span>
                      {showAnswers[q.id] && optIndex === q.correctAnswer && (
                        <FaCheckCircle className={styles.correctIcon} />
                      )}
                    </div>
                  ))}
                </div>

                <button 
                  className={styles.toggleAnswerButton}
                  onClick={() => toggleAnswer(q.id)}
                >
                  {showAnswers[q.id] ? 'Hide Answer' : 'Show Answer'}
                </button>

                {showAnswers[q.id] && (
                  <div className={styles.answerExplanation}>
                    <div className={styles.correctAnswer}>
                      <FaCheckCircle className={styles.answerIcon} />
                      Correct Answer: {String.fromCharCode(65 + q.correctAnswer)}) {q.options[q.correctAnswer]}
                    </div>
                    <div className={styles.explanation}>
                      <FaInfoCircle className={styles.explanationIcon} />
                      Explanation: {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <h2 className={styles.sectionTitle}>
            <FaChartBar className={styles.sectionIcon} />
            Quiz Statistics
          </h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15</div>
              <div className={styles.statLabel}>Total Questions</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>7</div>
              <div className={styles.statLabel}>Categories</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50%</div>
              <div className={styles.statLabel}>Passing Score</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>₹1,200</div>
              <div className={styles.statLabel}>Exam Fee</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DRAQuestions;