// import React, { useState } from 'react';
// import axios from 'axios';

// export default function MobileLoginPage() {
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1);
//   const [message, setMessage] = useState('');
//   const [userData, setUserData] = useState({ name: '', email: '' });

//   const styles = {
//     box: {
//       maxWidth: 400,
//       margin: '40px auto',
//       padding: '20px',
//       borderRadius: '8px',
//       backgroundColor: '#f9f9f9',
//       boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//       fontFamily: 'sans-serif',
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       margin: '10px 0',
//       borderRadius: '5px',
//       border: '1px solid #ccc',
//       fontSize: '16px',
//     },
//     button: {
//       width: '100%',
//       padding: '10px',
//       backgroundColor: '#007bff',
//       color: 'white',
//       border: 'none',
//       borderRadius: '5px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       marginTop: '10px',
//     },
//     message: {
//       marginTop: 20,
//       color: 'green',
//       textAlign: 'center',
//     },
//     heading: {
//       textAlign: 'center',
//       marginBottom: 20,
//     },
//   };

//   const handleSendOtp = async () => {
//     if (!/^\d{10}$/.test(mobile)) return setMessage('Enter valid 10-digit number');
//     try {
//       const res = await axios.post('/api/send-otp', { mobile });
//       setMessage(res.data.message || 'OTP sent successfully!');
//       setStep(2);
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Failed to send OTP');
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const res = await axios.post('/api/verify-otp', { mobile, otp });
//       setMessage(res.data.message || 'OTP verified!');
//       setStep(3);
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'OTP verification failed');
//     }
//   };

//   const handleFinalSubmit = async () => {
//     if (!userData.name || !userData.email) return setMessage('Fill all fields');
//     setMessage(`👏 Welcome, ${userData.name}!`);
//     // Optionally send userData to backend here
//   };

//   return (
//     <div style={styles.box}>
//       <h2 style={styles.heading}>Mobile Login</h2>

//       {step === 1 && (
//         <>
//           <input
//             style={styles.input}
//             type="tel"
//             maxLength={10}
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="Enter 10-digit mobile"
//           />
//           <button style={styles.button} onClick={handleSendOtp}>
//             Send OTP
//           </button>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <input
//             style={styles.input}
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//           />
//           <button style={styles.button} onClick={handleVerifyOtp}>
//             Verify OTP
//           </button>
//         </>
//       )}

//       {step === 3 && (
//         <>
//           <input
//             style={styles.input}
//             value={userData.name}
//             onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//             placeholder="Your Name"
//           />
//           <input
//             style={styles.input}
//             value={userData.email}
//             onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//             placeholder="Your Email"
//           />
//           <button style={styles.button} onClick={handleFinalSubmit}>
//             Complete Login
//           </button>
//         </>
//       )}

//       {message && <p style={styles.message}>{message}</p>}
//     </div>
//   );
// }
