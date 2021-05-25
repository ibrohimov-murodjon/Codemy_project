import React from "react";
import "../../../../App.css";
import "./Carousel.css";

function CarouselItem(props) {
  return (
    <div
      className="carouselMainContainer"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="caruselTitle">
        <h3 className="carH3">{props.title}</h3>
      </div>
    </div>
  );
}

export default CarouselItem;
