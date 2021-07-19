import React from "react";
import { Link } from "react-router-dom";

function AboutBtn() {
  return (
    <div className="aboutBtn">
      <Link to="/" className="about-btn">
        Read more
      </Link>
    </div>
  );
}

export default AboutBtn;
