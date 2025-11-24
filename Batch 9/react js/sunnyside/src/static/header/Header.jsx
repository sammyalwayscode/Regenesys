import "./Header.css";
import Logo from "../../assets/logo.svg";
import HambuggerMenu from "../../assets/icon-hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="headerContainer">
        <section className="logo">
          <img src={Logo} alt="" />
        </section>
        <section className="navigation">
          <Link to="/about">
            <nav>About</nav>
          </Link>
          <Link to="/services">
            <nav>Services</nav>
          </Link>

          <nav>Project</nav>
          <button>Contact</button>
        </section>
        <section className="buggerMenu" onClick={toggleSwitch}>
          <img src={HambuggerMenu} alt="" />
        </section>
      </div>
      {toggle ? (
        <div className="sidebar">
          <Link to="/about">
            <nav>About</nav>
          </Link>
          <Link to="/services">
            <nav>Services</nav>
          </Link>
          <nav>Project</nav>
          <button>Contact</button>
        </div>
      ) : null}
    </>
  );
};

export default Header;
