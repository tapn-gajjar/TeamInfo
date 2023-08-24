import React, { useState } from "react";
import "../SignUp/signUp.scss";
import PasswordHide from "../../../assets/icons/password-hide.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignUpAPI } from "../../../redux/action/Action";

const SignUP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [value, setValue] = useState({
    // userType:"",
    username:"",
    email:"",
    password:""
  });

  const handleSubmit =()=>{
    console.log("data",value)
    var data= new FormData()
    // data.append("userType",data.userType)
    data.append("username",value.username)
    data.append("email",value.email)
    data.append("password",value.password)

    let body = {data,navigate}
    dispatch(SignUpAPI(body))
  }

  return (
    <div className="signUP-container">
      <div className="signUp-section">
        <div className="signUp-box">
          <div className="signUpText-wrap">
            <h1>SignUp</h1>
          </div>
          {/* <div className="select-user-wrap ">
            <p>Select User Type</p>
            <select
              name=""
              className="select-wrap"
              onChange={(e) => {setData({...data,userType:e.target.value})}}
              placeholder="Select Option"
            >
              <option value="" selected disabled>Select Option</option>
              <option value="1" className="select-option">
                hello
              </option>
              <option value="2" className="select-option">
                hello2
              </option>
              <option value="3" className="select-option">
                helllo3
              </option>
            </select>
          </div> */}
          <div className="email-wrap">
            <p>User Name</p>
            <input type="text" id="username" onChange={(e) => {setValue({...value,username:e.target.value})}} placeholder="" required />
          </div>
          <div className="email-wrap">
            <p>Email</p>
            <input type="email" id="email" onChange={(e) => {setValue({...value,email:e.target.value})}} placeholder="" required />
          </div>
          <div className="email-wrap">
            <div className="yourpass-hide">
              <p>Password</p>
              <div className="hide-wrap">
                <img src={PasswordHide} alt="" />
                <p>Hide</p>
              </div>
            </div>
            <input type="password" id="password" placeholder="" required  onChange={(e) => {setValue({...value,password:e.target.value})}}/>
          </div>
          <div className="signUP-btn-wrap">
            <button className="signUp-btn"  onClick={() => {
                handleSubmit();
              }}>Sign Up</button>
          </div>
        </div>

        <div className="backToLogin-wrap">
          <p onClick={() => navigate("/portfolio")}>Already user? Log In</p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
