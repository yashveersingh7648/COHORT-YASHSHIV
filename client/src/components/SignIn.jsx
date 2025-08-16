// import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import jwtDecode from 'jwt-decode'; 
// import { useNavigate } from "react-router-dom";
// import styles from './SignIn.module.css';

// const SignIn = () => {
//   const navigate = useNavigate();

//   const handleSuccess = async (credentialResponse) => {
//     try {
//       const token = credentialResponse.credential;
//       const decoded = jwtDecode(token);
      
//       console.log("Google user:", decoded);
      
//       // Send to backend for verification
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/google`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to authenticate with backend");
//       }

//       const data = await response.json();
      
//       // Store both Google and backend auth data
//       localStorage.setItem("user", JSON.stringify(decoded));
//       // localStorage.setItem("authToken", data.token);
//       localStorage.setItem("token", data.token);

      
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Authentication error:", error);
//       alert("Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Sign in with Google</h2>
//       <GoogleLogin
//         onSuccess={handleSuccess}
//         onError={() => {
//           console.log("Google Login Failed");
//           alert("Google login failed. Please try again.");
//         }}
//         useOneTap
//         auto_select
//         theme="filled_blue"
//         size="large"
//         shape="rectangular"
//         text="signin_with"
//       />
//     </div>
//   );
// };

// export default SignIn;









// import React from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import jwtDecode from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import styles from './SignIn.module.css';

// const SignIn = () => {
//   const navigate = useNavigate();
//   const clientId = "685059091467-ndg1vck5l9e7cuu745r5n9hbuqne567a.apps.googleusercontent.com";

//   const handleSuccess = async (credentialResponse) => {
//     try {
//       const decoded = jwtDecode(credentialResponse.credential);
//       console.log("Google user:", decoded);
      
//       const response = await fetch("http://localhost:8000/auth/google", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token: credentialResponse.credential })
//       });

//       if (!response.ok) throw new Error("Authentication failed");
      
//       const data = await response.json();
//       localStorage.setItem("token", data.token);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Login failed. Please try again.");
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Sign in with Google</h2>
//         <GoogleLogin
//           onSuccess={handleSuccess}
//           onError={() => console.log("Login Failed")}
//           useOneTap
//           auto_select
//           theme="filled_blue"
//           size="large"
//           shape="rectangular"
//           text="signin_with"
//         />
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default SignIn;










import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import styles from './SignIn.module.css';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google user:", decoded);
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: credentialResponse.credential }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Authentication failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
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
    </GoogleOAuthProvider>
  );
};

export default SignIn;