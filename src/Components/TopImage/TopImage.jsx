import React from "react";
import "./TopImage.css";

function TopImage(props) {
  return (
    <div className="TopImageContainer">
      <div
        className="backgrImage"
        style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
      >
        <div className="block">
          <h2>{props.heading}</h2>
          <p className="imagePr">{props.lorem}</p>
        </div>
      </div>
    </div>
  );
}

export default TopImage;
