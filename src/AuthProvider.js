import axios from "axios";
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({
    isLoggedIn: JSON.parse(localStorage.getItem("isLogin"))?false:true,
    setIsLoggedIn: () => {},
    showNavbar: JSON.parse(localStorage.getItem("isLogin"))?false:true, // Initial navbar visibility
    setShowNavbar: () => {},
    showFooter: JSON.parse(localStorage.getItem("isLogin"))?false:true, // Initial footer visibility
    setShowFooter: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLogin"))?true:false); // Initial login state
  const [user, setUser] = useState({}); // User information
  const [showNavbar, setShowNavbar] = useState(JSON.parse(localStorage.getItem("isLogin"))?false:true);
  const [showFooter, setShowFooter] = useState(JSON.parse(localStorage.getItem("isLogin"))?false:true);


  
  const login = async (status) => {
    setIsLoggedIn(true);   
    setShowFooter(false);
    setShowNavbar(false); 
  };

  const SubscribeHandler = async (email) => {
    console.log(email);
    await axios.post('/api/v1/subscribe',{email},).then((res) => {
      console.log(res.data);
     
    }).catch((err) =>{
      console.log(err.response.data.message)

      // setError({email: err.response.data.message})
    }
    )

  }
  const logout = (status) => {
    setIsLoggedIn(false);
    setUser({});
    setShowFooter(true);
    setShowNavbar(true);
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, showNavbar, showFooter, toggleFooter, toggleNavbar, SubscribeHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
