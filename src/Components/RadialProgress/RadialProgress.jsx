
import "./RadialProgress.css"
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const RadialProgress = ({ size, number }) => {
     const { darkMode } = useContext(DarkModeContext);

    return (
        <p className={`radial-progress ${darkMode && "dark"}`} style={{ "--percent": `${number}`, "--size": `${size}px` }}>
            <span className="number">{number}</span>
        </p>
    );
};

export default RadialProgress;