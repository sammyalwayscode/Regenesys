import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerContainer">
      <Link to="/">
        <nav>Home</nav>
      </Link>
      <Link to="/myabout">
        <nav>About</nav>
      </Link>
      <Link to="/services">
        <nav>Services</nav>
      </Link>

      <Link to="/contact">
        <nav>Contact</nav>
      </Link>
    </div>
  );
};

export default Header;
