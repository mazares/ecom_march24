import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

const ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, isAuthenticated: true };
    case ACTIONS.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, { isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
