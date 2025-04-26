import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_wrapper">
        <div className="home_welcome_container">
          <h1>Welcome to OBS</h1>
          <p>
            Discover a world of Books at your FingerTips, Become a Creator and a
            Reader
          </p>
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
