import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { createUser } from "../../global/action";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowed] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endPointURL = "http://localhost:2039/api/user/signin";

    try {
      const value = { email, password };
      const res = await axios.post(endPointURL, value);
      console.log(value);
      dispatch(createUser(res.data.data));

      Swal.fire({
        title: `Welcome ${res.data.data.username}`,
        text: "You can now make purchase",
        icon: "success",
      }).then(() => navigate("/product"));
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        title: `${error.response.data.message}`,
        text: error,
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassowed(e.target.value);
              }}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
