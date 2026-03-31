import { Link } from "react-router-dom";
import logo from "../assets/LOGO.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="logo" />

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;