import React from "react";
import { Button } from "../../atom";

const Arrow = () => {
  return (
    <div className="d-flex justify-content-between">
      <Button className="btn" type="arrow" arrow="left" />
      <Button className="btn" type="arrow" arrow="right" />
    </div>
  );
};

export default Arrow;
