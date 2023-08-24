import React, { useState } from "react";
import "./Login.scss";
import LoginImage from "../../../assets/images/loginPageImage.png";
import PasswordHide from "../../../assets/icons/password-hide.svg";

import Facebook from "../../../assets/icons/facebook.svg";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../../../redux/action/Action";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    
      var data = new FormData();
    data.append("username", username);
    data.append("password", password);

    let body = {data,navigate}

    dispatch(LoginAPI(body));
   
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <div className="LoginImage-wrap">
          {/* <img src={LoginImage} alt="" /> */}
          {/* fadetext */}
          {/* <img src={LLogo} alt="" /> */}
          <h1>Latitude Technolabs</h1>
        </div>
      </div>
      <div className="login-section">
        <div className="login-wrap">
          <div className="loginText-wrap">
            <h1>Log in</h1>
          </div>
          <div className="email-wrap">
            <p>User Name</p>
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>

          <div className="email-wrap">
            <div className="yourpass-hide">
              <p>Password</p>
              <div className="hide-wrap">
                <img src={PasswordHide} alt="" />
                <p>Hide</p>
              </div>
            </div>
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="login-btn-wrap">
            <button
              className="login-btn"
              onClick={() => {
                handleSubmit();
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="dontHaveAcccount-wrap">
          <p onClick={() => navigate("/register")}>
            Don't have an account? Register
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
