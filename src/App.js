import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import OrderPlaced from './Components/OrderPlaced/OrderPlaced';

function App() {
  return (
    <>
    {localStorage.setItem("UserName","Non")}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/product/:id" element={<ProductDetails/>}></Route>
          <Route path="/success" element={<OrderPlaced/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
