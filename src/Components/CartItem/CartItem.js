import React from "react";
import { EmptyById } from "../../State/Actions";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="col mb-5">
                <div className="row">
                    <div className="col-4">
                        <img src={props.image} height="200px" width="90%" alt="Please Reload"></img>
                    </div>
                    <div className="col-8">
                        <h5>{props.title}</h5>
                        <h6>Delivery by Mon Jun 13 | Free $<span style={{ textDecoration: "line-through" }}>40</span></h6>
                        <h5 className="mb-5">Price ${props.price}</h5>
                        <button className="btn btn-primary mx-3">SAVE FOR LATER</button>
                        <button className="btn btn-primary" onClick={()=>dispatch(EmptyById(props.id))} >REMOVE</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;