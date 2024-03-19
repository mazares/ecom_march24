import React, { createContext, useReducer } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

/**
 * Provides the theme context for the application.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
