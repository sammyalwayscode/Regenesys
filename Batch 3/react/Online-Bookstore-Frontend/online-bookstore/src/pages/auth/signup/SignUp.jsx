import React from "react";
import "./Signup.css";
import mysignimage from "../../../assets/sign.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign_container">
      <section className="form_section">
        <div className="form_holder">
          <img src="./orange.png" alt="Logo" />
          <h2>Get Started</h2>
          <p>Welcome to OBS - Let's create your account</p>
          <hr />
          <form action="">
            <main>
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </main>
            <main>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </main>
            <main>
              <label>Password</label>
              <input type="password" placeholder="Enter your Password" />
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
