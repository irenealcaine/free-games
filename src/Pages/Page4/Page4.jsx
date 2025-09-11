import "./Page4.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Content from "../../Components/Content/Content";
import { exploreGamesExample } from "../../Data/ExploreGames";
import ExploreCard from "../../Components/ExploreCadrd/ExploreCard";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const Page4 = () => {

  const [exploreGames, setExploreGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   async function obtenerExplore() {
  //     setLoading(true)
  //     const url = "https://api.gamebrain.co/v1/games?query=";
  //     try {
  //       const res = await axios.get(url + query, {
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
  //   {console.log(query)}
  // }, [query]);


  useEffect(() => {
    setExploreGames(exploreGamesExample);
    setLoading(false);
  }, []);

  return (
    <div className="page4">
      <h1>Page 4</h1>

      <h2>What are you looking for?</h2>
      <div className="form">
        <Input 
        placeholder={"space games, simulations, fantasy games..."}
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        />
        <Button 
        value={"Search"} 
        onClick={() => setQuery(inputValue)}
        />
      </div>


      <Content
        loading={loading}
        error={error}
      >
        <div className="explore-grid">
          {exploreGames.map((game) => (
            <ExploreCard
              id={game.id}
              name={game.name}
              image={game.image}
              genre={game.genre}
              link={game.link}
              year={game.year}
              ratingMean={game.rating.mean}
              ratingCount={game.rating.count}
              description={game.short_description}
              screenshots={game.screenshots}
              adult={game.adult_only}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export default Page4;
