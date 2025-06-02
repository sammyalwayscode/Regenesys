import React from "react";

const Header = () => {
  return (
    <div>
      <header className=" h-24 bg-purple-400 flex justify-between items-center px-14">
        <img src="/vite.svg" alt="" className=" w-18" />
        <button className=" h-11 w-40 bg-purple-800 rounded-2xl text-white font-bold">
          Create New User
        </button>
      </header>
    </div>
  );
};

export default Header;
