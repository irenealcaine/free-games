import { useContext } from "react";
import { navbarItems,socialMediaItems } from "../../Utils/Constants";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { MdOutlineLightMode,MdOutlineNightlight  } from "react-icons/md";

const Footer = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  const location = useLocation();

  return (
    <nav className={` footer ${darkMode ? "dark" : ""}`}>
      <ul className="footer-list">
        {socialMediaItems.map((SMItem) => (
          <li
            key={SMItem.name}
            className={`footer-item ${darkMode ? "dark" : ""}`}
          >
            <a href={SMItem.url} target="_blank">{SMItem.icon}</a>
          </li>
        ))}

        <div
          className="footer-item color-option"
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
        </div>

      </ul>
      
    </nav>
  );
};

export default Footer;
