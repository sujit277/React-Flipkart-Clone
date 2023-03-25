import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { AddItem } from "../../State/Actions";

const ProductDetails = () => {
  const [productitem, setProductItem] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, [id]);

  async function getProduct(id) {
    const result = await axios.get(`http://localhost:3000/Products/${id}`);
    console.log(result.data);
    setProductItem(result.data);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="conatiner-fluid mb-5 box14">
        <div className="row">
          <div className="col-md-5 box17">
            <img
              className="img box15"
              src={productitem?.image}
              alt="imgicon"
            ></img>
          </div>
          <div className="col-md-7 box16">
            <h3 style={{ marginTop: "80px" }}>{productitem?.title}</h3>
            <h1 style={{ color: "green" }}>Price $ {productitem?.price}</h1>
            <h2 style={{ color: "red" }}>Rating {productitem?.rating}</h2>
            <br></br>
            <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={() => dispatch(AddItem(productitem))}
            >
              Add to Cart
            </button>
            <h1>Description</h1>
            <h5>{productitem?.description}</h5>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
