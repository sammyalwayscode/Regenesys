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

  const [showModal, setShowModal] = useState(false);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");

  console.log(oneUser);
  const navigate = useNavigate();

  const getSingleUser = async () => {
    // const res = await API.get(`/viewoneuser/${id}`);
    // setOneUser(res.data.data);
    // setLoading(false);

    const res = await API.get(`/viewoneuser/${id}`);
    const userData = res.data.data;
    setOneUser(userData);
    setUserName(userData.username);
    setEmail(userData.email);
    setAge(userData.age);
    setAddress(userData.address);
    setBio(userData.bio);

    setLoading(false);
  };

  //Edit user

  const editUser = async (e) => {
    e.preventDefault();
    try {
      const updateUser = { username, email, age, address, bio };
      await API.patch(`/userupdate/${id}`, updateUser);
      Swal.fire(
        "Details Updated!",
        "User details has been updated successfully",
        "success"
      );
      window.location.reload();
      setShowModal(false);
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error Updating User",
        "An error Occoured while Updating User",
        "error"
      );
    }
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
          <button
            onClick={() => setShowModal(true)}
            className=" bg-amber-400 w-40 my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-amber-500 rounded-md mr-4"
          >
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

      {/* edit Modal */}

      {showModal ? (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
          }}
          className=" fixed inset-0 flex items-center justify-center "
        >
          <div className=" bg-white p-6 rounded-lg shadow-md w-[90%] max-w-lg">
            <h2 className=" text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={editUser}>
              <div className=" mb-3">
                <label>Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="Update Your name"
                  className=" w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className=" mb-3">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  disabled
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Update Your Mail"
                  className=" w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className=" mb-3">
                <label>Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  placeholder="Update your age"
                  className=" w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className=" mb-3">
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Update Your address"
                  className=" w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className=" mb-3">
                <label>Bio</label>
                <textarea
                  rows="3"
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  className=" w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className=" flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className=" px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className=" px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetail;
