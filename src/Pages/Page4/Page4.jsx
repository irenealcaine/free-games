import "./Page4.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../Components/Button/Button";
import Tag from "../../Components/Tag/Tag";
import Hr from "../../Components/Hr/Hr";
import Content from "../../Components/Content/Content";
import { exploreGamesExample } from "../../Data/ExploreGames";

const Page4 = () => {

  const [exploreGames, setExploreGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   async function obtenerExplore() {
  //     const url = "https://api.gamebrain.co/v1/games?query=simulation";
  //     try {
  //       const res = await axios.get(url, {
  //         headers: {
  //           'x-api-key': process.env.REACT_APP_GAMEBRAIN_KEY,
  //         },
  //       });

  //       setExploreGames(res.data.results);
  //       setLoading(false)


  //     } catch (err) {
  //       console.error("Error al obtener el JSON:", err);
  //       setLoading(false)
  //       setError("Error al obtener datos")
  //     }
  //   }
  //   obtenerExplore();

  // }, []);

  useEffect(() => {
    setExploreGames(exploreGamesExample);
    setLoading(false);
  }, []);

  return (
    <div className="page4">
      <h1>Page 4</h1>
      {console.log(exploreGames)}

      <Content
        loading={loading}
        error={error}
      >
        {exploreGames.map((game) => (
          <div>
            <h2>{game.name}</h2>
            <img src={game.image}/>
            <p>{game.genre}</p>
            <p>{game.year}</p>
            <p>{game.rating.mean} - {game.rating.count}</p>
            {game.short_description ? <p>{game.short_description}</p> : null}
            {game.screenshots 
            ? <div>
              <h3>Screenshots</h3>
              {game.screenshots.map((image)=>(
                <img src={image}/>
              ))}
              
              </div>
            : null}

            

          </div>
        ))}
      </Content>
    </div>
  );
};

export default Page4;
