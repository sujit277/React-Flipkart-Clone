import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import "./ProductsCart.css";
import { useDispatch } from "react-redux";
import { EmptyCart } from "../../State/Actions";


const ProductsCart = () => {
    const mydata = useSelector((state) => state.AddIntoCart);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        function GrandTotal() {
            let sum = 0
            for (let i = 0; i < mydata.length; i++) {
                sum = sum + mydata[i].price;
            }
            setTotal(sum);
        }
        GrandTotal();
    }, [mydata]);

    function CartItems(item) {
        return (<CartItem key={item?.id} image={item?.image} title={item?.title} price={item?.price} rating={item?.rating} id={item?.id} />);
    }

    function OrderPlaced() {
        dispatch(EmptyCart());
        navigate("/success");
    }

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#F1F3F6" }}>
                <div className="row justify-content-around">
                    <div className="col-7 mb-5 box25 mt-5" style={{ height: "100%" }}>
                        <h3 className="mt-4 mb-5">My Cart ({mydata.length})</h3>
                        {mydata.map(CartItems)}
                        <button className="btn btn-primary btn-lg mt-5 mb-3" onClick={()=>{dispatch(EmptyCart())}} >EMPTY CART</button>
                        <button className="btn btn-danger btn-lg mt-5 mb-3" style={{ float: "right" }} onClick={OrderPlaced} >PLACE ORDER</button>
                    </div>
                    <div className="col-4 box25 mt-5" style={{ height: "400px" }}>
                        <h3 className="mb-5 mt-4">PRICE DETAILS </h3>
                        <h5 className="mb-3">Prices of Products<span style={{ float: "right" }}>${total}</span></h5>
                        <h5 className="mb-3">Coupon For you <span style={{ color: "green", float: "right" }}>-$10</span></h5>
                        <h5 className="mb-3">Delivery Charges <span style={{ color: "green", float: "right" }}>FREE</span></h5>
                        <h4>Total Amount<span style={{ color: "green", float: "right" }}>${total - 10}</span></h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsCart;