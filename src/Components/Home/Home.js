import React from "react";
import Footer from "../Footer/Footer";
import OffersSlide from "../OffersSlide/OffersSlide";
import Navbar from "../Navbar/Navbar";
import ProductsList from "../ProductsList/ProductsList";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <OffersSlide></OffersSlide>
      <ProductsList></ProductsList>
      <Footer></Footer>
    </>
  );
};

export default Home;
