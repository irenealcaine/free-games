import { useContext } from "react";
import "./Header.css";
import logo from "../../Assets/Images/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { navbarItems } from "../../Utils/Constants";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { DarkModeContext } from "../../Context/darkModeContext";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuActiveClass = isMenuOpen ? "active" : "";
  const { darkMode } = useContext(DarkModeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`header ${darkMode ? "dark" : ""}`}>
      <Link to={"/"} onClick={() => setIsMenuOpen(false)} className="logo-link">
        <img
          src={logo}
          alt={"Logo"}
          className={`logo ${darkMode ? "dark" : ""}`}
        />
      </Link>

      <ul className={`navigation ${menuActiveClass} ${darkMode ? "dark" : ""}`}>
        {navbarItems.map((navbarItem) => (
          <li key={navbarItem.slug} onClick={() => setIsMenuOpen(false)}>
            <Link
              to={`/${navbarItem.slug}`}
              className={`navigation-item ${
                location.pathname === `/${navbarItem.slug}` && "active"
              } ${darkMode ? "dark" : ""}`}
            >
              {navbarItem.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`menu-toggle ${menuActiveClass} `} onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Header;
