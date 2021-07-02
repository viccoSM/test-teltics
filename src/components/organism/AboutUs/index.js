import React from "react";
import Ttd from "../../../assets/images/united_creative.png";
import Fade from "react-reveal/Fade";

const AboutUs = () => {
  return (
    <Fade>
      <div className="aboutus mt-4">
        <div className="container">
          <p className="regular">
            Bali United Football Club is an Indonesian professional club based
            in Gianyar, Bali. Bali United began operations in 2014 and continues
            to be of the highest tier in the indonesian football competition,
            League 1. The club has a vision to grow the football industry in
            Indonesian through creating an ecosystem consisting at 4Cs namely
            the Club, Community, Corpration and Country.{" "}
            <span>Staying true to this vision</span>, the football club launched
            a sports agency under the name United Creative, to always bring the{" "}
            <span>GAME ON</span> beyond its own club.
          </p>
          <div className="mt-4 mb-4">
            <p className="regular">Warm Regards</p>
            <img src={Ttd} alt="" />
          </div>
          <hr />
        </div>
      </div>
    </Fade>
  );
};

export default AboutUs;
