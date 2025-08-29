import { useContext } from "react";
import { navbarItems } from "../../Utils/Constants";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";

const Footer = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  const location = useLocation();

  return (
    <nav className={` footer ${darkMode ? "dark" : ""}`}>
      <ul className="footer-list">
        {navbarItems.map((navbarItem) => (
          <li
            key={navbarItem.slug}
            className={`footer-item ${
              location.pathname === `/${navbarItem.slug}` && "active"
            } ${darkMode ? "dark" : ""}`}
          >
            <Link to={`/${navbarItem.slug}`}>{navbarItem.name}</Link>
          </li>
        ))}
      </ul>
      <div className="color-options">
        <div
          className="color-option"
          onClick={() => dispatch({ type: "LIGHT" })}
        >
          ⚪
        </div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "DARK" })}
        >
          ⚫
        </div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          {darkMode ? "☀️" : "🌙"}
        </div>
      </div>
    </nav>
  );
};

export default Footer;
