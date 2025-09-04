import "./Button.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Button = ({ value, onClick, className, color, disabled, href, to }) => {
  const { darkMode } = useContext(DarkModeContext);

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`button ${color} ${className} ${darkMode ? "dark" : ""}`}
      >
        {value}
      </a>
    );
  }

  if (to && !disabled) {
    return (
      <Link
        to={to}
        className={`button ${color} ${className} ${darkMode ? "dark" : ""}`}
      >
        {value}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`button ${!disabled ? color : "disabled"} ${className} ${darkMode ? "dark" : ""
        }`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;