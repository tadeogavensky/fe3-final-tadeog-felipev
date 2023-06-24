import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { THEME } from "../assets/themes/theme";
import img from "../assets/images/DH.png";

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
      <img src={img}></img>

      <div className="row">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/favs"}>Favs</Link>
      </div>

      <label class="toggle">
        <span class="icon sun"></span>
        <span class="icon moon"></span>
        <input onClick={toggleTheme} type="checkbox"/>
        <span class="slider"></span>
      </label>

    </nav>
  );
};

export default Navbar;
