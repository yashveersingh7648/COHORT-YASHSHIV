import React, { useEffect, useState } from "react";
import styles from "./BusniesForm.module.css";
import { useAuth } from '../../context/AuthContext';

const CompanyForm = ({ formData = {}, onSave, validationErrors = {} }) => {
  const { user } = useAuth();
  const [localFormData, setLocalFormData] = useState({
    companyName: "",
    companyType: "",
    contactName: "",
    designation: "",
    productsHandling: "",
    companyCity: "",
    companyPincode: "",
    companyState: "",
    companyEmail: "",
    userId: null,  
    userEmail: ""  
  });


  const [errors, setErrors] = useState({});
  const [formTouched, setFormTouched] = useState(false);

   useEffect(() => {
    // Safely initialize form data
    const initialData = {
      companyName: "",
      companyType: "",
      contactName: "",
      designation: "",
      productsHandling: "",
      companyCity: "",
      companyPincode: "",
      companyState: "",
      companyEmail: "",
      userId: user?.id || null,
      userEmail: user?.email || "",
      ...(formData || {}) // Safely spread formData if it exists
    };

    setLocalFormData(initialData);
  }, [user, formData]);

   useEffect(() => {
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
  }, [validationErrors]);

  const validate = () => {
    const newErrors = {};
    
    // Required field validations
    if (!localFormData.companyName?.trim()) newErrors.companyName = "Company Name is required";
    if (!localFormData.companyType) newErrors.companyType = "Company Type is required";
    if (!localFormData.contactName?.trim()) newErrors.contactName = "Your Name is required";
    if (!localFormData.designation?.trim()) newErrors.designation = "Designation is required";
    if (!localFormData.productsHandling) newErrors.productsHandling = "Product handling is required";
    if (!localFormData.companyCity?.trim()) newErrors.companyCity = "City is required";
    if (!localFormData.companyPincode) newErrors.companyPincode = "Pincode is required";
    if (!localFormData.companyState) newErrors.companyState = "State is required";
     if (!localFormData.companyEmail?.trim()) {
      newErrors.companyEmail = "Business Email ID is required";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(localFormData.companyEmail)) {
      newErrors.companyEmail = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormTouched(true);
    setLocalFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    setFormTouched(true);
    
    if (validate()) {
      onSave({
        ...localFormData,
        // Ensure these values are safe
        userId: user?.id || null,
        userEmail: user?.email || ""
      });
    }
  };



  

  
  const renderError = (name) => (
    errors[name] && <p className={styles.error}>{errors[name]}</p>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Company Information</h2>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Company Name <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="companyName"
            value={localFormData.companyName}
            onChange={handleInputChange}
            className={errors.companyName ? styles.inputError : styles.input}
            placeholder="Enter company name"
          />
          {renderError("companyName")}
        </div>
        <div className={styles.formGroup}>
          <label>Company Type <span className={styles.required}>*</span></label>
          <select
            name="companyType"
            value={localFormData.companyType}
            onChange={handleInputChange}
            className={errors.companyType ? styles.inputError : styles.input}
          >
            <option value="">Select Company Type</option>
            <option value="Private Limited">Private Limited</option>
            <option value="Public Limited">Public Limited</option>
            <option value="LLP">LLP</option>
            <option value="Partnership">Partnership</option>
            <option value="Proprietorship">Proprietorship</option>
            <option value="Other">Other</option>
          </select>
          {renderError("companyType")}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Your Name <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="contactName"
            value={localFormData.contactName}
            onChange={handleInputChange}
            className={errors.contactName ? styles.inputError : styles.input}
            placeholder="Your full name"
          />
          {renderError("contactName")}
        </div>
        <div className={styles.formGroup}>
          <label>Designation <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="designation"
            value={localFormData.designation}
            onChange={handleInputChange}
            className={errors.designation ? styles.inputError : styles.input}
            placeholder="Your designation"
          />
          {renderError("designation")}
        </div>
      </div>

      <div className={styles.formGroupFull}>
        <label>Products Handling <span className={styles.required}>*</span></label>
        <select
          name="productsHandling"
          value={localFormData.productsHandling}
          onChange={handleInputChange}
          className={errors.productsHandling ? styles.inputError : styles.input}
        >
          <option value="">Select Products</option>
          <option value="PL/BL">PL/BL</option>
          <option value="Credit Card">Credit Card</option>
          <option value="STPL">STPL</option>
          <option value="CD">CD</option>
          <option value="HL/LAP">HL/LAP</option>
          <option value="Auto Loan">Auto Loan</option>
          <option value="Two Wheeler">Two Wheeler</option>
          <option value="CV/CE">CV/CE</option>
          <option value="Gold Loan">Gold Loan</option>
        </select>
        {renderError("productsHandling")}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>City <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="companyCity"
            value={localFormData.companyCity}
            onChange={handleInputChange}
            className={errors.companyCity ? styles.inputError : styles.input}
            placeholder="City name"
          />
          {renderError("companyCity")}
        </div>
        <div className={styles.formGroup}>
          <label>State <span className={styles.required}>*</span></label>
          <select
            name="companyState"
            value={localFormData.companyState}
            onChange={handleInputChange}
            className={errors.companyState ? styles.inputError : styles.input}
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Delhi">Delhi</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          {renderError("companyState")}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Pincode <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="companyPincode"
            value={localFormData.companyPincode}
            onChange={handleInputChange}
            className={errors.companyPincode ? styles.inputError : styles.input}
            placeholder="6-digit pincode"
            maxLength="6"
          />
          {renderError("companyPincode")}
        </div>
        <div className={styles.formGroup}>
          <label>Business Email ID <span className={styles.required}>*</span></label>
          <input
            type="email"
            name="companyEmail"
            value={localFormData.companyEmail}
            onChange={handleInputChange}
            className={errors.companyEmail ? styles.inputError : styles.input}
            placeholder="company@example.com"
          />
          {renderError("companyEmail")}
        </div>
      </div>

      <div className={styles.formFooter}>
        <button type="submit" className={styles.saveButton}>
          Save Company Details
        </button>
      </div>
    </form>
  );
};

export default CompanyForm;