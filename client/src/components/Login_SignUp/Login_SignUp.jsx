

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import styles from './Login_SignUp.module.css';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

// const BASE = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const AuthForm = () => {
  const { loginAgency } = useAuth();
  const { login } = useAuth(); 
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
 const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!isSignIn && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isSignIn && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 🔍 Validate form
    if (!validate()) return;
  
    try {
      const endpoint = isSignIn
        ? `${API_URL}/api/login`
        : `${API_URL}/api/register`;
  
      const payload = isSignIn
        ? {
            email: formData.email,
            password: formData.password
          }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password
          };
  
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      // Parse JSON safely
      const contentType = res.headers.get('Content-Type');
      const data = contentType?.includes('application/json') ? await res.json() : {};
  
      if (!res.ok) {
        throw new Error(data?.error || data?.message || `Error ${res.status}`);
      }
  
      if (isSignIn) {
        // ✅ Save token to localStorage
        if (!data.token) {
          throw new Error("Login failed: No token received");
        }
  
        localStorage.setItem('token', data.token);
  
        const userData = {
          id: data.user?.id || formData.email,
          email: data.user?.email || formData.email,
          name: data.user?.name || formData.email.split('@')[0],
          isAgencyLogin: true
        };
  
        // ✅ Your context or redux method
        loginAgency(userData);
  
        // ✅ Navigate to dashboard
        navigate('/DashboardTabs');
      } else {
        alert('Registration successful, please login.');
        setIsSignIn(true);
      }
    } catch (err) {
      console.error("Auth error:", err);
      alert(err.message || "Something went wrong");
    }
  };



// const handleGoogleSuccess = async (credentialResponse) => {
//   try {
//     setIsLoading(true);
    
//     // ✅ Correct URL - only one /api prefix
//     const response = await axios.post(
//       `${import.meta.env.VITE_API_URL}/api/google`,
//       { token: credentialResponse.credential }
//     );

//     const { token, user } = response.data;
    
//     localStorage.setItem('token', token);
//     loginAgency({
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       image: user.image || user.picture,
//       isAgencyLogin: true
//     });
    
//     navigate('/DashboardTabs');
//   } catch (error) {
//     console.error('Google login error:', error);
//     setErrors({
//       general: error.response?.data?.message || 
//              'Google login failed. Please try again.'
//     });
//   } finally {
//     setIsLoading(false);
//   }
// };

  

   const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      // const decoded = jwtDecode(token); 
      const decoded = jwtDecode(credentialResponse.credential);
      const userData = {
        id: decoded.sub,
        name: decoded.name || decoded.email.split('@')[0],
        email: decoded.email,
        image: decoded.picture,
        isAgencyLogin: true
      };

      loginAgency(userData);
      localStorage.setItem("authToken", credentialResponse.credential);
      // localStorage.setItem("authToken", token);
      navigate("/DashboardTabs");
    } catch (error) {
      console.error("Google Auth Error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleMobileLogin = () => {
    navigate('/mobilelogin');
  };

// Temporary add this in your component
useEffect(() => {
  // console.log("Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
  console.log("Redirect URI:", import.meta.env.VITE_GOOGLE_REDIRECT_URI);
}, []);

  return (
     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <div className={styles.container}>
      <div className={`${styles.signUpContainer} ${!isSignIn ? styles.active : ''}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Create Account</h1>
          {!isSignIn && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
          {!isSignIn && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={styles.input}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
            </>
          )}
          <button type="submit" className={styles.button}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>

      <div className={`${styles.signInContainer} ${!isSignIn ? styles.inactive : ''}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Sign in</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
          <a href="#" className={styles.anchor}>Forgot your password?</a>
          <button type="submit" className={styles.button}>Sign In</button>

          {/* <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
              alert("Google login failed. Please try again.");
            }}
            useOneTap
            auto_select
            // theme="filled_blue"
            size="large"
            shape="rectangular"
            text="signin_with"
          /> */}
 <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                  setErrors({ general: 'Google login failed' });
                }}
                useOneTap
                auto_select
                theme="filled_blue"
                size="large"
                shape="rectangular"
                text="signin_with"
              />
         
        </form>
      </div>

      <div className={`${styles.overlayContainer} ${!isSignIn ? styles.active : ''}`}>
        <div className={`${styles.overlay} ${!isSignIn ? styles.active : ''}`}>
          <div className={`${styles.overlayPanel} ${styles.left} ${!isSignIn ? styles.active : ''}`}>
            <h1 className={styles.title}>Welcome Back!</h1>
            <p className={styles.paragraph}>To keep connected with us please login with your personal info</p>
            <button className={`${styles.button} ${styles.ghost}`} onClick={() => setIsSignIn(true)}>Sign In</button>
          </div>
          <div className={`${styles.overlayPanel} ${styles.right} ${!isSignIn ? styles.active : ''}`}>
            <h1 className={styles.title}>Hello, Friend!</h1>
            <p className={styles.paragraph}>Enter your personal details and start journey with us</p>
            <button className={`${styles.button} ${styles.ghost}`} onClick={() => setIsSignIn(false)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </GoogleOAuthProvider>
  );
};

export default AuthForm;

