import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [myUser, setMyUser] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(myUser);

  const getUsers = async () => {
    try {
      const res = await API.get("/viewalluser");
      setMyUser(res.data.data);
    } catch (error) {
      console.log("Failed ot fetch users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading)
    return <HashLoader size={50} color="#7e22ce" className=" mx-auto mt-10" />;

  return (
    <div className=" max-w-[1250px] mx-auto">
      <section className=" py-6">
        <h1 style={{ fontFamily: "WDXL Lubrifont TC" }}>Our Users</h1>
      </section>
      <section className=" flex flex-wrap">
        {myUser.map((allUserData) => (
          <main className=" bg-white h-40 p-5 sm:w-80 rounded-md m-2.5 w-full">
            <div className=" flex items-center">
              <div className=" h-16 w-16 bg-purple-400 text-white rounded-full flex justify-center items-center text-3xl font-bold mr-3">
                {allUserData?.username?.charAt()}
              </div>
              <div>
                <h2 className=" font-black text-2xl">
                  {" "}
                  {allUserData.username}{" "}
                </h2>
                <p> {allUserData.email} </p>
              </div>
            </div>
            <Link to={`/details/${allUserData._id}`}>
              <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-purple-900 rounded-md">
                View Detail
              </button>
            </Link>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Home;
