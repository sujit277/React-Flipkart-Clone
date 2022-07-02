import React from "react";
import "./Main.css";
import Img2 from "../../Images/Slide1.png";
import Img3 from "../../Images/Slide2.png";
import Img4 from "../../Images/Slide3.jpg";


const Main = () => {
    return (
        <>
            <div className="container d-flex mt-3">
                <div className="item">
                    <div>
                        <img className="img-fluid" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="Content Not Found" />
                        <h6 className="box1">All Products</h6>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <img className="img-fluid" src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="Content Not Found" />
                        <h6 className="box1">Fashion</h6>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <img className="img-fluid" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"  alt="Content Not Found" />
                        <h6 className="box1">Electronics</h6>
                    </div>
                </div>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide mt-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 box2" src={Img2} alt="Content Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 box2" src={Img3} alt="Content Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 box2" src={Img4} alt="Content Not Found" />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Main;