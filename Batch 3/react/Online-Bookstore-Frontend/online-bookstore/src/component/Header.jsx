import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const getUserNameFromState = useSelector((state) => state.createdUsers);
  return (
    <div>
      <header>
        <Link to="/bookstore">
          <img src="./orange.png" alt="Logo" />
        </Link>
        <section className="btn_section">
          <Link to="/createbook">
            <button>New Book</button>
          </Link>
          <button>LogOut</button>
          <div className="first_letter">
            {" "}
            {getUserNameFromState?.username?.charAt()}{" "}
          </div>
          <div> {getUserNameFromState?.username} </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
