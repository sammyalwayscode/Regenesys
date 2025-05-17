import React, { useState } from "react";
import "./Signup.css";
import mysignimage from "../../../assets/sign.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://onlinebook-lb9p.onrender.com/api/user/signup",
      formData
    );
    console.log(res);
    Swal.fire({
      title: "Sign Up Successfull",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  console.log(formData);
  return (
    <div className="sign_container">
      <section className="form_section">
        <div className="form_holder">
          <img src="./orange.png" alt="Logo" />
          <h2>Get Started</h2>
          <p>Welcome to OBS - Let's create your account</p>
          <hr />
          <form onSubmit={handleSubmmit}>
            <main>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                name="username"
                onChange={handleChange}
              />
            </main>
            <main>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </main>
            <main>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </main>
            <button>Sign Up</button>
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
