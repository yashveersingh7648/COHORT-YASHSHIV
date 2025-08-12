import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from 'jwt-decode'; 
import { useNavigate } from "react-router-dom";
import styles from './SignIn.module.css';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const decoded = jwtDecode(token);
      
      console.log("Google user:", decoded);
      
      // Send to backend for verification
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate with backend");
      }

      const data = await response.json();
      
      // Store both Google and backend auth data
      localStorage.setItem("user", JSON.stringify(decoded));
      // localStorage.setItem("authToken", data.token);
      localStorage.setItem("token", data.token);

      
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign in with Google</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log("Google Login Failed");
          alert("Google login failed. Please try again.");
        }}
        useOneTap
        auto_select
        theme="filled_blue"
        size="large"
        shape="rectangular"
        text="signin_with"
      />
    </div>
  );
};

export default SignIn;