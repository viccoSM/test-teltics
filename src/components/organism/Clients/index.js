import React from "react";
import { Button } from "../../atom";
import { Arrow } from "../../molekul";

const Clients = (props) => {
  return (
    <section className="clients mb-5">
      <div className="container">
        <div className="header d-flex justify-content-between align-items-center">
          <div className="title-clients">
            <h3 className="fw-bold">Clients</h3>
            <p className="large">Our happy client</p>
          </div>
          <Button className="btn" isPrimary>
            VIEW ALL
          </Button>
        </div>
        <div className="body-clients mt-4 d-flex justify-content-between align-items-center">
          <Button className="btn" type="arrow" arrow="left" />
          <div className="items">
            {props.data.map((client, index) => {
              return (
                <img
                  key={`product-${index}`}
                  className="img-client"
                  src={client.imgUrl}
                  alt={client.name}
                  style={{ width: 130 }}
                />
              );
            })}
          </div>
          <Button className="btn" type="arrow" arrow="right" />
        </div>
        <div className="start-project text-center mt-5">
          <p className="subtitle fst-italic">
            LETS CREATE <span className="fw-bold">CREATIVE PROJECT</span>
          </p>
          <Button className="btn" isPrimary>
            START PROJECT WITH US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
