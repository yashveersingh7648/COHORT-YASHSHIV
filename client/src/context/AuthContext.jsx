
// 07-08-25
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [agencyUser, setAgencyUser] = useState(null);
  const [businessUser, setBusinessUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedAgencyUser = localStorage.getItem("agencyUser");
        const storedBusinessUser = localStorage.getItem("businessUser");
        
        if (storedAgencyUser) {
          setAgencyUser(JSON.parse(storedAgencyUser));
        }
        
        if (storedBusinessUser) {
          setBusinessUser(JSON.parse(storedBusinessUser));
        }
      } catch (error) {
        console.error("Failed to initialize auth:", error);
        localStorage.removeItem("agencyUser");
        localStorage.removeItem("businessUser");
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

 const loginAgency = async (userData) => {
  try {
    if (!userData?.email) {
      throw new Error("Invalid agency user data - email required");
    }
    
    const userToStore = {
      id: userData.id || userData.email, // Use email as fallback ID
      email: userData.email,
      name: userData.name || '',
      image: userData.image || null,
    };
    
    setAgencyUser(userToStore);
    localStorage.setItem("agencyUser", JSON.stringify(userToStore));
    return { success: true };
  } catch (error) {
    console.error("Agency login failed:", error);
    return { success: false, error: error.message };
  }
};

  const loginBusiness = async (userData) => {
  try {
    if (!userData?.email || !userData?.token) { // Token required check add karein
      throw new Error("Invalid business user data");
    }
    
    const userToStore = {
      id: userData.id || userData.email,
      email: userData.email,
      name: userData.name || '',
      isAdmin: userData.isAdmin || false,
      token: userData.token // Token store karein
    };
    
    setBusinessUser(userToStore);
    localStorage.setItem("businessUser", JSON.stringify(userToStore));
    localStorage.setItem("businessToken", userData.token); // Alag key use karein
    return { success: true };
  } catch (error) {
    console.error("Business login failed:", error);
    return { success: false, error: error.message };
  }
};

  const logoutAgency = () => {
    try {
      setAgencyUser(null);
      localStorage.removeItem("agencyUser");
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Agency logout failed:", error);
    }
  };

  const logoutBusiness = () => {
  try {
    setBusinessUser(null);
    localStorage.removeItem("businessUser");
    localStorage.removeItem("businessToken"); // Yeh line add karein
  } catch (error) {
    console.error("Business logout failed:", error);
  }
};

  const value = {
    user: agencyUser || businessUser,
    agencyUser,
    businessUser,
    isAgencyLoggedIn: !!agencyUser,
    isBusinessLoggedIn: !!businessUser,
    isLoading,
    loginAgency,
    loginBusiness,
    logoutAgency,
    logoutBusiness
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};