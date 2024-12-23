import React, { useState } from "react";
import "./login.css";
import assets from "../../assets/assets";

const login = () => {

  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="logo" className="logo" />
      <form action="" className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? <input
          type="text"
          placeholder="JohnDoe1975"
          className="form-input"
          required
        /> : null}
        <input
          type="email"
          placeholder="john@example.com"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="*********"
          className="form-input"
          required
        />
        <button type="submit">Sign Up</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms os use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          <p className="login-toogle">Already have an account? <span onClick={() => setCurrState("Login")}>Click Here</span></p>
        </div>
      </form>
    </div>
  );
};

export default login;
