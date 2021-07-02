import React from "react";
import { Logo } from "../../atom";
import instagram from "../../../assets/images/instagram.png";
import copyright from "../../../assets/images/copyright.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex justify-content-between pt-5 pb-4">
        <div className="address">
          <Logo />
          <p className="mt-3 reguler fw-bolder">UNITED CREATIVE HEAD OFFICE</p>
          <p className="small">
            Wisma Bali United, Jalan Panjang No. 29, <br />
            Kedoya Selatan, Jakarta Barat <br />
            (0821) 12345678
          </p>
        </div>
        <div className="product mt-4">
          <p className="small">
            Product <br />
            Services <br />
            Works <br />
            Client
          </p>
        </div>
        <div className="AboutUs mt-4">
          About Us <br />
          Contact Us <br />
          Career <br />
        </div>
        <div className="copyright text-end mt-4">
          <img src={instagram} style={{ width: 38 }} alt="" />
          <p className="small mt-3">
            COPYRIGHT <img src={copyright} style={{ width: 14 }} alt="" /> 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
