import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Main.css";
import { DarkModeContext } from "../../Context/darkModeContext";

const Main = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
