import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.svg";

function Header() {
  return (
    <header className="header">

      <Link to="/">
        <img src={logo} alt="Kasa" className="logo" />
      </Link>

      <nav>
        <NavLink to="/" className="nav-link">
          Accueil
        </NavLink>

        <NavLink to="/about" className="nav-link">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;