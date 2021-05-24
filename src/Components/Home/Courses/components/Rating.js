import React from "react";
import PropTypes from "prop-types";

function Rating({ value, color }) {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: color, fontSize: "1.2rem", margin: "1rem 0" }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color, fontSize: "1.2rem", margin: "1rem 0" }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color, fontSize: "1.2rem", margin: "1rem 0" }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color, fontSize: "1.2rem", margin: "1rem 0" }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color, fontSize: "1.2rem", margin: "1rem 0" }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    </div>
  );
}

// so default value will be yellow for stars
Rating.defaultProps = {
  color: "#f8e825",
};

// giving some required argument and type for props
Rating.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
