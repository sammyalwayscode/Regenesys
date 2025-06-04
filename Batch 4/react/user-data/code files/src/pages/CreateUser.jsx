import React from "react";

const CreateUser = () => {
  return (
    <div>
      <form className=" bg-white max-w-[600px] mx-auto px-20 py-10 my-10 rounded-sm">
        <h1 style={{ fontFamily: "WDXL Lubrifont TC" }}>Create New User</h1>
        <main className=" flex flex-col my-3">
          <label htmlFor="">
            Name <span className=" text-red-500"> *</span>{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Your name"
            required
            className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
          />
        </main>
        <main className=" flex flex-col my-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Your mail"
            required
            className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
          />
        </main>
        <main className=" flex flex-col my-3">
          <label htmlFor="">Age</label>
          <input
            type="number"
            placeholder="Enter Your age"
            required
            className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
          />
        </main>
        <main className=" flex flex-col my-3">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="Enter Your Address"
            required
            className=" bg-gray-100 h-10 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
          />
        </main>
        <main className=" flex flex-col my-3">
          <label htmlFor="">Bio</label>
          <input
            type="text"
            placeholder="Enter Your bio"
            required
            className=" bg-gray-100 h-20 px-2 border rounded-sm border-gray-300 focus:outline focus:outline-purple-300"
          />
        </main>
        <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm py-2 cursor-pointer hover:bg-purple-900 rounded-md">
          Create New User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
