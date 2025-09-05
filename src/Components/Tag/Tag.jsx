import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import "./Tag.css"

const Tag = ({ tag }) => {

    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`tag ${darkMode ? "dark" : ""}`}>{tag}</div>
    );
};

export default Tag;