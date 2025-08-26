import React, { useState, useEffect } from "react";
import styles from "./AddManpowerForm.module.css";
import { useAuth } from '../../context/AuthContext';

const AddManpowerForm = ({ formData, onSave, validationErrors }) => {
  const { user } = useAuth();
  const [formState, setFormState] = useState({
    designation: "",
    noOfPositions: 1,
    experience: "",
    location: "",
    userEmail: user?.email || ""
  });

  // Update form state when formData prop changes
  useEffect(() => {
    if (formData) {
      setFormState({
        ...formData,
        userEmail: user?.email || ""
      });
    }
  }, [formData, user]);

  const [errors, setErrors] = useState({
    designation: "",
    noOfPositions: "",
    experience: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: name === "noOfPositions" ? parseInt(value) || 1 : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formState.designation.trim()) {
      newErrors.designation = "Designation is required";
      valid = false;
    }

    if (!formState.noOfPositions || formState.noOfPositions < 1) {
      newErrors.noOfPositions = "Please enter a valid number (minimum 1)";
      valid = false;
    }

    if (!formState.experience) {
      newErrors.experience = "Experience is required";
      valid = false;
    }

    if (!formState.location.trim()) {
      newErrors.location = "Location is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const payload = {
        designation: formState.designation.trim(),
        noOfPositions: parseInt(formState.noOfPositions) || 1,
        experience: formState.experience,
        location: formState.location.trim(),
        userEmail: user?.email 
      };
      onSave(payload);
    }
  };

  return (
    <>
    <div id="heade"></div>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.manpowerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="designation" className={styles.formLabel}>
            Designation*
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formState.designation}
            onChange={handleChange}
            className={`${styles.formInput} ${
              errors.designation ? styles.errorInput : ""
            }`}
            placeholder="Enter designation"
          />
          {errors.designation && (
            <span className={styles.errorMessage}>{errors.designation}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="noOfPositions" className={styles.formLabel}>
            Number of Positions*
          </label>
          <input
            type="number"
            id="noOfPositions"
            name="noOfPositions"
            min="1"
            value={formState.noOfPositions}
            onChange={handleChange}
            className={`${styles.formInput} ${
              errors.noOfPositions ? styles.errorInput : ""
            }`}
          />
          {errors.noOfPositions && (
            <span className={styles.errorMessage}>{errors.noOfPositions}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="experience" className={styles.formLabel}>
            Experience Required*
          </label>
          <select
            id="experience"
            name="experience"
            value={formState.experience}
            onChange={handleChange}
            className={`${styles.formInput} ${
              errors.experience ? styles.errorInput : ""
            }`}
          >
            <option value="">Select experience</option>
            <option value="0-1 years">0-1 years</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
          {errors.experience && (
            <span className={styles.errorMessage}>{errors.experience}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location" className={styles.formLabel}>
            Location*
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formState.location}
            onChange={handleChange}
            className={`${styles.formInput} ${
              errors.location ? styles.errorInput : ""
            }`}
            placeholder="Enter location"
          />
          {errors.location && (
            <span className={styles.errorMessage}>{errors.location}</span>
          )}
        </div>

        <div className={styles.formFooter}>
          <button type="submit" className={styles.saveButton}>
            Save Position Details
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddManpowerForm;