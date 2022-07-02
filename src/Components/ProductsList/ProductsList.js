import React from "react";
import { useState, useEffect } from "react";
import "./ProductsList.css";
import axios from "axios";
import Product from "../Product/Product";


const ProductsList = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState({
        low: "",
        high: "",
        star: ""
    })


    useEffect(() => {
        getallProducts();
    }, [])

    async function getallProducts() {
        const result = await axios.get("http://localhost:3000/Products");
        setData(result.data);
        console.log(result.data);
    }

    function oneCategory(arr) {
        if (arr.category === "women's clothing" && arr.category === "men's clothing") {
            arr.category = "fashion";
        }
    }

    data.forEach(oneCategory);

    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        console.log(name);
        console.log(filterData);
        setFilterData({ ...filterData, [name]: value })
    }

    function Products(item) {
        return (<Product key={item?.id} image={item?.image} title={item?.title} price={item?.price} rating={item?.rating} id={item?.id} />);
    }

    function filterByPrice() {
        setData(data.filter((elemt) => {
            if (elemt.price <= filterData.high && elemt.price >= filterData.low) {
                var res = elemt;
            }
            return res;
        }))
    }

    function filterByStar() {
        setData(data.filter((elemt) => {
            if (elemt.rating >= filterData.star) {
                var res =  elemt;
            }
            return res;
        }))
    }

    function resetProducts(){
        getallProducts();
    }

    return (
        <>
            <h1 className="box6">Top Deals of the Day</h1>
                <div className="row justify-content-center" >
                    <div className="col-6" style={{display:"flex"}}>
                        <input type="text" className="form-control"  placeholder="Low Range Price" name="low" onChange={(event) => { handleInput(event) }} />
                        <input type="text" className="form-control"  placeholder="High Range Price" name="high" onChange={(event) => { handleInput(event) }} />
                        <button type="button" className="btn btn-primary" onClick={filterByPrice} >Filter</button>
                    </div>

                    
                    <div className="col-5" style={{display:"flex"}}>
                        <input type="text" className="form-control" placeholder="Star Rating" name="star" onChange={(event) => { handleInput(event) }} />
                        <button type="button" className="btn btn-primary mx-1" onClick={filterByStar}>Filter</button>
                        <button type="button" className="btn btn-primary" onClick={resetProducts} >Reset</button>
                        
                    </div>
                </div>

            <div className="container-fluid mt-5" style={{ padding: "0px 0px" }}>
                <div className="row box5">
                    {data.map(Products)}
                </div>
            </div>

        </>
    );
}

export default ProductsList;