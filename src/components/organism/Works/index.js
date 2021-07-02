import React from "react";
import { Button } from "../../atom";
import { Arrow } from "../../molekul";

const Works = (props) => {
  return (
    <section className="works">
      <div className="title">
        <h2 className="fw-bold fst-italic">OUR WORKS</h2>
      </div>
      <div className="container d-flex justify-content-between align-items-center">
        <Button type="arrow" arrow="left" className="btn" />
        <div className="content d-flex flex-wrap justify-content-between">
          {props.data.map((work, index) => (
            <div
              key={index}
              className="card-img"
              style={{ backgroundImage: `url(${work.imgUrl})` }}
            >
              <p className="small fw-bold text-uppercase">{work.name}</p>
            </div>
          ))}
        </div>
        <Button type="arrow" arrow="right" className="btn" />
      </div>
      <hr />
    </section>
  );
};

export default Works;
