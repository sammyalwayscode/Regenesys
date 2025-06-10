import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";
import { CircleLoader } from "react-spinners";
import Swal from "sweetalert2";

const UserDetail = () => {
  const { id } = useParams();
  console.log("This is my id", id);
  const [oneUser, setOneUser] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(oneUser);
  const navigate = useNavigate();

  const getSingleUser = async () => {
    const res = await API.get(`/viewoneuser/${id}`);
    setOneUser(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  if (loading)
    return (
      <CircleLoader size={50} color="#7e22ce" className=" mx-auto mt-10" />
    );

  const deleteUser = async () => {
    const confim = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confim.isConfirmed) {
      try {
        await API.delete(`/removeuser/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/");
      } catch (error) {
        Swal.fire(error, "Failed to delete User", "error");
      }
    }
  };

  return (
    <div>
      <section className="  bg-white max-w-[900px] mx-auto my-12 px-20 py-10 rounded-lg">
        <div className=" h-32 w-32 bg-purple-400 text-white rounded-full flex justify-center items-center text-5xl font-bold mr-3">
          {oneUser?.username?.charAt()}
        </div>
        <br />
        <h2>
          {" "}
          <b>Name:</b> {oneUser.username}
        </h2>

        <p>
          {" "}
          <b>Email:</b> {oneUser.email}
        </p>
        <p>
          {" "}
          <b>Age:</b> {oneUser.age}
        </p>
        <p>
          {" "}
          <b>Address:</b> {oneUser.address}
        </p>
        <p>
          {" "}
          <b>Bio:</b> {oneUser.bio}
        </p>
        <main>
          <button className=" bg-amber-400 w-40 my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-amber-500 rounded-md mr-4">
            Edit Info
          </button>

          <button
            onClick={deleteUser}
            className=" bg-red-600 w-40 my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-red-700 rounded-md mr-4"
          >
            Delete Info
          </button>

          <button
            onClick={() => navigate("/")}
            className=" bg-blue-600 w-40 my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-blue-700 rounded-md"
          >
            Back to Home
          </button>
        </main>
      </section>
    </div>
  );
};

export default UserDetail;
