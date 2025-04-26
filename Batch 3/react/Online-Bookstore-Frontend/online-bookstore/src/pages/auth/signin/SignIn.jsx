import React from "react";
import "./Signin.css";
import mysignimage from "../../../assets/hero.jpg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign_container">
      <section className="form_section">
        <div className="form_holder">
          <img src="./orange.png" alt="Logo" />
          <h2>Welcome User</h2>
          <p>Please sign Into your account</p>
          <hr />
          <form action="">
            <main>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </main>
            <main>
              <label>Password</label>
              <input type="password" placeholder="Enter your Password" />
            </main>
            <button>Sign In</button>
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
