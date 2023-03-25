import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../EmptyCart/EmptyCart";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProductsCart from "../ProductsCart/ProductsCart";

const Cart = () => {
  const mydata = useSelector((state) => state.AddIntoCart);
  return (
    <>
      <Navbar></Navbar>
      {mydata.length === 0 && <EmptyCart></EmptyCart>}
      {mydata.length > 0 && <ProductsCart></ProductsCart>}
      <Footer></Footer>
    </>
  );
};

export default Cart;
