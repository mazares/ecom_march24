import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Header.css";

export default function Header(params) {
  const { dispatch } = useContext(ThemeContext);

  const theme = Object.values(useContext(ThemeContext))[0].toString();

  return (
    <header className="header">
      <button
        style={{
          boxShadow:
            theme === "dark"
              ? `0 0 20px rgba(6, 207, 247, 0.835), inset 0 0 20px rgba(6, 207, 247, 0.835)`
              : `0 0 20px rgba(239, 247, 6, 0.835), inset 0 0 20px rgba(247, 239, 6, 0.835)`,
        }}
        className="toggle-theme"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        <h1>{theme === "dark" ? "light" : "dark"}</h1>
      </button>
      <div className="course-title">
        <h2>Artoscopia genunchiului</h2>
      </div>
    </header>
  );
}
