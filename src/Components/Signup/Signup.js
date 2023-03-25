import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    password: "",
  });

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    console.log(name);
    console.log(Data);
    setData({ ...Data, [name]: value });
  }

  function register() {
    console.log(Data);
    axios.post("http://localhost:3000/Users", Data).then((res) => {
      console.log(res.data);
      alert("User Registered Successfully");
      window.location.reload();
    });
  }

  return (
    <>
      <div className="container-fluid box21">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
            <form>
              <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
                Become Flipkart Member
              </h1>
              <div className="mb-3">
                <strong>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                </strong>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
              </div>

              <div className="mb-3">
                <strong>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </strong>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
              </div>

              <div className="mb-3">
                <strong>
                  <label htmlFor="mobileNo" className="form-label">
                    Mobile No
                  </label>
                </strong>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNo"
                  name="mobileNo"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
              </div>

              <div className="mb-3">
                <strong>
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                </strong>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
              </div>

              <div className="mb-3">
                <strong>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                </strong>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={register}
                >
                  Register
                </button>
                <button type="reset" className="btn btn-primary  mx-2">
                  Reset
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
