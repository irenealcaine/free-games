import axios from "axios";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { exploreGameDetailsExample } from "../../Data/ExploreGameDetails";


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
            <p>{exploreGameDetails.short_description}</p>
            <p>{exploreGameDetails.description}</p>
            <p>{exploreGameDetails.developer}</p>
            <p>{exploreGameDetails.genre}</p>
            <p>{exploreGameDetails.release_date}</p>


        </div>
    );
};

export default ExploreGameDetailsPage;