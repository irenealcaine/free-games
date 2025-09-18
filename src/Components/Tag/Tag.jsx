import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import "./Tag.css";

const Tag = ({ tag, color }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`tag ${color ? color : ""} ${darkMode ? "dark" : ""}`}>
      {tag}
    </div>
  );
};

export default Tag;
