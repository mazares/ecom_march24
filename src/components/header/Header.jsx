import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import AuthContext from "../../context/AuthContext";
import "./Header.css";

export default function Header(params) {
  const { theme, dispatch: themeDispatch } = useContext(ThemeContext);
  const { language, dispatch: languageDispatch } = useContext(LanguageContext);
  const { auth, dispatch: authDispatch } = useContext(AuthContext);

  console.log(AuthContext);

  return (
    <header className="header">
      <div className="header-control">
        <button
          className="lang-btn"
          style={{
            boxShadow:
              theme === "dark"
                ? `0 0 20px rgba(6, 207, 247, 0.835), inset 0 0 20px rgba(6, 207, 247, 0.835)`
                : `0 0 20px rgba(70, 70, 70, 0.835), inset 0 0 20px rgba(70, 70, 70, 0.835)`,
          }}
          onClick={() => languageDispatch({ type: "TOGGLE_LANGUAGE" })}
        >
          <h3>{language === "en" ? "ro" : "en"}</h3>
        </button>
        <button
          className="toggle-theme"
          style={{
            boxShadow:
              theme === "dark"
                ? `0 0 20px rgba(6, 207, 247, 0.835), inset 0 0 20px rgba(6, 207, 247, 0.835)`
                : `0 0 20px rgba(70, 70, 70, 0.835), inset 0 0 20px rgba(70, 70, 70, 0.835)`,
          }}
          onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
        >
          <h3>{theme === "light" ? "dark" : "light"}</h3>
        </button>
        <button
          className="login-btn"
          style={{
            boxShadow:
              theme === "dark"
                ? `0 0 20px rgba(6, 207, 247, 0.835), inset 0 0 20px rgba(6, 207, 247, 0.835)`
                : `0 0 20px rgba(70, 70, 70, 0.835), inset 0 0 20px rgba(70, 70, 70, 0.835)`,
          }}
          onClick={() => authDispatch({ type: auth ? "LOGOUT" : "LOGIN" })}
        >
          <h3>{auth ? "Logout" : "Login"}</h3>
        </button>
      </div>

      <div className="course-title">
        <h2>Cursuri</h2>
      </div>
    </header>
  );
}

// export default function Header(params) {
//   const { dispatch: themeDispatch } = useContext(ThemeContext);
//   const { language, dispatch: languageDispatch } = useContext(LanguageContext);
//   const { auth } = useContext(AuthContext);

//   const theme = Object.values(useContext(ThemeContext))[0].toString();

//   console.log(lang);

//   return (
//     <header className="header">
//       <div className="header-control">
//         <button
//           style={{
//             boxShadow:
//               theme === "dark"
//                 ? `0 0 20px rgba(6, 207, 247, 0.835), inset 0 0 20px rgba(6, 207, 247, 0.835)`
//                 : `0 0 20px rgba(70, 70, 70, 0.835), inset 0 0 20px rgba(70, 70, 70, 0.835)`,
//           }}
//           className="lang-btn"
//           onClick={() => languageDispatch({ type: "TOGGLE_LANGUAGE" })}
//         >
//           <h3>ro</h3>
//         </button>

//         <button
//           style={{
//             boxShadow:
//               theme === "dark"
//                 ? `0 0 20px rgba(6, 207, 247, 0.835), inset 0 0 20px rgba(6, 207, 247, 0.835)`
//                 : `0 0 20px rgba(70, 70, 70, 0.835), inset 0 0 20px rgba(70, 70, 70, 0.835)`,
//           }}
//           className="login-btn"
//         >
//           <h3>Login</h3>
//         </button>

//         <button
//           style={{
//             boxShadow:
//               theme === "dark"
//                 ? `0 0 20px rgba(6, 207, 247, 0.835), inset 0 0 20px rgba(6, 207, 247, 0.835)`
//                 : `0 0 20px rgba(70, 70, 70, 0.835), inset 0 0 20px rgba(70, 70, 70, 0.835)`,
//           }}
//           className="toggle-theme"
//           onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
//         >
//           <h3>{theme === "dark" ? "light" : "dark"}</h3>
//         </button>
//       </div>

//       <div className="course-title">
//         <h2>Cursuri</h2>
//       </div>
//     </header>
//   );
// }
