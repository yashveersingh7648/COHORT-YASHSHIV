import React, { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./Contact.module.css";

// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "https://supcohort-muvm.onrender.com";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [activeTab, setActiveTab] = useState("terminal");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setResponseMsg("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMsg(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setResponseMsg("");
    setLoading(false);
  };

  const TerminalForm = () => {
    const [terminalFormData, setTerminalFormData] = useState({ name: '', email: '', message: '' });
    const [currentField, setCurrentField] = useState('name');
    const [completedFields, setCompletedFields] = useState([]);
    const [terminalResponseMsg, setTerminalResponseMsg] = useState('');
    const [terminalLoading, setTerminalLoading] = useState(false);

    const terminalRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const fields = [
      { key: 'name', label: 'your name', color: styles.violetText },
      { key: 'email', label: 'your email', color: styles.blueText },
      { key: 'message', label: 'your message', color: styles.amberText }
    ];

    useEffect(() => {
      terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
    }, [currentField, terminalResponseMsg]);

    useEffect(() => {
      if (!terminalResponseMsg) {
        setTimeout(() => {
          if (currentField === 'name') nameRef.current?.focus();
          else if (currentField === 'email') emailRef.current?.focus();
          else if (currentField === 'message') messageRef.current?.focus();
        }, 50);
      }
    }, [currentField, terminalResponseMsg]);

    const handleTerminalInputChange = (e) => {
      setTerminalFormData({ ...terminalFormData, [currentField]: e.target.value });
    };

    const handleFieldSubmit = (e) => {
      e.preventDefault();
      if (!terminalFormData[currentField].trim()) return;

      if (!completedFields.includes(currentField)) {
        setCompletedFields([...completedFields, currentField]);
      }

      const currentIndex = fields.findIndex(f => f.key === currentField);
      if (currentIndex < fields.length - 1) {
        setCurrentField(fields[currentIndex + 1].key);
      }
    };

   // inside your component
const handleSendMessage = async (e) => {
  e.preventDefault();
  setTerminalLoading(true);
  setTerminalResponseMsg("");

  try {
    const response = await fetch(`${API_URL}/api/contact-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(terminalFormData),
    });

    const data = await response.json();

    if (data.success) {
      setTerminalResponseMsg("✅ Message sent successfully!");
    } else {
      setTerminalResponseMsg("❌ " + data.error || data.message);
    }
  } catch (error) {
    setTerminalResponseMsg("❌ Server error. Please try again.");
  }

  setTerminalLoading(false);
};


    return (
      <div 
        ref={terminalRef}
        className={styles.terminalContainer}
      >
        <div className={styles.terminalHeader}>
          <div className={styles.terminalDotRed}></div>
          <div className={styles.terminalDotYellow}></div>
          <div className={styles.terminalDotGreen}></div>
          <span className={styles.terminalTitle}>
            support@suppcohort.com

          </span>
        </div>

        <div className={styles.terminalContent}>
          <p>Welcome to UpSale Technology terminal </p>
          <p className={styles.terminalDivider}>
            ------------------------------------------------------------------------
          </p>

          {!terminalResponseMsg ? (
            <>
              <p>Please provide the following information:</p>
              {fields.map((field) => (
                <div key={field.key} className={styles.terminalField}>
                  <div className={styles.terminalPrompt}>
                    <span className={styles.terminalArrow}>➜</span>{' '}
                    <span className={styles.terminalTilde}>~</span>{' '}
                    <span className={styles.terminalLabel}>Enter {field.label}: </span>
                    {currentField === field.key ? (
                      <form onSubmit={handleFieldSubmit} className={styles.terminalInputForm}>
                        <input
                          ref={
                            field.key === 'name' ? nameRef :
                            field.key === 'email' ? emailRef :
                            messageRef
                          }
                          type={field.key === 'email' ? 'email' : 'text'}
                          name={field.key}
                          value={terminalFormData[field.key]}
                          onChange={handleTerminalInputChange}
                          className={`${styles.terminalInput} ${field.color}`}
                          required
                          autoComplete="off"
                        />
                      </form>
                    ) : (
                      <span className={field.color}>
                        {completedFields.includes(field.key) ? terminalFormData[field.key] : ''}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {completedFields.length === fields.length && (
                <div className={styles.terminalSubmitContainer}>
                  <button
                    onClick={handleSendMessage}
                    className={styles.terminalSubmitButton}
                    disabled={terminalLoading}
                  >
                    {terminalLoading ? (
                      <>
                        <span className={styles.terminalSpinner}>↻</span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className={styles.terminalResponseContainer}>
                <p className={`${terminalResponseMsg.includes("Error") ? styles.errorText : styles.successText}`}>
                  {terminalResponseMsg}
                </p>
                {!terminalResponseMsg.includes("Error") && (
                  <div className={styles.terminalResponseData}>
                    <p><span className={styles.terminalResponseLabel}>Name:</span> {terminalFormData.name}</p>
                    <p><span className={styles.terminalResponseLabel}>Email:</span> {terminalFormData.email}</p>
                    <p><span className={styles.terminalResponseLabel}>Message:</span> {terminalFormData.message}</p>
                  </div>
                )}
              </div>

              <button 
                onClick={resetForm}
                className={styles.terminalResetButton}
              >
                Send another message
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  const TraditionalForm = () => (
    <div className={styles.traditionalFormContainer}>
      <h2 className={styles.formTitle}>Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        {["name", "email", "message"].map((field) => (
          <div className={styles.formField} key={field}>
            <label className={styles.formLabel}>{field}</label>
            {field === "message" ? (
              <textarea
                name={field}
                rows="5"
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={`Enter your ${field}`}
                className={styles.formTextarea}
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={`Enter your ${field}`}
                className={styles.formInput}
              />
            )}
          </div>
        ))}
        <button 
          type="submit" 
          disabled={loading} 
          className={styles.formSubmitButton}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {responseMsg && (
          <p className={`${styles.responseMessage} ${
            responseMsg.includes("Error") ? styles.errorMessage : styles.successMessage
          }`}>
            {responseMsg}
          </p>
        )}
      </form>
    </div>
  );

 const handleFooterLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
             <div className="heading-container1">
  <h1 className="main-heading">Get Started Today</h1>
</div>
          {/* <h1 className={styles.pageTitle}>Contact Us
            <div className={styles.titleUnderline}></div>
          </h1> */}

          <div className={styles.tabContainer}>
            <div className={styles.tabButtons}>
              <button
                onClick={() => {
                  setActiveTab("terminal");
                  setResponseMsg("");
                }}
                className={`${styles.tabButton} ${activeTab === "terminal" ? styles.activeTab : ''}`}
              >
                Terminal Mode
              </button>
              <button
                onClick={() => {
                  setActiveTab("traditional");
                  setResponseMsg("");
                }}
                className={`${styles.tabButton} ${activeTab === "traditional" ? styles.activeTab : ''}`}
              >
                Traditional Form
              </button>
            </div>
          </div>

          <div className={styles.gridContainer}>
            <div>
              {activeTab === "terminal" ? (
                <TerminalForm />
              ) : (
                <TraditionalForm />
              )}
            </div>

            <div className={styles.contactInfoContainer}>
              <h2 className={styles.contactInfoTitle}>Contact Information</h2>
              <div className={styles.contactInfoContent}>
                <div className={styles.contactInfoItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <p className={styles.contactText}>Bldg No 5, 2nd Floor, Park End, Vikas Marg, Preet Vihar
New Delhi - 110092</p>
                </div>
                <div className={styles.contactInfoItem}>
                  <FaPhone className={styles.contactIcon} />
                  <p className={styles.contactText}>+91 98731 20702
</p>
                </div>
                <div className={styles.contactInfoItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <p className={styles.contactText}>support@suppcohort.com
</p>
                </div>
              </div>

              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a href="https://facebook.com" className={styles.socialIcon} onClick={handleFooterLinkClick}>
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" className={styles.socialIcon} onClick={handleFooterLinkClick}>
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" className={styles.socialIcon} onClick={handleFooterLinkClick}>
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" className={styles.socialIcon} onClick={handleFooterLinkClick}>
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
