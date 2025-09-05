import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./GameDetails.css"


const GameDetailsPage = () => {

  const { id } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_URL_DETAILS, {
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          }, params: { id: id },
        });

        setGame(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="game-details">
      <div className="game-head">
        <img src={game.thumbnail} />
        <div className="game-info">
          <h1>{game.title}</h1>
          <p>Developer: {game.developer}</p>
          <p>Pueblisher: {game.publisher}</p>
          <p>Release date: {game.release_date}</p>
          <div>
            <p>{game.genre}</p>
            <p>{game.platform}</p>
          </div>
        </div>
      </div>
      <p className="game-description">{game.description}</p>
      <p>{game.status}</p>
      {game.minimum_system_requirements
        ? <div className="game-requirements">
          <h2>Minimum system requirements</h2>
          <div className="requirements">
          {Object.entries(game.minimum_system_requirements).map(([key, value]) =>
            value ? (
              <p className="requirement" key={key}>
                {key}: <span>{value}</span>
              </p>
            ) : null
          )}
          </div>
        </div>
        : ""}


      {game.screenshots ? <div className="game-images">
        {game.screenshots.map((img) => (
          <img src={img.image} />
        ))}
      </div> : null}
        </div>


  );
};

export default GameDetailsPage;