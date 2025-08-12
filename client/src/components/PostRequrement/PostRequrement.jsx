import React, { useEffect, useState } from "react";
import styles from "./PostRequrement.module.css";
import { useAuth } from '../../context/AuthContext';

const PostRequirementForm = ({ formData = {}, onSave, validationErrors = {} }) => {
   const { user } = useAuth();

  const [localFormData, setLocalFormData] = useState({
    companyName: "",
    companyType: "",
    product: "",          
    categoryType: "",
    companyCity: "",
    companyPincode: "",
    companyState: "",
    teamSize: "",
    userEmail: user?.email || ''
  });

  const [errors, setErrors] = useState({});
  const [formTouched, setFormTouched] = useState(false);

  useEffect(() => {
    if (formData) {
      setLocalFormData((prev) => ({ ...prev, ...formData }));
    }
  }, [formData]);

  useEffect(() => {
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
  }, [validationErrors]);

  const validate = () => {
    const newErrors = {};
    if (!localFormData.companyName?.trim()) newErrors.companyName = "Company Name is required";
    if (!localFormData.companyType) newErrors.companyType = "Company Type is required";
    if (!localFormData.product) newErrors.product = "Product is required"; // Changed from Product to product
    if (!localFormData.categoryType) newErrors.categoryType = "Category Type is required";
    if (!localFormData.companyCity?.trim()) newErrors.companyCity = "City is required";
    if (!localFormData.companyPincode) newErrors.companyPincode = "Pincode is required";
    else if (!/^\d{6}$/.test(localFormData.companyPincode)) newErrors.companyPincode = "Pincode must be 6 digits";
    if (!localFormData.companyState) newErrors.companyState = "State is required";
    if (!localFormData.teamSize) newErrors.teamSize = "Team Size is required";
    else if (isNaN(localFormData.teamSize)) newErrors.teamSize = "Team Size must be a number";
    else if (localFormData.teamSize < 1) newErrors.teamSize = "Team Size must be at least 1";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormTouched(true);
    
    // Convert teamSize to number if it's the teamSize field
    const processedValue = name === 'teamSize' ? parseInt(value) || '' : value;
    
    setLocalFormData((prev) => ({ 
      ...prev, 
      [name]: processedValue 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTouched(true);

    if (validate()) {
      onSave(localFormData);
    }
  };

  const renderError = (name) =>
    errors[name] && <p className={styles.error}>{errors[name]}</p>;

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
          <label>Product <span className={styles.required}>*</span></label>
          <select
            name="product"
            value={localFormData.product}
            onChange={handleInputChange}
            className={errors.product ? styles.inputError : styles.input}
          >
            <option value="">Select Product</option>
            <option value="Flows">Flows</option>
            <option value="Recovery">Recovery</option>
          </select>
          {renderError("product")} {/* Changed from Product to product */}
        </div>

        <div className={styles.formGroup}>
          <label>Category Type <span className={styles.required}>*</span></label>
          <select
            name="categoryType"
            value={localFormData.categoryType}
            onChange={handleInputChange}
            className={errors.categoryType ? styles.inputError : styles.input}
          >
            <option value="">Select Category Type</option>
            <option value="Call Centre">Call Centre</option>
            <option value="Tele Calling">Tele Calling</option>
            <option value="Field">Field</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Legal">Legal</option>
            <option value="Digital">Digital</option>
            <option value="Other">Other</option>
          </select>
          {renderError("categoryType")}
        </div>
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
            placeholder="Enter city"
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

      <div className={styles.formGroupFull}>
        <label>Team Size <span className={styles.required}>*</span></label>
        <input
          type="number"
          name="teamSize"
          value={localFormData.teamSize}
          onChange={handleInputChange}
          className={errors.teamSize ? styles.inputError : styles.input}
          placeholder="Enter number of team members"
          min="1"
        />
        {renderError("teamSize")}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroupFull}>
          <label>Pincode <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="companyPincode"
            value={localFormData.companyPincode}
            onChange={handleInputChange}
            className={errors.companyPincode ? styles.inputError : styles.input}
            placeholder="6-digit pincode"
            maxLength="6"
            pattern="\d{6}"
          />
          {renderError("companyPincode")}
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

export default PostRequirementForm;