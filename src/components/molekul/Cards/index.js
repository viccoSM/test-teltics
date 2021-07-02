import React from "react";

const Cards = (props) => {
  return (
    <div
      className="card mb-4"
      style={{
        backgroundColor: `${props.bgColor}`,
        backgroundImage: `url(${props.imgUrl})`,
        backgroundSize: `${props.style}`,
      }}
    >
      <div className="card-featured">
        <div className="meta-wrapper">
          <p className="large fw-bold text-uppercase">{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
