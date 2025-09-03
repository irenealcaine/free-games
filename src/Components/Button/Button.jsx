import "./Button.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const Button = ({ value, onClick, className, color, disabled, href }) => {
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