import React, { useState } from "react";
import "./Signup.css";
import mysignimage from "../../../assets/sign.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingComp from "../../../component/Loading/LoadingComp";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSummit = async (e) => {
    e.preventDefault();
    const endpointURL = "https://onlinebook-lb9p.onrender.com/api/user/signup";
    setLoading(true);

    try {
      await axios.post(endpointURL, { username, email, password });
      Swal.fire({
        title: `Welcome ${username}`,
        text: "We are glad to have you join our platform",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      }).then(() => navigate("/signin"));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: `Oops, An error Occoured`,
        text: error.res7ponse.data.message,
        // text: error.message,
        icon: "error",
      });
    }
  };
  return (
    <div className="sign_container">
      {loading && <LoadingComp />}
      <section className="form_section">
        <div className="form_holder">
          <img src="./orange.png" alt="Logo" />
          <h2>Get Started</h2>
          <p>Welcome to OBS - Let's create your account</p>
          <hr />
          <form onSubmit={handleSummit}>
            <main>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </main>
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
            <button type="submit">Sign Up</button>
            <small>
              Already Have an account?{" "}
              <Link to="/signin">
                {" "}
                <span>Log In</span>{" "}
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

export default SignUp;
