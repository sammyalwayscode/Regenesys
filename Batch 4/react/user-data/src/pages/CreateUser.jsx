import React, { useState } from "react";
import API from "../api/api";
import Loading from "../utils/Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUserName] = useState("");
  const [email, serEmail] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await API.post("/newuser", { username, email, age, address, bio }).then(
        () => {
          Swal.fire({
            title: "Great!!!",
            text: "A new user has been Created",
            icon: "success",
          });
          setLoading(false);
          navigate("/");
        }
      );
      setUserName("");
      serEmail("");
      setAge("");
      setAddress("");
      setBio("");
    } catch (error) {
      console.log("Error from the catch", error);

      Swal.fire({
        title: error.response.data.message,
        text: error.response.data.data.message,
        icon: "error",
      });
      setLoading(false);
    }
  };

  console.log(username);
  return (
    <>
      {loading ? <Loading /> : null}
      <div>
        <form
          onSubmit={submitForm}
          className=" bg-white max-w-[600px] mx-auto px-20 py-10 my-10 rounded-sm"
        >
          <h1 style={{ fontFamily: "WDXL Lubrifont TC" }}>Create New User</h1>
          <main className=" flex flex-col my-3">
            <label htmlFor="">
              Name <span className=" text-red-500"> *</span>{" "}
            </label>
            <input
              type="text"
              placeholder="Enter Your name"
              required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
            />
          </main>
          <main className=" flex flex-col my-3">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Your mail"
              required
              value={email}
              onChange={(e) => {
                serEmail(e.target.value);
              }}
              className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
            />
          </main>
          <main className=" flex flex-col my-3">
            <label htmlFor="">Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="Enter Your age"
              className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
            />
          </main>
          <main className=" flex flex-col my-3">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
            />
          </main>
          <main className=" flex flex-col my-3">
            <label htmlFor="">Bio</label>
            <input
              type="text"
              placeholder="Enter Your bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
              className=" bg-gray-100 h-20 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
            />
          </main>
          <button
            type="submit"
            className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-purple-900 rounded-md"
          >
            Create New User
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
