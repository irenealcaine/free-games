
import "./RadialProgress.css"
const RadialProgress = ({ size, number }) => {
    return (
        <p className={`radial-progress`} style={{ "--percent": `${number}`, "--size": `${size}px` }}>
            <span className="number">{number}</span>
        </p>
    );
};

export default RadialProgress;