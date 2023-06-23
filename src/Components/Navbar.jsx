import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { THEME } from "../assets/themes/theme";
const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal);
  const { theme } = state;

  const toggleTheme = () => {
    const newTheme =
      theme === THEME.darkMode ? THEME.lightMode : THEME.darkMode;
    setTheme(newTheme);
  };

  return (
    <nav className={theme === THEME.darkMode ? "dark" : ""}>
      <div className="row">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/favs"}>Favs</Link>
      </div>

      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
