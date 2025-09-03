import "./Page1.css";
import axios from "axios";

import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";

const Page1 = () => {
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
          <div key={game.id} className="game-card">
            <h2>{game.title}</h2>
            <img src={game.thumbnail} alt={game.title} />
            <p>{game.short_description}</p>
            <p>
              {game.genre} • {game.platform}
            </p>
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
