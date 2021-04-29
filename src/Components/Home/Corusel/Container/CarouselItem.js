import React from "react";
import "../../../../App.css";
import './Carousel.css'

function CarouselItem(props) {

  return (
    <div className="carouselMainContainer"> 
      <div

        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
