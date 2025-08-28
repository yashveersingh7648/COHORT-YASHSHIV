// import React from 'react';
// import styles from './LoadingSpinner.module.css';

// const LoadingSpinner = () => {
//   return (
//     <div className={styles.spinnerContainer}>
//       <div className={styles.spinner}></div>
//     </div>
//   );
// };

// export default LoadingSpinner;


import React from "react";
import ClipLoader from "react-spinners/RingLoader"; 

const SpinnerPage = () => {
  return (
    <div className="spinner-container">
      <h2 className="spinner-title">Loading, please wait...</h2>
      <ClipLoader 
        color="#36d7b7" 
        size={80}   
        speedMultiplier={1} 
      />
    </div>
  );
};

export default SpinnerPage;
