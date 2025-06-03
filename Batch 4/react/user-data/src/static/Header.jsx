import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className=" h-24 bg-purple-400 flex justify-between items-center px-14">
        <Link to="/">
          <img src="/vite.svg" alt="" className=" w-18" />
        </Link>
        <Link to="/createusers">
          <button className=" h-11 w-40 bg-purple-800 rounded-2xl text-white font-bold">
            Create New User
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
