import { useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import Navbar from "../../components/Home/Navbar"

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
    </ThemeContext.Provider>
  );
};

export default Home;
