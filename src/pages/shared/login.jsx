import React, { useState } from "react";
import "./login.css";
import assets from "../../assets/assets";
import { signup, Login } from "../../config/firebase";

const login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  //handling username, password & email
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign Up") {
      signup(userName, email, password);
    } else {
      Login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="logo" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="JohnDoe1975"
            className="form-input"
            required
          />
        ) : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="john@example.com"
          className="form-input"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="*********"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms os use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-toogle">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login Now</span>
            </p>
          ) : (
            <p className="login-toogle">
              Create an Account{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default login;
