import React from "react";
import "./OrderPlaced.css";
import { useNavigate } from "react-router-dom"; 
import Img7 from "../../Images/Deliverboy.jpg";

const OrderPlaced = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid box27 ">
                <div className="col">
                    <div className="row" style={{height:"50px"}}></div>
                    <h1 style={{textAlign:"center"}}>Thank you for the Order</h1>
                    <div className="col-5 mx-auto" style={{height:"20px"}}></div>
                    <div className="col-5 mx-auto">
                        <img className="img-fluid" src={Img7}  alt="Please Reload"/>
                            <h1 style={{color:"green",textAlign:"center"}} >Order Placed Successfully</h1>
                            <div className="col-4 mx-auto">
                                <button onClick={() => navigate("/")} className="btn btn-primary mb-3">Back To Home</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderPlaced;