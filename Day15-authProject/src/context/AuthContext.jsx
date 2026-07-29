import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registerdUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );
  return (
    <Auth.Provider
      value={{ registerUser, setRegisterUser, loggedInUser, setLoggedInUser }}
    >
      {children}
    </Auth.Provider>
  );
};
