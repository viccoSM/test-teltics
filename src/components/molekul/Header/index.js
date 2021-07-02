import React, { useState } from "react";

import menu from "../../../assets/images/icon-menu.svg";
import { Logo } from "../../atom";
import Fade from "react-reveal/Fade";
import { Button } from "../../atom";

const Header = () => {
  const [Down, setDown] = useState(false);

  return (
    <nav className="navbar">
      <Logo />
      <form action="" className="d-flex">
        {Down === true ? (
          <form className="navbar">
            <div className="items">
              <Button className="btn" onClick={() => setDown(false)}>
                x
              </Button>
              <ul>
                <li>
                  <Button className="btn">About Us</Button>
                </li>
                <li>
                  <Button className="btn">Product</Button>
                </li>
                <li>
                  <Button className="btn">Services</Button>
                </li>
              </ul>
            </div>
          </form>
        ) : (
          <Button className="close btn" onClick={() => setDown(true)}>
            <img src={menu} style={{ width: 32 }} alt="" />
          </Button>
        )}
      </form>
    </nav>
  );
};

export default Header;
