import { Link } from "react-router-dom";
import "./BackButton.css"
import { AiOutlineLeft } from 'react-icons/ai'
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const BackButton = ({ to, value }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (

    <Link to={to} className={`backButton ${darkMode ? "dark" : null}`}><span><AiOutlineLeft /></span>{value}</Link>

  )
}

export default BackButton;