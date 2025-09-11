import "./Input.css"
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const Input = ({ placeholder,value, onChange }) => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <input
      className={`input ${darkMode && "dark"}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;