import "./Page1.css";
import axios from "axios";

import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";

const Page1 = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("URL:", process.env.REACT_APP_URL);
  console.log("HOST:", process.env.REACT_APP_HOST);
  console.log("KEY:", process.env.REACT_APP_KEY);

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
        // console.log(gameData)
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
          <div key={game.id} className="game-card">
            <h2>{game.title}</h2>
            <img src={game.thumbnail} alt={game.title} />
            <p>
              {game.genre} • {game.platform}
            </p>
            <Button value={"Ver detalles"} />
            <Button value={"Ir a la páina del juego"} color={"secondary"} />
            <a href={game.game_url} target="_blank" rel="noreferrer">
              Ver juego
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
