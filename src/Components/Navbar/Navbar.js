import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img1 from "../../Images/240.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const mystate = useSelector((state) => state.AddIntoCart);

  function logOut() {
    alert("You have been Successfully Logout");
    localStorage.setItem("UserName", "Non");
    navigate("/");
  }

  function check() {
    if (localStorage.getItem("UserName") !== "Non") {
      return (
        <>
          <li className="nav-item navitems">
            <button type="button" className="btn btn-light btncst">
              <strong>{localStorage.getItem("UserName")}</strong>
            </button>
          </li>
          <li className="nav-item navitems">
            <button className="nav-link nvbtn" onClick={logOut}>
              <strong className="navicon">Logout</strong>
            </button>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item navitems">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="btn btn-light btncst"
          >
            <strong>Login</strong>
          </button>
        </li>
      );
    }
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ padding: "0px 0px", backgroundColor: "#2874F0" }}
      >
        <div className="container-fluid" style={{ padding: "0px 0px" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <img className="iconImage" src={Img1} alt="icon"></img>
              <form className="d-flex searchbar">
                <input
                  className="form-control me-2 searchbarlength"
                  type="search"
                  placeholder="Search for Products and brand more"
                  aria-label="Search"
                />
              </form>
              {check()}
              <li className="nav-item navitems">
                <a className="nav-link" href="/login">
                  <strong className="navicon mobileSize">Login</strong>
                </a>
              </li>
              <li className="nav-item navitems">
                <button className="nav-link nvbtn">
                  <strong className="navicon">More</strong>
                </button>
              </li>
              <li className="nav-item navitems">
                <button
                  className="nav-link nvbtn"
                  onClick={() => navigate("/cart")}
                >
                  <strong className="navicon cartbtn">
                    Cart
                    <span>
                      <div
                        style={{ fontSize: "10px" }}
                        className="badge bg-danger"
                      >
                        {mystate.length}
                      </div>
                    </span>
                  </strong>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
