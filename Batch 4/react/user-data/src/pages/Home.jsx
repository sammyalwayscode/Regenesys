import React from "react";

const Home = () => {
  return (
    <div className=" bg-gray-400">
      <header className=" h-24 bg-amber-500 flex justify-between items-center px-14">
        <img src="/vite.svg" alt="" className=" w-18" />
        <button className=" h-11 w-40 bg-blue-600 rounded-2xl text-white font-bold">
          Create New User
        </button>
      </header>
    </div>
  );
};

export default Home;
