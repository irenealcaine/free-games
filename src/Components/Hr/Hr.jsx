import "./Hr.css"
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const Hr = () => {

  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <hr className={`hr ${darkMode ? "dark" : null}`}/>
  );
};

export default Hr;