import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import "./GameCard.css"

const GameCard = ({id, img, alt, title, genre, platform, description, url}) => {
    const { darkMode } = useContext(DarkModeContext);
    
    return (
        <div key={id} className={`game-card ${darkMode ? "dark" : ""}`}>
            <img src={img} alt={alt} />
            <h2>{title}</h2>
            <div className={`tags`}>
              <Tag tag={genre}/>
              <Tag tag={platform}/>
            </div>
            <p className={`description ${darkMode ? "dark" : ""}`}>{description}</p>
            <div className="button-grid">
              <Button value={"Details"} to={`/game/${id}`} className={"game-button"}/>
              <Button value={"Game's web"} color={"secondary"} href={url} className={"game-button"}/>
            </div>
          </div>
  );
};

export default GameCard;