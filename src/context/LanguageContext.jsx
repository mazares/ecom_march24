import React, { createContext, useReducer } from "react";

const LanguageContext = createContext();

const languageReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
      return state === "ro" ? "en" : "ro";
    default:
      return state;
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, dispatch] = useReducer(languageReducer, "ro");

  return (
    <LanguageContext.Provider value={{ language, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
