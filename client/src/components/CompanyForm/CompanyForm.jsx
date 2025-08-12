import React, { useEffect, useState } from "react";
import styles from "./CompanyForm.module.css";
import { FaFilePdf } from "react-icons/fa";

const CompanyForm = ({ formData = {}, onSave, validationErrors = {} }) => {
  const [localFormData, setLocalFormData] = useState({
    companyName: "",
    companyType: "",
    categoryType: "",
    companyRegNo: "",
    companyEstablished: "",
    contactName: "",
    totalManpower: "",
    companyEmail: "",
    companyPhone: "",
    operationalLocations: "",
    msmeRegistered: "",
    companyGst: "",
    draCertified: "",
    companyAddress: "",
    workstations: "",
    associatedCompanies: "",
    associatedWith: "",
    expertise: "",
    productType: "",
    productsHandling: "",
    companyCity: "",
    companyPincode: "",
    companyCountry: "",
    companyState: "",
    comments: "",
    companyLogo: null,
    companyBanner: null,
    profilePicture: null,
    profilePdf: null
  });

  const [errors, setErrors] = useState({});
  const [formTouched, setFormTouched] = useState(false);
  const [filePreviews, setFilePreviews] = useState({
    companyLogo: null,
    companyBanner: null,
    profilePicture: null,
    profilePdf: null
  });

  useEffect(() => {
    if (formData) {
      setLocalFormData(prev => ({ ...prev, ...formData }));
    }
  }, [formData]);

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
    if (!localFormData.categoryType) newErrors.categoryType = "Category Type is required";
    if (!localFormData.companyRegNo?.trim()) newErrors.companyRegNo = "Registration No. is required";
    if (!localFormData.companyEstablished) newErrors.companyEstablished = "Established Date is required";
    if (!localFormData.contactName?.trim()) newErrors.contactName = "Contact Name is required";
    if (!localFormData.companyEmail?.trim()) newErrors.companyEmail = "Email is required";
    if (!localFormData.companyPhone) newErrors.companyPhone = "Phone is required";
    if (!localFormData.totalManpower) newErrors.totalManpower = "Manpower count is required";
    if (!localFormData.operationalLocations) newErrors.operationalLocations = "Operational locations required";
    if (!localFormData.msmeRegistered) newErrors.msmeRegistered = "MSME status required";
    if (!localFormData.companyGst) newErrors.companyGst = "GST is required";
    if (!localFormData.draCertified) newErrors.draCertified = "DRA certification status required";
    if (!localFormData.companyAddress?.trim()) newErrors.companyAddress = "Address is required";
    if (!localFormData.workstations) newErrors.workstations = "Workstations count required";
    if (!localFormData.associatedCompanies) newErrors.associatedCompanies = "Associated companies count required";
    if (!localFormData.associatedWith?.trim()) newErrors.associatedWith = "Associated with is required";
    if (!localFormData.expertise) newErrors.expertise = "Expertise is required";
    if (!localFormData.productType) newErrors.productType = "Product type is required";
    if (!localFormData.productsHandling) newErrors.productsHandling = "Products handling is required";
    if (!localFormData.companyCity?.trim()) newErrors.companyCity = "City is required";
    if (!localFormData.companyPincode) newErrors.companyPincode = "Pincode is required";
    if (!localFormData.companyCountry) newErrors.companyCountry = "Country is required";
    if (!localFormData.companyState) newErrors.companyState = "State is required";
    if (!localFormData.comments?.trim()) newErrors.comments = "Comments are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormTouched(true);
    setLocalFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormTouched(true);

    if (files && files[0]) {
      const file = files[0];
      
      // File size validation (2MB for PDF, 5MB for images)
      const maxSize = name === 'profilePdf' ? 2 * 1024 * 1024 : 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          [name]: `File size must be less than ${name === 'profilePdf' ? '2MB' : '5MB'}`
        }));
        return;
      }

      // For PDF files
      if (file.type === 'application/pdf') {
        setFilePreviews(prev => ({
          ...prev,
          [name]: 'pdf'
        }));
      } 
      // For image files
      else if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreviews(prev => ({
            ...prev,
            [name]: reader.result
          }));
        };
        reader.readAsDataURL(file);
      }

      setLocalFormData(prev => ({
        ...prev,
        [name]: file
      }));
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleMonthYearChange = (e) => {
    const { value } = e.target;
    setFormTouched(true);
    
    if (value) {
      const [year, month] = value.split('-');
      setLocalFormData(prev => ({
        ...prev,
        companyEstablished: `${month}/${year}`
      }));
    } else {
      setLocalFormData(prev => ({
        ...prev,
        companyEstablished: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTouched(true);
    
    if (validate()) {
      const completeData = {
        ...localFormData,
        totalManpower: Number(localFormData.totalManpower),
        workstations: Number(localFormData.workstations),
        associatedCompanies: Number(localFormData.associatedCompanies)
      };
      
      onSave(completeData);
    }
  };

  const renderError = (name) => (
    errors[name] && <p className={styles.error}>{errors[name]}</p>
  );


  
  const FileUploadField = ({ name, label, accept, isPdf = false }) => (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <div className={styles.fileUploadContainer}>
        <input
          type="file"
          name={name}
          accept={accept}
          onChange={handleFileChange}
          className={styles.fileInput}
          id={name}
        />
        <label htmlFor={name} className={styles.fileUploadLabel}>
          {filePreviews[name] === 'pdf' ? (
            <div className={styles.pdfPreview}>
              <FaFilePdf className={styles.pdfIcon} />
              <span>PDF Selected</span>
            </div>
          ) : filePreviews[name] ? (
            <img 
              src={filePreviews[name]} 
              alt={`${name} Preview`} 
              className={styles.filePreview}
            />
          ) : (
            <span>Choose {label}</span>
          )}
        </label>
      </div>
      {renderError(name)}
    </div>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Company Information</h2>
      
      {/* Company Logo and Banner Upload */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Company Logo</label>
          <div className={styles.fileUploadContainer}>
            <input
              type="file"
              name="companyLogo"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
              id="companyLogo"
            />
            <label htmlFor="companyLogo" className={styles.fileUploadLabel}>
              {filePreviews.companyLogo ? (
                <img 
                  src={filePreviews.companyLogo} 
                  alt="Company Logo Preview" 
                  className={styles.filePreview}
                />
              ) : (
                <span>Choose Company Logo</span>
              )}
            </label>
          </div>
          {renderError("companyLogo")}
        </div>
        
        <div className={styles.formGroup}>
          <label>Company Banner</label>
          <div className={styles.fileUploadContainer}>
            <input
              type="file"
              name="companyBanner"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
              id="companyBanner"
            />
            <label htmlFor="companyBanner" className={styles.fileUploadLabel}>
              {filePreviews.companyBanner ? (
                <img 
                  src={filePreviews.companyBanner} 
                  alt="Company Banner Preview" 
                  className={styles.filePreview}
                />
              ) : (
                <span>Choose Company Banner</span>
              )}
            </label>
          </div>
          {renderError("companyBanner")}
        </div>
      </div>

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
        <div className={styles.formGroup}>
          <label>Registration No. <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="companyRegNo"
            value={localFormData.companyRegNo}
            onChange={handleInputChange}
            className={errors.companyRegNo ? styles.inputError : styles.input}
            placeholder="Company registration number"
          />
          {renderError("companyRegNo")}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Established Date (Month/Year) <span className={styles.required}>*</span></label>
          <input
            type="month"
            name="companyEstablishedMonthYear"
            onChange={handleMonthYearChange}
            className={errors.companyEstablished ? styles.inputError : styles.input}
            max={new Date().toISOString().slice(0, 7)}
          />
          {renderError("companyEstablished")}
        </div>
      </div>

      <h2 className={styles.formTitle}>Contact Information</h2>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Contact Person <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="contactName"
            value={localFormData.contactName}
            onChange={handleInputChange}
            className={errors.contactName ? styles.inputError : styles.input}
            placeholder="Full name of contact person"
          />
          {renderError("contactName")}
        </div>
        <div className={styles.formGroup}>
          <label>Total Manpower <span className={styles.required}>*</span></label>
          <input
            type="number"
            name="totalManpower"
            value={localFormData.totalManpower}
            onChange={handleInputChange}
            className={errors.totalManpower ? styles.inputError : styles.input}
            min="1"
            placeholder="Number of employees"
          />
          {renderError("totalManpower")}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Email <span className={styles.required}>*</span></label>
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
        <div className={styles.formGroup}>
          <label>Phone <span className={styles.required}>*</span></label>
          <input
            type="tel"
            name="companyPhone"
            value={localFormData.companyPhone}
            onChange={handleInputChange}
            className={errors.companyPhone ? styles.inputError : styles.input}
            maxLength="10"
            placeholder="10-digit phone number"
          />
          {renderError("companyPhone")}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Operational in other States/Cities/Pincode <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="operationalLocations"
            value={localFormData.operationalLocations}
            onChange={handleInputChange}
            className={errors.operationalLocations ? styles.inputError : styles.input}
            placeholder="List operational locations"
          />
          {renderError("operationalLocations")}
        </div>
        <div className={styles.formGroup}>
          <label>MSME Registered <span className={styles.required}>*</span></label>
          <select
            name="msmeRegistered"
            value={localFormData.msmeRegistered}
            onChange={handleInputChange}
            className={errors.msmeRegistered ? styles.inputError : styles.input}
          >
            <option value="">Select MSME Status</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {renderError("msmeRegistered")}
        </div>
      </div>

      <h2 className={styles.formTitle}>Financial Information</h2>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>GST Number <span className={styles.required}>*</span></label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              name="companyGst"
              value={localFormData.companyGst}
              onChange={handleInputChange}
              className={errors.companyGst ? styles.inputError : styles.input}
              placeholder="15-character GSTIN"
              maxLength="15"
            />
          </div>
          {renderError("companyGst")}
        </div>
        <div className={styles.formGroup}>
          <label>DRA Certified <span className={styles.required}>*</span></label>
          <select
            name="draCertified"
            value={localFormData.draCertified}
            onChange={handleInputChange}
            className={errors.draCertified ? styles.inputError : styles.input}
          >
            <option value="">Select DRA Status</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {renderError("draCertified")}
        </div>
      </div>

      <h2 className={styles.formTitle}>Address Information</h2>
      
      <div className={styles.formGroupFull}>
        <label>Full Address <span className={styles.required}>*</span></label>
        <input
          type="text"
          name="companyAddress"
          value={localFormData.companyAddress}
          onChange={handleInputChange}
          className={errors.companyAddress ? styles.inputError : styles.input}
          placeholder="Street address, building, etc."
        />
        {renderError("companyAddress")}
      </div>
  
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Number of Workstations/Seats <span className={styles.required}>*</span></label>
          <input
            type="number"
            name="workstations"
            value={localFormData.workstations}
            onChange={handleInputChange}
            className={errors.workstations ? styles.inputError : styles.input}
            min="1"
            placeholder="Enter number of workstations"
          />
          {renderError("workstations")}
        </div>
        <div className={styles.formGroup}>
          <label>Number of Companies Associated <span className={styles.required}>*</span></label>
          <input
            type="number"
            name="associatedCompanies"
            value={localFormData.associatedCompanies}
            onChange={handleInputChange}
            className={errors.associatedCompanies ? styles.inputError : styles.input}
            min="1"
            placeholder="Enter number of companies"
          />
          {renderError("associatedCompanies")}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Associated With <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="associatedWith"
            value={localFormData.associatedWith}
            onChange={handleInputChange}
            className={errors.associatedWith ? styles.inputError : styles.input}
            placeholder="Companies/Organizations"
          />
          {renderError("associatedWith")}
        </div>
        <div className={styles.formGroup}>
          <label>Expertise In <span className={styles.required}>*</span></label>
          <select
            name="expertise"
            value={localFormData.expertise}
            onChange={handleInputChange}
            className={errors.expertise ? styles.inputError : styles.input}
          >
            <option value="">Select Expertise</option>
            <option value="Flows">Flows</option>
            <option value="Recovery">Recovery</option>
            <option value="Both">Both</option>
          </select>
          {renderError("expertise")}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Product Type <span className={styles.required}>*</span></label>
          <select
            name="productType"
            value={localFormData.productType}
            onChange={handleInputChange}
            className={errors.productType ? styles.inputError : styles.input}
          >
            <option value="">Select Product Type</option>
            <option value="Unsecured">Unsecured</option>
            <option value="Secured">Secured</option>
          </select>
          {renderError("productType")}
        </div>
        <div className={styles.formGroup}>
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
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Country <span className={styles.required}>*</span></label>
          <select
            name="companyCountry"
            value={localFormData.companyCountry}
            onChange={handleInputChange}
            className={errors.companyCountry ? styles.inputError : styles.input}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          {renderError("companyCountry")}
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
        <label>About You / Comments <span className={styles.required}>*</span></label>
        <textarea
          name="comments"
          value={localFormData.comments}
          onChange={handleInputChange}
          className={errors.comments ? styles.inputError : styles.input}
          placeholder="Additional comments"
          rows="3"
        />
        {renderError("comments")}
      </div>

      {/* Profile Picture Upload */}
   <div className={styles.formGroupFull}>
        <label>Company Profile PDF (Max 2MB)</label>
        <div className={styles.fileUploadContainer}>
          <input
            type="file"
            name="profilePdf"
            accept=".pdf"
            onChange={handleFileChange}
            className={styles.fileInput}
            id="profilePdf"
          />
          <label htmlFor="profilePdf" className={styles.fileUploadLabel}>
            {filePreviews.profilePdf === 'pdf' ? (
              <div className={styles.pdfPreview}>
                <FaFilePdf className={styles.pdfIcon} />
                <span>PDF Selected</span>
              </div>
            ) : (
              <span>Choose Company Profile PDF</span>
            )}
          </label>
        </div>
        {renderError("profilePdf")}
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