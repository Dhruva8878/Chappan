import { useDispatch } from "react-redux";
import "./SignUp.css";
import "./Login.css";
import { useState } from "react";
import { addSignupData } from "../redux/signup/Signupaction";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const state = {
    Name: name,
    Password: password,
    Email: email,
  };

  const handleData = (e) => {
    e.preventDefault();
    alert("SignUp Successfull");
    dispatch(addSignupData(state));
    navigate("/login");
  };

  return (
    <>
      <div className="signbox">
        <h2>Signup</h2>

        <form onSubmit={(e) => handleData(e)}>
          <div>
            <h4>Enter Name</h4>
            <input
              required
              className="formlog"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
          </div>

          <div>
            <h4>Enter Email</h4>
            <input
              required
              className="formlog"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            />
          </div>

          <div>
            <h4>Enter Password</h4>
            <input
              required
              className="formlog"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />
          </div>

          <input className="loginbtn" type="submit" value={"continue"} />
        </form>
        <div>
          <p>already have account ? </p> <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </>
  );
};
