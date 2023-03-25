import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <div className="box11 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">ABOUT FLIPKART</h5>
            <p className="box13">Who We Are</p>
            <p className="box13">Blog</p>
            <p className="box13">Work with Us</p>
            <p className="box13">Report Fraud</p>
          </div>
          <div className="box11 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">FLIPKARTVERSE</h5>
            <p className="box13">Flipkart</p>
            <p className="box13">Delivering India</p>
            <p className="box13">Hyperpure</p>
            <p className="box13">Flipkartland</p>
          </div>
          <div className="box11 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">FOR SELLERS</h5>
            <p className="box13">Partner With us</p>
            <p className="box13">Apps for Us</p>
            <p className="box13">Flipkart For Work</p>
          </div>
          <div className="box11 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">LEARN MORE</h5>
            <p className="box13">Privacy</p>
            <p className="box13">Security</p>
            <p className="box13">Terms</p>
            <p className="box13">Sitemap</p>
          </div>
          <div className="box11 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">SOCIAL LINKS</h5>
            <p className="box13">Instagram</p>
            <p className="box13">Facebook</p>
            <p className="box13">Twitter</p>
          </div>
          <hr></hr>
          <p style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2022 © Flipkart™
            Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
