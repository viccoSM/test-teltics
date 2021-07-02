import React from "react";
import { Button } from "../../atom";
import { Cards } from "../../molekul";
import Default from "../../../assets/images/default_img.png";
import Fade from "react-reveal/Fade";

const Product = (props) => {
  return (
    <div className="product container">
      <Fade bottom>
        <div className="header product d-flex align-items-center justify-content-between">
          <div className="title">
            <h3 className="fw-bold">{props.title}</h3>
            <p className="large">What we cand do for you</p>
          </div>
          <Button className="btn" style={{ height: 35 }} isPrimary>
            VIEW ALL
          </Button>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-content-between">
          {props.data.map((card) => {
            return (
              <Fade bottom delay={300 * card.id}>
                <Cards
                  style={props.style}
                  key={card.id}
                  imgUrl={card.imgUrl === "" ? Default : card.imgUrl}
                  name={card.name}
                  bgColor={card.bgColor}
                />
              </Fade>
            );
          })}
        </div>
        <hr />
        <hr />
      </Fade>
    </div>
  );
};

export default Product;
