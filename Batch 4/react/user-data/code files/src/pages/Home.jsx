import React from "react";

const Home = () => {
  return (
    <div className=" max-w-[1250px] mx-auto">
      <section className=" py-6">
        <h1 style={{ fontFamily: "WDXL Lubrifont TC" }}>Our Users</h1>
      </section>
      <section className=" flex">
        <main className=" bg-white h-40 p-5 w-80 rounded-md m-2.5">
          <div className=" flex items-center">
            <div className=" h-16 w-16 bg-purple-400 text-white rounded-full flex justify-center items-center text-3xl font-bold mr-3">
              S
            </div>
            <div>
              <h2 className=" font-black text-2xl">Sammy</h2>
              <p>sam@gmail.com</p>
            </div>
          </div>
          <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-purple-900 rounded-md">
            View Detail
          </button>
        </main>
        <main className=" bg-white h-40 p-5 w-80 rounded-md m-2.5">
          <div className=" flex items-center">
            <div className=" h-16 w-16 bg-purple-400 text-white rounded-full flex justify-center items-center text-3xl font-bold mr-3">
              S
            </div>
            <div>
              <h2 className=" font-black text-2xl">Sammy</h2>
              <p>sam@gmail.com</p>
            </div>
          </div>
          <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-purple-900 rounded-md">
            View Detail
          </button>
        </main>
        <main className=" bg-white h-40 p-5 w-80 rounded-md m-2.5">
          <div className=" flex items-center">
            <div className=" h-16 w-16 bg-purple-400 text-white rounded-full flex justify-center items-center text-3xl font-bold mr-3">
              S
            </div>
            <div>
              <h2 className=" font-black text-2xl">Sammy</h2>
              <p>sam@gmail.com</p>
            </div>
          </div>
          <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-purple-900 rounded-md">
            View Detail
          </button>
        </main>
      </section>
    </div>
  );
};

export default Home;
