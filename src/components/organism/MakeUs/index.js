import React from "react";
import { Arrow } from "../../molekul";
import bgMakeUs from "../../../assets/images/bg_makeUs.png";
import Fade from "react-reveal/Fade";

const MakeUs = () => {
  return (
    <section className="makeus mb-4">
      <div className="title">
        <h2 className="fw-bolder fst-italic">WHAT MAKE US DIFFERENT</h2>
      </div>
      <div className="content">
        <div className="content d-flex align-items-center">
          <Fade lefgt delay={300}>
            <div
              className="img-wrapper d-flex justify-content-end align-items-center"
              style={{
                backgroundImage: `url(${bgMakeUs})`,
              }}
            >
              <Fade left delay={500}>
                <div className="text me-3">
                  <h2 className="fw-bolder fst-italic">10.000</h2>
                  <h3 className="fst-italic">Comunity Leader</h3>
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade right delay={500}>
            <div className="text ms-3" style={{ width: 400 }}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                cum magni aut suscipit sed nam minus, voluptas similique
                repudiandae vel id, accusamus nulla, laboriosam doloribus
                reiciendis commodi. Iure, unde aspernatur?
              </p>
            </div>
          </Fade>
        </div>
        <div className="container">
          <div className="navigation container">
            <Arrow />
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default MakeUs;
