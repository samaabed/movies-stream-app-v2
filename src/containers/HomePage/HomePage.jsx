import MainContent from "../../components/Home/MainContent";
import Navbar from "../../components/Home/Navbar";
import LeftSidebar from "../../components/Home/LeftSidebar";
import styles from "./HomePage.module.css";
import RightSidebar from "../../components/Home/RightSidebar/RightSidebar";
import { useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

    </ThemeContext.Provider>
  );
};

export default Home;
