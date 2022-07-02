import React from "react";
import "./Product.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { AddItem } from "../../State/Actions";

const Product = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12" style={{backgroundColor:"white",marginBottom:"3px",textAlign:"center"}}>
                <img src={props.image} height="60%" width="80%" alt="Please reload"></img>
                <div className="col-12 mt-2 mb-3 " style={{ textAlign: "center" }}>
                    <h5 className="box12" style={{textAlign:"center"}}>{props.title}</h5>
                    <h3>${props.price}</h3>
                    <button className="btn btn-primary mx-3" onClick={()=>dispatch(AddItem(props))} >Add To Cart</button>
                    <button className="btn btn-primary" onClick={() => navigate(`/product/${props.id}`)} >View</button>
                </div>
            </div>
        </>
    );
}

export default Product;