import "./FreeGames.css";
import axios from "axios";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

import { useEffect, useState } from "react";
import GameCard from "../../Components/GameCard/GameCard";
import Loader from "../../Components/Loader/Loader";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Content from "../../Components/Content/Content";

const FreeGamesPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        setLoading(false)
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setLoading(false)
        setError("Error al obtener datos")
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page1">
      <h1>Free games</h1>

      <Content
        loading={loading}
        error={error}
      >
        <div className="games-grid">
          {games.map((game) => (
            <GameCard
              id={game.id}
              img={game.thumbnail}
              alt={game.title}
              title={game.title}
              genre={game.genre}
              platform={game.platform}
              description={game.short_description}
              url={game.game_url}
            />
          ))}
        </div>
      </Content>

    </div>
  );
};

export default FreeGamesPage;
