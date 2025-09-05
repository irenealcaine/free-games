import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


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
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <img src={game.thumbnail} />
      <p>{game.developer}</p>
      <p>{game.publisher}</p>
      <p>{game.genre}</p>
      <p>{game.platform}</p>
      <p>{game.release_date}</p>
      <p>{game.status}</p>
      {game.minimum_system_requirements
        ? <div>
          <p>minimum system requirements</p>
          {Object.entries(game.minimum_system_requirements).map(([key, value]) =>
            value ? (
              <p key={key}>
                {key}: <span>{value}</span>
              </p>
            ) : null
          )}
        </div>
        : ""}

      {game.screenshots ? <div>
        {game.screenshots.map((img) => (
          <img src={img.image} />
        ))}
      </div> : ""}
      {console.log(game)}
    </div>
  );
};

export default GameDetailsPage;