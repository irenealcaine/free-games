import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";
import FreeGamesPage from "./Pages/FreeGames/FreeGames";
import GameDetailsPage from "./Pages/GameDetails/GameDetails";
import ExploreGameDetailsPage from "./Pages/ExploreGameDetails/ExploreGameDetails";

function App() {
  return (
    <div className={`app`}>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/free-games" element={<FreeGamesPage />} />
            <Route path="/game/:id" element={<GameDetailsPage />} />
            <Route path="/giveaways" element={<Page2 />} />
            <Route path="/gfn-games" element={<Page3 />} />s
            <Route path="/explore" element={<Page4 />} />
            <Route path="/explore-game-details/:id" element={<ExploreGameDetailsPage />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
