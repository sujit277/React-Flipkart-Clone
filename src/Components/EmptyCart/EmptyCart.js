import React from "react";
import "./EmptyCart.css";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  const Img11 =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <>
      <div className="container mb-5">
        <h3 className="card-title mt-5">My Cart</h3>
        <div style={{ textAlign: "center" }}>
          <img className="box24" src={Img11} alt="Not Found" />
          <h1>Your Cart is Empty</h1>
          <h6>Add items to it Now</h6>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
