import React, { useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
