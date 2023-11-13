import React, { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        persist: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
