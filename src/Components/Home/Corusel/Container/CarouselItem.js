import React from "react";
import "../../../../App.css";


function CarouselItem(props) {

  return (
    <div className="carouselMainContainer">
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={props.img}
          alt=""
          className="caruselImg"
         
        />
        <div
        className="caruselTitle"
        >
          <h3 className="carH3">{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
