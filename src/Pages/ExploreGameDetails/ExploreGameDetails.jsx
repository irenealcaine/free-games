import axios from "axios";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { exploreGameDetailsExample } from "../../Data/ExploreGameDetails";
import Button from "../../Components/Button/Button";
import Tag from "../../Components/Tag/Tag";
import "./ExploreGameDetails.css";

const ExploreGameDetailsPage = () => {
  const [exploreGameDetails, setExploreGameDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  //     useEffect(() => {
  //     async function obtenerExploreDetails() {
  //       setLoading(true)
  //       const url = "https://api.gamebrain.co/v1/games/";
  //       try {
  //         const res = await axios.get(url + id, {
  //           headers: {
  //             'x-api-key': process.env.REACT_APP_GAMEBRAIN_KEY,
  //           },
  //         });

  //         setExploreGameDetails(res.data);
  //         setLoading(false)

  //       } catch (err) {
  //         console.error("Error al obtener el JSON:", err);
  //         setLoading(false)
  //         setError("Error al obtener datos")
  //       }
  //     }
  //     obtenerExploreDetails();
  //   }, []);

  useEffect(() => {
    setExploreGameDetails(exploreGameDetailsExample);
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>{exploreGameDetails.name}</h1>
      {console.log(exploreGameDetails)}
      <p>
        {exploreGameDetails.description
          ? exploreGameDetails.description
          : exploreGameDetails.short_description
          ? exploreGameDetails.short_description
          : null}
      </p>
      <p>{exploreGameDetails.developer}</p>
      <p>{exploreGameDetails.genre}</p>
      <p>{exploreGameDetails.release_date}</p>
      {exploreGameDetails.adult_only ? <p>adult_only</p> : null}
      {exploreGameDetails.genres ? (
        <div>
          <h2>Genres</h2>
          {exploreGameDetails.genres.map((genre) => (
            <p>{genre.name}</p>
          ))}
        </div>
      ) : null}

      {exploreGameDetails.play_modes ? (
        <div>
          <h2>play_modes</h2>
          {exploreGameDetails.play_modes.map((mode) => (
            <p>{mode.name}</p>
          ))}
        </div>
      ) : null}

      {exploreGameDetails.tags ? (
        <div>
          <h2>tags</h2>
          {exploreGameDetails.tags.map((tag) => (
            <Tag tag={tag.name} />
          ))}
        </div>
      ) : null}

      {exploreGameDetails.themes ? (
        <div>
          <h2>themes</h2>
          {exploreGameDetails.themes.map((theme) => (
            <Tag tag={theme.name} />
          ))}
        </div>
      ) : null}

      {exploreGameDetails.platforms ? (
        <div>
          <h2>platforms</h2>
          {exploreGameDetails.platforms.map((platform) => (
            <Tag tag={platform.name} />
          ))}
        </div>
      ) : null}

      {exploreGameDetails.official_stores ? (
        <div>
          <h2>official_stores</h2>
          {exploreGameDetails.official_stores.map((store) => (
            <Button href={store.url} value={store.source} />
          ))}
        </div>
      ) : null}

      <Button href={exploreGameDetails.link} value={"Link"} />
      {exploreGameDetails.offers ? (
        <div>
          <h2>Offers</h2>
          {exploreGameDetails.offers.map((offer) => (
            <div>
              <p>
                {offer.platform} - {offer.store_name}
              </p>
              <p>
                {offer.price.value} - {offer.price.currency}
                {offer.price.discount_percent ? (
                  <span> - {offer.price.discount_percent}% discount</span>
                ) : null}
              </p>
              <Button href={offer.url} value={"Link"} />
            </div>
          ))}
        </div>
      ) : null}

      {exploreGameDetails.rating ? (
        <div>
          <h2>Rating</h2>
          <p>Critic:</p>
          <p>
            {exploreGameDetails.rating.mean_critics} (
            {exploreGameDetails.rating.count_critics})
          </p>
          <p>Players:</p>
          <p>
            {exploreGameDetails.rating.mean_players} (
            {exploreGameDetails.rating.count_players})
          </p>
          <p>Total:</p>
          <p>{exploreGameDetails.rating.mean}</p>
        </div>
      ) : null}

      <img src={exploreGameDetails.image} />

      {exploreGameDetails.screenshots ? (
        <div>
          <h2>screenshots</h2>
          <div className="images-grid">
            {exploreGameDetails.screenshots.map((screenshot) => (
              <img src={screenshot} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ExploreGameDetailsPage;
