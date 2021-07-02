import React from "react";
import { Button } from "../../atom";
import { Header } from "../../molekul";
import Fade from "react-reveal/Fade";

const Hero = (props) => {
  return (
    <div
      className="jumbotron"
      style={{ backgroundImage: `url(${props.data.imgUrl})` }}
    >
      <div className="container">
        <Header />
        <div className="content ms-3">
          <Fade>
            <h1 className="fw-bolder fst-italic">
              28 MILLION <br />
              COMMUNITY
            </h1>
          </Fade>
          <Button className="btn px-4" isSecondary>
            LETS WORK WITH US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
