import React, { useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ThemeContext from "./context/ThemeContext";
import LanguageContext from "./context/LanguageContext";
import AuthContext from "./context/AuthContext";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
