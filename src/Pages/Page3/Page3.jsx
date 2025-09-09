import { useEffect, useState } from "react";
import "./Page3.css"
import axios from "axios";
import Button from "../../Components/Button/Button";
import Tag from "../../Components/Tag/Tag";
import Hr from "../../Components/Hr/Hr";
import Content from "../../Components/Content/Content";

const Page3 = () => {

    const [GFNGames, setGFNGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function obtenerJuegosGFN() {
            const url = "https://static.nvidiagrid.net/supported-public-game-list/locales/gfnpc-en-US.json";
            try {
                const res = await axios.get(url);
                const juegos = res.data;
                setGFNGames(res.data);
                setLoading(false)


            } catch (err) {
                console.error("Error al obtener el JSON:", err);
                setLoading(false)
                setError("Error al obtener datos")
            }
        }
        obtenerJuegosGFN();

    }, []);

    return (
        <div className='page3'>
            <h1>GeForce Now Games</h1>
            <Content
                loading={loading}
                error={error}
            >
                {GFNGames.map((game) => (
                    <div>
                        <h2>{game.title}</h2>
                        <p>Store: {" "}
                            {game.store == "Steam"
                                ? <Button href={`${game.steamUrl}`} value={game.store} />
                                : <span>{game.store}</span>
                            }
                        </p>
                        <p>Publisher: {game.publisher}</p>
                        <div className="tags">Genres:
                            {game?.genres.map((genre) => (
                                <Tag tag={genre} />
                            ))}
                        </div>
                        <p>status: {game.status}</p>
                        <p>isFullyOptimized: {game.isFullyOptimized ? "YAS" : "NAH"}</p>
                        <Hr />
                    </div>
                ))}
            </Content>
        </div>
    )
}

export default Page3