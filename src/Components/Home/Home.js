import React from "react";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import ProductsList from "../ProductsList/ProductsList";

const Home = () =>{
    return(
        <>
        <Navbar></Navbar>
        <Main></Main>
        <ProductsList></ProductsList>
        <Footer></Footer>
        </>
    );
}

export default Home;