import "./Page1.css";
import axios from "axios";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";

const Page1 = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_URL, {
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          },
        });

        setGames(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page1">
      <h1>Page 1</h1>

      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className={`game-card ${darkMode ? "dark" : ""}`}>
            <img src={game.thumbnail} alt={game.title} />
            <h2>{game.title}</h2>
            <div className={`tags`}>
              <div className={`tag ${darkMode ? "dark" : ""}`}>{game.genre}</div>
              <div className={`tag ${darkMode ? "dark" : ""}`}>{game.platform}</div>
            </div>
            <p className={`description ${darkMode ? "dark" : ""}`}>{game.short_description}</p>
            <div className="button-grid">
              <Button value={"Details"} className={"game-button"}/>
              <Button value={"Game's web"} color={"secondary"} href={game.game_url} className={"game-button"}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
