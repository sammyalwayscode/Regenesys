import React, { useState } from "react";
import "./Signin.css";
import mysignimage from "../../../assets/hero.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { createUser } from "../../../global/GlobalState";
import LoadingComp from "../../../component/Loading/LoadingComp";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSummit = async (e) => {
    e.preventDefault();
    const endpointURL = "https://onlinebook-lb9p.onrender.com/api/user/signin";
    setLoading(true);

    try {
      const res = await axios.post(endpointURL, { email, password });
      dispatch(createUser(res.data.data));

      Swal.fire({
        title: `Welcome Back`,
        text: "You can access your dashbord",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      }).then(() => navigate("/bookstore"));
    } catch (error) {
      Swal.fire({
        title: `Error Signing In`,
        text: error.message,
        icon: "error",
      });

      setLoading(false);
    }
  };
  return (
    <div className="sign_container">
      {loading && <LoadingComp />}
      <section className="form_section">
        <div className="form_holder">
          <img src="./orange.png" alt="Logo" />
          <h2>Welcome User</h2>
          <p>Please sign Into your account</p>
          <hr />
          <form onSubmit={handleSummit}>
            <main>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </main>
            <main>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </main>
            <button type="submit">Sign In</button>
            <small>
              Don't Have an account?{" "}
              <Link to="/signup">
                <span>Create Account</span>
              </Link>{" "}
            </small>
          </form>
        </div>
      </section>
      <section className="image_section">
        <img src={mysignimage} alt="Login Image" />
      </section>
    </div>
  );
};

export default SignIn;
