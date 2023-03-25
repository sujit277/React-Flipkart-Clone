import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    getLoginData();
  }, []);

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    console.log(name);
    console.log(Data);
    setData({ ...Data, [name]: value });
  }

  async function getLoginData() {
    const result = await axios.get("http://localhost:3000/Users");
    setLoginData(result.data);
    console.log(result.data);
  }

  function checkLogin() {
    for (let i = 0; i < loginData.length; i++) {
      if (
        loginData[i].email === Data.emailLogin &&
        loginData[i].password === Data.passwordLogin
      ) {
        alert("Logined Successfully");
        localStorage.setItem("UserName", loginData[i].name);
        navigate("/");
      } else {
        alert("Logined Failed");
      }
    }
  }

  return (
    <>
      <div className="container-fluid box22">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-12 mx-auto">
            <form>
              <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
                Welcome to Flipkart
              </h1>
              <div className="mb-3">
                <strong>
                  <label htmlFor="emailLogin" className="form-label">
                    Email
                  </label>
                </strong>
                <input
                  type="text"
                  className="form-control"
                  id="emailLogin"
                  name="emailLogin"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
              </div>
              <div className="mb-3">
                <strong>
                  <label htmlFor="passwordLogin" className="form-label">
                    Password
                  </label>
                </strong>
                <input
                  type="text"
                  className="form-control"
                  id="passwordLogin"
                  name="passwordLogin"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={checkLogin}
                >
                  Login
                </button>
                <button type="button" className="btn btn-primary mx-2">
                  Forgot Password
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2 "
                  onClick={() => navigate("/signup")}
                >
                  {" "}
                  Register New User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
