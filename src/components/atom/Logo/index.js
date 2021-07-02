import React from "react";
import logo from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      style={{ width: 48, filter: "brightness(0) invert(1)" }}
      alt="United Creative"
    />
  );
};

export default Logo;
