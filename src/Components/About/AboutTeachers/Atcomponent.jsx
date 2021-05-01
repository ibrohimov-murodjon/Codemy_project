import React from "react";
import "./AboutT.css";
const Plcomponent = ({ title, imguri, descibetion, titleBottom }) => {
  return (
    <div className="At-card">
      <div className="At-circle-box">
        <div className="At-circle"><img src={imguri} alt="Asdasdasd" className="circle-image"/></div>
      </div>
      <h1 className="At-card-title">{title}</h1>
      <span className="At-card-about-text">{titleBottom}</span>

      <p className="At-card-about-text">{descibetion}</p>
      <br />
    </div>
  );
};

export default Plcomponent;
