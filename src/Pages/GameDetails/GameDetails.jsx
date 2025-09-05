import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import axios from "axios";
import "./GameDetails.css"
import Tag from "../../Components/Tag/Tag";


const GameDetailsPage = () => {

  const { id } = useParams();
  const [game, setGame] = useState([]);
  const { darkMode } = useContext(DarkModeContext);


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
        <div className={`game-info ${darkMode ? "dark" : null}`}>
          <h1>{game.title}</h1>
          <div className="tags">
            <Tag tag={game.genre} />
            <Tag tag={game.platform} />
          </div>
          <p>Developed by <span>{game.developer}</span></p>
          <p>Published by <span>{game.publisher}</span></p>
          <p>Released in <span>{game.release_date}</span></p>
        </div>
      </div>
      <p className={`game-description ${darkMode ? "dark" : null}`}>{game.description}</p>

      {/* <p>{game.status}</p> */}

      {game.minimum_system_requirements
        ? <div className="game-requirements">
          <h2>Minimum system requirements</h2>
          <ul className="requirements">
            {Object.entries(game.minimum_system_requirements).map(([key, value]) =>
              value ? (
                <li className="requirement" key={key}>
                  {key}: <span>{value}</span>
                </li>
              ) : null
            )}
          </ul>
        </div>
        : ""}

      <h2>Game screenshots</h2>

      {game.screenshots ? <div className="game-images">
        {game.screenshots.map((img) => (
          <img src={img.image} />
        ))}
      </div> : null}
    </div>


  );
};

export default GameDetailsPage;