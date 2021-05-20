import React from "react";

function AboutText({ head, parag }) {
  return (
    <div className="about-text">
      <p className="about-txt1">{head}</p>
      <p className="about-txt2">{parag}</p>
    </div>
  );
}

export default AboutText;
