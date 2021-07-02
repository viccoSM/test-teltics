import React from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-outline-primary");
  if (props.isSecondary) className.push("btn-outline-secondary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-small");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "arrow") {
    className.push("btn-outline-dark");
    className.push("arrow");
    if (props.arrow === "right") {
      return (
        <Fade right delay={500}>
          <button
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Fade>
      );
    }
    if (props.arrow === "left") {
      return (
        <Fade left delay={500}>
          <button
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Fade>
      );
    }
  }

  return (
    <Fade>
      <button
        className={className.join(" ")}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </button>
    </Fade>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "arrow"]),
  arrow: propTypes.string,
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  hasShadow: propTypes.bool,
  isExternal: propTypes.bool,
};

export default Button;
